<template>
  <div id="v_ywArrivalRecord">
    <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="日期：">
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
                  icon="el-icon-search"
                  @click="getList()"
                  >查询</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="tools">
            <span v-show="false">当前路径：{{ BusinessType }} </span>

            <el-button
              size="small"
              class="el-button-iconButton"
              icon="el-icon-upload"
              style="text-overflow: initial"
              v-has="'fileMgr_handleUpload'"
              @click="handleUpload"
              >上传</el-button
            >
            <el-button
              size="small"
              class="el-button-iconButton"
              icon="el-icon-plus"
              style="text-overflow: initial"
              v-has="'fileMgr_handleAdd'"
              @click="handleAddFolder"
              >新建文件夹</el-button
            >
          </div>
        </el-header>

        <el-main>
          <el-table
            v-loading="listLoading"
            :data="list"
            :element-loading-text="elementLoadingText"
            @selection-change="setSelectRows"
            @row-click="handleRowdblclick"
          >
            <el-table-column
              show-overflow-tooltip
              type="selection"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              label="序号"
              type="index"
              width="50"
              align="center"
            ></el-table-column>

            <el-table-column
              show-overflow-tooltip
              prop="id"
              label=""
              align="center"
              v-if="false"
            ></el-table-column>

            <el-table-column
              show-overflow-tooltip
              prop="fileName"
              label="文档名称"
              align="center"
            >
              <template show-overflow-tooltip #default="{ row }">
                <i v-if="row.fileCType == 1" class="el-icon-files">{{
                  row.fileName
                }}</i>
                <i v-else class="el-icon-folder-opened">{{ row.fileName }}</i>
              </template>
            </el-table-column>

            <el-table-column
              show-overflow-tooltip
              prop="uploadTime"
              label="上传时间"
              align="center"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              prop="downloadCount"
              label="下载次数"
              align="center"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              prop="creator"
              label="录入人"
              align="center"
            ></el-table-column>
            <el-table-column
              show-overflow-tooltip
              align="center"
              label="操作"
              width="250"
            >
              <template show-overflow-tooltip #default="{ row }">
                <!-- <el-tooltip v-show="false" class="item" effect="dark" content="重命名" placement="top">
                              <el-button
                              size="mini"
                              class="btnStyle"
                              type="primary"
                              icon="el-icon-edit"
                              @click="handleEdit(row)"
                              ></el-button>
                          </el-tooltip> -->
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="删除"
                  placement="top"
                >
                  <el-button
                    v-has="'fileMgr_handleMultiplDel'"
                    size="mini"
                    class="btnStyle"
                    type="danger"
                    icon="el-icon-delete"
                    v-show="
                      row.fileName != '根目录' && row.fileName != '上一层'
                    "
                    @click="Singelmultipl(row)"
                  ></el-button>
                </el-tooltip>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="下载"
                  placement="top"
                >
                  <el-button
                    v-has="'fileMgr_handleDownload'"
                    class="btnStyle"
                    type="success"
                    size="mini"
                    icon="el-icon-download"
                    v-show="row.fileCType == 1"
                    @click="commonDownLoad(row)"
                  ></el-button>
                </el-tooltip>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            :current-page="page.pageNo"
            :page-size="page.pageSize"
            :layout="layout"
            :total="page.total"
            @size-change="getSizeChange"
            @current-change="getCurrentPage"
          ></el-pagination>
        </el-main>
      </el-container>
    </el-container>

    <div>
      <el-dialog title="新建文件夹" v-model:visible="isFolder" width="30%">
        <el-input v-model:value="FileName" autocomplete="off"></el-input>
        <el-button type="primary" @click="submitForm()">提交</el-button>
      </el-dialog>
    </div>

    <div>
      <el-dialog title="上传文件" v-model:visible="isUpload" width="50%">
        <RateUpload
          :BusinessType="BusinessType"
          :BusinessId="BusinessId"
          :Ismultiple="Ismultiple"
          :limit="limit"
          @uploadSuccess="uploadSuccess"
        ></RateUpload>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import RateUpload from '../../common/rateUploadFileMgr'

export default {
  data() {
    return {
      queryparam: {
        startDate: '',
        endDate: '',
      },
      BusinessType: '0',
      BusinessId: 1, //0：文件夹  1：文件
      limit: 1,
      Ismultiple: false,
      isFolder: false,
      isUpload: false,
      selectRows: [],
      list: null,
      listLoading: true,
      layout: 'total, sizes, prev, pager, next, jumper',
      elementLoadingText: '正在加载...',
      page: {
        //关于页码的相关参数
        pageShow: true, //是否显示
        total: 0, //总条数
        pageSize: 10, //每页条数
        pageNo: 1, //第几页
      },
      FileName: '', //wenjianjia
    }
  },
  components: {
    RateUpload,
  },
  created() {},
  mounted() {
    this.getList() //调用获取列表页的方法
  },
  methods: {
    //查询
    getList() {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Common/GetFileManagePageBySearch?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&id=' +
          self.BusinessType +
          '&startDate=' +
          self.queryparam.startDate +
          '&endDate=' +
          self.queryparam.endDate,
      })
        .then((res) => {
          if (res.status == 200) {
            self.list = res.data.data
            self.page.total = res.data.total
            self.listLoading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    handleAddFolder() {
      this.isFolder = true
    },
    handleUpload() {
      this.isUpload = true
    },
    setSelectRows(val) {
      this.selectRows = val
    },
    handleRowdblclick(row, column, event) {
      //双击行
      var self = this
      if (row.fileCType == 0) {
        //文件夹
        this.BusinessType = row.id
        this.$http({
          method: 'GET',
          url:
            this.api +
            '/api/Common/GetFileManagePageBySearch?pageSize=10000&pageIndex=1&id=' +
            row.id,
        })
          .then((res) => {
            if (res.status == 200) {
              self.list = res.data.data
              self.page.total = res.data.total
              self
                .$http({
                  method: 'GET',
                  url: self.api + '/api/Common/GetParentIdById?id=' + row.id,
                })
                .then((res) => {
                  if (res.status == 200) {
                    self.list.unshift(
                      {
                        id: 0,
                        keyId: 0,
                        fileCategory: null,
                        fileType: null,
                        fileCType: 0,
                        docType: '9',
                        usrId: 1,
                        creator: '',
                        uploadTime: '',
                        fileCode: null,
                        fileName: '根目录',
                        fileGuid: '',
                        fileUrl: '',
                        downloadCount: 0,
                        version: null,
                        keyWords: null,
                        backup: null,
                        status: null,
                      },
                      {
                        id: res.data.data,
                        keyId: res.data.data,
                        fileCategory: null,
                        fileType: null,
                        fileCType: 0,
                        docType: '9',
                        usrId: 1,
                        creator: '',
                        uploadTime: '',
                        fileCode: null,
                        fileName: '上一层',
                        fileGuid: '',
                        fileUrl: '',
                        downloadCount: 0,
                        version: null,
                        keyWords: null,
                        backup: null,
                        status: null,
                      }
                    )
                    self.listLoading = false
                  }
                })
                .catch((error) => {
                  console.log(error)
                })
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
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
    handleEdit() {},
    Singelmultipl(row) {
      var self = this
      this.$confirm('确认删除？')
        .then(function () {
          self.handleMultiplDel(row)
        })
        .catch(function () {})
    },
    handleMultiplDel(row) {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Common/handleRemoveFile?id=' + row.id,
      })
        .then((res) => {
          if (res.data.code == 200) {
            self.$message({
              message: res.data.message,
              type: 'info', //warning,success,info,error
            })
          }
          if (res.data.code == 300) {
            self.$message({
              message: res.data.message,
              type: 'warning', //warning,success,info,error
            })
          }
          self.getList()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    commonDownLoad(row) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          self.api +
          '/api/DownLoad/commonGetDownLoadPath?partialPath=' +
          row.fileUrl,
      })
        .then((res) => {
          if (res.data.code == 200) {
            location.href =
              self.api +
              '/api/DownLoad/commonDownLoad?fileName=' +
              row.fileName +
              '&path=' +
              res.data.data
            self
              .$http({
                method: 'GET',
                url: self.api + '/api/Common/downLoadFile?id=' + row.id,
              })
              .then((res) => {
                self.getList()
              })
              .catch((error) => {
                console.log(error)
              })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    uploadSuccess(obj) {
      if (obj.fileName != undefined) {
        this.$message({
          message: '上传成功！',
          type: 'success', //warning,success,info,error
        })
      } else {
        this.$message({
          message: '文件格式错误，上传失败！',
          type: 'error', //warning,success,info,error
        })
      }
      this.isUpload = false
      this.getList()
    },
    submitForm() {
      var self = this
      this.$http({
        method: 'GET',
        url:
          self.api +
          '/api/Upload/UploadFolder?BusinessType=' +
          self.BusinessType +
          '&FileName=' +
          self.FileName,
      })
        .then((res) => {
          if (res.data.code == 200) {
            self.isFolder = false
            self.getList()
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
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
.el-icon-folder-opened:before {
  content: '\E784';
  font-size: 20px !important;
  background: yellow !important;
}
.el-icon-files:before {
  content: '\E75B';
  font-size: 20px !important;
  background: #51ff09 !important;
}
</style>
