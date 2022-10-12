<template>
  <div id="v_deviceOnlineInfo">
    <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
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
              <el-form-item label="选择月份：">
                <el-date-picker
                  v-model:value="queryparam.SearchTime"
                  type="month"
                  :clearable="false"
                  value-format="yyyy-MM"
                  placeholder="请选择日期"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item class="btn">
                <!-- <el-button type="primary"  @click="Search();">查询</el-button> -->
                <el-button
                  type="primary"
                  v-has="'ExportFormOfOneKey_handleExport'"
                  @click="exprotReport()"
                  >预览</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="tools"></div>
        </el-header>
        <el-main id="exportWord" v-if="isRefresh"> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
import treeSStation from '../common/treeSStation'

export default {
  name: 'v_deviceOnlineInfo',
  data() {
    return {
      empt: '',
      isRefresh: true,
      //运维单位绑定下拉框信息
      CheckData: [], // [{sStation:'SS4301051'},{sStation:'SS4301051'}]
      queryparam: {
        SearchTime: '2022-02',
        chooseStationIds: '',
      },
      formData1: {},
      formData2: {},
      arr: [],
    } //return ending
  },
  components: {
    treeSStation,
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    exprotReport() {
      debugger
      if (this.queryparam.chooseStationIds.length != 9) {
        this.$message({ message: '请选择且仅选择一个站点!', type: 'warning' })
        return false
      }
      var obj = {
        SearchTime: this.queryparam.SearchTime,
        chooseStationIds: this.queryparam.chooseStationIds,
      }
      $emit(this, 'jump', {
        param: '电子表单一键导出',
        path: '/ExportFormOfOneKey2?obj=' + JSON.stringify(obj),
        isjump: true,
      })
      // this.$emit("jump",{
      //     param: "电子表单一键导出",
      //     path: "/login2",
      //     isjump: true,
      // });
    },
    getSearchStations(obj) {
      var self = this
      var configIds = ''
      if (obj != null) {
        obj.forEach((o) => {
          configIds += o.sStation
        })
        self.queryparam.chooseStationIds = configIds
      }
    },
  },
  emits: ['jump'],
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
  height: calc(100vh - 356px);
}
</style>
