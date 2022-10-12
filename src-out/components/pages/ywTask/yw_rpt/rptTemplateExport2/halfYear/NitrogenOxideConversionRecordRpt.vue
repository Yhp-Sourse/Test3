<template>
  <div>
    <el-form id="ASEmergency" :model="ruleForm" ref="Form">
      <div style="float: left; margin: 15px 45px">
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
            <td>仪器名称及编号</td>
            <td colspan="2">
              <el-form-item label="" prop="id_1">
                <textarea
                  v-model="ruleForm.id_1"
                  rows="3"
                  id="id_1"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
            <td>测试时间</td>
            <td colspan="2">
              <el-form-item label="" prop="SDateTime">
                <el-date-picker
                  v-model:value="ruleForm.SDateTime"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>标气来源及编号</td>
            <td colspan="2">
              <el-form-item label="" prop="id_2">
                <textarea
                  v-model="ruleForm.id_2"
                  rows="3"
                  id="id_2"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
            <td>标气浓度<br />(μmol/mol)</td>
            <td colspan="2">
              <el-form-item label="" prop="id_3">
                <textarea
                  v-model="ruleForm.id_3"
                  rows="3"
                  id="id_3"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>NO设置浓度</td>
            <td>校准仪中O<sub>3</sub>开/关</td>
            <td>氮氧化物分析仪读数（nmol/mol）</td>
            <td>第一次（nmol/mol）</td>
            <td>第二次（nmol/mol）</td>
            <td>第三次（nmol/mol）</td>
          </tr>
          <tr>
            <td rowspan="5">满量程80%</td>
            <td rowspan="2">关</td>
            <td>[NO]orig</td>
            <td>
              <el-form-item label="" prop="id_4">
                <textarea
                  v-model="ruleForm.id_4"
                  rows="3"
                  id="id_4"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_5">
                <textarea
                  v-model="ruleForm.id_5"
                  rows="3"
                  id="id_5"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_6">
                <textarea
                  v-model="ruleForm.id_6"
                  rows="3"
                  id="id_6"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>[NOx]orig</td>
            <td>
              <el-form-item label="" prop="id_7">
                <textarea
                  v-model="ruleForm.id_7"
                  rows="3"
                  id="id_7"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_8">
                <textarea
                  v-model="ruleForm.id_8"
                  rows="3"
                  id="id_8"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_9">
                <textarea
                  v-model="ruleForm.id_9"
                  rows="3"
                  id="id_9"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td rowspan="2">开</td>
            <td>[NO]rem</td>
            <td>
              <el-form-item label="" prop="id_10">
                <textarea
                  v-model="ruleForm.id_10"
                  rows="3"
                  id="id_10"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_11">
                <textarea
                  v-model="ruleForm.id_11"
                  rows="3"
                  id="id_11"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_12">
                <textarea
                  v-model="ruleForm.id_12"
                  rows="3"
                  id="id_12"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>[NOx]rem</td>
            <td>
              <el-form-item label="" prop="id_13">
                <textarea
                  v-model="ruleForm.id_13"
                  rows="3"
                  id="id_13"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_14">
                <textarea
                  v-model="ruleForm.id_14"
                  rows="3"
                  id="id_14"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_15">
                <textarea
                  v-model="ruleForm.id_15"
                  rows="3"
                  id="id_15"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="2">转化效率(%)</td>
            <td>
              <el-form-item label="" prop="id_16">
                <textarea
                  v-model="ruleForm.id_16"
                  rows="3"
                  id="id_16"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_17">
                <textarea
                  v-model="ruleForm.id_17"
                  rows="3"
                  id="id_17"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_18">
                <textarea
                  v-model="ruleForm.id_18"
                  rows="3"
                  id="id_18"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="3">平均转化效率(%)</td>
            <td colspan="3">
              <el-form-item label="" prop="id_19">
                <textarea
                  v-model="ruleForm.id_19"
                  rows="3"
                  id="id_19"
                  class="textarea"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="6" style="text-align: left">
              结果评价：
              <input
                v-model="ruleForm.id_hg"
                type="radio"
                name="pass"
                id="id_hg"
                value="1"
                checked="checked"
                style="width: 20px; height: 15px"
              />合格 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                v-model="ruleForm.id_hg"
                type="radio"
                value="0"
                id="id_bhg"
                name="pass"
                style="width: 20px; height: 15px"
              />不合格<br />
              注1：如果平均转化率＜96%，＞102%分析仪需进行维修或更换
            </td>
          </tr>
          <tr>
            <td colspan="6" style="text-align: left">
              备注：<el-form-item label="" prop="id_bz">
                <textarea
                  v-model="ruleForm.id_bz"
                  rows="5"
                  id="id_bz"
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
