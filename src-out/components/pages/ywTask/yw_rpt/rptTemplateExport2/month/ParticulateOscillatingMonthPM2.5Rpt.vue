<template>
  <div>
    <el-form id="ASEmergency" :model="ruleForm" ref="Form">
      <table border="0" id="mainTable" style="border-bottom: none">
        <tbody>
          <tr>
            <td colspan="3">巡检开始时间：</td>
            <td colspan="2">
              <el-form-item label="" prop="yj_1">
                <el-date-picker
                  v-model:value="ruleForm.yj_1"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="选择时间"
                  :clearable="false"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td colspan="3">巡检结束时间：</td>
            <td colspan="2">
              <el-form-item label="" prop="yj_2">
                <el-date-picker
                  v-model:value="ruleForm.yj_2"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="选择时间"
                  :clearable="false"
                ></el-date-picker>
              </el-form-item>
            </td>
          </tr>

          <tr>
            <td>仪器型号</td>
            <td colspan="2">
              <el-form-item label="" prop="DeviceModel">
                <input
                  v-model="ruleForm.DeviceModel"
                  type="text"
                  class="td_input"
                  id="DeviceModel"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>仪器编号</td>
            <td colspan="2">
              <el-form-item label="" prop="DeviceNo">
                <input
                  v-model="ruleForm.DeviceNo"
                  type="text"
                  class="td_input"
                  id="DeviceNo"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td colspan="2">检查时间</td>
            <td colspan="2">
              <el-form-item label="" prop="ACheckTime"
                ><el-date-picker
                  v-model:value="ruleForm.ACheckTime"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
          </tr>

          <tr>
            <td rowspan="4" colspan="3">质控设备信息</td>
          </tr>
          <tr>
            <td>设备名称</td>
            <td colspan="2">型号</td>
            <td colspan="2">站内编号</td>
            <td colspan="2">检定日期</td>
          </tr>
          <tr>
            <td>温湿度计</td>
            <td colspan="2">
              <el-form-item label="" prop="WDType">
                <input
                  v-model="ruleForm.WDType"
                  type="text"
                  class="td_input"
                  id="WDType"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="WDNo">
                <input
                  v-model="ruleForm.WDNo"
                  type="text"
                  class="td_input"
                  id="WDNo"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="CheckTime">
                <el-date-picker
                  v-model:value="ruleForm.CheckTime"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker
              ></el-form-item>
            </td>
          </tr>
          <tr>
            <td>气压计</td>
            <td colspan="2">
              <el-form-item label="" prop="PressType">
                <input
                  v-model="ruleForm.PressType"
                  type="text"
                  class="td_input"
                  id="PressType"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="PressNo">
                <input
                  v-model="ruleForm.PressNo"
                  type="text"
                  class="td_input"
                  id="PressNo"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="CheckTime1">
                <el-date-picker
                  v-model:value="ruleForm.CheckTime1"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker
              ></el-form-item>
            </td>
          </tr>
        </tbody>
      </table>
      <table id="leakTable" style="border-bottom: none">
        <tbody>
          <tr>
            <td colspan="10" class="Mergetd">检查项目</td>
          </tr>
          <tr>
            <td colspan="2">滤纸、负载膜是否需要更换</td>
            <td colspan="4">
              <input
                v-model="ruleForm.CheckChange"
                type="radio"
                name="Consistency1"
                value="1"
                id="CheckChange"
                checked="checked"
                style="width: 10%; height: 15px"
              />更换
            </td>
            <td colspan="4">
              <input
                v-model="ruleForm.CheckChange"
                type="radio"
                name="Consistency1"
                value="0"
                id="CheckNChange"
                style="width: 10%; height: 15px"
              />不更换
            </td>
          </tr>
          <tr>
            <td colspan="2">系统自检</td>
            <td colspan="4">
              <input
                v-model="ruleForm.Normal"
                type="radio"
                name="Consistency2"
                value="1"
                id="Normal"
                checked="checked"
                style="width: 10%; height: 15px"
              />正常
            </td>
            <td colspan="4">
              <input
                v-model="ruleForm.Normal"
                type="radio"
                name="Consistency2"
                value="0"
                id="Abnormal"
                style="width: 10%; height: 15px"
              />异常
            </td>
          </tr>
          <tr>
            <td colspan="2">时钟检查</td>
            <td>设备时间</td>
            <td colspan="2">
              <el-form-item label="" prop="DeviceTime"
                ><el-time-picker
                  v-model:value="ruleForm.DeviceTime"
                  format="HH:mm"
                  value-format="HH:mm"
                  placeholder="选择时间"
                  id="DeviceTime"
                ></el-time-picker
              ></el-form-item>
            </td>
            <td>数采仪时间</td>
            <td colspan="2">
              <el-form-item label="" prop="SCYTime"
                ><el-time-picker
                  v-model:value="ruleForm.SCYTime"
                  format="HH:mm"
                  value-format="HH:mm"
                  placeholder="选择时间"
                  id="SCYTime"
                ></el-time-picker
              ></el-form-item>
            </td>
            <td>是否校准</td>
            <td>
              <el-form-item label="" prop="IsNotJZ"
                ><input
                  v-model="ruleForm.IsNotJZ"
                  type="text"
                  class="td_input"
                  id="IsNotJZ"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="2">清洗部件</td>
            <td colspan="2">进气管</td>
            <td colspan="2">
              <el-form-item label="" prop="JQG"
                ><input
                  v-model="ruleForm.JQG"
                  type="text"
                  class="td_input"
                  id="JQG"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">光电管和采样体</td>
            <td colspan="2">
              <el-form-item label="" prop="GDGCYG">
                <input
                  v-model="ruleForm.GDGCYG"
                  type="text"
                  class="td_input"
                  id="GDGCYG"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="2">检漏</td>
            <td>泵开：</td>
            <td>
              <el-form-item label="" prop="BengOn"
                ><input
                  v-model="ruleForm.BengOn"
                  type="text"
                  class="td_input"
                  id="BengOn"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td style="width: 5%">泵关：</td>
            <td>
              <el-form-item label="" prop="BengOff">
                <input
                  v-model="ruleForm.BengOff"
                  type="text"
                  class="td_input"
                  id="BengOff"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td style="width: 6%">净读数：</td>
            <td>
              <el-form-item label="" prop="BengNumber">
                <input
                  v-model="ruleForm.BengNumber"
                  type="text"
                  class="td_input"
                  id="BengNumber"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>是否合格：</td>
            <td>
              <el-form-item label="" prop="BengIsJg">
                <input
                  v-model="ruleForm.BengIsJg"
                  type="text"
                  class="td_input"
                  id="BengIsJg"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
        </tbody>
      </table>
      <table id="flowTable">
        <tbody>
          <tr style="display: none">
            <td colspan="9"></td>
          </tr>
          <tr>
            <td>室外环境温<br />度(±2℃)</td>
            <td>一级温湿<br />度计读数</td>
            <td>
              <el-form-item label="" prop="OneWSDNumber">
                <input
                  v-model="ruleForm.OneWSDNumber"
                  type="text"
                  class="td_input"
                  id="OneWSDNumber"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>仪器显<br />示数值</td>
            <td>
              <el-form-item label="" prop="YQNumber">
                <input
                  v-model="ruleForm.YQNumber"
                  type="text"
                  class="td_input"
                  id="YQNumber"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>是否<br />合格</td>
            <td>
              <el-form-item label="" prop="IsAgree">
                <input
                  v-model="ruleForm.IsAgree"
                  type="text"
                  class="td_input"
                  id="IsAgree"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>处理<br />措施</td>
            <td>
              <el-form-item label="" prop="DealWay">
                <input
                  v-model="ruleForm.DealWay"
                  type="text"
                  class="td_input"
                  id="DealWay"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>室外环境湿<br />度(±4%)</td>
            <td>一级温湿<br />度计读数</td>
            <td>
              <el-form-item label="" prop="OneWSDNumber1">
                <input
                  v-model="ruleForm.OneWSDNumber1"
                  type="text"
                  class="td_input"
                  id="OneWSDNumber1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>仪器显<br />示数值</td>
            <td>
              <el-form-item label="" prop="YQNumber1">
                <input
                  v-model="ruleForm.YQNumber1"
                  type="text"
                  class="td_input"
                  id="YQNumber1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>是否<br />合格</td>
            <td>
              <el-form-item label="" prop="IsAgree1">
                <input
                  v-model="ruleForm.IsAgree1"
                  type="text"
                  class="td_input"
                  id="IsAgree1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>处理<br />措施</td>
            <td>
              <el-form-item label="" prop="DealWay1">
                <input
                  v-model="ruleForm.DealWay1"
                  type="text"
                  class="td_input"
                  id="DealWay1"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>室外环境压<br />力（±1kPa）</td>
            <td>标准压力<br />计读数</td>
            <td>
              <el-form-item label="" prop="OneWSDNumber2"
                ><input
                  v-model="ruleForm.OneWSDNumber2"
                  type="text"
                  class="td_input"
                  id="OneWSDNumber2"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>仪器显<br />示数值</td>
            <td>
              <el-form-item label="" prop="YQNumber2">
                <input
                  v-model="ruleForm.YQNumber2"
                  type="text"
                  class="td_input"
                  id="YQNumber2"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>是否<br />合格</td>
            <td>
              <el-form-item label="" prop="IsAgree2">
                <input
                  v-model="ruleForm.IsAgree2"
                  type="text"
                  class="td_input"
                  id="IsAgree2"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>处理<br />措施</td>
            <td>
              <el-form-item label="" prop="DealWay2">
                <input
                  v-model="ruleForm.DealWay2"
                  type="text"
                  class="td_input"
                  id="DealWay2"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>备注</td>
            <td colspan="8">
              <el-form-item label="" prop="Remark">
                <textarea
                  v-model="ruleForm.Remark"
                  style="width: 90%"
                  id="Remark"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
        </tbody>
      </table>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    ruleForm: Object,
  },
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
