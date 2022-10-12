<template>
    <div id="v_ywArrivalRecord">
        <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
            <!-- <el-aside width="250px">
                <treeSStation @checkedNodes="getSearchStations"></treeSStation>
            </el-aside> -->
            <!--  -->
            <el-container>
                <el-header>
                    <div class="search">
                        <el-form :inline="true" class="demo-form-inline" >
                            <!-- <el-form-item label="状态：">
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
                            </el-form-item> -->
                            <el-form-item label="录入日期：">
                                <el-date-picker v-model="queryparam.startDate" type="date" placeholder="选择开始日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
                            </el-form-item>
                            <el-form-item label="-">
                                <el-date-picker v-model="queryparam.endDate" type="date" placeholder="选择结束日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
                            </el-form-item>
                            <el-form-item class="btn">
                                <el-button type="primary" v-has="'arrivalRecord_handleSearch'" icon="el-icon-search" @click="getList();">查询</el-button>
                                <el-button type="primary" icon="el-icon-download"  v-has="'arrivalRecord_handleExport'"    @click="download();">导出</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="tools">
                        <!-- <el-button size="small" class=" el-button--iconButton" icon="el-icon-plus" style="text-overflow: initial;" v-has="'arrivalRecord_handleAdd'" @click="handleAdd">添加</el-button>
                        <el-button size="small" class=" el-button--iconButton" icon="el-icon-delete" style="text-overflow: initial;" v-has="'arrivalRecord_handleMultiplDel'" @click="handleMultiplDel">删除</el-button> -->
                    </div>
                </el-header>
                
                <el-main>
                    <rate-table :list="list"
                        @handleSelectionChange="handleSelectionChange"
                        @handleCellClick="handleCellClick"
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
                title="进站记录"
                :visible.sync="dialogVisible"
                width="50%"
                >
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
                    <el-row>
                        <el-col :span="24">
                            <div>
                               <rateAuditRecord :isSave='isSave' :active="ruleForm.Status" :businessType='3' :businessId='ruleForm.Id.toString()' :auditerId='aduitForm.AuditerId' :result='aduitForm.Result' :reason='aduitForm.Reason'></rateAuditRecord>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                            <div>
                                <el-form-item v-show="false" label="主键Id：" prop="Id">
                                    <el-input v-model="ruleForm.Id" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="站点名称：" prop="SStation">
                                    <rateCascader :selectOption='ruleForm.SStation' @selectOptionEvent="selectOptionEvent"></rateCascader>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                            <div>
                                <el-form-item label="进站时间：" prop="ArrivalTime">
                                    <el-date-picker v-model="ruleForm.ArrivalTime" type="datetime" placeholder="选择时间"></el-date-picker>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div> 
                                <el-form-item label="出站时间：" prop="OutTime">
                                    <el-date-picker v-model="ruleForm.OutTime" type="datetime" placeholder="选择时间"></el-date-picker>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div>
                                <el-form-item label="进站原因：" prop="Reason">
                                    <el-input  type="textarea" v-model="ruleForm.Reason" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div> 
                                 <el-form-item label="备注：" prop="Remarks">
                                    <el-input  type="textarea" v-model="ruleForm.Remarks" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                            <div>
                                <el-form-item v-show="true" label="附件：" prop="Id">
                                    <rateUpload :limit='1' :Ismultiple='false' :BusinessId='ruleForm.Id' :BusinessType='3' @uploadSuccess='uploadSuccess'></rateUpload>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12" v-show='false'>
                            <div>
                                <!-- <el-form-item v-show="false" label="：" prop="">
                                    <el-input v-model="ruleForm.FileName" autocomplete="off"></el-input>
                                </el-form-item>
                                 <el-form-item v-show="false" label="：" prop="">
                                    <el-input v-model="ruleForm.FileUrl" autocomplete="off"></el-input>
                                </el-form-item> -->
                                <el-form-item v-show="false" label="：" prop="">
                                    <el-input v-model="ruleForm.Status" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
 

                   <el-row>
                        <el-col :span="6">&nbsp;</el-col>
                        <el-col :span="12">
                            <div> 
                               <el-form-item>
                                    <el-button v-if='actionStatus.sava' type="primary" @click="submitForm('ruleForm','保存')">保存</el-button>
                                    <el-button v-if='actionStatus.submit' type="primary" @click="submitForm('ruleForm','提交')">提交</el-button>
                                    <el-button v-if='actionStatus.aduit' type="primary" @click="aduitFormDialogVisible=!aduitFormDialogVisible">审核</el-button>
                                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="6">&nbsp;</el-col>
                    </el-row>
                    
                </el-form>
            </el-dialog>
        </div>

        <div>
            <el-dialog
                title="审核"
                :visible.sync="aduitFormDialogVisible"
                width="30%"
                >
                <el-form :model="aduitForm" status-icon ref="aduitForm" label-width="100px" class="demo-aduitForm" size="mini">
                    <el-row>
                        <el-col :span="24">
                            <div>
                                <el-form-item label="审核结果：" prop="Result">
                                    <el-radio-group v-model="aduitForm.Result">
                                        <el-radio border label="通过"></el-radio>
                                        <el-radio border label="不通过"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <div> 
                                <el-form-item label="原因：" prop="Reason">
                                    <el-input  type="textarea" v-model="aduitForm.Reason" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">&nbsp;</el-col>
                        <el-col :span="12">
                            <div> 
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('aduitForm','审核')">确定</el-button>
                                    <el-button @click="aduitFormDialogVisible=!aduitFormDialogVisible">取消</el-button>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="6">&nbsp;</el-col>
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
import rateUpload from '../common/rateUpload' //引入rateCascader组件
import rateSelect from '../common/rateSelect';
import rateAuditRecord from '../common/rateAuditRecord';


export default {
    name:'v_ywArrivalRecord',
    data() {
      return {
          rateSelect:{
            model: '',
            selectUrl:this.api+'/api/Select/GetSelectList?TypeCode=001001',
		    urlParams: JSON.stringify({}),
            optionKeys: JSON.stringify({
                value: 'dictCode',
                label: 'info'
            }),
            showLabels: 'info',
            disables: '',
        },
        primarykey:'',
        isUpload:false,
        dialogVisible: false,
        aduitFormDialogVisible: false,
        isSave:false,//当ruleForm.Status改变时是否保存审核记录
        aduitForm: {
            AuditerId: 0,
            Result: '通过',
            Reason: '',
        },
        actionStatus:{
            sava:false,
            submit:false,
            aduit:false,
        },
        ruleForm: {
            Id: '',
            SStation: '',
            ArrivalTime: '',
            OutTime: '',
            Reason: '',
            Remarks: '',
            FileName: '',
            FileUrl: '',
            Status:0,
            Base64:'',
            AuditorReason:'',
            OptType:1,
        },
        rules: {
            Id:[{ required: false, message: '', trigger: 'blur' }],
            SStation: [{ required: true, message: '请选择站点', trigger: 'blur' }],
            ArrivalTime: [{ required: true, message: '请输入进站时间', trigger: 'blur' }],
            OutTime: [{ required: true, message: '请输入出站时间', trigger: 'blur' }],
            Reason: [{ required: false, message: '请输入进站原因', trigger: 'blur' }],
            Remarks: [{ required: false, message: '请输入备注', trigger: 'blur' }],
            FileName: [{ required: false, message: '请上传附件', trigger: 'blur' }],
            FileUrl: [{ required: false, message: '请上传附件', trigger: 'blur' }]
        },
        queryparam:{
            startDate:'',
            endDate:'',
            Status:'',
            chooseStationIds:'',
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
          {prop: 'sStationName',label: '站点名称',align: 'center',isShow:true},
          {prop: 'count',label: '次数',align: 'center',isShow:true},
        ],// 需要展示的列
        operates: {   //操作栏
          width:200,      
          fixed: 'right',
          list: [
            ]
        }, // 列操作按钮
      } //return ending
    },
    watch: {
        primarykey() {
            this.setIsUpload();
        }
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

        setIsUpload(){
            this.isUpload=this.primarykey!=""?true:false;
        },
        stepChange(index){//步骤条          
        },
        getTaskList(obj){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_Task/GetTaskList?pagesize=' + self.page.pageSize + '&pageindex=' + self.page.pageNo+ '&TaskNo=' + self.queryparam.TaskNo
            }).then(res => {
                if(res.status==200){
                    self.list=res.data.data;
                    self.page.total = res.data.count;
                }
            }).catch(error => {
                console.log(error);
            });
        },
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
            this.queryparam.Status=val;
        },
        submitForm(formName,actionName) {
            switch(actionName){
                case '保存':
                    this.ruleForm.Status=1;//待提交
                    this.isSave=true;//新增一条审核记录
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            var self = this;
                            this.$http({
                                headers: {
                                    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
                                },
                                method: 'post',
                                url: self.api+'/api/Yw_ArrivalLog/Submit',
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
                    break;
                case '提交':
                    this.ruleForm.Status=2;//待审核
                    this.isSave=true;//新增一条审核记录
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            var self = this;
                            this.$http({
                                headers: {
                                    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
                                },
                                method: 'post',
                                url: self.api+'/api/Yw_ArrivalLog/Submit',
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
                    break
                case '审核':
                    this.ruleForm.Status=this.aduitForm.Result=='通过'?3:1;//3:已审核,1:待提交
                    this.isSave=true;//新增一条审核记录
                    this.ruleForm.OptType=6;//操作类型：6审核
                    this.ruleForm.AuditorReason=this.aduitForm.Reason;
                    var self = this;
                    this.$http({
                        headers: {
                            'deviceCode': 'A95ZEF1-47B5-AC90BF3'
                        },
                        method: 'post',
                        url: self.api+'/api/Yw_ArrivalLog/Submit',
                        data:self.Qs.stringify(self.ruleForm)
                    }).then(res => {
                        if(res.status==200){
                            self.aduitFormDialogVisible=false;
                            self.dialogVisible=false;
                            self.getList();
                            self.$message({
                                message: res.data.message,
                                type: res.data.type  //warning,success,info,error
                            });
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                    break;
                default : break;
            }
            
        },
        resetForm(formName) {
            this.$nextTick(()=>{
                this.$refs[formName].resetFields();
            });
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
                url: self.api+'/api/Yw_ArrivalLog/Delmultipl?ids='+ids
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
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/Yw_ArrivalLog/Singelmultipl?Id='+id
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
        handleCellClick(obj){//单元格单击事件处理函数
            switch(obj.column.label){
                case "附件":
                    if(obj.row.fileName!=null){
                        this.commonDownLoad(obj.row.fileName,obj.row.fileUrl);   
                    }                 
                    break;
                default : break;
            }
            
        },
        commonDownLoad(fileName,path){
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/DownLoad/commonGetDownLoadPath?partialPath='+path
            }).then(res => {
                if(res.data.code==200){
                    location.href = self.api + '/api/DownLoad/commonDownLoad?fileName='+fileName+'&path='+res.data.data;        
                } 
                if(res.data.code==404){
                    self.$message({
                    message: "下载文件已被删除，无法下载！",
                    type: "warning"  //success,warning,info,error
                    });
                }
            }).catch(error => {
                console.log(error);
            });
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
        setActionStatus(){//根据状态设置按钮是否显示
            this.actionStatus.sava=this.ruleForm.Status<=1?true:false;
            this.actionStatus.submit=this.ruleForm.Status<=1?true:false;
            this.actionStatus.aduit=this.ruleForm.Status==2?true:false;
        },
        handleAdd(){
            // self.resetForm('ruleForm');//重置表单
            // self.ruleForm.Id='';//如果上一行代码执行没有效果，则强制设置主键【id】为''。
            this.getToFirst(0);
            this.ruleForm.OptType=1;
            this.dialogVisible=!this.dialogVisible;
        },
        handleEdit (index,row) {  //操作栏编辑按钮
            var self=this;
            this.getToFirst(row.id);
            this.ruleForm.OptType=2;
            self.dialogVisible=!self.dialogVisible;
        },
        handleCheck(index, row) {
            //操作栏编辑按钮
            var self = this;
            this.getToFirst(row.id);
            self.dialogVisible = !self.dialogVisible;
        },
        handledel(index,row) {  //操作栏删除按钮
            var self=this;
            this.$confirm('确认删除？').then(function () {
                self.Singelmultipl(row.id);
            }).catch(function () {
                
            });
        },
        uploadSuccess(file){
            this.ruleForm.FileName=file.fileName;
            this.ruleForm.FileUrl=file.fileUrl;
        },
        getList(obj){
            var self = this;
             //判断开始时间和结束时间
            if(self.queryparam.startDate>self.queryparam.endDate){
                    self.$message({
                    message: "开始时间不能大于结束时间!",
                    type: "warning"  });
                    return;
            }           
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_ArrivalLog/GetListTotal?pagesize=' + self.page.pageSize + '&pageindex=' + self.page.pageNo+ '&SStation='+self.queryparam.chooseStationIds+' &startDate=' + self.queryparam.startDate + '&endDate=' + self.queryparam.endDate+ '&Status=' + self.queryparam.Status
            }).then(res => {
                if(res.status==200){
                    debugger
                    self.list=res.data.data;
                    self.page.total = res.data.count;
                    self.options.loading=false;
                }
          }).catch(error => {
            console.log(error);
          });
        },  
        getToFirst(id){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_ArrivalLog/GetToFirst?Id=' + id
            }).then(res => {
                if(res.status==200){
                    self.ruleForm.Id=res.data.data.id;
                    self.ruleForm.SStation=res.data.data.sStation;
                    self.ruleForm.ArrivalTime=res.data.data.arrivalTime;
                    self.ruleForm.OutTime=res.data.data.outTime;
                    self.ruleForm.Reason=res.data.data.reason;
                    self.ruleForm.Remarks=res.data.data.remarks;
                    self.ruleForm.FileName=res.data.data.fileName;
                    self.ruleForm.FileUrl=res.data.data.fileUrl;
                    self.ruleForm.Status=res.data.data.status;

                    self.setActionStatus();//设置按钮状态
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
                url: this.api+'/api/Yw_ArrivalLog/GetListTotalDownLoad?pagesize=' + self.page.pageSize + '&pageindex=' + self.page.pageNo+ '&SStation= '+ self.queryparam.chooseStationIds + ' &startDate=' + self.queryparam.startDate + '&endDate=' + self.queryparam.endDate+ '&Status=' + self.queryparam.Status
            }).then(res => {
                if(res.status==200){              
    let blob = new Blob([res.data], {type: 'application/vnd.ms-excel' })
    let  downTime= self.downLoadDate();
    const fileName = downTime +'-进站记录统计.xls';
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
        treeSStation,rateTable,rateCascader,rateUpload,rateSelect,rateAuditRecord
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