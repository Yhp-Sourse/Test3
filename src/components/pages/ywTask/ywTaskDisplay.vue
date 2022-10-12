<template>
  <div id="taskDisplay">
    <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
      <el-header></el-header>
      <el-main>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          size="mini"
        >

          <div class="setAbsolute">
            <el-row>
              <el-col :span="24">
                <el-button
                  size="small"
                  class="el-button--iconButton"
                  v-has="'ywTask_handleBack'"
                  style="text-overflow: initial;"
                  @click="handleReturn"
                >返回</el-button>
                <el-button
                  v-if="actionStatus.sava"
                  size="small"
                  class="el-button--iconButton"
                  v-has="'ywTask_handleSava'"
                  style="text-overflow: initial;"
                  @click="handleAdd('ruleForm','保存')"
                >保存</el-button>
                <el-button
                  v-if="actionStatus.submit"
                  size="small"
                  class="el-button--iconButton"
                  v-has="'ywTask_handleSubmit'"
                  style="text-overflow: initial;"
                  @click="handleAdd('ruleForm','提交')"
                >提交任务</el-button>
                <el-button
                  v-if="actionStatus.aduit"
                  size="small"
                  class="el-button--iconButton"
                  v-has="'ywTask_handleFirstCheck'"
                  style="text-overflow: initial;"
                  @click="handleAdd('ruleForm','初审')"
                >提交所有表单初审结果</el-button>
                <el-button
                  v-if="actionStatus.aduit"
                  size="small"
                  class="el-button--iconButton"
                  v-has="'ywTask_handleCheck'"
                  style="text-overflow: initial;"
                  @click="handleAdd('ruleForm','审核')"
                >提交所有表单复核结果</el-button>
                
              </el-col>
            </el-row>
          </div>

          <el-row>
            <el-col :span="24">
              <div class="setHeight">
                <rateAuditRecord
                  :isSave="isSave"
                  :active="ruleForm.Status"
                  :businessType="21"
                  :businessId="ruleForm.TaskNo"
                  :auditerId="aduitForm.AuditerId"
                  :result="aduitForm.Result"
                  :reason="aduitForm.Reason"
                  :typeCode="aduitForm.TypeCode"
                ></rateAuditRecord>
              </div>
            </el-col>
          </el-row>
          
          <div>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="任务信息" name="1">
                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="任务类型：" prop="TaskType">
                        <rate-select
                          v-model="taskTypeRateSelect.model"
                          :url="taskTypeRateSelect.selectUrl"
                          :urlParams="taskTypeRateSelect.urlParams"
                          :multiple="false"
                          placeholder="请选择"
                          :optionKeys="taskTypeRateSelect.optionKeys"
                          :showLabels="taskTypeRateSelect.showLabels"
                          :disables="taskTypeRateSelect.disables"
                          @change="selectChange"
                        ></rate-select>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
                <el-row v-if="ruleForm.TaskType==2">
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <el-form-item label="故障类型：" prop="YJType">
                      <el-select style="width:100%;" v-model="ruleForm.YJType" clearable placeholder="请选择故障类型">
                        <el-option
                          v-for="item in GZoptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="紧急程度：" prop="Urgency">
                        <rate-select
                          v-model="urgencyRateSelect.model"
                          :url="urgencyRateSelect.selectUrl"
                          :urlParams="urgencyRateSelect.urlParams"
                          :multiple="false"
                          placeholder="请选择"
                          :optionKeys="urgencyRateSelect.optionKeys"
                          :showLabels="urgencyRateSelect.showLabels"
                          :disables="urgencyRateSelect.disables"
                          @change="selectChange"
                        ></rate-select>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="任务标题：" prop="Title">
                        <el-input v-model="ruleForm.Title" autocomplete="off"></el-input>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item v-show="false" label="主键taskNo：" prop="TaskNo">
                        <el-input v-model="ruleForm.TaskNo" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="站点名称：" prop="SStation">
                        <rateCascader
                          :selectOption="ruleForm.SStation"
                          @selectOptionEvent="selectOptionEvent"
                        ></rateCascader>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="运维单位：" prop="UnitName">
                        <rate-select
                          v-model="rateSelect.model"
                          :url="rateSelect.selectUrl"
                          :urlParams="rateSelect.urlParams"
                          :multiple="false"
                          placeholder="请选择"
                          :optionKeys="rateSelect.optionKeys"
                          :showLabels="rateSelect.showLabels"
                          :disables="rateSelect.disables"
                          @change="selectChange"
                        ></rate-select>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="运维人员：" prop="DealerName">
                        <el-input v-model="ruleForm.DealerName" autocomplete="off" @click.native="dialogVisibleYwPerson=!dialogVisibleYwPerson"></el-input>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="处理方式：" prop="MaintainceWay">
                        <rate-select
                          v-model="maintainceWayRateSelect.model"
                          :url="maintainceWayRateSelect.selectUrl"
                          :urlParams="maintainceWayRateSelect.urlParams"
                          :multiple="false"
                          placeholder="请选择"
                          :optionKeys="maintainceWayRateSelect.optionKeys"
                          :showLabels="maintainceWayRateSelect.showLabels"
                          :disables="maintainceWayRateSelect.disables"
                          @change="selectChange"
                        ></rate-select>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>

                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="截止时间：" prop="PlanDealTime">
                        <el-date-picker
                          v-model="ruleForm.PlanDealTime"
                          type="date"
                          placeholder="选择时间"
                          style="width: 100%;"             
                        ></el-date-picker>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>

                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="任务类别：" porp="TaskCategoryId">
                        <rate-select
                          v-model="taskRateSelect.model"
                          :url="taskRateSelect.selectUrl"
                          :urlParams="taskRateSelect.urlParams"
                          :multiple="false"
                          placeholder="请选择"
                          :optionKeys="taskRateSelect.optionKeys"
                          :showLabels="taskRateSelect.showLabels"
                          :disables="taskRateSelect.disables"
                          @change="selectChange"
                        ></rate-select>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="备注：" prop="Remark">
                        <el-input type="textarea" v-model="ruleForm.Remark" autocomplete="off"></el-input>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="处理信息" name="2">
                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="处理描述：" prop="ItemRemark">
                        <el-input type="textarea" v-model="ruleForm.ItemRemark" autocomplete="off"></el-input>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>

                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="处理时间：" prop="ItemCreatedTime">
                        <el-date-picker
                          v-model="ruleForm.ItemCreatedTime"
                          type="datetime"
                          placeholder="选择时间"
                          style="width: 100%;" 
                        ></el-date-picker>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>

                <!--<el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item v-show="true" label="处理照片：" prop="ItemRemark">
                          <el-upload
                            :action="ruleForm.action+'?BusinessId='+ruleForm.TaskNo+'&BusinessType=21'"
                            :headers="ruleForm.headers"
                            list-type="picture-card"
                            :multiple="true"
                            :limit="20"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove"
                          >
                          <i class="el-icon-plus"></i>
                          </el-upload>
                          <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt />
                          </el-dialog>
                      </el-form-item>
                      <div class="image">
                        <el-image v-for="(f,index) in imgArr" :key="index" style="margin:2px;width: 100px; height: 100px" :src="f" :preview-src-list="imgArr"></el-image>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>-->

              </el-collapse-item>

              <el-collapse-item title="运维表单" name="3">
                <el-row>
                  <el-col :span="24">
                    <div class="tools">
                      <el-button size="small" class=" el-button--iconButton" v-show="actionStatus.fillForm"  v-has="'ywTask_handleWriteForm'" icon="el-icon-plus"  @click="handleWriteForm('','','add','')">填写表单</el-button>
                      <el-button size="small" class=" el-button--iconButton" v-show="actionStatus.judgeForm"  v-has="'ywTask_handleJudgeForm'" icon="el-icon-plus"  @click="handleWriteForm">审核表单</el-button>
                    </div>
                  </el-col>
                  <el-col :span="24">
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
                  </el-col>
                </el-row>

              </el-collapse-item>
            </el-collapse>
          </div>
        </el-form>

        
        <div>
          <el-dialog title="提交审核结果" :visible.sync="aduitFormDialogVisible" width="30%">
            <el-form
              :model="ruleForm"
              status-icon
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
              size="mini"
            >
              <el-row>
                <el-col :span="24">
                  <div>
                    <el-form-item label="审核结果：">
                         审核不通过，因为审核表单中存在审核没通过的表单！
                    </el-form-item>
                  </div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="24">
                  <div>
                    <el-form-item label="原因备注：" prop="YSJudgeRemark">
                      <el-input type="textarea" v-model="ruleForm.YSJudgeRemark" autocomplete="off" rows=4></el-input>
                    </el-form-item>
                  </div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="6">&nbsp;</el-col>
                <el-col :span="12">
                  <div>
                    <el-form-item>
                      <el-button type="primary" @click="submitAllJudgeForm('ruleForm','提交审核结果')">确定</el-button>
                      <el-button @click="aduitFormDialogVisible=!aduitFormDialogVisible">取消</el-button>
                    </el-form-item>
                  </div>
                </el-col>
                <el-col :span="6">&nbsp;</el-col>
              </el-row>

            </el-form>
          </el-dialog>
        </div>


      </el-main>
    </el-container>

    <el-dialog
      title="选择人员"
      :visible.sync="dialogVisibleYwPerson"
      width="35%"
    >
    <rateTransfer @choseSuccess='choseSuccess' :stationId=choosedSstationId ></rateTransfer>
    </el-dialog>
  </div>
</template>

<script>
import treeSStation from "../common/treeSStation"; //引入treeSStation组件
import rateAuditRecord from "../common/rateAuditRecord";//引入rateAuditRecord组件
import rateCascader from "../common/rateCascader"; //引入rateCascader组件
import rateUpload from "../common/rateUpload"; //引入rateCascader组件
import rateSelect from "../common/rateSelect";//引入rateSelect组件
import rateTable  from '../common/rateTable'    //引入table组件
import rateTransfer  from '../common/rateTransfer'    //引入rateTransfer组件

export default {
  name: "taskDisplay",
  data() {  
    return {
      GZoptions:[
        {value:1,label:'设备维修'},
        {value:2,label:'网络故障'},
        {value:3,label:'其他'}
      ],//故障类型
      //前一个页面查询选择的状态
      chooseStatus:'',
      //前一个页面选择的任务类型
      chooseTaskCategory:'', 
      //前一个页面选择的站点
      chooseStationIds:'',
      //前一个页面选择的开始时间
      chooseStartTime:'',
      //前一个页面选择的结束时间
      chooseEndTime:'',
      //定义所有表单状态
      allStatus:'',
      choosedSstationId:'',
      page:{   //关于页码的相关参数
        pageShow:true,  //是否显示
        total:0,        //总条数
        pageSize:10,    //每页条数
        pageNo:1,       //第几页
      },
      handleSelection:[],  //checkbox选中行
      list:[],// table数据
      options: {  // table样式参数
        stripe: false, // 是否为斑马纹 table
        loading: false, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: false, // 是否支持列表项选中功能
      }, // table 的参数结束
      columns: [
        {prop: 'show_Name',label: '报表名称',align: 'center',isShow:true,
          formatter(row, column, cellValue){
             if(row.doCount>=4){   //表示被锁定
                 return `<div><i class="el-icon-lock" style="vertical-align:super;"></i>${row.show_Name}</div>`;
             }else{
                 return `<div>${row.show_Name}</div>`;
             }
          }
        },
        {prop: 'show_StatusDif',label: '状态',align: 'center',width:250, isShow:true},
        {prop: 'createUsr',label: '填写人',align: 'center',width:150,isShow:true},
        {prop: 'show_CreateTime',label: '填表时间',align: 'center',isShow:true,width:200},
        {prop: 'show_CreateTime',label: '巡检时间',align: 'center',isShow:true,width:200, formatter(row, column, cellValue){
                        if(row.content!=null||row.content!=''){
                            var obj= JSON.parse(row.content);
                            // return  obj.yj_1 + " --" + obj.yj_2;
                            return  obj.yj_1;
                        }
        }},
          {prop: 'auditeTime',label: '审核时间',align: 'center',isShow:true,width:200, formatter(row, column, cellValue){
                        if(row.auditeTime==""||row.auditeTime==null){
                            return "--";
                        }else{
                           return row.auditeTime.replace("T"," ");
                        }
        }},
        {prop: 'isFinished',label: '退回(审核)原因',align: 'center',isShow:true}
      ],// 需要展示的列
      operates: {   //操作栏
        width:200,      
        fixed: 'right',
        list: [
          {
            id:'1',
            label: '编辑',
            bgColortype:'success',
            hasbutton:'ywTask_handleYwTaskFromEdit',
            show: true,   //是否显示按钮
            className:'success', //样式类名
            disabled: false,   //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              if(row.status==1){
                  this.$message.warning("已经提交的运维表单不能编辑!");
                  return false;
              }
              if(this.ruleForm.Status==4){
                  this.$message.warning("待审核任务不能编辑!");
                  return false;
              }
              if(row.status==2){
                  this.$message.warning("审核通过的任务无法再次编辑!");
                  return false;
              }
              if(this.ruleForm.Status==6){
                  this.$message.warning("已审核完毕的任务不能编辑!");
                  return false;
              }
              this.secondButtonType="edit";
              //运维表单被拒绝4次后就需要管理员解锁
              if(row.doCount>=4){
                  this.$message.warning("此表单被拒绝4次，已被锁定，请联系管理员进行解锁!");
                  return false;
              }
              else
              {
                  this.handleWriteForm(row.id,row.reportCode,this.secondButtonType,row.status)              
              }
            }
          },         
          {
            id:'2',
            label: '删除',
            show: true,
            hasbutton:'ywTask_handleYwTaskFormDelete',
            bgColortype:'danger',
            className:'searchAll',
            disabled: false,
            method: (index, row) => {
              if(row.status==1){
                  this.$message.warning("已经提交的运维表单不能删除!");
                  return false;
              }
              if(this.ruleForm.Status==4){
                  this.$message.warning("待审核任务不能删除!");
                  return false;
              }
              if(this.ruleForm.Status==6){
                if(this.ruleForm.TaskCategoryId!=3){
                  this.$message.warning("已审核完毕的任务不能删除!");
                  return false;
                }
              }
              if(this.firstButtonType=="Detail"){
                  this.$message.warning("查看状态下按钮不可用!");
                  return false;
              }
              this.handledel(index, row);
            }
          },
          {
            id:'7',
            label: '初审',
            bgColortype:'warning',
            hasbutton:'ywTask_handleFirstCheck',
            show: true,   //是否显示按钮
            className:'warning', //样式类名
            disabled: false,   //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              if(this.ruleForm.Status==6){
                if(this.ruleForm.TaskCategoryId!=3){
                  this.$message.warning("已审核完毕的任务不能再次审核!");
                  return false;
                }
              }
              if(this.view=="Detail"){
                  this.$message.warning("查看状态下按钮不可用!");
                  return false;
              }
              //if(row.status!=1){
              //    this.$message.warning("此表单已审核过了，无法重复进行审核!");
              //    return false;
              //}
              this.secondButtonType="judge"; 
              this.handleWriteForm(row.id,row.reportCode,this.secondButtonType,row.status)
            }
           },
           {
            id:'3',
            label: '复核',
            bgColortype:'warning',
            hasbutton:'ywTask_handleYwTaskFormJudge',
            show: true,   //是否显示按钮
            className:'warning', //样式类名
            disabled: false,   //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              if(this.ruleForm.Status==6){
                if(this.ruleForm.TaskCategoryId!=3){
                  this.$message.warning("已审核完毕的任务不能再次审核!");
                  return false;
                }
              }
              if(this.view=="Detail"){
                  this.$message.warning("查看状态下按钮不可用!");
                  return false;
              }
              //if(row.status!=1){
              //    this.$message.warning("此表单已审核过了，无法重复进行审核!");
              //    return false;
              //}
              this.secondButtonType="judge"; 
              this.handleWriteForm(row.id,row.reportCode,this.secondButtonType,row.status)
            }
           },
           {
            id:'4',
            label: '查看',
            bgColortype:'info',
            hasbutton:'ywTask_handleYwTaskFormDetail',
            show: true,   //是否显示按钮
            className:'info', //样式类名
            disabled: false,   //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.secondButtonType="detail"; 
              this.handleWriteForm(row.id,row.reportCode,this.secondButtonType,row.status)
            }         
          },{
            id:'5',
            label: '管理员强制删除',
            show: true,
            hasbutton:'ywTask_handleadminRemove',
            bgColortype:'danger',
            className:'searchAll',
            disabled: false,
            method: (index, row) => {
              this.handledel(index, row);
            }
          },{
            id:'6',
            label: '解锁',
            show: true,
            hasbutton:'ywTask_handleadminRemove',
            bgColortype:'info',
            className:'info',
            disabled: false,
            method: (index, row) => {
              this.handleUnlock(index, row);
            }
          }
        ]
      }, // 列操作按钮
      imgArr:[],
      files:[],
      ruleForm: {
        //新增
        YSJudgeRemark:"",
        TaskNo: "",
        Title: "",
        SStation: "",
        SStationName: "",
        City: "",
        TaskType: "",
        TaskCategoryId: "",
        Urgency: "",
        MaintainceWay: "",
        UnitId: "",
        UnitName: "",
        DealerName: "",
        PlanDealTime: "",
        Remark: "",
        ItemRemark: "",
        ItemCreatedTime:'',
        DealTime: "",
        action: this.api + "/api/Upload/UploadFiles",
        headers: { token: sessionStorage.getItem("Authorization") },
        Status: 0,
        OptType:1,
        YJType:3
      },
      rules: {
        Title:[{ required: true, message: '必填项', trigger: 'blur' }],
        SStation: [{ required: true, message: '必填项', trigger: 'blur' }],
        TaskType: [{ required: true, message: '必填项', trigger: 'blur' }],
        TaskCategoryId: [{ required: true, message: '必填项', trigger: 'blur' }],
        MaintainceWay: [{ required: true, message: '必填项', trigger: 'blur' }],
        UnitId:[{ required: true, message: '', trigger: 'blur' }],
        DealerName: [{ required: true, message: '必填项', trigger: 'blur' }],
        PlanDealTime: [{ required: true, message: '必填项', trigger: 'blur' }],
        YJType: [{ required: true, message: '必填项', trigger: 'blur' }],
        Remark: [{ required: true, message: '必填项', trigger: 'blur' }],
      },
      actionStatus: {
        sava: false,
        submit: false,
        aduit: false,
        fillForm:true,
        judgeForm:true,
      },
      aduitForm: {
        AuditerId: 0,
        Result: "通过",
        Reason: "",
        TypeCode: "002005",
      },
      activeNames: ["1", "2", "3"],
      isSave: false, //是否需要插入审核记录表,true是，false否
      rateSelect: {
        model: "",
        selectUrl: this.api + "/api/Yw_Unit/GetAllUnit",
        urlParams: JSON.stringify({}),
        optionKeys: JSON.stringify({
          value: "unitId",
          label: "unitName",
        }),
        showLabels: "unitName",
        disables: "",
      },
      taskRateSelect: {
        model: "",
        selectUrl: this.api + "/api/Select/GetSelectList?TypeCode=002006",
        urlParams: JSON.stringify({}),
        optionKeys: JSON.stringify({
          value: "id",
          label: "info",
        }),
        showLabels: "info",
        disables: "",
      },
      taskTypeRateSelect: {
        model: "",
        selectUrl: this.api + "/api/Select/GetSelectList?TypeCode=002001",
        urlParams: JSON.stringify({}),
        optionKeys: JSON.stringify({
          value: "id",
          label: "info",
        }),
        showLabels: "info",
        disables: "",
      },
      urgencyRateSelect: {
        model: "",
        selectUrl: this.api + "/api/Select/GetSelectList?TypeCode=002002",
        urlParams: JSON.stringify({}),
        optionKeys: JSON.stringify({
          value: "id",
          label: "info",
        }),
        showLabels: "info",
        disables: "",
      },
      maintainceWayRateSelect: {
        model: "",
        selectUrl: this.api + "/api/Select/GetSelectList?TypeCode=002004",
        urlParams: JSON.stringify({}),
        optionKeys: JSON.stringify({
          value: "id",
          label: "info",
        }),
        showLabels: "info",
        disables: "",
      },
      dialogVisible: false,
      dialogVisibleYwPerson:false,
      dialogImageUrl: "",
      aduitFormDialogVisible: false,
      secondButtonType: "",
      firstButtonType:"",
    };
  },
  methods: {

    //提交到审核 --里面存在没有通过的
    submitAllJudgeForm(){
        var self =this;
        if(self.ruleForm.YSJudgeRemark==""){
           self.$message({
              message: "原因备注必填!",
              type: "warning", //warning,success,info,error
            });
          return  false;
        }     
        this.ruleForm.OptType=6;
        this.ruleForm.Status = 2;//不通过,回到待处理状态为2
        this.isSave = true; //新增一条审核记录     
        //提交到后台
        this.$http({
          headers: {
             deviceCode: "A95ZEF1-47B5-AC90BF3",
          },
          method: "post",
          url: self.api + "/api/Yw_Task/SubmitYw_Task",
          data: self.Qs.stringify(self.ruleForm),
       })
       .then((res) => {
           if (res.status == 200) {
                self.$message({
                     message: res.data.message,
                     type: res.data.type, //warning,success,info,error
                    });
               this.handleReturn();
              }
           }).catch((error) => {
              console.log(error);
       });
    },
    //提交初审结果
    checkAllFirstFromStatus(taskno){
        var self =this;
        this.$http({
          method: 'GET',
          url: this.api+'/api/Yw_Task/checkAllFirstFromStatus?taskNo='+taskno
        }).then(res => {
          if(res.status==200){
             if(res.data.message=="yes"){
                //全部审核过了   
               this.ruleForm.OptType=8;
               this.ruleForm.Status = 4; //4:已初审,3:待提交
               this.isSave = true; //新增一条审核记录        
               this.$http({
                 headers: {
                     deviceCode: "A95ZEF1-47B5-AC90BF3",
                 },
               method: "post",
               url: self.api + "/api/Yw_Task/SubmitYw_Task",
               data: self.Qs.stringify(self.ruleForm),
               })
              .then((res) => {
                 if (res.status == 200) {
                self.$message({
                  message: res.data.message,
                  type: res.data.type, //warning,success,info,error
                });
                this.handleReturn();
              }
           })
            .catch((error) => {
              console.log(error);
            });
          }
          else if(res.data.message=="yesorno"){
            self.$message({
                message: "请先完成所有表单的审核再提交结果!",
                type: "info", //warning,success,info,error
            });
          }
          else {
              //弹出窗口
               self.aduitFormDialogVisible =true;
            }              
          }
      }).catch(error => {
        console.log(error);
      });
    },
    //提交审核结果处理
    checkAllFromStatus(taskno){
        var self =this;
        this.$http({
          method: 'GET',
          url: this.api+'/api/Yw_Task/CheckAllFromStatus?taskNo='+taskno
        }).then(res => {
          if(res.status==200){
             if(res.data.message=="yes"){
                //全部审核过了   
               this.ruleForm.OptType=6;
               this.ruleForm.Status = 6; //5:已审核,3:待提交
               this.isSave = true; //新增一条审核记录        
               this.$http({
                 headers: {
                     deviceCode: "A95ZEF1-47B5-AC90BF3",
                 },
               method: "post",
               url: self.api + "/api/Yw_Task/SubmitYw_Task",
               data: self.Qs.stringify(self.ruleForm),
               })
              .then((res) => {
                 if (res.status == 200) {
                self.$message({
                  message: res.data.message,
                  type: res.data.type, //warning,success,info,error
                });
                this.handleReturn();
              }
           })
            .catch((error) => {
              console.log(error);
            });
          }
          else if(res.data.message=="yesorno"){
            self.$message({
                message: "请先完成所有表单的审核再提交结果!",
                type: "info", //warning,success,info,error
            });
          }
          else {
              //弹出窗口
               self.aduitFormDialogVisible =true;
            }              
          }
      }).catch(error => {
        console.log(error);
      });
    },
    
    //跳转下一个页面
    handleWriteForm(id,reportCode,secondType,status){
      var self =this;
      if(self.firstButtonType=="Detail"&&self.secondButtonType!="detail")
      {    
          self.$message({
            message: "查看状态下按钮不可用!",
            type: "warning"  });
            return false;
      }
      //表示添加
      if(secondType=="add"){
          this.secondButtonType="add";
      }    
      var obj = {taskNo:this.ruleForm.TaskNo,id:id,secondButtonType:this.secondButtonType,rptCode:reportCode, rptType:this.ruleForm.TaskCategoryId,chooseTaskCategory:this.chooseTaskCategory,chooseStatus:this.chooseStatus, chooseStationIds:this.chooseStationIds,  firstButtonType:self.firstButtonType,status:status,chooseStartTime:this.chooseStartTime,chooseEndTime:this.chooseEndTime};
      this.$emit('jump',{param:'运维表单',path:'/MaintainceRpt?obj='+JSON.stringify(obj),isjump:true});
      //关闭当前tab页面
      this.$emit("closeCurrentPage", "任务编辑"); //调用closeCurrentPage方法注意；两点1：第二个参数必须是string，2：长度必须大于等于4       
    },

    handleSelectionChange (val) { //checkbox选中的数据val 是选中行的所有数组
        this.handleSelection=val;
    },

    getList(obj){
      var self = this;
      this.$http({
        method: 'GET',
        url: this.api+'/api/Yw_Rpt/GetList?pagesize=' + self.page.pageSize + '&pageindex=' + self.page.pageNo+ '&TaskCode=' + self.ruleForm.TaskNo
      }).then(res => {
        if(res.status==200){
          self.list=res.data.data;
          self.page.total = res.data.count;
        }
      }).catch(error => {
        console.log(error);
      });
    },
    handleUnlock(index, row){//解锁表单
      var self=this;
      this.$confirm('确认解锁？').then(()=>{
          self.$http({
              method: 'GET',
              url: self.api+'/api/Yw_Rpt/GetYwFormUnLock?id='+row.id
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
      }).catch(function () {      
      });
    },
    handledel(index, row) {  //操作栏删除按钮
      var self=this;
      this.$confirm('确认删除？').then(()=>{
          self.$http({
              method: 'GET',
              url: self.api+'/api/Yw_Rpt/Singelmultipl?Id='+row.id
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
      }).catch(function () {      
      });
    },

    choseSuccess(arr){
      if(arr.length>1){
        this.$message({
          message: "请选择一人！",
          type: "warning",
        });
      }else{
        this.ruleForm.DealerId=arr[0].split("&")[0];
        this.ruleForm.DealerName=arr[0].split("&")[1];
        this.dialogVisibleYwPerson=false;
      }
    },

    getSizeChange(val){  //table组件发射的方法 用于改变每页数据量
        this.page.pageSize=val;
        //这下面需要重新调用 获取列表页的函数
        this.getTaskList();
    },

    getCurrentPage(val){  //table组件发射的方法  用于改变当前所在页码
        this.page.pageNo=val;
        //这下面需要重新调用 获取列表页的函数
        this.getTaskList();
    },
   
    selectOptionEvent(val) {
      this.ruleForm.SStation = val;
      //这里进行处理
      this.choosedSstationId =val;
    },

    uploadSuccess(file) {
      
    },

    handleChange(val) {
      console.log(val);
    },

    selectChange(val, valObj) {
      var self = this;
      if (valObj.unitId) {
        self.ruleForm.UnitId = val;
        self.ruleForm.UnitName = valObj.unitName;
      } else if (valObj.typeCode == "002006") {
        self.ruleForm.TaskCategoryId = valObj.dictCode;;
      } else {
        if (valObj.typeCode == "002001") {
          self.ruleForm.TaskType = valObj.dictCode;
        } else if (valObj.typeCode == "002002") {
          self.ruleForm.Urgency = valObj.dictCode;
        } else if (valObj.typeCode == "002004") {
          self.ruleForm.MaintainceWay = valObj.dictCode;
        }
      }
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    handleAdd(formName, actionName) {
      var self = this;
      this.submitForm(formName, actionName);
    },

    handleReturn() {
      this.$emit("closeCurrentPage", "任务编辑"); //调用closeCurrentPage方法注意；两点1：第二个参数必须是string，2：长度必须大于等于4
      var obj={ taskNo:this.ruleForm.TaskNo,taskCategoryId:this.chooseTaskCategory,chooseStartTime:this.chooseStartTime,chooseEndTime:this.chooseEndTime,sStations:this.chooseStationIds,taskStatus: this.chooseStatus,flag:2}
      this.$emit('jump',{param:'运维任务',path:'/index/ywTask?obj='+JSON.stringify(obj),isjump:true});
    },

    submitForm(formName, actionName) {
      switch (actionName) {
        case "保存":
          this.ruleForm.Status = 1; //任务创建
          this.isSave = true; //新增一条审核记录
          if(this.ruleForm.TaskCategoryId==undefined){
              this.$message({
                message: "请选择任务类别！",
                type: "warning",
              });
          }else{
            this.$refs[formName].validate((valid) => {
            if (valid) {
              var self = this;
              this.$http({
                headers: {
                  deviceCode: "A95ZEF1-47B5-AC90BF3",
                },
                method: "post",
                url: self.api + "/api/Yw_Task/SubmitYw_Task",
                data: self.Qs.stringify(self.ruleForm),
              })
                .then((res) => {
                  if (res.status == 200) {
                    self.$message({
                      message: res.data.message,
                      type: res.data.type,
                    });
                    this.handleReturn();
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            } else {
              return false;
            }
          });
          
          }
          break;
        case "提交":  
          this.$refs[formName].validate((valid) => {
            if (valid) {
              var self = this;
              //先验证是否可以提交
            this.$http({
                method: 'GET',
                url: self.api+'/api/Yw_Task/HaveRight?taskNo='+self.ruleForm.TaskNo+'&planDealTime='+self.ruleForm.PlanDealTime+'&taskCategoryId='+self.ruleForm.TaskCategoryId                
            }).then(res => {
                if(res.status==200){
                  debugger
                     if(res.data.result==false){
                        self.$message({
                          message: res.data.message,
                          type: "warning", //warning,success,info,error
                        });
                     }
                     else{
                     this.ruleForm.OptType=3;
                     this.ruleForm.Status = 5; //待提交
                     this.isSave = true; //新增一条审核记录
                   this.$http({
                    headers: {
                    deviceCode: "A95ZEF1-47B5-AC90BF3",
                 },
                method: "post",
                url: self.api + "/api/Yw_Task/SubmitYw_Task",
                data: self.Qs.stringify(self.ruleForm),
                })
                .then((res) => {
                  if (res.status == 200) {
                    self.$message({
                      message: res.data.message,
                      type: res.data.type, //warning,success,info,error
                    });
                    this.handleReturn();
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
               }
              }
            }).catch(error => {
                console.log(error);
            });
            } else {
              return false;
            }
          });
          break;
        case "初审":
          //相关处理
          this.checkAllFirstFromStatus(this.ruleForm.TaskNo);
          break;
        case "审核":
          //相关处理
          this.checkAllFromStatus(this.ruleForm.TaskNo);
          break;
        default:
          break;
      }
    },

    resetForm(formName) {
      this.$nextTick(() => {
        this.$refs[formName].resetFields();
      });
    },

    getToFirst(taskNo) {
      var self = this;
      this.$http({
        method: "GET",
        url: this.api + "/api/Yw_task/GetYw_TaskToFirst?TaskNo=" + taskNo,
      })
        .then((res) => {
          if (res.status == 200) {
            if (res.data.data != null) {
              self.taskTypeRateSelect.model = res.data.data.show_TaskType;
              self.ruleForm.TaskType = res.data.data.taskType;
              self.urgencyRateSelect.model = res.data.data.show_Urgency;
              self.ruleForm.Urgency = res.data.data.urgency;
              self.ruleForm.Title = res.data.data.title;
              self.ruleForm.TaskNo = res.data.data.taskNo;
              self.ruleForm.SStation = res.data.data.sStation;
              self.rateSelect.model = res.data.data.unitName;
              self.ruleForm.UnitId = res.data.data.unitId;
              self.ruleForm.UnitName = res.data.data.unitName;
              self.ruleForm.DealerName = res.data.data.dealerName;
              self.maintainceWayRateSelect.model =res.data.data.show_MaintainceWay;
              self.ruleForm.MaintainceWay = res.data.data.maintainceWay;
              self.ruleForm.PlanDealTime = res.data.data.planDealTime;
              self.taskRateSelect.model = res.data.data.show_TaskCategoryName;
              self.ruleForm.TaskCategoryId = res.data.data.taskCategoryId;
              self.ruleForm.City = res.data.data.city;
              self.ruleForm.SStationName = res.data.data.sStationName;
              self.ruleForm.Remark = res.data.data.remark;
              self.ruleForm.DealTime = res.data.data.dealTime;
              if(res.data.data.taskRCItem!=null){
                 self.ruleForm.ItemRemark = res.data.data.taskRCItem.itemRemark;
                 self.ruleForm.ItemCreatedTime = res.data.data.taskRCItem.itemCreatedTime;
              }
              self.ruleForm.Status = res.data.data.status;     
              self.setActionStatus(); //设置按钮状态       
              if (self.firstButtonType == "Detail") {
                self.actionStatus.sava = false;
                self.actionStatus.submit = false;
                self.actionStatus.aduit = false;       
              }
              if(self.secondButtonType == "detail")
              {  
                self.actionStatus.judgeForm=false;
              }
              if(self.ruleForm.Status==4||self.ruleForm.Status==6){  //待审核，审核完的按钮无效
                //表示需要进行表单添加
                if(self.ruleForm.TaskCategoryId!=3){
                  self.actionStatus.fillForm=false;
                  self.actionStatus.judgeForm=false;
                }
              }             
              //根据部分路径获取图片流
              if(res.data.data.files!=null){
                if(res.data.data.files.length>0){
                  self.files=res.data.data.files;
                  self.getFlieStream();
                }
              }             
            }           
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getFlieStream(){
      var self=this;
      self.files.forEach(item => {
          this.$http({
              method: 'GET',
              responseType:'blob',
              url: self.api + '/api/BBS/GetFlieStream?partialPath='+item.fileURL
          }).then(res => {
              self.imgArr.push(window.URL.createObjectURL(res.data));
          }).catch(error => {
              console.log(error);
          });
      });
    },
    
    //获取参数
    getParam() {
      var self = this;
      const data = self.getUrlKey("obj");
      self.ruleForm.TaskNo = JSON.parse(data).taskNo;
      self.firstButtonType = JSON.parse(data).firstButtonType;
      self.secondButtonType = JSON.parse(data).secondButtonType;
      //前一个页面查询参数传过来的
      self.chooseStatus=JSON.parse(data).taskStatus;
      self.chooseTaskCategory= JSON.parse(data).taskCategoryId;
      self.chooseStationIds = JSON.parse(data).chooseStationIds;
      self.chooseStartTime=JSON.parse(data).chooseStartTime;
      self.chooseEndTime=JSON.parse(data).chooseEndTime;
      if (JSON.parse(data).taskNo != "") {
        self.ruleForm.OptType=2;
        self.getToFirst(JSON.parse(data).taskNo);
      }else{
        self.ruleForm.OptType=1;
        self.getToFirst("");
      }
    },

    getUrlKey(name) {
      return (
        decodeURIComponent(
          (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
            location.href
          ) || [, ""])[1].replace(/\+/g, "%20")
        ) || null
      );
    },

    setActionStatus() {
      //根据状态设置按钮是否显示
      this.actionStatus.sava = this.ruleForm.Status <= 1 ? true : false;
      if (this.ruleForm.Status == 2 || this.ruleForm.Status == 3) {
        this.actionStatus.submit = true;
      } else {
        this.actionStatus.submit = false;
      }
      if (this.ruleForm.Status == 4 || this.ruleForm.Status == 5) {
        this.actionStatus.aduit = true;
      } else {
        this.actionStatus.aduit = false;
      }
      //this.actionStatus.aduit = this.ruleForm.Status == 4 ? true : false;
    },
  },
  components: {
    treeSStation,
    rateAuditRecord,
    rateCascader,
    rateUpload,
    rateSelect,
    rateTable,
    rateTransfer,
  },
  created() {},
  mounted() {
    this.getParam();
    this.getList();
  },
};
</script>

<style scoped>
.tools{height: 40px;border: 1px solid #ccc;background: #F5F5F5;line-height: 35px;text-align: right;padding: 0px 5px;}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: #f5f5f5;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #c8c8c8;
}
.el-aside {
  color: #333;
}
.el-header {
  height: 0px !important;
}
.el-header .search {
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  text-align: left;
}
.el-header .search .btn {
  position: absolute;
  right: 12px;
  top: 2px;
}
.el-header .tools {
  height: 40px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  line-height: 35px;
  text-align: right;
  padding: 0px 5px;
}
.el-main {
  height: calc(100vh - 336px);
}
.el-cascader .el-cascader--medium {
  width: 100%;
  height: 28px;
  line-height: 28px;
}
.el-date-editor,
.el-input {
  width: 100%;
}
.taskDisplay {
  height: calc(100vh - 50px);
}
.setAbsolute {
  text-align: left;
  position: absolute;
  width: 100%;
  z-index: 99;
}
.setHeight {
  margin-top: 20px;
}
</style>




