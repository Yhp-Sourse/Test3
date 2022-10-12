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
                         <el-form-item label="运维单位">
                                <rate-select
                                    v-model="rateSelectUnit.model"
                                    :url='rateSelectUnit.selectUrl'
                                    :urlParams="rateSelectUnit.urlParams"
                                    :multiple="false"
                                    placeholder="全部"
                                    :optionKeys="rateSelectUnit.optionKeys"
                                    :showLabels="rateSelectUnit.showLabels"
                                    :disables="rateSelectUnit.disables"
                                    @change="selectChangeUnit"
                                >
                                </rate-select>
                         </el-form-item>
                        
                         <el-form-item label="考核月份：">
                                <el-date-picker
                                               v-model="queryparam.SearchTime"
                                               type="month"   
                                                :clearable=false                                          
                                               value-format="yyyy-MM"
                                               placeholder="请选择日期">
                                    </el-date-picker>
                         </el-form-item>
                            <el-form-item class="btn">
                                <el-button type="primary" icon="el-icon-search"  v-has="'stationRanking_handleSearch'"   @click="getList();">查询</el-button>
                                <el-button type="primary" icon="el-icon-download"   @click="download();">导出</el-button>
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
        
        //运维单位绑定下拉框信息 
        rateSelectUnit:{
            model: '',
            selectUrl:this.api+'/api/Yw_Unit/GetAllUnit',
		    urlParams: JSON.stringify({}),
            optionKeys: JSON.stringify({
                value: 'unitId',
                label: 'unitName'
            }),
            showLabels: 'unitName',
            disables: '',
        },
         

        CheckData:[],              // [{sStation:'SS4301051'},{sStation:'SS4301051'}]
 
        queryparam:{
            YwOrg:'',
            SearchTime:'',
            chooseStationIds:'',
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
            columns: [
              {prop: 'unitName', label: '运维单位', align: 'center',isShow:true },
              {prop: 'city', label: '城市', width:120,align: 'center',isShow:true },
              {prop: 'townName', label: '区县', width:120,align: 'center',isShow:true },
              {prop: 'sStationName', label: '站点名称', align: 'center',isShow:true },
              {prop: 'markMonth', label: '考核月份', width:180, align: 'center',isShow:true },
              {prop: 'ranks', label: '排名', align: 'center',isShow:true },           
              {prop: 'twoRateScore', label: '两率分值', align: 'center',isShow:true, formatter: (row, column, cellValue) => {     if(row.twoRateScore==null) { return '<a style="color:blue" > -- </a>' ; }  else { return  '<a style="color:blue" >' + row.twoRateScore + '</a>' ; }  } },             
              {prop: 'show_OperationScore', label: '运维得分', align: 'center',isShow:false, formatter: (row, column, cellValue) => {return  '<a style="color:blue" >' + row.show_OperationScore + '</a>' ;}},
              {prop: 'show_CityScore', label: '第四方检查得分', align: 'center',isShow:true, formatter: (row, column, cellValue) => {return  '<a style="color:blue" >' + row.show_CityScore + '</a>' ;} },
              {prop: 'total', label: '合计分值', align: 'center',isShow:true, formatter: (row, column, cellValue) => {return    '<a style="color:blue" >' + row.total + '</a>' ;} },
              {prop: 'provinceScore', label: '省站质控扣分', align: 'center',isShow:false, formatter: (row, column, cellValue) => {  if(row.provinceScore==null) { return '<a style="color:blue" > -- </a>' ; } else { return  '<a style="color:blue" >' + row.provinceScore + '</a>' ; } } }
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

        //运维下拉框改变值
        selectChangeUnit(val, valObj) {
            this.model = val;
            this.queryparam.YwOrg=val;
        },
              
        getNowTime() {
           var now = new Date();
           var year = now.getFullYear(); //得到年份
           var month = now.getMonth(); //得到月份
           var date = now.getDate(); //得到日期          
           month = month.toString().padStart(2, "0");
           date = date.toString().padStart(2, "0");
           var defaultDate = `${year}-${month}`;
           console.log(defaultDate);
           this.$set(this.queryparam, "SearchTime", defaultDate);
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
            this.$http({
                method: 'GET',
                url: this.api+'/api/OpsRanking/GetStationRank?pageSize=' + self.page.pageSize + '&pageIndex=' + self.page.pageNo+' &station='+self.queryparam.chooseStationIds+'&ywOrg='+self.queryparam.YwOrg+ ' &searchTime=' + self.queryparam.SearchTime
            }).then(res => {
                if(res.status==200){
                    self.list=res.data.data;
                    self.page.total = res.data.total;
                    self.options.loading=false;
                }
          }).catch(error => {
            console.log(error);
          });
        }, 
         
           //下载时间
        downLoadDate(){       
            const date = new Date();
            const y =date.getFullYear();
            const M = (date.getMonth()+1).toString().padStart(2,0);
            const d = date.getDate().toString().padStart(2, 0);
            const h = date.getHours().toString().padStart(2, 0);
            const mm = date.getMinutes().toString().padStart(2, 0);
            const s = date.getSeconds().toString().padStart(2, 0);
            return y  + M +  + d  + h  + mm + s;
        },


                //导出
        download(obj){
            var self = this;
            this.$http({
                method: 'GET',
                responseType: 'blob', // 表明返回服务器返回的数据类型
                url: this.api+'/api/OpsRanking/GetStationRankDownLoad?pageSize=' + self.page.pageSize + '&pageIndex=' + self.page.pageNo+' &station='+self.queryparam.chooseStationIds+'&ywOrg='+self.queryparam.YwOrg+ ' &searchTime=' + self.queryparam.SearchTime
            }).then(res => {
                if(res.status==200){              
    let blob = new Blob([res.data], {type: 'application/vnd.ms-excel' })
    let  downTime= self.downLoadDate();
    const fileName = downTime + '-运维站点排名.xls';
    const elink = document.createElement('a');
    elink.download = fileName;
    elink.style.display = 'none';
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
                }
          }).catch(error => {
            console.log(error);
          });
        },


      
    },
    components:{
        treeSStation,rateTable,rateSelect,rateCascader
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