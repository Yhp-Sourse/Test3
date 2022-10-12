<template>
    <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
        <!-- <el-aside width="300px">
            
        </el-aside> -->
        
        <el-container>
            <el-header>
                <div class="search">
                     <el-form :inline="true" class="demo-form-inline" >
                        <el-form-item label="标题名称：">
                            <el-input v-model="queryparam.QueTitle"  placeholder="标题名称"></el-input>
                        </el-form-item>
                        <el-form-item class="btn">
                            <el-button type="primary" v-has="'problemFeedback_handleSearch'" icon="el-icon-search" @click="getList();">查询</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="tools">
                    <el-button  size="small" class=" el-button--iconButton"  @click="debounce()">防抖测试</el-button>
                    <el-button size="small" class=" el-button--iconButton"  @click="throttle()">节流测试</el-button>
                    <el-button size="small" class=" el-button--iconButton" v-has="'problemFeedback_handleAdd'" icon="el-icon-plus" style="text-overflow: initial;" @click="handleAdd">发帖</el-button>
                    <el-button size="small" class=" el-button--iconButton" v-has="'problemFeedback_handleMultiplDel'" icon="el-icon-delete" style="text-overflow: initial;" @click="handleMultiplDel">删除</el-button>
                </div>
            </el-header>
            
            <el-main>
                <rate-table :list="list"
                    @handleSelectionChange="handleSelectionChange"
                    @sizeChange="getSizeChange"
                    @currentPage="getCurrentPage"
                    @handleCellClick="handleCellClick"
                    :options="options"
                    :columns="columns"
                    :operates="operates"
                    :pageShow="page.pageShow"
                    :total="page.total"
                ></rate-table>
            </el-main>
        </el-container>
        <!-- <el-aside width="300px">
            
        </el-aside> -->
        <el-dialog
            title="发帖"
            :visible.sync="dialogVisible"
            width="50%"
            >
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
                <el-row>
                    <el-col :span="24">
                        <div>
                            <el-form-item v-show="false" label="" prop="UnitId">
                                <el-input v-model="ruleForm.QueId" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="标题：" prop="QueTitle">
                                <el-input v-model="ruleForm.QueTitle" autocomplete="off"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="12">
                        <div>
                            <el-form-item label="内容：" prop="Content">
                                <el-input  type="textarea" :rows="9" v-model="ruleForm.Content" autocomplete="off"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                            <el-form-item v-show="true" label="附件：" prop="Id">
                                <rateUpload :todos="todos" :limit='10' :Ismultiple='true' :BusinessId='ruleForm.QueId' :BusinessType='7' @uploadSuccess='uploadSuccess' @delFile="delFile">
                                    <template slot-scope="slotProps">
                                        <p style="position:relactive">{{slotProps.todo.fileName}}</p>
                                    </template>
                                </rateUpload>
                            </el-form-item>
                        </div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="9">&nbsp;</el-col>
                    <el-col :span="6">
                        <div> 
                           <el-form-item>
                                <el-button type="primary" v-has="'problemFeedback_handleSubmit'"  @click="submitForm('ruleForm')">提交</el-button>
                                <el-button @click="resetForm('ruleForm')">重置</el-button>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="9">&nbsp;</el-col>
                </el-row>
                
            </el-form>
        </el-dialog>
    </el-container>


    
</template>
<script>
import treeSStation from '../common/treeSStation' //引入treeSStation组件
import rateTable  from '../common/rateTable'    //引入rateTable组件
import rateCascader from '../common/rateCascader' //引入rateCascader组件
import rateSelect from '../common/rateSelect';
import rateUpload from '../common/rateUpload' //引入rateCascader组件
import handleDt from '../../../utils/debounce';
import { get, post } from "../../../utils/http";

export default {
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
            QueId:'',
            QueTitle:'',
            Content:'',
            FileName:'',
            FileUrl:'',
            OptType:1
        },
        rules: {
            QueId:[{ required: false, message: '', trigger: 'blur' }],
            QueTitle: [{ required: true, message: '必填项', trigger: 'blur' }],
            Content: [{ required: true, message: '必填项', trigger: 'blur' }],
            FileName: [{ required: false, message: '必填项', trigger: 'blur' }],
            FileUrl: [{ required: false, message: '必填项', trigger: 'blur' }],
        },
        queryparam:{
            StartDate:'',
            EndDate:'',
            QueTitle:''
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
          {prop: 'queTitle',label: '标题',align: 'center',width:300,isShow:true,
                formatter(row, column, cellValue){
                    return "<a style='color:#01AAED;'>"+row.queTitle+"</a>"
                }
          },//formatter重构//return `返回参数`
          {prop: 'stateName',label: '状态',align: 'center',isShow:true},
          {prop: 'usrName',label: '创建人',align: 'center',isShow:true},
          {prop: 'sDateTime',label: '创建时间',align: 'center',width:200,isShow:true,formatter(row, column, cellValue){
              if(row.sDateTime){
                  return row.sDateTime.replace("T"," ");
              }
          }},
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
                className:'success', //样式类名
                hasbutton:'problemFeedback_handleEdit',//按钮权限控制
                disabled: false,   //是否禁用按钮 默认是danger的禁用样式
                method: (index, row) => {
                    this.handleEdit(index, row)
                }
            },
            {
                id:'2',
                label: '删除',
                show: true,
                bgColortype:'danger',
                className:'searchAll',
                hasbutton:'problemFeedback_handleMultiplDel',//按钮权限控制
                disabled: false,
                method: (index, row) => {
                    this.handledel(index, row)
                }
            }]
        }, // 列操作按钮
        todos:[],//上传附件
      } //return ending
    },
    mounted(){
        // window.addEventListener('scroll',this.throttle(this.scroll,5000));
    },
    updated(){

    },
    destroyed(){
        window.removeEventListener('scroll',this.scroll);
    },
    methods:{
        scroll(){
            debugger
            console.log("页面滚动了");
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
        handleView(queId) {  
           let obj = { QueId:queId };
           this.$emit('jump',{param:'反馈详情',path:'/index/questionFeedback?obj='+ JSON.stringify(obj),isjump:true},);
        },
        handleCellClick(obj){//单元格单击事件处理函数
            switch(obj.column.label){
                case "标题":
                    this.handleView(obj.row.queId);
                    break;
                default : break;
            }
        },
        selectChange(val, valObj) {
            this.model = val;
            this.queryparam.UnitId=val;
			// console.log("valObj=>", valObj);
		},
        // 防抖（按钮点击）
        debounce: handleDt.debounce(async () => {
            console.log('不管你怎么点击，我只在2s后触发事件，2s内点击我也要等到2s后再触发事件')
            let res = await get('http://59.172.208.254:93/api/Yw_Vehicle/GetList?pagesize=10&pageindex=1');
            console.log(res);
        }, 2000),
        // 节流（请求数据的方法）
        throttle: handleDt.throttle(async () => {
            console.log('第一次请求马上触发，往后不管你怎么触发，我只在5s后请求,5s内触发我要重新计算时间的')
            let res = await get('http://59.172.208.254:93/api/Yw_Vehicle/GetList?pagesize=10&pageindex=1');
            console.log(res);
        }, 5000),
        submitForm(formName) {
            debugger
            console.log("提交表单！");
            this.$refs["ruleForm"].validate((valid) => {
                if (valid) {
                    var self = this;
                    this.$http({
                        headers: {
                            'deviceCode': 'A95ZEF1-47B5-AC90BF3'
                        },
                        method: 'post',
                        url: self.api+'/api/BBS/Submit',
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
        uploadSuccess(file){
            this.ruleForm.FileName=file.fileName;
            this.ruleForm.FileUrl=file.fileUrl;
        },
        async delFile(Obj){
            //删除附件接口需重新写... 
            // let res = await this.$httpPromise.get(this.api+'/api/Common/DeleteFile?BusinessId='+Obj.QueId);
            this.$message({ message: "删除成功！",type: 'success'});
            this.todos.splice(0,1);//删除图片数据 或者直接.length=0  [] 清空数组
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
                    ids += item.queId + ','
                } else {
                    ids += item.queId;
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
                url: self.api+'/api/BBS/Delmultipl?ids='+ids
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
                url: self.api+'/api/BBS/Singelmultipl?QueId='+id
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
            this.getToFirst("");
            this.ruleForm.OptType=1;
            this.dialogVisible=!this.dialogVisible;
        },
        handleEdit (index, row) {  //操作栏编辑按钮
            var self=this;
            this.getToFirst(row.queId);
            this.ruleForm.OptType=2;
            self.dialogVisible=!self.dialogVisible;

        },
        handledel(index, row) {  //操作栏删除按钮
            var self=this;
            this.$confirm('确认删除？').then(function () {
                self.Singelmultipl(row.queId);
            }).catch(function () {
                
            });
        },
        getList(obj){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/BBS/GetList?pagesize=' + self.page.pageSize + '&pageindex=' + self.page.pageNo +'&QueTitle='+self.queryparam.QueTitle
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
        getToFirst(id){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/BBS/GetToFirst?QueId=' + id
            }).then(res => {
                self.todos=[];
                if(res.status==200){
                    self.ruleForm.QueId=res.data.data.queId;
                    self.ruleForm.QueTitle=res.data.data.queTitle;
                    self.ruleForm.Content=res.data.data.content;
                    self.ruleForm.FileName=res.data.data.fileName;
                    self.todos.push({QueId:res.data.data.queId,fileName:res.data.data.fileName});
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
        treeSStation,rateTable,rateCascader,rateSelect,rateUpload
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