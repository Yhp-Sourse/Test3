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
        Mc8: '',
        Mc9: '',
        Mc10: '',
        Mc11: '',
        Mc12: '',
        Mc13: '',
        Mc14: '',
        Mc15: '',
        Mc16: '',
        Mc17: '',
        Mc18: '',
        Mc19: '',
        Mc20: '',
        Mc21: '',
        Mc22: '',
        Mc23: '',
        Mc24: '',
        Mc25: '',
        Mc26: '',
        Mc27: '',
        Mc28: '',
        Mc29: '',
        Mc30: '',
        Mc31: '',
        Mc32: '',
        Mc33: '',
        Mc34: '',
        Mc35: '',
        Mc36: '',
        Mc37: '',
        Mc38: '',
        Mc39: '',
        Mc40: '',
        Mc41: '',
        Mc42: '',
        Mc43: '',
        Mc44: '',
        Mc45: '',
        Mc46: '',
        Mc47: '',
        Mc48: '',
        Mc49: '',
        Mc50: '',
        Mc51: '',
        Mc52: '',
        Mc53: '',
        Mc54: '',
        Mc55: '',
        Mc56: '',
        Mc57: '',
        Mc58: '',
        Mc59: '',
        Mc60: '',
        Mc61: '',
        Mc62: '',
        Mc63: '',
        Mc64: '',
        Mc65: '',
        Mc66: '',
        Mc67: '',
        Mc68: '',
        Mc69: '',
        Mc70: '',
        Mc71: '',
        Mc72: '',
        Mc73: '',
        Mc74: '',
        Mc75: '',
        Mc76: '',
        Mc77: '',
        Mc78: '',
        Mc79: '',
        Mc80: '',
        Mc81: '',
        Mc82: '',
        Mc83: '',
        Mc84: '',
        Mc85: '',
        Mc86: '',
        Mc87: '',
        Mc88: '',
        Mc89: '',
        Mc90: '',
        Mc91: '',
        Mc92: '',
        Mc93: '',
        Mc94: '',
        Mc95: '',
        Mc96: '',
        Mc97: '',
        Mc98: '',
        Mc99: '',
        Mc100: '',
        Mc101: '',
        Mc102: '',
        Mc103: '',
        Mc104: '',
        Mc105: '',
        Mc106: '',
        Mc107: '',
        Mc108: '',
        Mc109: '',
        Mc110: '',
        Mc111: '',
        Mc112: '',
        Mc113: '',
        Mc114: '',
        Mc115: '',
        Mc116: '',
        Mc117: '',
        Mc118: '',
        Mc119: '',
        Mc120: '',
        Mc121: '',
        Mc122: '',
        Mc123: '',
        Mc124: '',
        Mc125: '',
        Mc126: '',

        Mc127: '',
        Mc128: '',
        Mc129: '',
        Mc130: '',
        Mc131: '',
        Mc132: '',
        Mc133: '',
        Mc134: '',
        Mc135: '',
        Mc136: '',
        Mc137: '',
        Mc138: '',
        Mc139: '',
        Mc140: '',
        Mc141: '',
        Mc142: '',
        Mc143: '',
        Mc144: '',
        Mc145: '',
        Mc146: '',
        Mc147: '',
        Remarks: '',
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
        Mc8: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc9: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc10: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc11: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc12: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc13: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc14: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc15: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc16: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc17: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc18: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc19: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc20: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc21: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc22: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc23: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc24: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc25: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc26: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc27: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc28: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc29: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc30: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc31: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc32: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc33: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc34: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc35: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc36: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc37: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc38: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc39: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc40: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc41: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc42: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc43: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc44: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc45: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc46: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc47: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc48: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc49: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc50: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc51: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc52: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc53: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc54: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc55: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc56: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc57: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc58: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc59: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc60: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc61: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc62: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc63: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc64: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc65: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc66: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc67: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc68: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc69: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc70: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc71: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc72: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc73: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc74: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc75: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc76: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc77: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc78: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc79: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc80: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc81: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc82: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc83: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc84: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc85: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc86: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc87: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc88: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc89: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc90: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc91: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc92: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc93: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc94: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc95: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc96: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc97: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc98: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc99: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc100: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc101: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc102: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc103: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc104: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc105: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc106: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc107: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc108: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc109: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc110: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc111: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc112: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc113: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc114: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc115: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc116: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc117: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc118: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc119: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc120: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc121: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc122: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc123: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc124: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc125: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc126: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc127: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc128: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc129: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc130: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc131: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc132: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc133: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc134: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc135: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc136: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc137: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc138: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc139: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc140: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc141: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc142: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc143: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc144: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc145: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc146: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Mc147: [
          {
            required: false,
            message: '必填项，没有的填写“/”',
            trigger: 'blur',
          },
        ],
        Remarks: [
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
      $('#ASEmergency tbody tr').each(function (index, item) {
        //遍历每一行的所有单元格
        count = 0
        if (index >= 45 && index < 65) {
          //不知道为什么 有66个tr  第1-22个tr和23-44和tr和第45-66个tr内容一摸一样
          $(item)
            .find('td')
            .each(function (i, itm) {
              //遍历每一行的所有单元格
              debugger
              //console.log($(itm).find("input ").val());
              if (
                $(itm).find('input ').val() == '' ||
                $(itm).find('input ').val() == undefined
              ) {
                count++
              }
            })
          if (count > 0 && count < 7) {
            //要么全部填写，要么全部没填写，否则验证不通过 0-9之间的则判定为填写不完整
            voidArrMSG.push(
              '第' + (index - 44) + '行存在未填写完的项，请先填写完后成在操作！'
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
