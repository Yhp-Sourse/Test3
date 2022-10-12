<template>
    <div id="v_deviceOnlineInfo">
        <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
            <el-aside width="250px">
                <treeSStation  :IsCheckBox='true' @checkedNodes="getSearchStations"></treeSStation>
            </el-aside>
            <el-container>
                <el-header>              
                    <div class="search">
                        <el-form :inline="true" class="demo-form-inline">
                        <el-form-item label="报表类型：">
                              <rateCascaderCommon :defaultProp='prop' @selectOptionEvent='selectOptionEvent' :ReportCode='rptType' :checkStrictly='checkStrictly'></rateCascaderCommon>    
                         </el-form-item>
                         
                         <el-form-item label="巡检时间段：">
                                <el-date-picker
                                               v-model="queryparam.startDate"
                                               type="date"   
                                                :clearable=false                                          
                                               value-format="yyyy-MM-dd"
                                               placeholder="请选择日期">
                                    </el-date-picker>
                                 至
                                <el-date-picker
                                               v-model="queryparam.endDate"
                                               type="date"
                                               :clearable=false
                                               value-format="yyyy-MM-dd"
                                               placeholder="请选择日期">
                                    </el-date-picker>
                         </el-form-item>
                         
                         <el-form-item label="是否解锁:">
                               <el-select v-model='queryparam.lockStatus'   placeholder='请选择解锁状态' style="width: 100%;">
                                       <el-option v-for='item in YwFromLockStatusOptions' :key='item.value' :label='item.label' :value='item.value'></el-option>
                                </el-select>
                         </el-form-item>  


                            <el-form-item class="btn">
                                <el-button type="primary" v-has="'asyscToAirData_handleSearch'"  icon="el-icon-search"   @click="getList();">查询</el-button>

                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="tools">
                        
                    </div>
                </el-header>
                
                <el-main>
                    <rate-table :list="list"
                        @handleSelectionChange="handleSelectionChange"
                        @sizeChange="getSizeChange"
                        @currentPage="getCurrentPage"
                        :options="options"
                        :columns="columns"
                        :operates="operates"
                        :pageShow="page.pageShow"
                        :total="page.total"
                    ></rate-table>
                </el-main>
            </el-container>
        </el-container>
       
    </div>



</template>
<script>
import treeSStation from '../common/treeSStation'
import rateTable  from '../common/rateTable'    //引入table组件
import rateSelect from '../common/rateSelect';
import rateCascader from '../common/rateCascader' //引入rateCascader组件
import rateCascaderCommon from '../common/rateCascaderCommon';

export default {
    name:'v_deviceOnlineInfo',
    data() {   
      return {     
        checkStrictly:true,
        rptType:'',         
        usrId:'',
        digTitle:'',
        CheckData:[],              // [{sStation:'SS4301051'},{sStation:'SS4301051'}]
        dialogVisible: false,
        dialogVisibleview1: false,        
        rules:{},
      
        queryparam:{
            startDate:'',
            endDate:'',
            chooseStationIds:'',
            ReportCode:'',
            lockStatus:-1,
        },
         
             //运维表单解锁状态
        YwFromLockStatusOptions: [
                {
                  value: -1,
                  label: '全部'
                },
                {
                  value: 0,
                  label: '已解锁'
                },     
                {
                  value: 1,
                  label: '未解锁'
                }  
        ], 
        


         prop:{
                value: "id",
                label: 'text',
                children: 'children',
                expandTrigger: "hover",
                emitPath: false
            },

        listview:[],//详情页数据
        page:{   //关于页码的相关参数
              pageShow:true,  //是否显示
              total:0,        //总条数
              pageSize:10,    //每页条数
              pageNo:1,       //第几页
            },
            handleSelection:[],  //checkbox选中行
            list:[],// table数据
            options: {  // table样式参数
              stripe: true, // 是否为斑马纹 table
              loading: false, // 是否添加表格loading加载动画
              highlightCurrentRow: true, // 是否支持当前行高亮显示
              mutiSelect: false, // 是否支持列表项选中功能
            }, // table 的参数结束
          columns: [
          {prop:'doCount',label: '是否解锁',align: 'center',isShow:true,
              formatter(row, column, cellValue){
             if(row.doCount==2){   //表示被锁定
                 return `<i class="lock" style="vertical-align: super;font-size: 30px;"><svg t="1614132616909" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6593" width="32" height="32"><path d="M721.92 493.24032l0-74.26048c0 0-0.02048-173.21984-179.2-173.21984-179.17952 0-179.2 173.21984-179.2 173.21984l0 74.26048L286.72 493.24032 286.72 839.68l512 0L798.72 493.24032 721.92 493.24032zM568.32 684.3392l0 81.1008-51.2 0 0-81.1008C501.88288 675.75808 491.52 659.968 491.52 641.69984c0-27.3408 22.9376-49.50016 51.2-49.50016 28.2624 0 51.2 22.13888 51.2 49.50016C593.92 659.968 583.55712 675.75808 568.32 684.3392zM670.72 493.21984l-256 0 0-73.91232c0.28672-20.72576 7.80288-124.04736 128-124.04736 120.17664 0 127.71328 103.3216 128 123.71968L670.72 493.21984z" p-id="6594" fill="#d81e06"></path></svg></i>`;
             }else{
                 return `<i class="unlock" style="vertical-align: super;font-size: 30px;"><svg t="1614130652256" class="icon" viewBox="0 0 1448 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3130" width="32" height="32"><path d="M868.057993 437.736921H419.565235c-32.212778 0-58.320892 26.105681-58.320892 58.322108v425.769637c0 32.27481 26.108114 58.382924 58.320892 58.382925h606.019618c32.21886 0 58.266158-26.108114 58.266158-58.382925v-425.769637c-0.004865-32.21886-26.103249-58.322109-58.326973-58.322108H868.057993z m-112.727696 282.304548L755.329081 813.013843c0 4.152485-3.437295 7.655461-7.655461 7.655461h-50.133903c-4.270468 0-7.711411-3.502975-7.711412-7.655461v-92.972374c-23.553861-12.045127-39.868239-36.193764-39.868239-64.49732 0-40.045821 32.513207-72.618627 72.563893-72.618627 40.10542 0 72.623492 32.572806 72.623493 72.618627 0.053518 28.303555-16.259644 52.450976-39.817155 64.49732z" p-id="3131" fill="#1afa29"></path><path d="M932.254884 286.08241c0-80.218138 65.323194-145.541332 145.541332-145.541332 80.216921 0 145.424566 65.323194 145.424566 145.541332V437.738137h90.601784V282.229137c0-130.235275-105.850674-236.1419-236.083517-236.1419-130.234059 0-236.201499 105.906624-236.201499 236.1419V437.738137h90.717334V286.08241z" p-id="3132" fill="#1afa29"></path></svg></i>`;
             }
          }
          },  
          {prop:'city',label: '城市',align: 'center',isShow:true},
          {prop:'sStationName',label:'站点名称',align:'center',isShow:true,width:150},
          {prop:'show_TaskCategoryName',label:'任务类别',align:'center',isShow:true},
          {prop: 'inspectionSTime',label: '时间周期',align: 'center',isShow:true,width:200,formatter:this.timePeriod},
          {prop: 'name',label: '表单名称',align: 'center',isShow:true,width:250,
             formatter(row, column, cellValue){
                 return `<div>${row.name}</div>`;
             }
          },
          {prop: 'show_Status',label: '表单状态',align: 'center',isShow:true,width:150},
          {prop: 'createUsr',label: '运维人员',align: 'center',isShow:true},
          {prop: 'auditeUsr',label: '审批人',align: 'center',isShow:true},         
          {prop: 'inspectionSTime',label: '巡检开始时间',align: 'center',isShow:true,width:200,formatter:this.formatterTime},
        ],// 需要展示的列
            operates: {   //操作栏
              width:200,      
              fixed: 'right',
              list: [
                   {
                      id:'1',
                      label: '解锁',
                      bgColortype:'success',
                      show: true,   //是否显示按钮                      
                      className:'success', //样式类名
                      hasbutton:'ywFourthInspectionTask_handleDetail',
                      disabled: false,   //是否禁用按钮 默认是danger的禁用样式
                      method: (index, row) => {
                           if(row.doCount==2){
                              this.handleUnLock(index, row)
                           }else{
                               this.$message({
                                message: "此表单已经解锁过了,无法在进行解锁！",
                                type: "warning"  });
                                return;
                           }
                      }
                    }
                  ]
                 }, // 列操作按钮
        } //return ending
    },

    methods:{  
        //解锁
        handleUnLock(index, row){
            var self = this;
               this.$confirm('确认解锁？').then(function () {
                  self.UnLock(row.id);
                }).catch(function () {
            });
        },

        UnLock(id){
           var self = this;
           this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_Rpt/GetYwFormUnLock?id=' + id
            }).then(res => {
                if(res.status==200){
                    self.getList();
                    self.$message({
                        message: res.data.message,
                        type: res.data.type  //warning,success,info,error
                    });
                }
          }).catch(error => {
            console.log(error);
          });
        },

       
       //组件下拉变换
        selectOptionEvent(val){
            var self = this;
            self.queryparam.ReportCode=val;
        },


     //判断当前日期为当年第几周
      getWeekOfYear(today) {
        var newday = new Date(today);
        if (newday.getHours() == 0 && newday.getMinutes() == 0 && newday.getSeconds() == 0) {
            today = new Date(newday.getTime() + 1000);
        }

        var firstDay = new Date(today.getFullYear(), 0, 1);
        var dayOfWeek = firstDay.getDay();
        var spendDay = 1;
        if (dayOfWeek != 0) {
            spendDay = 7 - dayOfWeek + 1;
        }
        firstDay = new Date(today.getFullYear(), 0, 1 + spendDay);
        var d = Math.ceil((today.valueOf() - firstDay.valueOf()) / 86400000);
        var result = Math.ceil(d / 7);
        return result + 1;
      },

       //获取时间周期
      timePeriod(row,column,cellValue){
            var InspectionDesc = "";
            var val = row[column.prop];
            if(row.createTime==null){
                return "";
            }else{              
                return  this.timePeriodDetail(row.cycleType, row.inspectionSTime);
            }
        },

      timePeriodDetail(timeType, val){
            var today = new Date(val);
            var inspectionDesc = "";
            switch(timeType){
               case 1:  //周
                  inspectionDesc = today.getFullYear() + "年第" + this.getWeekOfYear(today) + "周";
                  break;
               case 2:  //月
               case 6:
                inspectionDesc = today.getFullYear() + "年第" + parseInt(parseInt(today.getMonth()) + 1) + "月";
                break;
               case 3:   //季
                  var Month = today.getMonth() + 1;
                  var Quarter = "";
                  if (Month <= 3) {
                      Quarter = '一季度'+Month+'月';
                  }
                  else if (Month <= 6) {
                      Quarter = '二季度'+Month+'月';
                   }
                   else if (Month <= 9) {
                       Quarter = '三季度'+Month+'月';
                   }
                   else if (Month <= 12) {
                       Quarter = '四季度'+Month+'月';
                    }
                  inspectionDesc = today.getFullYear() + "年第" + Quarter;
                  break;
               case 4:  //半年
                  var Month = today.getMonth();
                  if (Month / 6 <= 1) {
                    inspectionDesc = today.getFullYear() + "年" + "上半年";
                  }
                  else if (Month / 6 > 1) {
                    inspectionDesc = today.getFullYear() + "年" + "下半年";
                  }
                 break;
               case 5:
                 inspectionDesc = today.getFullYear() + "年";
                 break;
               default: 
                  inspectionDesc = "";
                break; 
            }
            return  inspectionDesc;
      },

        //格式化时间格式
        formatterTime(row,column,cellValue){
            var val = row[column.prop];
            if(val==null){
                return val;
            }else{
                return this.filterDate(val);
            }
        },

        //格式化时间：yyyy-MM-dd HH:mm:ss
        filterDate(t){
            const date = new Date(t);
            const y =date.getFullYear();
            const M = (date.getMonth()+1).toString().padStart(2,0);
            const d = date.getDate().toString().padStart(2, 0);
            const h = date.getHours().toString().padStart(2, 0);
            const mm = date.getMinutes().toString().padStart(2, 0);
            const s = date.getSeconds().toString().padStart(2, 0);
            return y + '-' + M + '-' + d + ' ' + h + ':' + mm + ':' + s;
        },

      //获取勾选的站点
      getSearchStations(obj){
            var self = this;
            var configIds='';
            if(obj!=null)
            {  
               obj.forEach(o=>{                   
                    configIds += o.sStation +',';
               });     
               self.queryparam.chooseStationIds =configIds;    
            }         
      },
       
       getNowTime() {
         var now = new Date();
         var year = now.getFullYear(); //得到年份
         var month = now.getMonth(); //得到月份
         var date = now.getDate(); //得到日期
         month = month + 1;
         month = month.toString().padStart(2, "0");
         date = date.toString().padStart(2, "0");      
         var defaultDate = `${year}-${month}-${date}`;   
         //本年的1月1号
         var myDate =new Date();
         myDate.setDate(1);
         var myDateyear = myDate.getFullYear(); //得到年份
         var myDatemonth = '01'; //得到月份
         var myDatedate = myDate.getDate(); //得到日期
         myDatedate = myDatedate.toString().padStart(2, "0");     
         var beforedefaultDate = `${myDateyear}-${myDatemonth}-${myDatedate}`; 
         this.$set(this.queryparam, "startDate", beforedefaultDate);     
         this.$set(this.queryparam, "endDate", defaultDate);       
        },

      handleSelectionChange (val) { //checkbox选中的数据val 是选中行的所有数组
         this.handleSelection=val;
      },

      getSizeChange(val){  //table组件发射的方法 用于改变每页数据量
            this.page.pageSize=val;
            //这下面需要重新调用 获取列表页的函数
            this.getList();
      },

      getCurrentPage(val){  //table组件发射的方法  用于改变当前所在页码
            this.page.pageNo=val;
            //这下面需要重新调用 获取列表页的函数
            this.getList();
      },

        //查询
      getList(obj){
            var self = this;
            //判断开始时间和结束时间
            if(self.queryparam.startDate > self.queryparam.endDate){
                    self.$message({
                    message: "查询开始时间不能大于查询结束时间!",
                    type: "warning"  });
                    return;
            }          
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_Rpt/GetAbnormalFormRptList?pagesize=' + self.page.pageSize + '&pageindex=' + self.page.pageNo+'&startDate=' 
                + self.queryparam.startDate+ '&endDate=' + self.queryparam.endDate +'&lockStatus='+self.queryparam.lockStatus+'&reportCode='+self.queryparam.ReportCode+'&SStations=' + self.queryparam.chooseStationIds
            }).then(res => {
                if(res.status==200){
                    self.list=res.data.data;
                    self.page.total = res.data.count;
                    //self.options.loading=false;
                }
          }).catch(error => {
            console.log(error);
          });
      }, 

    },
    components:{
        treeSStation,rateTable,rateSelect,rateCascader,rateCascaderCommon
    },
    created(){
         this.getNowTime();//调用获取列表页的方法
    },
    mounted() {
        this.getList();//调用获取列表页的方法
    },
}
</script>
<style scoped>
#v_deviceOnlineInfo{color:black;}
::-webkit-scrollbar{width: 7px;height: 7px;background-color: #F5F5F5;}
  /*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);border-radius: 10px;background-color: #F5F5F5;}
  /*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb{border-radius: 10px;box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);background-color: #c8c8c8;}
.el-aside {color: #333;}
.el-header{height: 100px !important;}
.el-header .search{box-sizing: border-box;border-bottom: 1px solid #eee;text-align: left;}
.el-header .search .btn{position: absolute;right: 12px;top: 2px;}
.el-header .tools{height: 40px;border: 1px solid #ccc;background: #F5F5F5;line-height: 35px;text-align: right;padding: 0px 5px;}
.el-main{height: calc(100vh - 336px);}
/* .el-footer {height: 50px;text-align: left;}
.el-footer .el-pagination{margin: 14px 0;} */
</style>