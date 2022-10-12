<template>
  <div id="v_deviceOnlineInfo">
    <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="标题：">
                <el-input
                  v-model:value="queryparam.noticeTitle"
                  placeholder="请输入标题"
                ></el-input>
              </el-form-item>

              <el-form-item label="创建时间：">
                <el-date-picker
                  v-model:value="queryparam.startTime"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="请选择日期"
                >
                </el-date-picker>
                至
                <el-date-picker
                  v-model:value="queryparam.endTime"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="请选择日期"
                >
                </el-date-picker>
              </el-form-item>

              <el-form-item class="btn">
                <el-button
                  type="primary"
                  icon="el-icon-search"
                  v-has="'noticeMgr_handleSearch'"
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
              v-has="'noticeMgr_handleAdd'"
              style="text-overflow: initial"
              @click="handleAdd"
              >添加</el-button
            >
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-delete"
              v-has="'noticeMgr_handleMultiplDel'"
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
                <el-form-item label="通知标题：" prop="Title">
                  <el-input
                    v-model:value="ruleForm.Title"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="通知类型：" prop="NoticeType">
                  <el-select
                    v-model:value="ruleForm.NoticeType"
                    placeholder="请选择通知类型"
                    style="width: 100%"
                  >
                    <el-option
                      v-for="(item, index) in ruleForm.NoticeTypeOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>

            <el-col :span="8">
              <div>
                <el-form-item label="通知状态：" prop="Status">
                  <el-radio-group v-model:value="ruleForm.Status">
                    <el-radio :label="1">待发布</el-radio>
                    <el-radio :label="2">已发布</el-radio>
                  </el-radio-group>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <div>
                <el-form-item label="通知内容：" prop="Content">
                  <el-input
                    v-model:value="ruleForm.Content"
                    autocomplete="off"
                    type="textarea"
                    :rows="4"
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

    <el-dialog
      title="上传附件"
      v-model:visible="dialogVisibleview1"
      width="30%"
      :before-close="handleConfigClose"
    >
      <el-form
        :model="ruleForm1"
        status-icon
        :rules="rules1"
        ref="ruleForm1"
        label-width="100px"
        class="demo-ruleForm1"
        size="mini"
      >
        <el-row>
          <el-col :span="12">
            <div>
              <el-form-item v-show="true" label="相关附件：" prop="FileURL">
                <rateUpload
                  :limit="1"
                  :Ismultiple="false"
                  :BusinessId="ruleForm1.NoticeId"
                  :BusinessType="31"
                  @uploadSuccess="uploadSuccess"
                ></rateUpload>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">&nbsp;</el-col>
          <el-col :span="6">
            <div>
              <el-form-item>
                <!--<el-button type="primary" @click="handleConfigSave()">保存</el-button>-->
                <el-button @click="closeConfigDig()">关闭</el-button>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="9">&nbsp;</el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import rateTable from '../common/rateTable' //引入table组件
import rateUpload from '../common/rateNoticeUpload' //引入rateCascader组件

export default {
  name: 'v_deviceOnlineInfo',
  data() {
    return {
      //绑定下拉框信息
      digTitle: '',
      iconList: [],
      dialogVisible: false,
      dialogVisibleview1: false,
      titleName: '',

      ruleForm1: {
        NoticeId: '',
        FileName: '',
        FileURL: '',
      },

      //弹出窗相关变量定义
      ruleForm: {
        NoticeId: '',
        Title: '',
        NoticeType: 1,
        Content: '',
        Status: '',

        NoticeTypeOptions: [
          {
            value: 1,
            label: '日常通知',
          },
        ],
      },

      rules: {
        Title: [{ required: true, message: '请输入通知标题', trigger: 'blur' }],
        NoticeType: [
          { required: true, message: '请选择通知类型', trigger: 'blur' },
        ],
      },

      rules1: {},

      queryparam: {
        noticeTitle: '',
        startTime: '',
        endTime: '',
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
        { prop: 'noticeId', label: '通知id', align: 'center', isShow: false },
        {
          prop: 'show_NoticeType',
          label: '类型',
          width: 180,
          align: 'center',
          isShow: true,
        },
        { prop: 'title', label: '标题', align: 'center', isShow: true },
        { prop: 'show_Status', label: '状态', align: 'center', isShow: true },
        { prop: 'content', label: '内容', align: 'center', isShow: true },
        { prop: 'createdBy', label: '创建人', align: 'center', isShow: true },
        {
          prop: 'show_CreateTime',
          label: '创建时间',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'fileName',
          label: '附件',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            if (row.fileName == '' || row.fileName == null) {
              return '--'
            } else {
              return '<a style="color:blue;">' + row.fileName + '</a>'
            }
          },
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
            hasbutton: 'noticeMgr_handleEdit',
            className: 'success', //样式类名
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleEdit(index, row)
            },
          },
          {
            id: '2',
            label: '上传附件',
            bgColortype: 'success',
            show: true, //是否显示按钮
            hasbutton: 'noticeMgr_handleUpload',
            className: 'success', //样式类名
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleUpload(index, row)
            },
          },
        ],
      }, // 列操作按钮
    } //return ending
  },

  methods: {
    //列点击事件
    handleCellClick(obj) {
      //单元格单击事件处理函数
      switch (obj.column.label) {
        case '附件':
          if (obj.row.fileName != null) {
            this.commonDownLoad(obj.row.fileName, obj.row.fileURL)
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
          if (res.data.code == 404) {
            self.$message({
              message: '下载文件已被删除，无法下载！',
              type: 'warning', //success,warning,info,error
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //上传附件
    handleUpload(index, row) {
      var self = this
      self.ruleForm1.NoticeId = row.noticeId
      self.dialogVisibleview1 = true
    },

    closeConfigDig() {
      var self = this
      self.dialogVisibleview1 = !self.dialogVisibleview1
      self.resetForm('ruleForm1')
    },

    handleConfigClose(done) {
      this.$confirm('确认关闭?')
        .then((_) => {
          done()
          this.resetForm('ruleForm1')
        })
        .catch((_) => {})
    },

    //更新附件
    uploadSuccess(file) {
      var self = this
      this.ruleForm1.FileName = file.fileName
      this.ruleForm1.FileURL = file.fileUrl
      //更新数据项
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_NoticeMgr/YwUpdateNoticeFujian?noticeId=' +
          this.ruleForm1.NoticeId +
          '&fileName=' +
          this.ruleForm1.FileName +
          ' &fileUrl=' +
          this.ruleForm1.FileURL,
      })
        .then((res) => {
          if (res.status == 200) {
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
          self.getList()
          this.ruleForm1.FileName = ''
          this.ruleForm1.FileURL = ''
        })
        .catch((error) => {
          console.log(error)
        })
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
          ids += item.noticeId + ','
        } else {
          ids += item.noticeId + ','
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
        url: self.api + '/api/Yw_NoticeMgr/DeleteNotice?noticeId=' + ids,
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
            url: self.api + '/api/Yw_NoticeMgr/YwNoticeSubmit',
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
      if (self.ruleForm.NoticeId != '') {
        self.resetForm('ruleForm') //重置表单
      }
      self.ruleForm.NoticeId = ''
      self.ruleForm.Status = 1
      self.digTitle = '添加通知'
      self.dialogVisible = true
    },

    //编辑
    handleEdit(index, row) {
      //操作栏编辑按钮
      var self = this
      this.getNoticeInfoById(row.noticeId)
      self.digTitle = '编辑通知'
      self.dialogVisible = true
    },

    //查询
    getList(obj) {
      var self = this
      //判断查询时间
      if (self.queryparam.startTime > self.queryparam.endTime) {
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
          '/api/Yw_NoticeMgr/GetAllNotice?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&Title=' +
          self.queryparam.noticeTitle +
          '&StartTime=' +
          self.queryparam.startTime +
          ' &EndTime=' +
          self.queryparam.endTime,
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

    //依据按钮id获取通知信息
    getNoticeInfoById(id) {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_NoticeMgr/GetNoticeById?noticeId=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.NoticeId = res.data.data.noticeId
            self.ruleForm.Title = res.data.data.title
            self.ruleForm.NoticeType = res.data.data.noticeType
            self.ruleForm.Status = res.data.data.status
            self.ruleForm.Content = res.data.data.content
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
          '/api/Yw_NoticeMgr/GetAllNoticeDownLoad?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&Title=' +
          self.queryparam.noticeTitle +
          '&StartTime=' +
          self.queryparam.startTime +
          ' &EndTime=' +
          self.queryparam.endTime,
      })
        .then((res) => {
          if (res.status == 200) {
            let blob = new Blob([res.data], {
              type: 'application/vnd.ms-excel',
            })
            let downTime = self.downLoadDate()
            const fileName = downTime + '-通知管理.xls'
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
    rateUpload,
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
