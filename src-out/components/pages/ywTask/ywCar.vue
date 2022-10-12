<template>
  <div id="v_ywTask">
    <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
      <el-aside width="250px" v-if="false">
        <treeSStation @checkedNodes="getList"></treeSStation>
      </el-aside>
      <!--  -->
      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="车牌：">
                <el-input
                  v-model:value="queryparam.Licenseplate"
                  placeholder="输入车牌"
                ></el-input>
              </el-form-item>
              <el-form-item label="录入日期：">
                <el-date-picker
                  v-model:value="queryparam.startDate"
                  type="date"
                  placeholder="选择开始日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="-">
                <el-date-picker
                  v-model:value="queryparam.endDate"
                  type="date"
                  placeholder="选择结束日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </el-form-item>
              <el-form-item class="btn">
                <el-button
                  type="primary"
                  v-has="'ywCar_handleSearch'"
                  icon="el-icon-search"
                  @click="getList()"
                  >查询</el-button
                >
                <el-button
                  type="primary"
                  icon="el-icon-download"
                  @click="downExcelload()"
                  >导出</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="tools">
            <el-button
              size="small"
              v-has="'ywCar_handleSearch'"
              class="el-button--iconButton"
              icon="el-icon-plus"
              style="text-overflow: initial"
              @click="handleAdd"
              >添加</el-button
            >
            <el-button
              size="small"
              v-has="'ywCar_handleSearch'"
              class="el-button--iconButton"
              icon="el-icon-delete"
              style="text-overflow: initial"
              @click="handleMultiplDel"
              >删除</el-button
            >
          </div>
        </el-header>

        <el-main>
          <rate-table
            :list="list"
            @handleSelectionChange="handleSelectionChange"
            @sizeChange="getSizeChange"
            @handleCellClick="handleCellClick"
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
      <el-dialog title="运维车辆" v-model:visible="dialogVisible" width="50%">
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
                <el-form-item v-show="false" label="主键Id：" prop="Id">
                  <el-input
                    v-model:value="ruleForm.Id"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <!-- <el-form-item label="站点名称：" prop="SStation">
                                      <rateCascader :selectOption='ruleForm.SStation' @selectOptionEvent="selectOptionEvent"></rateCascader>
                                  </el-form-item> -->
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="厂牌名称：" prop="Devicename">
                  <el-input
                    v-model:value="ruleForm.Devicename"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="车牌：" prop="Licenseplate">
                  <el-input
                    v-model:value="ruleForm.Licenseplate"
                    autocomplete="off"
                  ></el-input
                ></el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="编号：" prop="Number">
                  <el-input
                    v-model:value="ruleForm.Number"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="使用人：" prop="UsePeople">
                  <el-input
                    v-model:value="ruleForm.UsePeople"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="使用日期：" prop="Usestartdate">
                  <el-date-picker
                    v-model:value="ruleForm.Usestartdate"
                    type="date"
                    placeholder="选择日期"
                  ></el-date-picker>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="运维单位：" prop="UnitId">
                  <el-input
                    v-model:value="ruleForm.UnitId"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="备注：" prop="Remark">
                  <el-input
                    v-model:value="ruleForm.Remark"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item v-show="true" label="车辆照片：" prop="Id">
                  <rateUpload
                    :limit="1"
                    :Ismultiple="false"
                    :BusinessId="ruleForm.Id"
                    :BusinessType="1"
                    @uploadSuccess="uploadSuccessD"
                  ></rateUpload>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item v-show="true" label="行驶证：" prop="Id">
                  <rateUpload
                    :limit="1"
                    :Ismultiple="false"
                    :BusinessId="ruleForm.Id"
                    :BusinessType="2"
                    @uploadSuccess="uploadSuccessX"
                  ></rateUpload>
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
                    v-has="'ywCar_handleSubmit'"
                    type="primary"
                    @click="submitForm('ruleForm')"
                    >提交</el-button
                  >
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
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
import rateTable from '../common/rateTable' //引入rateTable组件
import rateCascader from '../common/rateCascader' //引入rateCascader组件
import rateUpload from '../common/rateUpload' //引入rateCascader组件

export default {
  name: '运维车辆',
  data() {
    return {
      dialogVisible: false,
      ruleForm: {
        Id: '',
        City: '',
        SStation: '',
        SStationName: '',
        Devicename: '',
        Licenseplate: '',
        Number: '',
        UsePeople: '',
        Usestartdate: '',
        Usedeadline: '',
        Entryperson: '',
        Entrytime: '',
        Remark: '',
        LicensePlateFileName: '',
        LicensePlateFileUrl: '',
        DrivingLicenseFileName: '',
        DrivingLicenseFileUrl: '',
        UnitId: '',
        Base64_D: '',
        Base64_X: '',
        OptType: 1,
      },
      rules: {
        Id: [{ required: false, message: '', trigger: 'blur' }],
        SStation: [{ required: false, message: '请选择站点', trigger: 'blur' }],
        Devicename: [
          { required: true, message: '请输入厂牌名称', trigger: 'blur' },
        ],
        Licenseplate: [
          { required: true, message: '请输入车牌', trigger: 'blur' },
        ],
        Number: [{ required: true, message: '请输入编号', trigger: 'blur' }],
        UsePeople: [
          { required: true, message: '请输入使用人', trigger: 'blur' },
        ],
        Usestartdate: [
          { required: true, message: '请输入使用日期', trigger: 'blur' },
        ],
        LicensePlateFileName: [
          { required: false, message: '请上传驾驶证', trigger: 'blur' },
        ],
        LicensePlateFileUrl: [
          { required: false, message: '请上传驾驶证', trigger: 'blur' },
        ],
        DrivingLicenseFileName: [
          { required: false, message: '请上传行驶证', trigger: 'blur' },
        ],
        DrivingLicenseFileUrl: [
          { required: false, message: '请上传行驶证', trigger: 'blur' },
        ],
        Remark: [{ required: false, message: '请输入备注', trigger: 'blur' }],
        UnitId: [
          { required: false, message: '请输入运维单位', trigger: 'blur' },
        ],
      },
      queryparam: {
        startDate: '',
        endDate: '',
        Licenseplate: '',
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
          prop: 'devicename',
          label: '厂牌名称',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'licenseplate',
          label: '车牌',
          align: 'center',
          width: 100,
          isShow: true,
        },
        { prop: 'usepeople', label: '使用人', align: 'center', isShow: true },
        {
          prop: 'usestartdate',
          label: '使用日期',
          align: 'center',
          width: 180,
          isShow: true,
          formatter(row, column, cellValue) {
            if (row.usestartdate) {
              return row.usestartdate.replace('T', ' ').substring(0, 10)
            }
          },
        },
        {
          prop: 'licenseplatefilename',
          label: '行驶证',
          align: 'center',
          isShow: true,
          width: 150,
          formatter: (row, column, cellValue) => {
            if (row.licenseplatefilename) {
              return (
                '<a style="color:blue;">' + row.licenseplatefilename + '</a>'
              )
            } else {
              return ''
            }
          },
        },
        {
          prop: 'drivinglicensefilename',
          label: '车辆照片',
          align: 'center',
          isShow: true,
          width: 150,
          formatter: (row, column, cellValue) => {
            if (row.drivinglicensefilename) {
              return (
                '<a style="color:blue;">' + row.drivinglicensefilename + '</a>'
              )
            } else {
              return ''
            }
          },
        },
        { prop: 'entryperson', label: '录入人', align: 'center', isShow: true },
        {
          prop: 'show_entrytime',
          label: '录入日期',
          align: 'center',
          width: 180,
          isShow: true,
        },
        {
          prop: 'remark',
          label: '备注',
          align: 'center',
          isShow: true,
          width: 200,
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
            className: 'success', //样式类名
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            hasbutton: 'ywCar_handleEdit', //按钮权限控制
            method: (index, row) => {
              this.handleEdit(index, row)
            },
          },
          {
            id: '2',
            label: '删除',
            show: true,
            bgColortype: 'danger',
            className: 'searchAll',
            hasbutton: 'ywCar_handleMultiplDel', //按钮权限控制
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
    filterDate(t) {
      const date = new Date(t)
      const y = date.getFullYear()
      const M = (date.getMonth() + 1).toString().padStart(2, 0)
      const d = date.getDate().toString().padStart(2, 0)
      const h = date.getHours().toString().padStart(2, 0)
      const mm = date.getMinutes().toString().padStart(2, 0)
      const s = date.getSeconds().toString().padStart(2, 0)
      return y + '-' + M + '-' + d + ' ' + h + ':' + mm + ':' + s
    },
    uploadSuccessD(file) {
      this.ruleForm.DrivingLicenseFileName = file.fileName
      this.ruleForm.DrivingLicenseFileUrl = file.fileUrl
    },
    uploadSuccessX(file) {
      this.ruleForm.LicensePlateFileName = file.fileName
      this.ruleForm.LicensePlateFileUrl = file.fileUrl
    },
    handleCellClick(obj) {
      //单元格单击事件处理函数
      switch (obj.column.label) {
        case '行驶证':
          if (obj.row.licenseplatefilename) {
            this.commonDownLoad(
              obj.row.licenseplatefilename,
              obj.row.licenseplatefileurl
            )
          }
          break
        case '车辆照片':
          if (obj.row.drivinglicensefilename) {
            this.commonDownLoad(
              obj.row.drivinglicensefilename,
              obj.row.drivinglicensefileurl
            )
          }
          break
        default:
          break
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
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var self = this
          this.$http({
            headers: {
              deviceCode: 'A95ZEF1-47B5-AC90BF3',
            },
            method: 'post',
            url: self.api + '/api/Yw_Vehicle/Submit',
            data: self.Qs.stringify(self.ruleForm),
          })
            .then((res) => {
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
      this.$nextTick(() => {
        this.$refs[formName].resetFields()
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
        url: self.api + '/api/Yw_Vehicle/Delmultipl?ids=' + ids,
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
    Singelmultipl(id) {
      var self = this
      this.$http({
        method: 'GET',
        url: self.api + '/api/Yw_Vehicle/Singelmultipl?Id=' + id,
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
    handleAdd() {
      this.getToFirst(0)
      this.ruleForm.OptType = 1
      this.dialogVisible = !this.dialogVisible
    },
    handleEdit(index, row) {
      //操作栏编辑按钮
      var self = this
      this.getToFirst(row.id)
      this.ruleForm.OptType = 2
      self.dialogVisible = !self.dialogVisible
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
    getList(obj) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_Vehicle/GetList?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&startDate=' +
          self.queryparam.startDate +
          '&endDate=' +
          self.queryparam.endDate +
          '&Licenseplate=' +
          self.queryparam.Licenseplate,
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
    downExcelload(obj) {
      var self = this
      this.$http({
        method: 'GET',
        responseType: 'blob', // 表明返回服务器返回的数据类型
        url:
          this.api +
          '/api/Yw_Vehicle/GetListDownLoad?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&startDate=' +
          self.queryparam.startDate +
          '&endDate=' +
          self.queryparam.endDate +
          '&Licenseplate=' +
          self.queryparam.Licenseplate,
      })
        .then((res) => {
          if (res.status == 200) {
            let blob = new Blob([res.data], {
              type: 'application/vnd.ms-excel',
            })
            let downTime = self.downLoadDate()
            const fileName = downTime + '-运维车辆使用情况手册.xls'
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

    getToFirst(id) {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_Vehicle/GetToFirst?id=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.Id = res.data.data.id
            self.ruleForm.City = res.data.data.city
            self.ruleForm.SStation = res.data.data.sstation
            self.ruleForm.SStationName = res.data.data.sstationname
            self.ruleForm.Devicename = res.data.data.devicename
            self.ruleForm.Licenseplate = res.data.data.licenseplate
            self.ruleForm.Number = res.data.data.number
            self.ruleForm.UsePeople = res.data.data.usepeople
            self.ruleForm.UnitId = res.data.data.unitid
            self.ruleForm.Entryperson = res.data.data.entryperson
            self.ruleForm.Usestartdate = res.data.data.usestartdate
            self.ruleForm.Usedquantity = res.data.data.usedquantity
            self.ruleForm.Entrytime = res.data.data.entrytime
            self.ruleForm.Remark = res.data.data.remark
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    selectOptionEvent(val) {
      this.ruleForm.SStation = val
    },
    selectSStation() {
      this.$refs.cascader.selectSStation(this.ruleForm.SStation)
    },
  },
  components: {
    treeSStation,
    rateTable,
    rateCascader,
    rateUpload,
  },
  mounted() {
    this.getList() //调用获取列表页的方法
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
.el-cascader,
.el-cascader--medium {
  width: 100%;
  height: 28px;
  line-height: 28px;
}
.el-date-editor,
.el-input {
  width: 100%;
}
</style>
