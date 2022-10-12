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
            <td>点位名称</td>
            <td>
              <el-form-item label="" prop="DWname">
                <input
                  v-model="ruleForm.DWname"
                  type="text"
                  id="DWname"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>审核日期</td>
            <td>
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
            <td>仪器型号及编号</td>
            <td>
              <el-form-item label="" prop="id_code">
                <input
                  v-model="ruleForm.id_code"
                  type="text"
                  id="id_code"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>室内温/湿度</td>
            <td>
              <el-form-item label="" prop="id_wdsd">
                <input
                  v-model="ruleForm.id_wdsd"
                  type="text"
                  id="id_wdsd"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>审核时间</td>
            <td>
              <el-form-item label="" prop="id_time">
                <input
                  v-model="ruleForm.id_time"
                  type="text"
                  id="id_time"
                  style="height: 30px"
                />
                <!-- <el-time-picker v-model="ruleForm.id_time"   format="HH:mm" value-format="HH:mm"  placeholder="选择时间" id="id_time"></el-time-picker> -->
              </el-form-item>
            </td>
            <td>标气编号/浓度</td>
            <td>
              <el-form-item label="" prop="id_nd">
                <input
                  v-model="ruleForm.id_nd"
                  type="text"
                  id="id_nd"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="rpt">
        <tbody>
          <tr>
            <td>审核过程</td>
            <td>10%F.S</td>
            <td>20%F.S</td>
            <td>40%F.S</td>
            <td>60%F.S.</td>
            <td>80%F.S.</td>
          </tr>
          <tr>
            <td>标准值（<span class="types">ppb</span>）</td>
            <td>
              <el-form-item label="" prop="id_1">
                <input
                  v-model="ruleForm.id_1"
                  type="text"
                  id="id_1"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_2">
                <input
                  v-model="ruleForm.id_2"
                  type="text"
                  id="id_2"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_3">
                <input
                  v-model="ruleForm.id_3"
                  type="text"
                  id="id_3"
                  style="height: 30px"
                />
              </el-form-item>
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
              <el-form-item label="" prop="id_5">
                <input
                  v-model="ruleForm.id_5"
                  type="text"
                  id="id_5"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>

          <tr>
            <td>仪器响应值（<span class="types">ppb</span>）</td>
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
          </tr>
          <tr>
            <td>仪器平均相对误差（%）</td>
            <td colspan="5">
              <el-form-item label="" prop="id_19">
                <input
                  v-model="ruleForm.id_19"
                  type="text"
                  id="id_19"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <!-- <tr>
                  <td>仪器百分误差（%）</td>
                  <td><input v-model="ruleForm.id_11"  type="text" id="id_11" style="height: 30px;"></td>
                  <td><input v-model="ruleForm.id_12"  type="text" id="id_12" style="height: 30px;"></td>
                  <td><input v-model="ruleForm.id_13"  type="text" id="id_13" style="height: 30px;"></td>
                  <td><input v-model="ruleForm.id_14"  type="text" id="id_14" style="height: 30px;"></td>
                  <td><input v-model="ruleForm.id_15"  type="text" id="id_15" style="height: 30px;"></td>
              </tr> -->
        </tbody>
      </table>
      <table class="rpt" style="border-bottom: 0.5px solid #aaaaaa">
        <tbody>
          <tr>
            <td>多点校准曲线</td>
            <td>相关系数r</td>
            <td>
              <el-form-item label="" prop="id_16">
                <input
                  v-model="ruleForm.id_16"
                  type="text"
                  id="id_16"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>斜率a</td>
            <td>
              <el-form-item label="" prop="id_17">
                <input
                  v-model="ruleForm.id_17"
                  type="text"
                  id="id_17"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>截距b</td>
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
          </tr>
          <tr>
            <td>审核结果</td>
            <td colspan="6">
              <!-- <span>仪器示值的平均相对误差：</span>
                      <input v-model="ruleForm.id_19"  type="text" id="id_19" style="height: 30px;">
                      <br/> -->
              <el-form-item label="" prop="id_he">
                <input
                  v-model="ruleForm.id_he"
                  name="pass"
                  type="radio"
                  id="id_he"
                  value="1"
                  checked="checked"
                  style="width: 20px; height: 15px"
                />合格 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  v-model="ruleForm.id_he"
                  type="radio"
                  name="pass"
                  id="id_bhg"
                  value="0"
                  style="width: 20px; height: 15px"
                />不合格
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>备注</td>
            <td colspan="6" style="text-align: left">
              1.准确度审核时，仪器示值的平均相对误差应≤5%；<br />
              2.仪器准确度测试，通入仪器用满量程10%、20%、40%、60%和80%的标气，
              计算相关系数、斜率和截距。满足相关系数（r）＞0.999；0.95≤斜率（a）
              ≤1.05；截距（b）＜满量程±1%。
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
