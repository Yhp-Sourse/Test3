<template>
  <div>
    <div class="layui-input-inline" style="left: 170px">
      <font font size="1"
        >填表人：<el-tag type="success">{{
          footerData.dealerName
        }}</el-tag></font
      >
      <font font size="1"
        >复核人：<el-tag type="success">{{
          footerData.nextAuditerName
        }}</el-tag></font
      >
      <br />
      <font font size="1"
        >填写时间：<el-tag type="success">{{
          footerData.createTime
        }}</el-tag></font
      >
      <font font size="1"
        >复核时间：<el-tag type="success">{{
          footerData.auditeTime
        }}</el-tag></font
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    footerData: {},
  },
  data() {
    return {}
  },
  mounted() {},
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
