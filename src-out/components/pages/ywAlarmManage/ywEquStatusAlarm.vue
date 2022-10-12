<template>
  <div id="v_deviceOnlineInfo">
    <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
      <el-aside width="250px">
        <treeSStation :IsCheckBox="true" @checkedNodes="getList"></treeSStation>
      </el-aside>
      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="处理状态：">
                <el-select
                  v-model:value="queryparam.DealStatus"
                  placeholder="选择处理状态"
                >
                  <el-option
                    v-for="(item, index) in this.AlarmStatusOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="设备名称：">
                <el-input
                  v-model:value="queryparam.DevName"
                  placeholder="设备名称"
                ></el-input>
              </el-form-item>

              <el-form-item label="状态量">
                <el-input
                  v-model:value="queryparam.StateName"
                  placeholder="状态量"
                ></el-input>
              </el-form-item>

              <el-form-item label="报警类型：">
                <el-select
                  v-model:value="queryparam.AlarmType"
                  placeholder="选择报警类型"
                  style="width: 100%"
                >
                  <el-option
                    v-for="(item, index) in this.AlarmTypeOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="是否恢复：">
                <el-select
                  v-model:value="queryparam.Resumed"
                  placeholder="选择是否恢复"
                  style="width: 100%"
                >
                  <el-option
                    v-for="(item, index) in this.ResumedOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="报警日期：">
                <el-date-picker
                  v-model:value="queryparam.StartTime"
                  type="date"
                  :clearable="false"
                  value-format="yyyy-MM-dd"
                  placeholder="请选择日期"
                >
                </el-date-picker>
                至
                <el-date-picker
                  v-model:value="queryparam.EndTime"
                  type="date"
                  :clearable="false"
                  value-format="yyyy-MM-dd"
                  placeholder="请选择日期"
                >
                </el-date-picker>
              </el-form-item>

              <el-form-item class="btn">
                <el-button
                  type="primary"
                  icon="el-icon-search"
                  v-has="'equStatusAlarm_handleSearch'"
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
            <el-col :span="12">
              <div>
                <el-form-item label="处理结果：" prop="DealStatus">
                  <el-select
                    v-model:value="ruleForm.DealStatus"
                    placeholder="选择处理结果"
                  >
                    <el-option
                      v-for="(item, index) in this.AlarmDealOptions"
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
            <el-col :span="24">
              <div>
                <el-form-item label="处理情况：" prop="DealingRemark">
                  <el-input
                    v-model:value="ruleForm.DealingRemark"
                    autocomplete="off"
                    type="textarea"
                    :rows="6"
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
                  <el-button type="primary" @click="submitForm('ruleForm')"
                    >提交</el-button
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

    <div>
      <el-dialog
        :title="digTitle"
        v-model:visible="dialogVisibleview1"
        width="50%"
        :before-close="handleDetailClose"
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
                <el-form-item label="处理结果：" prop="DealStatus">
                  <el-select
                    v-model:value="ruleForm1.DealStatus"
                    disabled
                    placeholder="选择处理结果"
                  >
                    <el-option
                      v-for="(item, index) in this.AlarmDealOptions"
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
            <el-col :span="24">
              <div>
                <el-form-item label="处理情况：" prop="DealingRemark">
                  <el-input
                    v-model:value="ruleForm1.DealingRemark"
                    autocomplete="off"
                    type="textarea"
                    :rows="6"
                    :disabled="true"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import treeSStation from '../common/treeSStation'
import rateTable from '../common/rateTable' //引入table组件
import rateSelect from '../common/rateSelect'
import rateCascader from '../common/rateCascader' //引入rateCascader组件

export default {
  name: 'v_deviceOnlineInfo',
  data() {
    return {
      AlarmDealOptions: [
        {
          value: 0,
          label: '未处理',
        },
        {
          value: 1,
          label: '已处理',
        },
        {
          value: -1,
          label: '无效报警',
        },
      ],

      ruleForm: {
        DealStatus: 0,
        SStation: '',
        SDatetime: '',
        DevCode: '',
        ParamId: '',
        DealingRemark: '',
      },

      ruleForm1: {
        DealStatus: 0,
        DealingRemark: '',
      },

      rules: {},
      rules1: {},

      ResumedOptions: [
        {
          value: '-1',
          label: '全部',
        },
        {
          value: '0',
          label: '否',
        },
        {
          value: '1',
          label: '是',
        },
      ],

      AlarmStatusOptions: [
        {
          value: '-2',
          label: '全部',
        },
        {
          value: '0',
          label: '未处理',
        },
        {
          value: '1',
          label: '已处理',
        },
        {
          value: '-1',
          label: '无效报警',
        },
      ],

      AlarmTypeOptions: [
        {
          value: '-2',
          label: '全部',
        },
        {
          value: '-1',
          label: '超下限',
        },
        {
          value: '0',
          label: '正常',
        },
        {
          value: '1',
          label: '超上限',
        },
        {
          value: '3',
          label: '设备内部报警',
        },
      ],

      digTitle: '',
      CheckData: [], // [{sStation:'SS4301051'},{sStation:'SS4301051'}]
      dialogVisible: false,
      dialogVisibleview1: false,

      queryparam: {
        AlarmType: '-2',
        DealStatus: '-2',
        DevName: '',
        StateName: '',
        StartTime: '',
        EndTime: '',
        Resumed: '-1',
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
        loading: true, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: true, // 是否支持列表项选中功能
      }, // table 的参数结束
      columns: [
        {
          prop: 'show_DealStatus',
          label: '处理状态',
          width: 120,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'unitName',
          label: '运维单位',
          width: 120,
          align: 'center',
          isShow: true,
        },
        { prop: 'city', label: '城市', align: 'center', isShow: true },
        {
          prop: 'townName',
          label: '区县',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'sStationName',
          label: '站点名称',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_SDatetime',
          label: '报警时间',
          width: 120,
          align: 'center',
          isShow: true,
        },
        { prop: 'devCode', label: '设备编码', align: 'center', isShow: true },
        { prop: 'devName', label: '设备名称', align: 'center', isShow: true },
        { prop: 'stateName', label: '状态量', align: 'center', isShow: true },
        { prop: 'stateUnit', label: '单位', align: 'center', isShow: true },
        { prop: 'value', label: '值', align: 'center', isShow: true },
        { prop: 'upper_limit', label: '上限值', align: 'center', isShow: true },
        { prop: 'lower_limit', label: '下限值', align: 'center', isShow: true },
        {
          prop: 'show_AlarmType',
          label: '报警类型',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_Resumed',
          label: '是否恢复',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_ReSDatetime',
          label: '恢复时间',
          align: 'center',
          isShow: true,
        },
        { prop: 'reValue', label: '恢复时的值', align: 'center', isShow: true },
        {
          prop: 'reupper_limit',
          label: '恢复时的上限值',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'relower_limit',
          label: '恢复时的下限值',
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
            label: '处理',
            bgColortype: 'success',
            show: true, //是否显示按钮
            className: 'success', //样式类名
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleOperate(index, row)
            },
          },
          {
            id: '2',
            label: '详情',
            bgColortype: 'success',
            show: true, //是否显示按钮
            className: 'success', //样式类名
            hasbutton: 'equStatusAlarm_handleDetail',
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleDetail(index, row)
            },
          },
        ],
      }, // 列操作按钮
    } //return ending
  },

  methods: {
    //关闭弹出框
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

    //提交
    submitForm(formName) {
      const Qs = require('qs')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var self = this
          this.$http({
            headers: {
              deviceCode: 'A95ZEF1-47B5-AC90BF3',
            },
            method: 'post',
            url: self.api + '/api/AlarmRemind/StateAlarmSubmit',
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

    //处理
    handleOperate(index, row) {
      //操作栏处理按钮
      var self = this
      self.ruleForm.SStation = row.sStation
      self.ruleForm.SDatetime = row.sDatetime
      self.ruleForm.DevCode = row.devCode
      self.ruleForm.ParamId = row.paramId
      self.digTitle = '报警处理'
      self.dialogVisible = true
    },

    //查看详情
    handleDetail(index, row) {
      //操作栏详情按钮
      var self = this
      self.digTitle = '处理详情'
      this.getAlarmResultById(
        row.sStation,
        row.sDatetime,
        row.devCode,
        row.paramId
      )
      self.dialogVisibleview1 = true
    },

    //获取报警处理结果
    getAlarmResultById(stationId, sDatetime, devCode, paramId) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/AlarmRemind/GetAlarmResultByInfo?sstation=' +
          stationId +
          '&sDatetime=' +
          sDatetime +
          ' &devCode=' +
          devCode +
          '&paramId=' +
          paramId,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm1.DealStatus = res.data.data.dealStatus
            self.ruleForm1.DealingRemark = res.data.data.dealingRemark
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //重置框
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

    getNowTime() {
      var now = new Date()
      var year = now.getFullYear() //得到年份
      var month = now.getMonth() //得到月份
      var date = now.getDate() //得到日期
      month = month + 1
      month = month.toString().padStart(2, '0')
      date = date.toString().padStart(2, '0')
      var defaultDate = `${year}-${month}-${date}`
      this.queryparam['StartTime'] = defaultDate
      this.queryparam['EndTime'] = defaultDate
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
      var staionId = ''
      if (obj != null) {
        obj.forEach((o) => {
          staionId += o.sStation + ','
        })
      }

      //判断开始时间和结束时间
      if (self.queryparam.StartTime > self.queryparam.EndTime) {
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
          '/api/AlarmRemind/GetAllEquStatusMessage?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          ' &SStation=' +
          staionId +
          ' &StartDate=' +
          self.queryparam.StartTime +
          '&EndDate=' +
          self.queryparam.EndTime +
          ' &AlarmType=' +
          self.queryparam.AlarmType +
          ' &DevName=' +
          self.queryparam.DevName +
          ' &Resumed=' +
          self.queryparam.Resumed +
          ' &StateName=' +
          self.queryparam.StateName +
          ' &DealStatus=' +
          self.queryparam.DealStatus,
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
  },
  components: {
    treeSStation,
    rateTable,
    rateSelect,
    rateCascader,
  },
  created() {
    this.getNowTime() //调用获取列表页的方法
  },
  mounted() {
    this.getList() //调用获取列表页的方法
  },
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
.el-select {
  width: 100%;
}
</style>
