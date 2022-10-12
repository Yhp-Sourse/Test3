<template>
  <div>
    <el-form id="ASEmergency" :model="ruleForm" ref="Form">
      <div style="float: left; margin: 5px 10px">
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
            <td>序号</td>
            <td>项 目</td>
            <td>日期</td>
            <td>人员</td>
            <td>时间</td>
          </tr>
          <tr>
            <td rowspan="2">1</td>
            <td rowspan="2">清洁气态污染物采样总管及支管</td>
            <td>
              季度
              <!-- <input v-model="ruleForm.id_1"  type="text" id="id_1" value="" style="height: 30px" /> -->
            </td>
            <td>
              <el-form-item label="" prop="id_2">
                <input
                  v-model="ruleForm.id_2"
                  type="text"
                  id="id_2"
                  value=""
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <el-form-item label="" prop="GetTime_1">
                  <el-date-picker
                    v-model:value="ruleForm.GetTime_1"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择时间"
                    :clearable="false"
                  ></el-date-picker>
                </el-form-item>
                <span>
                  <span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span>
                </span>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              季度
              <!-- <input v-model="ruleForm.id_3"  id="id_3" type="text" value="" style="height: 30px" /> -->
            </td>
            <td>
              <el-form-item label="" prop="id_4">
                <input
                  v-model="ruleForm.id_4"
                  type="text"
                  id="id_4"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <el-form-item label="" prop="GetTimes_4">
                  <el-date-picker
                    v-model:value="ruleForm.GetTimes_4"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择时间"
                    :clearable="false"
                  ></el-date-picker>
                </el-form-item>
                <span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
              ></span>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>清洁PM10采样总管</td>
            <td>
              <el-form-item label="" prop="id_5">
                <input
                  v-model="ruleForm.id_5"
                  type="text"
                  id="id_5"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_6">
                <input
                  v-model="ruleForm.id_6"
                  type="text"
                  id="id_6"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <el-form-item label="" prop="GetTime_2">
                  <el-date-picker
                    v-model:value="ruleForm.GetTime_2"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择时间"
                    :clearable="false"
                  ></el-date-picker>
                </el-form-item>
                <span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
              ></span>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>清洁PM2.5颗粒物采样总管</td>
            <td>
              <el-form-item label="" prop="id_7">
                <input
                  v-model="ruleForm.id_7"
                  type="text"
                  id="id_7"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_8">
                <input
                  v-model="ruleForm.id_8"
                  type="text"
                  id="id_8"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <el-form-item label="" prop="GetTime_3">
                  <el-date-picker
                    v-model:value="ruleForm.GetTime_3"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择时间"
                    :clearable="false"
                  ></el-date-picker>
                </el-form-item>
                <span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
              ></span>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>清洁PM10振荡单元采样管</td>
            <td>
              <el-form-item label="" prop="id_9">
                <input
                  v-model="ruleForm.id_9"
                  type="text"
                  id="id_9"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_10">
                <input
                  v-model="ruleForm.id_10"
                  type="text"
                  id="id_10"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <el-form-item label="" prop="GetTime_4">
                  <el-date-picker
                    v-model:value="ruleForm.GetTime_4"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择时间"
                    :clearable="false"
                  ></el-date-picker>
                </el-form-item>
                <span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
              ></span>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>更换PM10（RP1400a）主机1号电池*</td>
            <td>
              <el-form-item label="" prop="id_11">
                <input
                  v-model="ruleForm.id_11"
                  type="text"
                  id="id_11"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_12">
                <input
                  v-model="ruleForm.id_12"
                  type="text"
                  id="id_12"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <el-form-item label="" prop="GetTime_5">
                  <el-date-picker
                    v-model:value="ruleForm.GetTime_5"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择时间"
                    :clearable="false"
                  ></el-date-picker>
                </el-form-item>
                <span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
              ></span>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>更换PM2.5（5030SHARP）后背电池*</td>
            <td>
              <el-form-item label="" prop="id_13">
                <input
                  v-model="ruleForm.id_13"
                  type="text"
                  id="id_13"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_14">
                <input
                  v-model="ruleForm.id_14"
                  type="text"
                  id="id_14"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <el-form-item label="" prop="GetTime_6">
                  <el-date-picker
                    v-model:value="ruleForm.GetTime_6"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择时间"
                    :clearable="false"
                  ></el-date-picker>
                </el-form-item>
                <span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
              ></span>
            </td>
          </tr>
          <tr>
            <td rowspan="2">7</td>
            <td rowspan="2">零气源更换分子筛，活性碳</td>
            <td>
              <el-form-item label="" prop="id_15">
                <input
                  v-model="ruleForm.id_15"
                  type="text"
                  id="id_15"
                  value=""
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_16">
                <input
                  v-model="ruleForm.id_16"
                  type="text"
                  id="id_16"
                  value=""
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <el-form-item label="" prop="GetTime_7">
                  <el-date-picker
                    v-model:value="ruleForm.GetTime_7"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择时间"
                    :clearable="false"
                  ></el-date-picker>
                </el-form-item>
                <span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
              ></span>
            </td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="id_17">
                <input
                  v-model="ruleForm.id_17"
                  id="id_17"
                  type="text"
                  value=""
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_18">
                <input
                  v-model="ruleForm.id_18"
                  type="text"
                  id="id_18"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <el-form-item label="" prop="GetTimes_18">
                  <el-date-picker
                    v-model:value="ruleForm.GetTimes_18"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择时间"
                    :clearable="false"
                  ></el-date-picker>
                </el-form-item>
                <span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
              ></span>
            </td>
          </tr>
          <tr>
            <td rowspan="2">8</td>
            <td rowspan="2">NOx外置泵更换活性碳或硅胶等</td>
            <td>
              季度
              <!-- <input v-model="ruleForm.id_19"  type="text" id="id_19" value="" style="height: 30px" /> -->
            </td>
            <td>
              <el-form-item label="" prop="id_20">
                <input
                  v-model="ruleForm.id_20"
                  type="text"
                  id="id_20"
                  value=""
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <el-form-item label="" prop="GetTime_8">
                  <el-date-picker
                    v-model:value="ruleForm.GetTime_8"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择时间"
                    :clearable="false"
                  ></el-date-picker>
                </el-form-item>
                <span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
              ></span>
            </td>
          </tr>
          <tr>
            <td>
              季度
              <!-- <input v-model="ruleForm.id_21"  id="id_21" type="text" value="" style="height: 30px" /> -->
            </td>
            <td>
              <el-form-item label="" prop="id_22">
                <input
                  v-model="ruleForm.id_22"
                  type="text"
                  id="id_22"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <el-form-item label="" prop="GetTimes_22">
                  <el-date-picker
                    v-model:value="ruleForm.GetTimes_22"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择时间"
                    :clearable="false"
                  ></el-date-picker>
                </el-form-item>
                <span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
              ></span>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>NOx钼炉转换效率检测</td>
            <td>
              <el-form-item label="" prop="id_23">
                <input
                  v-model="ruleForm.id_23"
                  type="text"
                  id="id_23"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_24">
                <input
                  v-model="ruleForm.id_24"
                  type="text"
                  id="id_24"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <el-form-item label="" prop="GetTime_9">
                  <el-date-picker
                    v-model:value="ruleForm.GetTime_9"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择时间"
                    :clearable="false"
                  ></el-date-picker>
                </el-form-item>
                <span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
              ></span>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>检查/清洗空调过滤网</td>
            <td>
              <el-form-item label="" prop="id_25">
                <input
                  v-model="ruleForm.id_25"
                  type="text"
                  id="id_25"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_26">
                <input
                  v-model="ruleForm.id_26"
                  type="text"
                  id="id_26"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <el-form-item label="" prop="GetTime_10">
                  <el-date-picker
                    v-model:value="ruleForm.GetTime_10"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择时间"
                    :clearable="false"
                  ></el-date-picker>
                </el-form-item>
                <span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
              ></span>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>对空调进行检查与维护</td>
            <td>
              <el-form-item label="" prop="id_27">
                <input
                  v-model="ruleForm.id_27"
                  type="text"
                  id="id_27"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_28">
                <input
                  v-model="ruleForm.id_28"
                  type="text"
                  id="id_28"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <el-form-item label="" prop="GetTime_11">
                  <el-date-picker
                    v-model:value="ruleForm.GetTime_11"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择时间"
                    :clearable="false"
                  ></el-date-picker>
                </el-form-item>
                <span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
              ></span>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>空调遥控器更换电池</td>
            <td>
              <el-form-item label="" prop="id_29">
                <input
                  v-model="ruleForm.id_29"
                  type="text"
                  id="id_29"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_30">
                <input
                  v-model="ruleForm.id_30"
                  type="text"
                  id="id_30"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <el-form-item label="" prop="GetTime_12">
                  <el-date-picker
                    v-model:value="ruleForm.GetTime_12"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择时间"
                    :clearable="false"
                  ></el-date-picker>
                </el-form-item>
                <span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
              ></span>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>站房防雷接地电阻检查</td>
            <td>
              <el-form-item label="" prop="id_31">
                <input
                  v-model="ruleForm.id_31"
                  type="text"
                  id="id_31"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_32">
                <input
                  v-model="ruleForm.id_32"
                  type="text"
                  id="id_32"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <el-form-item label="" prop="GetTime_13">
                  <el-date-picker
                    v-model:value="ruleForm.GetTime_13"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择时间"
                    :clearable="false"
                  ></el-date-picker>
                </el-form-item>
                <span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
              ></span>
            </td>
          </tr>
          <tr>
            <td colspan="6" style="text-align: left">
              备注：“*”项目各地根据实际情况决定是否需要。
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
