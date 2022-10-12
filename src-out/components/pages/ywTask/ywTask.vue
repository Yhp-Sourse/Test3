<template>
  <div id="v_ywTask">
    <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
      <el-aside width="250px">
        <treeSStation
          :IsCheckBox="true"
          @checkedNodes="getSearchStations"
          :CheckData="CheckData"
        ></treeSStation>
      </el-aside>
      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline" size="mini">
              <el-form-item label="任务编号:">
                <el-input
                  v-model:value="queryparam.TaskNo"
                  placeholder="任务编号"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="任务类型：">
                <rate-select
                  v-model:value="rateRWLXSelect.model"
                  :url="rateRWLXSelect.selectUrl"
                  :urlParams="rateRWLXSelect.urlParams"
                  :multiple="false"
                  placeholder="全部"
                  :optionKeys="rateRWLXSelect.optionKeys"
                  :showLabels="rateRWLXSelect.showLabels"
                  :disables="rateRWLXSelect.disables"
                  @change="selectChangeRWLX"
                >
                </rate-select>
              </el-form-item>
              <el-form-item label="任务类别：" prop="TaskCategoryId">
                <rate-select
                  v-model:value="queryparam.TaskCategoryId"
                  :url="rateRWLBSelect.selectUrl"
                  :urlParams="rateRWLBSelect.urlParams"
                  :multiple="false"
                  placeholder="全部"
                  :optionKeys="rateRWLBSelect.optionKeys"
                  :showLabels="rateRWLBSelect.showLabels"
                  :disables="rateRWLBSelect.disables"
                  @change="selectChangeRWLB"
                >
                </rate-select>
              </el-form-item>

              <el-form-item label="任务状态：" prop="Status">
                <rate-select
                  v-model:value="queryparam.Status"
                  :url="rateRWZTSelect.selectUrl"
                  :urlParams="rateRWZTSelect.urlParams"
                  :multiple="true"
                  placeholder="全部"
                  :optionKeys="rateRWZTSelect.optionKeys"
                  :showLabels="rateRWZTSelect.showLabels"
                  :disables="rateRWZTSelect.disables"
                  @change="selectChangeRWZT"
                >
                </rate-select>
              </el-form-item>

              <!-- <div v-if="this.searchTaskTimeShow"> -->
              <el-form-item label="任务截止时间：">
                <el-date-picker
                  v-model:value="queryparam.startDate"
                  type="date"
                  :clearable="true"
                  placeholder="选择日期时间"
                  value-format="yyyy-MM-dd"
                  align="right"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item label="-">
                <el-date-picker
                  v-model:value="queryparam.endDate"
                  type="date"
                  :clearable="true"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期时间"
                  align="right"
                >
                </el-date-picker>
              </el-form-item>
              <!-- </div> -->
              <el-form-item label="故障类型：">
                <el-select
                  style="width: 100%"
                  v-model:value="queryparam.YJType"
                  clearable
                  placeholder="全部"
                >
                  <el-option
                    v-for="item in GZoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item class="btn">
                <el-button
                  type="primary"
                  v-has="'ywTask_handleSearch'"
                  icon="el-icon-search"
                  @click="getTaskList()"
                  >查询</el-button
                >
                <el-button
                  type="primary"
                  v-has="'ywTask_handleExport'"
                  icon="el-icon-download"
                  @click="download()"
                  >导出</el-button
                >
                <!--<el-button type="primary"  icon="el-icon-delete"   @click="clearInfo();">清空</el-button>-->
                <!--<el-button type="primary" v-has="'ywTask_handleSearch'"  icon="el-icon-download"   @click="asycData();">数据同步</el-button>-->
                <el-button
                  type="primary"
                  v-has="'ywTask_handleProYwTask'"
                  icon="el-icon-download"
                  @click="proTask()"
                  >生成任务</el-button
                >
                <!--<el-button type="primary" v-has="'ywTask_handleSearch'" icon="el-icon-download"   @click="toDoTask();">数据处理</el-button>-->
              </el-form-item>
            </el-form>
          </div>
          <div class="tools">
            <el-button
              size="small"
              class="el-button--iconButton"
              v-has="'ywTask_handleAdd'"
              icon="el-icon-plus"
              @click="handleAdd"
              >添加应急任务</el-button
            >
            <!--<el-button size="small" class=" el-button--iconButton" v-has="'ywTask_handleArrangement'"  icon="el-icon-s-promotion"  @click="handleArrangement">下发</el-button>-->
            <el-button
              size="small"
              class="el-button--iconButton"
              v-has="'ywTask_handleMultiplDel'"
              icon="el-icon-delete"
              @click="handleMultiplDel"
              >删除</el-button
            >
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-back"
              v-has="'ywTask_handleRecall'"
              style="text-overflow: initial"
              @click="handleBatchCancel"
              >撤回</el-button
            >
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-s-opportunity"
              v-has="'ywTask_handleSD'"
              style="text-overflow: initial"
              @click="handleBatchSD"
              >领取任务</el-button
            >
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-unlock"
              v-has="'ywTask_handleUnlock'"
              style="text-overflow: initial"
              @click="handleBatchJS"
              >解锁任务</el-button
            >
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-lock"
              v-has="'ywTask_handlelock'"
              style="text-overflow: initial"
              @click="handleBatchSuoD"
              >锁定任务</el-button
            >
          </div>
        </el-header>

        <el-main>
          <rate-table
            :list="list"
            @handleSelectionChange="handleSelectionChange"
            @handleCellClick="handleCellClick"
            @handleRowdblclick="handleRowdblclick"
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
        title="上传任务延时材料说明"
        v-model:visible="dialogVisible"
        width="50%"
      >
        <el-form
          :model="form"
          status-icon
          :rules="formRules"
          ref="form"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="内容：" prop="Remark">
                  <el-input
                    type="textarea"
                    :rows="8"
                    v-model:value="form.YSRemark"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item v-show="true" label="附件：" prop="TaskNo">
                  <rateUpload
                    :limit="10"
                    :Ismultiple="true"
                    :BusinessId="form.TaskNo"
                    :BusinessType="22"
                    @uploadSuccess="uploadSuccess"
                  ></rateUpload>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">&nbsp;</el-col>
            <el-col :span="8">
              <el-form-item>
                <el-button type="primary" @click="submitForm('form')"
                  >提交</el-button
                >
                <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
              </el-form-item>
            </el-col>
            <el-col :span="8">&nbsp;</el-col>`
          </el-row>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
import treeSStation from '../common/treeSStation' //引入treeSStation组件
import rateTable from '../common/rateTable' //引入table组件
import rateUpload from '../common/rateUpload' //引入rateCascader组件
import rateSelect from '../common/rateSelect' //引入rateSelect组件

export default {
  name: 'v_ywTask',
  data() {
    var self = this
    var roleType = sessionStorage.getItem('roleType')
    return {
      GZoptions: [
        { value: 1, label: '设备维修' },
        { value: 2, label: '网络故障' },
        { value: 3, label: '其他' },
      ], //故障类型
      CheckData: [],
      //任务截止时间显示和隐藏状态
      searchTaskTimeShow: true,
      choosedSearchMonth: '',
      flag: '',
      rateRWLXSelect: {
        //任务类型：
        model: '',
        selectUrl: this.api + '/api/Select/GetSelectList?TypeCode=002001',
        urlParams: JSON.stringify({}),
        optionKeys: JSON.stringify({
          value: 'dictCode',
          label: 'info',
        }),
        showLabels: 'info',
        disables: '',
      },
      rateRWLBSelect: {
        //任务类别：
        model: '',
        selectUrl: this.api + '/api/Select/GetSelectList?TypeCode=002006',
        urlParams: JSON.stringify({}),
        optionKeys: JSON.stringify({
          value: 'dictCode',
          label: 'info',
        }),
        showLabels: 'info',
        disables: '',
      },
      rateRWZTSelect: {
        //任务状态：
        model: '',
        selectUrl: this.api + '/api/Select/GetSelectList?TypeCode=002005',
        urlParams: JSON.stringify({}),
        optionKeys: JSON.stringify({
          value: 'dictCode',
          label: 'info',
        }),
        showLabels: 'info',
        disables: '',
      },
      dialogVisible: false,
      form: {
        TaskNo: '',
        YSFileName: '',
        YSFileUrl: '',
        YSRemark: '',
      },
      formRules: {
        Remark: [{ required: false, message: '请输入', trigger: 'blur' }],
      },
      ruleForm: {
        TaskNo: '',
        Title: '',
        PlanNo: '',
      },
      rules: {
        Title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        PlanNo: [
          { required: true, message: '请输入计划编号', trigger: 'blur' },
        ],
      },
      queryparam: {
        TaskNo: '',
        PlanNo: '',
        TaskType: '',
        TaskCategoryId: '',
        Status: '',
        startDate: '',
        endDate: '',
        chooseStationIds: '',
      },
      page: {
        //关于页码的相关参数
        pageShow: true, //是否显示
        total: 0, //总条数
        pageSize: 10, //每页条数
        pageNo: 1, //第几页
      },
      handleSelection: [], //checkbox选中行
      list: [], // table数据
      options: {
        // table样式参数
        stripe: true, // 是否为斑马纹 table
        loading: true, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: true, // 是否支持列表项选中功能
      }, // table 的参数结束
      columns: [
        {
          prop: 'planDealTime',
          label: '时间周期',
          align: 'center',
          isShow: true,
          width: 200,
          formatter: this.timePeriod,
        },
        {
          prop: 'show_Status',
          label: '任务状态',
          align: 'center',
          isShow: true,
        },
        { prop: 'city', label: '城市', align: 'center', isShow: true },
        {
          prop: 'sStationName',
          label: '站点名称',
          align: 'center',
          isShow: true,
          width: 150,
        },
        {
          prop: 'show_TaskType',
          label: '任务类型',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_TaskCategoryName',
          label: '任务类别',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'taskNo',
          label: '任务编号',
          align: 'center',
          isShow: true,
          width: 200,
        }, //formatter重构//return `返回参数`
        {
          prop: 'title',
          label: '标题',
          align: 'center',
          isShow: true,
          width: 150,
        },
        {
          prop: 'planNo',
          label: '计划编号',
          align: 'center',
          isShow: true,
          width: 200,
        },
        {
          prop: 'show_Urgency',
          label: '紧急程度',
          align: 'center',
          isShow: true,
        },
        { prop: 'unitName', label: '运维单位', align: 'center', isShow: true },
        {
          prop: 'dealerName',
          label: '运维人员',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'nextAuditerName',
          label: '审批人',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'sendingTime',
          label: '任务领取时间',
          align: 'center',
          isShow: true,
          width: 200,
          formatter: this.formatterTime,
        },
        {
          prop: 'planDealTime',
          label: '任务截止日期',
          align: 'center',
          isShow: true,
          width: 200,
          formatter: this.formatterTime,
        },
        {
          prop: 'dealTime',
          label: '处理时间',
          align: 'center',
          isShow: false,
          width: 200,
          formatter: this.formatterTime,
        },
        {
          prop: 'show_MaintainceWay',
          label: '处理方式',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'createdTime',
          label: '创建时间',
          align: 'center',
          isShow: true,
          width: 200,
          formatter: this.formatterTime,
        },
        {
          prop: 'show_YJType',
          label: '应急类型',
          align: 'center',
          isShow: true,
          width: 200,
        },
        { prop: 'remark', label: '备注', align: 'center', isShow: true },
        {
          prop: 'ysFileName',
          label: '延时完成附件',
          align: 'center',
          isShow: true,
          width: 200,
          formatter: (row, column, cellValue) => {
            if (row.ysFileName) {
              return '<a style="color:blue;">' + row.ysFileName + '</a>'
            } else {
              return ''
            }
          },
        },
        { prop: 'ysRemark', label: '延时备注', align: 'center', isShow: true },
      ], // 需要展示的列
      operates: {
        //操作栏
        width: 200,
        fixed: 'right',
        list: [
          {
            id: '1',
            label: '处理',
            show: true,
            hasbutton: 'ywTask_handleOperate',
            bgColortype: 'primary',
            className: 'searchAll',
            disabled: false,
            method: (index, row) => {
              //周，月，两月，季，半年，年进行控制
              if (
                row.isLock == 0 &&
                row.taskCategoryId == 1 &&
                self.timePeriodDetail(1, row.planDealTime) !=
                  self.timePeriodDetail(1, new Date())
              ) {
                //周
                this.$message({
                  type: 'warning',
                  dangerouslyUseHTMLString: true,
                  message:
                    '不能处理，当前时间为【' +
                    self.timePeriodDetail(1, new Date()) +
                    '】！',
                })
                return false
              }
              if (
                row.isLock == 0 &&
                row.taskCategoryId == 2 &&
                self.timePeriodDetail(2, row.planDealTime) !=
                  self.timePeriodDetail(2, new Date())
              ) {
                //月
                this.$message({
                  type: 'warning',
                  dangerouslyUseHTMLString: true,
                  message:
                    '不能处理，当前时间为【' +
                    self.timePeriodDetail(2, new Date()) +
                    '】！',
                })
                return false
              }
              if (
                row.isLock == 0 &&
                row.taskCategoryId == 3 &&
                self.timePeriodDetail(3, row.planDealTime) !=
                  self.timePeriodDetail(3, new Date())
              ) {
                //季
                this.$message({
                  type: 'warning',
                  dangerouslyUseHTMLString: true,
                  message:
                    '不能处理，当前时间为【' +
                    self.timePeriodDetail(3, new Date()) +
                    '】！',
                })
                return false
              }
              if (
                row.isLock == 0 &&
                row.taskCategoryId == 4 &&
                self.timePeriodDetail(4, row.planDealTime) !=
                  self.timePeriodDetail(4, new Date())
              ) {
                //半年
                this.$message({
                  type: 'warning',
                  dangerouslyUseHTMLString: true,
                  message:
                    '不能处理，当前时间为【' +
                    self.timePeriodDetail(4, new Date()) +
                    '】！',
                })
                return false
              }
              if (
                row.isLock == 0 &&
                row.taskCategoryId == 5 &&
                self.timePeriodDetail(5, row.planDealTime) !=
                  self.timePeriodDetail(5, new Date())
              ) {
                //年
                this.$message({
                  type: 'warning',
                  dangerouslyUseHTMLString: true,
                  message:
                    '不能处理，当前时间为【' +
                    self.timePeriodDetail(5, new Date()) +
                    '】！',
                })
                return false
              }
              if (
                row.isLock == 0 &&
                row.taskCategoryId == 6 &&
                self.timePeriodDetail(6, row.planDealTime) !=
                  self.timePeriodDetail(6, new Date())
              ) {
                //两月
                this.$message({
                  type: 'warning',
                  dangerouslyUseHTMLString: true,
                  message:
                    '不能处理，当前时间为【' +
                    self.timePeriodDetail(6, new Date()) +
                    '】！',
                })
                return false
              }

              if (row.status == 2 || row.status == 3) {
                this.handledeal(index, row)
              } else if (row.status == 1) {
                this.$message.warning('请先进行任务确认后在进行处理!')
                return false
              } else {
                // this.$message.warning("该状态不能处理!");
                // return false;
                //update 20220523
                if (row.taskCategoryId != 3) {
                  this.$message.warning('该状态不能处理!')
                  return false
                } else {
                  this.handledeal(index, row)
                }
              }
            },
          },
          {
            id: '7',
            label: '初审',
            show: true,
            hasbutton: 'ywTask_handleFirstCheck',
            bgColortype: 'warning',
            className: 'searchAll',
            disabled: false,
            method: (index, row) => {
              // if(roleType=="2" && row.show_TaskCategoryName!="周巡检" && row.show_TaskCategoryName!="月检查" && row.show_TaskCategoryName!="应急保障"){
              //     this.$message.warning("运维负责人角色只能查看，不能审核质控检查任务!");
              //     return false;
              // }
              //控制周巡检，只能审核本周（+2天）的任务，其他周均不能审核只能查看
              var CurrentDay2 = new Date(
                new Date().setDate(new Date().getDate() - 3)
              )
              if (
                row.isLock == 0 &&
                row.show_TaskCategoryName == '周巡检' &&
                new Date(row.planDealTime) < CurrentDay2
              ) {
                //this.$message.warning("不能审核，当前日期超出计划截止日期（+2天）！");
                this.$message({
                  type: 'warning',
                  dangerouslyUseHTMLString: true,
                  message: '不能审核，当前日期超出计划截止日期（+2天）！',
                })
                return false
              }
              if (row.status != 5) {
                if (row.taskCategoryId != 3) {
                  this.$message.warning('该状态不能审核!')
                  return false
                } else {
                  this.handleAudit(index, row)
                }
              }
              this.handleAudit(index, row)
            },
          },
          {
            id: '2',
            label: '复核',
            show: true,
            hasbutton: 'ywTask_handleCheck',
            bgColortype: 'warning',
            className: 'searchAll',
            disabled: false,
            method: (index, row) => {
              // if(roleType=="2" && row.show_TaskCategoryName!="周巡检" && row.show_TaskCategoryName!="月检查" && row.show_TaskCategoryName!="应急保障"){
              //     this.$message.warning("运维负责人角色只能查看，不能审核质控检查任务!");
              //     return false;
              // }
              //控制周巡检，只能审核本周（+2天）的任务，其他周均不能审核只能查看
              var CurrentDay2 = new Date(
                new Date().setDate(new Date().getDate() - 3)
              )
              if (
                row.isLock == 0 &&
                row.show_TaskCategoryName == '周巡检' &&
                new Date(row.planDealTime) < CurrentDay2
              ) {
                //this.$message.warning("不能审核，当前日期超出计划截止日期（+2天）！");
                this.$message({
                  type: 'warning',
                  dangerouslyUseHTMLString: true,
                  message: '不能审核，当前日期超出计划截止日期（+2天）！',
                })
                return false
              }
              if (row.status != 4) {
                if (row.taskCategoryId != 3) {
                  this.$message.warning('该状态不能审核!')
                  return false
                } else {
                  this.handleAudit(index, row)
                }
              }
              this.handleAudit(index, row)
            },
          },
          {
            id: '3',
            label: '编辑',
            bgColortype: 'success',
            hasbutton: 'ywTask_handleEdit',
            show: true, //是否显示按钮
            className: 'success', //样式类名
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              //周，月，两月，季，半年，年进行控制
              if (
                row.isLock == 0 &&
                row.taskCategoryId == 1 &&
                self.timePeriodDetail(1, row.planDealTime) !=
                  self.timePeriodDetail(1, new Date())
              ) {
                //周
                this.$message({
                  type: 'warning',
                  dangerouslyUseHTMLString: true,
                  message:
                    '不能处理，当前时间为【' +
                    self.timePeriodDetail(1, new Date()) +
                    '】！',
                })
                return false
              }
              // if(row.isLock==0 && row.taskCategoryId==2 && self.timePeriodDetail(2, row.planDealTime)!=self.timePeriodDetail(2, new Date())){  //月 2021-05-06天虹胡润要求：不是本月的月度任务要求不锁定.
              //     this.$message({
              //         type:"warning",
              //         dangerouslyUseHTMLString: true,
              //         message: "不能处理，当前时间为【"+self.timePeriodDetail(2, new Date())+"】！"
              //     });
              //     return false;
              // }
              if (
                row.isLock == 0 &&
                row.taskCategoryId == 3 &&
                self.timePeriodDetail(3, row.planDealTime) !=
                  self.timePeriodDetail(3, new Date())
              ) {
                //季
                this.$message({
                  type: 'warning',
                  dangerouslyUseHTMLString: true,
                  message:
                    '不能处理，当前时间为【' +
                    self.timePeriodDetail(3, new Date()) +
                    '】！',
                })
                return false
              }
              if (
                row.isLock == 0 &&
                row.taskCategoryId == 4 &&
                self.timePeriodDetail(4, row.planDealTime) !=
                  self.timePeriodDetail(4, new Date())
              ) {
                //半年
                this.$message({
                  type: 'warning',
                  dangerouslyUseHTMLString: true,
                  message:
                    '不能处理，当前时间为【' +
                    self.timePeriodDetail(4, new Date()) +
                    '】！',
                })
                return false
              }
              if (
                row.isLock == 0 &&
                row.taskCategoryId == 5 &&
                self.timePeriodDetail(5, row.planDealTime) !=
                  self.timePeriodDetail(5, new Date())
              ) {
                //年
                this.$message({
                  type: 'warning',
                  dangerouslyUseHTMLString: true,
                  message:
                    '不能处理，当前时间为【' +
                    self.timePeriodDetail(5, new Date()) +
                    '】！',
                })
                return false
              }
              if (
                row.isLock == 0 &&
                row.taskCategoryId == 6 &&
                self.timePeriodDetail(6, row.planDealTime) !=
                  self.timePeriodDetail(6, new Date())
              ) {
                //两月
                this.$message({
                  type: 'warning',
                  dangerouslyUseHTMLString: true,
                  message:
                    '不能处理，当前时间为【' +
                    self.timePeriodDetail(6, new Date()) +
                    '】！',
                })
                return false
              }

              if (row.status != 1) {
                this.$message.warning('该状态不能编辑!')
                return false
              }
              this.handleEdit(index, row)
            },
          },
          {
            id: '4',
            label: '补充',
            show: true,
            hasbutton: 'ywTask_handleBuchong',
            bgColortype: 'primary',
            className: 'searchAll',
            disabled: false,
            method: (index, row) => {
              this.handleUpload(index, row)
            },
          },
          {
            id: '5',
            label: '查看',
            bgColortype: 'info',
            hasbutton: 'ywTask_handleDetail',
            show: true, //是否显示按钮
            className: 'success', //样式类名
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleDetail(index, row)
            },
          },
          {
            id: '6',
            label: '删除',
            show: true,
            hasbutton: 'ywTask_handleMultiplDel',
            bgColortype: 'danger',
            className: 'searchAll',
            disabled: false,
            method: (index, row) => {
              this.handledel(index, row)
            },
          },
        ],
      }, // 列操作按钮
    } //return ending
  },
  methods: {
    //行双击事件
    handleRowdblclick(row, column, event) {
      var self = this
      if (row.row.status != 6) {
        this.$http({
          method: 'GET',
          url:
            self.api +
            '/api/Yw_Rpt/YwFormDetail?taskNo=' +
            row.row.taskNo +
            '&monthTime=' +
            row.row.planDealTime +
            '&taskCategoryId=' +
            row.row.taskCategoryId,
        })
          .then((res) => {
            if (res.status == 200) {
              self.$notify({
                title: '消息',
                dangerouslyUseHTMLString: true,
                message: res.data.message,
                type: 'info',
                duration: 0,
              })
            }
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        self.$notify({
          title: '消息',
          dangerouslyUseHTMLString: true,
          message: '选中任务已经完成!',
          type: 'info',
          duration: 0,
        })
      }
    },
    //清空
    clearInfo() {
      var self = this
      self.queryparam.TaskNo = ''
      self.queryparam.TaskType = ''
      self.queryparam.TaskCategoryId = ''
      self.queryparam.Status = ''
      //当前月份的第一天和最后一天
      this.getCurrentMonthFirst()
      this.getCurrentMonthLast()
      self.queryparam.chooseStationIds = ''
      self.CheckData = []
    },

    //获取时间周期
    timePeriod(row, column, cellValue) {
      var InspectionDesc = ''
      var val = row[column.prop]
      if (row.planDealTime == null) {
        return ''
      } else {
        return this.timePeriodDetail(
          row.taskCategoryId,
          row.planDealTime,
          row.isLock
        )
      }
    },

    timePeriodDetail(timeType, val, isLock) {
      var self = this
      var today = new Date(val)
      var inspectionDesc = ''
      var taskW = false //周
      var taskM = false //月和两月
      var taskSeason = false //季度月
      var taskHalfYear = false //半年
      var taskYear = false //年
      var taskYJ = false //年
      //当前日期所属哪个周，哪个月
      var currentDate = new Date()
      var currentMonth = parseInt(parseInt(currentDate.getMonth()) + 1) //当月
      //当周
      var currentWeek =
        currentDate.getFullYear() +
        '年第' +
        self.getWeekOfYear(currentDate) +
        '周' // 当前周日期是第几年第几周
      //当月
      var currentMonthAndTwoMonth =
        currentDate.getFullYear() + '年第' + currentMonth + '月' //当前month和TwoMonth
      //当季度
      var currentQuarter = ''
      if (currentMonth <= 3) {
        currentQuarter = '一季度' + currentMonth + '月'
      } else if (currentMonth <= 6) {
        currentQuarter = '二季度' + currentMonth + '月'
      } else if (currentMonth <= 9) {
        currentQuarter = '三季度' + currentMonth + '月'
      } else if (currentMonth <= 12) {
        currentQuarter = '四季度' + currentMonth + '月'
      }
      var currentSeasonMonth =
        currentDate.getFullYear() + '年第' + currentQuarter
      //半年
      var currentHalfYear = ''
      if (currentMonth / 6 <= 1) {
        currentHalfYear =
          currentDate.getFullYear() + '年' + '上半年' + currentMonth + '月'
      } else if (currentMonth / 6 > 1) {
        currentHalfYear =
          currentDate.getFullYear() + '年' + '下半年' + currentMonth + '月'
      }
      //年
      var currentYear = currentDate.getFullYear() + '年' + currentMonth + '月'

      switch (timeType) {
        case 1: //周
          inspectionDesc =
            today.getFullYear() + '年第' + this.getWeekOfYear(today) + '周'
          taskW = true
          break
        case 2: //月
        case 6:
          inspectionDesc =
            today.getFullYear() +
            '年第' +
            parseInt(parseInt(today.getMonth()) + 1) +
            '月'
          taskM = true
          break
        case 3: //季
          var Month = today.getMonth() + 1
          var Quarter = ''
          if (Month <= 3) {
            Quarter = '一季度' + Month + '月'
          } else if (Month <= 6) {
            Quarter = '二季度' + Month + '月'
          } else if (Month <= 9) {
            Quarter = '三季度' + Month + '月'
          } else if (Month <= 12) {
            Quarter = '四季度' + Month + '月'
          }
          inspectionDesc = today.getFullYear() + '年第' + Quarter
          taskSeason = true
          break
        case 4: //半年
          var Month = today.getMonth() + 1
          if (Month / 6 <= 1) {
            inspectionDesc =
              today.getFullYear() + '年' + '上半年' + Month + '月'
          } else if (Month / 6 > 1) {
            inspectionDesc =
              today.getFullYear() + '年' + '下半年' + Month + '月'
          }
          taskHalfYear = true
          break
        case 5:
          var Month = today.getMonth() + 1
          inspectionDesc = today.getFullYear() + '年' + Month + '月'
          taskYear = true
          break
        case 7:
          var Month = today.getMonth() + 1
          inspectionDesc = today.getFullYear() + '年' + Month + '月应急'
          taskYJ = true
          break
        default:
          inspectionDesc = ''
          break
      }

      if (taskW) {
        //是否需要锁定
        if (inspectionDesc != currentWeek) {
          //判断是否为本周
          if (isLock == 1) {
            //不是本周
            return `<i class="unlock" style="vertical-align: super;font-size: 30px;"><svg t="1614130652256" class="icon" viewBox="0 0 1448 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3130" width="32" height="32"><path d="M868.057993 437.736921H419.565235c-32.212778 0-58.320892 26.105681-58.320892 58.322108v425.769637c0 32.27481 26.108114 58.382924 58.320892 58.382925h606.019618c32.21886 0 58.266158-26.108114 58.266158-58.382925v-425.769637c-0.004865-32.21886-26.103249-58.322109-58.326973-58.322108H868.057993z m-112.727696 282.304548L755.329081 813.013843c0 4.152485-3.437295 7.655461-7.655461 7.655461h-50.133903c-4.270468 0-7.711411-3.502975-7.711412-7.655461v-92.972374c-23.553861-12.045127-39.868239-36.193764-39.868239-64.49732 0-40.045821 32.513207-72.618627 72.563893-72.618627 40.10542 0 72.623492 32.572806 72.623493 72.618627 0.053518 28.303555-16.259644 52.450976-39.817155 64.49732z" p-id="3131" fill="#1afa29"></path><path d="M932.254884 286.08241c0-80.218138 65.323194-145.541332 145.541332-145.541332 80.216921 0 145.424566 65.323194 145.424566 145.541332V437.738137h90.601784V282.229137c0-130.235275-105.850674-236.1419-236.083517-236.1419-130.234059 0-236.201499 105.906624-236.201499 236.1419V437.738137h90.717334V286.08241z" p-id="3132" fill="#1afa29"></path></svg></i>${inspectionDesc}`
          } else {
            //未手动解锁
            return `<i class="lock" style="vertical-align: super;font-size: 30px;"><svg t="1614132616909" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6593" width="32" height="32"><path d="M721.92 493.24032l0-74.26048c0 0-0.02048-173.21984-179.2-173.21984-179.17952 0-179.2 173.21984-179.2 173.21984l0 74.26048L286.72 493.24032 286.72 839.68l512 0L798.72 493.24032 721.92 493.24032zM568.32 684.3392l0 81.1008-51.2 0 0-81.1008C501.88288 675.75808 491.52 659.968 491.52 641.69984c0-27.3408 22.9376-49.50016 51.2-49.50016 28.2624 0 51.2 22.13888 51.2 49.50016C593.92 659.968 583.55712 675.75808 568.32 684.3392zM670.72 493.21984l-256 0 0-73.91232c0.28672-20.72576 7.80288-124.04736 128-124.04736 120.17664 0 127.71328 103.3216 128 123.71968L670.72 493.21984z" p-id="6594" fill="#d81e06"></path></svg></i>${inspectionDesc}`
          }
        } else {
          //是本周的周巡检
          return `<i class="unlock" style="vertical-align: super;font-size: 30px;"><svg t="1614130652256" class="icon" viewBox="0 0 1448 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3130" width="32" height="32"><path d="M868.057993 437.736921H419.565235c-32.212778 0-58.320892 26.105681-58.320892 58.322108v425.769637c0 32.27481 26.108114 58.382924 58.320892 58.382925h606.019618c32.21886 0 58.266158-26.108114 58.266158-58.382925v-425.769637c-0.004865-32.21886-26.103249-58.322109-58.326973-58.322108H868.057993z m-112.727696 282.304548L755.329081 813.013843c0 4.152485-3.437295 7.655461-7.655461 7.655461h-50.133903c-4.270468 0-7.711411-3.502975-7.711412-7.655461v-92.972374c-23.553861-12.045127-39.868239-36.193764-39.868239-64.49732 0-40.045821 32.513207-72.618627 72.563893-72.618627 40.10542 0 72.623492 32.572806 72.623493 72.618627 0.053518 28.303555-16.259644 52.450976-39.817155 64.49732z" p-id="3131" fill="#1afa29"></path><path d="M932.254884 286.08241c0-80.218138 65.323194-145.541332 145.541332-145.541332 80.216921 0 145.424566 65.323194 145.424566 145.541332V437.738137h90.601784V282.229137c0-130.235275-105.850674-236.1419-236.083517-236.1419-130.234059 0-236.201499 105.906624-236.201499 236.1419V437.738137h90.717334V286.08241z" p-id="3132" fill="#1afa29"></path></svg></i>${inspectionDesc}`
        }
      }
      if (taskM) {
        //是否需要锁定
        if (inspectionDesc != currentMonthAndTwoMonth) {
          //判断是否为本月
          if (isLock == 1) {
            //不是本月的
            return `<i class="unlock" style="vertical-align: super;font-size: 30px;"><svg t="1614130652256" class="icon" viewBox="0 0 1448 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3130" width="32" height="32"><path d="M868.057993 437.736921H419.565235c-32.212778 0-58.320892 26.105681-58.320892 58.322108v425.769637c0 32.27481 26.108114 58.382924 58.320892 58.382925h606.019618c32.21886 0 58.266158-26.108114 58.266158-58.382925v-425.769637c-0.004865-32.21886-26.103249-58.322109-58.326973-58.322108H868.057993z m-112.727696 282.304548L755.329081 813.013843c0 4.152485-3.437295 7.655461-7.655461 7.655461h-50.133903c-4.270468 0-7.711411-3.502975-7.711412-7.655461v-92.972374c-23.553861-12.045127-39.868239-36.193764-39.868239-64.49732 0-40.045821 32.513207-72.618627 72.563893-72.618627 40.10542 0 72.623492 32.572806 72.623493 72.618627 0.053518 28.303555-16.259644 52.450976-39.817155 64.49732z" p-id="3131" fill="#1afa29"></path><path d="M932.254884 286.08241c0-80.218138 65.323194-145.541332 145.541332-145.541332 80.216921 0 145.424566 65.323194 145.424566 145.541332V437.738137h90.601784V282.229137c0-130.235275-105.850674-236.1419-236.083517-236.1419-130.234059 0-236.201499 105.906624-236.201499 236.1419V437.738137h90.717334V286.08241z" p-id="3132" fill="#1afa29"></path></svg></i>${inspectionDesc}`
          } else {
            //未手动解锁
            return `<i class="unlock" style="vertical-align: super;font-size: 30px;"><svg t="1614132616909" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6593" width="32" height="32"><path d="M721.92 493.24032l0-74.26048c0 0-0.02048-173.21984-179.2-173.21984-179.17952 0-179.2 173.21984-179.2 173.21984l0 74.26048L286.72 493.24032 286.72 839.68l512 0L798.72 493.24032 721.92 493.24032zM568.32 684.3392l0 81.1008-51.2 0 0-81.1008C501.88288 675.75808 491.52 659.968 491.52 641.69984c0-27.3408 22.9376-49.50016 51.2-49.50016 28.2624 0 51.2 22.13888 51.2 49.50016C593.92 659.968 583.55712 675.75808 568.32 684.3392zM670.72 493.21984l-256 0 0-73.91232c0.28672-20.72576 7.80288-124.04736 128-124.04736 120.17664 0 127.71328 103.3216 128 123.71968L670.72 493.21984z" p-id="6594" fill="#d81e06"></path></svg></i>${inspectionDesc}`
            //return  `<i class="lock" style="vertical-align: super;font-size: 30px;"><svg t="1614132616909" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6593" width="32" height="32"><path d="M721.92 493.24032l0-74.26048c0 0-0.02048-173.21984-179.2-173.21984-179.17952 0-179.2 173.21984-179.2 173.21984l0 74.26048L286.72 493.24032 286.72 839.68l512 0L798.72 493.24032 721.92 493.24032zM568.32 684.3392l0 81.1008-51.2 0 0-81.1008C501.88288 675.75808 491.52 659.968 491.52 641.69984c0-27.3408 22.9376-49.50016 51.2-49.50016 28.2624 0 51.2 22.13888 51.2 49.50016C593.92 659.968 583.55712 675.75808 568.32 684.3392zM670.72 493.21984l-256 0 0-73.91232c0.28672-20.72576 7.80288-124.04736 128-124.04736 120.17664 0 127.71328 103.3216 128 123.71968L670.72 493.21984z" p-id="6594" fill="#d81e06"></path></svg></i>${inspectionDesc}`;
          }
        } else {
          //是本月
          return `<i class="unlock" style="vertical-align: super;font-size: 30px;"><svg t="1614130652256" class="icon" viewBox="0 0 1448 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3130" width="32" height="32"><path d="M868.057993 437.736921H419.565235c-32.212778 0-58.320892 26.105681-58.320892 58.322108v425.769637c0 32.27481 26.108114 58.382924 58.320892 58.382925h606.019618c32.21886 0 58.266158-26.108114 58.266158-58.382925v-425.769637c-0.004865-32.21886-26.103249-58.322109-58.326973-58.322108H868.057993z m-112.727696 282.304548L755.329081 813.013843c0 4.152485-3.437295 7.655461-7.655461 7.655461h-50.133903c-4.270468 0-7.711411-3.502975-7.711412-7.655461v-92.972374c-23.553861-12.045127-39.868239-36.193764-39.868239-64.49732 0-40.045821 32.513207-72.618627 72.563893-72.618627 40.10542 0 72.623492 32.572806 72.623493 72.618627 0.053518 28.303555-16.259644 52.450976-39.817155 64.49732z" p-id="3131" fill="#1afa29"></path><path d="M932.254884 286.08241c0-80.218138 65.323194-145.541332 145.541332-145.541332 80.216921 0 145.424566 65.323194 145.424566 145.541332V437.738137h90.601784V282.229137c0-130.235275-105.850674-236.1419-236.083517-236.1419-130.234059 0-236.201499 105.906624-236.201499 236.1419V437.738137h90.717334V286.08241z" p-id="3132" fill="#1afa29"></path></svg></i>${inspectionDesc}`
        }
      }
      if (taskSeason) {
        //是否需要锁定
        if (inspectionDesc != currentSeasonMonth) {
          //判断是否为季度本月
          if (isLock == 1) {
            //不是本月的
            return `<i class="unlock" style="vertical-align: super;font-size: 30px;"><svg t="1614130652256" class="icon" viewBox="0 0 1448 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3130" width="32" height="32"><path d="M868.057993 437.736921H419.565235c-32.212778 0-58.320892 26.105681-58.320892 58.322108v425.769637c0 32.27481 26.108114 58.382924 58.320892 58.382925h606.019618c32.21886 0 58.266158-26.108114 58.266158-58.382925v-425.769637c-0.004865-32.21886-26.103249-58.322109-58.326973-58.322108H868.057993z m-112.727696 282.304548L755.329081 813.013843c0 4.152485-3.437295 7.655461-7.655461 7.655461h-50.133903c-4.270468 0-7.711411-3.502975-7.711412-7.655461v-92.972374c-23.553861-12.045127-39.868239-36.193764-39.868239-64.49732 0-40.045821 32.513207-72.618627 72.563893-72.618627 40.10542 0 72.623492 32.572806 72.623493 72.618627 0.053518 28.303555-16.259644 52.450976-39.817155 64.49732z" p-id="3131" fill="#1afa29"></path><path d="M932.254884 286.08241c0-80.218138 65.323194-145.541332 145.541332-145.541332 80.216921 0 145.424566 65.323194 145.424566 145.541332V437.738137h90.601784V282.229137c0-130.235275-105.850674-236.1419-236.083517-236.1419-130.234059 0-236.201499 105.906624-236.201499 236.1419V437.738137h90.717334V286.08241z" p-id="3132" fill="#1afa29"></path></svg></i>${inspectionDesc}`
          } else {
            //未手动解锁
            return `<i class="lock" style="vertical-align: super;font-size: 30px;"><svg t="1614132616909" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6593" width="32" height="32"><path d="M721.92 493.24032l0-74.26048c0 0-0.02048-173.21984-179.2-173.21984-179.17952 0-179.2 173.21984-179.2 173.21984l0 74.26048L286.72 493.24032 286.72 839.68l512 0L798.72 493.24032 721.92 493.24032zM568.32 684.3392l0 81.1008-51.2 0 0-81.1008C501.88288 675.75808 491.52 659.968 491.52 641.69984c0-27.3408 22.9376-49.50016 51.2-49.50016 28.2624 0 51.2 22.13888 51.2 49.50016C593.92 659.968 583.55712 675.75808 568.32 684.3392zM670.72 493.21984l-256 0 0-73.91232c0.28672-20.72576 7.80288-124.04736 128-124.04736 120.17664 0 127.71328 103.3216 128 123.71968L670.72 493.21984z" p-id="6594" fill="#d81e06"></path></svg></i>${inspectionDesc}`
          }
        } else {
          //是季度本月
          return `<i class="unlock" style="vertical-align: super;font-size: 30px;"><svg t="1614130652256" class="icon" viewBox="0 0 1448 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3130" width="32" height="32"><path d="M868.057993 437.736921H419.565235c-32.212778 0-58.320892 26.105681-58.320892 58.322108v425.769637c0 32.27481 26.108114 58.382924 58.320892 58.382925h606.019618c32.21886 0 58.266158-26.108114 58.266158-58.382925v-425.769637c-0.004865-32.21886-26.103249-58.322109-58.326973-58.322108H868.057993z m-112.727696 282.304548L755.329081 813.013843c0 4.152485-3.437295 7.655461-7.655461 7.655461h-50.133903c-4.270468 0-7.711411-3.502975-7.711412-7.655461v-92.972374c-23.553861-12.045127-39.868239-36.193764-39.868239-64.49732 0-40.045821 32.513207-72.618627 72.563893-72.618627 40.10542 0 72.623492 32.572806 72.623493 72.618627 0.053518 28.303555-16.259644 52.450976-39.817155 64.49732z" p-id="3131" fill="#1afa29"></path><path d="M932.254884 286.08241c0-80.218138 65.323194-145.541332 145.541332-145.541332 80.216921 0 145.424566 65.323194 145.424566 145.541332V437.738137h90.601784V282.229137c0-130.235275-105.850674-236.1419-236.083517-236.1419-130.234059 0-236.201499 105.906624-236.201499 236.1419V437.738137h90.717334V286.08241z" p-id="3132" fill="#1afa29"></path></svg></i>${inspectionDesc}`
        }
      }
      if (taskHalfYear) {
        //是否需要锁定
        if (inspectionDesc != currentHalfYear) {
          //判断是否为半年月
          if (isLock == 1) {
            //不是本月的
            return `<i class="unlock" style="vertical-align: super;font-size: 30px;"><svg t="1614130652256" class="icon" viewBox="0 0 1448 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3130" width="32" height="32"><path d="M868.057993 437.736921H419.565235c-32.212778 0-58.320892 26.105681-58.320892 58.322108v425.769637c0 32.27481 26.108114 58.382924 58.320892 58.382925h606.019618c32.21886 0 58.266158-26.108114 58.266158-58.382925v-425.769637c-0.004865-32.21886-26.103249-58.322109-58.326973-58.322108H868.057993z m-112.727696 282.304548L755.329081 813.013843c0 4.152485-3.437295 7.655461-7.655461 7.655461h-50.133903c-4.270468 0-7.711411-3.502975-7.711412-7.655461v-92.972374c-23.553861-12.045127-39.868239-36.193764-39.868239-64.49732 0-40.045821 32.513207-72.618627 72.563893-72.618627 40.10542 0 72.623492 32.572806 72.623493 72.618627 0.053518 28.303555-16.259644 52.450976-39.817155 64.49732z" p-id="3131" fill="#1afa29"></path><path d="M932.254884 286.08241c0-80.218138 65.323194-145.541332 145.541332-145.541332 80.216921 0 145.424566 65.323194 145.424566 145.541332V437.738137h90.601784V282.229137c0-130.235275-105.850674-236.1419-236.083517-236.1419-130.234059 0-236.201499 105.906624-236.201499 236.1419V437.738137h90.717334V286.08241z" p-id="3132" fill="#1afa29"></path></svg></i>${inspectionDesc}`
          } else {
            //未手动解锁
            return `<i class="lock" style="vertical-align: super;font-size: 30px;"><svg t="1614132616909" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6593" width="32" height="32"><path d="M721.92 493.24032l0-74.26048c0 0-0.02048-173.21984-179.2-173.21984-179.17952 0-179.2 173.21984-179.2 173.21984l0 74.26048L286.72 493.24032 286.72 839.68l512 0L798.72 493.24032 721.92 493.24032zM568.32 684.3392l0 81.1008-51.2 0 0-81.1008C501.88288 675.75808 491.52 659.968 491.52 641.69984c0-27.3408 22.9376-49.50016 51.2-49.50016 28.2624 0 51.2 22.13888 51.2 49.50016C593.92 659.968 583.55712 675.75808 568.32 684.3392zM670.72 493.21984l-256 0 0-73.91232c0.28672-20.72576 7.80288-124.04736 128-124.04736 120.17664 0 127.71328 103.3216 128 123.71968L670.72 493.21984z" p-id="6594" fill="#d81e06"></path></svg></i>${inspectionDesc}`
          }
        } else {
          //是半年月
          return `<i class="unlock" style="vertical-align: super;font-size: 30px;"><svg t="1614130652256" class="icon" viewBox="0 0 1448 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3130" width="32" height="32"><path d="M868.057993 437.736921H419.565235c-32.212778 0-58.320892 26.105681-58.320892 58.322108v425.769637c0 32.27481 26.108114 58.382924 58.320892 58.382925h606.019618c32.21886 0 58.266158-26.108114 58.266158-58.382925v-425.769637c-0.004865-32.21886-26.103249-58.322109-58.326973-58.322108H868.057993z m-112.727696 282.304548L755.329081 813.013843c0 4.152485-3.437295 7.655461-7.655461 7.655461h-50.133903c-4.270468 0-7.711411-3.502975-7.711412-7.655461v-92.972374c-23.553861-12.045127-39.868239-36.193764-39.868239-64.49732 0-40.045821 32.513207-72.618627 72.563893-72.618627 40.10542 0 72.623492 32.572806 72.623493 72.618627 0.053518 28.303555-16.259644 52.450976-39.817155 64.49732z" p-id="3131" fill="#1afa29"></path><path d="M932.254884 286.08241c0-80.218138 65.323194-145.541332 145.541332-145.541332 80.216921 0 145.424566 65.323194 145.424566 145.541332V437.738137h90.601784V282.229137c0-130.235275-105.850674-236.1419-236.083517-236.1419-130.234059 0-236.201499 105.906624-236.201499 236.1419V437.738137h90.717334V286.08241z" p-id="3132" fill="#1afa29"></path></svg></i>${inspectionDesc}`
        }
      }
      if (taskYear) {
        //是否需要锁定
        if (inspectionDesc != currentYear) {
          //判断是否为年
          if (isLock == 1) {
            //不是本年
            return `<i class="unlock" style="vertical-align: super;font-size: 30px;"><svg t="1614130652256" class="icon" viewBox="0 0 1448 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3130" width="32" height="32"><path d="M868.057993 437.736921H419.565235c-32.212778 0-58.320892 26.105681-58.320892 58.322108v425.769637c0 32.27481 26.108114 58.382924 58.320892 58.382925h606.019618c32.21886 0 58.266158-26.108114 58.266158-58.382925v-425.769637c-0.004865-32.21886-26.103249-58.322109-58.326973-58.322108H868.057993z m-112.727696 282.304548L755.329081 813.013843c0 4.152485-3.437295 7.655461-7.655461 7.655461h-50.133903c-4.270468 0-7.711411-3.502975-7.711412-7.655461v-92.972374c-23.553861-12.045127-39.868239-36.193764-39.868239-64.49732 0-40.045821 32.513207-72.618627 72.563893-72.618627 40.10542 0 72.623492 32.572806 72.623493 72.618627 0.053518 28.303555-16.259644 52.450976-39.817155 64.49732z" p-id="3131" fill="#1afa29"></path><path d="M932.254884 286.08241c0-80.218138 65.323194-145.541332 145.541332-145.541332 80.216921 0 145.424566 65.323194 145.424566 145.541332V437.738137h90.601784V282.229137c0-130.235275-105.850674-236.1419-236.083517-236.1419-130.234059 0-236.201499 105.906624-236.201499 236.1419V437.738137h90.717334V286.08241z" p-id="3132" fill="#1afa29"></path></svg></i>${inspectionDesc}`
          } else {
            //未手动解锁
            return `<i class="lock" style="vertical-align: super;font-size: 30px;"><svg t="1614132616909" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6593" width="32" height="32"><path d="M721.92 493.24032l0-74.26048c0 0-0.02048-173.21984-179.2-173.21984-179.17952 0-179.2 173.21984-179.2 173.21984l0 74.26048L286.72 493.24032 286.72 839.68l512 0L798.72 493.24032 721.92 493.24032zM568.32 684.3392l0 81.1008-51.2 0 0-81.1008C501.88288 675.75808 491.52 659.968 491.52 641.69984c0-27.3408 22.9376-49.50016 51.2-49.50016 28.2624 0 51.2 22.13888 51.2 49.50016C593.92 659.968 583.55712 675.75808 568.32 684.3392zM670.72 493.21984l-256 0 0-73.91232c0.28672-20.72576 7.80288-124.04736 128-124.04736 120.17664 0 127.71328 103.3216 128 123.71968L670.72 493.21984z" p-id="6594" fill="#d81e06"></path></svg></i>${inspectionDesc}`
          }
        } else {
          //是年
          return `<i class="unlock" style="vertical-align: super;font-size: 30px;"><svg t="1614130652256" class="icon" viewBox="0 0 1448 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3130" width="32" height="32"><path d="M868.057993 437.736921H419.565235c-32.212778 0-58.320892 26.105681-58.320892 58.322108v425.769637c0 32.27481 26.108114 58.382924 58.320892 58.382925h606.019618c32.21886 0 58.266158-26.108114 58.266158-58.382925v-425.769637c-0.004865-32.21886-26.103249-58.322109-58.326973-58.322108H868.057993z m-112.727696 282.304548L755.329081 813.013843c0 4.152485-3.437295 7.655461-7.655461 7.655461h-50.133903c-4.270468 0-7.711411-3.502975-7.711412-7.655461v-92.972374c-23.553861-12.045127-39.868239-36.193764-39.868239-64.49732 0-40.045821 32.513207-72.618627 72.563893-72.618627 40.10542 0 72.623492 32.572806 72.623493 72.618627 0.053518 28.303555-16.259644 52.450976-39.817155 64.49732z" p-id="3131" fill="#1afa29"></path><path d="M932.254884 286.08241c0-80.218138 65.323194-145.541332 145.541332-145.541332 80.216921 0 145.424566 65.323194 145.424566 145.541332V437.738137h90.601784V282.229137c0-130.235275-105.850674-236.1419-236.083517-236.1419-130.234059 0-236.201499 105.906624-236.201499 236.1419V437.738137h90.717334V286.08241z" p-id="3132" fill="#1afa29"></path></svg></i>${inspectionDesc}`
        }
      }
      if (taskYJ) {
        //是否需要锁定
        return `${inspectionDesc}`
      }
    },

    //判断当前日期为当年第几周
    getWeekOfYear(today) {
      var newday = new Date(today)
      if (
        newday.getHours() == 0 &&
        newday.getMinutes() == 0 &&
        newday.getSeconds() == 0
      ) {
        today = new Date(newday.getTime() + 1000)
      }

      var firstDay = new Date(today.getFullYear(), 0, 1)
      var dayOfWeek = firstDay.getDay()
      var spendDay = 1
      if (dayOfWeek != 0) {
        spendDay = 7 - dayOfWeek + 1
      }
      firstDay = new Date(today.getFullYear(), 0, 1 + spendDay)
      var d = Math.ceil((today.valueOf() - firstDay.valueOf()) / 86400000)
      var result = Math.ceil(d / 7)
      return result + 1
    },

    getSearchStations(obj) {
      var self = this
      var configIds = ''
      if (obj != null) {
        obj.forEach((o) => {
          if (o.sStation != '') {
            configIds += o.sStation + ','
          }
        })
        self.queryparam.chooseStationIds = configIds
      }
    },

    //当月默认时间
    getDefaultTime() {
      debugger
      var self = this
      //获取当前时间
      var date11 = new Date()
      date11.setDate(1)
      var month11 = parseInt(date11.getMonth() + 1)
      var day11 = date11.getDate()
      if (month11 < 10) month11 = '0' + month11
      if (day11 < 10) day11 = '0' + day11
      self.currentMonthInfo = date11.getFullYear() + '-' + month11
      //表示从子页面跳过来
      if (self.flag == 2) {
        self.getTaskList()
      } else {
        //如果是质控室默认当月即可
        if (sessionStorage.getItem('roleType').toString() == '3') {
          if (self.choosedSearchMonth == '') {
            //当月
            //开始时间
            var date1 = new Date()
            date1.setDate(1)
            var month1 = parseInt(date1.getMonth() + 1) //修改，起始时间为上一个月
            var year = date1.getFullYear()
            if (month1 == 1) {
              month1 = 12
              year -= 1
            } else {
              month1 -= 1
            }
            var day1 = date1.getDate()
            if (month1 < 10) month1 = '0' + month1
            if (day1 < 10) day1 = '0' + day1

            self.queryparam.startDate = year + '-' + month1 + '-' + day1

            //结束时间
            var date = new Date()
            var year = date.getFullYear()
            var month = date.getMonth() + 1
            month = month < 10 ? '0' + month : month
            var day = new Date(year, month, 0)
            //自然月结束时间
            self.queryparam.endDate = year + '-' + month + '-' + day.getDate()
          } //选择月
          else {
            //开始时间
            var newdate = new Date(self.choosedSearchMonth)
            newdate.setDate(1)
            var month1 = parseInt(newdate.getMonth() + 1) //修改，起始时间为上一个月
            var day1 = newdate.getDate()
            if (month1 < 10) month1 = '0' + month1
            if (day1 < 10) day1 = '0' + day1
            self.queryparam.startDate =
              newdate.getFullYear() + '-' + month1 + '-' + day1

            //结束时间
            var date = new Date(self.choosedSearchMonth)
            var year = date.getFullYear()
            var month = date.getMonth() + 1
            month = month < 10 ? '0' + month : month
            var day = new Date(year, month, 0)
            //自然月结束时间
            self.queryparam.endDate = year + '-' + month + '-' + day.getDate()
          }
          this.getTaskList() //调用获取列表页的方法
        } else {
          //其余角色按照计划来
          this.$http({
            method: 'GET',
            url:
              self.api +
              '/api/Yw_Task/GetEndTimeofMonthByPlan?choosedMonth=' +
              self.choosedSearchMonth +
              '&flag=' +
              self.flag,
          })
            .then((res) => {
              if (res.status == 200) {
                debugger
                var dateStartTime = new Date(res.data.startTime)
                var year1 = dateStartTime.getFullYear()
                var month1 = dateStartTime.getMonth() + 1 //月
                month1 = month1 < 10 ? '0' + month1 : month1
                var day1 = dateStartTime.getDate() //天
                if (day1 < 10) day1 = '0' + day1
                self.queryparam.startDate = year1 + '-' + month1 + '-' + day1

                var dateEndTime = new Date(res.data.endTime)
                var year = dateEndTime.getFullYear()
                var month = dateEndTime.getMonth() + 1 //月
                month = month < 10 ? '0' + month : month
                var day = dateEndTime.getDate() //天
                if (day < 10) day = '0' + day
                var month2 = dateEndTime.getMonth() + 1 //月
                if (month2 == 12) {
                  month2 = 1
                  year += 1
                } else {
                  month2 += 1
                }
                self.queryparam.endDate = year + '-' + month2 + '-28'
                this.getTaskList() //调用获取列表页的方法
              }
            })
            .catch((error) => {
              console.log(error)
            })
        }
      }
    },

    //任务类型
    selectChangeRWLX(val, valObj) {
      this.rateRWLXSelect.model = val
      this.rateRWLBSelect.selectUrl =
        this.api + '/api/Select/GetSelectList?TypeCode=002006&DictCode=' + val
      this.queryparam.TaskType = val
    },

    //任务类别
    selectChangeRWLB(val, valObj) {
      this.model = val
      this.queryparam.TaskCategoryId = val
    },

    //任务状态
    selectChangeRWZT(val, valObj) {
      this.model = val
      this.queryparam.Status = val
    },

    uploadSuccess(file) {
      this.form.YSFileName = file.fileName
      this.form.YSFileUrl = file.fileUrl
    },

    handleCellClick(obj) {
      //单元格单击事件处理函数
      switch (obj.column.label) {
        case '延时完成附件':
          if (obj.row.ysFileName) {
            this.commonDownLoad(obj.row.ysFileName, obj.row.ysFileUrl)
          }
          break
        default:
          break
      }
    },

    commonDownLoad(fileName, path) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          self.api + '/api/DownLoad/commonGetDownLoadPath?partialPath=' + path,
      })
        .then((res) => {
          if (res.data.code == 200) {
            location.href =
              self.api +
              '/api/DownLoad/commonDownLoad?fileName=' +
              fileName +
              '&path=' +
              res.data.data
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    submitForm(formName) {
      var self = this
      this.$http({
        headers: {
          deviceCode: 'A95ZEF1-47B5-AC90BF3',
        },
        method: 'post',
        url: self.api + '/api/Yw_Task/YwTask_YSUpload',
        data: self.Qs.stringify(self.form),
      })
        .then((res) => {
          if (res.status == 200) {
            self.dialogVisible = false
            self.getTaskList()
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

    //解锁任务
    handleBatchJS() {
      var self = this
      var ids = ''
      if (this.handleSelection == '') {
        self.$message({
          message: '请选择要解锁的任务！',
          type: 'warning', //success,warning,info,error
        })
        return
      }
      this.handleSelection.forEach((item, index) => {
        ids += item.taskNo + ','
      })
      this.$confirm('确认解锁？')
        .then(function () {
          self.handleBatchUnLock(ids)
        })
        .catch(function () {})
    },

    handleBatchUnLock(ids) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          self.api +
          '/api/InspectionPlan/BatchUpdateYWTaskUnLock?taskNo=' +
          ids,
      })
        .then((res) => {
          if (res.status == 200) {
            self.getTaskList()
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    handleBatchSuoD() {
      var self = this
      var ids = ''
      if (this.handleSelection == '') {
        self.$message({
          message: '请选择要锁定的任务！',
          type: 'warning', //success,warning,info,error
        })
        return
      }
      this.handleSelection.forEach((item, index) => {
        ids += item.taskNo + ','
      })
      this.$confirm('确认锁定？')
        .then(function () {
          self.handleBatchLock(ids)
        })
        .catch(function () {})
    },

    handleBatchLock(ids) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          self.api + '/api/InspectionPlan/BatchUpdateYWTaskLock?taskNo=' + ids,
      })
        .then((res) => {
          if (res.status == 200) {
            self.getTaskList()
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    handleMultiplDel() {
      var self = this
      var ids = ''
      if (this.handleSelection == '') {
        self.$message({
          message: '请选择要删除的数据！',
          type: 'warning', //success,warning,info,error
        })
        return
      }
      this.handleSelection.forEach((item, index) => {
        if (index != self.handleSelection.length - 1) {
          ids += item.taskNo + ','
        } else {
          ids += item.taskNo
        }
      })
      this.$confirm('确认删除？')
        .then(function () {
          self.handlemultipl(ids)
        })
        .catch(function () {})
    },

    //领取
    handleBatchSD() {
      var self = this
      var SStations = self.queryparam.chooseStationIds
      if (SStations == '') {
        self.$message({
          message: '请先勾选左侧需要领取任务的站点！',
          type: 'warning', //success,warning,info,error
        })
        return false
      }
      this.$http({
        method: 'GET',
        url:
          self.api + '/api/InspectionPlan/BatchSDTask?SStations=' + SStations,
      })
        .then((res) => {
          if (res.status == 200) {
            self.getTaskList()
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //撤回
    handleBatchCancel() {
      var self = this
      var ids = ''
      var tips = ''
      if (this.handleSelection == '') {
        self.$message({
          message: '请选择要撤回的数据！',
          type: 'warning', //success,warning,info,error
        })
        return
      }
      this.handleSelection.forEach((item, index) => {
        //只能撤回待处理后的状态 ---   待处理、处理中、待审核  -----已完成无法撤回
        if (item.status >= 2 && item.status < 8) {
          ids += item.taskNo + ','
        } else {
          tips +=
            '选中第' + (index + 1) + '行不能撤回,下发后,但未完成的任务才能撤回!'
        }
      })
      if (tips != '') {
        self.$message({
          message: tips,
          type: 'warning', //success,warning,info,error
        })
        return
      } else {
        this.$confirm('确认撤回？')
          .then(function () {
            self.handleRevert(ids)
          })
          .catch(function () {})
      }
    },

    handleRevert(ids) {
      var self = this
      this.$http({
        method: 'GET',
        url: self.api + '/api/InspectionPlan/BatchUpdateYWTask?taskNo=' + ids,
      })
        .then((res) => {
          if (res.status == 200) {
            self.getTaskList()
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    handlemultipl(ids) {
      var self = this
      this.$http({
        method: 'GET',
        url: self.api + '/api/Yw_Task/YwTask_multipl?ids=' + ids,
      })
        .then((res) => {
          if (res.status == 200) {
            self.getTaskList()
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    YwTask_Singelmultipl(taskNo) {
      var self = this
      this.$http({
        method: 'GET',
        url: self.api + '/api/Yw_Task/YwTask_Singelmultipl?TaskNo=' + taskNo,
      })
        .then((res) => {
          if (res.status == 200) {
            self.getTaskList()
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    handleSelectionChange(val) {
      //checkbox选中的数据val 是选中行的所有数组
      this.handleSelection = val
    },

    getSizeChange(val) {
      //table组件发射的方法 用于改变每页数据量
      this.page.pageSize = val
      //这下面需要重新调用 获取列表页的函数
      this.getTaskList()
    },

    getCurrentPage(val) {
      //table组件发射的方法  用于改变当前所在页码
      this.page.pageNo = val
      //这下面需要重新调用 获取列表页的函数
      this.getTaskList()
    },

    handleAdd() {
      var obj = {
        taskNo: '',
        firstButtonType: 'add',
        taskStatus: this.queryparam.Status,
        taskCategoryId: this.queryparam.TaskCategoryId,
        chooseStationIds: this.queryparam.chooseStationIds,
        chooseStartTime: this.queryparam.startDate,
        chooseEndTime: this.queryparam.endDate,
      }
      $emit(this, 'jump', {
        param: '任务编辑',
        path: '/index/ywTaskDisplay?obj=' + JSON.stringify(obj),
        isjump: true,
      })
    },

    handleEdit(index, row) {
      //操作栏编辑按钮
      var obj = { taskNo: row.taskNo, firstButtonType: 'Edit' }
      $emit(this, 'jump', {
        param: '任务编辑',
        path: '/index/ywTaskDisplay?obj=' + JSON.stringify(obj),
        isjump: true,
      })
    },

    //查看按钮
    handleDetail(index, row) {
      var obj = {
        taskNo: row.taskNo,
        firstButtonType: 'Detail',
        taskStatus: this.queryparam.Status,
        taskCategoryId: this.queryparam.TaskCategoryId,
        chooseStationIds: this.queryparam.chooseStationIds,
        chooseStartTime: this.queryparam.startDate,
        chooseEndTime: this.queryparam.endDate,
      }
      $emit(this, 'jump', {
        param: '任务编辑',
        path: '/index/ywTaskDisplay?obj=' + JSON.stringify(obj),
        isjump: true,
      })
    },

    handledel(index, row) {
      //操作栏删除按钮
      var self = this
      this.$confirm('确认删除？')
        .then(function () {
          self.YwTask_Singelmultipl(row.taskNo)
        })
        .catch(function () {})
    },

    //任务处理
    handledeal(index, row) {
      var obj = {
        taskNo: row.taskNo,
        firstButtonType: 'Deal',
        taskStatus: this.queryparam.Status,
        taskCategoryId: this.queryparam.TaskCategoryId,
        chooseStationIds: this.queryparam.chooseStationIds,
        chooseStartTime: this.queryparam.startDate,
        chooseEndTime: this.queryparam.endDate,
      }
      $emit(this, 'jump', {
        param: '任务编辑',
        path: '/index/ywTaskDisplay?obj=' + JSON.stringify(obj),
        isjump: true,
      })
    },

    //任务审核
    handleAudit(index, row) {
      var obj = {
        taskNo: row.taskNo,
        firstButtonType: 'Audit',
        taskStatus: this.queryparam.Status,
        taskCategoryId: this.queryparam.TaskCategoryId,
        chooseStationIds: this.queryparam.chooseStationIds,
        chooseStartTime: this.queryparam.startDate,
        chooseEndTime: this.queryparam.endDate,
      }
      $emit(this, 'jump', {
        param: '任务编辑',
        path: '/index/ywTaskDisplay?obj=' + JSON.stringify(obj),
        isjump: true,
      })
    },

    handleUpload(index, row) {
      this.form.TaskNo = row.taskNo
      this.dialogVisible = true
    },

    //下发
    handleArrangement() {
      var self = this
      var ids = ''
      var tips = ''
      if (this.handleSelection == '') {
        self.$message({
          message: '请选择需要下发的数据！',
          type: 'warning', //success,warning,info,error
        })
        return
      }
      this.handleSelection.forEach((item, index) => {
        if (item.status != 1) {
          tips +=
            '选中第' +
            (index + 1) +
            '行不能下发,存在状态不为待下发的数据，请核对!'
        } else {
          if (index != self.handleSelection.length - 1) {
            ids += item.taskNo + ','
          } else {
            ids += item.taskNo
          }
        }
      })
      if (tips != '') {
        self.$message({
          message: tips,
          type: 'warning', //success,warning,info,error
        })
        return
      } else {
        this.$confirm('确认下发？')
          .then(function () {
            self.handlearrange(ids)
          })
          .catch(function () {})
      }
    },

    getTaskList(obj) {
      var self = this
      //判断开始时间和结束时间
      if (self.queryparam.startDate > self.queryparam.endDate) {
        self.$message({
          message: '查询开始时间不能大于查询结束时间!',
          type: 'warning',
        })
        return
      }
      var strStatus = ''
      if (self.queryparam.Status != null && self.queryparam.Status.length > 0) {
        for (var i = 0; i < self.queryparam.Status.length; i++) {
          if (i != self.queryparam.Status.length - 1) {
            strStatus += "'" + self.queryparam.Status[i] + "',"
          } else {
            strStatus += "'" + self.queryparam.Status[i] + "'"
          }
        }
      }
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_Task/GetTaskList?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&TaskNo=' +
          self.queryparam.TaskNo +
          '&TaskType=' +
          self.queryparam.TaskType +
          '&TaskCategoryId=' +
          self.queryparam.TaskCategoryId +
          '&Statuss=' +
          strStatus +
          '&startDate=' +
          self.queryparam.startDate +
          '&endDate=' +
          self.queryparam.endDate +
          '&SStations=' +
          self.queryparam.chooseStationIds +
          '&YJType=' +
          self.queryparam.YJType,
      })
        .then((res) => {
          if (res.status == 200) {
            self.list = res.data.data
            self.page.total = res.data.total
            self.options.loading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //格式化时间：yyyy-MM-dd HH:mm:ss
    filterDate(t, columnProp) {
      const date = new Date(t)
      const y = date.getFullYear()
      const M = (date.getMonth() + 1).toString().padStart(2, 0)
      const d = date.getDate().toString().padStart(2, 0)
      const h = date.getHours().toString().padStart(2, 0)
      const mm = date.getMinutes().toString().padStart(2, 0)
      const s = date.getSeconds().toString().padStart(2, 0)
      if (columnProp == 'planDealTime') {
        return y + '-' + M + '-' + d
      } else {
        return y + '-' + M + '-' + d + ' ' + h + ':' + mm + ':' + s
      }
    },

    //下载时间
    downLoadDate() {
      const date = new Date()
      const y = date.getFullYear()
      const M = (date.getMonth() + 1).toString().padStart(2, 0)
      const d = date.getDate().toString().padStart(2, 0)
      const h = date.getHours().toString().padStart(2, 0)
      const mm = date.getMinutes().toString().padStart(2, 0)
      const s = date.getSeconds().toString().padStart(2, 0)
      return y + M + +d + h + mm + s
    },

    //任务下发
    handlearrange(ids) {
      var self = this
      this.$http({
        method: 'GET',
        url: self.api + '/api/Yw_Task/YwTask_arrange?ids=' + ids,
      })
        .then((res) => {
          console.log(res)
          if (res.status == 200) {
            self.getTaskList()
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    formatterTime(row, column, cellValue) {
      var val = row[column.prop]
      if (val == null) {
        return val
      } else {
        return this.filterDate(val, column.prop)
      }
    },

    getParam() {
      debugger
      var self = this
      const data = self.getUrlKey('obj')
      if (JSON.parse(data) != null) {
        //拿到标识,标记是从任务统计跳转的，还是从任务编辑跳转过来的
        self.flag = JSON.parse(data).flag
        //任务类型[周月两月季年半年]
        if (JSON.parse(data).taskCategoryId != undefined) {
          self.queryparam.TaskCategoryId =
            JSON.parse(data).taskCategoryId.toString()
        }
        if (JSON.parse(data).sStations != undefined) {
          //站点
          var stationIds = JSON.parse(data).sStations
          stationIds.split(',').forEach((o) => {
            var objInfo = { sStation: o }
            self.CheckData.push(objInfo)
          })
          this.getSearchStations(self.CheckData)
        }
        //任务状态
        if (
          JSON.parse(data).taskStatus != undefined &&
          JSON.parse(data).taskStatus.toString() != ''
        ) {
          self.queryparam.Status = [JSON.parse(data).taskStatus.toString()]
        }
        //表示是从任务统计跳转过来--跳转到运维任务
        if (self.flag == 1) {
          self.choosedSearchMonth = JSON.parse(data).chooseMonth
          this.getDefaultTime(self.choosedSearchMonth)
        } else if (self.flag == 2) {
          if (JSON.parse(data).chooseStartTime != undefined) {
            self.queryparam.startDate = JSON.parse(data).chooseStartTime
          }
          if (JSON.parse(data).chooseEndTime != undefined) {
            self.queryparam.endDate = JSON.parse(data).chooseEndTime
          }
          if (JSON.parse(data).taskNo != '') {
            self.queryparam.TaskNo = JSON.parse(data).taskNo
          }
        }
      }
    },

    getUrlKey(name) {
      return (
        decodeURIComponent(
          (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(
            location.href
          ) || [, ''])[1].replace(/\+/g, '%20')
        ) || null
      )
    },

    //导出
    download(obj) {
      var self = this
      this.$http({
        method: 'GET',
        responseType: 'blob', // 表明返回服务器返回的数据类型
        url:
          this.api +
          '/api/Yw_Task/GetTaskListDownLoad?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&TaskNo=' +
          self.queryparam.TaskNo +
          '&TaskType=' +
          self.queryparam.TaskType +
          '&TaskCategoryId=' +
          self.queryparam.TaskCategoryId +
          '&Status=' +
          self.queryparam.Status +
          '&startDate=' +
          self.queryparam.startDate +
          '&endDate=' +
          self.queryparam.endDate +
          '&SStations=' +
          self.queryparam.chooseStationIds +
          '&YJType=' +
          self.queryparam.YJType,
      })
        .then((res) => {
          if (res.status == 200) {
            let blob = new Blob([res.data], {
              type: 'application/vnd.ms-excel',
            })
            let downTime = self.downLoadDate()
            const fileName = downTime + '-运维任务报告册.xls'
            const elink = document.createElement('a')
            elink.download = fileName
            elink.style.display = 'none'
            elink.href = URL.createObjectURL(blob)
            document.body.appendChild(elink)
            elink.click()
            URL.revokeObjectURL(elink.href) // 释放URL 对象
            document.body.removeChild(elink)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //数据同步
    asycData() {
      var self = this
      this.$http({
        method: 'GET',
        url: self.api + '/api/Yw_Task/AsycAirData',
      })
        .then((res) => {
          console.log(res)
          if (res.status == 200) {
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //生成运维任务
    proTask() {
      var self = this
      this.$http({
        method: 'GET',
        url: self.api + '/api/Yw_Task/ProTask',
      })
        .then((res) => {
          console.log(res)
          if (res.status == 200) {
            self.getTaskList()
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //生成运维任务
    toDoTask() {
      var self = this
      this.$http({
        method: 'GET',
        url: self.api + '/api/Yw_Task/ToDoTask',
      })
        .then((res) => {
          console.log(res)
          if (res.status == 200) {
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //任务截止时间显示和隐藏
    setActionStatus() {
      var self = this
      if (sessionStorage.getItem('roleType').toString() == '1') {
        self.searchTaskTimeShow = false
      }
    },
  },
  components: {
    treeSStation,
    rateTable,
    rateUpload,
    rateSelect,
  },
  created() {},
  mounted() {
    this.getParam()
    this.setActionStatus()
    this.getDefaultTime()
  },
  emits: ['jump'],
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
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
  height: 120px !important;
}
.el-form-item--mini.el-form-item,
.el-form-item--small.el-form-item {
  margin-bottom: 8px;
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
  height: calc(100vh - 356px);
}
</style>
