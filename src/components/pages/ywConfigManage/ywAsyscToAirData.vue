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

                         <el-form-item label="表单状态:">
                               <el-select v-model='queryparam.status'   placeholder='请选择审核状态' style="width: 100%;">
                                       <el-option v-for='item in YwFromStatusOptions' :key='item.value' :label='item.label' :value='item.value'></el-option>
                                </el-select>
                         </el-form-item>

                            <el-form-item class="btn">
                                <el-button type="primary" v-has="'asyscToAirData_handleSearch'"  icon="el-icon-search"   @click="getList();">查询</el-button>
                                <el-button type="primary" v-has="'asyscToAirData_handleAnSync'"  icon="el-icon-download"  @click="asycData();">同步</el-button>
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
            status:-1,
        },
         
            //运维表单审核状态
        YwFromStatusOptions: [
                {
                  value: -1,
                  label: '全部'
                },
                {
                  value: 0,
                  label: '待提交'
                },     
                {
                  value: 1,
                  label: '待审核'
                },
                {
                  value: 2,
                  label: '审核通过'
                },
                 {
                  value: 3,
                  label: '审核不通过'
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
          {prop: 'unitName',label: '运维单位',align: 'center',isShow:true},
          {prop: 'createUsr',label: '运维人员',align: 'center',isShow:true},
          {prop: 'auditeUsr',label: '审批人',align: 'center',isShow:true},         
          {prop: 'inspectionSTime',label: '巡检开始时间',align: 'center',isShow:true,width:200,formatter:this.formatterTime},
          {prop: 'createTime',label: '创建时间',align: 'center',isShow:true,width:200,formatter:this.formatterTime},
        ],// 需要展示的列
            operates: {   //操作栏
              width:200,      
              fixed: 'right',
              list: [
                  ]
                 }, // 列操作按钮
        } //return ending
    },

    methods:{  

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
       this.$set(this.queryparam, "startDate", defaultDate);
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
                url: this.api+'/api/Yw_Rpt/GetRptList?pagesize=' + self.page.pageSize + '&pageindex=' + self.page.pageNo+'&startDate=' 
                + self.queryparam.startDate+ '&endDate=' + self.queryparam.endDate +'&reportCode='+self.queryparam.ReportCode+'&Status='+self.queryparam.status+'&SStations=' + self.queryparam.chooseStationIds
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

        //数据同步到空气[只关心时间和站点,运维表单内省]
      asycData(){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_Rpt/YwRptToAirDb?pagesize=' + self.page.pageSize + '&pageindex=' + self.page.pageNo+'&startDate=' 
                + self.queryparam.startDate+ '&endDate=' + self.queryparam.endDate +'&reportCode='+self.queryparam.ReportCode+'&SStations=' + self.queryparam.chooseStationIds
            }).then(res => {
                console.log(res);
                if(res.status==200){
                    self.$message({
                        message: res.data.message,
                        type: res.data.type  //warning,success,info,error
                    });
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