<template>
  <div id="taskDisplay">
    <el-container style="height: calc(100vh - 150px); border: 1px solid #eee">
      <el-header></el-header>
      <el-main>
        <el-form
          :model="ruleForm"
          status-icon
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          size="mini"
          :rules="rules"
        >
          <!--按钮-->
          <div class="setAbsolute">
            <el-row>
              <el-col :span="6">
                <el-button
                  v-if="actionStatus.sava"
                  size="small"
                  class="el-button--iconButton"
                  v-has="'ywTask_handleAdd'"
                  style="text-overflow: initial"
                  @click="handleButton('ruleForm', '保存')"
                  >保存</el-button
                >
                <el-button
                  v-if="actionStatus.submit"
                  size="small"
                  class="el-button--iconButton"
                  v-has="'ywTask_handleAdd'"
                  style="text-overflow: initial"
                  @click="handleButton('ruleForm', '提交')"
                  >提交</el-button
                >
                <el-button
                  v-if="actionStatus.aduit"
                  size="small"
                  class="el-button--iconButton"
                  v-has="'ywTask_handleAdd'"
                  style="text-overflow: initial"
                  @click="handleJudge"
                  >审核</el-button
                >
                <el-button
                  size="small"
                  class="el-button--iconButton"
                  style="text-overflow: initial"
                  @click="handleReturn"
                  >返回</el-button
                >
              </el-col>
              <el-col :span="18"></el-col>
            </el-row>
          </div>

          <el-row>
            <el-col :span="24">
              <div>
                <rateAuditRecord
                  typeCode="003002"
                  :isSave="isSave"
                  :active="ruleForm.Status"
                  :businessType="31"
                  :businessId="ruleForm.PlanNo.toString()"
                  :auditerId="aduitForm.AuditerId"
                  :result="aduitForm.Result"
                  :reason="aduitForm.Reason"
                ></rateAuditRecord>
              </div>
            </el-col>
          </el-row>

          <div>
            <el-collapse v-model:value="activeNames" @change="handleChange">
              <el-collapse-item title="检查计划" name="1">
                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
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
                      <el-form-item label="运维单位：" prop="UnitId">
                        <rate-select
                          v-model:value="ruleForm.UnitId"
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
                      <el-form-item label="检查方式：" prop="PlanCatetory">
                        <el-select
                          v-model:value="ruleForm.PlanCatetory"
                          disabled
                          placeholder="请选择检查方式"
                          style="width: 100%"
                        >
                          <el-option
                            v-for="item in PlanCatetoryOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>

                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="计划状态：" prop="Status">
                        <el-select
                          v-model:value="ruleForm.Status"
                          disabled
                          placeholder="请选择计划状态"
                          style="width: 100%"
                        >
                          <el-option
                            v-for="item in StatusOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
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
                        <el-input
                          type="textarea"
                          v-model:value="ruleForm.Remark"
                          autocomplete="off"
                        ></el-input>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
              </el-collapse-item>

              <el-collapse-item title="检查计划详情" name="2">
                <el-row>
                  <div class="tools">
                    <el-button
                      size="small"
                      class="el-button--iconButton"
                      icon="el-icon-plus"
                      style="text-overflow: initial"
                      @click="handleTaskPlanDetialAdd"
                      >添加</el-button
                    >
                  </div>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <rate-table
                      :list="list"
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
          <el-dialog
            title="审核明细"
            v-model:visible="aduitFormDialogVisible"
            width="30%"
          >
            <el-form
              :model="aduitForm"
              status-icon
              ref="aduitForm"
              label-width="100px"
              class="demo-aduitForm"
              size="mini"
            >
              <el-row>
                <el-col :span="12">
                  <div>
                    <el-form-item label="审核结果：" prop="Result">
                      <el-radio-group v-model:value="aduitForm.Result">
                        <el-radio label="1">通过</el-radio>
                        <el-radio label="2">不通过</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div>
                    <el-form-item label="审核意见：" prop="Reason">
                      <el-input
                        type="textarea"
                        v-model:value="aduitForm.Reason"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6">&nbsp;</el-col>
                <el-col :span="10">
                  <div>
                    <el-form-item>
                      <el-button
                        type="primary"
                        @click="submitForm('aduitForm', '审核')"
                        >确定</el-button
                      >
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
            :title="digTitle"
            v-model:visible="dialogVisible"
            width="50%"
            :before-close="handleClose"
          >
            <el-form
              :model="ruleForm1"
              status-icon
              :rules="rules1"
              ref="ruleForm1"
              label-width="100px"
              class="demo-ruleForm"
              size="mini"
            >
              <el-row>
                <el-col :span="12">
                  <div>
                    <el-form-item label="计划类型：" prop="TaskCategoryId">
                      <rate-select
                        v-model:value="ruleForm1.TaskCategoryId"
                        :url="rateSelectTaskType.selectUrl"
                        :urlParams="rateSelectTaskType.urlParams"
                        :multiple="false"
                        placeholder="全部"
                        :optionKeys="rateSelectTaskType.optionKeys"
                        :showLabels="rateSelectTaskType.showLabels"
                        :disables="rateSelectTaskType.disables"
                        @change="selectChangeTaskType"
                      >
                      </rate-select>
                    </el-form-item>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div>
                    <el-form-item label="计划时间：" prop="PlanDealTime">
                      <el-date-picker
                        v-model:value="ruleForm1.PlanDealTime"
                        type="date"
                        :clearable="false"
                        value-format="yyyy-MM-dd"
                        placeholder="请选择日期"
                      >
                      </el-date-picker>
                    </el-form-item>
                  </div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="24">
                  <div>
                    <el-form-item label="备注：" prop="ItemRemark">
                      <el-input
                        type="textarea"
                        v-model:value="ruleForm1.ItemRemark"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                  </div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="9">&nbsp;</el-col>
                <el-col :span="6">
                  <div>
                    <el-form-item>
                      <el-button
                        type="primary"
                        @click="submitDetailForm('ruleForm1')"
                        >保存</el-button
                      >
                      <el-button @click="closeDig()">取消</el-button>
                    </el-form-item>
                  </div>
                </el-col>
                <el-col :span="9">&nbsp;</el-col>
              </el-row>
            </el-form>
          </el-dialog>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
import treeSStation from '../common/treeSStation' //引入treeSStation组件
import rateAuditRecord from '../common/rateAuditRecord'
import rateCascader from '../common/rateCascader' //引入rateCascader组件
import rateUpload from '../common/rateUpload' //引入rateCascader组件
import rateSelect from '../common/rateSelect'
import rateTable from '../common/rateTable' //引入rateTable组件

export default {
  name: 'taskDisplay',
  data() {
    return {
      //运维单位下拉框
      rateSelect: {
        model: '',
        selectUrl: this.api + '/api/Yw_Unit/GetAllUnit',
        urlParams: JSON.stringify({}),
        optionKeys: JSON.stringify({
          value: 'unitId',
          label: 'unitName',
        }),
        showLabels: 'unitName',
        disables: '',
      },

      //计划类型下拉框
      rateSelectTaskType: {
        model: '',
        selectUrl: this.api + '/api/InspectionPlan/GetTaskCategories',
        urlParams: JSON.stringify({}),
        optionKeys: JSON.stringify({
          value: 'value',
          label: 'text',
        }),
        showLabels: 'text',
        disables: '',
      },

      ruleForm: {
        PlanNo: '',
        SStation: '',
        SStationName: '',
        UnitId: '',
        UnitName: '',
        Remark: '',
        PlanCatetory: '2',
        Status: 1,
      },

      ruleForm1: {
        ItemId: '',
        TaskCategoryId: '',
        PlanDealTime: '',
        ItemRemark: '',
        PlanNo: '',
      },

      ruleFormJudge: {},

      rulesJudge: {},

      type: '',
      digTitle: '',
      fromTab: '',

      rules: {
        SStation: [
          { required: true, message: '请输入站点名称', trigger: 'blur' },
        ],
        City: [{ required: true, message: '请输入所属城市', trigger: 'blur' }],
        UnitId: [
          { required: true, message: '请输入运维单位', trigger: 'blur' },
        ],
      },

      rules1: {
        TaskCategoryId: [
          { required: true, message: '请选择计划类型', trigger: 'blur' },
        ],
        PlanDealTime: [
          { required: true, message: '请选择时间', trigger: 'blur' },
        ],
      },

      //计划状态
      StatusOptions: [
        {
          value: 1,
          label: '待提交',
        },
        {
          value: 2,
          label: '待初审',
        },
        {
          value: 4,
          label: '已生效',
        },
        {
          value: 10,
          label: '已作废',
        },
      ],

      //检查方式
      PlanCatetoryOptions: [
        {
          value: '1',
          label: '日常运维',
        },
        {
          value: '2',
          label: '现场检查',
        },
        {
          value: '5',
          label: '其他',
        },
      ],

      //按钮显示状态
      actionStatus: {
        sava: false,
        submit: false,
        aduit: false,
      },

      aduitForm: {
        BusinessId: '',
        AuditTime: '',
        Result: '1',
        Reason: '',
        Status: '',
        PlanNo: '',
      },

      activeNames: ['1', '2'],
      isSave: false, //是否需要插入审核记录表,true是，false否

      //运维单位
      rateSelect: {
        model: '',
        selectUrl: this.api + '/api/Yw_Unit/GetAllUnit',
        urlParams: JSON.stringify({}),
        optionKeys: JSON.stringify({
          value: 'unitId',
          label: 'unitName',
        }),
        showLabels: 'unitName',
        disables: '',
      },

      dialogVisible: false,
      aduitFormDialogVisible: false,
      view: '',
      //table
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
        loading: false, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: false, // 是否支持列表项选中功能
      }, // table 的参数结束
      columns: [
        { prop: 'itemId', label: 'id', align: 'center', isShow: false }, //formatter重构//return `返回参数`
        {
          prop: 'categoryName',
          label: '计划类型',
          align: 'center',
          isShow: true,
        }, //formatter重构//return `返回参数`
        {
          prop: 'show_PlanDealTime',
          label: '描述',
          align: 'center',
          isShow: true,
          width: 200,
        },
        { prop: 'itemRemark', label: '备注', align: 'center', isShow: true },
      ], // 需要展示的列
      operates: {
        //操作栏
        width: 200,
        fixed: 'right',
        list: [
          {
            id: '1',
            label: '编辑',
            bgColortype: 'success',
            show: true, //是否显示按钮
            className: 'success', //样式类名
            hasbutton: 'arrivalRecord_handleEdit', //按钮权限控制
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              var self = this
              if (self.type == 'view') {
                self.$message({
                  message: '查看状态下按钮不可用',
                  type: 'warning', //success,warning,info,error
                })
                return
              }
              if (self.ruleForm.Status >= 2) {
                self.$message({
                  message: '该计划已提交不能执行此操作！',
                  type: 'warning', //success,warning,info,error
                })
                return
              }
              this.handleTaskDetialEdit(index, row)
            },
          },
          {
            id: '2',
            label: '删除',
            show: true,
            bgColortype: 'danger',
            className: 'searchAll',
            disabled: false,
            method: (index, row) => {
              var self = this
              if (self.type == 'view') {
                self.$message({
                  message: '查看状态下按钮不可用',
                  type: 'warning', //success,warning,info,error
                })
                return
              }
              if (self.ruleForm.Status >= 2) {
                self.$message({
                  message: '该计划已提交不能执行此操作！',
                  type: 'warning', //success,warning,info,error
                })
                return
              }
              this.handleTaskDetialDel(index, row)
            },
          },
        ],
      }, // 列操作按钮
    }
  },
  methods: {
    //弹出审核窗体
    handleJudge() {
      var self = this
      self.aduitFormDialogVisible = true
      self.aduitForm.BusinessId = self.ruleForm.PlanNo
    },

    //删除计划详情
    handleTaskDetialDel(index, row) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api + '/api/InspectionPlan/DeleteTaskPlanItem?id=' + row.itemId,
      })
        .then((res) => {
          if (res.status == 200) {
            self.getTaskPlanDetailList(self.ruleForm.PlanNo)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //编辑计划详情弹出
    handleTaskDetialEdit(index, row) {
      var self = this
      self.GetTaskPlanDetailById(row.itemId)
      self.digTitle = '编辑计划详情'
      self.ruleForm1.ItemId = row.itemId
      self.dialogVisible = true
    },

    //获取编辑的回显信息
    GetTaskPlanDetailById(id) {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/InspectionPlan/GetTaskPlanItemById?id=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            //做回显
            self.ruleForm1.TaskCategoryId = res.data.data.taskCategoryId
            self.ruleForm1.ItemRemark = res.data.data.itemRemark
            self.ruleForm1.PlanDealTime = res.data.data.planDealTime
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //站点选择改变
    selectOptionEvent(val) {
      this.ruleForm.SStation = val
    },

    //table相关
    handleSelectionChange(val) {
      //checkbox选中的数据val 是选中行的所有数组
      this.handleSelection = val
    },

    getSizeChange(val) {
      //table组件发射的方法 用于改变每页数据量
      this.page.pageSize = val
      //这下面需要重新调用 获取列表页的函数
      this.getTaskPlanDetailList(this.ruleForm.PlanNo)
    },

    getCurrentPage(val) {
      //table组件发射的方法  用于改变当前所在页码
      this.page.pageNo = val
      //这下面需要重新调用 获取列表页的函数
      this.getTaskPlanDetailList(this.ruleForm.PlanNo)
    },

    handleChange(val) {
      console.log(val)
    },

    //运维单位改变值时
    selectChange(val, valObj) {
      var self = this
      if (valObj.unitId) {
        self.ruleForm.UnitId = val
        self.ruleForm.UnitName = valObj.unitName
      }
    },

    //计划类型改变值时
    selectChangeTaskType(val) {
      var self = this
      self.ruleForm1.TaskCategoryId = val
    },

    handleRemove(file, fileList) {
      console.log(file, fileList)
    },

    //相关按钮操作
    handleButton(formName, actionName) {
      var self = this
      //为了方便测试：运维人员固定为:易可可，id：501
      self.ruleForm.DealerName = '易可可'
      self.ruleForm.DealerId = 501
      this.submitForm(formName, actionName)
    },

    //返回
    handleReturn() {
      var self = this
      $emit(this, 'closeCurrentPage', '检查计划窗口') //调用closeCurrentPage方法注意；两点1：第二个参数必须是string，2：长度必须大于等于4
      if (self.fromTab == 'judge') {
        $emit(this, 'jump', {
          param: '检查计划审核',
          path: '/index/ywInspectionPlanJudge',
          isjump: true,
        })
      } else {
        $emit(this, 'jump', {
          param: '检查计划',
          path: '/index/ywInspectionPlan',
          isjump: true,
        })
      }
    },

    //提交检查计划详细
    submitDetailForm(formName) {
      const Qs = require('qs')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var self = this
          this.$http({
            headers: {
              deviceCode: 'A95ZEF1-47B5-AC90BF3',
            },
            method: 'post',
            url: self.api + '/api/InspectionPlan/CheckPlanItemSubmit',
            data: Qs.stringify(self.ruleForm1),
          })
            .then((res) => {
              if (res.status == 200) {
                self.dialogVisible = !self.dialogVisible
                self.getTaskPlanDetailList(self.ruleForm.PlanNo)
                self.$message({
                  message: res.data.message,
                  type: res.data.type, //warning,success,info,error
                })
                self.resetForm('ruleForm1')
              }
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          return false
        }
      })
    },

    //关闭添加弹出框
    closeDig() {
      var self = this
      self.dialogVisible = !self.dialogVisible
      self.resetForm('ruleForm')
    },

    //弹出窗关闭时的效果
    handleClose(done) {
      this.$confirm('确认关闭?')
        .then((_) => {
          done()
          this.resetForm('ruleForm')
        })
        .catch((_) => {})
    },

    //按钮事件
    submitForm(formName, actionName) {
      switch (actionName) {
        case '保存':
          this.isSave = true //添加一条检查计划以及审核记录插入一条
          this.$refs[formName].validate((valid) => {
            if (valid) {
              var self = this
              this.$http({
                headers: {
                  deviceCode: 'A95ZEF1-47B5-AC90BF3',
                },
                method: 'post',
                url: self.api + '/api/InspectionPlan/CheckPlanSave',
                data: self.Qs.stringify(self.ruleForm),
              })
                .then((res) => {
                  if (res.status == 200) {
                    self.$message({
                      message: res.data.message,
                      type: res.data.type,
                    })
                    //回传新的计划id用于 计划详情
                    self.ruleForm.PlanNo = res.data.planId
                  }
                })
                .catch((error) => {
                  console.log(error)
                })
            } else {
              return false
            }
          })
          break

        case '提交':
          this.isSave = true //新增一条审核记录
          this.$refs[formName].validate((valid) => {
            if (valid) {
              var self = this
              this.$http({
                headers: {
                  deviceCode: 'A95ZEF1-47B5-AC90BF3',
                },
                method: 'post',
                url: self.api + '/api/InspectionPlan/CheckPlanSubmit',
                data: self.Qs.stringify(self.ruleForm),
              })
                .then((res) => {
                  if (res.status == 200) {
                    self.$message({
                      message: res.data.message,
                      type: res.data.type, //warning,success,info,error
                    })
                    if (res.data.number != 100 && res.data.number > 0) {
                      this.handleReturn()
                    }
                  }
                })
                .catch((error) => {
                  console.log(error)
                })
            } else {
              return false
            }
          })
          break

        case '审核':
          this.isSave = true //新增一条审核记录
          var self = this
          this.$http({
            headers: {
              deviceCode: 'A95ZEF1-47B5-AC90BF3',
            },
            method: 'post',
            url: self.api + '/api/InspectionPlan/JudgeTaskPlan',
            data: self.Qs.stringify(self.aduitForm),
          })
            .then((res) => {
              if (res.status == 200) {
                self.aduitFormDialogVisible = false
                self.$message({
                  message: res.data.message,
                  type: res.data.type, //warning,success,info,error
                })
                this.handleReturn()
              }
            })
            .catch((error) => {
              console.log(error)
            })
          break
        default:
          break
      }
    },

    //重置框
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

    //检查计划查询回显
    getToFirst(planNo) {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/InspectionPlan/GetTaskPlanById?id=' + planNo,
      })
        .then((res) => {
          if (res.status == 200) {
            if (res.data.data != null) {
              self.ruleForm.PlanNo = res.data.data.planNo
              self.ruleForm.SStation = res.data.data.sStation
              self.ruleForm.UnitId = res.data.data.unitId.toString()
              self.ruleForm.Remark = res.data.data.remark
              self.ruleForm.PlanCatetory = res.data.data.planCatetory.toString()
              self.ruleForm.Status = res.data.data.status
            }
            self.setActionStatus() //设置按钮状态
            //如果是查看
            if (self.type == 'view') {
              self.actionStatus.sava = false
              self.actionStatus.submit = false
              self.actionStatus.aduit = false
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //获取参数
    getParam() {
      var self = this
      const data = self.getUrlKey('obj')
      if (data != null) {
        self.ruleForm.PlanNo = JSON.parse(data).planNo
        //按钮类型
        self.type = JSON.parse(data).type
        //来自哪个tab
        self.fromTab = JSON.parse(data).fromTab

        //编辑或者提交,查看
        if (JSON.parse(data).planNo != '') {
          //依据检查id回显
          self.getToFirst(JSON.parse(data).planNo)
          this.getTaskPlanDetailList(JSON.parse(data).planNo)
        } else {
          //新增
          this.ruleForm.Status = 1
          this.setActionStatus()
        }
      }
    },

    //获取运维计划详细信息
    getTaskPlanDetailList(planNo) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/InspectionPlan/GetTaskPlanItem?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&PlanNo=' +
          planNo,
      })
        .then((res) => {
          if (res.status == 200) {
            self.list = res.data.data
            self.page.total = res.data.total
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //添加检查计划详细
    handleTaskPlanDetialAdd() {
      var self = this
      self.ruleForm1.ItemId = ''
      self.ruleForm1.TaskCategoryId = ''
      self.ruleForm1.PlanDealTime = ''
      self.ruleForm1.ItemRemark = ''
      //如果是  查看
      if (self.type == 'view') {
        self.$message({
          message: '查看状态下按钮不可用',
          type: 'warning', //success,warning,info,error
        })
        return
      }
      //已经提交的计划无法
      if (self.ruleForm.Status >= 2) {
        self.$message({
          message: '该计划已提交不能执行此操作！',
          type: 'warning', //success,warning,info,error
        })
        return
      }
      //是否允许添加
      if (self.ruleForm.PlanNo == '') {
        self.$message({
          message: '请先保存检查计划后再添加计划详情！',
          type: 'warning', //success,warning,info,error
        })
        return
      }
      self.dialogVisible = true
      self.digTitle = '新增检查计划明细'
      self.ruleForm1.PlanNo = self.ruleForm.PlanNo
    },

    //地址解析
    getUrlKey(name) {
      return (
        decodeURIComponent(
          (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(
            location.href
          ) || [, ''])[1].replace(/\+/g, '%20')
        ) || null
      )
    },

    //根据状态设置按钮是否显示
    setActionStatus() {
      //save 保存   submit  提交  aduit  审核
      this.actionStatus.sava = this.ruleForm.Status <= 1 ? true : false
      this.actionStatus.submit = this.ruleForm.Status <= 1 ? true : false
      this.actionStatus.aduit = this.ruleForm.Status == 2 ? true : false
    },
  },
  components: {
    treeSStation,
    rateAuditRecord,
    rateCascader,
    rateUpload,
    rateSelect,
    rateTable,
  },
  created() {},
  mounted() {
    this.getParam()
  },
  emits: ['closeCurrentPage', 'jump'],
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
  position: absolute;
  width: 100%;
  z-index: 99;
}
.setHeight {
  margin-top: 20px;
}
.tools {
  height: 40px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  line-height: 35px;
  text-align: right;
  padding: 0px 5px;
}
</style>
