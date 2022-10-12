<template>
  <div id="v_deviceOnlineInfo">
    <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
      <el-aside width="250px">
        <treeSStation
          :IsCheckBox="true"
          @checkedNodes="getSearchStations"
        ></treeSStation>
      </el-aside>
      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="任务编号：">
                <el-input
                  v-model:value="queryparam.TaskNo"
                  placeholder="请输入编号"
                ></el-input>
              </el-form-item>
              <!--<el-form-item label="任务类型：">
                                  <el-select v-model='queryparam.TaskType'   placeholder='请选择任务类型' style="width: 100%;">
                                         <el-option v-for='(item, index) in this.TaskTypeOptions' :key='index' :label='item.label' :value='item.value'></el-option>
                                  </el-select>
                            </el-form-item>-->
              <el-form-item label="任务类别：" prop="TaskCategoryId">
                <rate-select
                  v-model:value="queryparam.TaskCategoryId"
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

              <!--<el-form-item label="任务状态：">
                                  <el-select v-model='queryparam.Status'   placeholder='请选择状态类型' style="width: 100%;">
                                         <el-option v-for='(item, index) in this.StatusOptions' :key='index' :label='item.label' :value='item.value'></el-option>
                                  </el-select>
                            </el-form-item>-->
              <el-form-item label="创建日期：">
                <el-date-picker
                  v-model:value="queryparam.StartDate"
                  type="date"
                  :clearable="true"
                  value-format="yyyy-MM-dd"
                  placeholder="请选择日期"
                >
                </el-date-picker>
                至
                <el-date-picker
                  v-model:value="queryparam.EndDate"
                  type="date"
                  :clearable="true"
                  value-format="yyyy-MM-dd"
                  placeholder="请选择日期"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item class="btn">
                <el-button
                  type="primary"
                  icon="el-icon-search"
                  v-has="'ywProviceInspectionTaskJudge_handleSearch'"
                  @click="getList()"
                  >查询</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="tools"></div>
        </el-header>

        <el-main>
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
        </el-main>
      </el-container>
    </el-container>

    <div>
      <el-dialog
        :title="digTitle"
        v-model:visible="dialogVisible"
        width="50%"
        :before-close="handleClose"
      >
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          size="mini"
        >
          <el-row>
            <el-col :span="24">
              <div>
                <el-form-item label="备注：" prop="reMark">
                  <el-input
                    v-model:value="ruleForm.reMark"
                    autocomplete="off"
                    type="textarea"
                    :rows="6"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="6">&nbsp;</el-col>
            <el-col :span="9">
              <div>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm', 1)"
                    >通过</el-button
                  >
                  <el-button type="primary" @click="submitForm('ruleForm', -1)"
                    >不通过</el-button
                  >
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
        v-model:visible="dialogVisibleview1"
        width="50%"
        :before-close="handleEditClose"
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
                <el-form-item label="状态名：" prop="stateName">
                  <el-input
                    v-model:value="ruleForm1.stateName"
                    autocomplete="off"
                    disabled
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="单位：" prop="stateUnit">
                  <el-input
                    v-model:value="ruleForm1.stateUnit"
                    autocomplete="off"
                    disabled
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="下限：" prop="after_lower_limit">
                  <el-input-number
                    v-model:value="ruleForm1.after_lower_limit"
                    :min="-100000"
                    :max="100000"
                    autocomplete="off"
                    style="width: 100%"
                  ></el-input-number>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="上限：" prop="after_upper_limit">
                  <el-input-number
                    v-model:value="ruleForm1.after_upper_limit"
                    :min="-100000"
                    :max="100000"
                    autocomplete="off"
                    style="width: 100%"
                  ></el-input-number>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="报警周期：" prop="after_critical_time">
                  <el-input-number
                    v-model:value="ruleForm1.after_critical_time"
                    :min="0"
                    :max="500000"
                    autocomplete="off"
                    style="width: 100%"
                  ></el-input-number>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="关键参数：" prop="after_state_key">
                  <el-select
                    v-model:value="ruleForm1.after_state_key"
                    placeholder="请选择是否关键参数"
                    style="width: 100%"
                  >
                    <el-option
                      v-for="(item, index) in StateKeyOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
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
                  <el-button type="primary" @click="submitEditForm('ruleForm1')"
                    >提交</el-button
                  >
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
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
import treeSStation from '../common/treeSStation'
import rateTable from '../common/rateTable' //引入table组件
import rateSelect from '../common/rateSelect'
import rateCascader from '../common/rateCascader' //引入rateCascader组件

export default {
  name: 'v_deviceOnlineInfo',
  data() {
    return {
      //任务类型下拉框
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

      StateKeyOptions: [
        {
          value: '0',
          label: '否',
        },
        {
          value: '1',
          label: '范围关键参数',
        },
        {
          value: '2',
          label: '固定关键参数',
        },
      ],

      TaskTypeOptions: [
        {
          value: '',
          label: '全部',
        },
        {
          value: '11',
          label: '市级检查',
        },
        {
          value: '12',
          label: '省级检查',
        },
        {
          value: '18',
          label: '其它检查',
        },
      ],

      StatusOptions: [
        {
          value: '',
          label: '全部',
        },
        {
          value: '1',
          label: '待领取',
        },
        {
          value: '2',
          label: '待处理',
        },
        {
          value: '3',
          label: '处理中',
        },
        {
          value: '6',
          label: '待审核',
        },
        {
          value: '7',
          label: '已完成',
        },
      ],

      usrId: '',
      digTitle: '',
      CheckData: [], // [{sStation:'SS4301051'},{sStation:'SS4301051'}]
      dialogVisible: false,
      dialogVisibleview1: false,

      rules: {},
      rules1: {},
      ruleForm: {
        reMark: '',
        id: '',
        status: '',
      },

      ruleForm1: {
        id: '',
        after_lower_limit: '',
        after_upper_limit: '',
        after_critical_time: '',
        stateName: '',
        stateUnit: '',
        after_state_key: '',
      },

      queryparam: {
        Status: '',
        TaskType: '12',
        TaskCategoryId: '',
        TaskNo: '',
        StartDate: '',
        EndDate: '',
        chooseStationIds: '',
      },

      listview: [], //详情页数据
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
        mutiSelect: true, // 是否支持列表项选中功能
      }, // table 的参数结束
      columns: [
        { prop: 'city', label: '下发城市', align: 'center', isShow: true },
        {
          prop: 'sStationName',
          label: '站点名称',
          width: 120,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_TaskType',
          label: '任务类型',
          width: 120,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'categoryName',
          label: '任务类别',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_IsPlan',
          label: '计划',
          width: 180,
          align: 'center',
          isShow: true,
        },
        { prop: 'title', label: '任务标题', align: 'center', isShow: true },
        { prop: 'taskNo', label: '任务编号', align: 'center', isShow: true },
        {
          prop: 'show_Status',
          label: '任务状态',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_GenModifyProblem',
          label: '省站是否确认',
          align: 'center',
          isShow: true,
        },
        { prop: 'unitName', label: '运维单位', align: 'center', isShow: true },
        {
          prop: 'dealerName',
          label: '检查人员',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'reviewerName',
          label: '确认人',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_DealTime',
          label: '检查时间',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_MaintainceWay',
          label: '检查方式',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_CreatedTime',
          label: '创建时间',
          align: 'center',
          isShow: true,
        },
        { prop: 'remark', label: '备注', align: 'center', isShow: true },
        {
          prop: 'show_PlanDealTime',
          label: '计划检查时间',
          align: 'center',
          isShow: true,
        },
      ], // 需要展示的列
      operates: {
        //操作栏
        width: 200,
        fixed: 'right',
        list: [
          {
            id: '1',
            label: '运维确认',
            bgColortype: 'success',
            show: true, //是否显示按钮
            className: 'success', //样式类名
            hasbutton: 'ywProviceInspectionTaskJudge_handleSure',
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              var self = this
              if (row.status == 7 || row.status == 8) {
                self.$message({
                  message: '已经提交了运维确认或者任务已经完成无法再次提交',
                  type: 'warning', //success,warning,info,error
                })
                return
              }
              this.handleOperate(index, row)
            },
          },
          {
            id: '2',
            label: '查看',
            bgColortype: 'success',
            show: true, //是否显示按钮
            className: 'success', //样式类名
            hasbutton: 'ywProviceInspectionTaskJudge_handleDetail',
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleView(index, row)
            },
          },
        ],
      }, // 列操作按钮
    } //return ending
  },
  methods: {
    getSearchStations(obj) {
      var self = this
      var configIds = ''
      if (obj != null) {
        obj.forEach((o) => {
          configIds += o.sStation + ','
        })
        self.queryparam.chooseStationIds = configIds
      }
    },

    //下拉框选择
    selectChangeTaskType(val) {
      var self = this
      self.queryparam.TaskCategoryId = val
    },

    //编辑，提交
    handleOperate(index, row) {
      //操作栏编辑按钮
      var self = this
      let obj = { taskNo: row.taskNo, type: '', fromTab: 'operate' }
      $emit(this, 'jump', {
        param: '省站检查任务窗口',
        path: '/index/ywProviceInspectionTaskShow?obj=' + JSON.stringify(obj),
        isjump: true,
      })
      //关闭当前tab
      $emit(this, 'closeCurrentPage', '省站任务整改') //调用closeCurrentPage方法注意；两点1：第二个参数必须是string，2：长度必须大于等于4
    },

    //查看
    handleView(index, row) {
      var self = this
      let obj = { taskNo: row.taskNo, type: 'view', fromTab: 'operate' }
      $emit(this, 'jump', {
        param: '省站检查任务窗口',
        path: '/index/ywProviceInspectionTaskShow?obj=' + JSON.stringify(obj),
        isjump: true,
      })
      //关闭当前tab
      $emit(this, 'closeCurrentPage', '省站任务整改') //调用closeCurrentPage方法注意；两点1：第二个参数必须是string，2：长度必须大于等于4
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

    //弹出窗关闭时的效果
    handleEditClose(done) {
      this.$confirm('确认关闭?')
        .then((_) => {
          done()
          this.resetForm('ruleForm1')
        })
        .catch((_) => {})
    },

    //编辑
    handleEdit(index, row) {
      var self = this
      self.ruleForm1.id = row.id
      self.digTitle = '修改'
      self.ruleForm1.stateName = row.stateName
      self.ruleForm1.stateUnit = row.stateUnit
      self.dialogVisibleview1 = true
      self.getEditInfo(row.id)
    },

    //获取编辑信息
    getEditInfo(id) {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_VarStatus/GetVarChangeInfoById?id=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm1.after_lower_limit = res.data.data.after_lower_limit
            self.ruleForm1.after_upper_limit = res.data.data.after_upper_limit
            self.ruleForm1.after_critical_time =
              res.data.data.after_critical_time
            self.ruleForm1.after_state_key =
              res.data.data.after_state_key.toString()
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //审核
    handleJudge(index, row) {
      //操作栏编辑按钮
      var self = this
      self.ruleForm.id = row.id
      self.digTitle = '审核'
      self.dialogVisible = true
    },

    //修改保存
    submitEditForm(formName) {
      var self = this
      const Qs = require('qs')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http({
            headers: {
              deviceCode: 'A95ZEF1-47B5-AC90BF3',
            },
            method: 'post',
            url: self.api + '/api/Yw_VarStatus/VarStatusSubmit',
            data: Qs.stringify(self.ruleForm1),
          })
            .then((res) => {
              console.log(res)
              if (res.status == 200) {
                self.dialogVisibleview1 = !self.dialogVisibleview1
                self.getList()
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

    //审核结果提交
    submitForm(formName, judgeId) {
      var self = this
      self.ruleForm.status = judgeId
      const Qs = require('qs')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http({
            headers: {
              deviceCode: 'A95ZEF1-47B5-AC90BF3',
            },
            method: 'post',
            url: self.api + '/api/Yw_VarStatus/JudgeStatusChange',
            data: Qs.stringify(self.ruleForm),
          })
            .then((res) => {
              console.log(res)
              if (res.status == 200) {
                self.dialogVisible = !self.dialogVisible
                self.getList()
                self.$message({
                  message: res.data.message,
                  type: res.data.type, //warning,success,info,error
                })
                self.resetForm('ruleForm')
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

    //重置框
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

    handleSelectionChange(val) {
      //checkbox选中的数据val 是选中行的所有数组
      this.handleSelection = val
    },
    getSizeChange(val) {
      //table组件发射的方法 用于改变每页数据量
      this.page.pageSize = val
      //这下面需要重新调用 获取列表页的函数
      this.getList()
    },
    getCurrentPage(val) {
      //table组件发射的方法  用于改变当前所在页码
      this.page.pageNo = val
      //这下面需要重新调用 获取列表页的函数
      this.getList()
    },

    //查询
    getList(obj) {
      var self = this
      //判断开始时间和结束时间
      if (self.queryparam.StartDate > self.queryparam.EndDate) {
        self.$message({
          message: '开始时间不能大于结束时间!',
          type: 'warning',
        })
        return
      }
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/FourthInspectionTask/GetInspectionTaskJudgeByPage?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&SStation=' +
          self.queryparam.chooseStationIds +
          ' &StartDate=' +
          self.queryparam.StartDate +
          '&EndDate=' +
          self.queryparam.EndDate +
          '&TaskType=' +
          self.queryparam.TaskType +
          ' &TaskNo=' +
          self.queryparam.TaskNo +
          '&TaskCategoryId=' +
          self.queryparam.TaskCategoryId +
          '&Status=' +
          self.queryparam.Status,
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
  },
  components: {
    treeSStation,
    rateTable,
    rateSelect,
    rateCascader,
  },
  created() {},
  mounted() {
    this.getList() //调用获取列表页的方法
  },
  emits: ['jump', 'closeCurrentPage'],
}
</script>

<style scoped>
#v_deviceOnlineInfo {
  color: black;
}
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
  height: 100px !important;
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
</style>
