<template>
  <div>
    <el-form
      id="ASEmergency"
      :model="ruleForm"
      :rules="rules"
      ref="Form"
      :label-position="top"
    >
      <div style="float: left; margin: 5px 40px">
        <el-row>
          <el-col :span="11">
            <el-form-item label="巡检时间：" prop="yj_1">
              <el-date-picker
                v-model:value="ruleForm.yj_1"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择时间"
                :clearable="false"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2"> &nbsp; &nbsp; &nbsp; </el-col>
          <el-col :span="11">
            <!-- <el-form-item label="巡检结束时间：" prop="yj_2">
                        <el-date-picker v-model="ruleForm.yj_2" type="date" value-format="yyyy-MM-dd"  placeholder="选择时间" :clearable=false></el-date-picker>
                      </el-form-item> -->
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
        Cm4: '',
        Cm5: '',
        Cp15: '',
        Cp16: '',
        Cp17: '',
        Cp18: '',
        Cp19: '',
        Cp20: '',
        Cp21: '',
        Cp22: '',
        Cp23: '',
        Cp24: '',
        Cp25: '',
        Cp26: '',
        Cp27: '',
        Cp28: '',
        Cp29: '',
        Cp30: '',
        Cp31: '',
        Cp32: '',
        Cp33: '',
        Cp34: '',
        Cp35: '',
        Cp36: '',
        Cp37: '',
        Cp38: '',
        Cp39: '',
        Cp40: '',
        Cp41: '',
        Cp42: '',
        Cp43: '',
        Cp44: '',
        Cp45: '',
        Cp46: '',
        Cp47: '',
        Cp48: '',
        Cp49: '',
        Cp50: '',
        Cp51: '',
        Cp52: '',
        Cp53: '',
        Cp54: '',
        Cp55: '',
        Cp56: '',
        Cp57: '',
        Cp58: '',
        Cp59: '',
        Cp60: '',
        Cp61: '',
        Cp62: '',
        Cp63: '',
        Cp64: '',
        Cp65: '',
        Cp66: '',
        Cp67: '',
        Cp68: '',
        Cp69: '',
        Cp70: '',

        Cp71: '',
        Cp72: '',
        Cp73: '',
        Cp74: '',
        Cp75: '',
        Cp76: '',
        Cp77: '',
        Cp78: '',
        Cp79: '',
        Cp80: '',
        Cp81: '',
        Cp82: '',
        Cp83: '',
        Cp84: '',
        Cp85: '',
        Cp86: '',
        Cp87: '',
        Cp88: '',
        Cp89: '',
        Cp90: '',
        Cp91: '',
        Cp92: '',
        Cp93: '',
        Cp94: '',
        Cp95: '',
        Cp96: '',
        Cp97: '',
        Cp98: '',
        InspectionSTime: '',
        InspectionETime: '',
        yj_1: '',
        yj_2: '',
      },
      rules: {
        yj_1: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        yj_2: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Cm4: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cm5: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp15: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp16: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp17: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp18: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp19: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp20: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp21: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp22: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp23: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp24: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp25: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp26: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp27: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp28: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp29: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp30: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp31: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp32: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp33: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp34: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp35: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp36: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp37: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp38: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp39: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp40: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp41: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp42: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp43: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp44: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp45: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp46: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp47: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp48: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp49: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp50: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp51: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp52: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp53: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp54: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp55: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp56: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp57: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp58: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp59: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp60: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp61: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp62: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp63: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp64: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp65: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp66: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp67: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp68: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp69: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp70: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp71: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp72: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp73: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp74: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp75: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp76: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp77: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp78: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp79: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp80: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp81: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp82: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp83: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp84: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp85: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp86: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp87: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp88: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp89: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp90: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp91: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp92: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp93: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp94: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp95: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp96: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp97: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Cp98: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
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
      var count = 0
      var voidArrMSG = []
      //每行需要非空验证，验证规则：每行只要有一个input有填写内容，则该行所有项必填，其他行不受限制
      $('#rpt1 tbody tr').each(function (index, item) {
        //遍历每一行的所有单元格
        count = 0
        if (index >= 15 && index < 21) {
          //不知道为什么 有21个tr  内容一摸一样
          $(item)
            .find('td')
            .each(function (i, itm) {
              //遍历每一行的所有单元格
              // console.log($(itm).find("textarea ").val());
              if (
                $(itm).find('input ').val() == '' ||
                $(itm).find('input ').val() == undefined
              ) {
                count++
              }
            })
          if (count > 0 && count < 14) {
            //要么全部填写，要么全部没填写，否则验证不通过 0-9之间的则判定为填写不完整
            voidArrMSG.push(
              '第' + (index - 14) + '行存在未填写完的项，请先填写完后成在操作！'
            )
          }
        }
      })
      //console.log(voidArrMSG);
      if (voidArrMSG.length <= 0) {
        if (val == '保存') {
          $emit(this, 'formSava', JSON.stringify(this.ruleForm))
        }
        if (val == '提交') {
          $emit(this, 'formSubmit', JSON.stringify(this.ruleForm))
        }
      } else {
        $emit(this, 'reSet', '')
        var msg = ''
        for (var i = 0; i < voidArrMSG.length; i++) {
          msg += voidArrMSG[i]
        }
        this.$message({
          message: msg,
          type: 'error', //warning,success,info,error
        })
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
  emits: ['formSava', 'formSubmit', 'reSet'],
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
