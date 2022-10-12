<template>
    <div id="v_deviceOnlineInfo">
        <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
            <el-aside width="250px">
                <treeSStation  :IsCheckBox='true' @checkedNodes="getList"></treeSStation>
            </el-aside>
            <el-container>
                <el-header>              
                    <div class="search">
                        <el-form :inline="true" class="demo-form-inline">                           
                          <el-form-item label="申请时间：">
                                <el-date-picker
                                               v-model="queryparam.StartTime"
                                               type="date"   
                                                :clearable=true                                          
                                               value-format="yyyy-MM-dd"
                                               placeholder="请选择日期">
                                    </el-date-picker>
                                 至
                                <el-date-picker
                                               v-model="queryparam.EndTime"
                                               type="date"
                                               :clearable=true
                                               value-format="yyyy-MM-dd"
                                               placeholder="请选择日期">
                                    </el-date-picker>
                          </el-form-item>

                         <el-form-item label="状态：">
                                <el-select v-model='queryparam.Status'   placeholder='请选择状态类型' style="width: 100%;">
                                       <el-option v-for='(item, index) in this.StatusOptions' :key='index' :label='item.label' :value='item.value'></el-option>
                                </el-select>
                         </el-form-item>
                        
                            <el-form-item class="btn">
                                <el-button type="primary" icon="el-icon-search"  v-has="'equStatusChange_handleSearch'"   @click="getList();">查询</el-button>
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

        <div>
            <el-dialog
                :title="digTitle"
                :visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose"
                >
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">                                                                           
                    <el-row>                                         
                        <el-col :span="24">
                             <div>
                                <el-form-item label="备注：" prop="reMark">
                                   <el-input v-model="ruleForm.reMark" autocomplete="off" type="textarea" :rows="6" ></el-input>
                                </el-form-item>
                            </div>                         
                        </el-col>                                       
                    </el-row> 

                     <el-row>
                        <el-col :span="6">&nbsp;</el-col>
                        <el-col :span="9">
                            <div> 
                               <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm',1)">通过</el-button>
                                    <el-button type="primary" @click="submitForm('ruleForm',-1)">不通过</el-button>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="9">&nbsp;</el-col>
                   </el-row>

                </el-form>
            </el-dialog>
        </div>

        <div>
            <el-dialog
                :title="digTitle"
                :visible.sync="dialogVisibleview1"
                width="50%"
                :before-close="handleEditClose"
                >
                <el-form :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm" size="mini">
                    <el-row>
                        <el-col :span="12">
                            <div>
                                <el-form-item label="状态名：" prop="stateName">
                                    <el-input v-model="ruleForm1.stateName" autocomplete="off" disabled></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div>
                                <el-form-item label="单位：" prop="stateUnit">
                                    <el-input v-model="ruleForm1.stateUnit" autocomplete="off" disabled></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>                                                                
                         <el-col :span="12">
                            <div> 
                                <el-form-item label="下限：" prop="after_lower_limit">
                                     <el-input-number v-model="ruleForm1.after_lower_limit"  :min="-100000" :max="100000" autocomplete="off" style="width: 100%;"></el-input-number>
                                </el-form-item>
                            </div>
                        </el-col>    
                         <el-col :span="12">
                            <div> 
                                <el-form-item label="上限：" prop="after_upper_limit">
                                    <el-input-number v-model="ruleForm1.after_upper_limit"  :min="-100000" :max="100000" autocomplete="off" style="width: 100%;"></el-input-number>
                                </el-form-item>
                            </div>
                        </el-col>                         
                    </el-row>

                    <el-row>                                                                
                         <el-col :span="12">
                            <div> 
                                <el-form-item label="报警周期：" prop="after_critical_time" >
                           
                                    <el-input-number v-model="ruleForm1.after_critical_time"  :min="0" :max="500000" autocomplete="off" style="width: 100%;"></el-input-number>
                                </el-form-item>
                            </div>
                        </el-col>    
                        <el-col :span="12">
                            <div> 
                                <el-form-item label="关键参数：" prop="after_state_key">
                                   <el-select v-model='ruleForm1.after_state_key'   placeholder='请选择是否关键参数' style="width: 100%;">
                                       <el-option v-for='(item, index) in StateKeyOptions' :key='index' :label='item.label' :value='item.value'></el-option>
                                   </el-select>
                                </el-form-item>
                            </div>
                        </el-col>                          
                    </el-row>
                    
                   <el-row>
                        <el-col :span="9">&nbsp;</el-col>
                        <el-col :span="6">
                            <div> 
                               <el-form-item>
                                    <el-button type="primary" @click="submitEditForm('ruleForm1')">提交</el-button>
                                    <el-button @click="closeEditDig()">取消</el-button>
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
import treeSStation from '../common/treeSStation'
import rateTable  from '../common/rateTable'    //引入table组件
import rateSelect from '../common/rateSelect';
import rateCascader from '../common/rateCascader' //引入rateCascader组件


export default {
    name:'v_deviceOnlineInfo',
    data() {
    
      return {  
        
        StateKeyOptions: [{
                value: '0',
                label: '否'
        },{
                value: '1',
                label: '范围关键参数'
        },{
                value: '2',
                label: '固定关键参数'
        }],

        StatusOptions: [{
                value: '-100',
                label: '全部'
            },{
                value: '0',
                label: '未审核'
            },{
                value: '1',
                label: '待下发'
            },{
                value: '2',
                label: '完成变更'
            },{
                value: '-1',
                label: '审核不通过'
            },{
                value: '-2',
                label: '下发失败'
            }],
        
        
        usrId:'',
        digTitle:'',
        CheckData:[],              // [{sStation:'SS4301051'},{sStation:'SS4301051'}]
        dialogVisible: false,
        dialogVisibleview1: false,
         
        rules:{},
        rules1:{},
        ruleForm:{
            reMark:'',
            id:'',
            status:'',
        },

        ruleForm1:{
           id:'',
           after_lower_limit:'',
           after_upper_limit:'',
           after_critical_time:'',
           stateName:'',
           stateUnit:'',
           after_state_key:'',
        },

        queryparam:{     
            Status:'-100',
            StartTime:'',
            EndTime:'',
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
              {prop: 'sStationName', label: '站点', align: 'center',isShow:true },
              {prop: 'param', label: '参数', width:120,align: 'center',isShow:true },
              {prop: 'stateName', label: '状态名', width:120,align: 'center',isShow:true },
              {prop: 'stateUnit', label: '单位', align: 'center',isShow:true },
              {prop: 'before_lower_limit', label: '原下限', width:180, align: 'center',isShow:true },
              {prop: 'after_lower_limit', label: '申请下限', align: 'center',isShow:true },
              {prop: 'before_upper_limit', label: '原上限', align: 'center',isShow:true },
              {prop: 'after_upper_limit', label: '申请上限', align: 'center',isShow:true },
              {prop: 'before_critical_time', label: '原持续周期报警', align: 'center',isShow:true },
              {prop: 'after_critical_time', label: '申请持续周期报警', align: 'center',isShow:true },
              {prop: 'show_Before_state_key', label: '原是否关键参数', align: 'center',isShow:true },
              {prop: 'show_After_state_key', label: '申请是否关键参数', align: 'center',isShow:true },
              {prop: 'status_Show', label: '状态', align: 'center',isShow:true },
              {prop: 'createByName', label: '申请人', align: 'center',isShow:true },
              {prop: 'show_CreateTime', label: '申请时间', align: 'center',isShow:true },
               {prop: 'auditByName', label: '审核人', align: 'center',isShow:true },
               {prop: 'show_AuditTime', label: '审核时间', align: 'center',isShow:true },
               {prop: 'show_SucessTime', label: '成功变更时间', align: 'center',isShow:true },
               {prop: 'reMark', label: '备注', align: 'center',isShow:true }
            ],// 需要展示的列
            operates: {   //操作栏
              width:200,      
              fixed: 'right',
              list: [
                    {
                      id:'1',
                      label: '审核',
                      bgColortype:'success',
                      show: true,   //是否显示按钮                      
                      className:'success', //样式类名
                      hasbutton:'equStatusChange_handleCheck',
                      disabled: false,   //是否禁用按钮 默认是danger的禁用样式
                      method: (index, row) => {
                        if(row.status==0){
                           this.handleJudge(index, row)
                        }else{
                           this.$message({
                           message: "已经审核过的无法在进行审核!",
                           type: "warning"  
                           });
                           return false;
                        }                     
                      }
                    },{
                      id:'2',
                      label: '下发',
                      bgColortype:'success',
                      show: true,   //是否显示按钮                      
                      className:'success', //样式类名
                      hasbutton:'equStatusChange_handleArrangement',
                      disabled: false,   //是否禁用按钮 默认是danger的禁用样式
                      method: (index, row) => {
                        if(row.status==1){
                           this.handleChangeStatus(index, row)                           
                        }else{
                            this.$message({
                           message: "请先进行审核或者审核通过后进行下发",
                           type: "warning"  
                           });
                           return false;         
                        }                                  
                      }
                    },{
                      id:'3',
                      label: '修改',
                      bgColortype:'success',
                      show: true,   //是否显示按钮                      
                      className:'success', //样式类名
                      hasbutton:'equStatusChange_handleEdit',
                      disabled: false,   //是否禁用按钮 默认是danger的禁用样式
                      method: (index, row) => {
                        if(row.status==-1){
                            this.handleEdit(index, row)                
                        }else{
                           this.$message({
                           message: "审核不通过后才能进行修改!",
                           type: "warning"  
                           });
                           return false;         
                        }                       
                      }
                    },{
                      id:'4',
                      label: '重新下发',
                      bgColortype:'success',
                      show: true,   //是否显示按钮                      
                      className:'success', //样式类名
                      hasbutton:'equStatusChange_handleArrangement',
                      disabled: false,   //是否禁用按钮 默认是danger的禁用样式
                      method: (index, row) => {
                        if(row.status==-2){
                             this.handleChangeStatus(index, row)                       
                        }else{
                           this.$message({
                           message: "请先进行审核或者状态为审核通过或者第一次下发",
                           type: "warning"  
                           });
                           return false; 
                        }                      
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

        //弹出窗关闭时的效果
        handleEditClose(done){
           this.$confirm('确认关闭?').then(_=>{
                done();  
                this.resetForm('ruleForm1');})
            .catch(_=>{});
        },

        //编辑
        handleEdit(index, row){
           var self=this;
           self.ruleForm1.id= row.id;
           self.digTitle="修改";
           self.ruleForm1.stateName=row.stateName;
           self.ruleForm1.stateUnit=row.stateUnit;
           self.dialogVisibleview1=true;
           self.getEditInfo(row.id);
        },
         
        //获取编辑信息
        getEditInfo(id){
            var self=this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_VarStatus/GetVarChangeInfoById?id=' + id
            }).then(res => {
                if(res.status==200){
                    self.ruleForm1.after_lower_limit=res.data.data.after_lower_limit;
                    self.ruleForm1.after_upper_limit=res.data.data.after_upper_limit;
                    self.ruleForm1.after_critical_time=res.data.data.after_critical_time;
                    self.ruleForm1.after_state_key=res.data.data.after_state_key.toString();
                }
          }).catch(error => {
            console.log(error);
          });
        },

        //审核
        handleJudge (index, row) {  //操作栏编辑按钮
            var self=this;
            self.ruleForm.id= row.id;
            self.digTitle="审核";
            self.dialogVisible=true;
        },
         

         //修改保存
        submitEditForm(formName) {
            var self = this;
            const Qs = require('qs');
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$http({
                        headers: {
                            'deviceCode': 'A95ZEF1-47B5-AC90BF3'
                        },
                        method: 'post',
                        url: self.api+'/api/Yw_VarStatus/VarStatusSubmit',
                        data:Qs.stringify(self.ruleForm1)
                    }).then(res => {
                        console.log(res);
                        if(res.status==200){
                            self.dialogVisibleview1=!self.dialogVisibleview1;
                            self.getList();
                            self.$message({
                                message: res.data.message,
                                type: res.data.type  //warning,success,info,error
                            });
                            self.resetForm('ruleForm1');
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                    } else {
                        return false;
                    }
            });
        },

        //审核结果提交
        submitForm(formName,judgeId) {
            var self = this;
            self.ruleForm.status =judgeId;
            const Qs = require('qs');
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$http({
                        headers: {
                            'deviceCode': 'A95ZEF1-47B5-AC90BF3'
                        },
                        method: 'post',
                        url: self.api+'/api/Yw_VarStatus/JudgeStatusChange',
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
                            self.resetForm('ruleForm');
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                    } else {
                        return false;
                    }
            });
        },
       
        //状态量下发
        handleChangeStatus(index, row){
             var self = this;
             var id=row.id;
             this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_VarStatus/IssuedStatusChange?id=' + id
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
        
         //重置框
        resetForm(formName) {            
            this.$refs[formName].resetFields();                
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
            var staionId='';
            if(obj!=null)
            {  
               obj.forEach(o=>{
                   staionId += o.sStation +',';
               });            
            }              
            //判断开始时间和结束时间
            if(self.queryparam.StartTime>self.queryparam.EndTime){
                    self.$message({
                    message: "开始时间不能大于结束时间!",
                    type: "warning"  });
                    return;
            }
            
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_VarStatus/GetEquStatusChangeMessage?pageSize=' + self.page.pageSize + '&pageIndex=' + self.page.pageNo+' &sStaion='+staionId+ ' &sdateTime=' + self.queryparam.StartTime + '&edateTime=' + self.queryparam.EndTime +'&status=' + self.queryparam.Status
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
      
    },
    components:{
        treeSStation,rateTable,rateSelect,rateCascader
    },
    created(){
         
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