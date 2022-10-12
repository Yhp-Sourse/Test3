<template>
  <div id="v_deviceOnlineInfo">
    <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
      <el-aside width="250px">
        <treeSStation
          :IsCheckBox="true"
          @checkedNodes="getSearchStations"
        ></treeSStation>
      </el-aside>
      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="报表类型：">
                <rateCascaderCommon
                  :defaultProp="prop"
                  @selectOptionEvent="selectOptionEvent"
                  :ReportCode="rptType"
                  :checkStrictly="checkStrictly"
                ></rateCascaderCommon>
              </el-form-item>

              <el-form-item label="">
                <el-form-item label="巡检日期：">
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
              </el-form-item>
              <el-form-item class="btn">
                <el-button
                  type="primary"
                  icon="el-icon-search"
                  v-has="'patrolFormStatistics_handleSearch'"
                  @click="getList()"
                  >查询</el-button
                >
                <el-button
                  type="primary"
                  icon="el-icon-download"
                  v-has="'patrolFormStatistics_handleExport'"
                  @click="download()"
                  >导出</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="tools"></div>
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
  </div>
</template>

<script>
import treeSStation from '../common/treeSStation'
import rateTable from '../common/rateTable'
import rateSelect from '../common/rateSelect'
import rateCascader from '../common/rateCascader'
import rateCascaderCommon from '../common/rateCascaderCommon'

export default {
  name: 'v_deviceOnlineInfo',
  data() {
    return {
      checkStrictly: true,
      rptType: '',
      CheckData: [], // [{sStation:'SS4301051'},{sStation:'SS4301051'}]
      queryparam: {
        ReportCode: '',
        StartDate: '',
        EndDate: '',
        chooseStationIds: '',
      },
      prop: {
        value: 'id',
        label: 'text',
        children: 'children',
        expandTrigger: 'hover',
        emitPath: false,
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
        {
          prop: 'city',
          label: '城市',
          width: 120,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'sStationName',
          label: '站点名称',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'reportName',
          label: '报表类型',
          width: 180,
          align: 'center',
          isShow: true,
        },
        { prop: 'cycleType', label: '巡检类型', align: 'center', isShow: true },
        { prop: 'draft', label: '草稿', align: 'center', isShow: true },
        { prop: 'unJudged', label: '未审核', align: 'center', isShow: true },
        { prop: 'failed', label: '审核不通过', align: 'center', isShow: true },
        { prop: 'approved', label: '审核通过', align: 'center', isShow: true },
        { prop: 'sumCount', label: '合计', align: 'center', isShow: true },
      ], // 需要展示的列
      operates: {
        //操作栏
        width: 200,
        fixed: 'right',
        list: [],
      }, // 列操作按钮
    } //return ending
  },

  methods: {
    clearParam() {
      var self = this
      self.CheckData = []
      self.getNowTime()
      self.queryparam.ReportCode = ''
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

    getNowTime() {
      var now = new Date()
      var year = now.getFullYear() //得到年份
      var month = now.getMonth() //得到月份
      var date = now.getDate() //得到日期
      month = month + 1
      month = month.toString().padStart(2, '0')
      date = date.toString().padStart(2, '0')
      var defaultDate = `${year}-${month}-${date}`
      //本年的1月1号
      var myDate = new Date()
      myDate.setDate(1)
      var myDateyear = myDate.getFullYear() //得到年份
      var myDatemonth = '01' //得到月份
      var myDatedate = myDate.getDate() //得到日期
      myDatedate = myDatedate.toString().padStart(2, '0')
      var beforedefaultDate = `${myDateyear}-${myDatemonth}-${myDatedate}`
      this.queryparam['StartDate'] = beforedefaultDate
      this.queryparam['EndDate'] = defaultDate
    },

    //组件下拉变换
    selectOptionEvent(val) {
      var self = this
      self.queryparam.ReportCode = val
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

    //查询
    getList(obj) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/MaintenanceStatistics/GetPatrolTaskStatisticsByPage?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&reportCode=' +
          self.queryparam.ReportCode +
          ' &stationIds=' +
          self.queryparam.chooseStationIds +
          '&startTime=' +
          self.queryparam.StartDate +
          '&endTime=' +
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
          '/api/MaintenanceStatistics/GetPatrolTaskStatisticsDownLoad?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&reportCode=' +
          self.queryparam.ReportCode +
          ' &stationIds=' +
          self.queryparam.chooseStationIds +
          '&startTime=' +
          self.queryparam.StartDate +
          '&endTime=' +
          self.queryparam.EndDate,
      })
        .then((res) => {
          if (res.status == 200) {
            let blob = new Blob([res.data], {
              type: 'application/vnd.ms-excel',
            })
            let downTime = self.downLoadDate()
            const fileName = downTime + '-巡检表单统计.xls'
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
    rateSelect,
    rateCascader,
    rateCascaderCommon,
  },
  created() {
    this.getNowTime() //调用获取列表页的方法
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
</style>
