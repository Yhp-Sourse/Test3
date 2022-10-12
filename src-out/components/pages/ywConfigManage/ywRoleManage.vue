<template>
  <div id="v_deviceOnlineInfo">
    <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="角色名称">
                <el-input
                  v-model:value="queryparam.RoleName"
                  placeholder="角色名称"
                ></el-input>
              </el-form-item>

              <el-form-item class="btn">
                <el-button
                  type="primary"
                  icon="el-icon-search"
                  v-has="'role_handleSearch'"
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
              v-has="'role_handleAdd'"
              style="text-overflow: initial"
              @click="handleAdd"
              >添加</el-button
            >
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-delete"
              v-has="'role_handleMultiplDel'"
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
      <el-dialog :title="digTitle" v-model:visible="dialogVisible" width="50%">
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
                <el-form-item label="角色名称：" prop="role_name">
                  <el-input
                    v-model:value="ruleForm.role_name"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="角色编码：" prop="role_code">
                  <el-input
                    v-model:value="ruleForm.role_code"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="角色排序：" prop="role_order">
                  <el-input
                    v-model:value="ruleForm.role_order"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <el-form-item label="是否启用：" prop="role_status">
                  <el-radio-group v-model:value="ruleForm.role_status">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="0">否</el-radio>
                  </el-radio-group>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <div>
                <el-form-item label="角色描述：" prop="role_beizhu">
                  <el-input
                    v-model:value="ruleForm.role_beizhu"
                    autocomplete="off"
                    type="textarea"
                    :rows="3"
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

      <el-dialog
        title="权限配置"
        v-model:visible="dialogVisibleview1"
        width="30%"
        height="30%"
      >
        <el-header>
          <el-button
            size="small"
            class="el-button--iconButton"
            icon="el-icon-plus"
            style="text-overflow: initial"
            @click="handleSave"
            >保存</el-button
          >
        </el-header>
        <el-main>
          <treeSStation
            :CheckData="CheckData"
            :IsInput="false"
            @checkedNodes="getFunctions"
          ></treeSStation>
        </el-main>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import treeSStation from '../common/permissionTree'
import rateTable from '../common/rateTable' //引入table组件

export default {
  name: 'v_deviceOnlineInfo',
  data() {
    return {
      digTitle: '',
      functionIds: '',
      usrId: '',

      roleId: '',

      showView: {
        columns: [
          { prop: 'usr_id', label: '用户id', align: 'center', isShow: false },
          {
            prop: 'usr_realname',
            label: '用户姓名',
            width: 180,
            align: 'center',
            isShow: true,
          },
          {
            prop: 'usr_dleadername',
            label: '直属上级',
            align: 'center',
            isShow: false,
          },
          {
            prop: 'unitId',
            label: '运维单位id',
            align: 'center',
            isShow: false,
          },
          {
            prop: 'unitName',
            label: '运维单位',
            width: 220,
            align: 'center',
            isShow: true,
          },
          {
            prop: 'role_name',
            label: '角色名称',
            align: 'center',
            isShow: true,
          },
          {
            prop: 'usr_phone',
            label: '联系电话',
            align: 'center',
            isShow: true,
          },
          {
            prop: 'usr_status',
            label: '是否启用',
            width: 180,
            align: 'center',
            isShow: true,
          },
          {
            prop: 'sStations',
            label: '运维站id',
            width: 180,
            align: 'center',
            isShow: false,
          },
          {
            prop: 'sStationNames',
            label: '运维站点',
            width: 180,
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

      CheckData: [], // [{id:'SS4301051'},{id:'SS4301051'}]
      dialogVisible: false,
      dialogVisibleview1: false,
      titleName: '',

      //弹出窗相关变量定义
      ruleForm: {
        role_id: '',
        role_status: '',
        role_name: '',
        role_code: '',
        role_order: '',
        role_beizhu: '',
      },

      rules: {
        role_order: [
          { required: true, message: '请填写用户排序', trigger: 'blur' },
        ],
        role_code: [
          { required: true, message: '请填写角色编码', trigger: 'blur' },
        ],
        role_name: [
          { required: true, message: '请填写角色名称', trigger: 'blur' },
        ],
        role_status: [
          { required: true, message: '请选择是否启用', trigger: 'blur' },
        ],
      },
      queryparam: {
        RoleName: '',
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
        { prop: 'role_id', label: '角色id', align: 'center', isShow: false },
        {
          prop: 'role_code',
          label: '角色编码',
          align: 'center',
          isShow: false,
        },
        {
          prop: 'role_name',
          label: '角色名称',
          width: 180,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'role_status',
          label: '是否启用',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'role_beizhu',
          label: '角色描述',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'role_order',
          label: '角色排序',
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
            hasbutton: 'role_handleEdit',
            className: 'success', //样式类名
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleEdit(index, row)
            },
          },
          {
            id: '2',
            label: '分配权限',
            show: true,
            hasbutton: 'role_handlePerssion',
            bgColortype: 'success',
            className: 'success',
            disabled: false,
            method: (index, row) => {
              this.handlPermission(index, row)
            },
          },
        ],
      }, // 列操作按钮
    } //return ending
  },

  methods: {
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
          ids += item.role_id + ','
        } else {
          ids += item.role_id
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
        url: self.api + '/api/Yw_Roles/DeleteRole?roleId=' + ids,
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

    //刷新权限session
    RefrshSessionPerssion() {
      var Enumerable = require('linq')
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_Sys_Menu/GetMainMenu?usrId=' +
          sessionStorage.getItem('currentUserId'),
      })
        .then((res) => {
          if (res.status == 200) {
            sessionStorage.setItem(
              'functionData',
              JSON.stringify(
                Enumerable.from(res.data.data)
                  .where((o) => o.menu_type == 2)
                  .toArray()
              )
            )
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //保存分配的权限
    handleSave() {
      var self = this
      var obj = {}
      obj.roleId = self.roleId
      obj.permissionId = self.functionIds
      if (self.functionIds == '') {
        self.$message({
          message: '请勾选权限!',
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
        url: self.api + '/api/Yw_Roles/SaveRolePerssion',
        data: Qs.stringify(obj),
      })
        .then((res) => {
          if (res.status == 200) {
            self.dialogVisibleview1 = false
            self.getList()
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
            this.RefrshSessionPerssion()
          }
        })
        .catch((error) => {})
    },
    getFunctions(obj) {
      var self = this
      var functionIds = ''
      if (obj != null) {
        obj.forEach((o) => {
          functionIds += o.id + ','
        })
        self.functionIds = functionIds
      }
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
            url: self.api + '/api/Yw_Roles/RoleInfoSubmit',
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
      if (self.ruleForm.role_id != '') {
        self.resetForm('ruleForm') //重置表单
      }
      self.ruleForm.role_id = ''
      self.ruleForm.role_status = 1
      self.digTitle = '添加角色'
      self.dialogVisible = true
    },

    //编辑
    handleEdit(index, row) {
      //操作栏编辑按钮
      var self = this
      this.getRoleInfoById(row.role_id)
      self.digTitle = '编辑角色'
      self.dialogVisible = true
    },

    //获取权限数据
    handlPermission(index, row) {
      //获取分配站点信息
      var self = this
      self.roleId = row.role_id
      this.getRolePerssionRef(row.role_id)
      self.dialogVisibleview1 = true
    },

    getRolePerssionRef(id) {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_Roles/GetRoleConfigPerssion?roleId=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.CheckData = res.data.data
            this.getFunctions(self.CheckData)
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
          '/api/Yw_Roles/GetRolesPageList?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&roleName=' +
          self.queryparam.RoleName,
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

    //依据角色id获取角色信息
    getRoleInfoById(id) {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_Roles/GetRoleById?roleId=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.role_name = res.data.data.role_name
            self.ruleForm.role_order = res.data.data.role_order
            self.ruleForm.role_status = res.data.data.role_status
            self.ruleForm.role_code = res.data.data.role_code
            self.ruleForm.role_beizhu = res.data.data.role_beizhu
            self.ruleForm.role_id = res.data.data.role_id
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
          '/api/Yw_Roles/GetRolesDownLoad?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&roleName=' +
          self.queryparam.RoleName,
      })
        .then((res) => {
          if (res.status == 200) {
            let blob = new Blob([res.data], {
              type: 'application/vnd.ms-excel',
            })
            let downTime = self.downLoadDate()
            const fileName = downTime + '-角色管理.xls'
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
</style>
