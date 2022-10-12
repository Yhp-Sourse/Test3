<template>
  <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
    <el-aside width="250px">
      <treeSStation @checkedNodes="getSearchStations"></treeSStation>
    </el-aside>

    <el-container>
      <el-header>
        <div class="search">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="审核状态:">
              <el-select
                v-model:value="queryparam.judgeStatus"
                placeholder="请选择审核状态"
                style="width: 100%"
              >
                <el-option
                  v-for="item in JudgeStatusOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="计划状态:">
              <el-select
                v-model:value="queryparam.isGenTaskStatus"
                placeholder="请选择计划状态"
                style="width: 100%"
              >
                <el-option
                  v-for="item in ywPlanStatusOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="计划月份：">
              <el-date-picker
                v-model:value="queryparam.planMonth"
                type="month"
                :clearable="true"
                value-format="yyyy-MM"
                placeholder="请选择日期"
              >
              </el-date-picker>
            </el-form-item>

            <el-link
              type="primary"
              style="line-height: 40px"
              @click="downTemplate"
              >运维计划导入模板下载</el-link
            >
            <el-form-item label="">
              <el-upload
                class="upload-demo"
                :limit="1"
                :action="action"
                :headers="headers"
                :before-upload="beforeUpload"
                :on-success="uploadSuccess"
              >
                <el-button
                  size="small"
                  v-has="'ywPlan_handleImport'"
                  icon="el-icon-upload2"
                  type="primary"
                  >模板导入</el-button
                >
              </el-upload>
            </el-form-item>

            <el-form-item class="btn">
              <el-button
                type="primary"
                v-has="'ywPlan_handleSearch'"
                icon="el-icon-search"
                @click="getList()"
                >查询</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div class="tools">
          <el-button
            size="small"
            v-has="'ywPlan_handleGenerate'"
            class="el-button--iconButton"
            icon="el-icon-upload2"
            style="text-overflow: initial"
            @click="handleUploadAllYearPlan"
            >上传/查看全年运维计划</el-button
          >
          <el-button
            size="small"
            v-has="'ywPlan_handleGenerate'"
            class="el-button--iconButton"
            icon="el-icon-plus"
            style="text-overflow: initial"
            @click="handleGenTask"
            >生成任务</el-button
          >
          <el-button
            size="small"
            v-has="'ywPlan_handleMultiplDel'"
            class="el-button--iconButton"
            icon="el-icon-delete"
            style="text-overflow: initial"
            @click="handleMultiplDel"
            >删除</el-button
          >
          <el-button
            size="small"
            v-has="'ywPlan_handleCheck'"
            class="el-button--iconButton"
            icon="el-icon-check"
            style="text-overflow: initial"
            @click="handleJudge"
            >审核</el-button
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

    <!--审核-->
    <div>
      <el-dialog
        title="任务审核"
        v-model:visible="aduitFormDialogVisible"
        width="30%"
      >
        <el-form
          :model="aduitForm"
          status-icon
          ref="aduitForm"
          label-width="100px"
          class="demo-aduitForm"
          size="mini"
        >
          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="审核结果：" prop="Status">
                  <el-radio-group v-model:value="aduitForm.Status">
                    <el-radio label="1">通过</el-radio>
                    <el-radio label="2">不通过</el-radio>
                  </el-radio-group>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div>
                <el-form-item label="相关意见：" prop="Remark">
                  <el-input
                    type="textarea"
                    v-model:value="aduitForm.Remark"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">&nbsp;</el-col>
            <el-col :span="10">
              <div>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('aduitForm')"
                    >确定</el-button
                  >
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">&nbsp;</el-col>
          </el-row>
        </el-form>
      </el-dialog>
    </div>

    <div>
      <el-dialog
        title="上传全年运维计划"
        v-model:visible="diaologAllYearPlan"
        width="50%"
      >
        <div class="image">
          <el-image
            v-for="(f, index) in imgArr"
            :key="index"
            style="margin: 2px; width: 200px; height: 200px"
            :src="f"
            :preview-src-list="imgArr"
          ></el-image>
        </div>
        <rateUpload
          :limit="1"
          :Ismultiple="false"
          :BusinessId="2021"
          :BusinessType="98"
          @uploadSuccess="uploadAllYearPlanSuccess"
        ></rateUpload>
      </el-dialog>
    </div>
  </el-container>
</template>

<script>
import rateTable from '../common/rataWxTable' //引入table组件
import rateUpload from '../common/rateUpload' //引入rateCascader组件
import treeSStation from '../common/treeSStation' //引入treeSStation组件

export default {
  data() {
    return {
      diaologAllYearPlan: false,
      imgArr: [],
      headers: { authorization: localStorage.getItem('accessToken') },
      action: this.api + '/api/Export/ExportTemp',
      page: {
        //关于页码的相关参数
        pageShow: true, //是否显示
        total: 0, //总条数
        pageSize: 150, //每页条数
        pageNo: 1, //第几页
      },

      //运维计划生成计划状态
      ywPlanStatusOptions: [
        {
          value: '-1',
          label: '全部',
        },
        {
          value: '1',
          label: '已生成',
        },
        {
          value: '0',
          label: '未生成',
        },
      ],

      //运维计划审核状态
      JudgeStatusOptions: [
        {
          value: '-1',
          label: '全部',
        },
        {
          value: '0',
          label: '未审核',
        },
        {
          value: '1',
          label: '审核通过',
        },
        {
          value: '2',
          label: '审核不通过',
        },
      ],

      aduitFormDialogVisible: false,
      aduitForm: {
        Remark: '',
        Status: '1',
        PlanNo: '',
      },

      queryparam: {
        isGenTaskStatus: '-1',
        chooseStationIds: '',
        judgeStatus: '-1',
        planMonth: '2022-04',
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
          prop: 'show_Status',
          label: '计划状态',
          align: 'center',
          isShow: true,
          width: 100,
        },
        {
          prop: 'planNo',
          label: '计划编号',
          align: 'center',
          isShow: true,
          width: 150,
        },
        { prop: 'city', label: '城市', align: 'center', isShow: true },
        {
          prop: 'sStationName',
          label: '站点名称',
          align: 'center',
          isShow: true,
          width: 150,
        },
        { prop: 'createdBy', label: '创建人', align: 'center', isShow: true },
        {
          prop: 'createdTime',
          label: '创建时间',
          align: 'center',
          isShow: true,
          width: 150,
          formatter(row, column, cellValue) {
            if (row.createdTime) {
              return row.createdTime.replace('T', ' ')
            }
          },
        },
        {
          prop: 'nextAuditerName',
          label: '站点负责人',
          align: 'center',
          isShow: true,
          width: 100,
        },
        {
          prop: 'isGenTask',
          label: '是否生成',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            return row.isGenTask == 1 ? '是' : '否'
          },
        },
        {
          prop: 'planMonth',
          label: '计划月',
          align: 'center',
          isShow: true,
          width: 100,
          formatter: (row, column, cellValue) => {
            if (row.planMonth) {
              return row.planMonth.substring(0, 7)
            }
          },
        },
        {
          prop: 'weekNum1',
          label: '第一周',
          align: 'center',
          isShow: true,
          width: 150,
        },
        {
          prop: 'weekNum2',
          label: '第二周',
          align: 'center',
          isShow: true,
          width: 150,
        },
        {
          prop: 'weekNum3',
          label: '第三周',
          align: 'center',
          isShow: true,
          width: 150,
        },
        {
          prop: 'weekNum4',
          label: '第四周',
          align: 'center',
          isShow: true,
          width: 150,
        },
        {
          prop: 'weekNum5',
          label: '第五周',
          align: 'center',
          isShow: true,
          width: 150,
        },
        {
          prop: 'monthNum',
          label: '月检查',
          align: 'center',
          isShow: true,
          width: 150,
        },
        {
          prop: 'monthNum2',
          label: '两月检查',
          align: 'center',
          isShow: true,
          width: 150,
        },
        {
          prop: 'quarterNum',
          label: '季度检查',
          align: 'center',
          isShow: true,
          width: 150,
        },
        {
          prop: 'halfYearNum',
          label: '半年检查',
          align: 'center',
          isShow: true,
          width: 150,
        },
        {
          prop: 'yearNum',
          label: '年检查',
          align: 'center',
          isShow: true,
          width: 150,
        },
      ], // 需要展示的列结束
      operates: {
        //操作栏
        width: 400,
        fixed: 'right',
        list: [],
      }, // 列操作按钮
    } //return ending
  },
  methods: {
    getFlieStream() {
      // partialPath='/Upload/Koala.jpg';
      var self = this
      self.imgArr = []
      // var fileURL='/Upload/1/2021050809285443/2021全年运维计划HD.png';
      var fileURL = '/Upload/1/2021050809285443/2022HD.png'
      this.$http({
        method: 'GET',
        responseType: 'blob',
        url: self.api + '/api/BBS/GetFlieStream?partialPath=' + fileURL,
      })
        .then((res) => {
          self.imgArr.push(window.URL.createObjectURL(res.data))
        })
        .catch((error) => {
          console.log(error)
        })
    },
    //数据中心进行审核
    handleJudge() {
      var self = this
      var ids = ''
      var tips = ''
      if (this.handleSelection == '') {
        self.$message({
          message: '请选择要审核的任务！',
          type: 'warning', //success,warning,info,error
        })
        return
      }
      this.handleSelection.forEach((item, index) => {
        if (item.status == 0 && item.isGenTask == 0) {
          //表示未审核并且未生成任务
          ids += item.planNo + ','
        } else {
          tips +=
            '选中第' +
            (index + 1) +
            '行不能审核,只有未审核未生成任务的计划才能进行审核;'
        }
      })
      if (tips != '') {
        self.$message({
          message: tips,
          type: 'warning', //success,warning,info,error
        })
        return
      } else {
        self.aduitFormDialogVisible = true
        self.aduitForm.PlanNo = ids
      }
    },

    //提交审核结果
    submitForm(formName) {
      var self = this
      const Qs = require('qs')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http({
            headers: {
              deviceCode: 'A95ZEF1-47B5-AC90BF3',
            },
            method: 'post',
            url: self.api + '/api/Yw_TaskPlan/TaskPlanJudge',
            data: Qs.stringify(self.aduitForm),
          })
            .then((res) => {
              if (res.status == 200) {
                self.aduitFormDialogVisible = !self.aduitFormDialogVisible
                self.getList()
                self.$message({
                  message: res.data.message,
                  type: res.data.type, //warning,success,info,error
                })
                self.resetForm('aduitForm')
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

    beforeUpload(file) {
      var self = this
      var ext = file.name
        .substring(file.name.lastIndexOf('.') + 1, file.name.length)
        .toLowerCase()
      const isLt4M = file.size / 1024 / 1024 <= 2 //图片大小不超过2MB
      if (ext != 'xls' && ext != 'xlsx') {
        this.$message.error('上传文件格式不对,请下载模板再导入!')
        return false
      }
    },
    uploadSuccess() {
      this.$message({
        message: '导入成功！',
        type: 'success', //success,warning,info,error
      })
      this.getList() //调用获取列表页的方法
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
    handleEdit(index, row) {
      //操作栏编辑按钮
    },
    handledel(index, row) {
      //操作栏删除按钮
    },
    //上传全年运维计划附件
    handleUploadAllYearPlan() {
      this.diaologAllYearPlan = true
      this.getFlieStream()
    },
    uploadAllYearPlanSuccess(file) {},
    //生成任务
    handleGenTask() {
      var self = this
      var ids = ''
      var tips = ''
      if (this.handleSelection == '') {
        self.$message({
          message: '请选择要生成任务的数据！',
          type: 'warning', //success,warning,info,error
        })
        return
      }
      this.handleSelection.forEach((item, index) => {
        //只能撤回待处理后的状态 ---   待处理、处理中、待审核  -----已完成无法撤回
        if (item.status == 1 && item.isGenTask == 0) {
          //表示审核通过并且未生成任务
          if (index != self.handleSelection.length - 1) {
            ids += item.planNo + '|' + item.sStation + ','
          } else {
            ids += item.planNo + '|' + item.sStation
          }
        } else {
          tips +=
            '选中第' +
            (index + 1) +
            '行不能生成任务,只有审核通过,且未生成的任务的计划才能生成任务;'
        }
      })

      if (tips != '') {
        self.$message({
          message: tips,
          type: 'warning', //success,warning,info,error
        })
        return
      } else {
        this.$confirm('确认生成任务？')
          .then(function () {
            self.handlTaskPlanAudit_GenTask(ids)
          })
          .catch(function () {})
      }
    },

    //生成任务
    handlTaskPlanAudit_GenTask(ids) {
      var self = this
      var obj = {}
      obj.PlanNo = ids
      const Qs = require('qs')
      this.$http({
        headers: {
          deviceCode: 'A95ZEF1-47B5-AC90BF3',
        },
        method: 'post',
        url: self.api + '/api/Yw_TaskPlan/TaskPlanAudit_GenTask',
        data: Qs.stringify(obj),
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
          ids += item.planNo + ','
        } else {
          ids += item.planNo
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
        url: self.api + '/api/Yw_TaskPlan/Delmultipl?ids=' + ids,
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
    downTemplate() {
      this.commonDownLoad(
        '运维计划导入模板.xls',
        '/Upload/运维计划导入模板.xls'
      )
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
      self.options.loading = true
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_TaskPlan/TaskPlan_FindByPage?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&isGenTaskStatus=' +
          self.queryparam.isGenTaskStatus +
          '&judgeStatus=' +
          self.queryparam.judgeStatus +
          '&SStations=' +
          self.queryparam.chooseStationIds +
          '&planMonth=' +
          self.queryparam.planMonth,
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
  },
  components: {
    rateTable,
    rateUpload,
    treeSStation,
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
.upload-demo {
  width: 80px;
  height: 40px;
}
</style>
