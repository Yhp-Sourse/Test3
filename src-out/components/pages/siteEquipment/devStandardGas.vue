<template>
  <div id="v_deviceSparePartInfo">
    <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
      <!-- <el-aside width="250px">
          <treeSStation @checkedNodes="getList"></treeSStation>
        </el-aside> -->
      <el-container>
        <el-header>
          <div class="search">
            <el-form
              :inline="true"
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
              size="mini"
            >
              <el-form-item
                label="标气品种："
                label-width="100px"
                prop="variety"
              >
                <el-select
                  clearable
                  v-model:value="queryparam.variety"
                  placeholder="请选择"
                  style="width: 100%"
                >
                  <el-option
                    v-for="(item, index) in SixParams"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <!-- <el-input v-model="ruleForm.variety" autocomplete="off"></el-input> -->
              </el-form-item>
              <el-form-item label="城市：" label-width="100px">
                <el-select
                  clearable
                  v-model:value="queryparam.city"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="(item, index) in Citys"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="生产单位:" label-width="100px">
                <el-select
                  style="width: 100%"
                  clearable
                  v-model:value="queryparam.production"
                  placeholder="请选择"
                >
                  <el-option
                    label="中国计量科学研究院"
                    value="中国计量科学研究院"
                  ></el-option>
                  <el-option
                    label="生态环境部环境发展中心环境标准样品研究所"
                    value="生态环境部环境发展中心环境标准样品研究所"
                  ></el-option>
                </el-select>
                <!-- <el-input v-model="ruleForm.production" autocomplete="off"></el-input> -->
              </el-form-item>
              <el-form-item label="有效期至:" label-width="100px">
                <el-date-picker
                  style="width: 100%"
                  v-model:value="queryparam.end"
                  type="date"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  placeholder="结束日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item class="btn">
                <el-button
                  type="primary"
                  icon="el-icon-search"
                  v-has="'devStandardGas_handleSearch'"
                  @click="getList()"
                  >查询</el-button
                >
                <el-button
                  type="primary"
                  icon="el-icon-download"
                  v-has="'devStandardGas_handleExport'"
                  @click="downloadBeiJi()"
                  >导出</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="tools">
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-plus"
              v-has="'devStandardGas_handleAdd'"
              style="text-overflow: initial"
              @click="handleAdd"
              >添加</el-button
            >
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-unlock"
              v-has="'ywTask_handleUnlock'"
              style="text-overflow: initial"
              @click="handleBatchJS"
              >解锁</el-button
            >
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-lock"
              v-has="'ywTask_handlelock'"
              style="text-overflow: initial"
              @click="handleBatchSuoD"
              >锁定</el-button
            >
          </div>
        </el-header>
        <el-main>
          <rate-table
            :list="list"
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
      <el-dialog title="标准气体" v-model:visible="dialogVisible" width="60%">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          size="mini"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item label="城市：" label-width="120px" prop="city">
                <el-select
                  v-model:value="ruleForm.city"
                  placeholder="请选择"
                  style="width: 100%"
                >
                  <el-option
                    v-for="(item, index) in Citys"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <!-- <el-input v-model="ruleForm.city" autocomplete="off"></el-input> -->
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                label="站点名称："
                label-width="120px"
                prop="SStationName"
              >
                <rateCascader
                  :selectOption="ruleForm.SStationName"
                  @selectOptionEvent="selectOptionEvent"
                ></rateCascader>
                <!-- <el-input v-model="ruleForm.SStationName" autocomplete="off"></el-input> -->
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item
                label="标气品种："
                label-width="120px"
                prop="variety"
              >
                <el-select
                  v-model:value="ruleForm.variety"
                  placeholder="请选择"
                  style="width: 100%"
                >
                  <el-option
                    v-for="(item, index) in SixParams"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <!-- <el-input v-model="ruleForm.variety" autocomplete="off"></el-input> -->
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                label="生产单位:"
                label-width="120px"
                prop="production"
              >
                <el-select
                  style="width: 100%"
                  v-model:value="ruleForm.production"
                  placeholder="请选择学历"
                >
                  <el-option
                    label="中国计量科学研究院"
                    value="中国计量科学研究院"
                  ></el-option>
                  <el-option
                    label="生态环境部环境发展中心环境标准样品研究所"
                    value="生态环境部环境发展中心环境标准样品研究所"
                  ></el-option>
                </el-select>
                <!-- <el-input v-model="ruleForm.production" autocomplete="off"></el-input> -->
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item
                label="样品编号:"
                label-width="120px"
                prop="sampleId"
              >
                <el-input
                  v-model:value="ruleForm.sampleId"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                label="运维人员："
                label-width="120px"
                prop="ywPerson"
              >
                <el-input
                  v-model:value="ruleForm.ywPerson"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="定值日期:" label-width="120px" prop="dzDate">
                <el-date-picker
                  style="width: 100%"
                  type="date"
                  @change="change1"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model:value="ruleForm.dzDate"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                label="保值时间(月):"
                label-width="120px"
                prop="bzdate"
              >
                <el-input
                  v-model:value="ruleForm.bzdate"
                  @change="change2"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12"
              ><p v-show="false">{{ validDate }}</p>
              <el-form-item
                label="有效期至:"
                label-width="120px"
                prop="validDate"
              >
                <el-date-picker
                  style="width: 100%"
                  v-model:value="ruleForm.validDate"
                  type="date"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12"
              ><p v-show="false">{{ nextChangeDays }}</p>
              <el-form-item
                label="下次更换时间(天)："
                label-width="140px"
                prop="nextChangeDays"
              >
                <el-input
                  v-model:value="ruleForm.nextChangeDays"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item
                label="出产单位电话："
                label-width="120px"
                prop="productionPhone"
              >
                <el-input
                  v-model:value="ruleForm.productionPhone"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                label="出产单位地址："
                label-width="120px"
                prop="productionAddress"
              >
                <el-input
                  v-model:value="ruleForm.productionAddress"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item
                label="项目名称："
                label-width="120px"
                prop="projectName"
              >
                <el-input
                  v-model:value="ruleForm.projectName"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                v-show="true"
                label="资质证书："
                label-width="120px"
                prop="certificate"
              >
                <rateUpload
                  :limit="1"
                  :Ismultiple="false"
                  :BusinessId="ruleForm.Id"
                  :BusinessType="19"
                  @uploadSuccess="uploadSuccess"
                ></rateUpload>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import treeSStation from '../common/treeSStation'
import rateTable from '../common/rateTable' //引入table组件
import rateCascader from '../common/rateCascader' //引入rateCascader组件
import rateUpload from '../common/rateUpload' //引入rateCascader组件
export default {
  name: 'v_deviceSparePartInfo',
  data() {
    return {
      check: {
        Results: 1,
        Reasons: '',
        Id: '',
      },
      Citys: [
        {
          value: '武汉',
          label: '武汉',
        },
        {
          value: '黄石',
          label: '黄石',
        },
        {
          value: '十堰',
          label: '十堰',
        },
        {
          value: '宜昌',
          label: '宜昌',
        },
        {
          value: '襄阳',
          label: '襄阳',
        },
        {
          value: '鄂州',
          label: '鄂州',
        },
        {
          value: '荆门',
          label: '荆门',
        },
        {
          value: '孝感',
          label: '孝感',
        },
        {
          value: '荆州',
          label: '荆州',
        },
        {
          value: '黄冈',
          label: '黄冈',
        },
        {
          value: '咸宁',
          label: '咸宁',
        },
        {
          value: '随州',
          label: '随州',
        },
        {
          value: '恩施',
          label: '恩施',
        },
        {
          value: '仙桃',
          label: '仙桃',
        },
        {
          value: '潜江',
          label: '潜江',
        },
        {
          value: '天门',
          label: '天门',
        },
        {
          value: '神农架',
          label: '神农架',
        },
      ],
      SixParams: [
        {
          value: 'SO2',
          label: 'SO2',
        },
        {
          value: 'NOx',
          label: 'NOx',
        },
        {
          value: 'CO',
          label: 'CO',
        },
        {
          value: 'O3',
          label: 'O3',
        },
        {
          value: 'PM2.5',
          label: 'PM2.5',
        },
        {
          value: 'PM10',
          label: 'PM10',
        },
        {
          value: 'PM2.5，PM10',
          label: 'PM10-2.5',
        },
        {
          value: 'QX',
          label: 'QX',
        },
        {
          value: '其他',
          label: '其他',
        },
      ],
      dialogVisibleCheck: false,
      dialogVisible: false,
      ruleForm: {
        id: '',
        city: '',
        town: '',
        SStationName: '',
        SStationType: '',
        variety: '',
        production: '',
        sampleId: '',
        certificate: '',
        dzDate: '',
        bzdate: '',
        validDate: '',
        nextChangeDays: '',
        productionPhone: '',
        productionAddress: '',
        projectName: '',
        ywPerson: '',
        FileUrl: '',
      },
      rules: {},
      queryparam: {
        variety: '',
        start: '',
        end: '',
        city: '',
        production: '',
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
          prop: 'islock',
          label: '是否锁定',
          align: 'center',
          isShow: true,
          width: 80,
          formatter: this.islock,
        },
        {
          prop: 'city',
          label: '城市',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'townName',
          label: '县域',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'stn',
          label: '站点名称',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_stnType',
          label: '站点类型',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'variety',
          label: '标气品种',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'production',
          label: '生产单位',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'sampleId',
          label: '样品编号',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'certificate',
          label: '资质证书',
          width: 200,
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            if (row.certificate != null) {
              return '<a style="color:blue;">' + row.certificate + '</a>'
            }
          },
        },
        {
          prop: 'show_dzDate',
          label: '定值日期',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'bzdate',
          label: '保值时间(月)',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_validDate',
          label: '有效期至',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_nextChangeDays',
          label: '下次更换时间(天)',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'productionPhone',
          label: '出产单位电话',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'productionAddress',
          label: '出产单位地址',
          width: 280,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'projectName',
          label: '项目名称',
          width: 280,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'ywPerson',
          label: '运维人员',
          width: 180,
          align: 'center',
          isShow: true,
        },
      ], // 需要展示的列
      operates: {
        //操作栏
        width: 250,
        fixed: 'right',
        list: [
          {
            id: '1',
            label: '编辑',
            bgColortype: 'success',
            show: true, //是否显示按钮
            className: 'success', //样式类名
            hasbutton: 'devStandardGas_handleEdit',
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              if (row.islock == 1) {
                //锁定
                this.$message({
                  type: 'warning',
                  dangerouslyUseHTMLString: true,
                  message: '请先联系管理员解锁！',
                })
                return false
              }
              this.handleEdit(index, row)
            },
          },
          {
            id: '2',
            label: '删除',
            show: true,
            bgColortype: 'danger',
            className: 'searchAll',
            hasbutton: 'devStandardGas_handleMultiplDel',
            disabled: false,
            method: (index, row) => {
              if (row.islock == 1) {
                //锁定
                this.$message({
                  type: 'warning',
                  dangerouslyUseHTMLString: true,
                  message: '请先联系管理员解锁！',
                })
                return false
              }
              this.handledel(index, row)
            },
          },
        ],
      }, // 列操作按钮
    } //return ending
  },
  // computed: {
  //   validDate() {
  //     if(this.ruleForm.dzDate!="" && this.ruleForm.bzdate!=""){
  //       var zhi=this.AddMouth(this.ruleForm.dzDate,this.ruleForm.bzdate);
  //       this.ruleForm.validDate=zhi;
  //     }
  //     return zhi;
  //   },
  //   nextChangeDays() {
  //     if(this.ruleForm.validDate!=""){
  //       var zhi=this.GetNumberOfDays(new Date(),this.ruleForm.validDate);
  //       this.ruleForm.nextChangeDays=zhi;
  //     }
  //     return zhi;
  //   }
  // },
  methods: {
    GetNumberOfDays(date1, date2) {
      //获得天数
      debugger
      //date1：开始日期，date2结束日期
      var a1 = Date.parse(new Date(date1))
      var a2 = Date.parse(new Date(date2))
      var day = parseInt((a2 - a1) / (1000 * 60 * 60 * 24)) //核心：时间戳相减，然后除以天数
      return day
    },
    AddMouth(date, num) {
      debugger
      //date为格式化后的日期字符yyyy-MM-dd,num为增加的月份
      var monthnum = parseInt(num)
      var year = parseInt(date.substring(0, 4))
      var month = parseInt(date.substring(5, 7))
      var day = parseInt(date.substring(8, 10))
      if (month + monthnum > 12) {
        var newyear = year + 1
        var newmonth = month + monthnum - 12
        var newday = day
      } else {
        var newyear = year
        var newmonth = month + monthnum
        var newday = day
      }
      var newdate = newyear + '-' + newmonth + '-' + newday
      return newdate
    },
    change1(value) {
      if (this.ruleForm.dzDate != '' && this.ruleForm.bzdate != '') {
        this.ruleForm.validDate = this.AddMouth(
          this.ruleForm.dzDate,
          this.ruleForm.bzdate
        )
        this.ruleForm.nextChangeDays = this.GetNumberOfDays(
          new Date(),
          this.ruleForm.validDate
        )
      }
    },
    change2(value) {
      if (this.ruleForm.dzDate != '' && this.ruleForm.bzdate != '') {
        this.ruleForm.validDate = this.AddMouth(
          this.ruleForm.dzDate,
          this.ruleForm.bzdate
        )
        this.ruleForm.nextChangeDays = this.GetNumberOfDays(
          new Date(),
          this.ruleForm.validDate
        )
      }
    },
    downLoad(imgUrl) {
      var codeIMG1 = '' + imgUrl + ''
      var a = document.createElement('a')
      var event = new MouseEvent('click') // 创建一个单击事件
      a.download = name || 'pic'
      // 设置图片地址
      a.href = codeIMG1
      // a.click();
      a.dispatchEvent(event)
    },
    saveForm(formName) {
      const Qs = require('qs')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var self = this
          this.$http({
            headers: {
              deviceCode: 'A95ZEF1-47B5-AC90BF3',
            },
            method: 'post',
            url:
              self.api +
              '/api/Yw_DeviceSparePartInfo/DeviceSparePartInfo_AreaLeadersCheck',
            data: Qs.stringify(self.check),
          })
            .then((res) => {
              console.log(res)
              if (res.status == 200) {
                self.dialogVisibleCheck = !self.dialogVisibleCheck
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
        } else {
          return false
        }
      })
    },
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
            url: self.api + '/api/Yw_DeviceSparePartInfo/DevStandardGas_Save',
            data: Qs.stringify(self.ruleForm),
          })
            .then((res) => {
              debugger
              console.log(res)
              if (res.status == 200) {
                self.dialogVisible = !self.dialogVisible
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
        } else {
          return false
        }
      })
    },
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
    uploadSuccess(file) {
      debugger
      this.ruleForm.certificate = file.fileName
      this.ruleForm.FileUrl = file.fileUrl
    },
    handleAdd() {
      this.ruleForm.OptType = 1
      var self = this
      self.ruleForm = {
        id: '',
        city: '',
        town: '',
        SStationName: '',
        SStationType: '',
        variety: '',
        production: '',
        sampleId: '',
        certificate: '',
        dzDate: '',
        bzdate: '',
        validDate: '',
        nextChangeDays: '',
        productionPhone: '',
        productionAddress: '',
        projectName: '',
        ywPerson: '',
        FileUrl: '',
      }
      // if (self.ruleForm.Id != "") {
      //   self.resetForm("ruleForm"); //重置表单
      //   self.ruleForm.Id = ""; //如果上一行代码执行没有效果，则强制设置主键【id】为''。
      // }
      self.dialogVisible = !self.dialogVisible
    },
    handleEdit(index, row) {
      this.ruleForm.OptType = 2
      //操作栏编辑按钮
      var self = this
      this.getToFirst(row.id)
      self.dialogVisible = !self.dialogVisible
    },
    handleCheck(index, row) {
      var self = this
      self.check.Id = row.id
      self.dialogVisibleCheck = !self.dialogVisibleCheck
    },
    handledel(index, row) {
      //操作栏删除按钮
      var self = this
      this.$confirm('确认删除？')
        .then(function () {
          self.Singelmultipl(row.id)
        })
        .catch(function () {})
    },
    Singelmultipl(id) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          self.api + '/api/Yw_DeviceSparePartInfo/DevStandardGasDel?Id=' + id,
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
    islock(row, column, cellValue) {
      if (row.islock == '1') {
        return `<i class="lock" style="vertical-align: super;font-size: 30px;"><svg t="1614132616909" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6593" width="32" height="32"><path d="M721.92 493.24032l0-74.26048c0 0-0.02048-173.21984-179.2-173.21984-179.17952 0-179.2 173.21984-179.2 173.21984l0 74.26048L286.72 493.24032 286.72 839.68l512 0L798.72 493.24032 721.92 493.24032zM568.32 684.3392l0 81.1008-51.2 0 0-81.1008C501.88288 675.75808 491.52 659.968 491.52 641.69984c0-27.3408 22.9376-49.50016 51.2-49.50016 28.2624 0 51.2 22.13888 51.2 49.50016C593.92 659.968 583.55712 675.75808 568.32 684.3392zM670.72 493.21984l-256 0 0-73.91232c0.28672-20.72576 7.80288-124.04736 128-124.04736 120.17664 0 127.71328 103.3216 128 123.71968L670.72 493.21984z" p-id="6594" fill="#d81e06"></path></svg></i>`
      } else {
        return `<i class="unlock" style="vertical-align: super;font-size: 30px;"><svg t="1614130652256" class="icon" viewBox="0 0 1448 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3130" width="32" height="32"><path d="M868.057993 437.736921H419.565235c-32.212778 0-58.320892 26.105681-58.320892 58.322108v425.769637c0 32.27481 26.108114 58.382924 58.320892 58.382925h606.019618c32.21886 0 58.266158-26.108114 58.266158-58.382925v-425.769637c-0.004865-32.21886-26.103249-58.322109-58.326973-58.322108H868.057993z m-112.727696 282.304548L755.329081 813.013843c0 4.152485-3.437295 7.655461-7.655461 7.655461h-50.133903c-4.270468 0-7.711411-3.502975-7.711412-7.655461v-92.972374c-23.553861-12.045127-39.868239-36.193764-39.868239-64.49732 0-40.045821 32.513207-72.618627 72.563893-72.618627 40.10542 0 72.623492 32.572806 72.623493 72.618627 0.053518 28.303555-16.259644 52.450976-39.817155 64.49732z" p-id="3131" fill="#1afa29"></path><path d="M932.254884 286.08241c0-80.218138 65.323194-145.541332 145.541332-145.541332 80.216921 0 145.424566 65.323194 145.424566 145.541332V437.738137h90.601784V282.229137c0-130.235275-105.850674-236.1419-236.083517-236.1419-130.234059 0-236.201499 105.906624-236.201499 236.1419V437.738137h90.717334V286.08241z" p-id="3132" fill="#1afa29"></path></svg></i>`
      }
    },
    //解锁
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
        ids += item.id + ','
      })
      this.$confirm('确认解锁？')
        .then(function () {
          self.handleBatchUnLock(ids)
        })
        .catch(function () {})
    },
    //锁定
    handleBatchUnLock(ids) {
      var self = this
      this.$http({
        method: 'GET',
        url: self.api + '/api/InspectionPlan/BatchUpdateBQUnLock?id=' + ids,
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
        ids += item.id + ','
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
        url: self.api + '/api/InspectionPlan/BatchUpdateBQLock?id=' + ids,
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

    handleCellClick(obj) {
      //单元格单击事件处理函数
      debugger
      switch (obj.column.label) {
        case '资质证书':
          this.commonDownLoad(obj.row.certificate, obj.row.fileUrl)
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
    getList(obj) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_DeviceSparePartInfo/DevStandardGas_FindByPage?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&variety=' +
          self.queryparam.variety +
          '&city=' +
          self.queryparam.city +
          '&production=' +
          self.queryparam.production +
          '&end=' +
          self.queryparam.end,
      })
        .then((res) => {
          if (res.status == 200) {
            self.list = res.data.data
            self.page.total = res.data.count
            self.options.loading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getFacName() {
      var self = this
      this.$forceUpdate()
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_DeviceHostLibraryInfo/Get_DeviceFacInfo',
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.QFacNameOptions = res.data.data
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getModel(FacId, param) {
      debugger
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_DeviceHostLibraryInfo/Get_DeviceHostLibraryInfoModel?Param=' +
          param +
          '&FacId=' +
          FacId,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.QDeviceIdOptions = res.data.data
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getmodellis(id) {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_DeviceSparePartInfo/Get_DeviceModel?id=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.Model = res.data.data[0].model
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getYwUnit() {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_DeviceHostLibraryInfo/Get_YwUnitModel',
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.QYwUnitOptions = res.data.data
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getToFirst(id) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api + '/api/Yw_DeviceSparePartInfo/DevStandardGasById?Id=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            debugger
            self.ruleForm.id = res.data.data.id
            self.ruleForm.city = res.data.data.city
            self.ruleForm.town = res.data.data.town
            self.ruleForm.SStationName = res.data.data.sStationName
            self.ruleForm.SStationType = res.data.data.sStationType
            self.ruleForm.variety = res.data.data.variety
            self.ruleForm.production = res.data.data.production
            self.ruleForm.sampleId = res.data.data.sampleId
            self.ruleForm.certificate = res.data.data.certificate
            self.ruleForm.dzDate = res.data.data.dzDate
            self.ruleForm.bzdate = res.data.data.bzdate
            self.ruleForm.validDate = res.data.data.validDate
            self.ruleForm.nextChangeDays = res.data.data.nextChangeDays
            self.ruleForm.productionPhone = res.data.data.productionPhone
            self.ruleForm.productionAddress = res.data.data.productionAddress
            self.ruleForm.projectName = res.data.data.projectName
            self.ruleForm.ywPerson = res.data.data.ywPerson
            self.ruleForm.FileUrl = res.data.data.fileUrl
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    selectOptionEvent(val) {
      this.ruleForm.SStationName = val
    },
    selectSStation() {
      this.$refs.cascader.selectSStation(this.ruleForm.SStation)
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
    downloadBeiJi(obj) {
      var self = this
      this.$http({
        method: 'GET',
        responseType: 'blob', // 表明返回服务器返回的数据类型
        url:
          this.api +
          '/api/Yw_DeviceSparePartInfo/DevStandardGas_FindByPageDownLoad?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&variety=' +
          self.queryparam.variety +
          '&start=' +
          self.queryparam.start +
          '&end=' +
          self.queryparam.end,
      })
        .then((res) => {
          if (res.status == 200) {
            let blob = new Blob([res.data], {
              type: 'application/vnd.ms-excel',
            })
            let downTime = self.downLoadDate()
            const fileName = downTime + '-标准气体.xls'
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
    treeSStation,
    rateTable,
    rateCascader,
    rateUpload,
  },
  created() {
    //调用获取列表页的方法
  },
  mounted() {
    this.getList() //调用获取列表页的方法
    this.getFacName()
    this.getYwUnit()
  },
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
