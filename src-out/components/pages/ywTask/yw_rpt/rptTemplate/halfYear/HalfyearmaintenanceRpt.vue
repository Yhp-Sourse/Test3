<template>
  <div>
    <el-form
      id="ASEmergency"
      :model="ruleForm"
      :rules="rules"
      ref="Form"
      :label-position="top"
    >
      <div style="float: left; margin: 15px 45px">
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
            <td>仪器型号/编号</td>
            <td colspan="2">
              <el-form-item label="" prop="DeviceCode">
                <input
                  v-model="ruleForm.DeviceCode"
                  type="text"
                  id="DeviceCode"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>检查时间</td>
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
            <td>气压（kPa）</td>
            <td>
              <el-form-item label="" prop="AirPressure">
                <input
                  v-model="ruleForm.AirPressure"
                  type="text"
                  id="AirPressure"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>温度（℃）</td>
            <td>
              <el-form-item label="" prop="Temperature">
                <input
                  v-model="ruleForm.Temperature"
                  type="text"
                  id="Temperature"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>湿度（%RH）</td>
            <td>
              <el-form-item label="" prop="Humidity">
                <input
                  v-model="ruleForm.Humidity"
                  type="text"
                  id="Humidity"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>校准流量计型号</td>
            <td colspan="2">
              <el-form-item label="" prop="XZLLModel">
                <input
                  v-model="ruleForm.XZLLModel"
                  type="text"
                  id="XZLLModel"
                  style="height: 30px"
                />
              </el-form-item>
              <el-form-item label="" prop="XZLLModel2">
                <input
                  v-model="ruleForm.XZLLModel2"
                  type="text"
                  id="XZLLModel2"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>校准流量计编号</td>
            <td colspan="2">
              <el-form-item label="" prop="XZLLCode">
                <input
                  v-model="ruleForm.XZLLCode"
                  type="text"
                  id="XZLLCode"
                  style="height: 30px"
                />
              </el-form-item>
              <el-form-item label="" prop="XZLLCode2">
                <input
                  v-model="ruleForm.XZLLCode2"
                  type="text"
                  id="XZLLCode2"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="rpt1">
        <tbody>
          <tr>
            <td colspan="6">校准检查结果</td>
          </tr>
          <tr>
            <td colspan="6">0～10 L/min流量控制器</td>
          </tr>
          <tr>
            <td>序号</td>
            <td>设定值L</td>
            <td>仪器读数<br />（L/min）</td>
            <td>流量计读数<br />（L/min）</td>
            <td>流量计修正读数<br />（L/min）（质量流量）</td>
            <td>输入校准器值（L/min）<br />（质量流量）</td>
          </tr>
          <tr>
            <td>1</td>
            <td>0%</td>
            <td>
              <el-form-item label="" prop="id_a2">
                <input
                  v-model="ruleForm.id_a2"
                  type="text"
                  id="id_a2"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a3">
                <input
                  v-model="ruleForm.id_a3"
                  type="text"
                  id="id_a3"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a4">
                <input
                  v-model="ruleForm.id_a4"
                  type="text"
                  id="id_a4"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a5">
                <input
                  v-model="ruleForm.id_a5"
                  type="text"
                  id="id_a5"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>20%</td>
            <td>
              <el-form-item label="" prop="id_a7">
                <input
                  v-model="ruleForm.id_a7"
                  type="text"
                  id="id_a7"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a8">
                <input
                  v-model="ruleForm.id_a8"
                  type="text"
                  id="id_a8"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a9">
                <input
                  v-model="ruleForm.id_a9"
                  type="text"
                  id="id_a9"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a10">
                <input
                  v-model="ruleForm.id_a10"
                  type="text"
                  id="id_a10"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>50%</td>
            <td>
              <el-form-item label="" prop="id_a12">
                <input
                  v-model="ruleForm.id_a12"
                  type="text"
                  id="id_a12"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a13">
                <input
                  v-model="ruleForm.id_a13"
                  type="text"
                  id="id_a13"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a14">
                <input
                  v-model="ruleForm.id_a14"
                  type="text"
                  id="id_a14"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a15">
                <input
                  v-model="ruleForm.id_a15"
                  type="text"
                  id="id_a15"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>60%</td>
            <td>
              <el-form-item label="" prop="id_a17">
                <input
                  v-model="ruleForm.id_a17"
                  type="text"
                  id="id_a17"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a18">
                <input
                  v-model="ruleForm.id_a18"
                  type="text"
                  id="id_a18"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a19">
                <input
                  v-model="ruleForm.id_a19"
                  type="text"
                  id="id_a19"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a20">
                <input
                  v-model="ruleForm.id_a20"
                  type="text"
                  id="id_a20"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>80%</td>
            <td>
              <el-form-item label="" prop="id_a22">
                <input
                  v-model="ruleForm.id_a22"
                  type="text"
                  id="id_a22"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a23">
                <input
                  v-model="ruleForm.id_a23"
                  type="text"
                  id="id_a23"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a24">
                <input
                  v-model="ruleForm.id_a24"
                  type="text"
                  id="id_a24"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a25">
                <input
                  v-model="ruleForm.id_a25"
                  type="text"
                  id="id_a25"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>90%</td>
            <td>
              <el-form-item label="" prop="id_a27">
                <input
                  v-model="ruleForm.id_a27"
                  type="text"
                  id="id_a27"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a28">
                <input
                  v-model="ruleForm.id_a28"
                  type="text"
                  id="id_a28"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a29">
                <input
                  v-model="ruleForm.id_a29"
                  type="text"
                  id="id_a29"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_a30">
                <input
                  v-model="ruleForm.id_a30"
                  type="text"
                  id="id_a30"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="6">
              斜率a=<el-form-item label="" prop="XL1">
                <input
                  v-model="ruleForm.XL1"
                  type="text"
                  id="XL1"
                  style="width: 10%; height: 30px"
                />
              </el-form-item>

              截距b=<el-form-item label="" prop="JJ1">
                <input
                  v-model="ruleForm.JJ1"
                  type="text"
                  id="JJ1"
                  style="width: 10%; height: 30px"
                />
              </el-form-item>

              相关系数r=<el-form-item label="" prop="XG1">
                <input
                  v-model="ruleForm.XG1"
                  type="text"
                  id="XG1"
                  style="width: 10%; height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="6" style="text-align: left">
              备注：0.99≤斜率a≤1.01；截距（b）＜满量程±1%；相关系数r大于0.9999
            </td>
          </tr>
          <tr>
            <td colspan="6">0～100 /50ml/min流量控制器</td>
          </tr>
          <tr>
            <td>1</td>
            <td>0%</td>
            <td>
              <el-form-item label="" prop="id_b2">
                <input
                  v-model="ruleForm.id_b2"
                  type="text"
                  id="id_b2"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b3">
                <input
                  v-model="ruleForm.id_b3"
                  type="text"
                  id="id_b3"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b4">
                <input
                  v-model="ruleForm.id_b4"
                  type="text"
                  id="id_b4"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b5">
                <input
                  v-model="ruleForm.id_b5"
                  type="text"
                  id="id_b5"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>20%</td>
            <td>
              <el-form-item label="" prop="id_b7">
                <input
                  v-model="ruleForm.id_b7"
                  type="text"
                  id="id_b7"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b8">
                <input
                  v-model="ruleForm.id_b8"
                  type="text"
                  id="id_b8"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b9">
                <input
                  v-model="ruleForm.id_b9"
                  type="text"
                  id="id_b9"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b10">
                <input
                  v-model="ruleForm.id_b10"
                  type="text"
                  id="id_b10"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>50%</td>
            <td>
              <el-form-item label="" prop="id_b12">
                <input
                  v-model="ruleForm.id_b12"
                  type="text"
                  id="id_b12"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b13">
                <input
                  v-model="ruleForm.id_b13"
                  type="text"
                  id="id_b13"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b14">
                <input
                  v-model="ruleForm.id_b14"
                  type="text"
                  id="id_b14"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b15">
                <input
                  v-model="ruleForm.id_b15"
                  type="text"
                  id="id_b15"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>60%</td>
            <td>
              <el-form-item label="" prop="id_b17">
                <input
                  v-model="ruleForm.id_b17"
                  type="text"
                  id="id_b17"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b18">
                <input
                  v-model="ruleForm.id_b18"
                  type="text"
                  id="id_b18"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b19">
                <input
                  v-model="ruleForm.id_b19"
                  type="text"
                  id="id_b19"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b20">
                <input
                  v-model="ruleForm.id_b20"
                  type="text"
                  id="id_b20"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>80%</td>
            <td>
              <el-form-item label="" prop="id_b22">
                <input
                  v-model="ruleForm.id_b22"
                  type="text"
                  id="id_b22"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b23">
                <input
                  v-model="ruleForm.id_b23"
                  type="text"
                  id="id_b23"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b24">
                <input
                  v-model="ruleForm.id_b24"
                  type="text"
                  id="id_b24"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b25">
                <input
                  v-model="ruleForm.id_b25"
                  type="text"
                  id="id_b25"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>90%</td>
            <td>
              <el-form-item label="" prop="id_b27">
                <input
                  v-model="ruleForm.id_b27"
                  type="text"
                  id="id_b27"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b28">
                <input
                  v-model="ruleForm.id_b28"
                  type="text"
                  id="id_b28"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b29">
                <input
                  v-model="ruleForm.id_b29"
                  type="text"
                  id="id_b29"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_b30">
                <input
                  v-model="ruleForm.id_b30"
                  type="text"
                  id="id_b30"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="6">
              斜率a=<el-form-item label="" prop="XL2">
                <input
                  v-model="ruleForm.XL2"
                  type="text"
                  id="XL2"
                  style="width: 10%; height: 30px"
                />
              </el-form-item>

              截距b=<el-form-item label="" prop="JJ2">
                <input
                  v-model="ruleForm.JJ2"
                  type="text"
                  id="JJ2"
                  style="width: 10%; height: 30px"
                />
              </el-form-item>

              相关系数r=<el-form-item label="" prop="XG2">
                <input
                  v-model="ruleForm.XG2"
                  type="text"
                  id="XG2"
                  style="width: 10%; height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="6" style="text-align: left">
              备注：0.99≤斜率a≤1.01；截距（b）＜满量程±1%；相关系数r大于0.9999
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
        DeviceCode: '',
        SDateTime: '',
        AirPressure: '',
        Temperature: '',
        Humidity: '',
        XZLLModel: '',
        XZLLCode: '',
        XZLLModel2: '',
        XZLLCode2: '',
        id_a2: '',
        id_a3: '',
        id_a4: '',
        id_a5: '',
        id_a7: '',
        id_a8: '',
        id_a9: '',
        id_a10: '',
        id_a12: '',
        id_a13: '',
        id_a14: '',
        id_a15: '',
        id_a17: '',
        id_a18: '',
        id_a19: '',
        id_a20: '',
        id_a22: '',
        id_a23: '',
        id_a24: '',
        id_a25: '',
        id_a27: '',
        id_a28: '',
        id_a29: '',
        id_a30: '',
        XL1: '',
        JJ1: '',
        XG1: '',
        id_b2: '',
        id_b3: '',
        id_b4: '',
        id_b5: '',
        id_b7: '',
        id_b8: '',
        id_b9: '',
        id_b10: '',
        id_b12: '',
        id_b13: '',
        id_b14: '',
        id_b15: '',
        id_b17: '',
        id_b18: '',
        id_b19: '',
        id_b20: '',
        id_b22: '',
        id_b23: '',
        id_b24: '',
        id_b25: '',
        id_b27: '',
        id_b28: '',
        id_b29: '',
        id_b30: '',
        XL2: '',
        JJ2: '',
        XG2: '',
        yj_1: '',
        yj_2: '',
        InspectionSTime: '',
        InspectionETime: '',
      },
      rules: {
        yj_1: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        yj_2: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        DeviceCode: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        SDateTime: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        AirPressure: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Temperature: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Humidity: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        XZLLModel: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        XZLLCode: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        XZLLModel2: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        XZLLCode2: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a2: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a3: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a4: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a5: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a7: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a8: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a9: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a10: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a12: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a13: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a14: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a15: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a17: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a18: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a19: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a20: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a22: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a23: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a24: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a25: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a27: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a28: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a29: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_a30: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        XL1: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        JJ1: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        XG1: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b2: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b3: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b4: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b5: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b7: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b8: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b9: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b10: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b12: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b13: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b14: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b15: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b17: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b18: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b19: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b20: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b22: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b23: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b24: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b25: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b27: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b28: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b29: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        id_b30: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        XL2: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        JJ2: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        XG2: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
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
    'ruleForm.yj_1'(val, oldval) {
      //键路径必须加上引号
      this.ruleForm.SDateTime = val
    },
    btnType(val, oldVal) {
      this.$refs['Form'].validate((valid) => {
        if (valid) {
          if (val == '保存') {
            $emit(this, 'formSava', JSON.stringify(this.ruleForm))
          }
          if (val == '提交') {
            $emit(this, 'formSubmit', JSON.stringify(this.ruleForm))
          }
        } else {
          $emit(this, 'reSet', '')
          return false
        }
      })
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
      var currentDate = `${dyear}-${dmonth}-${ddate}`

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
      this.ruleForm['SDateTime'] = currentDate
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
