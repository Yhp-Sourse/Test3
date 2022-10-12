<template>
    <div id="v_ywUnit">
        <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
            <!-- <el-aside width="250px">
                <treeSStation @checkedNodes="getList"></treeSStation>
            </el-aside> -->
            
            <el-container>
                <el-header>
                    <div class="search">
                        <el-form :inline="true" class="demo-form-inline" >
                            <el-form-item label="运维单位：">
                                <rate-select
                                    v-model="rateSelect.model"
                                    :url='rateSelect.selectUrl'
                                    :urlParams="rateSelect.urlParams"
                                    :multiple="false"
                                    placeholder="全部"
                                    :optionKeys="rateSelect.optionKeys"
                                    :showLabels="rateSelect.showLabels"
                                    :disables="rateSelect.disables"
                                    @change="selectChange"
                                >
                                </rate-select>

                            </el-form-item>
                            
                            <el-form-item class="btn">
                                <el-button type="primary" v-has="'ywPerson_handleSearch'" icon="el-icon-search" @click="getList();">查询</el-button>
                                <el-button type="primary"  v-has="'ywPerson_handleExport'" icon="el-icon-download"   @click="download();">导出</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div  class="tools">
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
                title="运维单位"
                :visible.sync="dialogVisible"
                width="50%"
                >
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
                    <el-row>
                        <el-col :span="12">
                            <div>
                                <el-form-item v-show="false" label="" prop="UnitId">
                                    <el-input v-model="ruleForm.UnitId" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="单位名称：" prop="UnitName">
                                    <el-input v-model="ruleForm.UnitName" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div> 
                                <el-form-item label="排序：" prop="SortOrder">
                                    <el-input v-model="ruleForm.SortOrder" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="24">
                            <div>
                                <el-form-item label="描述：" prop="Description">
                                    <el-input  type="textarea" v-model="ruleForm.Description" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        
                    </el-row>

                   <el-row>
                        <el-col :span="9">&nbsp;</el-col>
                        <el-col :span="6">
                            <div> 
                               <el-form-item>
                                    <el-button v-has="'ywPerson_handleSubmit'" type="primary" @click="submitForm('ruleForm')">提交</el-button>
                                    <el-button @click="resetForm('ruleForm')">重置</el-button>
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
import treeSStation from '../common/treeSStation' //引入treeSStation组件
import rateTable  from '../common/rateTable'    //引入rateTable组件
import rateCascader from '../common/rateCascader' //引入rateCascader组件
import rateSelect from '../common/rateSelect';


export default {
    name:'v_ywUnit',
    data() {
      return {
        rateSelect:{
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
        dialogVisible: false,
        ruleForm: {
            UnitId:'',
            UnitName:'',
            SortOrder:'',
            Description:''
        },
        rules: {
            UnitId:[{ required: false, message: '', trigger: 'blur' }],
            UnitName: [{ required: true, message: '请输入单位名称', trigger: 'blur' }],
            SortOrder: [{ required: false, message: '排列序号', trigger: 'blur' }],
            Description: [{ required: false, message: '请描述', trigger: 'blur' }],
        },
        queryparam:{
            usr_unitid:''
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
          {prop: 'usr_name',label: '用户名',align: 'center',isShow:true},//formatter重构//return `返回参数`
          {prop: 'usr_isadmin',label: '是否管理员',align: 'center',isShow:true,width:200,formatter: (row, column, cellValue) => {return row.usr_isadmin?'是':'否';}},
          {prop: 'usr_realname',label: '真实姓名',align: 'center',isShow:true},
          {prop: 'usr_phone',label: '手机号',align: 'center',isShow:true},
          {prop: 'role_name',label: '角色名称',align: 'center',isShow:true},//formatter重构//return `返回参数`
          {prop: 'unitName',label: '运维单位',align: 'center',isShow:true,width:200},
        ],// 需要展示的列
        operates: {   //操作栏
          width:200,      
          fixed: 'right',
          list: []
        }, // 列操作按钮
      } //return ending
    },
    methods:{
        filterDate(t) {
            const date = new Date(t);
            const y = date.getFullYear();
            const M = (date.getMonth() + 1).toString().padStart(2, 0);
            const d = date.getDate().toString().padStart(2, 0);
            const h = date.getHours().toString().padStart(2, 0);
            const mm = date.getMinutes().toString().padStart(2, 0);
            const s = date.getSeconds().toString().padStart(2, 0);
            return y + '-' + M + '-' + d + ' ' + h + ':' + mm + ':' + s;
        },
        selectChange(val, valObj) {
            this.model = val;
            this.queryparam.usr_unitid=val;
		},
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var self = this;
                    this.$http({
                        headers: {
                            'deviceCode': 'A95ZEF1-47B5-AC90BF3'
                        },
                        method: 'post',
                        url: self.api+'/api/Yw_Unit/Submit',
                        data:self.Qs.stringify(self.ruleForm)
                    }).then(res => {
                        if(res.status==200){
                            self.dialogVisible=!self.dialogVisible;
                            self.getList();
                            self.$message({
                                message: res.data.message,
                                type: res.data.type  //warning,success,info,error
                            });
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                    } else {
                        return false;
                    }
            });
        },
        resetForm(formName) {
            this.$nextTick(()=>{
                this.$refs[formName].resetFields();
            }) 
        },
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
                    ids += item.id + ','
                } else {
                    ids += item.id;
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
                url: self.api+'/api/Yw_Unit/Delmultipl?ids='+ids
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
        Singelmultipl(id){
            debugger
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/Yw_Unit/Singelmultipl?unitId='+id
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
        handleAdd(){
            this.getToFirst(0);
            this.dialogVisible=!this.dialogVisible;
        },
        handleEdit (index, row) {  //操作栏编辑按钮
            var self=this;
            this.getToFirst(row.unitId);
            self.dialogVisible=!self.dialogVisible;

        },
        handledel(index, row) {  //操作栏删除按钮
            var self=this;
            this.$confirm('确认删除？').then(function () {
                self.Singelmultipl(row.unitId);
            }).catch(function () {
                
            });
        },
        getList(obj){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_Person/GetList?pagesize=' + self.page.pageSize + '&pageindex=' + self.page.pageNo+ '&usr_unitid=' + self.queryparam.usr_unitid 
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
                url: this.api+'/api/Yw_Person/GetListDownLoad?pagesize=' + self.page.pageSize + '&pageindex=' + self.page.pageNo+ '&usr_unitid=' + self.queryparam.usr_unitid 
            }).then(res => {
                if(res.status==200){              
    let blob = new Blob([res.data], {type: 'application/vnd.ms-excel' })
    let  downTime= self.downLoadDate();
    const fileName = downTime +'-运维人员名册.xls';
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

        getToFirst(id){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_Unit/GetToFirst?unitId=' + id
            }).then(res => {
                if(res.status==200){
                    self.ruleForm.UnitId=res.data.data.unitId;
                    self.ruleForm.UnitName=res.data.data.unitName;
                    self.ruleForm.SortOrder=res.data.data.sortOrder;
                    self.ruleForm.Description=res.data.data.description;
                }
          }).catch(error => {
            console.log(error);
          });
        },
        selectOptionEvent(val){
            this.ruleForm.SStation=val;
        },
        selectSStation(){
            this.$refs.cascader.selectSStation(this.ruleForm.SStation);
        }
        
    },
    components:{
        treeSStation,rateTable,rateCascader,rateSelect
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
.el-cascader,.el-cascader--medium{width: 100%;height: 28px;line-height: 28px;}
.el-date-editor,.el-input {width: 100%;}
</style>