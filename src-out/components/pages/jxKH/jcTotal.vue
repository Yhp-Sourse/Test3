<template>
  <div>
    <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
      <el-aside width="250px">
        <treeSStation @checkedNodes="getSearchStations"></treeSStation>
      </el-aside>

      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <!-- <el-form-item label="运维单位：">
                                  <rate-select
                                      v-model="rateSelect.model"
                                      :url='rateSelect.selectUrl'
                                      :urlParams="rateSelect.urlParams"
                                      :multiple="false"
                                      placeholder="全部"
                                      :optionKeys="rateSelect.optionKeys"
                                      :showLabels="rateSelect.showLabels"
                                      :disables="rateSelect.disables"
                                      @change="selectChange"
                                  >
                                  </rate-select>

                              </el-form-item> -->

              <el-form-item label="日期选择：">
                <el-date-picker
                  v-model:value="queryparam.MarkMonth"
                  type="month"
                  placeholder="选择日期时间"
                  format="yyyy 年 MM 月"
                  value-format="yyyy-MM"
                  align="right"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item class="btn">
                <el-button
                  type="primary"
                  v-has="'JcTotal_handleSearch'"
                  icon="el-icon-search"
                  @click="getList()"
                  >查询</el-button
                >
                <el-button
                  type="primary"
                  icon="el-icon-download"
                  v-has="'JcTotal_handleExport'"
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
import rateCascader from '../common/rateCascader' //引入rateCascader组件
import rateSelect from '../common/rateSelect'

export default {
  data() {
    return {
      rateSelect: {
        model: '',
        selectUrl: this.api + '/api/Yw_Unit/GetAllUnit',
        urlParams: JSON.stringify({}),
        optionKeys: JSON.stringify({
          value: 'unitId',
          label: 'unitName',
        }),
        showLabels: 'unitName',
        disables: '',
      },
      dialogVisible: false,
      ruleForm: {},
      rules: {},
      queryparam: {
        MarkMonth: this.getNowTime(), //日期,
        SStation: [],
        UnitId: '',
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
        //   {prop: 'unitName',label: '运维单位',align: 'center',isShow:true,formatter(){return '武汉天虹'}},
        { prop: 'city', label: '城市', align: 'center', isShow: true },
        {
          prop: 'sStationName',
          label: '站点名称',
          align: 'center',
          isShow: true,
          width: 200,
        },
        { prop: 'markMonth', label: '月份', align: 'center', isShow: true },
        {
          prop: 'score',
          label: '分数',
          align: 'center',
          isShow: true,
          formatter(row, column, cellValue) {
            return "<a style='color:#01AAED;'>" + row.score + '</a>'
          },
        },
        { prop: 'markedBy', label: '打分人', align: 'center', isShow: true },
        {
          prop: 'markedTime',
          label: '时间',
          align: 'center',
          isShow: true,
          width: 200,
          formatter(row, column, cellValue) {
            if (row.markedTime) {
              return row.markedTime.replace('T', ' ')
            }
          },
        },
        {
          prop: 'remark',
          label: '备注',
          align: 'center',
          isShow: true,
          width: 200,
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
    getNowTime() {
      var now = new Date()
      var year = now.getFullYear() //得到年份
      var month = now.getMonth() //得到月份
      var date = now.getDate() //得到日期
      var hour = ' 00:00:00' //默认时分秒 如果传给后台的格式为年月日时分秒，就需要加这个，如若不需要，此行可忽略
      month = month + 1
      month = month.toString().padStart(2, '0')
      date = date.toString().padStart(2, '0')
      //    var defaultDate = `${year}-${month}-${date}${hour}`;
      var defaultDate = `${year}-${month}`
      return defaultDate
      this.queryparam['MarkMonth'] = defaultDate
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
    handleCellClick(obj) {
      //单元格单击事件处理函数
      switch (obj.column.label) {
        case '分数':
          this.handleView(obj.row.markId, obj.row.sStation, obj.row.markMonth)
          break
        default:
          break
      }
    },
    handleView(markId, sStation, markMonth) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Jx/GetScoreSY?markId=' +
          markId +
          '&sStation=' +
          sStation +
          '&markMonth=' +
          markMonth,
      })
        .then((res) => {
          if (res.status == 200) {
            if (res.data.data.taskNo == '') {
              self.$message({
                message: '没有可溯源的数据!',
                type: 'warning', //success,warning,info,error
              })
            } else {
              let obj = {
                taskNo: res.data.data.taskNo,
                type: 'view',
                fromTab: '',
              }
              $emit(self, 'jump', {
                param: '第四方检查打分',
                path:
                  '/index/ywFourthInspectionTaskShow?obj=' +
                  JSON.stringify(obj),
                isjump: true,
              })
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
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
    selectChange(val, valObj) {
      this.model = val
      this.queryparam.UnitId = val
      // console.log("valObj=>", valObj);
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
          '/api/Jx/GetJcList?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&UnitId=' +
          self.queryparam.UnitId +
          '&MarkMonth=' +
          self.queryparam.MarkMonth +
          '&SStations=' +
          self.queryparam.chooseStationIds,
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
        url: this.api + '/api/Jx/GetToFirst?unitId=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            if (res.data.data != null) {
              self.ruleForm.UnitId = res.data.data.unitId
              self.ruleForm.UnitName = res.data.data.unitName
              self.ruleForm.SortOrder = res.data.data.sortOrder
              self.ruleForm.Description = res.data.data.description
            } else {
              self.ruleForm.UnitId = ''
              self.ruleForm.UnitName = ''
              self.ruleForm.SortOrder = ''
              self.ruleForm.Description = ''
            }
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
          '/api/Jx/GetJcListDownLoad?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&UnitId=' +
          self.queryparam.UnitId +
          '&MarkMonth=' +
          self.queryparam.MarkMonth +
          '&SStations=' +
          self.queryparam.chooseStationIds,
      })
        .then((res) => {
          if (res.status == 200) {
            let blob = new Blob([res.data], {
              type: 'application/vnd.ms-excel',
            })
            let downTime = self.downLoadDate()
            const fileName = downTime + '-检查统计.xls'
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
    rateCascader,
    rateSelect,
  },
  mounted() {
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
