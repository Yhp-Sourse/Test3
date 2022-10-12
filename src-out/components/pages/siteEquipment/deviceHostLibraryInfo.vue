<template>
  <div id="v_deviceHostLibraryInfo">
    <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
      <el-aside width="250px">
        <treeSStation @checkedNodes="getSearchStations"></treeSStation>
      </el-aside>
      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="设备厂家">
                <el-input
                  v-model:value="queryparam.QName"
                  placeholder="设备厂家"
                ></el-input>
              </el-form-item>
              <el-form-item label="参数">
                <el-select
                  v-model:value="queryparam.QParam"
                  placeholder="不限"
                  style="width: 100%"
                >
                  <el-option
                    v-for="(item, index) in queryparam.QParamOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="状态">
                <el-select
                  v-model:value="queryparam.QStatus"
                  placeholder="不限"
                  style="width: 100%"
                >
                  <el-option
                    v-for="(item, index) in queryparam.QStatusOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item class="btn">
                <el-button
                  type="primary"
                  v-has="'DevHost_handleSearch'"
                  icon="el-icon-search"
                  @click="getList()"
                  >查询</el-button
                >
                <el-button
                  type="primary"
                  icon="el-icon-download"
                  @click="downloadZhuJi()"
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
              v-has="'DevHost_handleAdd'"
              style="text-overflow: initial"
              @click="handleAdd"
              >添加</el-button
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
      <el-dialog title="主机设备" v-model:visible="dialogVisible" width="50%">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item v-show="false" label="站点名称：" prop="Id">
                  <el-input
                    v-model:value="ruleForm.Id"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="站点名称：" prop="SStation">
                  <rateCascader
                    :selectOption="ruleForm.SStation"
                    @selectOptionEvent="selectOptionEvent"
                  ></rateCascader>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="监测参数：" prop="Param">
                  <el-select
                    v-model:value="ruleForm.Param"
                    placeholder="不限"
                    style="width: 100%"
                  >
                    <el-option
                      v-for="(item, index) in ruleForm.QParamOptions"
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
            <el-col :span="12">
              <div>
                <el-form-item label="厂家名称：" prop="FacId">
                  <el-select
                    v-model:value="ruleForm.FacId"
                    placeholder="请选择"
                    @click="getModel(ruleForm.FacId, ruleForm.Param)"
                    style="width: 100%"
                  >
                    <el-option
                      v-for="(item, index) in ruleForm.QFacNameOptions"
                      :key="index"
                      :label="item.name"
                      :value="item.id"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="设备型号：" prop="DeviceCode">
                  <el-input
                    v-model:value="ruleForm.DeviceCode"
                    autocomplete="off"
                  ></el-input>
                  <!-- <el-select v-model="ruleForm.DeviceCode" placeholder="请选择" style="width: 100%;">
                      <el-option
                        v-for="(item, index) in ruleForm.QModelOptions"
                        :key="index"
                        :label="item.model"
                        :value="item.code"
                      ></el-option>
                    </el-select> -->
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="验收日期：" prop="ShelfTime">
                  <el-date-picker
                    v-model:value="ruleForm.ShelfTime"
                    type="date"
                    placeholder="选择日期"
                  ></el-date-picker>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item
                  label="唯一识别码（出厂编号）:"
                  prop="DeviceUniqueCode"
                >
                  <el-input
                    v-model:value="ruleForm.DeviceUniqueCode"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item
                  label="生产日期（出厂日期）:"
                  prop="ProductionDate"
                >
                  <el-date-picker
                    v-model:value="ruleForm.ProductionDate"
                    type="date"
                    placeholder="选择日期"
                  ></el-date-picker>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="运维公司：" prop="Description">
                  <el-select
                    v-model:value="ruleForm.UnitId"
                    placeholder="请选择"
                    style="width: 100%"
                  >
                    <el-option
                      v-for="(item, index) in ruleForm.QYwUnitOptions"
                      :key="index"
                      :label="item.unitName"
                      :value="item.unitId"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="设备描述：" prop="Description">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4 }"
                    placeholder="请输入内容"
                    v-model:value="ruleForm.Description"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item v-show="true" label="附件：" prop="Id">
                  <rateUpload
                    :limit="1"
                    :Ismultiple="false"
                    :BusinessId="ruleForm.Id"
                    :BusinessType="12"
                    @uploadSuccess="uploadSuccess"
                  ></rateUpload>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12" v-show="false">
              <div>
                <el-form-item v-show="false" label="：" prop>
                  <el-input
                    v-model:value="ruleForm.Status"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
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
  name: 'v_deviceHostLibraryInfo',
  data() {
    return {
      dialogVisible: false,
      ruleForm: {
        Status: 1,
        FileName: '',
        FileUrl: '',
        Base64: '',
        Id: '',
        City: '',
        SStation: '',
        Param: '',
        FacId: '',
        DeviceCode: '',
        ShelfTime: '',
        ProductionDate: '',
        DeviceUniqueCode: '',
        Description: '',
        QModelOptions: [],
        QFacNameOptions: [],
        UnitId: '',
        QYwUnitOptions: [],
        OptType: 1,
        QParamOptions: [
          {
            value: '',
            label: '请选择',
          },
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
            value: '零气发生器',
            label: '零气发生器',
          },
        ],
      },
      rules: {
        SStation: [
          { required: true, message: '请输入站点名称', trigger: 'blur' },
        ],
        Param: [{ required: true, message: '请选择监测参数', trigger: 'blur' }],
        FacId: [{ required: true, message: '请选择厂家名称', trigger: 'blur' }],
        DeviceCode: [
          { required: true, message: '请输入设备型号', trigger: 'blur' },
        ],
        DeviceUniqueCode: [
          { required: false, message: '请输入唯一识别码', trigger: 'blur' },
        ],
      },
      queryparam: {
        QName: '',
        QParam: '',
        QStatus: '',
        chooseStationIds: '',
        QParamOptions: [
          {
            value: '',
            label: '请选择',
          },
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
        ],
        QStatusOptions: [
          {
            value: '',
            label: '请选择',
          },
          {
            value: '2',
            label: '使用中',
          },
          {
            value: '3',
            label: '待使用',
          },
          {
            value: '4',
            label: '维修中',
          },
          {
            value: '5',
            label: '已停用',
          },
        ],
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
          prop: 'sStationName',
          label: '站点名称',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'facName',
          label: '设备厂家',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_UnitName',
          label: '运维单位',
          width: 120,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'deviceUniqueCode',
          label: '唯一识别码（出厂编号）',
          width: 220,
          align: 'center',
          isShow: false,
        },
        {
          prop: 'deviceCode',
          label: '设备型号',
          width: 150,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'param',
          label: '监测参数',
          width: 100,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_Status',
          label: '状态',
          width: 80,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'dateDiffDays',
          label: '设备使用周期(天)',
          width: 140,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'fileName',
          label: '附件',
          width: 80,
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            return '<a style="color:blue;">' + row.fileName + '</a>'
          },
        },
        {
          prop: 'show_ProductionDate',
          label: '生产日期（出厂日期）',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_ShelfTime',
          label: '验收日期',
          width: 120,
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
            className: 'success', //样式类名
            hasbutton: 'DevHost_handleEdit',
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleEdit(index, row)
            },
          },
          {
            id: '2',
            label: '删除',
            show: true,
            bgColortype: 'danger',
            hasbutton: 'DevHost_handleMultiplDel',
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
            url:
              self.api +
              '/api/Yw_DeviceHostLibraryInfo/DeviceHostLibrarySubmit',
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
      this.ruleForm.FileName = file.fileName
      this.ruleForm.FileUrl = file.fileUrl
    },
    handleAdd() {
      this.ruleForm.OptType = 1
      var self = this
      if (self.ruleForm.Id != '') {
        self.resetForm('ruleForm') //重置表单
        self.ruleForm.Id = '' //如果上一行代码执行没有效果，则强制设置主键【id】为''。
      }
      self.dialogVisible = !self.dialogVisible
    },
    handleEdit(index, row) {
      this.ruleForm.OptType = 2
      //操作栏编辑按钮
      var self = this
      this.getToFirst(row.id)
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
    Singelmultipl(id) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          self.api +
          '/api/Yw_DeviceHostLibraryInfo/DeviceHostLibraryInfomultipl?Id=' +
          id,
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
      switch (obj.column.label) {
        case '附件':
          this.commonDownLoad(obj.row.fileName, obj.row.fileUrl)
          // if(obj.row.base64!=null && obj.row.base64.length>0){
          //     this.downLoad(obj.row.base64);
          // }else{
          //     this.handleEdit("",obj.row);
          // }
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
          '/api/Yw_DeviceHostLibraryInfo/DeviceHostLibraryInfo_FindByPage?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&FacName=' +
          self.queryparam.QName +
          '&Param=' +
          self.queryparam.QParam +
          '&Status=' +
          self.queryparam.QStatus +
          '&SStation=' +
          self.queryparam.chooseStationIds,
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
    getModel(FacName, param) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_DeviceHostLibraryInfo/Get_DeviceHostLibraryInfoModel?Param=' +
          param +
          '&FacId=' +
          FacName,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.QModelOptions = res.data.data
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
          this.api +
          '/api/Yw_DeviceHostLibraryInfo/Get_DeviceHostLibraryInfo?Id=' +
          id,
      })
        .then((res) => {
          if (res.status == 200) {
            debugger
            self.ruleForm.Id = res.data.data.id
            self.ruleForm.SStation = res.data.data.sStation
            self.ruleForm.Param = res.data.data.param
            self.ruleForm.FacId = res.data.data.facId
            self.ruleForm.DeviceCode = res.data.data.deviceCode
            self.ruleForm.ShelfTime = res.data.data.shelfTime
            self.ruleForm.ProductionDate = res.data.data.productionDate
            self.ruleForm.DeviceUniqueCode = res.data.data.deviceUniqueCode
            self.ruleForm.Description = res.data.data.description
            self.ruleForm.UnitId = res.data.data.unitId
            self.ruleForm.FileName = res.data.data.fileName
            self.ruleForm.FileUrl = res.data.data.fileUrl
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

    //导出更换记录
    downloadZhuJi(obj) {
      var self = this
      this.$http({
        method: 'GET',
        responseType: 'blob', // 表明返回服务器返回的数据类型
        url:
          this.api +
          '/api/Yw_DeviceHostLibraryInfo/DeviceHostLibraryInfo_FindByPageDownLoad?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&FacName=' +
          self.queryparam.QName +
          '&Param=' +
          self.queryparam.QParam +
          '&Status=' +
          self.queryparam.QStatus +
          '&SStation=' +
          self.queryparam.chooseStationIds,
      })
        .then((res) => {
          if (res.status == 200) {
            let blob = new Blob([res.data], {
              type: 'application/vnd.ms-excel',
            })
            let downTime = self.downLoadDate()
            const fileName = downTime + '-主机设备.xls'
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
