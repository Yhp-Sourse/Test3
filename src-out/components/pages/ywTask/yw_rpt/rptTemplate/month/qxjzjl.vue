<template>
  <div>
    <form id="FlowTest">
      <div style="float: left; margin: 15px 45px">
        巡检时间：
        <el-date-picker
          v-model:value="ruleForm.yj_1"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择时间"
          :clearable="false"
        ></el-date-picker>
        &nbsp; &nbsp; &nbsp;
        <!-- 巡检结束时间：
              <el-date-picker v-model="ruleForm.yj_2" type="date" value-format="yyyy-MM-dd" placeholder="选择时间" :clearable=false></el-date-picker> -->
      </div>

      <table border="0" id="mainTable" style="border-bottom: none">
        <tbody>
          <tr>
            <td>仪器型号</td>
            <td>
              <input
                v-model="ruleForm.E_rc_1"
                type="text"
                class="td_input"
                id="E_DeviceModel"
                style="height: 30px"
              />
            </td>
            <td>仪器编号</td>
            <td>
              <input
                v-model="ruleForm.E_rc_2"
                type="text"
                class="td_input"
                id="E_DeviceNo"
                style="height: 30px"
              />
            </td>
            <td>检查时间</td>
            <td>
              <el-date-picker
                v-model:value="ruleForm.E_rc_3"
                type="datetime"
                placeholder="选择时间"
              ></el-date-picker>
            </td>
          </tr>
        </tbody>
      </table>
      <table id="correctTable">
        <tbody>
          <tr>
            <td rowspan="5">质控设备信息</td>
          </tr>
          <tr>
            <td>设备名称</td>
            <td>型号</td>
            <td>站内编号</td>
            <td>检定日期</td>
          </tr>
          <tr>
            <td>标准气压计</td>
            <td>
              <input
                v-model="ruleForm.E_rc_4"
                type="text"
                class="td_input"
                id="E_StandardType"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_5"
                type="text"
                class="td_input"
                id="E_StandardNo"
                style="height: 30px"
              />
            </td>
            <td>
              <el-date-picker
                v-model:value="ruleForm.E_rc_6"
                type="datetime"
                placeholder="选择时间"
              ></el-date-picker>
            </td>
          </tr>
          <tr>
            <td>标准温湿度计</td>
            <td>
              <input
                v-model="ruleForm.E_rc_7"
                type="text"
                class="td_input"
                id="E_StandardType1"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_8"
                type="text"
                class="td_input"
                id="E_StandardNo1"
                style="height: 30px"
              />
            </td>
            <td>
              <el-date-picker
                v-model:value="ruleForm.E_rc_9"
                type="datetime"
                placeholder="选择时间"
              ></el-date-picker>
            </td>
          </tr>
          <tr>
            <td>手持式风速风向仪</td>
            <td>
              <input
                v-model="ruleForm.E_rc_10"
                type="text"
                class="td_input"
                id="E_StandardType2"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_11"
                type="text"
                class="td_input"
                id="E_StandardNo2"
                style="height: 30px"
              />
            </td>
            <td>
              <el-date-picker
                v-model:value="ruleForm.E_rc_12"
                type="datetime"
                placeholder="选择时间"
              ></el-date-picker>
            </td>
          </tr>
          <tr>
            <td>校准仪器</td>
            <td>标准质控设备读数</td>
            <td>仪器显示数值</td>
            <td>是否合格</td>
            <td>处理措施</td>
          </tr>
          <tr>
            <td>室外温度</td>
            <td>
              <input
                v-model="ruleForm.E_rc_13"
                type="text"
                class="td_input"
                id="E_StandardDeviceNum"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_14"
                type="text"
                class="td_input"
                id="E_DeviceNum"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_15"
                type="text"
                class="td_input"
                id="E_IsOrNotQualified"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_16"
                type="text"
                class="td_input"
                id="E_DealWays"
                style="height: 30px"
              />
            </td>
          </tr>
          <tr>
            <td>室内温度</td>
            <td>
              <input
                v-model="ruleForm.E_rc_17"
                type="text"
                class="td_input"
                id="E_StandardDeviceNum1"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_18"
                type="text"
                class="td_input"
                id="E_DeviceNum1"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_19"
                type="text"
                class="td_input"
                id="E_IsOrNotQualified1"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_20"
                type="text"
                class="td_input"
                id="E_DealWays1"
                style="height: 30px"
              />
            </td>
          </tr>
          <tr>
            <td>室外湿度</td>
            <td>
              <input
                v-model="ruleForm.E_rc_21"
                type="text"
                class="td_input"
                id="E_StandardDeviceNum2"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_22"
                type="text"
                class="td_input"
                id="E_DeviceNum2"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_23"
                type="text"
                class="td_input"
                id="E_IsOrNotQualified2"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_24"
                type="text"
                class="td_input"
                id="E_DealWays2"
                style="height: 30px"
              />
            </td>
          </tr>
          <tr>
            <td>室内湿度</td>
            <td>
              <input
                v-model="ruleForm.E_rc_25"
                type="text"
                class="td_input"
                id="E_StandardDeviceNum3"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_26"
                type="text"
                class="td_input"
                id="E_DeviceNum3"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_27"
                type="text"
                class="td_input"
                id="E_IsOrNotQualified3"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_28"
                type="text"
                class="td_input"
                id="E_DealWays3"
                style="height: 30px"
              />
            </td>
          </tr>
          <tr>
            <td>气压</td>
            <td>
              <input
                v-model="ruleForm.E_rc_29"
                type="text"
                class="td_input"
                id="E_StandardDeviceNum4"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_30"
                type="text"
                class="td_input"
                id="E_DeviceNum4"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_31"
                type="text"
                class="td_input"
                id="E_IsOrNotQualified4"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_32"
                type="text"
                class="td_input"
                id="E_DealWays4"
                style="height: 30px"
              />
            </td>
          </tr>
          <tr>
            <td>风速</td>
            <td>
              <input
                v-model="ruleForm.E_rc_33"
                type="text"
                class="td_input"
                id="E_StandardDeviceNum5"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_34"
                type="text"
                class="td_input"
                id="E_DeviceNum5"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_35"
                type="text"
                class="td_input"
                id="E_IsOrNotQualified5"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_36"
                type="text"
                class="td_input"
                id="E_DealWays5"
                style="height: 30px"
              />
            </td>
          </tr>
          <tr>
            <td>风向</td>
            <td>
              <input
                v-model="ruleForm.E_rc_37"
                type="text"
                class="td_input"
                id="E_StandardDeviceNum6"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_38"
                type="text"
                class="td_input"
                id="E_DeviceNum6"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_39"
                type="text"
                class="td_input"
                id="E_IsOrNotQualified6"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.E_rc_40"
                type="text"
                class="td_input"
                id="E_DealWays6"
                style="height: 30px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
import {
  $on,
  $off,
  $once,
  $emit,
} from '../../../../../../utils/gogocodeTransfer'
export default {
  props: {
    formData: Object,
    btnType: String,
  },
  components: {},
  data() {
    return {
      dataContent: '',
      ruleForm: {
        InspectionSTime: '',
        InspectionETime: '',
        E_rc_1: '',
        E_rc_2: '',
        E_rc_3: '',
        E_rc_4: '',
        E_rc_5: '',
        E_rc_6: '',
        E_rc_7: '',
        E_rc_8: '',
        E_rc_9: '',
        E_rc_10: '',
        E_rc_11: '',
        E_rc_12: '',
        E_rc_13: '',
        E_rc_14: '',
        E_rc_15: '',
        E_rc_16: '',
        E_rc_17: '',
        E_rc_18: '',
        E_rc_19: '',
        E_rc_20: '',
        E_rc_21: '',
        E_rc_22: '',
        E_rc_23: '',
        E_rc_24: '',
        E_rc_25: '',
        E_rc_26: '',
        E_rc_27: '',
        E_rc_28: '',
        E_rc_29: '',
        E_rc_30: '',
        E_rc_31: '',
        E_rc_32: '',
        E_rc_33: '',
        E_rc_34: '',
        E_rc_35: '',
        E_rc_36: '',
        E_rc_37: '',
        E_rc_38: '',
        E_rc_39: '',
        E_rc_40: '',
        yj_1: '',
        yj_2: '',
      },
    }
  },
  // computed: {
  //     formSubmitData: function () {
  //         return this.$emit("formSubmit",this.Qs.stringify(this.ruleForm));
  //     }
  // },
  watch: {
    btnType(val, oldVal) {
      if (val == '保存') {
        $emit(this, 'formSava', JSON.stringify(this.ruleForm))
      }
      if (val == '提交') {
        $emit(this, 'formSubmit', JSON.stringify(this.ruleForm))
      }
    },
    formData(val, oldVal) {
      if (val.content != null) {
        this.ruleForm = JSON.parse(val.content)
      }
    },
  },
  mounted() {
    //this.getNowTime();
  },
  methods: {
    //初始化时间
    getNowTime() {
      var d = new Date()
      var dyear = d.getFullYear() //得到年份
      var dmonth = d.getMonth() //得到月份
      dmonth = dmonth + 1
      dmonth = dmonth.toString().padStart(2, '0')
      var dTime = d.getTime()
      var dhour = d.getHours()
      dhour = dhour.toString().padStart(2, '0')
      var dminutes = d.getMinutes()
      dminutes = dminutes.toString().padStart(2, '0')
      var dseconds = d.getSeconds()
      dseconds = dseconds.toString().padStart(2, '0')
      var ddate = d.getDate() //得到日期
      ddate = ddate.toString().padStart(2, '0')
      var dbeforedefaultDate = `${dyear}-${dmonth}-${ddate} ${dhour}:${dminutes}:${dseconds}`

      //1个小时后
      var myDate = new Date()
      var myDateyear = myDate.getFullYear() //得到年份
      var myDatemonth = myDate.getMonth() //得到月份
      myDatemonth = myDatemonth + 1
      myDatemonth = myDatemonth.toString().padStart(2, '0')
      var myDateTime = myDate.getTime()
      var hour = myDate.getHours() + 1
      hour = hour.toString().padStart(2, '0')
      var minutes = myDate.getMinutes()
      minutes = minutes.toString().padStart(2, '0')
      var seconds = myDate.getSeconds()
      seconds = seconds.toString().padStart(2, '0')
      var myDatedate = myDate.getDate() //得到日期
      myDatedate = myDatedate.toString().padStart(2, '0')
      var afteOneHourDate = `${myDateyear}-${myDatemonth}-${myDatedate} ${hour}:${minutes}:${seconds}`
      //运维任务统计
      this.ruleForm['yj_1'] = dbeforedefaultDate
      this.ruleForm['yj_2'] = afteOneHourDate
    },
  },
  emits: ['formSava', 'formSubmit'],
}
</script>

<style scoped>
#main,
table {
  width: 95%;
  margin: 10px auto;
  border-left: 1px solid #aaaaaa;
  border-bottom: 1px solid #aaaaaa;
}
#main {
  border: none;
}
td {
  border-top: 1px solid #aaaaaa;
  border-right: 1px solid #aaaaaa;
}
#tb1 tr td {
  padding: 5px;
  width: 24%;
  text-align: center;
}
#tb2 tr td {
  padding: 5px;
  width: 16%;
  text-align: center;
}
tr td input {
  width: 96%;
  margin: 2px;
}
.height30 {
  height: 30px !important;
}
</style>
