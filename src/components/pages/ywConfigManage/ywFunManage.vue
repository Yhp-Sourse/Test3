<template>
    <div id="v_deviceOnlineInfo">
        <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
            <el-container>
                <el-header>
                    <div class="search">
                        <el-form :inline="true" class="demo-form-inline">
                            <el-form-item label="按钮名称">
                                <el-input v-model="queryparam.FunName" placeholder="按钮名称"></el-input>
                            </el-form-item>
                          
                            <el-form-item class="btn">
                                <el-button type="primary" icon="el-icon-search" v-has="'function_handleSearch'"  @click="getList">查询</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="tools">
                         <el-button size="small" class=" el-button--iconButton" icon="el-icon-plus" v-has="'function_handleAdd'"  style="text-overflow: initial;" @click="handleAdd">添加</el-button> 
                         <el-button size="small" class=" el-button--iconButton" icon="el-icon-delete" v-has="'function_handleMultiplDel'"  style="text-overflow: initial;" @click="handleMultiplDel">删除</el-button>
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
            <el-dialog
                :title="digTitle"
                :visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose"
                >
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
                   
                    <el-row>
                        <el-col :span="12">
                            <div>
                                <el-form-item label="按钮名称：" prop="fun_name">
                                    <el-input v-model="ruleForm.fun_name" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div> 
                                <el-form-item label="按钮方法：" prop="fun_method">
                                    <el-input v-model="ruleForm.fun_method" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>                                         
                        <el-col :span="12">
                            <div>
                                <el-form-item label="按钮图标：" prop="fun_icon">
                                <el-select v-model="ruleForm.fun_icon" placeholder="请选择图标"  @change="change">
                                <el-option v-for="item in iconList" :key="item.id" :label="item.iconString" :value="item.iconString">
                                    <span><i :class="item.iconString"></i></span>                              
                                </el-option>
                                </el-select>                              
                                </el-form-item>
                            </div>
                        </el-col>
                         <el-col :span="12">
                            <div> 
                                <el-form-item label="按钮排序：" prop="fun_sort">
                                    <el-input v-model="ruleForm.fun_sort" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>                      
                    </el-row>

                   <el-row>
                        <el-col :span="9">&nbsp;</el-col>
                        <el-col :span="6">
                            <div> 
                               <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                                    <el-button @click="closeDig()">取消</el-button>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="9">&nbsp;</el-col>
                   </el-row>
                    
                </el-form>
            </el-dialog>

        </div>
    </div>
</template>
<script>
import rateTable  from '../common/rateTable'    //引入table组件


export default {
    name:'v_deviceOnlineInfo',
    data() { 
      return {          
        //绑定下拉框信息 
        digTitle:'',
        iconList:[],
        dialogVisible: false,
        titleName:'',
        
        //弹出窗相关变量定义
        ruleForm: {
         fun_Id:'',
         fun_name:'',
         fun_sort:'',
         fun_icon:'',
         fun_status: '',
         fun_method:'',
        },

        rules: {
            fun_name: [{ required: true, message: '请输入按钮名称', trigger: 'blur' }],
            fun_icon: [{ required: true, message: '请选择按钮图标', trigger: 'blur' }],
            fun_method: [{ required: true, message: '请方法名称', trigger: 'blur' }],
            fun_sort: [{ required: true, message: '请输入排序', trigger: 'blur' }],                     
        },
        queryparam:{
            FunName:'',
        },
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
              {prop: 'fun_Id', label: '按钮id', align: 'center',isShow:false },
              {prop: 'fun_icon', label: '按钮图标', width:180,align: 'center',isShow:true,formatter: (row, column, cellValue) => {return  "<i class="+row.fun_icon+"></i>";} },
              {prop: 'fun_name', label: '按钮名称', align: 'center',isShow:true },
              {prop: 'fun_method', label: '方法', align: 'center',isShow:true },
              {prop: 'fun_sort', label: '排序', align: 'center',isShow:true },
              {prop: 'fun_createtime', label: '创建时间', align: 'center',isShow:true }
             
            ],// 需要展示的列
            operates: {   //操作栏
              width:200,      
              fixed: 'right',
              list: [
                    {
                      id:'1',
                      label: '编辑',
                      bgColortype:'success',
                      show: true,   //是否显示按钮
                      hasbutton:'function_handleEdit',
                      className:'success', //样式类名
                      disabled: false,   //是否禁用按钮 默认是danger的禁用样式
                      method: (index, row) => {
                        this.handleEdit(index, row)
                      }
                    }
                  ]
                 }, // 列操作按钮
        } //return ending
    },

    methods:{     
        //弹出窗关闭时的效果
        handleClose(done){
           this.$confirm('确认关闭?').then(_=>{
                done();  
                this.resetForm('ruleForm');})
            .catch(_=>{});
        },

        change(val){
            this.ruleForm.fun_icon=val;
        },
        //删除
        handleMultiplDel() {
            var self = this;
            var ids = '';
            if (this.handleSelection == "") {
                self.$message({
                    message: "请选择要删除的数据！",
                    type: "warning"  //success,warning,info,error
                });
                return;
            }          
            this.handleSelection.forEach((item,index) => {
                if (index != self.handleSelection.length - 1) {
                    ids += item.fun_Id + ','
                } else {
                    ids += item.fun_Id;
                }
            });
            this.$confirm('确认删除？').then(function () {
                self.handlemultipl(ids);
            }).catch(function () {
                
            });                
        },

        handlemultipl(ids){
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/Yw_Function/DeleteFun?funId='+ids
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

        //页面提交(保存或者修改)
        submitForm(formName) {
            const Qs = require('qs');
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var self = this;
                    this.$http({
                        headers: {
                            'deviceCode': 'A95ZEF1-47B5-AC90BF3'
                        },
                        method: 'post',
                        url: self.api+'/api/Yw_Function/FunInfoSubmit',
                        data:Qs.stringify(self.ruleForm)
                    }).then(res => {
                        console.log(res);
                        if(res.status==200){
                            self.dialogVisible=!self.dialogVisible;
                            self.getList();
                            self.$message({
                                message: res.data.message,
                                type: res.data.type  //warning,success,info,error
                            });
                            self.resetForm('ruleForm')
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                    } else {
                        return false;
                    }
            });
        },
        
        //重置框
        resetForm(formName) {            
            this.$refs[formName].resetFields();                
        },
        
        //关闭弹出框
        closeDig(){
            var self=this;
            self.dialogVisible=!self.dialogVisible;
            self.resetForm('ruleForm')
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

        //添加
        handleAdd(){
            var self=this;
             if(self.ruleForm.fun_Id!='')
             {
                self.resetForm('ruleForm');//重置表单
             }     
            self.ruleForm.fun_Id='';             
            self.digTitle="添加按钮";
            self.getAllIcons();
            self.dialogVisible=true;
        },
         
          //编辑
        handleEdit (index, row) {  //操作栏编辑按钮
            var self=this;
            this.getFunInfoById(row.fun_Id);
            self.getAllIcons();
            self.digTitle="编辑按钮";
            self.dialogVisible=true;
        },

         //获取所有icon
        getAllIcons(){
           var self=this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_Icons/GetAllIcons'
            }).then(res => {
                if(res.status==200){
                    self.iconList=res.data.data;
                }
          }).catch(error => {
            console.log(error);
          });
        },

        //查询
        getList(obj){      
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_Function/GetFunPageList?pageSize=' + self.page.pageSize + '&pageIndex=' + self.page.pageNo+'&funName=' + self.queryparam.FunName
            }).then(res => {
                if(res.status==200){
                    self.list=res.data.data;
                    self.page.total = res.data.total;
                }
                self.options.loading=false;
          }).catch(error => {
            console.log(error);
          });
        }, 
       
        //依据按钮id获取按钮信息
        getFunInfoById(id){          
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_Function/GetFunById?funId=' + id
            }).then(res => {
                if(res.status==200){
                    self.ruleForm.fun_Id=res.data.data.fun_Id;
                    self.ruleForm.fun_name=res.data.data.fun_name;
                    self.ruleForm.fun_icon=res.data.data.fun_icon;
                    self.ruleForm.fun_method=res.data.data.fun_method;
                    self.ruleForm.fun_sort=res.data.data.fun_sort;
                }
          }).catch(error => {
            console.log(error);
          });
        },    
    },
    components:{
        rateTable
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
#v_deviceOnlineInfo{color:red;}
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
.el-select{width:100%;}
/* .el-footer {height: 50px;text-align: left;}
.el-footer .el-pagination{margin: 14px 0;} */

</style>