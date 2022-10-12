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
            <td>采样日期（年 月 日）</td>
            <td>采样时段</td>
            <td>采样项目</td>
            <td>累计流量（标况）</td>
            <td>所用仪器</td>
            <td>滤膜编号</td>
            <td>异常情况</td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc8">
                <el-date-picker
                  v-model:value="ruleForm.Mc8"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc9">
                <input
                  v-model="ruleForm.Mc9"
                  type="text"
                  id="Mc9"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc10">
                <input
                  v-model="ruleForm.Mc10"
                  type="text"
                  id="Mc10"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc11">
                <input
                  v-model="ruleForm.Mc11"
                  type="text"
                  id="Mc11"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc12">
                <input
                  v-model="ruleForm.Mc12"
                  type="text"
                  id="Mc12"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc13">
                <input
                  v-model="ruleForm.Mc13"
                  type="text"
                  id="Mc13"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc14">
                <input
                  v-model="ruleForm.Mc14"
                  type="text"
                  id="Mc14"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc15">
                <el-date-picker
                  v-model:value="ruleForm.Mc15"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc16">
                <input
                  v-model="ruleForm.Mc16"
                  type="text"
                  id="Mc16"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc17">
                <input
                  v-model="ruleForm.Mc17"
                  type="text"
                  id="Mc17"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc18">
                <input
                  v-model="ruleForm.Mc18"
                  type="text"
                  id="Mc18"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc19">
                <input
                  v-model="ruleForm.Mc19"
                  type="text"
                  id="Mc19"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc20">
                <input
                  v-model="ruleForm.Mc20"
                  type="text"
                  id="Mc20"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc21">
                <input
                  v-model="ruleForm.Mc21"
                  type="text"
                  id="Mc21"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc22">
                <el-date-picker
                  v-model:value="ruleForm.Mc22"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc23">
                <input
                  v-model="ruleForm.Mc23"
                  type="text"
                  id="Mc23"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc24">
                <input
                  v-model="ruleForm.Mc24"
                  type="text"
                  id="Mc24"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc25">
                <input
                  v-model="ruleForm.Mc25"
                  type="text"
                  id="Mc25"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc26">
                <input
                  v-model="ruleForm.Mc26"
                  type="text"
                  id="Mc26"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc27">
                <input
                  v-model="ruleForm.Mc27"
                  type="text"
                  id="Mc27"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc28">
                <input
                  v-model="ruleForm.Mc28"
                  type="text"
                  id="Mc28"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc29">
                <el-date-picker
                  v-model:value="ruleForm.Mc29"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc30">
                <input
                  v-model="ruleForm.Mc30"
                  type="text"
                  id="Mc30"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc31">
                <input
                  v-model="ruleForm.Mc31"
                  type="text"
                  id="Mc31"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc32">
                <input
                  v-model="ruleForm.Mc32"
                  type="text"
                  id="Mc32"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc33">
                <input
                  v-model="ruleForm.Mc33"
                  type="text"
                  id="Mc33"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc34">
                <input
                  v-model="ruleForm.Mc34"
                  type="text"
                  id="Mc34"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc35">
                <input
                  v-model="ruleForm.Mc35"
                  type="text"
                  id="Mc35"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc36">
                <el-date-picker
                  v-model:value="ruleForm.Mc36"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc37">
                <input
                  v-model="ruleForm.Mc37"
                  type="text"
                  id="Mc37"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc38">
                <input
                  v-model="ruleForm.Mc38"
                  type="text"
                  id="Mc38"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc39">
                <input
                  v-model="ruleForm.Mc39"
                  type="text"
                  id="Mc39"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc40">
                <input
                  v-model="ruleForm.Mc40"
                  type="text"
                  id="Mc40"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc41">
                <input
                  v-model="ruleForm.Mc41"
                  type="text"
                  id="Mc41"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc42">
                <input
                  v-model="ruleForm.Mc42"
                  type="text"
                  id="Mc42"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc43">
                <el-date-picker
                  v-model:value="ruleForm.Mc43"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc44">
                <input
                  v-model="ruleForm.Mc44"
                  type="text"
                  id="Mc44"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc45">
                <input
                  v-model="ruleForm.Mc45"
                  type="text"
                  id="Mc45"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc46">
                <input
                  v-model="ruleForm.Mc46"
                  type="text"
                  id="Mc46"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc47">
                <input
                  v-model="ruleForm.Mc47"
                  type="text"
                  id="Mc47"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc48">
                <input
                  v-model="ruleForm.Mc48"
                  type="text"
                  id="Mc48"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc49">
                <input
                  v-model="ruleForm.Mc49"
                  type="text"
                  id="Mc49"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc50">
                <el-date-picker
                  v-model:value="ruleForm.Mc50"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc51">
                <input
                  v-model="ruleForm.Mc51"
                  type="text"
                  id="Mc51"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc52">
                <input
                  v-model="ruleForm.Mc52"
                  type="text"
                  id="Mc52"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc53">
                <input
                  v-model="ruleForm.Mc53"
                  type="text"
                  id="Mc53"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc54">
                <input
                  v-model="ruleForm.Mc54"
                  type="text"
                  id="Mc54"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc55">
                <input
                  v-model="ruleForm.Mc55"
                  type="text"
                  id="Mc55"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc56">
                <input
                  v-model="ruleForm.Mc56"
                  type="text"
                  id="Mc56"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc57">
                <el-date-picker
                  v-model:value="ruleForm.Mc57"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc58">
                <input
                  v-model="ruleForm.Mc58"
                  type="text"
                  id="Mc58"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc59">
                <input
                  v-model="ruleForm.Mc59"
                  type="text"
                  id="Mc59"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc60">
                <input
                  v-model="ruleForm.Mc60"
                  type="text"
                  id="Mc60"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc61">
                <input
                  v-model="ruleForm.Mc61"
                  type="text"
                  id="Mc61"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc62">
                <input
                  v-model="ruleForm.Mc62"
                  type="text"
                  id="Mc62"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc63">
                <input
                  v-model="ruleForm.Mc63"
                  type="text"
                  id="Mc63"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc64">
                <el-date-picker
                  v-model:value="ruleForm.Mc64"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc65">
                <input
                  v-model="ruleForm.Mc65"
                  type="text"
                  id="Mc65"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc66">
                <input
                  v-model="ruleForm.Mc66"
                  type="text"
                  id="Mc66"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc67">
                <input
                  v-model="ruleForm.Mc67"
                  type="text"
                  id="Mc67"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc68">
                <input
                  v-model="ruleForm.Mc68"
                  type="text"
                  id="Mc68"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc69">
                <input
                  v-model="ruleForm.Mc69"
                  type="text"
                  id="Mc69"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc70">
                <input
                  v-model="ruleForm.Mc70"
                  type="text"
                  id="Mc70"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc71">
                <el-date-picker
                  v-model:value="ruleForm.Mc71"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc72">
                <input
                  v-model="ruleForm.Mc72"
                  type="text"
                  id="Mc72"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc73">
                <input
                  v-model="ruleForm.Mc73"
                  type="text"
                  id="Mc73"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc74">
                <input
                  v-model="ruleForm.Mc74"
                  type="text"
                  id="Mc74"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc75">
                <input
                  v-model="ruleForm.Mc75"
                  type="text"
                  id="Mc75"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc76">
                <input
                  v-model="ruleForm.Mc76"
                  type="text"
                  id="Mc76"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc77">
                <input
                  v-model="ruleForm.Mc77"
                  type="text"
                  id="Mc77"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc78">
                <el-date-picker
                  v-model:value="ruleForm.Mc78"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc79">
                <input
                  v-model="ruleForm.Mc79"
                  type="text"
                  id="Mc79"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc80">
                <input
                  v-model="ruleForm.Mc80"
                  type="text"
                  id="Mc80"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc81">
                <input
                  v-model="ruleForm.Mc81"
                  type="text"
                  id="Mc81"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc82">
                <input
                  v-model="ruleForm.Mc82"
                  type="text"
                  id="Mc82"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc83">
                <input
                  v-model="ruleForm.Mc83"
                  type="text"
                  id="Mc83"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc84">
                <input
                  v-model="ruleForm.Mc84"
                  type="text"
                  id="Mc84"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc85">
                <el-date-picker
                  v-model:value="ruleForm.Mc85"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc86">
                <input
                  v-model="ruleForm.Mc86"
                  type="text"
                  id="Mc86"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc87">
                <input
                  v-model="ruleForm.Mc87"
                  type="text"
                  id="Mc87"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc88">
                <input
                  v-model="ruleForm.Mc88"
                  type="text"
                  id="Mc88"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc89">
                <input
                  v-model="ruleForm.Mc89"
                  type="text"
                  id="Mc89"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc90">
                <input
                  v-model="ruleForm.Mc90"
                  type="text"
                  id="Mc90"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc91">
                <input
                  v-model="ruleForm.Mc91"
                  type="text"
                  id="Mc91"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc92">
                <el-date-picker
                  v-model:value="ruleForm.Mc92"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc93">
                <input
                  v-model="ruleForm.Mc93"
                  type="text"
                  id="Mc93"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc94">
                <input
                  v-model="ruleForm.Mc94"
                  type="text"
                  id="Mc94"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc95">
                <input
                  v-model="ruleForm.Mc95"
                  type="text"
                  id="Mc95"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc96">
                <input
                  v-model="ruleForm.Mc96"
                  type="text"
                  id="Mc96"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc97">
                <input
                  v-model="ruleForm.Mc97"
                  type="text"
                  id="Mc97"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc98">
                <input
                  v-model="ruleForm.Mc98"
                  type="text"
                  id="Mc98"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc99">
                <el-date-picker
                  v-model:value="ruleForm.Mc99"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc100">
                <input
                  v-model="ruleForm.Mc100"
                  type="text"
                  id="Mc100"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc101">
                <input
                  v-model="ruleForm.Mc101"
                  type="text"
                  id="Mc101"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc102">
                <input
                  v-model="ruleForm.Mc102"
                  type="text"
                  id="Mc102"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc103">
                <input
                  v-model="ruleForm.Mc103"
                  type="text"
                  id="Mc103"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc104">
                <input
                  v-model="ruleForm.Mc104"
                  type="text"
                  id="Mc104"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc105">
                <input
                  v-model="ruleForm.Mc105"
                  type="text"
                  id="Mc105"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc106">
                <el-date-picker
                  v-model:value="ruleForm.Mc106"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc107">
                <input
                  v-model="ruleForm.Mc107"
                  type="text"
                  id="Mc107"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc108">
                <input
                  v-model="ruleForm.Mc108"
                  type="text"
                  id="Mc108"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc109">
                <input
                  v-model="ruleForm.Mc109"
                  type="text"
                  id="Mc109"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc110">
                <input
                  v-model="ruleForm.Mc110"
                  type="text"
                  id="Mc110"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc111">
                <input
                  v-model="ruleForm.Mc111"
                  type="text"
                  id="Mc111"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc112">
                <input
                  v-model="ruleForm.Mc112"
                  type="text"
                  id="Mc112"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc113">
                <el-date-picker
                  v-model:value="ruleForm.Mc113"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc114">
                <input
                  v-model="ruleForm.Mc114"
                  type="text"
                  id="Mc114"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc115">
                <input
                  v-model="ruleForm.Mc115"
                  type="text"
                  id="Mc115"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc116">
                <input
                  v-model="ruleForm.Mc116"
                  type="text"
                  id="Mc116"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc117">
                <input
                  v-model="ruleForm.Mc117"
                  type="text"
                  id="Mc117"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc118">
                <input
                  v-model="ruleForm.Mc118"
                  type="text"
                  id="Mc118"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc119">
                <input
                  v-model="ruleForm.Mc119"
                  type="text"
                  id="Mc119"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc120">
                <el-date-picker
                  v-model:value="ruleForm.Mc120"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc121">
                <input
                  v-model="ruleForm.Mc121"
                  type="text"
                  id="Mc121"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc122">
                <input
                  v-model="ruleForm.Mc122"
                  type="text"
                  id="Mc122"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc123">
                <input
                  v-model="ruleForm.Mc123"
                  type="text"
                  id="Mc123"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc124">
                <input
                  v-model="ruleForm.Mc124"
                  type="text"
                  id="Mc124"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc125">
                <input
                  v-model="ruleForm.Mc125"
                  type="text"
                  id="Mc125"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc126">
                <input
                  v-model="ruleForm.Mc126"
                  type="text"
                  id="Mc126"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc127">
                <el-date-picker
                  v-model:value="ruleForm.Mc127"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc128">
                <input
                  v-model="ruleForm.Mc128"
                  type="text"
                  id="Mc128"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc129">
                <input
                  v-model="ruleForm.Mc129"
                  type="text"
                  id="Mc129"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc130">
                <input
                  v-model="ruleForm.Mc130"
                  type="text"
                  id="Mc130"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc131">
                <input
                  v-model="ruleForm.Mc131"
                  type="text"
                  id="Mc131"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc132">
                <input
                  v-model="ruleForm.Mc132"
                  type="text"
                  id="Mc132"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc133">
                <input
                  v-model="ruleForm.Mc133"
                  type="text"
                  id="Mc133"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc134">
                <el-date-picker
                  v-model:value="ruleForm.Mc134"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc135">
                <input
                  v-model="ruleForm.Mc135"
                  type="text"
                  id="Mc135"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc136">
                <input
                  v-model="ruleForm.Mc136"
                  type="text"
                  id="Mc136"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc137">
                <input
                  v-model="ruleForm.Mc137"
                  type="text"
                  id="Mc137"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc138">
                <input
                  v-model="ruleForm.Mc138"
                  type="text"
                  id="Mc138"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc139">
                <input
                  v-model="ruleForm.Mc139"
                  type="text"
                  id="Mc139"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc140">
                <input
                  v-model="ruleForm.Mc140"
                  type="text"
                  id="Mc140"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Mc141">
                <el-date-picker
                  v-model:value="ruleForm.Mc141"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc142">
                <input
                  v-model="ruleForm.Mc142"
                  type="text"
                  id="Mc142"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc143">
                <input
                  v-model="ruleForm.Mc143"
                  type="text"
                  id="Mc143"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc144">
                <input
                  v-model="ruleForm.Mc144"
                  type="text"
                  id="Mc144"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc145">
                <input
                  v-model="ruleForm.Mc145"
                  type="text"
                  id="Mc145"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc146">
                <input
                  v-model="ruleForm.Mc146"
                  type="text"
                  id="Mc146"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Mc147">
                <input
                  v-model="ruleForm.Mc147"
                  type="text"
                  id="Mc147"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>备注：</td>
            <td colspan="6">
              <el-form-item label="" prop="Remarks">
                <textarea
                  v-model="ruleForm.Remarks"
                  rows="3"
                  id="Remarks"
                  style="width: 98%"
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
