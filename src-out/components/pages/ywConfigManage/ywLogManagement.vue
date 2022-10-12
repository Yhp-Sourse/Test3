<template>
  <el-tabs type="border-card">
    <el-tab-pane label="操作日志">
      <el-container style="height: calc(100vh - 145px); border: 1px solid #eee">
        <el-container>
          <el-header>
            <div class="search">
              <el-form :inline="true" class="demo-form-inline" size="mini">
                <el-form-item label="关键字：">
                  <el-input
                    v-model:value="queryparam.KeyWord"
                    placeholder="请输入关键字"
                  ></el-input>
                </el-form-item>
                <el-form-item label="查询日期：">
                  <el-date-picker
                    v-model:value="queryparam.StartDate"
                    type="date"
                    :clearable="false"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期时间"
                    align="right"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="-">
                  <el-date-picker
                    v-model:value="queryparam.EndDate"
                    type="date"
                    :clearable="false"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期时间"
                    align="right"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item class="btn">
                  <el-button
                    size="small"
                    icon="el-icon-search"
                    v-has="'logManagement_handleSearch'"
                    type="primary"
                    @click="getList()"
                    >查询</el-button
                  >
                  <el-button
                    type="primary"
                    icon="el-icon-download"
                    @click="downloadoperate()"
                    >导出</el-button
                  >
                </el-form-item>
              </el-form>
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
    </el-tab-pane>

    <el-tab-pane label="登录日志">
      <el-container style="height: calc(100vh - 145px); border: 1px solid #eee">
        <el-container>
          <el-header>
            <div class="search">
              <el-form :inline="true" class="demo-form-inline" size="mini">
                <el-form-item label="查询日期：">
                  <el-date-picker
                    v-model:value="queryparam_Repair.StartDate"
                    type="date"
                    :clearable="false"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期时间"
                    align="right"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="-">
                  <el-date-picker
                    v-model:value="queryparam_Repair.EndDate"
                    type="date"
                    :clearable="false"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期时间"
                    align="right"
                  >
                  </el-date-picker>
                </el-form-item>

                <el-form-item class="btn">
                  <el-button
                    size="small"
                    icon="el-icon-search"
                    v-has="'logManagement_handleSearch'"
                    type="primary"
                    @click="getList_Repair()"
                    >查询</el-button
                  >
                  <el-button
                    type="primary"
                    icon="el-icon-download"
                    @click="downloadlogin()"
                    >导出</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </el-header>

          <el-main>
            <rate-table
              :list="list_Repair"
              @handleSelectionChange="handleSelectionChange_Repair"
              @sizeChange="getSizeChange_Repair"
              @currentPage="getCurrentPage_Repair"
              :options="options_Repair"
              :columns="columns_Repair"
              :operates="operates_Repair"
              :pageShow="page_Repair.pageShow"
              :total="page_Repair.total"
            ></rate-table>
          </el-main>
        </el-container>
      </el-container>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import rateTable from '../common/rateTable' //引入table组件
import rateSelect from '../common/rateSelect'
import rateCascader from '../common/rateCascader' //引入rateCascader组件

export default {
  name: 'devUseRecord',
  data() {
    return {
      rateSelectUnit: {
        model: '',
        selectUrl: this.api + '/api/TreeSStation/GetCityNameFromSStation',
        urlParams: JSON.stringify({}),
        optionKeys: JSON.stringify({
          value: 'text',
          label: 'text',
        }),
        showLabels: 'text',
        disables: '',
      },

      rateSPSelect: {}, //备机信息
      page: {
        //关于页码的相关参数
        pageShow: true, //是否显示分页
        total: 0, //总条数
        pageSize: 10, //每页条数
        pageNo: 1, //第几页
      },
      handleSelection: [], //checkbox选中行
      list: [],
      options: {
        // table样式参数
        stripe: true, // 是否为斑马纹 table
        loading: true, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: false, // 是否支持列表项选中功能
      }, // table 的参数结束
      columns: [
        { prop: 'usrName', label: '用户', align: 'center', isShow: true },
        { prop: 'usrDesc', label: '用户描述', align: 'center', isShow: true },
        { prop: 'stationName', label: '站点', align: 'center', isShow: true },
        { prop: 'action', label: '操作明细', align: 'center', isShow: true },
        {
          prop: 'show_ActionDate',
          label: '操作时间',
          align: 'center',
          isShow: true,
        },
      ], // 需要展示的列
      operates: {
        //操作栏
        width: 280,
        fixed: 'right',
        list: [],
      },

      queryparam: {
        KeyWord: '',
        StartDate: '',
        EndDate: '',
      },

      queryparam_Repair: {
        StartDate: '',
        EndDate: '',
      },

      //第二个tabs标签
      page_Repair: {
        //关于页码的相关参数
        pageShow: true, //是否显示分页
        total: 0, //总条数
        pageSize: 10, //每页条数
        pageNo: 1, //第几页
      },
      handleSelection_Repair: [], //checkbox选中行
      list_Repair: [],

      options_Repair: {
        // table样式参数
        stripe: true, // 是否为斑马纹 table
        loading: false, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: false, // 是否支持列表项选中功能
      }, // table 的参数结束

      columns_Repair: [
        { prop: 'usrName', label: '用户', align: 'center', isShow: true },
        { prop: 'action', label: '操作', align: 'center', isShow: true },
        {
          prop: 'show_ActionDate',
          label: '操作时间',
          align: 'center',
          isShow: true,
        },
      ], // 需要展示的列

      operates_Repair: {
        //操作栏
        width: 150,
        fixed: 'right',
        list: [],
      },
    }
  },

  methods: {
    //初始化时间
    getNowTime() {
      var now = new Date()
      var year = now.getFullYear() //得到年份
      var month = now.getMonth() //得到月份
      var date = now.getDate() //得到日期
      month = month + 1
      month = month.toString().padStart(2, '0')
      date = date.toString().padStart(2, '0')
      var defaultDate = `${year}-${month}-${date}`
      //7天前日期
      var myDate = new Date()
      myDate.setDate(myDate.getDate() - 7)
      var myDateyear = myDate.getFullYear() //得到年份
      var myDatemonth = myDate.getMonth() //得到月份
      var myDatedate = myDate.getDate() //得到日期
      myDatemonth = myDatemonth + 1
      myDatemonth = myDatemonth.toString().padStart(2, '0')
      myDatedate = myDatedate.toString().padStart(2, '0')
      var beforedefaultDate = `${myDateyear}-${myDatemonth}-${myDatedate}`

      //操作日志
      this.queryparam['StartDate'] = beforedefaultDate
      this.queryparam['EndDate'] = defaultDate

      //登录日志
      this.queryparam_Repair['StartDate'] = beforedefaultDate
      this.queryparam_Repair['EndDate'] = defaultDate
    },

    handleSelectionChange(val) {
      //checkbox选中的数据val 是选中行的所有数组
      this.handleSelection = val
    },
    handleSelectionChange_Repair(val) {
      //checkbox选中的数据val 是选中行的所有数组
      this.handleSelection_Repair = val
    },

    getSizeChange(val) {
      //table组件发射的方法 用于改变每页数据量
      this.page.pageSize = val
      //这下面需要重新调用 获取列表页的函数
      this.getList()
    },
    getSizeChange_Repair(val) {
      //table组件发射的方法 用于改变每页数据量
      this.page_Repair.pageSize = val
      //这下面需要重新调用 获取列表页的函数
      this.getList_Repair()
    },

    getCurrentPage(val) {
      //table组件发射的方法  用于改变当前所在页码
      this.page.pageNo = val
      //这下面需要重新调用 获取列表页的函数
      this.getList()
    },
    getCurrentPage_Repair(val) {
      //table组件发射的方法  用于改变当前所在页码
      this.page_Repair.pageNo = val
      //这下面需要重新调用 获取列表页的函数
      this.getList_Repair()
    },

    //操作日志
    getList(obj) {
      var self = this
      //判断开始时间和结束时间
      if (self.queryparam.StartDate > self.queryparam.EndDate) {
        self.$message({
          message: '查询开始时间不能大于查询结束时间!',
          type: 'warning',
        })
        return
      }
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_LogManagement/GetOperateLog?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&StartActionDate=' +
          self.queryparam.StartDate +
          '&KeyWord=' +
          self.queryparam.KeyWord +
          '&EndActionDate=' +
          self.queryparam.EndDate,
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
    //登录日志
    getList_Repair(obj) {
      var self = this
      //判断开始时间和结束时间
      if (self.queryparam_Repair.StartDate > self.queryparam_Repair.EndDate) {
        self.$message({
          message: '查询开始时间不能大于查询结束时间!',
          type: 'warning',
        })
        return
      }
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_LogManagement/GetLoginLog?pageSize=' +
          self.page_Repair.pageSize +
          '&pageIndex=' +
          self.page_Repair.pageNo +
          '&StartLoginDate=' +
          self.queryparam_Repair.StartDate +
          '&EndLoginDate=' +
          self.queryparam_Repair.EndDate,
      })
        .then((res) => {
          if (res.status == 200) {
            self.list_Repair = res.data.data
            self.page_Repair.total = res.data.total
            self.options_Repair.loading = false
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

    //操作日志导出
    downloadoperate() {
      var self = this
      this.$http({
        method: 'GET',
        responseType: 'blob', // 表明返回服务器返回的数据类型
        url:
          this.api +
          '/api/Yw_LogManagement/GetOperateLogDownLoad?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&StartActionDate=' +
          self.queryparam.StartDate +
          '&KeyWord=' +
          self.queryparam.KeyWord +
          '&EndActionDate=' +
          self.queryparam.EndDate,
      })
        .then((res) => {
          if (res.status == 200) {
            let blob = new Blob([res.data], {
              type: 'application/vnd.ms-excel',
            })
            let downTime = self.downLoadDate()
            const fileName = downTime + '-操作日志.xls'
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

    //登录导出
    downloadlogin() {
      var self = this
      this.$http({
        method: 'GET',
        responseType: 'blob', // 表明返回服务器返回的数据类型
        url:
          this.api +
          '/api/Yw_LogManagement/GetLoginLogDownLoad?pageSize=' +
          self.page_Repair.pageSize +
          '&pageIndex=' +
          self.page_Repair.pageNo +
          '&StartLoginDate=' +
          self.queryparam_Repair.StartDate +
          '&EndLoginDate=' +
          self.queryparam_Repair.EndDate,
      })
        .then((res) => {
          if (res.status == 200) {
            let blob = new Blob([res.data], {
              type: 'application/vnd.ms-excel',
            })
            let downTime = self.downLoadDate()
            const fileName = downTime + '-登录日志.xls'
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
    rateSelect,
    rateCascader,
  },
  created() {
    this.getNowTime() //调用获取列表页的方法
  },
  mounted() {
    this.getList() //调用获取列表页的方法
    this.getList_Repair()
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
  height: 60px !important;
}
.el-header .search {
  height: 40px !important;
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
