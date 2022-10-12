<template>
    <div id="v_deviceOnlineInfo">
        <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
            <el-aside width="250px">
                <treeSStation :IsCheckBox='true' @checkedNodes="getStations"></treeSStation>
            </el-aside>
            <el-container>
                <el-header>
                    <div class="search">     
                        <el-form :inline="true" class="demo-form-inline">
                         <el-form-item label="参数类型：">                              
                                <el-checkbox-group v-model="queryparam.checkList">
                                               <el-checkbox v-for="data in varList" :label="data.value" :key="data.value">{{data.text}}</el-checkbox>
                                </el-checkbox-group>
                         </el-form-item>
                   
                            <el-form-item class="btn">
                                <el-button type="primary" icon="el-icon-search"   v-has="'equStatusAccounting_handleSearch'"  @click="getList();">查询</el-button>
                            </el-form-item>
                        </el-form>
                    </div>                    
                </el-header>
                
                <el-main>            
                  <table v-for="(item1,index) in varStatus" :key="index" class="stats">
                    <tr> 
                        <td colspan=item1.list.count >{{item1.sStationName}} </td> 
                    </tr>
                    <div v-for="(item2,index2) in item1.list" :key="index2" id="showStyle">
                        <tr>
                           <td colspan=7 >{{item2.param}}({{item2.facName}}) </td> 
                        <tr>
                        <tr>
                            <td width="100px">状态名</td><td>单位</td><td>下限</td><td>上限</td><td width="120px">持续周期报警(秒)</td><td width="120px">是否关键参数</td><td>操作</td>	
                        </tr>
                        <tr v-for="(item3,index3) in item2.varDetailList" :key="index3">
                            <td>{{item3.stateName}}</td>
                            <td >{{item3.stateUnit}}</td>
                            <td>{{item3.lower_limit}}</td>
                            <td>{{item3.upper_limit}}</td>
                            <td>{{item3.critical_time}}</td>
                            <td>{{item3.state_key_name}}</td>
                            <td><el-button type="primary"  @click="changeInfo(JSON.stringify(item3),item1.sStationName,item2.param)">申请变更</el-button></td>
                        </tr>
                    </div>                  
                 </table>    
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
                                <el-form-item label="状态名：" prop="stateName">
                                    <el-input v-model="ruleForm.stateName" autocomplete="off" disabled></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div>
                                <el-form-item label="单位：" prop="stateUnit">
                                    <el-input v-model="ruleForm.stateUnit" autocomplete="off" disabled></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>                                                                
                         <el-col :span="12">
                            <div> 
                                <el-form-item label="下限：" prop="changelower_limit">
                                     <el-input-number v-model="ruleForm.changelower_limit"  :min="-100000" :max="100000" autocomplete="off" style="width: 100%;"></el-input-number>
                                </el-form-item>
                            </div>
                        </el-col>    
                         <el-col :span="12">
                            <div> 
                                <el-form-item label="上限：" prop="changeupper_limit">
                                    <el-input-number v-model="ruleForm.changeupper_limit"  :min="-100000" :max="100000" autocomplete="off" style="width: 100%;"></el-input-number>
                                </el-form-item>
                            </div>
                        </el-col>                         
                    </el-row>

                    <el-row>                                                                
                         <el-col :span="12">
                            <div> 
                                <el-form-item label="报警周期：" prop="changecritical_time" >
                           
                                    <el-input-number v-model="ruleForm.changecritical_time"  :min="0" :max="500000" autocomplete="off" style="width: 100%;"></el-input-number>
                                </el-form-item>
                            </div>
                        </el-col>    
                        <el-col :span="12">
                            <div> 
                                <el-form-item label="关键参数：" prop="changestate_key">
                                   <el-select v-model='ruleForm.changestate_key'   placeholder='请选择是否关键参数' style="width: 100%;">
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
import treeSStation from '../common/treeSStation'
import rateTable  from '../common/rateTable'    //引入table组件
import rateSelect from '../common/rateSelect';



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

       //弹出窗相关变量定义
        ruleForm: {
         stateName:'',
         stateUnit:'',
         changelower_limit:'',
         lower_limit:'',
         changeupper_limit:'',
         upper_limit:'',
         changecritical_time:'',
         critical_time: '',
         changestate_key:'',
         state_key:'',
         obj :{},
         sStationName:'',
         param:'',
         paramId:'',
         devCode32:'',
         sStation:'',
         devName:'',
        },
         
        rules: {
            lower_limit: [{ required: true, message: '请输入下限', trigger: 'blur' }],
            upper_limit: [{ required: true, message: '请输入上限', trigger: 'blur' }],             
        },

        varStatus:[],
        varList:[],
        isWrite:'',
        digTitle:'',
        peiZhiStationIds:'',
        usrId:'',

        CheckData:[],              // [{sStation:'SS4301051'},{sStation:'SS4301051'}]
        dialogVisible: false,
        titleName:'',
        
        queryparam:{       
            checkList:[],
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
            columns: [
              {prop: 'usr_id', label: '用户id', align: 'center',isShow:false },
              {prop: 'usr_name', label: '账号名', width:120,align: 'center',isShow:true },
              {prop: 'usr_realname', label: '真实姓名', width:120,align: 'center',isShow:true },
              {prop: 'unitId', label: '运维单位id', align: 'center',isShow:false },
              {prop: 'unitName', label: '运维单位', width:180, align: 'center',isShow:true },
              {prop: 'role_name', label: '角色名称', align: 'center',isShow:true },
              {prop: 'usr_station', label: '所属站点编号', align: 'center',isShow:false },
              {prop: 'usr_phone', label: '联系电话', align: 'center',isShow:true },
              {prop: 'usr_status', label: '是否启用', width:150,align: 'center',isShow:false },
              {prop: 'usr_statusname', label: '是否启用', width:150,align: 'center',isShow:true },
              {prop: 'sStations', label: '运维站id', width:180,align: 'center',isShow:false },
              {prop: 'sStationNames', label: '运维站点',width:180, align: 'center',isShow:true }
            ],// 需要展示的列
            operates: {   //操作栏
              width:200,      
              fixed: 'right',
              list: []
                 }, // 列操作按钮
        } //return ending
    },

    methods:{ 
         
       //关闭弹出框
        closeDig(){
            var self=this;
            self.dialogVisible=!self.dialogVisible;
            self.resetForm('ruleForm')
        },

         //页面提交(保存或者修改)
        submitForm(formName) {
            var self = this;
            if(self.ruleForm.lower_limit ==self.ruleForm.changelower_limit && self.ruleForm.upper_limit ==self.ruleForm.changeupper_limit && self.ruleForm.critical_time ==self.ruleForm.changecritical_time && self.ruleForm.state_key ==self.ruleForm.changestate_key.toString()){
                self.$message({
                    message: "请先做出变更!",
                    type: "warning"  //success,warning,info,error
                });
                return;
            }

            const Qs = require('qs');
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$http({
                        headers: {
                            'deviceCode': 'A95ZEF1-47B5-AC90BF3'
                        },
                        method: 'post',
                        url: self.api+'/api/Yw_VarStatus/InsertStatusSubmit',
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



        //弹出窗关闭时的效果
        handleClose(done){
           this.$confirm('确认关闭?').then(_=>{
                done();  
                this.resetForm('ruleForm');})
            .catch(_=>{});
        },


        //状态量变更
        changeInfo(stringInfo,sStationName,param){
            var self = this;  
            self.dialogVisible =true;
            self.digTitle="状态量配置变更";  
            self.ruleForm.obj=JSON.parse(stringInfo);
            self.ruleForm.stateName =self.ruleForm.obj.stateName;
            self.ruleForm.stateUnit =self.ruleForm.obj.stateUnit;
            //原始值
            self.ruleForm.lower_limit =self.ruleForm.obj.lower_limit;
            self.ruleForm.upper_limit =self.ruleForm.obj.upper_limit;
            self.ruleForm.critical_time =self.ruleForm.obj.critical_time;         
            self.ruleForm.state_key =self.ruleForm.obj.state_key.toString();
            self.ruleForm.param = param;
            self.ruleForm.paramId = self.ruleForm.obj.paramId; 
            self.ruleForm.devCode32 = self.ruleForm.obj.devCode32; 
            self.ruleForm.sStation = self.ruleForm.obj.sStation; 
            self.ruleForm.sStationName = sStationName; 
            self.ruleForm.devName = self.ruleForm.obj.devName;     
            //变更值
            self.ruleForm.changelower_limit =self.ruleForm.obj.lower_limit;
            self.ruleForm.changeupper_limit =self.ruleForm.obj.upper_limit;
            self.ruleForm.changecritical_time =self.ruleForm.obj.critical_time;         
            self.ruleForm.changestate_key =self.ruleForm.obj.state_key.toString();

        },

       //获取所有变量
       getAllVar(){
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/Common/SelectListByDic?type=003001'
            }).then(res => {
                if(res.status==200){
                    self.varList=res.data.data;  
                    res.data.data.forEach(o=>{
                        self.queryparam.checkList.push(o.value);
                    });             
                }
            }).catch(error => {
                console.log(error);
            });
       },

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
            var varType="";
            if (self.queryparam.peiZhiStationIds == "") {
                self.$message({
                   message: "请先勾选要查询的站点！",
                   type: "warning"  //success,warning,info,error
                });
                return;
            }          
            
            self.queryparam.checkList.forEach(o=>{  
                  varType += o + ','        
            });

            if(varType==""){
                 self.$message({
                   message: "请先勾选参数类型！",
                   type: "warning"  //success,warning,info,error
                });
                return;

            }
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_VarStatus/GetEquStatusMessage?station=' + self.queryparam.peiZhiStationIds + '&varType=' + varType
            }).then(res => {
                if(res.status==200){
                    self.varStatus=res.data.data;
                    self.page.total = res.data.total;
                    self.options.loading=false;
                }
          }).catch(error => {
            console.log(error);
          });
        }, 
         
    },
    components:{
        treeSStation,rateTable,rateSelect,
    },
    created(){
        //调用获取列表页的方法
        this.getAllVar();
    },
    mounted() {
      //  this.getList();//调用获取列表页的方法
    },
}
</script>
<style scoped>
#v_deviceOnlineInfo{color:black;}
#showStyle { float:right;}
.stats {
    border-collapse:collapse;       /* 表格相邻边合并*/
    margin-top:25px;
    color:#000;
    margin-left:15px;
    }
.stats td {
               border: 1px #000 solid;

               }

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