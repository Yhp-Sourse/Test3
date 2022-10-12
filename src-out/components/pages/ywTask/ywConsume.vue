<template>
  <div id="v_ywTask">
    <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
      <el-aside width="250px">
        <treeSStation @checkedNodes="getSearchStations"></treeSStation>
      </el-aside>

      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="材料名称：">
                <el-input
                  v-model:value="queryparam.materialname"
                  placeholder="输入材料名称"
                ></el-input>
              </el-form-item>
              <el-form-item label="录入日期：">
                <el-date-picker
                  v-model:value="queryparam.StartDate"
                  type="date"
                  placeholder="选择开始日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="-">
                <el-date-picker
                  v-model:value="queryparam.EndDate"
                  type="date"
                  placeholder="选择结束日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </el-form-item>
              <el-form-item class="btn">
                <el-button
                  type="primary"
                  v-has="'ywConsume_handleSearch'"
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
              v-has="'ywConsume_handleAdd'"
              class="el-button--iconButton"
              icon="el-icon-plus"
              style="text-overflow: initial"
              @click="handleAdd"
              >添加</el-button
            >
            <el-button
              size="small"
              v-has="'ywConsume_handleMultiplDel'"
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
      <el-dialog title="运维耗材" v-model:visible="dialogVisible" width="50%">
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
                <el-form-item label="保质期：" prop="Garanteeperiod">
                  <el-date-picker
                    v-model:value="ruleForm.Garanteeperiod"
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
                <el-form-item label="材料名称：" prop="MaterialName">
                  <el-input
                    v-model:value="ruleForm.MaterialName"
                    autocomplete="off"
                  ></el-input
                ></el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="品牌：" prop="Brand">
                  <el-input
                    v-model:value="ruleForm.Brand"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="使用数量：" prop="Usedquantity">
                  <el-input
                    v-model:value="ruleForm.Usedquantity"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="单位：" prop="Company">
                  <el-input
                    v-model:value="ruleForm.Company"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="型号：" prop="TypeModel">
                  <el-input
                    v-model:value="ruleForm.TypeModel"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div v-if="false">
                <el-form-item label="数量：" prop="Quantity">
                  <el-input
                    v-model:value="ruleForm.Quantity"
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
                  <el-button
                    type="primary"
                    v-has="'ywConsume_handleSubmit'"
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

export default {
  name: '问题反馈',
  data() {
    return {
      dialogVisible: false,
      ruleForm: {
        Id: '',
        City: '',
        SStation: '',
        SStationName: '',
        MaterialName: '',
        Brand: '',
        TypeModel: '',
        Quantity: '',
        Usedquantity: '',
        Company: '',
        Garanteeperiod: '',
        Entryperson: '',
        Entrytime: '',
      },
      rules: {
        Id: [{ required: false, message: '', trigger: 'blur' }],
        SStation: [{ required: true, message: '请选择站点', trigger: 'blur' }],
        MaterialName: [
          { required: true, message: '请输入材料名称', trigger: 'blur' },
        ],
        Brand: [{ required: true, message: '请输入品牌', trigger: 'blur' }],
        TypeModel: [{ required: true, message: '请输入型号', trigger: 'blur' }],
        Quantity: [{ required: false, message: '请输入数量', trigger: 'blur' }],
        Usedquantity: [
          { required: true, message: '请输入已用数量', trigger: 'blur' },
        ],
        Company: [{ required: true, message: '请输入单位', trigger: 'blur' }],
        Garanteeperiod: [
          { required: true, message: '请输入保质期', trigger: 'blur' },
        ],
      },
      queryparam: {
        StartDate: '',
        EndDate: '',
        materialname: '',
        chooseStationIds: '',
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
          prop: 'city',
          label: '城市',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            return row.city
          },
        }, //formatter重构//return `返回参数`
        {
          prop: 'sstationname',
          label: '站点名称',
          align: 'center',
          isShow: true,
          width: 200,
        },
        {
          prop: 'materialname',
          label: '材料名称',
          align: 'center',
          isShow: true,
        },
        { prop: 'typemodel', label: '型号', align: 'center', isShow: true },
        { prop: 'brand', label: '品牌', align: 'center', isShow: true },
        { prop: 'quantity', label: '数量', align: 'center', isShow: false },
        {
          prop: 'usedquantity',
          label: '使用数量',
          align: 'center',
          isShow: true,
        },
        { prop: 'company', label: '单位', align: 'center', isShow: true },
        {
          prop: 'show_Garanteeperiod',
          label: '保质期',
          align: 'center',
          isShow: true,
          width: 100,
        },
        { prop: 'entryperson', label: '录入人', align: 'center', isShow: true },
        {
          prop: 'show_entrytime',
          label: '录入时间',
          align: 'center',
          isShow: true,
          width: 100,
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
            hasbutton: 'ywConsume_handleEdit',
            show: true, //是否显示按钮
            className: 'success', //样式类名
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
            hasbutton: 'ywConsume_handleMultiplDel',
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var self = this
          this.$http({
            headers: {
              deviceCode: 'A95ZEF1-47B5-AC90BF3',
            },
            method: 'post',
            url: self.api + '/api/Yw_Consumables/Submit',
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
        url: self.api + '/api/Yw_Consumables/Delmultipl?ids=' + ids,
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
      debugger
      var self = this
      this.$http({
        method: 'GET',
        url: self.api + '/api/Yw_Consumables/Singelmultipl?Id=' + id,
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
      this.dialogVisible = !this.dialogVisible
    },
    handleEdit(index, row) {
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
    getList(obj) {
      var self = this
      //判断开始时间和结束时间
      if (self.queryparam.StartDate > self.queryparam.EndDate) {
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
          '/api/Yw_Consumables/GetList?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&startDate=' +
          self.queryparam.StartDate +
          '&endDate=' +
          self.queryparam.EndDate +
          '&sstation=' +
          self.queryparam.chooseStationIds +
          '&materialname=' +
          self.queryparam.materialname,
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

    getToFirst(id) {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_Consumables/GetToFirst?id=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.Id = res.data.data.id
            self.ruleForm.City = res.data.data.city
            self.ruleForm.SStation = res.data.data.sstation
            self.ruleForm.SStationName = res.data.data.sstationname
            self.ruleForm.MaterialName = res.data.data.materialname
            self.ruleForm.Brand = res.data.data.brand
            self.ruleForm.TypeModel = res.data.data.typemodel
            self.ruleForm.Quantity = res.data.data.quantity
            self.ruleForm.Usedquantity = res.data.data.usedquantity
            self.ruleForm.Company = res.data.data.company
            self.ruleForm.Garanteeperiod = res.data.data.garanteeperiod
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
</style>
