<template>
  <div id="v_ywUnit">
    <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
      <el-aside width="250px">
        <treeSStation @checkedNodes="getSearchStations"></treeSStation>
      </el-aside>

      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="统计月份：">
                <el-date-picker
                  v-model:value="queryparam.searchMonth"
                  type="month"
                  :clearable="false"
                  value-format="yyyy-MM"
                  :picker-options="pickerOptionsYearMonth"
                  placeholder="请选择月份"
                >
                </el-date-picker>
              </el-form-item>

              <el-form-item label="任务类型：">
                <el-select
                  v-model:value="queryparam.taskCategoryType"
                  placeholder="请选择任务类型"
                  style="width: 100%"
                >
                  <el-option
                    v-for="item in TaskTypeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="是否完成：">
                <el-select
                  v-model:value="queryparam.isFinish"
                  placeholder="请选择是否完成"
                  style="width: 100%"
                >
                  <el-option
                    v-for="item in FinishOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item class="btn">
                <el-button
                  type="primary"
                  v-has="'ywTaskTotal_handleSearch'"
                  icon="el-icon-search"
                  @click="getList()"
                  >查询</el-button
                >
                <el-button
                  type="primary"
                  v-has="'ywTaskTotal_handleExport'"
                  icon="el-icon-download"
                  @click="download()"
                  >导出</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="tools">
            {{ this.conclusionInfo }}
          </div>
        </el-header>

        <el-main>
          <rate-table
            :list="list"
            @handleSelectionChange="handleSelectionChange"
            @sizeChange="getSizeChange"
            @currentPage="getCurrentPage"
            @handleCellClick="handleCellClick"
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
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
import treeSStation from '../common/treeSStation' //引入treeSStation组件
import rateTable from '../common/rateTable' //引入rateTable组件

export default {
  name: 'v_ywUnit',
  data() {
    return {
      //结论
      conclusionInfo: '',
      //限制选择月份
      pickerOptionsYearMonth: this.banTime(),
      queryparam: {
        isFinish: '-1',
        taskCategoryType: '-1',
        searchMonth: '',
        chooseStationIds: '',
      },

      //任务类型
      TaskTypeOptions: [
        {
          value: '-1',
          label: '全部',
        },
        {
          value: '1',
          label: '周巡检',
        },
        {
          value: '2',
          label: '月巡检',
        },
        {
          value: '3',
          label: '季度检查',
        },
        {
          value: '4',
          label: '半年检查',
        },
        {
          value: '5',
          label: '年检查',
        },
        {
          value: '6',
          label: '两月检查',
        },
        {
          value: '7',
          label: '应急保障',
        },
      ],

      //是否完成
      FinishOptions: [
        {
          value: '-1',
          label: '全部',
        },
        {
          value: '1',
          label: '已完成',
        },
        {
          value: '0',
          label: '未完成',
        },
      ],

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
        { prop: 'city', label: '城市', align: 'center', isShow: true }, //formatter重构//return `返回参数`
        {
          prop: 'sStationName',
          label: '站点',
          align: 'center',
          isShow: true,
          width: 200,
        },
        {
          prop: 'weekMonthShouldDo',
          label: '周应填数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'alreadyWeekDo',
          label: '周实填数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'weekDoSuccess',
          label: '周通过数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'weekFillingPercent',
          label: '周填表率',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            if (row.weekFillingPercent) {
              return (
                '<a style="color:blue;">' +
                row.weekFillingPercent +
                '%' +
                ' </a>'
              )
            } else {
              return '<a style="color:blue;">' + '0%' + ' </a>'
            }
          },
        },
        {
          prop: 'weekFinishPercent',
          label: '周完成率',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            if (row.weekFinishPercent) {
              return (
                '<a style="color:blue;">' +
                row.weekFinishPercent +
                '%' +
                ' </a>'
              )
            } else {
              return '<a style="color:blue;">' + '0%' + ' </a>'
            }
          },
        },
        {
          prop: 'singleMonthShouldDo',
          label: '月应填数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'alreadyMonthDo',
          label: '月实填数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'monthDoSuccess',
          label: '月通过数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'monthFillingPercent',
          label: '月填表率',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            if (row.monthFillingPercent) {
              return (
                '<a style="color:blue;">' +
                row.monthFillingPercent +
                '%' +
                ' </a>'
              )
            } else {
              return '<a style="color:blue;">' + '0%' + ' </a>'
            }
          },
        },
        {
          prop: 'monthFinishPercent',
          label: '月完成率',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            if (row.monthFinishPercent) {
              return (
                '<a style="color:blue;">' +
                row.monthFinishPercent +
                '%' +
                ' </a>'
              )
            } else {
              return '<a style="color:blue;">' + '0%' + ' </a>'
            }
          },
        },
        {
          prop: 'twoMonthShouldDo',
          label: '两月应填数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'alreadyTwoMonthDo',
          label: '两月实填数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'twoMonthDoSuccess',
          label: '两月通过数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'twoMonthFillingPercent',
          label: '两月填表率',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            if (row.twoMonthFillingPercent) {
              return (
                '<a style="color:blue;">' +
                row.twoMonthFillingPercent +
                '%' +
                ' </a>'
              )
            } else {
              return '<a style="color:blue;">' + '0%' + ' </a>'
            }
          },
        },
        {
          prop: 'twoMonthFinishPercent',
          label: '两月完成率',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            if (row.twoMonthFinishPercent) {
              return (
                '<a style="color:blue;">' +
                row.twoMonthFinishPercent +
                '%' +
                ' </a>'
              )
            } else {
              return '<a style="color:blue;">' + '0%' + ' </a>'
            }
          },
        },
        {
          prop: 'seasonMonthShouldDo',
          label: '季应填数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'alreadySeasonDo',
          label: '季实填数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'seasonDoSuccess',
          label: '季通过数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'seasonFillingPercent',
          label: '季填表率',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            if (row.seasonFillingPercent) {
              return (
                '<a style="color:blue;">' +
                row.seasonFillingPercent +
                '%' +
                ' </a>'
              )
            } else {
              return '<a style="color:blue;">' + '0%' + ' </a>'
            }
          },
        },
        {
          prop: 'seasonFinishPercent',
          label: '季完成率',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            if (row.seasonFinishPercent) {
              return (
                '<a style="color:blue;">' +
                row.seasonFinishPercent +
                '%' +
                ' </a>'
              )
            } else {
              return '<a style="color:blue;">' + '0%' + ' </a>'
            }
          },
        },
        {
          prop: 'halfYearMonthShouldDo',
          label: '半年应填数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'alreadyHalfYearDo',
          label: '半年实填数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'halfYearDoSuccess',
          label: '半年通过数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'halfYearFillingPercent',
          label: '半年填表率',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            if (row.halfYearFillingPercent) {
              return (
                '<a style="color:blue;">' +
                row.halfYearFillingPercent +
                '%' +
                ' </a>'
              )
            } else {
              return '<a style="color:blue;">' + '0%' + ' </a>'
            }
          },
        },
        {
          prop: 'halfYearFinishPercent',
          label: '半年完成率',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            if (row.halfYearFinishPercent) {
              return (
                '<a style="color:blue;">' +
                row.halfYearFinishPercent +
                '%' +
                ' </a>'
              )
            } else {
              return '<a style="color:blue;">' + '0%' + ' </a>'
            }
          },
        },
        {
          prop: 'yearMonthShouldDo',
          label: '年应填数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'alreadyYearDo',
          label: '年实填数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'yearDoSuccess',
          label: '年通过数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'yearFillingPercent',
          label: '年填表率',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            if (row.yearFillingPercent) {
              return (
                '<a style="color:blue;">' +
                row.yearFillingPercent +
                '%' +
                ' </a>'
              )
            } else {
              return '<a style="color:blue;">' + '0%' + ' </a>'
            }
          },
        },
        {
          prop: 'yearFinishPercent',
          label: '年完成率',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            if (row.yearFinishPercent) {
              return (
                '<a style="color:blue;">' +
                row.yearFinishPercent +
                '%' +
                ' </a>'
              )
            } else {
              return '<a style="color:blue;">' + '0%' + ' </a>'
            }
          },
        },
        {
          prop: 'yjbzFinishedNum',
          label: '应急保障表单填写数量',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            if (row.yjbzFinishedNum) {
              return '<a style="color:blue;">' + row.yjbzFinishedNum + '</a>'
            } else {
              return '<a style="color:blue;">' + '0' + ' </a>'
            }
          },
        },

        {
          prop: 'monthTotalFinishCount',
          label: '本月合计完成',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'monthTotalCount',
          label: '本月合计应填',
          align: 'center',
          isShow: true,
        },
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
    //大于当前月份无法选
    banTime() {
      return {
        disabledDate(time) {
          const date = new Date()
          const year = date.getFullYear()
          let month = date.getMonth() + 1
          if (month >= 1 && month <= 9) {
            month = '0' + month
          }
          const currentdate = year.toString() + month.toString()
          const timeyear = time.getFullYear()
          let timemonth = time.getMonth() + 1
          if (timemonth >= 1 && timemonth <= 9) {
            timemonth = '0' + timemonth
          }
          const timedate = timeyear.toString() + timemonth.toString()
          return currentdate < timedate
        },
      }
    },

    //运维任务跳转
    handleCellClick(obj) {
      //单元格单击事件处理函数
      debugger
      var self = this
      var taskCategoryId = ''
      var stationId = obj.row.sStation
      var startDate = ''
      var endDate = ''
      switch (obj.column.label) {
        case '周完成率':
        case '周填表率':
          taskCategoryId = 1
          var objModel = {
            taskNo: '',
            taskCategoryId: taskCategoryId,
            sStations: stationId,
            flag: 1,
            chooseMonth: this.queryparam.searchMonth,
          }
          $emit(this, 'jump', {
            param: '运维任务',
            path: '/index/ywTask?obj=' + JSON.stringify(objModel),
            isjump: true,
          })
          break
        case '月完成率':
        case '月填表率':
          taskCategoryId = 2
          var objModel = {
            taskNo: '',
            taskCategoryId: taskCategoryId,
            sStations: stationId,
            flag: 1,
            chooseMonth: this.queryparam.searchMonth,
          }
          $emit(this, 'jump', {
            param: '运维任务',
            path: '/index/ywTask?obj=' + JSON.stringify(objModel),
            isjump: true,
          })
          break
        case '两月填表率':
        case '两月完成率':
          taskCategoryId = 6
          var objModel = {
            taskNo: '',
            taskCategoryId: taskCategoryId,
            sStations: stationId,
            flag: 1,
            chooseMonth: this.queryparam.searchMonth,
          }
          $emit(this, 'jump', {
            param: '运维任务',
            path: '/index/ywTask?obj=' + JSON.stringify(objModel),
            isjump: true,
          })
          break
        case '季填表率':
        case '季完成率':
          taskCategoryId = 3
          var objModel = {
            taskNo: '',
            taskCategoryId: taskCategoryId,
            sStations: stationId,
            flag: 1,
            chooseMonth: this.queryparam.searchMonth,
          }
          $emit(this, 'jump', {
            param: '运维任务',
            path: '/index/ywTask?obj=' + JSON.stringify(objModel),
            isjump: true,
          })
          break
        case '半年填表率':
        case '半年完成率':
          taskCategoryId = 4
          var objModel = {
            taskNo: '',
            taskCategoryId: taskCategoryId,
            sStations: stationId,
            flag: 1,
            chooseMonth: this.queryparam.searchMonth,
          }
          $emit(this, 'jump', {
            param: '运维任务',
            path: '/index/ywTask?obj=' + JSON.stringify(objModel),
            isjump: true,
          })
          break
        case '年填表率':
        case '年完成率':
          taskCategoryId = 5
          var objModel = {
            taskNo: '',
            taskCategoryId: taskCategoryId,
            sStations: stationId,
            flag: 1,
            chooseMonth: this.queryparam.searchMonth,
          }
          $emit(this, 'jump', {
            param: '运维任务',
            path: '/index/ywTask?obj=' + JSON.stringify(objModel),
            isjump: true,
          })
          break
        case '应急保障表单填写数量':
          taskCategoryId = 7
          var objModel = {
            taskNo: '',
            taskCategoryId: taskCategoryId,
            sStations: stationId,
            flag: 1,
            chooseMonth: this.queryparam.searchMonth,
          }
          $emit(this, 'jump', {
            param: '运维任务',
            path: '/index/ywTask?obj=' + JSON.stringify(objModel),
            isjump: true,
          })
          break
        default:
          break
      }
    },

    //获取当前月
    getNowTime() {
      var now = new Date()
      var year = now.getFullYear() //得到年份
      var month = now.getMonth() + 1 //得到月份
      var date = now.getDate() //得到日期
      month = month.toString().padStart(2, '0')
      date = date.toString().padStart(2, '0')
      var defaultDate = `${year}-${month}`
      console.log(defaultDate)
      this.queryparam['searchMonth'] = defaultDate
    },

    //格式化日期：yyyy-MM-dd
    formatDate(date) {
      var myyear = date.getFullYear()
      var mymonth = date.getMonth() + 1
      var myweekday = date.getDate()

      if (mymonth < 10) {
        mymonth = '0' + mymonth
      }
      if (myweekday < 10) {
        myweekday = '0' + myweekday
      }
      return myyear + '-' + mymonth + '-' + myweekday
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

    getList(obj) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_Task/YwTaskTotal?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&searchMonth=' +
          self.queryparam.searchMonth +
          '&isFinish=' +
          self.queryparam.isFinish +
          '&TaskCategoryType=' +
          self.queryparam.taskCategoryType +
          '&SStations=' +
          self.queryparam.chooseStationIds,
      })
        .then((res) => {
          if (res.status == 200) {
            self.list = res.data.data
            self.page.total = res.data.count
            self.conclusionInfo = res.data.conclusion
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
          '/api/Yw_Task/YwTaskTotalDownLoad?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&searchMonth=' +
          self.queryparam.searchMonth +
          '&isFinish=' +
          self.queryparam.isFinish +
          '&TaskCategoryType=' +
          self.queryparam.taskCategoryType +
          '&SStations=' +
          self.queryparam.chooseStationIds,
      })
        .then((res) => {
          if (res.status == 200) {
            let blob = new Blob([res.data], {
              type: 'application/vnd.ms-excel',
            })
            let downTime = self.downLoadDate()
            const fileName = downTime + '-运维任务统计报告.xls'
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
  mounted() {
    this.getNowTime()
    this.getList() //调用获取列表页的方法
  },
  emits: ['jump'],
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
