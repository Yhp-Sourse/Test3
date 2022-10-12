<template>
    <div id="v_deviceOnlineInfo">
        <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
            <el-aside width="250px">
                <treeSStation :IsCheckBox='true'  @checkedNodes="getSearchStations"></treeSStation>
            </el-aside>
            <el-container>
                <el-header>
                    <div class="search">             
                        <el-form :inline="true" class="demo-form-inline">
                            <el-form-item label="登录账号">
                                <el-input v-model="queryparam.LoginCode" placeholder="请输入登录账号"></el-input>
                            </el-form-item>
                            <el-form-item label="用户姓名">
                                <el-input v-model="queryparam.RealName" placeholder="请输入用户姓名"></el-input>
                            </el-form-item>
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
                         <el-form-item label="角色名称">
                                <rate-select
                                    v-model="rateSelectRoleType.model"
                                    :url='rateSelectRoleType.selectUrl'
                                    :urlParams="rateSelectRoleType.urlParams"
                                    :multiple="false"
                                    placeholder="全部"
                                    :optionKeys="rateSelectRoleType.optionKeys"
                                    :showLabels="rateSelectRoleType.showLabels"
                                    :disables="rateSelectRoleType.disables"
                                    @change="selectChangeRoleType"
                                >
                                </rate-select>
                         </el-form-item>
                            <el-form-item class="btn">
                                <el-button type="primary" icon="el-icon-search" v-has="'usr_handleSearch'"   @click="getList();">查询</el-button>
                                <el-button type="primary" icon="el-icon-download"  v-has="'usr_handleExport'"   @click="download();">导出</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="tools">
                         <el-button size="small" class=" el-button--iconButton" icon="el-icon-plus" v-has="'usr_handleAdd'"   style="text-overflow: initial;" @click="handleAdd">添加</el-button> 
                         <el-button size="small" class=" el-button--iconButton" icon="el-icon-delete" v-has="'usr_handleMultiplDel'"   style="text-overflow: initial;" @click="handleMultiplDel">删除</el-button>
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
                                <el-form-item label="登录账号：" prop="usr_name">
                                    <el-input v-model="ruleForm.usr_name" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div> 
                                <el-form-item label="登录密码：" prop="usr_pwd">
                                    <el-input v-model="ruleForm.usr_pwd" autocomplete="off" :disabled="isWrite" show-password></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>

                   <el-row>
                        <el-col :span="12">
                            <div>
                                <el-form-item label="用户站点：" prop="usr_station">
                                     <rateCascader :checkStrictly='true' :selectOption='ruleForm.usr_station' @selectOptionEvent="selectOptionEvent"></rateCascader>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div>
                                <el-form-item label="运维单位：" prop="usr_unitid">
                                     <rate-select
                                    v-model="ruleForm.usr_unitid"
                                    :url='rateSelectCUnit.selectUrl'
                                    :urlParams="rateSelectCUnit.urlParams"
                                    :multiple="false"
                                    placeholder="请选择运维单位"
                                    :optionKeys="rateSelectCUnit.optionKeys"
                                    :showLabels="rateSelectCUnit.showLabels"
                                    :disables="rateSelectCUnit.disables"
                                    @change="selectChangeCUnit"
                                >
                                </rate-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div>
                                <el-form-item label="用户姓名：" prop="usr_realname">
                                    <el-input v-model="ruleForm.usr_realname" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div> 
                                <el-form-item label="角色选择：" prop="role_id">
                                <rate-select
                                    v-model="ruleForm.role_id"
                                    :url='rateSelectRoleId.selectUrl'
                                    :urlParams="rateSelectRoleId.urlParams"
                                    :multiple="false"
                                    placeholder="请选择角色类别"
                                    :optionKeys="rateSelectRoleId.optionKeys"
                                    :showLabels="rateSelectRoleId.showLabels"
                                    :disables="rateSelectRoleId.disables"
                                    @change="selectChangeRoleId"
                                >
                                </rate-select>
                               </el-form-item>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                            <div>
                                <el-form-item label="联系电话：" prop="usr_phone">
                                    <el-input v-model="ruleForm.usr_phone" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div> 
                                <el-form-item label="性 别：" prop="usr_sex">
                                   <el-select v-model='ruleForm.usr_sex'   placeholder='请选择性别' style="width: 100%;">
                                       <el-option v-for='(item, index) in ruleForm.SexOptions' :key='index' :label='item.label' :value='item.value'></el-option>
                                   </el-select>
                               </el-form-item>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                            <div>
                                <el-form-item label="上级领导：" prop="usr_dleaderid">
                                <rate-select
                                    v-model="ruleForm.usr_dleaderid"
                                    :url='rateSelectLeadId.selectUrl'
                                    :urlParams="rateSelectLeadId.urlParams"
                                    :multiple="false"
                                    placeholder="请选择上级领导"
                                    :optionKeys="rateSelectLeadId.optionKeys"
                                    :showLabels="rateSelectLeadId.showLabels"
                                    :disables="rateSelectLeadId.disables"
                                    @change="selectChangeLeadId"
                                >
                                </rate-select>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="6">
                            <div>
                                <el-form-item label="是否启用：" prop="usr_status">
                                    <el-radio-group v-model="ruleForm.usr_status">
                                        <el-radio :label="1">是</el-radio>
                                        <el-radio :label="0">否</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div> 
                                <el-form-item label="是否管理员: " prop="usr_isadmin">
                                   <el-radio-group v-model="ruleForm.usr_isadmin">
                                        <el-radio :label="1">是</el-radio>
                                        <el-radio :label="0">否</el-radio>
                                    </el-radio-group>
                               </el-form-item>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="24">
                            <div>
                                <el-form-item label="用户描述：" prop="usr_description">
                                    <el-input v-model="ruleForm.usr_description" autocomplete="off" type="textarea" :rows="3"></el-input>
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

 
            <el-dialog
                title="站点配置"
                :visible.sync="dialogVisibleview1"
                width="30%"
                height="30%"
                >
                <el-header>
                   <el-button size="small" class=" el-button--iconButton" icon="el-icon-plus" style="text-overflow: initial;" @click="handleSave">保存</el-button> 
                </el-header>
                <el-main>           
                    <configTreeStation :CheckData='CheckData' :IsInput='false' @checkedNodes="getStations"></configTreeStation>
                </el-main>              
            </el-dialog>
        </div>
    </div>
</template>
<script>
import configTreeStation from '../common/configTreeStation'
import treeSStation from '../common/treeSStation'
import rateTable  from '../common/rateTable'    //引入table组件
import rateSelect from '../common/rateSelect';
import rateCascader from '../common/rateCascader' //引入rateCascader组件


export default {
    name:'v_deviceOnlineInfo',
    data() {
    
      return {  
        //绑定下拉框信息 
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
        rateSelectRoleType:{
            model: '',
            selectUrl:this.api+'/api/Yw_Roles/GetAllRoles',
		    urlParams: JSON.stringify({}),
            optionKeys: JSON.stringify({
                value: 'role_id',
                label: 'role_name'
            }),
            showLabels: 'role_name',
            disables: '',
        },
        rateSelectRoleId:{
            model: '',
            selectUrl:this.api+'/api/Yw_Roles/GetAllRoles',
		    urlParams: JSON.stringify({}),
            optionKeys: JSON.stringify({
                value: 'role_id',
                label: 'role_name'
            }),
            showLabels: 'role_name',
            disables: '',
        },      
        rateSelectCUnit:{
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
        //上级选择下拉框
        rateSelectLeadId:{
              model: '',
              selectUrl:this.api+'/api/Yw_UsrManage/GetLeaderUsers',
	     	  urlParams: JSON.stringify({}),
              optionKeys: JSON.stringify({
              value: 'value',
              label: 'text'
              }),
           showLabels: 'text',
           disables: '',
        },      
        
        isWrite:'',
        digTitle:'',
        peiZhiStationIds:'',
        peiZhiStationNames:'',
        usrId:'',

        showView:{
            columns: [
              {prop: 'usr_id', label: '用户id', align: 'center',isShow:false },
              {prop: 'usr_realname', label: '用户姓名', width:180,align: 'center',isShow:true },
              {prop: 'usr_dleadername', label: '直属上级',align: 'center',isShow:false },
              {prop: 'unitId', label: '运维单位id', align: 'center',isShow:false },
              {prop: 'unitName', label: '运维单位', width:220, align: 'center',isShow:true },
              {prop: 'role_name', label: '角色名称', align: 'center',isShow:true },
              {prop: 'usr_phone', label: '联系电话', align: 'center',isShow:true },
              {prop: 'usr_status', label: '是否启用', width:180,align: 'center',isShow:true },
              {prop: 'sStations', label: '运维站id', width:180,align: 'center',isShow:false },
              {prop: 'sStationNames', label: '运维站点',width:180, align: 'center',isShow:true }
            ],// 需要展示的列
              operates: {   //操作栏
              width:200,      
              fixed: 'right',
              list: [
                  ]
                 },
            page:{   //关于页码的相关参数
              pageShow:false,  //是否显示
              total:0,        //总条数
              pageSize:10,    //每页条数
              pageNo:1,       //第几页
            },
            list:[],// table数据
            options: {  // table样式参数
              stripe: true, // 是否为斑马纹 table
              loading: true, // 是否添加表格loading加载动画
              highlightCurrentRow: true, // 是否支持当前行高亮显示
              mutiSelect: true, // 是否支持列表项选中功能
            }, // table 的参数结束
        },
        CheckData:[],
        dialogVisible: false,
        dialogVisibleview1: false,
        titleName:'',
        
        //弹出窗相关变量定义
        ruleForm: {
         usr_dleaderid:'',
         usr_dleadername:'',
         usr_unitid:'',
         usr_station:'',
         urId:'',
         usr_id:'',
         usr_name: '',
         usr_pwd:'',
         usr_realname:'',
         role_id:'',
         usr_phone:'',
         usr_description:'',
         usr_status: '', 
         usr_isadmin: '',
         usr_sex:'',
            SexOptions: [{
                value: '0',
                label: '男'
            },{
                value: '1',
                label: '女'
            }],
        },

        rules: {
            usr_name: [{ required: true, message: '请输入登录账号', trigger: 'blur' }],
            usr_pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            usr_realname: [{ required: true, message: '请输入用户姓名', trigger: 'blur' }],
            role_id: [{ required: true, message: '请选择用户角色', trigger: 'blur' }],
            usr_sex: [{ required: true, message: '请选择用户性别', trigger: 'blur' }],
            usr_station: [{ required: true, message: '请选择用户站点', trigger: 'blur' }],
            usr_unitid: [{ required: true, message: '请选择运维单位', trigger: 'blur' }]
        },
        queryparam:{
            LoginCode:'',
            YwOrg:'',
            RealName:'',
            RoleType:'',
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
              {prop: 'usr_id', label: '用户id', align: 'center',isShow:false },
              {prop: 'usr_name', label: '账号名', width:120,align: 'center',isShow:true },
              {prop: 'usr_realname', label: '真实姓名', width:120,align: 'center',isShow:true },
              {prop: 'unitId', label: '运维单位id', align: 'center',isShow:false },
              {prop: 'unitName', label: '运维单位', width:180, align: 'center',isShow:true },
              {prop: 'role_name', label: '角色名称', align: 'center',isShow:true },
              {prop: 'usr_station', label: '所属站点编号', align: 'center',isShow:false },
              {prop: 'usr_phone', label: '联系电话', align: 'center',isShow:true, formatter(row, column, cellValue){
                    if(row.usr_phone==null||row.usr_phone==""){   //表示被锁定
                         return "-";
                     }else{
                          return `<div>${row.usr_phone}</div>`;
                     }}
               },
              {prop: 'usr_dleadername', label: '上级人员', align: 'center',isShow:true, formatter(row, column, cellValue){
                    if(row.usr_dleadername==null||row.usr_dleadername==""){   //表示被锁定
                         return "-";
                     }else{
                          return `<div>${row.usr_dleadername}</div>`;
                     }}
               },
              {prop: 'usr_status', label: '是否启用', width:150,align: 'center',isShow:false },
              {prop: 'usr_statusname', label: '是否启用', width:150,align: 'center',isShow:true },
              {prop: 'sStations', label: '运维站id', width:180,align: 'center',isShow:false },
              {prop: 'sStationNames', label: '运维站点',width:180, align: 'center',isShow:true }
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
                      hasbutton:'usr_handleEdit',
                      className:'success', //样式类名
                      disabled: false,   //是否禁用按钮 默认是danger的禁用样式
                      method: (index, row) => {
                        this.handleEdit(index, row)
                      }
                    }, {
                      id:'2',
                      label: '分配站点',
                      show: true,                     
                      hasbutton:'usr_handleStation',
                      bgColortype:'success',
                      className:'success',
                      disabled: false,
                      method: (index, row) => {
                        this.handlStation(index, row)
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


       //弹出窗关闭时的效果
        handleClose(done){
           this.$confirm('确认关闭?').then(_=>{
                done();  
                this.resetForm('ruleForm');})
            .catch(_=>{});
        },


        //下拉框改变赋值
        selectOptionEvent(val){
            this.ruleForm.usr_station=val;
        },
        selectChangeUnit(val, valObj) {
            this.model = val;
            this.queryparam.YwOrg=val;
		},
        selectChangeRoleType(val, valObj) {
            this.model = val;
            this.queryparam.RoleType=val;
		},
        selectChangeRoleId(val, valObj) {
            this.model = val;
            this.ruleForm.role_id=val;
		},
        selectChangeCUnit(val, valObj) {
            this.model = val;
            this.ruleForm.usr_unitid=val;
        },
        selectChangeLeadId(val, valObj) {
            this.model = val;
            this.ruleForm.usr_dleaderid=val;
            this.ruleForm.usr_dleadername =valObj.text;
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
                    ids += item.usr_id + ','
                } else {
                    ids += item.usr_id;
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
                url: self.api+'/api/Yw_UsrManage/DeleteUsr?usrId='+ids
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

        //保存分配的站点
        handleSave(){
           var self = this;   
           const Qs = require('qs');  
           //定义对象
           let configModel={};
           configModel.stationNames = self.peiZhiStationNames;
           configModel.stationIds = self.peiZhiStationIds;
           configModel.usrId = self.usrId;
           if(self.peiZhiStationIds=="")
            {  
                self.$message({
                    message: "请选择站点!",
                    type: "warning"  //success,warning,info,error
                });
                return;
            }                        
            this.$http({
                headers: {
                            'deviceCode': 'A95ZEF1-47B5-AC90BF3'
                },
                method: 'Post',
                url: self.api+'/api/Yw_UsrManage/SaveUsrConfigStation',
                data:Qs.stringify(configModel)
            }).then(res => {
                if(res.status==200){                
                        self.dialogVisibleview1=false;
                        self.getList();
                        self.$message({
                        message: res.data.message,
                        type: res.data.type  //warning,success,info,error
                        });    
                }
            }).catch(error => {             
            });        
        },
        getStations(obj){
            var self = this;
            var configIds='';
            var configNames='';
            if(obj!=null)
            {  
               obj.forEach(o=>{                   
                    configIds += o.sStation +',';
                    configNames +=o.sStationName + ',';
               });     
               self.peiZhiStationIds =configIds;    
               self.peiZhiStationNames= configNames;  
            }         
        },

        //页面提交(保存或者修改)
        submitForm(formName) {
            var self = this;
            const Qs = require('qs');
            this.$refs[formName].validate((valid) => {
                if (valid) {               
                    this.$http({
                        headers: {
                            'deviceCode': 'A95ZEF1-47B5-AC90BF3'
                        },
                        method: 'post',
                        url: self.api+'/api/Yw_UsrManage/UsrInfoSubmit',
                        data:Qs.stringify(self.ruleForm)
                    }).then(res => {
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
             if(self.ruleForm.usr_id!='')
             {
                self.resetForm('ruleForm');//重置表单
             }     
            self.ruleForm.usr_name='';
            self.ruleForm.usr_pwd='';
            self.ruleForm.usr_id='';             
            self.isWrite=false;
            self.ruleForm.usr_station='';
            self.ruleForm.usr_status =1;
            self.ruleForm.usr_isadmin =1;
            self.digTitle="添加用户";
            self.dialogVisible=true;
        },

        //编辑
        handleEdit (index, row) {  //操作栏编辑按钮
            var self=this;
            this.getUsrInfoById(row.usr_id);
            self.digTitle="编辑用户";
            self.isWrite=true;
            self.dialogVisible=true;
        },

        //获取用户分配的站点
        handlStation(index, row) {  //获取分配站点信息        
            var self=this;
            self.usrId =row.usr_id;
            this.getUsrStationRef(row.usr_id);
            self.dialogVisibleview1=true;
        },
        getUsrStationRef(id){
            var self = this;          
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_UsrManage/GetUsrConfigStation?usrId=' + id
            }).then(res => {
                if(res.status==200){
                    self.CheckData=res.data.data;      
                    this.getStations(self.CheckData);             
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
                url: this.api+'/api/Yw_UsrManage/GetUsrPageList?pageSize=' + self.page.pageSize + '&pageIndex=' + self.page.pageNo+'&stationId='+ self.queryparam.chooseStationIds +'&loginCode=' + self.queryparam.LoginCode + '&ywOrg=' + self.queryparam.YwOrg +'&realName=' + self.queryparam.RealName+'&roleType=' + self.queryparam.RoleType
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
       
        //依据用户id获取用户信息
        getUsrInfoById(id){          
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_UsrManage/GetUserById?usrId=' + id
            }).then(res => {
                if(res.status==200){
                    self.ruleForm.role_id=res.data.data.role_id;
                    self.ruleForm.usr_realname=res.data.data.usr_realname;
                    self.ruleForm.usr_pwd=res.data.data.usr_pwd;
                    self.ruleForm.usr_name=res.data.data.usr_name;
                    self.ruleForm.usr_sex=(res.data.data.usr_sex==false? "0" :"1");
                    self.ruleForm.usr_description =res.data.data.usr_description;
                    self.ruleForm.usr_status =res.data.data.usr_status;
                    self.ruleForm.usr_isadmin =res.data.data.usr_isadmin;
                    self.ruleForm.usr_id =res.data.data.usr_id;
                    self.ruleForm.urId=res.data.data.urId;
                    self.ruleForm.usr_phone = res.data.data.usr_phone;
                    self.ruleForm.usr_unitid= res.data.data.usr_unitid;
                    self.ruleForm.usr_station= res.data.data.usr_station;
                    //上级人员
                    self.ruleForm.usr_dleaderid = res.data.data.usr_dleaderid.toString();
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
                url: this.api+'/api/Yw_UsrManage/GetUsrListDownLoad?pageSize=' + self.page.pageSize + '&pageIndex=' + self.page.pageNo+'&stationId='+self.queryparam.chooseStationIds+'&loginCode=' + self.queryparam.LoginCode + '&ywOrg=' + self.queryparam.YwOrg +'&realName=' + self.queryparam.RealName+'&roleType=' + self.queryparam.RoleType
            }).then(res => {
                if(res.status==200){              
    let blob = new Blob([res.data], {type: 'application/vnd.ms-excel' })
    let  downTime= self.downLoadDate();
    const fileName = downTime +'-用户站点册.xls';
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
        }
    },
    components:{
        treeSStation,rateTable,rateSelect,rateCascader,configTreeStation
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
/* .el-footer {height: 50px;text-align: left;}
.el-footer .el-pagination{margin: 14px 0;} */
</style>