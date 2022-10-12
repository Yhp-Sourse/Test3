<template>
    <div id="v_deviceOnlineInfo">
        <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
            <el-aside width="250px">
                <treeSStation  :IsCheckBox='true' @checkedNodes="getStations"></treeSStation>
            </el-aside>
            <el-container>
                <el-header>              
                    <div class="search">
                        <el-form :inline="true" class="demo-form-inline">                       
                         <el-form-item label="统计类型：">
                                <el-select v-model='queryparam.StatisType'   placeholder='请选择统计类型' style="width: 100%;">
                                       <el-option v-for='(item, index) in this.StatisTypeOptions' :key='index' :label='item.label' :value='item.value'></el-option>
                                </el-select>
                         </el-form-item>
                         <el-form-item label="报警日期：">
                                <el-date-picker
                                               v-model="queryparam.StartTime"
                                               type="date"   
                                                :clearable=false                                          
                                               value-format="yyyy-MM-dd"
                                               placeholder="请选择日期">
                                    </el-date-picker>
                                 至
                                <el-date-picker
                                               v-model="queryparam.EndTime"
                                               type="date"
                                               :clearable=false
                                               value-format="yyyy-MM-dd"
                                               placeholder="请选择日期">
                                    </el-date-picker>
                         </el-form-item>
                            <el-form-item class="btn">
                                <el-button type="primary" icon="el-icon-search"  v-has="'alarmStatistics_handleSearch'"  @click="getList();">查询</el-button>
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


export default {
    name:'v_deviceOnlineInfo',
    data() {
    
      return {  
           
          isFirst:true,

          //动态列
          arrayStation:[
                {prop: 'city', label: '城市', align: 'center',isShow:true },
                {prop: 'townName', label: '区县', width:120,align: 'center',isShow:true },
                {prop: 'sStationName', label: '站点名称', width:120,align: 'center',isShow:true },
                {prop: 'unitName', label: '运维单位', align: 'center',isShow:true },
                {prop: 'devName', label: '设备名称', width:180, align: 'center',isShow:true },
                {prop: 'stateName', label: '状态量', align: 'center',isShow:true },
                {prop: 'alarmtimes', label: '报警次数', align: 'center',isShow:true },
                {prop: 'invalidtimes', label: '无效报警次数', align: 'center',isShow:true },
                {prop: 'handletimes', label: '处理次数', align: 'center',isShow:true },
                {prop: 'untreatedtimes', label: '未处理次数', align: 'center',isShow:true }
            ],
            arrayUnit:[
                {prop: 'unitName', label: '运维单位', align: 'center',isShow:true },
                {prop: 'stationCount', label: '站点个数', width:120,align: 'center',isShow:true },
                {prop: 'alarmtimes', label: '报警次数', width:120,align: 'center',isShow:true },
                {prop: 'invalidtimes', label: '无效报警次数', align: 'center',isShow:true },
                {prop: 'handletimes', label: '处理次数', width:180, align: 'center',isShow:true },
                {prop: 'untreatedtimes', label: '未处理次数', align: 'center',isShow:true }
            ],
        
        //统计类型下拉框
        StatisTypeOptions: [{
                value: '1',
                label: '按站点'
            },{
                value: '-1',
                label: '按运维单位'
            }],
        
        CheckData:[],              // [{sStation:'SS4301051'},{sStation:'SS4301051'}]
              
        queryparam:{
            StatisType:'1',
            StartTime:'',
            EndTime:'',
            peiZhiStationIds:'',
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
              loading: true, // 是否添加表格loading加载动画
              highlightCurrentRow: true, // 是否支持当前行高亮显示
              mutiSelect: true, // 是否支持列表项选中功能
            }, // table 的参数结束          
            columns: [],// 需要展示的列
            operates: {   //操作栏
              width:200,      
              fixed: 'right',
              list: [
                  ]
                 }, // 列操作按钮
        } //return ending
    },

    methods:{
      //获取站点
      getStations(obj){
            var self = this;
            var configIds='';
            if(obj!=null)
            {  
               obj.forEach(o=>{                   
                    configIds += o.sStation +',';
               });     
               self.queryparam.peiZhiStationIds =configIds;    
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
       this.$set(this.queryparam, "StartTime", defaultDate);
       this.$set(this.queryparam, "EndTime", defaultDate);
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
            if(self.isFirst!=true){
                if (self.queryparam.peiZhiStationIds == "") {
                self.$message({
                   message: "请先勾选要查询的站点！",
                   type: "warning"  //success,warning,info,error
                });
                return;
            }          
            
            //判断开始时间和结束时间
            if(self.queryparam.StartTime>self.queryparam.EndTime){
                    self.$message({
                    message: "开始时间不能大于结束时间!",
                    type: "warning"  });
                    return;
              }
            }
            //url地址
            let urlStr=""; 
            if(self.queryparam.StatisType=="1"){
                this.columns=  this.arrayStation;
                urlStr=  this.api+'/api/AlarmRemind/AlarmstatisticsByStation?pageSize=' + self.page.pageSize + '&pageIndex=' + self.page.pageNo+' &SStation='+self.queryparam.peiZhiStationIds+ ' &StartDate=' + self.queryparam.StartTime + '&EndDate=' + self.queryparam.EndTime;
            }else{
                this.columns=  this.arrayUnit;
                urlStr=  this.api+'/api/AlarmRemind/AlarmstatisticsByUnit?pageSize=' + self.page.pageSize + '&pageIndex=' + self.page.pageNo+' &SStation='+self.queryparam.peiZhiStationIds+ ' &StartDate=' + self.queryparam.StartTime + '&EndDate=' + self.queryparam.EndTime;
            }
            this.$http({
                method: 'GET',
                url: urlStr,
            }).then(res => {
                if(res.status==200){
                    self.list=res.data.data;
                    self.page.total = res.data.total;
                    self.options.loading=false;
                }
          }).catch(error => {
            console.log(error);
          });
          self.isFirst=false;
        }, 
      
    },
    components:{
        treeSStation,rateTable,rateSelect,rateCascader
    },
    created(){
         this.getNowTime();//调用获取列表页的方法
         this.columns=  this.arrayStation;
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