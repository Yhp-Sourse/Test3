<template>
  <div id="v_deviceOnlineInfo">
    <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="状态">
                <el-select
                  v-model:value="Status"
                  placeholder="请选择状态"
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
              <el-form-item class="btn">
                <el-button
                  type="primary"
                  icon="el-icon-search"
                  v-has="'operationCost_handleSearch'"
                  @click="getList()"
                  >查询</el-button
                >
                <el-button
                  type="primary"
                  icon="el-icon-download"
                  @click="download()"
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
              v-has="'operationCost_handleAdd'"
              style="text-overflow: initial"
              @click="handleAdd"
              >添加</el-button
            >
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-delete"
              v-has="'operationCost_handleMultiplDel'"
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
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="运维时间：">
                <el-date-picker
                  v-model:value="choseYear"
                  type="year"
                  format="yyyy"
                  value-format="yyyy"
                  placeholder="请选择年"
                >
                </el-date-picker>
              </el-form-item>
            </el-form>
          </div>
        </el-header>

        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          size="mini"
        >
          <el-table :data="ruleForm.unitList" style="width: 100%">
            <el-table-column prop="unitName" label="运维单位名称" width="180">
              <template v-slot="scope">
                <el-input
                  v-model:value="scope.row.unitName"
                  placeholder=""
                  :disabled="true"
                ></el-input>
              </template>
            </el-table-column>

            <el-table-column
              prop="itemCost"
              label="单站费用/月(元)"
              width="180"
            >
              <template v-slot="scope">
                <el-input
                  v-model:value="scope.row.itemCost"
                  placeholder="请输入价格"
                ></el-input>
              </template>
            </el-table-column>

            <el-table-column prop="itemRemark" label="备注">
              <template v-slot="scope">
                <el-input
                  v-model:value="scope.row.itemRemark"
                  placeholder="限500字以内"
                  type="textarea"
                  :rows="2"
                ></el-input>
              </template>
            </el-table-column>
          </el-table>
          <el-footer>
            <el-button
              size="small"
              class="el-button--iconButton"
              style="text-overflow: initial"
              @click="submitAddConfig()"
              >保存</el-button
            >
            <el-button
              size="small"
              class="el-button--iconButton"
              style="text-overflow: initial"
              @click="closeDig()"
              >取消</el-button
            >
          </el-footer>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import rateTable from '../common/rateTable' //引入table组件

export default {
  name: 'v_deviceOnlineInfo',
  data() {
    return {
      choseYear: '',
      Status: -1,
      StatusOptions: [
        {
          value: -1,
          label: '全部',
        },
        {
          value: 1,
          label: '待提交',
        },
        {
          value: 5,
          label: '已生效',
        },
      ],

      //绑定下拉框信息
      digTitle: '',
      dialogVisible: false,
      titleName: '',

      //弹出窗相关变量定义
      ruleForm: {
        unitList: [],
      },

      rules: {
        itemCost: [
          { required: true, message: '请输入运维费用', trigger: 'blur' },
        ],
      },
      queryparam: {},
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
        { prop: 'id', label: 'id', align: 'center', isShow: false },
        {
          prop: 'show_Status',
          label: '状态',
          width: 180,
          align: 'center',
          isShow: true,
        },
        { prop: 'year', label: '运维年份', align: 'center', isShow: true },
        { prop: 'th', label: '武汉天虹/月(元)', align: 'center', isShow: true },
        { prop: 'createdBy', label: '添加人', align: 'center', isShow: true },
        {
          prop: 'show_CreatedTime',
          label: '添加时间',
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
            hasbutton: 'operationCost_handleEdit',
            className: 'success', //样式类名
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleEdit(index, row)
            },
          },
        ],
      }, // 列操作按钮
    } //return ending
  },

  methods: {
    //保存运维费用
    submitAddConfig() {
      var self = this
      if (self.choseYear == '') {
        self.$message({
          message: '请选择运维年份!',
          type: 'warning',
        })
        return
      }
      for (var i = 0; i < this.ruleForm.unitList.length; i++) {
        if (this.ruleForm.unitList[i].itemCost == null) {
          self.$message({
            message: '运维费用必填!',
            type: 'warning',
          })
          return
        }
        if (!!isNaN(this.ruleForm.unitList[i].itemCost)) {
          self.$message({
            message: '费用必须是数字!',
            type: 'warning',
          })
          return
        }
      }
      var jsonStr = JSON.stringify(this.ruleForm.unitList)
      this.$http({
        method: 'GET',
        url:
          self.api +
          '/api/Yw_CostConfig/YwCostConfigSubmit?jsonStr=' +
          jsonStr +
          '&year=' +
          this.choseYear,
      })
        .then((res) => {
          if (res.status == 200) {
            self.dialogVisible = false
            self.getList()
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
        })
        .catch((error) => {})
      //清空
      this.choseYear = ''
    },

    //弹出窗关闭时的效果
    handleClose(done) {
      this.$confirm('确认关闭?')
        .then((_) => {
          done()
          this.resetForm('ruleForm')
          this.choseYear = ''
        })

        .catch((_) => {})
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
        ids += item.id + ','
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
        url:
          self.api +
          '/api/Yw_CostConfig/DeleteOperationCostConfig?conFigId=' +
          ids,
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

    //重置框
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

    //关闭弹出框
    closeDig() {
      var self = this
      self.dialogVisible = !self.dialogVisible
      //清空
      this.choseYear = ''
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
      self.digTitle = '添加运维费用'
      self.getAllUnits()
      self.dialogVisible = true
    },

    //编辑
    handleEdit(index, row) {
      //操作栏编辑按钮
      var self = this
      this.getYunCostById(row.id, row.year)
      self.digTitle = '编辑运维费用'
      self.dialogVisible = true
    },

    //获取所有运维单位
    getAllUnits() {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_Unit/GetAllUnit',
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.unitList = res.data.data
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //查询
    getList(obj) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_CostConfig/GetCostConfigPageList?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&status=' +
          self.Status,
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

    //依据运维id获取运维费用信息
    getYunCostById(id, year) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          self.api +
          '/api/Yw_CostConfig/GetYwCostById?id=' +
          id +
          '&year=' +
          year,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.unitList = res.data.data
            self.choseYear = res.data.data[0].year
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
          '/api/Yw_CostConfig/GetCostConfigDownLoad?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&status=' +
          self.Status,
      })
        .then((res) => {
          if (res.status == 200) {
            let blob = new Blob([res.data], {
              type: 'application/vnd.ms-excel',
            })
            let downTime = self.downLoadDate()
            const fileName = downTime + '-运维费用.xls'
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
.el-main {
  height: calc(100vh - 336px);
}
.el-select {
  width: 100%;
}
</style>
