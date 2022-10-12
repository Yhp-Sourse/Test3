<template>
  <div id="v_deviceOnlineInfo">
    <el-container style="height: calc(100vh - 136px); border: 1px solid #eee">
      <el-aside width="250px">
        <treeSStation @checkedNodes="getSearchStations"></treeSStation>
      </el-aside>
      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="设备型号">
                <el-input
                  v-model:value="queryparam.QModel"
                  placeholder="设备型号"
                ></el-input>
              </el-form-item>
              <el-form-item label="类型">
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
                  v_has="'DevOnli_handleSearch'"
                  icon="el-icon-search"
                  @click="getList()"
                  >查询</el-button
                >
                <el-button
                  type="primary"
                  icon="el-icon-download"
                  @click="download()"
                  >导出</el-button
                >
                <el-button
                  type="primary"
                  icon="el-icon-refresh"
                  @click="refresh()"
                  >数据同步</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="tools">
            <!-- <el-button size="small" class=" el-button--iconButton" icon="el-icon-plus" style="text-overflow: initial;" @click="handleAdd">添加</el-button> -->
            <!-- <el-button size="small" class=" el-button--iconButton" icon="el-icon-delete" style="text-overflow: initial;" @click="handleMultiplDel">删除</el-button> -->
          </div>
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
          <rate-table
            v-if="!isMenuActive"
            :list="listview"
            :options="options.options"
            :columns="showView.columns"
            :operates="showView.operates"
            :pageShow="showView.page.pageShow"
            :total="showView.page.total"
          ></rate-table>
        </el-main>
      </el-container>
    </el-container>

    <div>
      <el-dialog title="编辑" v-model:visible="dialogVisible" width="50%">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="类型" prop="Title">
            <el-radio-group v-model:value="ruleForm.Status">
              <el-radio :label="1">备机</el-radio>
              <el-radio :label="2">主机</el-radio>
              <el-radio :label="3">临时接入</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="设备厂家" prop="FacId">
            <el-select
              v-model:value="ruleForm.FacId"
              placeholder="不限"
              style="width: 100%"
            >
              <el-option
                v-for="(item, index) in ruleForm.FactIdOptions"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设备型号" prop="Model">
            <el-input
              v-model:value="ruleForm.Model"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="设备编码" prop="Code">
            <el-input
              v-model:value="ruleForm.Code"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <!-- <el-dialog
                  title="详情"
                  :visible.sync="dialogVisibleview"
                  width="80%"
                  height="30%"
                  >
                  <rate-table :list="listview"
                          :options="options.options"
                          :columns="showView.columns"
                          :operates="showView.operates"
                          :pageShow="showView.page.pageShow"
                          :total="showView.page.total"
                      ></rate-table>
        </el-dialog>-->
    </div>
  </div>
</template>

<script>
import treeSStation from '../common/treeSStation'
import rateTable from '../common/rateTable' //引入table组件

export default {
  name: 'v_deviceOnlineInfo',
  data() {
    return {
      showView: {
        columns: [
          {
            prop: 'show_ChangeType',
            label: '变更类型',
            width: 100,
            align: 'center',
            isShow: true,
          },
          {
            prop: 'sStationName',
            label: '站点名称',
            width: 160,
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
            prop: 'originDName',
            label: '原设备',
            width: 100,
            align: 'center',
            isShow: true,
          },
          {
            prop: 'newDName',
            label: '新设备',
            width: 100,
            align: 'center',
            isShow: true,
          },
          {
            prop: 'show_ApplyState',
            label: '仪器状态',
            width: 100,
            align: 'center',
            isShow: true,
          },
          { prop: 'show_Status', label: '状态', align: 'center', isShow: true },
          {
            prop: 'show_ChangeTime',
            label: '更换时间',
            width: 130,
            width: 180,
            align: 'center',
            isShow: true,
          },
          {
            prop: 'show_LowerShelfDataTime',
            label: '下架时间',
            width: 130,
            align: 'center',
            isShow: true,
          },
          {
            prop: 'sewDF',
            label: '设备品牌',
            width: 130,
            align: 'center',
            isShow: true,
          },
          {
            prop: 'sewDType',
            label: '设备型号',
            width: 130,
            align: 'center',
            isShow: true,
          },
        ], // 需要展示的列
        operates: {
          //操作栏
          width: 200,
          fixed: 'right',
          list: [],
        },
        page: {
          //关于页码的相关参数
          pageShow: false, //是否显示
          total: 0, //总条数
          pageSize: 10, //每页条数
          pageNo: 1, //第几页
        },
        list: [], // table数据
        options: {
          // table样式参数
          stripe: true, // 是否为斑马纹 table
          loading: true, // 是否添加表格loading加载动画
          highlightCurrentRow: true, // 是否支持当前行高亮显示
          mutiSelect: true, // 是否支持列表项选中功能
        }, // table 的参数结束
      },
      isMenuActive: true,
      dialogVisible: false,
      ruleForm: {
        Status: 1,
        FacId: '',
        Model: '',
        Code: '',
        Id: '',
        FactIdOptions: [
          {
            value: '6',
            label: '美国热电',
          },
          {
            value: '3',
            label: '河北先河',
          },
          {
            value: '15',
            label: '德国LUFFT',
          },
          {
            value: '16',
            label: 'BELFORT',
          },
          {
            value: '7',
            label: '美国API',
          },
        ],
      },
      rules: {
        Model: [{ required: true, message: '请输入设备型号', trigger: 'blur' }],
        Code: [{ required: true, message: '请输入设备编码', trigger: 'blur' }],
      },
      queryparam: {
        QModel: '',
        QStatus: '',
        chooseStationIds: '',

        QStatusOptions: [
          {
            value: '',
            label: '全部',
          },
          {
            value: '1',
            label: '备机',
          },
          {
            value: '2',
            label: '主机',
          },
          {
            value: '3',
            label: '临时接入',
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
        { prop: 'show_Status', label: '类型', align: 'center', isShow: true },
        {
          prop: 'sStationName',
          label: '站点名称',
          align: 'center',
          isShow: true,
        },
        { prop: 'facName', label: '设备厂家', align: 'center', isShow: true },
        { prop: 'model', label: '设备型号', align: 'center', isShow: true },
        { prop: 'code', label: '设备编码', align: 'center', isShow: true },
        { prop: 'param', label: '监测参数', align: 'center', isShow: true },
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
            hasbutton: 'DevOnli_handleEdit',
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleEdit(index, row)
            },
          },
          {
            id: '2',
            label: '详情',
            show: false,
            bgColortype: 'info',
            className: 'searchAll',
            hasbutton: 'DevOnli_handleDetail',
            disabled: false,
            method: (index, row) => {
              this.handleview(index, row)
            },
          },
        ],
      }, // 列操作按钮
    } //return ending
  },
  methods: {
    //数据同步
    refresh() {
      var self = this
      self.options.loading = true
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_Equipment/SynchronousData',
      })
        .then((res) => {
          if (res.status == 200) {
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
            self.getList()
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

    submitForm(formName) {
      const Qs = require('qs')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var self = this
          debugger
          this.$http({
            headers: {
              deviceCode: 'A95ZEF1-47B5-AC90BF3',
            },
            method: 'post',
            url: self.api + '/api/Yw_DeviceOnline/SubmitDeviceOnlineInfo',
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
    handleAdd() {
      var self = this
      self.resetForm('ruleForm')
      self.dialogVisible = !self.dialogVisible
    },
    handleEdit(index, row) {
      //操作栏编辑按钮
      var self = this
      this.getToFirst(row.id)
      self.dialogVisible = !self.dialogVisible
    },
    handleview(index, row) {
      //操作栏详情按钮
      var self = this
      self.isMenuActive = false
      this.getDetil(row.sStation, row.param)
      //self.dialogVisibleview=!self.dialogVisibleview;
    },

    getDetil(SStation, Param) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_DeviceOnline/DeviceOnlineInfo_Detil?SStation=' +
          SStation +
          '&Param=' +
          Param,
      })
        .then((res) => {
          if (res.status == 200) {
            self.listview = res.data.data
            //self.page.total = res.data.count;
            self.options.loading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getList(obj) {
      var staionId = ''
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_DeviceOnline/DeviceOnlineInfo_FindByPage?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&Model=' +
          self.queryparam.QModel +
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
          '/api/Yw_DeviceOnline/DeviceOnlineInfoDownLoad?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&Model=' +
          self.queryparam.QModel +
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
            const fileName = downTime + '-在线设备使用册.xls'
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
        url: this.api + '/api/Yw_DeviceOnline/Get_DeviceOnlineInfo?Id=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.Id = res.data.data.id
            self.ruleForm.Status = res.data.data.status
            self.ruleForm.FacId = res.data.data.facName
            self.ruleForm.Model = res.data.data.model
            self.ruleForm.Code = res.data.data.param
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
  },
  created() {
    //调用获取列表页的方法
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
.el-main {
  height: calc(100vh - 336px);
}
</style>
