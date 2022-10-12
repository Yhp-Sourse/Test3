<template>
  <div>
    <el-form id="ASEmergency" :model="ruleForm" ref="Form">
      <div style="float: left; margin: 5px 40px">
        <el-row>
          <el-col :span="11">
            <el-form-item label="巡检开始时间：" prop="yj_1">
              <el-date-picker
                v-model:value="ruleForm.yj_1"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择时间"
                :clearable="false"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2"> &nbsp; &nbsp; &nbsp; </el-col>
          <el-col :span="11">
            <el-form-item label="巡检结束时间：" prop="yj_2">
              <el-date-picker
                v-model:value="ruleForm.yj_2"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择时间"
                :clearable="false"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </div>

      <table class="rpt">
        <tbody>
          <tr>
            <td>采样器型号及编号</td>
            <td>
              <el-form-item label="" prop="Cm4">
                <input
                  v-model="ruleForm.Cm4"
                  type="text"
                  id="Cm4"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>自动监测仪器型号及编号</td>
            <td>
              <el-form-item label="" prop="Cm5">
                <input
                  v-model="ruleForm.Cm5"
                  type="text"
                  id="Cm5"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
        </tbody>
      </table>
      <table id="rpt1" style="border-bottom: 0.5px solid #aaaaaa">
        <tbody>
          <tr>
            <td>采样日期<br />（年 月 日）</td>
            <td>采样时段</td>
            <td>采样流量<br />（L/min）</td>
            <td>采样体积<br />（工况m<sup>3</sup>）</td>
            <td>滤膜编号</td>
            <td>采样前膜重<br />（mg）</td>
            <td>采样后膜重<br />（mg）</td>
            <td>滤膜增重<br />（mg）</td>
            <td>手工监测结果<br />（μg/m<sup>3</sup>）</td>
            <td>自动检测结果</td>
            <td>相对误差<br />（%）</td>
            <td>采样人</td>
            <td>称重人</td>
            <td>天气状况</td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Cp15">
                <el-date-picker
                  v-model:value="ruleForm.Cp15"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp16">
                <input
                  v-model="ruleForm.Cp16"
                  type="text"
                  id="Cp16"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp17">
                <input
                  v-model="ruleForm.Cp17"
                  type="text"
                  id="Cp17"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp18">
                <input
                  v-model="ruleForm.Cp18"
                  type="text"
                  id="Cp18"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp19">
                <input
                  v-model="ruleForm.Cp19"
                  type="text"
                  id="Cp19"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp20">
                <input
                  v-model="ruleForm.Cp20"
                  type="text"
                  id="Cp20"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp21">
                <input
                  v-model="ruleForm.Cp21"
                  type="text"
                  id="Cp21"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp22">
                <input
                  v-model="ruleForm.Cp22"
                  type="text"
                  id="Cp22"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp23">
                <input
                  v-model="ruleForm.Cp23"
                  type="text"
                  id="Cp23"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp24">
                <input
                  v-model="ruleForm.Cp24"
                  type="text"
                  id="Cp24"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp25">
                <input
                  v-model="ruleForm.Cp25"
                  type="text"
                  id="Cp25"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp26">
                <input
                  v-model="ruleForm.Cp26"
                  type="text"
                  id="Cp26"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp27">
                <input
                  v-model="ruleForm.Cp27"
                  type="text"
                  id="Cp27"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp28">
                <input
                  v-model="ruleForm.Cp28"
                  type="text"
                  id="Cp28"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Cp29">
                <el-date-picker
                  v-model:value="ruleForm.Cp29"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp30">
                <input
                  v-model="ruleForm.Cp30"
                  type="text"
                  id="Cp30"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp31">
                <input
                  v-model="ruleForm.Cp31"
                  type="text"
                  id="Cp31"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp32">
                <input
                  v-model="ruleForm.Cp32"
                  type="text"
                  id="Cp32"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp33">
                <input
                  v-model="ruleForm.Cp33"
                  type="text"
                  id="Cp33"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp34">
                <input
                  v-model="ruleForm.Cp34"
                  type="text"
                  id="Cp34"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp35">
                <input
                  v-model="ruleForm.Cp35"
                  type="text"
                  id="Cp35"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp36">
                <input
                  v-model="ruleForm.Cp36"
                  type="text"
                  id="Cp36"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp37">
                <input
                  v-model="ruleForm.Cp37"
                  type="text"
                  id="Cp37"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp38">
                <input
                  v-model="ruleForm.Cp38"
                  type="text"
                  id="Cp38"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp39">
                <input
                  v-model="ruleForm.Cp39"
                  type="text"
                  id="Cp39"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp40">
                <input
                  v-model="ruleForm.Cp40"
                  type="text"
                  id="Cp40"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp41">
                <input
                  v-model="ruleForm.Cp41"
                  type="text"
                  id="Cp41"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp42">
                <input
                  v-model="ruleForm.Cp42"
                  type="text"
                  id="Cp42"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Cp43">
                <el-date-picker
                  v-model:value="ruleForm.Cp43"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp44">
                <input
                  v-model="ruleForm.Cp44"
                  type="text"
                  id="Cp44"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp45">
                <input
                  v-model="ruleForm.Cp45"
                  type="text"
                  id="Cp45"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp46">
                <input
                  v-model="ruleForm.Cp46"
                  type="text"
                  id="Cp46"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp47">
                <input
                  v-model="ruleForm.Cp47"
                  type="text"
                  id="Cp47"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp48">
                <input
                  v-model="ruleForm.Cp48"
                  type="text"
                  id="Cp48"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp49">
                <input
                  v-model="ruleForm.Cp49"
                  type="text"
                  id="Cp49"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp50">
                <input
                  v-model="ruleForm.Cp50"
                  type="text"
                  id="Cp50"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp51">
                <input
                  v-model="ruleForm.Cp51"
                  type="text"
                  id="Cp51"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp52">
                <input
                  v-model="ruleForm.Cp52"
                  type="text"
                  id="Cp52"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp53">
                <input
                  v-model="ruleForm.Cp53"
                  type="text"
                  id="Cp53"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp54">
                <input
                  v-model="ruleForm.Cp54"
                  type="text"
                  id="Cp54"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp55">
                <input
                  v-model="ruleForm.Cp55"
                  type="text"
                  id="Cp55"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp56">
                <input
                  v-model="ruleForm.Cp56"
                  type="text"
                  id="Cp56"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Cp57">
                <el-date-picker
                  v-model:value="ruleForm.Cp57"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp58">
                <input
                  v-model="ruleForm.Cp58"
                  type="text"
                  id="Cp58"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp59">
                <input
                  v-model="ruleForm.Cp59"
                  type="text"
                  id="Cp59"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp60">
                <input
                  v-model="ruleForm.Cp60"
                  type="text"
                  id="Cp60"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp61">
                <input
                  v-model="ruleForm.Cp61"
                  type="text"
                  id="Cp61"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp62">
                <input
                  v-model="ruleForm.Cp62"
                  type="text"
                  id="Cp62"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp63">
                <input
                  v-model="ruleForm.Cp63"
                  type="text"
                  id="Cp63"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp64">
                <input
                  v-model="ruleForm.Cp64"
                  type="text"
                  id="Cp64"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp65">
                <input
                  v-model="ruleForm.Cp65"
                  type="text"
                  id="Cp65"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp66">
                <input
                  v-model="ruleForm.Cp66"
                  type="text"
                  id="Cp66"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp67">
                <input
                  v-model="ruleForm.Cp67"
                  type="text"
                  id="Cp67"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp68">
                <input
                  v-model="ruleForm.Cp68"
                  type="text"
                  id="Cp68"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp69">
                <input
                  v-model="ruleForm.Cp69"
                  type="text"
                  id="Cp69"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp70">
                <input
                  v-model="ruleForm.Cp70"
                  type="text"
                  id="Cp70"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Cp71">
                <el-date-picker
                  v-model:value="ruleForm.Cp71"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp72">
                <input
                  v-model="ruleForm.Cp72"
                  type="text"
                  id="Cp72"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp73">
                <input
                  v-model="ruleForm.Cp73"
                  type="text"
                  id="Cp73"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp74">
                <input
                  v-model="ruleForm.Cp74"
                  type="text"
                  id="Cp74"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp75">
                <input
                  v-model="ruleForm.Cp75"
                  type="text"
                  id="Cp75"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp76">
                <input
                  v-model="ruleForm.Cp76"
                  type="text"
                  id="Cp76"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp77">
                <input
                  v-model="ruleForm.Cp77"
                  type="text"
                  id="Cp77"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp78">
                <input
                  v-model="ruleForm.Cp78"
                  type="text"
                  id="Cp78"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp79">
                <input
                  v-model="ruleForm.Cp79"
                  type="text"
                  id="Cp79"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp80">
                <input
                  v-model="ruleForm.Cp80"
                  type="text"
                  id="Cp80"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp81">
                <input
                  v-model="ruleForm.Cp81"
                  type="text"
                  id="Cp81"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp82">
                <input
                  v-model="ruleForm.Cp82"
                  type="text"
                  id="Cp82"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp83">
                <input
                  v-model="ruleForm.Cp83"
                  type="text"
                  id="Cp83"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp84">
                <input
                  v-model="ruleForm.Cp84"
                  type="text"
                  id="Cp84"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Cp85">
                <el-date-picker
                  v-model:value="ruleForm.Cp85"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp86">
                <input
                  v-model="ruleForm.Cp86"
                  type="text"
                  id="Cp86"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp87">
                <input
                  v-model="ruleForm.Cp87"
                  type="text"
                  id="Cp87"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp88">
                <input
                  v-model="ruleForm.Cp88"
                  type="text"
                  id="Cp88"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp89">
                <input
                  v-model="ruleForm.Cp89"
                  type="text"
                  id="Cp89"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp90">
                <input
                  v-model="ruleForm.Cp90"
                  type="text"
                  id="Cp90"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp91">
                <input
                  v-model="ruleForm.Cp91"
                  type="text"
                  id="Cp91"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp92">
                <input
                  v-model="ruleForm.Cp92"
                  type="text"
                  id="Cp92"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp93">
                <input
                  v-model="ruleForm.Cp93"
                  type="text"
                  id="Cp93"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp94">
                <input
                  v-model="ruleForm.Cp94"
                  type="text"
                  id="Cp94"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp95">
                <input
                  v-model="ruleForm.Cp95"
                  type="text"
                  id="Cp95"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp96">
                <input
                  v-model="ruleForm.Cp96"
                  type="text"
                  id="Cp96"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp97">
                <input
                  v-model="ruleForm.Cp97"
                  type="text"
                  id="Cp97"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Cp98">
                <input
                  v-model="ruleForm.Cp98"
                  type="text"
                  id="Cp98"
                  style="height: 30px"
                />
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
