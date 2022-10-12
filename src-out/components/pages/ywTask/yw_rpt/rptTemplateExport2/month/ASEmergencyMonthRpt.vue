<template>
  <div>
    <el-form id="ASEmergency" :model="ruleForm" ref="Form">
      <table border="0" id="mainTable" style="border-bottom: none">
        <tbody>
          <tr>
            <td>巡检开始时间：</td>
            <td colspan="1">
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

            <td>巡检结束时间：</td>
            <td colspan="3">
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
            <td colspan="1">
              <el-form-item label="" prop="DeviceModel"
                ><input
                  type="text"
                  v-model="ruleForm.DeviceModel"
                  class="td_input"
                  id="DeviceModel"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>出厂编号</td>
            <td colspan="3">
              <el-form-item label="" prop="FactoryNo"
                ><input
                  type="text"
                  v-model="ruleForm.FactoryNo"
                  class="td_input"
                  id="FactoryNo"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>环境条件</td>
            <td colspan="5">
              温度（℃）<input
                v-model="ruleForm.Temperature"
                type="text"
                id="Temperature"
                style="width: 10%; height: 30px"
              />
              湿度（%）：<input
                v-model="ruleForm.Humidity"
                type="text"
                id="Humidity"
                style="width: 10%; height: 30px"
              />
              其它：
              <input
                v-model="ruleForm.Other"
                type="text"
                id="Other"
                style="width: 10%; height: 30px"
              />
            </td>
          </tr>
          <tr>
            <td id="Mergetd" rowspan="4" style="width: 18%">质控设备信息</td>
            <td>设备名称</td>
            <td>型号</td>
            <td colspan="2">站内编号</td>
            <td colspan="2">检定日期</td>
          </tr>
          <tr>
            <td>流量计</td>
            <td>
              <el-form-item label="" prop="FlowModel"
                ><input
                  type="text"
                  class="td_input"
                  v-model="ruleForm.FlowModel"
                  id="FlowModel"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="FlowZlbh"
                ><input
                  type="text"
                  v-model="ruleForm.FlowZlbh"
                  class="td_input"
                  id="FlowZlbh"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="FlowVerification"
                ><el-date-picker
                  v-model:value="ruleForm.FlowVerification"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker
              ></el-form-item>
            </td>
          </tr>
          <tr>
            <td>温湿度计</td>
            <td>
              <el-form-item label="" prop="TemperatureModel"
                ><input
                  type="text"
                  v-model="ruleForm.TemperatureModel"
                  class="td_input"
                  id="TemperatureModel"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="TemperatureZlbh"
                ><input
                  v-model="ruleForm.TemperatureZlbh"
                  type="text"
                  class="td_input"
                  id="TemperatureZlbh"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="TemperatureVerification"
                ><el-date-picker
                  v-model:value="ruleForm.TemperatureVerification"
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
            <td>
              <el-form-item label="" prop="BaroModel"
                ><input
                  type="text"
                  class="td_input"
                  v-model="ruleForm.BaroModel"
                  id="BaroModel"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="BaroZlbh"
                ><input
                  type="text"
                  v-model="ruleForm.BaroZlbh"
                  class="td_input"
                  id="BaroZlbh"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="BaroVerification"
                ><el-date-picker
                  v-model:value="ruleForm.BaroVerification"
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
            <td colspan="5" class="Mergetd">检漏</td>
          </tr>
          <tr>
            <td></td>
            <td>泵关</td>
            <td>泵开</td>
            <td>净读数</td>
            <td>是否合格</td>
          </tr>
          <tr>
            <td>β射线法流量读数[L/min]</td>
            <td>
              <el-form-item label="" prop="BetaLg"
                ><input
                  type="text"
                  v-model="ruleForm.BetaLg"
                  class="td_input"
                  id="BetaLg"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="BetaLk"
                ><input
                  type="text"
                  v-model="ruleForm.BetaLk"
                  class="td_input"
                  id="BetaLk"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="BetaJds"
                ><input
                  type="text"
                  v-model="ruleForm.BetaJds"
                  class="td_input"
                  id="BetaJds"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="BetaSfhg"
                ><input
                  type="text"
                  v-model="ruleForm.BetaSfhg"
                  class="td_input"
                  id="BetaSfhg"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>振荡天平法主流量读数[L/min]</td>
            <td>
              <el-form-item label="" prop="OsczLg"
                ><input
                  type="text"
                  v-model="ruleForm.OsczLg"
                  class="td_input"
                  id="OsczLg"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OsczLk"
                ><input
                  type="text"
                  v-model="ruleForm.OsczLk"
                  class="td_input"
                  id="OsczLk"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OsczJds"
                ><input
                  type="text"
                  v-model="ruleForm.OsczJds"
                  class="td_input"
                  id="OsczJds"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OsczSfhg"
                ><input
                  type="text"
                  v-model="ruleForm.OsczSfhg"
                  class="td_input"
                  id="OsczSfhg"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>振荡天平法辅流量读数[L/min]</td>
            <td>
              <el-form-item label="" prop="OscfLg"
                ><input
                  type="text"
                  v-model="ruleForm.OscfLg"
                  class="td_input"
                  id="OscfLg"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OscfLkg"
                ><input
                  type="text"
                  v-model="ruleForm.OscfLkg"
                  class="td_input"
                  id="OscfLkg"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OscfJds"
                ><input
                  type="text"
                  v-model="ruleForm.OscfJds"
                  class="td_input"
                  id="OscfJds"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OscfSfhg"
                ><input
                  type="text"
                  v-model="ruleForm.OscfSfhg"
                  class="td_input"
                  id="OscfSfhg"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
        </tbody>
      </table>
      <table id="flowTable" style="border-bottom: none">
        <tbody>
          <tr>
            <td colspan="6" class="Mergetd">流量检查（L/min）</td>
          </tr>
          <tr>
            <td class="Mergetd">仪器设定值</td>
            <td class="Mergetd">仪器示值流量</td>
            <td class="Mergetd">标准流量计</td>
            <td class="Mergetd">设定流量误差</td>
            <td class="Mergetd">显示流量误差</td>
            <td class="Mergetd">是否合格（不合格需校准）</td>
          </tr>
          <tr>
            <td>β射线法流量</td>
            <td>
              <el-form-item label="" prop="BetaYqsz"
                ><input
                  type="text"
                  v-model="ruleForm.BetaYqsz"
                  class="td_input"
                  id="BetaYqsz"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="BetaBzxzq"
                ><input
                  type="text"
                  v-model="ruleForm.BetaBzxzq"
                  class="td_input"
                  id="BetaBzxzq"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="BetaSdllwc"
                ><input
                  type="text"
                  v-model="ruleForm.BetaSdllwc"
                  class="td_input"
                  id="BetaSdllwc"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="BetaXsllwc"
                ><input
                  type="text"
                  v-model="ruleForm.BetaXsllwc"
                  class="td_input"
                  id="BetaXsllwc"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="BetaFlowSfhg"
                ><input
                  type="text"
                  v-model="ruleForm.BetaFlowSfhg"
                  class="td_input"
                  id="BetaFlowSfhg"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td>振荡天平法总流量</td>
            <td>
              <el-form-item label="" prop="OscsYqsz"
                ><input
                  type="text"
                  v-model="ruleForm.OscsYqsz"
                  class="td_input"
                  id="OscsYqsz"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OscsBzxzq"
                ><input
                  type="text"
                  v-model="ruleForm.OscsBzxzq"
                  class="td_input"
                  id="OscsBzxzq"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OscsSdllwc"
                ><input
                  type="text"
                  v-model="ruleForm.OscsSdllwc"
                  class="td_input"
                  id="OscsSdllwc"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OscsXsllwc"
                ><input
                  type="text"
                  v-model="ruleForm.OscsXsllwc"
                  class="td_input"
                  id="OscsXsllwc"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OscsFlowSfhg"
                ><input
                  type="text"
                  v-model="ruleForm.OscsFlowSfhg"
                  class="td_input"
                  id="OscsFlowSfhg"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>振荡天平法主流量</td>
            <td>
              <el-form-item label="" prop="OsczYqsz"
                ><input
                  type="text"
                  v-model="ruleForm.OsczYqsz"
                  class="td_input"
                  id="OsczYqsz"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OsczBzxzq"
                ><input
                  type="text"
                  v-model="ruleForm.OsczBzxzq"
                  class="td_input"
                  id="OsczBzxzq"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OsczSdllwc"
                ><input
                  type="text"
                  v-model="ruleForm.OsczSdllwc"
                  class="td_input"
                  id="OsczSdllwc"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OsczXsllwc"
                ><input
                  type="text"
                  v-model="ruleForm.OsczXsllwc"
                  class="td_input"
                  id="OsczXsllwc"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OsczFlowSfhg"
                ><input
                  type="text"
                  v-model="ruleForm.OsczFlowSfhg"
                  class="td_input"
                  id="OsczFlowSfhg"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
        </tbody>
      </table>
      <table id="correctTable">
        <tbody>
          <tr>
            <td colspan="5">流量校准（L/min）</td>
          </tr>
          <tr>
            <td colspan="1" rowspan="2">仪器设定流量</td>
            <td colspan="2">校准前</td>
            <td colspan="2">校准后</td>
          </tr>
          <tr>
            <td>仪器显示流量</td>
            <td>标准流量计</td>
            <td>仪器读数</td>
            <td>标准流量计</td>
          </tr>
          <tr>
            <td rowspan="2">β射线法<br />流量</td>
            <td>
              <el-form-item label="" prop="BetaJzqyqxs"
                ><input
                  type="text"
                  v-model="ruleForm.BetaJzqyqxs"
                  class="td_input"
                  id="BetaJzqyqxs"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="BetaJzqxzq"
                ><input
                  type="text"
                  v-model="ruleForm.BetaJzqxzq"
                  class="td_input"
                  id="BetaJzqxzq"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="BetaJzhyqds"
                ><input
                  type="text"
                  v-model="ruleForm.BetaJzhyqds"
                  class="td_input"
                  id="BetaJzhyqds"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="BetaJzhxzq"
                ><input
                  type="text"
                  v-model="ruleForm.BetaJzhxzq"
                  class="td_input"
                  id="BetaJzhxzq"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <!-- <td><el-form-item label="" prop="BetaJzqyqxs1"><input type="text"  v-model="ruleForm.BetaJzqyqxs1" class="td_input" id="BetaJzqyqxs1" style="height: 30px;"></el-form-item></td>
                  <td><el-form-item label="" prop="BetaJzqxzq1"><input type="text"  v-model="ruleForm.BetaJzqxzq1" class="td_input" id="BetaJzqxzq1" style="height: 30px;"></el-form-item></td>
                  <td><el-form-item label="" prop="BetaJzhyqds1"><input type="text"  v-model="ruleForm.BetaJzhyqds1" class="td_input" id="BetaJzhyqds1" style="height: 30px;"></el-form-item></td>
                  <td><el-form-item label="" prop="BetaJzhxzq1"><input type="text"  v-model="ruleForm.BetaJzhxzq1" class="td_input" id="BetaJzhxzq1" style="height: 30px;"></el-form-item></td> -->
          </tr>
          <tr>
            <td rowspan="2" style="height: 16%">振荡天平法<br />主流量</td>
            <td>
              <el-form-item label="" prop="OsczJzqyqxs"
                ><input
                  type="text"
                  v-model="ruleForm.OsczJzqyqxs"
                  class="td_input"
                  id="OsczJzqyqxs"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OsczJzqxzq"
                ><input
                  type="text"
                  v-model="ruleForm.OsczJzqxzq"
                  class="td_input"
                  id="OsczJzqxzq"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OsczJzhyqds"
                ><input
                  type="text"
                  v-model="ruleForm.OsczJzhyqds"
                  class="td_input"
                  id="OsczJzhyqds"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OsczJzhxzh"
                ><input
                  type="text"
                  v-model="ruleForm.OsczJzhxzh"
                  class="td_input"
                  id="OsczJzhxzh"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <!-- <td><el-form-item label="" prop="OsczJzqyqxs1"><input type="text"  v-model="ruleForm.OsczJzqyqxs1" class="td_input" id="OsczJzqyqxs1" style="height: 30px;"></el-form-item></td>
                  <td><el-form-item label="" prop="OsczJzqxzq1"><input type="text"  v-model="ruleForm.OsczJzqxzq1" class="td_input" id="OsczJzqxzq1" style="height: 30px;"></el-form-item></td>
                  <td><el-form-item label="" prop="OsczJzhyqds1"><input type="text"  v-model="ruleForm.OsczJzhyqds1" class="td_input" id="OsczJzhyqds1" style="height: 30px;"></el-form-item></td>
                  <td><el-form-item label="" prop="OsczJzhxzh1"><input type="text"  v-model="ruleForm.OsczJzhxzh1" class="td_input" id="OsczJzhxzh1" style="height: 30px;"></el-form-item></td> -->
          </tr>
          <tr>
            <td rowspan="2">振荡天平法<br />辅流量</td>
            <td>
              <el-form-item label="" prop="OscfJzqyqxs"
                ><input
                  type="text"
                  v-model="ruleForm.OscfJzqyqxs"
                  class="td_input"
                  id="OscfJzqyqxs"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OscfJzqxzq"
                ><input
                  type="text"
                  v-model="ruleForm.OscfJzqxzq"
                  class="td_input"
                  id="OscfJzqxzq"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OscfJzhyqds"
                ><input
                  type="text"
                  v-model="ruleForm.OscfJzhyqds"
                  class="td_input"
                  id="OscfJzhyqds"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OscfJzhxzq"
                ><input
                  type="text"
                  v-model="ruleForm.OscfJzhxzq"
                  class="td_input"
                  id="OscfJzhxzq"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <!-- <td><el-form-item label="" prop="OscfJzqyqxs1"><input type="text"  v-model="ruleForm.OscfJzqyqxs1" class="td_input" id="OscfJzqyqxs1" style="height: 30px;"></el-form-item></td>
                  <td><el-form-item label="" prop="OscfJzqxzq1"><input type="text"  v-model="ruleForm.OscfJzqxzq1" class="td_input" id="OscfJzqxzq1" style="height: 30px;"></el-form-item></td>
                  <td><el-form-item label="" prop="OscfJzhyqds1"><input type="text"  v-model="ruleForm.OscfJzhyqds1" class="td_input" id="OscfJzhyqds1" style="height: 30px;"></el-form-item></td>
                  <td><el-form-item label="" prop="OscfJzhxzq1"><input type="text"  v-model="ruleForm.OscfJzhxzq1" class="td_input" id="OscfJzhxzq1" style="height: 30px;"></el-form-item></td> -->
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
