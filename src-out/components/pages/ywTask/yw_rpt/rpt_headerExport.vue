<template>
  <div>
    <div class="head">
      <!-- <font font size="1"><h2 id="rptTitle" v-html="rptTitle"></h2> </font> -->
      <font font size="1"
        >城市：<el-tag type="success">{{ headerData.city }}</el-tag></font
      >
      <font font size="1"
        >站点名称：<el-tag type="success">{{
          headerData.sStationName
        }}</el-tag></font
      >
      <!-- 运维公司：<el-tag type="success">{{headerData.unitName}}</el-tag> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rptName: {
      type: String,
      default: '环境空气质量自动监测子站日常巡检记录',
    },
    headerData: {},
  },
  data() {
    return {}
  },
  mounted() {},
  watch: {},
  methods: {},
}
</script>

<style scoped>
div.topbar {
  position: fixed;
  top: 100px;
  left: 250px;
  margin: 10px;
  z-index: 66;
}
.head {
  text-align: center;
  margin-top: 10px;
}
.head div {
  font-family: 宋体;
  font-size: 14px;
  padding: 10px 10px 10px 0;
}
.head div span {
  display: inline-block;
  width: 170px;
}
.rpthead {
  font-weight: bold;
  font-size: 18px;
}
</style>
