<template>
  <div>
    <el-form id="ASEmergency" :model="ruleForm" ref="Form">
      <table border="0" id="mainTable" style="border-bottom: none">
        <tbody>
          <tr>
            <td colspan="2">巡检开始时间：</td>
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

            <td colspan="2">巡检结束时间：</td>
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
            <td colspan="2">仪器型号/编号</td>
            <td colspan="2">
              <el-form-item label="" prop="DeviceModel"
                ><input
                  type="text"
                  v-model="ruleForm.DeviceModel"
                  class="td_input"
                  id="DeviceModel"
                  style="height: 30px"
              /></el-form-item>
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
                ></el-date-picker
              ></el-form-item>
            </td>
          </tr>
          <tr>
            <td>气压</td>
            <td colspan="2">
              <el-form-item label="" prop="AirPress"
                ><input
                  type="text"
                  v-model="ruleForm.AirPress"
                  id="AirPress"
                  style="height: 30px"
              /></el-form-item>
            </td>

            <td>温度</td>
            <td colspan="2">
              <el-form-item label="" prop="Temperature"
                ><input
                  type="text"
                  v-model="ruleForm.Temperature"
                  id="Temperature"
                  style="height: 30px"
              /></el-form-item>
            </td>

            <td>湿度</td>
            <td>
              <el-form-item label="" prop="Humidity"
                ><input
                  type="text"
                  id="Humidity"
                  v-model="ruleForm.Humidity"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>标准流量计型号</td>
            <td colspan="2">
              <el-form-item label="" prop="BZLXType"
                ><input
                  type="text"
                  v-model="ruleForm.BZLXType"
                  id="BZLXType"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>标准流量计编号</td>
            <td colspan="2">
              <el-form-item label="" prop="BZLXNo"
                ><input
                  type="text"
                  v-model="ruleForm.BZLXNo"
                  id="BZLXNo"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>检定日期</td>
            <td>
              <el-form-item label="" prop="CheckTime"
                ><el-date-picker
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
            <td>标准流量计型号</td>
            <td colspan="2">
              <el-form-item label="" prop="BZLXType1"
                ><input
                  type="text"
                  v-model="ruleForm.BZLXType1"
                  id="BZLXType1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>标准流量计编号</td>
            <td colspan="2">
              <el-form-item label="" prop="BZLXNo1"
                ><input
                  type="text"
                  v-model="ruleForm.BZLXNo1"
                  id="BZLXNo1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>检定日期</td>
            <td>
              <el-form-item label="" prop="CheckTime1"
                ><el-date-picker
                  v-model:value="ruleForm.CheckTime1"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker
              ></el-form-item>
            </td>
          </tr>
          <tr>
            <td>温湿度计型号</td>
            <td colspan="2">
              <el-form-item label="" prop="WSDType"
                ><input
                  type="text"
                  v-model="ruleForm.WSDType"
                  id="WSDType"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>温湿度计编号</td>
            <td colspan="2">
              <el-form-item label="" prop="WSDNo"
                ><input
                  type="text"
                  v-model="ruleForm.WSDNo"
                  id="WSDNo"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>检定日期</td>
            <td>
              <el-form-item label="" prop="CheckTime2"
                ><el-date-picker
                  v-model:value="ruleForm.CheckTime2"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker
              ></el-form-item>
            </td>
          </tr>
          <tr>
            <td>气压计型号</td>
            <td colspan="2">
              <el-form-item label="" prop="QYType"
                ><input
                  type="text"
                  v-model="ruleForm.QYType"
                  id="QYType"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>气压计编号</td>
            <td colspan="2">
              <el-form-item label="" prop="QYNo"
                ><input
                  type="text"
                  v-model="ruleForm.QYNo"
                  id="QYNo"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>检定日期</td>
            <td>
              <el-form-item label="" prop="CheckTime3"
                ><el-date-picker
                  v-model:value="ruleForm.CheckTime3"
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
            <td colspan="8" class="Mergetd">0～10 L/min质量流量控制器</td>
          </tr>
          <tr>
            <td>序号</td>
            <td>设定值L</td>
            <td>仪器读数<br />（L/min）</td>
            <td>流量计读<br />数（L/min）</td>
            <td colspan="2">流量计修正读数<br />（L/min）<br />（质量流量）</td>
            <td>误差是否合格</td>
            <td>处理情况</td>
          </tr>
          <tr>
            <td>1</td>
            <td>30%</td>
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
            <td colspan="2">
              <el-form-item label="" prop="BetaJds"
                ><input
                  v-model="ruleForm.BetaJds"
                  type="text"
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
            <td>
              <el-form-item label="" prop="BetaResult"
                ><input
                  type="text"
                  v-model="ruleForm.BetaResult"
                  class="td_input"
                  id="BetaResult"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>50%</td>
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
            <td colspan="2">
              <el-form-item label="" prop="OsczJds"
                ><input
                  v-model="ruleForm.OsczJds"
                  type="text"
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
            <td>
              <el-form-item label="" prop="OsczResult"
                ><input
                  type="text"
                  v-model="ruleForm.OsczResult"
                  class="td_input"
                  id="OsczResult"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>90%</td>
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
            <td colspan="2">
              <el-form-item label="" prop="OscfJds"
                ><input
                  v-model="ruleForm.OscfJds"
                  type="text"
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
            <td>
              <el-form-item label="" prop="OscResult"
                ><input
                  type="text"
                  v-model="ruleForm.OscResult"
                  class="td_input"
                  id="OscResult"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
        </tbody>
      </table>
      <table id="flowTable" style="border-bottom: none">
        <tbody>
          <tr>
            <td colspan="8" class="Mergetd">0～100 /50ml/min质量流量控制器</td>
          </tr>
          <tr>
            <td>序号</td>
            <td>设定值L</td>
            <td>仪器读数<br />（L/min）</td>
            <td>流量计读数<br />（L/min）</td>
            <td colspan="2">流量计修正读数<br />（L/min）<br />（质量流量）</td>
            <td>误差是否合格</td>
            <td>处理情况</td>
          </tr>
          <tr>
            <td>1</td>
            <td>30%</td>
            <td>
              <el-form-item label="" prop="BetaLg1"
                ><input
                  type="text"
                  v-model="ruleForm.BetaLg1"
                  class="td_input"
                  id="BetaLg1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="BetaLk1"
                ><input
                  type="text"
                  v-model="ruleForm.BetaLk1"
                  class="td_input"
                  id="BetaLk1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="BetaJds1"
                ><input
                  v-model="ruleForm.BetaJds1"
                  type="text"
                  class="td_input"
                  id="BetaJds1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="BetaSfhg1"
                ><input
                  type="text"
                  v-model="ruleForm.BetaSfhg1"
                  class="td_input"
                  id="BetaSfhg1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="BetaResult1"
                ><input
                  type="text"
                  v-model="ruleForm.BetaResult1"
                  class="td_input"
                  id="BetaResult1"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>50%</td>
            <td>
              <el-form-item label="" prop="OsczLg1"
                ><input
                  type="text"
                  v-model="ruleForm.OsczLg1"
                  class="td_input"
                  id="OsczLg1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OsczLk1"
                ><input
                  type="text"
                  v-model="ruleForm.OsczLk1"
                  class="td_input"
                  id="OsczLk1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="OsczJds1"
                ><input
                  v-model="ruleForm.OsczJds1"
                  type="text"
                  class="td_input"
                  id="OsczJds1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OsczSfhg1"
                ><input
                  type="text"
                  v-model="ruleForm.OsczSfhg1"
                  class="td_input"
                  id="OsczSfhg1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OsczResult1"
                ><input
                  type="text"
                  v-model="ruleForm.OsczResult1"
                  class="td_input"
                  id="OsczResult1"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>90%</td>
            <td>
              <el-form-item label="" prop="OscfLg1"
                ><input
                  type="text"
                  v-model="ruleForm.OscfLg1"
                  class="td_input"
                  id="OscfLg1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OscfLkg1"
                ><input
                  type="text"
                  v-model="ruleForm.OscfLkg1"
                  class="td_input"
                  id="OscfLkg1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="OscfJds1"
                ><input
                  v-model="ruleForm.OscfJds1"
                  type="text"
                  class="td_input"
                  id="OscfJds1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OscfSfhg1"
                ><input
                  type="text"
                  v-model="ruleForm.OscfSfhg1"
                  class="td_input"
                  id="OscfSfhg1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="OscResult1"
                ><input
                  type="text"
                  v-model="ruleForm.OscResult1"
                  class="td_input"
                  id="OscResult1"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="8" class="Mergetd">
              备注：误差计算公式：（仪器读数-流量计修正读数）/流量计修正读数，误差需在±2%内
            </td>
          </tr>
        </tbody>
      </table>
      <table id="correctTable">
        <tbody>
          <tr>
            <td colspan="8">气态分析仪器流量检查</td>
          </tr>
          <tr>
            <td>仪器名称</td>
            <td>仪器型号</td>
            <td>流量范围</td>
            <td>仪器显示值</td>
            <td>实际测量值</td>
            <td>误差</td>
            <td colspan="2">处理情况</td>
          </tr>

          <tr>
            <td>二氧化硫</td>
            <td>
              <el-form-item label="" prop="Type"
                ><input
                  type="text"
                  v-model="ruleForm.Type"
                  class="td_input"
                  id="Type"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Area"
                ><input
                  type="text"
                  v-model="ruleForm.Area"
                  class="td_input"
                  id="Area"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="YQXSZ"
                ><input
                  type="text"
                  v-model="ruleForm.YQXSZ"
                  class="td_input"
                  id="YQXSZ"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="FactCLZ"
                ><input
                  type="text"
                  v-model="ruleForm.FactCLZ"
                  class="td_input"
                  id="FactCLZ"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Fail"
                ><input
                  type="text"
                  v-model="ruleForm.Fail"
                  class="td_input"
                  id="Fail"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="Deal"
                ><input
                  type="text"
                  v-model="ruleForm.Deal"
                  class="td_input"
                  id="Deal"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>二氧化氮</td>
            <td>
              <el-form-item label="" prop="Type1"
                ><input
                  type="text"
                  v-model="ruleForm.Type1"
                  class="td_input"
                  id="Type1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Area1"
                ><input
                  type="text"
                  v-model="ruleForm.Area1"
                  class="td_input"
                  id="Area1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="YQXSZ1"
                ><input
                  type="text"
                  v-model="ruleForm.YQXSZ1"
                  class="td_input"
                  id="YQXSZ1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="FactCLZ1"
                ><input
                  type="text"
                  v-model="ruleForm.FactCLZ1"
                  class="td_input"
                  id="FactCLZ1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Fail1"
                ><input
                  type="text"
                  v-model="ruleForm.Fail1"
                  class="td_input"
                  id="Fail1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Deal1"
                ><input
                  type="text"
                  v-model="ruleForm.Deal1"
                  class="td_input"
                  id="Deal1"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>一氧化碳</td>
            <td>
              <el-form-item label="" prop="Type2"
                ><input
                  type="text"
                  v-model="ruleForm.Type2"
                  class="td_input"
                  id="Type2"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Area2"
                ><input
                  type="text"
                  v-model="ruleForm.Area2"
                  class="td_input"
                  id="Area2"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="YQXSZ2"
                ><input
                  type="text"
                  v-model="ruleForm.YQXSZ2"
                  class="td_input"
                  id="YQXSZ2"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="FactCLZ2"
                ><input
                  type="text"
                  v-model="ruleForm.FactCLZ2"
                  class="td_input"
                  id="FactCLZ2"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Fail2"
                ><input
                  type="text"
                  v-model="ruleForm.Fail2"
                  class="td_input"
                  id="Fail2"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Deal2"
                ><input
                  type="text"
                  v-model="ruleForm.Deal2"
                  class="td_input"
                  id="Deal2"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>臭氧</td>
            <td>
              <el-form-item label="" prop="Type3"
                ><input
                  type="text"
                  v-model="ruleForm.Type3"
                  class="td_input"
                  id="Type3"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Area3"
                ><input
                  type="text"
                  v-model="ruleForm.Area3"
                  class="td_input"
                  id="Area3"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="YQXSZ3"
                ><input
                  type="text"
                  v-model="ruleForm.YQXSZ3"
                  class="td_input"
                  id="YQXSZ3"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="FactCLZ3"
                ><input
                  type="text"
                  v-model="ruleForm.FactCLZ3"
                  class="td_input"
                  id="FactCLZ3"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Fail3"
                ><input
                  type="text"
                  v-model="ruleForm.Fail3"
                  class="td_input"
                  id="Fail3"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Deal3"
                ><input
                  type="text"
                  v-model="ruleForm.Deal3"
                  class="td_input"
                  id="Deal3"
                  style="height: 30px"
              /></el-form-item>
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
