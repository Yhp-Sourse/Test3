<template>
  <div id="v_deviceOnlineInfo">
    <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="绑定账号：">
                <el-input
                  v-model:value="queryparam.UsrName"
                  placeholder="请绑定账号"
                ></el-input>
              </el-form-item>

              <el-form-item label="昵称(备注)：">
                <el-input
                  v-model:value="queryparam.HoneyName"
                  placeholder="请填写昵称"
                ></el-input>
              </el-form-item>

              <el-form-item label="状 态：">
                <el-select
                  v-model:value="queryparam.Status"
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
                  v-has="'wxts_handleSearch'"
                  @click="getList()"
                  >查询</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="tools">
            <el-button
              size="small"
              icon="el-icon-refresh"
              class="el-button--iconButton"
              v-has="'wxts_handleAnSync'"
              style="text-overflow: initial"
              @click="handleSync"
              >同步</el-button
            >
            <el-button
              size="small"
              icon="el-icon-s-promotion"
              class="el-button--iconButton"
              v-has="'wxts_handleDailySend'"
              style="text-overflow: initial"
              @click="handleSendReport"
              >日报推送</el-button
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
        :before-close="handleYzClose"
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
                <el-form-item label="用户姓名：" prop="userName">
                  <el-input
                    v-model:value="ruleForm.userName"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="手机号码：" prop="phone">
                  <el-input
                    v-model:value="ruleForm.phone"
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
                    >验证</el-button
                  >
                  <el-button @click="closeDig()">取消</el-button>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="9">&nbsp;</el-col>
          </el-row>
        </el-form>
      </el-dialog>

      <el-dialog
        title="配置推送"
        v-model:visible="dialogVisibleview1"
        width="50%"
        :before-close="handleConfigClose"
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
            <el-col :span="24">
              <div>
                <el-form-item label="推送类型：" prop="pushTypes">
                  <el-select
                    v-model:value="ruleForm1.pushTypes"
                    multiple
                    placeholder="请选择推送类型"
                  >
                    <el-option
                      v-for="item in pushType"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <div>
                <el-form-item label="推送站点：" prop="sStations">
                  <rateCascader
                    style="overflow: hidden"
                    :checkStrictly="false"
                    :selectOption="ruleForm1.sStations"
                    @selectOptionEvent="selectOptionEvent"
                  ></rateCascader>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="推送状态：" prop="isPush">
                  <el-select
                    v-model:value="ruleForm1.isPush"
                    placeholder="请选择推送状态"
                    style="width: 100%"
                  >
                    <el-option
                      v-for="item in pushStatusOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="9">&nbsp;</el-col>
            <el-col :span="6">
              <div>
                <el-form-item>
                  <el-button type="primary" @click="handleConfigSave()"
                    >保存</el-button
                  >
                  <el-button @click="closeConfigDig()">取消</el-button>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="9">&nbsp;</el-col>
          </el-row>
        </el-form>
      </el-dialog>

      <el-dialog
        :title="digTitle"
        v-model:visible="dialogVisibleSend"
        width="50%"
        :before-close="handleSendMessageClose"
      >
        <el-form
          :model="ruleForm3"
          status-icon
          :rules="rules3"
          ref="ruleForm3"
          label-width="100px"
          class="demo-ruleForm"
          size="mini"
        >
          <el-row>
            <el-col :span="24">
              <div>
                <el-form-item label="内容：" prop="content">
                  <el-input
                    v-model:value="ruleForm3.content"
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
                  <el-button type="primary" @click="handleSendMessage()"
                    >发送</el-button
                  >
                  <el-button @click="closeSendMessageDig()">取消</el-button>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="9">&nbsp;</el-col>
          </el-row>
        </el-form>
      </el-dialog>

      <el-dialog
        :title="digTitle"
        v-model:visible="dialogVisibleSendReport"
        width="50%"
        :before-close="handleSendDailyReportClose"
      >
        <el-form
          :model="ruleForm4"
          status-icon
          :rules="rules4"
          ref="ruleForm4"
          label-width="100px"
          class="demo-ruleForm"
          size="mini"
        >
          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="日报日期：" prop="choseYear">
                  <el-date-picker
                    v-model:value="ruleForm4.choseYear"
                    type="date"
                    value-format="yyyy-MM-dd"
                    placeholder="请选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-button
                  size="small"
                  type="primary"
                  class="el-button--iconButton"
                  style="text-overflow: initial"
                  @click="handlSearch()"
                  >查询</el-button
                >
                <el-button
                  size="small"
                  type="primary"
                  class="el-button--iconButton"
                  style="text-overflow: initial"
                  @click="handlSendDailyReport()"
                  >发送</el-button
                >
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div>
                <el-form-item label="推送内容：" prop="reportContent">
                  <el-input
                    v-model:value="ruleForm4.reportContent"
                    autocomplete="off"
                    type="textarea"
                    :rows="6"
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
import rateCascader from '../common/rateCascaderMultiple' //引入rateCascader组件
import rateTable from '../common/rataWxTable' //引入table组件

export default {
  name: 'v_deviceOnlineInfo',
  data() {
    return {
      //推送类型
      pushType: [],

      StatusOptions: [
        {
          value: '-1',
          label: '全部',
        },
        {
          value: '1',
          label: '开启',
        },
        {
          value: '0',
          label: '禁止',
        },
      ],

      //推送状态
      pushStatusOptions: [
        {
          value: true,
          label: '开启',
        },
        {
          value: false,
          label: '禁止',
        },
      ],

      openId: '',
      digTitle: '',
      functionIds: '',
      usrId: '',
      dialogVisible: false,
      dialogVisibleview1: false,
      dialogVisibleSend: false,
      dialogVisibleSendReport: false,
      titleName: '',

      //验证窗体相关变量定义
      ruleForm: {
        userName: '',
        phone: '',
      },

      //配置窗体相关定义
      ruleForm1: {
        pushTypes: [],
        sStations: [], // ['SS4201052','SS4201053']
        isPush: true,
      },

      ruleForm3: {
        content: '',
      },

      ruleForm4: {
        choseYear: '',
        reportContent: '',
      },

      rules: {
        userName: [
          { required: true, message: '请填写真实姓名', trigger: 'blur' },
        ],
        phone: [{ required: true, message: '请填写手机号', trigger: 'blur' }],
      },

      rules1: {
        pushTypes: [
          { required: true, message: '请选择推送类型', trigger: 'blur' },
        ],
        sStations: [{ required: true, message: '请选择站点', trigger: 'blur' }],
        isPush: [
          { required: true, message: '请选择推送状态', trigger: 'blur' },
        ],
      },
      rules3: {},
      rules4: {
        choseYear: '',
      },

      queryparam: {
        UsrName: '',
        HoneyName: '',
        Status: '-1',
      },

      page: {
        //关于页码的相关参数
        pageShow: true, //是否显示
        total: 0, //总条数
        pageSize: 150, //每页条数
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
        { prop: 'openId', label: '公众号ID', align: 'center', isShow: false },
        { prop: 'remark', label: '昵称(备注)', align: 'center', isShow: true },
        { prop: 'nickName', label: '昵称', align: 'center', isShow: false },
        { prop: 'country', label: '国家', align: 'center', isShow: false },
        { prop: 'province', label: '省', align: 'center', isShow: false },
        { prop: 'city', label: '市', align: 'center', isShow: false },
        {
          prop: 'headimgurl',
          label: '微信头像',
          align: 'center',
          isShow: false,
          formatter: (row, column, cellValue) => {
            return (
              '<img src= ' + row.headimgurl + '  width=50,heigth=50 ></img> '
            )
          },
        },
        { prop: 'userName', label: '绑定账号', align: 'center', isShow: true },
        {
          prop: 'groupName',
          label: '分组名称',
          align: 'center',
          isShow: false,
        },
        {
          prop: 'pushTypeName',
          label: '推送类别',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'sStationNames',
          label: '站点名称',
          align: 'center',
          isShow: true,
        },
        { prop: 'isPushShow', label: '状态', align: 'center', isShow: true },
      ], // 需要展示的列
      operates: {
        //操作栏
        width: 200,
        fixed: 'right',
        list: [
          {
            id: '1',
            label: '验证',
            bgColortype: 'success',
            show: true, //是否显示按钮
            hasbutton: 'wxts_handleChecking',
            className: 'success', //样式类名
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleChecking(index, row)
            },
          },
          {
            id: '2',
            label: '发送',
            show: true,
            hasbutton: 'wxts_handleSendMessage',
            bgColortype: 'success',
            className: 'success',
            disabled: false,
            method: (index, row) => {
              this.handlSend(index, row)
            },
          },
          {
            id: '3',
            label: '配置',
            show: true,
            hasbutton: 'wxts_handleConfig',
            bgColortype: 'success',
            className: 'success',
            disabled: false,
            method: (index, row) => {
              this.handlConfig(index, row)
            },
          },
        ],
      }, // 列操作按钮
    } //return ending
  },

  methods: {
    //发送日报弹出框关闭
    handleSendDailyReportClose(done) {
      this.$confirm('确认关闭?')
        .then((_) => {
          done()
          this.resetForm('ruleForm4')
        })
        .catch((_) => {})
    },

    //发送日报
    handlSendDailyReport() {
      var self = this
      debugger
      if (self.ruleForm4.reportContent == '') {
        self.$message({
          message: '日报发送内容不能为空！',
          type: 'warning', //success,warning,info,error
        })
        return
      }
      const Qs = require('qs')
      this.$http({
        headers: {
          deviceCode: 'A95ZEF1-47B5-AC90BF3',
        },
        method: 'post',
        url: self.api + '/api/Yw_WeChatPush/SendDailyReport',
        data: Qs.stringify(self.ruleForm4),
      })
        .then((res) => {
          if (res.status == 200) {
            self.dialogVisibleSendReport = !self.dialogVisibleSendReport
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
            self.resetForm('ruleForm4')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //查询某天日报信息
    handlSearch() {
      var self = this
      if (self.ruleForm4.choseYear == '') {
        self.$message({
          message: '请选择查询日期！',
          type: 'warning', //success,warning,info,error
        })
        return
      }
      this.$http({
        method: 'get',
        url:
          self.api +
          '/api/Yw_WeChatPush/GetDailyReportByTime?queryTime=' +
          self.ruleForm4.choseYear,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm4.reportContent = res.data.data
            if (self.ruleForm4.reportContent == '') {
              self.$message({
                message: '选择日期当天暂还没生成日报，请先生成日报！',
                type: 'warning', //success,warning,info,error
              })
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //日报推送
    handleSendReport() {
      var self = this
      self.digTitle = '日报推送'
      self.dialogVisibleSendReport = true
    },

    //发送信息
    handleSendMessage() {
      debugger
      var self = this
      if (self.ruleForm3.content == '') {
        self.$message({
          message: '请填写消息内容!',
          type: 'warning', //success,warning,info,error
        })
        return
      }
      this.$http({
        method: 'post',
        url:
          this.api +
          '/api/Yw_WeChatPush/SendMessage?openId=' +
          self.openId +
          '&content=' +
          self.ruleForm3.content,
      })
        .then((res) => {
          debugger
          if (res.status == 200) {
            self.dialogVisibleSend = false
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
            self.resetForm('ruleForm3')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //关闭发送消息弹出窗
    closeSendMessageDig() {
      var self = this
      self.dialogVisibleSend = !self.dialogVisibleSend
      self.resetForm('ruleForm3')
    },

    //发送消息框关闭
    handleSendMessageClose(done) {
      this.$confirm('确认关闭?')
        .then((_) => {
          done()
          this.resetForm('ruleForm3')
        })
        .catch((_) => {})
    },

    //点验证关闭弹出窗
    handleYzClose(done) {
      this.$confirm('确认关闭?')
        .then((_) => {
          done()
          this.resetForm('ruleForm')
        })
        .catch((_) => {})
    },

    //点配置关闭弹出窗
    handleConfigClose(done) {
      this.$confirm('确认关闭?')
        .then((_) => {
          done()
          this.resetForm('ruleForm1')
        })
        .catch((_) => {})
    },

    //弹出发送消息弹出窗
    handlSend(index, row) {
      var self = this
      self.openId = row.openId
      self.digTitle = '消息发送'
      self.dialogVisibleSend = true
    },

    //站点树选择
    selectOptionEvent(val) {
      this.ruleForm1.sStations = val
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
          ids += item.usr_id + ','
        } else {
          ids += item.usr_id
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
        url: self.api + '/api/Yw_UsrManage/DeleteUsr?usrId=' + ids,
      })
        .then((res) => {
          if (res.status == 200) {
            self.getList()
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
            self.options.loading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //提交进行验证
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
              '/api/Yw_WeChatPush/CheckingUsrInfo?openId=' +
              self.openId,
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

    //保存微信消息推送配置
    handleConfigSave() {
      var self = this
      var stationIds = ''
      var pushTypeIds = ''
      this.ruleForm1.sStations.forEach((o) => {
        stationIds += o + ','
      })
      this.ruleForm1.pushTypes.forEach((o) => {
        pushTypeIds += o + ','
      })

      var objModel = {}
      objModel.SStations = stationIds.substring(0, stationIds.length - 1)
      objModel.PushTypes = pushTypeIds.substring(0, pushTypeIds.length - 1)
      objModel.IsPush = self.ruleForm1.isPush
      objModel.OpenId = self.openId

      var jsonStr = JSON.stringify(objModel)
      this.$http({
        method: 'GET',
        url:
          self.api +
          '/api/Yw_WeChatPush/SaveWeChatPushConfig?jsonStr=' +
          jsonStr,
      })
        .then((res) => {
          if (res.status == 200) {
            self.dialogVisibleview1 = false
            self.getList()
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
        })
        .catch((error) => {})
      self.resetForm('ruleForm1')
    },

    //重置框
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

    //关闭验证弹出框
    closeDig() {
      var self = this
      self.dialogVisible = !self.dialogVisible
      self.resetForm('ruleForm')
    },

    //关闭配置弹出框
    closeConfigDig() {
      var self = this
      self.dialogVisibleview1 = !self.dialogVisibleview1
      self.resetForm('ruleForm1')
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

    //同步
    handleSync() {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_WeChatPush/SyncWeiXinUsr',
      })
        .then((res) => {
          if (res.status == 200) {
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
            //刷新列表
            self.getList()
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //验证
    handleChecking(index, row) {
      var self = this
      this.getWeChatInfoById(row.openId)
      self.openId = row.openId
      self.digTitle = '验证信息'
      self.dialogVisible = true
    },

    //依据个人微信端口号查找绑定账号与手机号
    getWeChatInfoById(id) {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_WeChatPush/GetUsrCheckInfo?openId=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.userName = res.data.data[0].userName
            self.ruleForm.phone = res.data.data[0].phone
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //设置配置信息
    handlConfig(index, row) {
      var self = this
      //获取已选择的推送类型,推送站点类型
      self.GetWeChatPushConfig(row.openId)
      //获取所有推送类型
      self.GetAllPushType()
      self.openId = row.openId
      self.dialogVisibleview1 = true
    },

    //获取配置的站点以及是否推送
    GetWeChatPushConfig(id) {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_WeChatPush/GetWeChatPushConfig?openId=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm1.sStations = res.data.data[0].stationList
            self.ruleForm1.isPush = res.data.data[0].isPush
            self.ruleForm1.pushTypes = res.data.data[0].pushList
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //获取所有推送类型
    GetAllPushType() {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_WeChatPush/GetPushType',
      })
        .then((res) => {
          if (res.status == 200) {
            self.pushType = res.data.data
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
          '/api/Yw_WeChatPush/GetWeChatPushPageList?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&usrName=' +
          self.queryparam.UsrName +
          '&nickName=' +
          self.queryparam.HoneyName +
          '&isPush=' +
          self.queryparam.Status,
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
    rateTable,
    rateCascader,
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
