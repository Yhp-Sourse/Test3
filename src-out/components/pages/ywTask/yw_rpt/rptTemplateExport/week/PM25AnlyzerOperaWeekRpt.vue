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
            <td>仪器名称</td>
            <td>仪器型号</td>
            <td>运行状况及处置情况</td>
          </tr>
          <tr>
            <td>气象五参数</td>
            <td>
              <el-form-item label="" prop="QCtype"
                ><input
                  type="text"
                  id="QCtype"
                  v-model="ruleForm.QCtype"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="QCdetail">
                <textarea
                  rows="5"
                  id="QCdetail"
                  v-model="ruleForm.QCdetail"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>能见度仪器</td>
            <td>
              <el-form-item label="" prop="NYtype"
                ><input
                  type="text"
                  id="NYtype"
                  v-model="ruleForm.NYtype"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="NYdetail">
                <textarea
                  rows="5"
                  id="NYdetail"
                  v-model="ruleForm.NYdetail"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>城市摄影系统</td>
            <td>
              <el-form-item label="" prop="CStype"
                ><input
                  type="text"
                  id="CStype"
                  v-model="ruleForm.CStype"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="CSdetail">
                <textarea
                  rows="5"
                  id="CSdetail"
                  v-model="ruleForm.CSdetail"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>数采系统软硬件（含直联网）</td>
            <td>
              <el-form-item label="" prop="SCtype"
                ><input
                  type="text"
                  id="SCtype"
                  v-model="ruleForm.SCtype"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="SCdetail">
                <textarea
                  rows="5"
                  id="SCdetail"
                  v-model="ruleForm.SCdetail"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>稳压电源</td>
            <td>
              <el-form-item label="" prop="WYtype"
                ><input
                  type="text"
                  id="WYtype"
                  v-model="ruleForm.WYtype"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="WYdetail">
                <textarea
                  rows="5"
                  id="WYdetail"
                  v-model="ruleForm.WYdetail"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>空调</td>
            <td>
              <el-form-item label="" prop="KTtype"
                ><input
                  type="text"
                  id="KTtype"
                  v-model="ruleForm.KTtype"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="KTdetail">
                <textarea
                  rows="5"
                  id="KTdetail"
                  v-model="ruleForm.KTdetail"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>VPN设备</td>
            <td>
              <el-form-item label="" prop="VDtype"
                ><input
                  type="text"
                  id="VDtype"
                  v-model="ruleForm.VDtype"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="VDdetail">
                <textarea
                  rows="5"
                  id="VDdetail"
                  v-model="ruleForm.VDdetail"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>监控系统</td>
            <td>
              <el-form-item label="" prop="JKtype"
                ><input
                  type="text"
                  id="JKtype"
                  v-model="ruleForm.JKtype"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              回放上次到本次巡检期间的监控录像，查看有无异常情况 <br />正常：口
              <br />异常：<el-form-item label="" prop="JKdetail">
                <textarea
                  rows="5"
                  id="JKdetail"
                  v-model="ruleForm.JKdetail"
                  style="border: none; border-bottom: 1px solid"
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
