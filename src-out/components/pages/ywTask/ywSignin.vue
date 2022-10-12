<template>
  <div id="v_Yw_UsrSignIn">
    <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
      <el-aside width="250px">
        <treeSStation
          :IsCheckBox="true"
          @checkedNodes="getSearchStations"
          :CheckData="CheckData"
        ></treeSStation>
      </el-aside>

      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="运维人员：">
                <el-input
                  v-model:value="queryparam.RealName"
                  placeholder="输入姓名"
                ></el-input>
              </el-form-item>

              <el-form-item label="签到时间：">
                <el-date-picker
                  v-model:value="queryparam.startDate"
                  type="date"
                  :clearable="false"
                  placeholder="选择日期时间"
                  value-format="yyyy-MM-dd"
                  align="right"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item label="-">
                <el-date-picker
                  v-model:value="queryparam.endDate"
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
                  type="primary"
                  v-has="'ywSignin_handleSearch'"
                  icon="el-icon-search"
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
            <!--<el-button size="small" v-has="'ywSignin_handleAdd'" class=" el-button--iconButton" icon="el-icon-plus" style="text-overflow: initial;" @click="handleAdd">添加</el-button>-->
            <!--<el-button size="small" v-has="'ywSignin_handleMultiplDel'" class=" el-button--iconButton" icon="el-icon-delete" style="text-overflow: initial;" @click="handleMultiplDel">删除</el-button>-->
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
      <el-dialog title="考勤签到" v-model:visible="dialogVisible" width="50%">
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
                <el-form-item v-show="false" label="" prop="">
                  <span class="detail">{{ ruleForm.Id }}</span>
                </el-form-item>
                <el-form-item label="城市：" prop="">
                  <span class="detail">{{ ruleForm.City }}</span>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="站点：" prop="">
                  <span class="detail">{{ ruleForm.SStationName }}</span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="运维单位：" prop="">
                  <span class="detail">{{ ruleForm.UnitName }}</span>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="运维人员：" prop="">
                  <span class="detail">{{ ruleForm.RealName }}</span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="签到时间：" prop="">
                  <span class="detail">{{ ruleForm.CreatedTime }}</span>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="签退时间：" prop="">
                  <span class="detail">{{ ruleForm.SignBackTime }}</span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <!--<el-row>
                          <el-col :span="12">
                              <div>
                                  <el-form-item label="经度：" prop="">
                                      <span class="detail">{{ruleForm.Longitude}}</span>
                                  </el-form-item>
                              </div>
                          </el-col>
                          <el-col :span="12">
                              <div>
                                  <el-form-item label="纬度：" prop="">
                                      <span class="detail">{{ruleForm.Latitude}}</span>
                                  </el-form-item>
                              </div>
                          </el-col>
                      </el-row>-->

          <!--<el-row>
                          <el-col :span="12">
                              <div>
                                  <el-form-item label="距目的地：" prop="">
                                      <span class="detail">{{ruleForm.Distaince}}</span>
                                  </el-form-item>
                              </div>
                          </el-col>
                      </el-row>-->
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { plantRenderPara } from '../../../utils/gogocodeTransfer'
import * as Vue from 'vue'
import treeSStation from '../common/treeSStation' //引入treeSStation组件
import rateTable from '../common/rateTable' //引入rateTable组件
import rateCascader from '../common/rateCascader' //引入rateCascader组件
import rateSelect from '../common/rateSelect'

export default {
  name: 'v_Yw_UsrSignIn',
  data() {
    return {
      CheckData: [],
      dialogVisible: false,
      ruleForm: {
        Id: '',
        City: '',
        SStationName: '',
        UnitName: '',
        RealName: '',
        Type: '',
        CreatedTime: '',
        SignBackTime: '',
        Longitude: '',
        Latitude: '',
        Distaince: '',
      },
      rules: {},
      queryparam: {
        chooseStationIds: '',
        RealName: '',
        startDate: '',
        endDate: '',
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
          prop: 'finishTime',
          label: '任务时间周期',
          align: 'center',
          width: 180,
          isShow: true,
          formatter: this.timePeriod,
        },
        { prop: 'city', label: '城市', align: 'center', isShow: true }, //formatter重构//return `返回参数`
        {
          prop: 'sStationName',
          label: '站点',
          align: 'center',
          isShow: true,
          width: 160,
        },
        { prop: 'unitName', label: '运维单位', align: 'center', isShow: true },
        { prop: 'realName', label: '运维人员', align: 'center', isShow: true },
        { prop: 'taskNo', label: '任务编号', align: 'center', isShow: true },
        {
          prop: 'taskCategoryName',
          label: '任务类型',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'signIn',
          label: '签到时间 ',
          align: 'center',
          isShow: true,
          width: 200,
        },
        {
          prop: 'signOut',
          label: '签退时间  ',
          align: 'center',
          isShow: true,
          width: 200,
        },
        { prop: 'hasHousr', label: '分钟', align: 'center', isShow: true },
        { prop: 'remark', label: '工作描述', align: 'center', isShow: true },
        {
          prop: 'inPhoto',
          label: '照片',
          align: 'center',
          isShow: true,
          width: 100,

          render() {
            // var arr=[params.row.inPhotoUrl];
            return Vue.h(
              'el-image',
              plantRenderPara({
                //如果要使用其他组件，将el-image替换其他组件 列如：Esign  props:{imgid:params.row.inPhotoUrl}//imgid是自定义的值
                props: {
                  src: params.row.inPhotoUrl,
                  fit: 'contain',
                  previewSrcList: [params.row.inPhotoUrl],
                  zIndex: 9999,
                },
              })
            )
          },
        },
      ], // 需要展示的列
      operates: {
        //操作栏
        width: 200,
        fixed: 'right',
        list: [
          {
            id: '1',
            label: '下载',
            bgColortype: 'success',
            hasbutton: 'ywSignin_handleDetail',
            show: true, //是否显示按钮
            className: 'success', //样式类名
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.downloadFile(
                row.sStationName + row.realName + row.signIn + '.png',
                row.inPhotoUrl
              )
            },
          },
        ],
      }, // 列操作按钮
    } //return ending
  },
  methods: {
    //选择的站点
    getSearchStations(obj) {
      var self = this
      var configIds = ''
      if (obj != null) {
        obj.forEach((o) => {
          if (o.sStation != '') {
            configIds += o.sStation + ','
          }
        })
        self.queryparam.chooseStationIds = configIds
      }
    },

    //获取时间周期
    timePeriod(row, column, cellValue) {
      var InspectionDesc = ''
      var val = row[column.prop]
      if (row.finishTime == null) {
        return ''
      } else {
        return this.timePeriodDetail(row.type, row.finishTime)
      }
    },

    timePeriodDetail(timeType, val) {
      var self = this
      var today = new Date(val)
      var inspectionDesc = ''
      switch (timeType) {
        case 1: //周
          inspectionDesc =
            today.getFullYear() + '年第' + this.getWeekOfYear(today) + '周'
          break
        case 2: //月
        case 6:
          inspectionDesc =
            today.getFullYear() +
            '年第' +
            parseInt(parseInt(today.getMonth()) + 1) +
            '月'
          break
        case 3: //季
          var Month = today.getMonth() + 1
          var Quarter = ''
          if (Month <= 3) {
            Quarter = '一季度' + Month + '月'
          } else if (Month <= 6) {
            Quarter = '二季度' + Month + '月'
          } else if (Month <= 9) {
            Quarter = '三季度' + Month + '月'
          } else if (Month <= 12) {
            Quarter = '四季度' + Month + '月'
          }
          inspectionDesc = today.getFullYear() + '年第' + Quarter
          break
        case 4: //半年
          var Month = today.getMonth() + 1
          if (Month / 6 <= 1) {
            inspectionDesc =
              today.getFullYear() + '年' + '上半年' + Month + '月'
          } else if (Month / 6 > 1) {
            inspectionDesc =
              today.getFullYear() + '年' + '下半年' + Month + '月'
          }
          break
        case 5:
          var Month = today.getMonth() + 1
          inspectionDesc = today.getFullYear() + '年' + Month + '月'
          break
        default:
          inspectionDesc = ''
          break
      }
      return inspectionDesc
    },

    //判断当前日期为当年第几周
    getWeekOfYear(today) {
      var newday = new Date(today)
      if (
        newday.getHours() == 0 &&
        newday.getMinutes() == 0 &&
        newday.getSeconds() == 0
      ) {
        today = new Date(newday.getTime() + 1000)
      }

      var firstDay = new Date(today.getFullYear(), 0, 1)
      var dayOfWeek = firstDay.getDay()
      var spendDay = 1
      if (dayOfWeek != 0) {
        spendDay = 7 - dayOfWeek + 1
      }
      firstDay = new Date(today.getFullYear(), 0, 1 + spendDay)
      var d = Math.ceil((today.valueOf() - firstDay.valueOf()) / 86400000)
      var result = Math.ceil(d / 7)
      return result + 1
    },

    //获取当天和7天前的时间
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
      this.queryparam['startDate'] = beforedefaultDate
      this.queryparam['endDate'] = defaultDate
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
            url: self.api + '/api/Yw_UsrSignIn/Submit',
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
        url: self.api + '/api/Yw_UsrSignIn/Delmultipl?ids=' + ids,
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
        url: self.api + '/api/Yw_UsrSignIn/Singelmultipl?unitId=' + id,
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

    handleDetail(index, row) {
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
          self.Singelmultipl(row.unitId)
        })
        .catch(function () {})
    },

    getList(obj) {
      var self = this
      //时间做判断
      //判断开始时间和结束时间
      if (self.queryparam.startDate > self.queryparam.endDate) {
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
          '/api/Yw_UsrSignIn/GetList?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&startDate=' +
          self.queryparam.startDate +
          '&SStations=' +
          self.queryparam.chooseStationIds +
          '&endDate=' +
          self.queryparam.endDate +
          '&RealName=' +
          self.queryparam.RealName,
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

    //导出
    download(obj) {
      var self = this
      this.$http({
        method: 'GET',
        responseType: 'blob', // 表明返回服务器返回的数据类型
        url:
          this.api +
          '/api/Yw_UsrSignIn/GetListDownLoad?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&startDate=' +
          self.queryparam.startDate +
          '&SStations=' +
          self.queryparam.chooseStationIds +
          '&endDate=' +
          self.queryparam.endDate +
          '&RealName=' +
          self.queryparam.RealName,
      })
        .then((res) => {
          if (res.status == 200) {
            let blob = new Blob([res.data], {
              type: 'application/vnd.ms-excel',
            })
            const fileName =
              self.queryparam.startDate +
              '至' +
              self.queryparam.endDate +
              self.queryparam.RealName +
              '考勤签到.xls'
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
    //下载
    downloadFile(fileName, content) {
      let aLink = document.createElement('a')
      let blob = this.base64ToBlob(content) //new Blob([content]);

      let evt = document.createEvent('HTMLEvents')
      evt.initEvent('click', true, true) //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
      aLink.download = fileName
      aLink.href = URL.createObjectURL(blob)

      // aLink.dispatchEvent(evt);
      aLink.click()
    },
    //base64转blob
    base64ToBlob(code) {
      let parts = code.split(';base64,')
      let contentType = parts[0].split(':')[1]
      let raw = window.atob(parts[1])
      let rawLength = raw.length

      let uInt8Array = new Uint8Array(rawLength)

      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i)
      }
      return new Blob([uInt8Array], { type: contentType })
    },
    getToFirst(id) {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_UsrSignIn/GetToFirst?Id=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.Id = res.data.data.id
            self.ruleForm.City = res.data.data.city
            self.ruleForm.SStationName = res.data.data.sStationName
            self.ruleForm.UnitName = res.data.data.unitName
            self.ruleForm.RealName = res.data.data.realName
            self.ruleForm.Type = res.data.data.type
            self.ruleForm.CreatedTime = res.data.data.createdTime
            self.ruleForm.SignBackTime = res.data.data.signBackTime
            self.ruleForm.Longitude = res.data.data.longitude
            self.ruleForm.Latitude = res.data.data.latitude
            self.ruleForm.Distaince = res.data.data.distaince
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
    rateSelect,
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
::v-deep .el-image {
  height: 45px !important;
}
#v_Yw_UsrSignIn >>> .el-image {
  height: 45px !important;
}
</style>
