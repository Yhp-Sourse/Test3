<template>
  <div id="v_deviceLifeCycleDisplay">
    <el-container style="height: calc(100vh - 136px); border: 1px solid #eee">
      <el-container>
        <el-header>
          <div style="margin: 10px; float: left">
            <el-form :inline="true" class="demo-form-inline">
              <img
                class="ins_msg"
                style="float: left"
                src="../../../assets/Images/ins_whl.jpg"
              />
              <div style="width: 50%; margin: 5px; float: left">
                <el-form-item
                  style="float: left; color: #333"
                  label=" 品牌："
                  >{{ query.FacName }}</el-form-item
                >
                <el-form-item
                  style="float: left; color: #333"
                  label=" 型号："
                  >{{ query.Model }}</el-form-item
                >
              </div>
            </el-form>
          </div>
        </el-header>
        <el-main>
          <el-tabs
            v-model:value="activeName"
            style="width: 71.5%; float: left"
            @tab-click="handleClick"
          >
            <el-tab-pane label="全部" name="first">
              <rate-table
                :list="list"
                :options="options.options"
                :columns="showView.columns"
                :operates="showView.operates"
                :pageShow="showView.page.pageShow"
                :total="showView.page.total"
              ></rate-table>
            </el-tab-pane>
            <el-tab-pane label="设备维修" name="second">
              <rate-table
                :list="wxlist"
                :options="showwxlist.options.options"
                :columns="showwxlist.columns"
                :operates="showwxlist.operates"
                :pageShow="showwxlist.page.pageShow"
                :total="showwxlist.page.total"
              ></rate-table>
            </el-tab-pane>
            <el-tab-pane label="设备检查" name="third">
              <rate-table
                :list="jclist"
                @handleSelectionChange="handleSelectionChange"
                @sizeChange="getSizeChange"
                @currentPage="getCurrentPage"
                :options="options"
                :columns="columns"
                :operates="operates"
                :pageShow="page.pageShow"
                :total="page.total"
              ></rate-table>
            </el-tab-pane>
          </el-tabs>
          <div
            class="layui-card-body"
            style="
              width: 25%;
              float: right;
              box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.35);
            "
          >
            <div
              style="
                width: 200px;
                height: 60px;
                background: rgb(202, 221, 254);
                border-radius: 8px;
                text-align: center;
                line-height: 60px;
                margin: 10px auto;
                font-weight: bold;
                font-size: 18px;
              "
            >
              设备生命周期
            </div>
            <el-timeline :reverse="reverse">
              <el-timeline-item
                :key="index"
                :icon="icon"
                :type="type"
                :size="size"
                :timestamp="Show_ProductionDate"
                placement="top"
              >
                <el-card><p>出厂日期</p></el-card>
              </el-timeline-item>
              <el-timeline-item
                :key="index"
                :icon="icon"
                :type="type"
                :size="size"
                :timestamp="Show_ShelfTime"
                placement="top"
              >
                <el-card><p>验收日期</p></el-card>
              </el-timeline-item>
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="icon"
                :type="type"
                :size="size"
                :timestamp="activity.show_ChangeTime"
                placement="top"
              >
                <el-card
                  ><p>{{ activity.changeReason }}</p></el-card
                ></el-timeline-item
              >
            </el-timeline>
          </div>
        </el-main>
      </el-container>
    </el-container>

    <div></div>
  </div>
</template>

<script>
import treeSStation from '../common/treeSStation'
import rateTable from '../common/rateTable' //引入table组件

export default {
  name: 'v_deviceLifeCycleDisplay',
  data() {
    return {
      size: 'large',
      type: 'primary',
      icon: 'el-icon-more',
      color: '#0bbd87',
      reverse: false,
      Show_ProductionDate: '',
      Show_ShelfTime: '',
      activities: [],
      query: {
        Param: '',
        SStationName: '',
        DeviceId: '',
        SStation: '',
        Model: '',
        FacName: '',
      },
      showwxlist: {
        columns: [
          {
            prop: 'sStationName',
            label: '站点名称',
            align: 'center',
            isShow: true,
          },
          {
            prop: 'main_Param',
            label: '监测类型',
            align: 'center',
            isShow: true,
          },
          {
            prop: 'main_Model',
            label: '设备型号',
            align: 'center',
            isShow: true,
          },
          {
            prop: 'failurePhenomenon',
            label: '故障现象',
            align: 'center',
            isShow: true,
          },
          {
            prop: 'causeFailure',
            label: '故障原因',
            align: 'center',
            isShow: true,
          },
          {
            prop: 'failureTime',
            label: '故障时间',
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
        options: {
          // table样式参数
          stripe: true, // 是否为斑马纹 table
          loading: false, // 是否添加表格loading加载动画
          highlightCurrentRow: true, // 是否支持当前行高亮显示
          mutiSelect: true, // 是否支持列表项选中功能
        }, // table 的参数结束
      },
      showView: {
        columns: [
          {
            prop: 'show_Status',
            label: '设备状态',
            align: 'center',
            isShow: true,
          },
          {
            prop: 'deviceUniqueCode',
            label: '设备编号',
            align: 'center',
            isShow: true,
          },
          { prop: 'param', label: '监测参数', align: 'center', isShow: true },
          {
            prop: 'sStationName',
            label: '所在仓库名',
            align: 'center',
            isShow: true,
          },
          {
            prop: 'sStationName',
            label: '所在站点名',
            align: 'center',
            isShow: true,
          },
          {
            prop: 'show_ShelfTime',
            label: '操作时间',
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
        options: {
          // table样式参数
          stripe: true, // 是否为斑马纹 table
          loading: false, // 是否添加表格loading加载动画
          highlightCurrentRow: true, // 是否支持当前行高亮显示
          mutiSelect: true, // 是否支持列表项选中功能
        }, // table 的参数结束
      },
      list: [], // table数据
      wxlist: [],
      jclist: [],
      activeName: 'first',
      dialogVisible: false,
      ruleForm: {
        Id: '',
        Name: '',
        Description: '',
        //SortOrder:'',
      },
      page: {
        //关于页码的相关参数
        pageShow: true, //是否显示
        total: 0, //总条数
        pageSize: 10, //每页条数
        pageNo: 1, //第几页
      },
      handleSelection: [], //checkbox选中行
      options: {
        // table样式参数
        stripe: true, // 是否为斑马纹 table
        loading: false, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: true, // 是否支持列表项选中功能
      }, // table 的参数结束
      columns: [
        {
          prop: 'sStationName',
          label: '站点名称',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'deviceType',
          label: '设备类型',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_StartTime',
          label: '开始时间',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_EndTime',
          label: '结束时间',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'resultStatus',
          label: '评价',
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
    getparm() {
      var self = this

      const data = self.getUrlKey('obj')
      self.query.Param = JSON.parse(data).Param
      self.query.SStationName = JSON.parse(data).SStationName
      self.query.DeviceId = JSON.parse(data).DeviceId
      self.query.SStation = JSON.parse(data).SStation
    },

    getUrlKey(name) {
      return (
        decodeURIComponent(
          (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(
            location.href
          ) || [, ''])[1].replace(/\+/g, '%20')
        ) || null
      )
    },
    getList(obj) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_DeviceLifeCycle/DeviceLifeCycleDisplayById?Id=' +
          self.query.DeviceId +
          '&SStationName=' +
          self.query.SStationName +
          '&Param=' +
          self.query.Param +
          '&SStation=' +
          self.query.SStation +
          '&pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo,
      })
        .then((res) => {
          if (res.status == 200) {
            debugger
            self.query.FacName = res.data.data[0].facName
            self.query.Model = res.data.data[0].model
            self.list = res.data.data
            self.wxlist = res.data.data1
            self.jclist = res.data.data2
            self.Show_ProductionDate = res.data.data[0].show_ProductionDate
            self.Show_ShelfTime = res.data.data[0].show_ShelfTime
            self.activities = res.data.changelist
            self.page.total = res.data.count
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
    this.getparm()
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
  background: #333;
  line-height: 35px;
  text-align: right;
  padding: 0px 5px;
}
.el-main {
  color: #333;
  height: calc(100vh - 336px);
}
.el-aside[data-v-47323bf2],
.el-main[data-v-47323bf2] {
  background-color: #fff;
  color: #333;
  text-align: center;
  height: 100%;
}
</style>
