<template>
  <div id="v_InstrumentFaultRecord">
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
              <el-form-item label="设备厂家：">
                <el-input
                  v-model:value="queryparam.FacName"
                  placeholder="设备厂家"
                ></el-input>
              </el-form-item>
              <el-form-item label="故障时间：">
                <el-date-picker
                  type="datetime"
                  value-format="yyyy-MM-dd hh:mm:ss"
                  :clearable="true"
                  v-model:value="queryparam.StartTime"
                  placeholder="故障开始时间"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="-">
                <el-date-picker
                  type="datetime"
                  value-format="yyyy-MM-dd hh:mm:ss"
                  :clearable="true"
                  v-model:value="queryparam.EndTime"
                  placeholder="故障结束时间"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="设备名称:">
                <el-input
                  v-model:value="queryparam.DeviceName"
                  placeholder="设备名称"
                ></el-input>
              </el-form-item>

              <el-form-item class="btn">
                <el-button
                  type="primary"
                  icon="el-icon-search"
                  v-has="'function_handleSearch'"
                  @click="getList"
                  >查询</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="tools">
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-plus"
              v-has="'function_handleAdd'"
              style="text-overflow: initial"
              @click="handleAdd"
              >添加</el-button
            >
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-delete"
              v-has="'function_handleMultiplDel'"
              style="text-overflow: initial"
              @click="handleMultiplDel"
              >删除</el-button
            >
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-download"
              v-has="'usr_handleExport'"
              style="text-overflow: initial"
              @click="download()"
              >导出</el-button
            >
          </div>
        </el-header>

        <el-main>
          <rate-table
            :list="list"
            :tableClass="InstrumentFaultRecordTB"
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

        <el-footer v-if="false" class="footer">
          <div class="charts">
            <echarts-template :chartData="optionZ"></echarts-template>
          </div>
          <div class="charts">
            <echarts-template :chartData="optionB"></echarts-template>
          </div>
        </el-footer>
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
                <el-form-item label="站点：" prop="SStation">
                  <rateCascader
                    :selectOption="ruleForm.SStation"
                    @selectOptionEvent="selectOptionEvent"
                  ></rateCascader>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="设备厂家：" prop="FacId">
                  <el-select
                    v-model:value="ruleForm.FacId"
                    placeholder="设备厂家"
                    @change="change1"
                  >
                    <el-option
                      v-for="item in iconList"
                      :key="item.facId"
                      :label="item.facName"
                      :value="item.facId"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="设备名称：" prop="DeviceId">
                  <el-select
                    v-model:value="ruleForm.DeviceId"
                    placeholder="设备名称"
                    @change="change2"
                  >
                    <el-option
                      v-for="item in iconList2"
                      :key="item.id"
                      :label="item.deviceName"
                      :value="item.id"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="开始时间" prop="StartTime">
                  <el-date-picker
                    v-model:value="ruleForm.StartTime"
                    type="datetime"
                    :clearable="true"
                    placeholder="选择开始时间"
                    align="right"
                  ></el-date-picker>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="结束时间" prop="EndTime">
                  <el-date-picker
                    v-model:value="ruleForm.EndTime"
                    type="datetime"
                    :clearable="true"
                    placeholder="选择结束时间"
                    align="right"
                  ></el-date-picker>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="故障现象：" prop="FailurePhenomenon">
                  <el-input
                    type="textarea"
                    :rows="6"
                    v-model:value="ruleForm.FailurePhenomenon"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="解决方法：" prop="Resolvent">
                  <el-input
                    type="textarea"
                    :rows="6"
                    v-model:value="ruleForm.Resolvent"
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
  </div>
</template>

<script>
import treeSStation from '../common/treeSStation' //引入treeSStation组件
import rateTable from '../common/rateTable' //引入table组件
import rateCascader from '../common/rateCascader' //引入rateCascader组件
import echartsTemplate from '../common/echartsTemplate' //rateEcharts组件

export default {
  name: 'v_deviceOnlineInfo',
  data() {
    return {
      InstrumentFaultRecordTB: 'InstrumentFaultRecordTB',
      selectFacId: '',
      digTitle: '',
      iconList: [],
      iconList2: [],
      dialogVisible: false,
      titleName: '',
      //弹出窗相关变量定义
      ruleForm: {
        Id: '',
        SStation: '',
        FacId: '',
        DeviceId: '',
        StartTime: '',
        EndTime: '',
        FailureReason: '',
        FailurePhenomenon: '',
        Resolvent: '',
      },

      rules: {
        SStation: [{ required: true, message: '请选择站点', trigger: 'blur' }],
        FacId: [{ required: true, message: '请输入厂家', trigger: 'blur' }],
        DeviceId: [{ required: true, message: '请选择设备', trigger: 'blur' }],
        StartTime: [
          { required: true, message: '请输入开始时间', trigger: 'blur' },
        ],
        EndTime: [
          { required: true, message: '请选择结束时间', trigger: 'blur' },
        ],
        FailureReason: [
          { required: false, message: '请输入故障现象', trigger: 'blur' },
        ],
        FailurePhenomenon: [
          { required: true, message: '请输入故障现象', trigger: 'blur' },
        ],
        Resolvent: [
          { required: true, message: '请输入解决方法', trigger: 'blur' },
        ],
      },
      queryparam: {
        FacName: '',
        StartTime: '',
        EndTime: '',
        DeviceName: '',
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
      listAll: [], //echart数据
      options: {
        // table样式参数
        stripe: true, // 是否为斑马纹 table
        loading: true, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: true, // 是否支持列表项选中功能
      }, // table 的参数结束
      columns: [
        { prop: 'id', label: '编号', align: 'center', isShow: false },
        {
          prop: 'sStationName',
          label: '站点名称',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'deviceName',
          label: '设备型号',
          align: 'center',
          isShow: true,
        },
        { prop: 'facName', label: '设备厂家', align: 'center', isShow: true },
        {
          prop: 'failurePhenomenon',
          label: '故障现象',
          width: 200,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'resolvent',
          label: '解决办法',
          width: 200,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_StartTime',
          label: '故障开始时间',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_EndTime',
          label: '故障结束时间',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_FailureHour',
          label: '故障时长（小时）',
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
            label: '编辑',
            bgColortype: 'success',
            show: true, //是否显示按钮
            hasbutton: 'function_handleEdit',
            className: 'success', //样式类名
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleEdit(index, row)
            },
          },
        ],
      }, // 列操作按钮
      optionZ: {}, //柱状图数据
      optionB: {}, //饼状图数据
    } //return ending
  },
  watch: {
    selectFacId(oldVal, newVal) {
      if (this.selectFacId) {
        var Enumerable = require('linq')
        this.iconList2 = Enumerable.from(this.iconList)
          .where((p) => p.facId == this.selectFacId)
          .toArray()
      }
    },
  },
  methods: {
    selectOptionEvent(val) {
      this.ruleForm.SStation = val
      this.getAllIcons(val)
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

    change(val) {
      this.ruleForm.fun_icon = val
    },
    //删除
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
          ids += item.id + ','
        } else {
          ids += item.id
        }
      })
      this.$confirm('确认删除？')
        .then(function () {
          self.handlemultipl(ids)
        })
        .catch(function () {})
    },

    handlemultipl(ids) {
      var self = this
      this.$http({
        method: 'GET',
        url: self.api + '/api/MM_EquipmentFaultData/DeleteFun?Id=' + ids,
      })
        .then((res) => {
          if (res.status == 200) {
            self.getList()
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

    //页面提交(保存或者修改)
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
            url: self.api + '/api/MM_EquipmentFaultData/UsrChangeLogSubmit',
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

    //关闭弹出框
    closeDig() {
      var self = this
      self.dialogVisible = !self.dialogVisible
      self.resetForm('ruleForm')
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

    //添加
    handleAdd() {
      var self = this
      if (self.ruleForm.Id != '') {
        self.resetForm('ruleForm') //重置表单
      }
      self.ruleForm.Id = ''
      self.digTitle = '添加'
      // self.getAllIcons();
      self.dialogVisible = true
    },

    //编辑
    handleEdit(index, row) {
      //操作栏编辑按钮
      var self = this
      self.getAllIcons(self.ruleForm.SStation)
      self.getFunInfoById(row.id)
      self.digTitle = '编辑'
      self.dialogVisible = true
    },
    //获取所有设备厂家
    getAllIcons(SStation) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/MM_EquipmentFaultData/GetDeviceBySStation?facId=0&SStation=' +
          SStation,
      })
        .then((res) => {
          if (res.status == 200) {
            self.iconList = res.data.data
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    change1(val) {
      this.ruleForm.FacId = val
      var Enumerable = require('linq')
      this.iconList2 = Enumerable.from(this.iconList)
        .where((p) => p.facId == val)
        .toArray()
    },
    change2(val) {
      this.ruleForm.DeviceId = val
    },
    //查询
    getList(obj) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/MM_EquipmentFaultData/GetUsrChangeLogList?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&FacName=' +
          self.queryparam.FacName +
          '&StartTime=' +
          self.queryparam.StartTime +
          '&EndTime=' +
          self.queryparam.EndTime +
          '&DeviceName=' +
          self.queryparam.DeviceName +
          '&SStations=' +
          self.queryparam.chooseStationIds,
      })
        .then((res) => {
          if (res.status == 200) {
            self.list = res.data.data
            self.listAll = res.data.listAll
            self.page.total = res.data.total
            self.initChartData()
          }
          self.options.loading = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    //依据按钮id获取信息
    getFunInfoById(id) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api + '/api/MM_EquipmentFaultData/GetUsrChangeLogById?Id=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.Id = res.data.data.id
            self.ruleForm.SStation = res.data.data.sStation
            self.ruleForm.FacId = res.data.data.facId
            self.selectFacId = res.data.data.facId
            self.ruleForm.DeviceId = res.data.data.deviceId
            self.ruleForm.StartTime = res.data.data.startTime
            self.ruleForm.EndTime = res.data.data.endTime
            self.ruleForm.FailureReason = res.data.data.failureReason
            self.ruleForm.FailurePhenomenon = res.data.data.failurePhenomenon
            self.ruleForm.Resolvent = res.data.data.resolvent
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
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
    initChartData() {
      var self = this
      var Enumerable = require('linq')
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/MM_EquipmentFaultData/GetGroupData?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&FacName=' +
          self.queryparam.FacName +
          '&StartTime=' +
          self.queryparam.StartTime +
          '&EndTime=' +
          self.queryparam.EndTime +
          '&DeviceName=' +
          self.queryparam.DeviceName +
          '&SStations=' +
          self.queryparam.chooseStationIds,
      })
        .then((res) => {
          if (res.status == 200) {
            var a = res.data.listAll
            var arr = []
            var arr2 = []
            var arr1 = []
            for (var i = 0; i < a.length; i++) {
              if (a[i].typeName != null) {
                arr.push(a[i].typeName)
                arr2.push(parseInt(a[i].toal))

                arr1.push({ value: parseInt(a[i].toal), name: a[i].typeName })
              }
            }
            this.optionZ = {
              xAxis: {
                type: 'category',
                data: arr,
                axisLabel: {
                  rotate: 60,
                },
              },
              legend: {
                orient: 'vertical',
                left: 'center',
                data: arr,
              },
              yAxis: {
                type: 'value',
              },
              series: [
                {
                  data: arr2,
                  type: 'bar',
                  showBackground: true,
                  backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)',
                  },
                },
              ],
            }
            this.optionB = {
              title: {
                text: '故障来源占比',
                left: 'center',
              },
              tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
              },
              legend: {
                orient: 'vertical',
                left: 'left',
                data: arr,
              },
              series: [
                {
                  name: '故障来源',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '60%'],
                  data: arr1,
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
                  },
                },
              ],
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
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

    //导出
    download(obj) {
      var self = this
      this.$http({
        method: 'GET',
        responseType: 'blob', // 表明返回服务器返回的数据类型
        url:
          this.api +
          '/api/MM_EquipmentFaultData/GetUsrListDownLoad?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&FacName=' +
          self.queryparam.FacName +
          '&StartTime=' +
          self.queryparam.StartTime +
          '&EndTime=' +
          self.queryparam.EndTime +
          '&DeviceName=' +
          self.queryparam.DeviceName +
          '&SStations=' +
          self.queryparam.chooseStationIds,
      })
        .then((res) => {
          if (res.status == 200) {
            let blob = new Blob([res.data], {
              type: 'application/vnd.ms-excel',
            })
            let downTime = self.downLoadDate()
            const fileName = downTime + '-仪器故障记录.xls'
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
  },
  components: {
    rateTable,
    rateCascader,
    treeSStation,
    echartsTemplate,
  },
  created() {
    //调用获取列表页的方法
  },
  mounted() {
    this.getList() //调用获取列表页的方法
    //this.initChartData();
    this.getAllIcons(this.ruleForm.SStation)
  },
}
</script>

<style scoped>
#v_deviceOnlineInfo {
  color: red;
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
.footer {
  position: absolute;
  bottom: 240px;
  width: 100%;
}
.el-select {
  width: 100%;
}
.charts {
  width: 50%;
  float: left;
}
</style>
