<template>
  <div id="v_deviceOnlineInfo">
    <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="菜单名称：">
                <el-input
                  v-model:value="queryparam.MenuName"
                  placeholder="菜单名称"
                ></el-input>
              </el-form-item>
              <el-form-item class="btn">
                <el-button
                  type="primary"
                  icon="el-icon-search"
                  v-has="'menu_handleSearch'"
                  @click="getList()"
                  >查询</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="tools">
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-plus"
              v-has="'menu_handleAdd'"
              style="text-overflow: initial"
              @click="handleAdd"
              >添加</el-button
            >
          </div>
        </el-header>

        <el-main>
          <el-table
            :data="Menulist"
            :default-expand-all="false"
            style="width: 100%"
            row-key="id"
            height="250"
            border
            lazy
            :tree-props="{ children: 'children', hasChildren: 'true' }"
          >
            <el-table-column
              prop="nodeName"
              label="菜单名称"
              align="center"
              width="180"
            >
            </el-table-column>
            <el-table-column
              prop="id"
              label="菜单id"
              align="center"
              v-if="false"
              width="180"
            >
            </el-table-column>

            <el-table-column prop="url" align="center" label="地址">
            </el-table-column>

            <el-table-column prop="icon" align="center" label="图标">
              <template v-slot="scope">
                <i :class="scope.row.icon"></i>
              </template>
            </el-table-column>

            <el-table-column
              prop="status"
              align="center"
              v-if="false"
              label="是否启用"
            >
            </el-table-column>

            <el-table-column label="操作" align="center">
              <template v-slot="scope">
                <el-button
                  size="mini"
                  type="success"
                  v-has="'menu_handleEdit'"
                  @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button
                >
                <el-button
                  size="mini"
                  type="success"
                  @click="handleFunction(scope.$index, scope.row)"
                  >分配按钮</el-button
                >
                <el-button
                  size="mini"
                  type="success"
                  v-has="'menu_handleMultiplDel'"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>

          <div>
            <el-pagination
              @size-change="getSizeChange"
              @current-change="getCurrentPage"
              :current-page="1"
              :page-sizes="[10, 20, 50, 100]"
              :page-size="10"
              layout="total, sizes, prev, pager, next"
              :total="page.total"
              background
            >
            </el-pagination>
          </div>
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
            <el-col :span="12">
              <div>
                <el-form-item label="菜单名称：" prop="menu_name">
                  <el-input
                    v-model:value="ruleForm.menu_name"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="菜单路由：" prop="menu_url">
                  <el-input
                    v-model:value="ruleForm.menu_url"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="父级菜单：" prop="menu_pid">
                  <el-cascader
                    :options="Menulist"
                    :props="defaultProp"
                    @change="change"
                    placeholder="请选择父级菜单[不选则是顶级菜单]"
                    v-model:value="ruleForm.menu_pid"
                    clearable
                  ></el-cascader>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="菜单层级：" prop="menu_level">
                  <el-input
                    v-model:value="ruleForm.menu_level"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="菜单排序：" prop="menu_order">
                  <el-input
                    v-model:value="ruleForm.menu_order"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="菜单图标：" prop="menu_icon">
                  <el-select
                    v-model:value="ruleForm.menu_icon"
                    placeholder="请选择图标"
                    @change="changeIcon"
                  >
                    <el-option
                      v-for="item in iconList"
                      :key="item.id"
                      :label="item.iconString"
                      :value="item.iconString"
                    >
                      <span><i :class="item.iconString"></i></span>
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="菜单标识：" prop="menu_identify">
                  <el-input
                    v-model:value="ruleForm.menu_identify"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>

            <el-col :span="6">
              <div>
                <el-form-item label="是否启用：" prop="menu_status">
                  <el-radio-group v-model:value="ruleForm.menu_status">
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
                <el-form-item label="菜单描述：" prop="menu_description">
                  <el-input
                    v-model:value="ruleForm.menu_description"
                    autocomplete="off"
                    :rows="3"
                    type="textarea"
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
        title="按钮分配"
        v-model:visible="dialogVisibleview1"
        width="30%"
        height="30%"
      >
        <el-form
          :model="ruleIconForm"
          status-icon
          :rules="rules"
          ref="ruleIconForm"
          label-width="100px"
          class="demo-ruleForm"
          size="mini"
        >
          <el-row>
            <el-col :span="24">
              <div>
                <el-checkbox
                  :indeterminate="isIndeterminate"
                  v-model:value="checkAll"
                  @change="handleCheckAllChange"
                  >全选</el-checkbox
                >
                <div style="margin: 15px 0"></div>
                <el-checkbox-group
                  v-model:value="ruleIconForm.checkList"
                  @change="handleCheckedCitiesChange"
                >
                  <el-checkbox
                    v-for="data in ruleIconForm.funList"
                    :label="data.fun_Id"
                    :key="data.fun_Id"
                    >{{ data.fun_name }}</el-checkbox
                  >
                </el-checkbox-group>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="3">&nbsp;</el-col>
            <el-col :span="12">
              <div>
                <el-form-item>
                  <el-button type="primary" @click="handleFunSave()"
                    >提交</el-button
                  >
                  <el-button @click="closeFunDig()">取消</el-button>
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
export default {
  name: 'v_deviceOnlineInfo',
  data() {
    return {
      checkAll: false,
      isIndeterminate: false,
      defaultProp: {
        value: 'id',
        label: 'nodeName',
        children: 'children',
        expandTrigger: 'hover',
        checkStrictly: true,
        emitPath: false, //在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值
      },
      //绑定下拉框信息
      Menulist: [],
      digTitle: '',
      iconList: [],
      dialogVisible: false,
      dialogVisibleview1: false,
      titleName: '',
      menuId: '',
      meunIdentify: '',

      //弹出窗相关变量定义
      ruleForm: {
        menu_name: '',
        menu_pid: '-1',
        menu_id: '',
        menu_url: '',
        menu_status: '',
        menu_description: '',
        menu_level: '',
        menu_order: '',
        menu_icon: '',
        menu_identify: '',
      },

      ruleIconForm: {
        funList: [],
        checkList: [],
      },

      funIds: '',

      rules: {
        menu_name: [
          { required: true, message: '请输入菜单名称', trigger: 'blur' },
        ],
        menu_url: [
          { required: true, message: '请输入菜单地址', trigger: 'blur' },
        ],
        menu_level: [
          { required: true, message: '请输入菜单层级', trigger: 'blur' },
        ],
        menu_order: [
          { required: true, message: '请输入菜单排序', trigger: 'blur' },
        ],
        menu_pid: [
          { required: true, message: '请输入父级菜单', trigger: 'blur' },
        ],
        menu_identify: [
          { required: true, message: '请输入菜单标识', trigger: 'blur' },
        ],
      },
      queryparam: {
        MenuName: '',
      },
      options: {
        // table样式参数
        stripe: true, // 是否为斑马纹 table
        loading: true, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: false, // 是否支持列表项选中功能
      }, // table 的参数结束
      page: {
        //关于页码的相关参数
        pageShow: true, //是否显示
        total: 0, //总条数
        pageSize: 10, //每页条数
        pageNo: 1, //第几页
      },
    }
  },

  methods: {
    //弹出窗关闭时的效果
    handleClose(done) {
      this.$confirm('确认关闭?')
        .then((_) => {
          done()
          this.resetForm('ruleForm')
        })
        .catch((_) => {})
    },

    handleCheckAllChange(val) {
      let iconIds = []
      this.ruleIconForm.funList.forEach((o) => {
        iconIds.push(o.fun_Id)
      })
      this.ruleIconForm.checkList = val ? iconIds : []
      this.ruleIconForm.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.ruleIconForm.funList.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.ruleIconForm.funList.length
    },

    //菜单图标选择
    changeIcon(val) {
      this.ruleForm.menu_icon = val
    },

    //弹出分配按钮弹出框
    handleFunction(index, row) {
      var self = this
      this.getAllFunction()
      this.dialogVisibleview1 = true
      this.menuId = row.id
      this.meunIdentify = row.menu_identify
      this.getAlreadyFunction(row.id)
    },

    //获取已有的按钮做回显示
    getAlreadyFunction(id) {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_Sys_Menu/GetFunctionByMeunId?menuId=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleIconForm.checkList = res.data.data
            if (self.ruleIconForm.checkList.length == 0) {
              this.isIndeterminate = false
              this.checkAll = false
            } else if (
              self.ruleIconForm.checkList.length != 0 &&
              self.ruleIconForm.checkList.length !=
                self.ruleIconForm.funList.length
            ) {
              this.isIndeterminate = true
              this.checkAll = false
            } else if (
              self.ruleIconForm.checkList.length != 0 &&
              self.ruleIconForm.checkList.length ==
                self.ruleIconForm.funList.length
            ) {
              this.isIndeterminate = false
              this.checkAll = true
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //获取所有按钮
    getAllFunction() {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_Function/GetAllFunction',
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleIconForm.funList = res.data.data
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //菜单下拉框
    change(val) {
      this.ruleForm.menu_pid = val
    },

    //分页
    handleSizeChange(val) {
      //每页显示多少条
      this.page.pageSize = val
      //这下面需要重新调用 获取列表页的函数
      this.getList()
    },

    //删除
    handleDelete(index, row) {
      var self = this
      var ids = row.id
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
        url: self.api + '/api/Yw_Sys_Menu/DeleteMenu?menuId=' + ids,
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

    //保存分配的按钮
    handleFunSave() {
      var self = this
      var iconIds = ''
      this.ruleIconForm.checkList.forEach((o) => {
        iconIds += o + ','
      })
      this.$http({
        method: 'GET',
        url:
          self.api +
          '/api/Yw_Sys_Menu/AddMenuFun?menuId=' +
          self.menuId +
          '&meunIdentify=' +
          self.meunIdentify +
          '&funIds=' +
          iconIds,
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
    },

    //获取所有icon
    getAllIcons() {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_Icons/GetAllIcons',
      })
        .then((res) => {
          if (res.status == 200) {
            self.iconList = res.data.data
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
            url: self.api + '/api/Yw_Sys_Menu/MenuInfoSubmit',
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
                //清空
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

    //关闭菜单弹出框
    closeDig() {
      var self = this
      self.dialogVisible = !self.dialogVisible
      self.resetForm('ruleForm')
    },

    //关闭按钮弹出框
    closeFunDig() {
      var self = this
      self.dialogVisibleview1 = !self.dialogVisibleview1
      self.resetForm('ruleIconForm')
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
      if (self.ruleForm.menu_id != '') {
        self.resetForm('ruleForm') //重置表单
      }
      self.ruleForm.menu_id = ''
      self.ruleForm.menu_status = 1
      self.digTitle = '添加菜单'
      self.getAllIcons()
      self.dialogVisible = true
    },

    //编辑
    handleEdit(index, row) {
      //操作栏编辑按钮
      var self = this
      this.getMenuInfoById(row.id)
      self.getAllIcons()
      self.digTitle = '编辑菜单'
      self.dialogVisible = true
    },

    //查询
    getList(obj) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_Sys_Menu/GetMenuTree?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&menuName=' +
          self.queryparam.MenuName,
      })
        .then((res) => {
          if (res.status == 200) {
            self.Menulist = res.data.data
            self.page.total = res.data.total
            self.options.loading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //依据菜单id获取菜单信息
    getMenuInfoById(id) {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_Sys_Menu/GetMenuById?menuId=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.menu_id = res.data.data.menu_id
            self.ruleForm.menu_name = res.data.data.menu_name
            self.ruleForm.menu_pid = res.data.data.menu_pid
            self.ruleForm.menu_url = res.data.data.menu_url
            self.ruleForm.menu_description = res.data.data.menu_description
            self.ruleForm.menu_status = res.data.data.menu_status
            self.ruleForm.menu_level = res.data.data.menu_level
            self.ruleForm.menu_order = res.data.data.menu_order
            self.ruleForm.menu_icon = res.data.data.menu_icon
            self.ruleForm.menu_identify = res.data.data.menu_identify
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  components: {},
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
.el-pagination {
  text-align: left;
}
.el-table {
  height: calc(100vh - 310px) !important;
}
.el-select {
  width: 100%;
}
.el-cascader,
.el-cascader--medium {
  width: 100%;
  height: 28px;
  line-height: 28px;
}
</style>
