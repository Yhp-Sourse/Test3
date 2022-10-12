<template>
  <div>
    <div class="beizhu" v-if="actionStatus.yijian">
      审核意见：<el-input
        type="textarea"
        :rows="3"
        v-model:value="footerData.isFinished"
        autocomplete="off"
      ></el-input>
    </div>
    <div class="layui-input-inline" style="left: 170px">
      填表人：<el-tag type="success">{{ footerData.dealerName }}</el-tag>
      填写时间：<el-tag type="success">{{ footerData.createTime }}</el-tag>
      复核人：<el-tag type="success">{{ footerData.nextAuditerName }}</el-tag>
      复核时间：<el-tag type="success">{{ footerData.auditeTime }}</el-tag>
    </div>
    <div id="btn" style="margin: 20px 0; text-align: center">
      <el-button v-if="actionStatus.sava" @click="rpt_sava" type="primary" round
        >保存</el-button
      >
      <el-button
        v-if="actionStatus.submit"
        @click="rpt_submit"
        type="success"
        round
        >确认</el-button
      >
      <el-button
        v-if="actionStatus.success"
        @click="rpt_success"
        type="primary"
        round
        >通过</el-button
      >
      <el-button
        v-if="actionStatus.refuse"
        @click="rpt_refuse"
        type="success"
        round
        >拒绝</el-button
      >
    </div>
  </div>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../../utils/gogocodeTransfer'
export default {
  props: {
    footerData: {},
  },
  data() {
    return {
      reportCode: '',
      TaskNo: '',
      secondButtonType: '',
      nowTime: '',
      rptStatus: '',
      //按钮显示状态
      actionStatus: {
        sava: false,
        submit: false,
        success: false,
        refuse: false,
        yijian: false,
      },
    }
  },
  mounted() {
    this.nowTime = this.filterDate(new Date())
    this.getParam()
  },
  methods: {
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
    getParam() {
      var self = this
      const data = self.getUrlKey('obj')
      if (data != null) {
        self.TaskNo = JSON.parse(data).taskNo
        self.reportCode = JSON.parse(data).rptCode
        self.secondButtonType = JSON.parse(data).secondButtonType
        self.rptStatus = JSON.parse(data).status
      }
      //控制按钮权限
      if (self.secondButtonType == 'edit') {
        //编辑
        self.actionStatus.sava = true
        self.actionStatus.submit = true
        if (self.rptStatus == 3) {
          self.actionStatus.yijian = true
        }
      } else if (self.secondButtonType == 'detail') {
        //查看
        self.actionStatus.yijian = true
      } else if (self.secondButtonType == 'judge') {
        //审核
        self.actionStatus.success = true
        self.actionStatus.refuse = true
        self.actionStatus.yijian = true
      } else {
        //新增
        self.actionStatus.sava = true
        self.actionStatus.submit = true
      }
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
    handleReturn() {
      $emit(this, 'closeCurrentPage', '运维表单') //调用closeCurrentPage方法注意；两点1：第二个参数必须是string，2：长度必须大于等于4
      var obj = { taskNo: this.TaskNo, secondButtonType: this.secondButtonType }
      $emit(this, 'jump', {
        param: '任务编辑',
        path: '/index/ywTaskDisplay?obj=' + JSON.stringify(obj),
        isjump: true,
      })
    },
    rpt_sava() {
      //保存状态为 0
      $emit(this, 'rpt_sava', this.footerData)
    },
    rpt_submit() {
      //提交状态为 1
      $emit(this, 'rpt_submit', this.footerData)
    },
    rpt_success() {
      //通过状态为2
      $emit(this, 'rpt_success', this.footerData)
    },
    rpt_refuse() {
      //拒绝状态回退为3
      $emit(this, 'rpt_refuse', this.footerData)
    },
  },
  emits: [
    'closeCurrentPage',
    'jump',
    'rpt_sava',
    'rpt_submit',
    'rpt_success',
    'rpt_refuse',
  ],
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
