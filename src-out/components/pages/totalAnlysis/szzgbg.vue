<template>
  <div id="v_deviceOnlineInfo">
    <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="日期类型：">
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
                <el-button
                  type="primary"
                  icon="el-icon-download"
                  v-has="'ywReport_handleGenerate'"
                  @click="downloadReport"
                  >导出报表</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </el-header>
        <el-main v-loading="loading" element-loading-text="拼命加载中" />
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'v_deviceOnlineInfo',
  data() {
    return {
      loading: false,
      queryparam: {
        SearchTime: '',
      },
    }
  },

  methods: {
    downloadReport() {
      var type = 'sMonth'
      var self = this
      self.loading = true
      if (self.queryparam.SearchTime == '') {
        self.$message({
          message: '请选择月份!',
          type: 'warning', //success,warning,info,error
        })
        self.loading = false
        return
      }
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_Report/ProduceSZZGReport?stime=' +
          self.queryparam.SearchTime +
          '&dateType=' +
          type,
      })
        .then((res) => {
          if (res.status == 200) {
            if (res.data.message == '生成失败') {
              self.$message({
                message: '生成word失败，无法下载',
                type: 'error', //success,warning,info,error
              })
              return
            } else if (res.data.message == '数据质量不全，无法生成报表') {
              self.$message({
                message: '数据质量不全，无法生成报表',
                type: 'error', //success,warning,info,error
              })
              return
            } else {
              //开始导出
              location.href =
                self.api +
                '/api/Yw_Report/DownLoadYwReportByUrl?path=' +
                res.data.message
            }
            self.loading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  components: {},
  created() {},
  mounted() {},
}
</script>

<style scoped>
#v_deviceOnlineInfo {
  color: black;
}
#showStyle {
  float: right;
}
.stats {
  border-collapse: collapse;
  margin-top: 25px;
  color: #000;
  margin-left: 15px;
}
.stats td {
  border: 1px #000 solid;
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
