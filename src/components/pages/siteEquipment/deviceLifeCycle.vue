<template>
    <div id="v_deviceLifeCycle">
        <el-container style="height: calc(100vh - 136px); border: 1px solid #eee">
            <el-aside width="250px">
                <treeSStation @checkedNodes="getSearchStations"></treeSStation>
            </el-aside>
            <el-container>
                <el-header>
                    <div class="search">
                        <el-form :inline="true" class="demo-form-inline">
                            <el-form-item label="设备品牌">
                                <el-input v-model="queryparam.QName" placeholder="设备品牌"></el-input>
                            </el-form-item>
                            <el-form-item class="btn">
                                <el-button type="primary" v-has="'1_handleSearch'" icon="el-icon-search"  @click="getList();">查询</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="tools">
                        <!-- <el-button size="small" class=" el-button--iconButton" icon="el-icon-plus" style="text-overflow: initial;" @click="handleAdd">添加</el-button> -->
                        <!-- <el-button size="small" class=" el-button--iconButton" icon="el-icon-delete" style="text-overflow: initial;" @click="handleMultiplDel">删除</el-button> -->
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

        <div>
        </div>
    </div>
</template>
<script>
import treeSStation from '../common/treeSStation'
import rateTable  from '../common/rateTable'    //引入table组件
export default {
    name:'v_deviceLifeCycle',
    data() {
    
      return {
        ruleForm: {
        },
        rules: {
            Model: [{ required: true, message: '请输入设备型号', trigger: 'blur' }],
            Code: [{ required: true, message: '请输入设备编码', trigger: 'blur' }],
        },
        queryparam:{
            QName:'',
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
               {prop: 'sStationName', label: '站点名称', width:180,align: 'center',isShow:true },
              {prop: 'facName', label: '设备品牌',width:100,align: 'center',isShow:true },
              {prop: 'name', label: '设备名称', width:100,align: 'center',isShow:true },
              {prop: 'param', label: '参数',  width:100,align: 'center',isShow:true },
              {prop: 'model', label: '设备型号', width:100,align: 'center',isShow:true },
              {prop: 'show_UnitName', label: '运维单位', width:120,align: 'center',isShow:true },
              {prop: 'deviceUniqueCode', label: '唯一识别码（出厂编号）', width:220,align: 'center',isShow:true },
              {prop: 'show_Status', label: '设备状态',width:100, align: 'center',isShow:true },

            ],// 需要展示的列
            operates: {   //操作栏
              width:200,      
              fixed: 'right',
              list: [
                   {
                      id:'2',
                      label: '运维痕迹',
                      show: true,
                      bgColortype:'info',
                      className:'searchAll',
                      disabled: false,
                      hasbutton:'1_handleDetail',
                      method: (index, row) => {
                        this.handleview(index, row)
                      }
                    }
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
        handleview(index, row) {  //操作栏详情按钮
          let obj = { Param: row.param, SStationName: row.sStationName, DeviceId: row.id, SStation: row.sStation };
           this.$emit('jump',{param:'生命周期详情',path:'/index/SiteEquipment/DeviceLifeCycleDisplay?obj='+ JSON.stringify(obj),isjump:true},);
        },
        getList(obj){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_DeviceHostLibraryInfo/DeviceHostLibraryInfo_FindByPage?pagesize=' + self.page.pageSize + '&pageindex=' + self.page.pageNo+ '&FacName=' + self.queryparam.QName+
          "&SStation=" +
          self.queryparam.chooseStationIds,
            }).then(res => {
                if(res.status==200){
                    self.list=res.data.data;
                    self.page.total = res.data.count;
                    self.options.loading=false;
                }
          }).catch(error => {
            console.log(error);
          });
        },  
    },
    components:{
        treeSStation,rateTable
    },
    created(){
        //调用获取列表页的方法
    },
    mounted() {
        this.getList();//调用获取列表页的方法
    },
}
</script>
<style scoped>
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