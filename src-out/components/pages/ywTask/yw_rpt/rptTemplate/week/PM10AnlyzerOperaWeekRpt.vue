<template>
  <div>
    <el-form
      id="ASEmergency"
      :model="ruleForm"
      :rules="rules"
      ref="Form"
      :label-position="top"
    >
      <table id="tb1" style="display: table">
        <tbody>
          <tr>
            <td>巡检时间：</td>
            <td>
              <el-form-item label="" prop="yj_1">
                <el-date-picker
                  v-model:value="ruleForm.yj_1"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择时间"
                  :clearable="false"
                ></el-date-picker>
              </el-form-item>
            </td>

            <!-- <td>
                      巡检结束时间：
                  </td>
                  <td>
                      <el-form-item label="" prop="yj_2">
                         <el-date-picker v-model="ruleForm.yj_2" type="date" value-format="yyyy-MM-dd"  placeholder="选择时间" :clearable=false></el-date-picker>
                      </el-form-item>
                  </td>                  -->
          </tr>

          <tr>
            <td>仪器型号</td>
            <td>
              <el-form-item label="" prop="p_rc_1"
                ><input
                  id="p_rc_1"
                  v-model="ruleForm.p_rc_1"
                  type="text"
                  value=""
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>检查日期</td>
            <td>
              <el-form-item label="" prop="SDateTime"
                ><el-date-picker
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
            <td>仪器编号</td>
            <td>
              <el-form-item label="" prop="p_rc_3"
                ><input
                  id="p_rc_3"
                  v-model="ruleForm.p_rc_3"
                  type="text"
                  value=""
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>使用满量程（µg/m3）</td>
            <td>
              <el-form-item label="" prop="p_rc_4"
                ><input
                  id="p_rc_4"
                  v-model="ruleForm.p_rc_4"
                  type="text"
                  value=""
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>检 查 项 目</td>
            <td>参考范围</td>
            <td>检查值</td>
            <td>异常时处理记录</td>
          </tr>
          <tr>
            <td>大气压力（kpa）</td>
            <td>60-110</td>
            <td>
              <el-form-item label="" prop="p_rc_5"
                ><input
                  id="p_rc_5"
                  v-model="ruleForm.p_rc_5"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_6"
                ><input
                  id="p_rc_6"
                  v-model="ruleForm.p_rc_6"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>计前压（kpa）</td>
            <td>60-100</td>
            <td>
              <el-form-item label="" prop="p_rc_7"
                ><input
                  id="p_rc_7"
                  v-model="ruleForm.p_rc_7"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_8"
                ><input
                  id="p_rc_8"
                  v-model="ruleForm.p_rc_8"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>流量（L/mim）</td>
            <td>16.67±5％</td>
            <td>
              <el-form-item label="" prop="p_rc_9"
                ><input
                  id="p_rc_9"
                  v-model="ruleForm.p_rc_9"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_10"
                ><input
                  id="p_rc_10"
                  v-model="ruleForm.p_rc_10"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>室外温度(℃)</td>
            <td></td>
            <td>
              <el-form-item label="" prop="p_rc_11"
                ><input
                  id="p_rc_11"
                  v-model="ruleForm.p_rc_11"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_12"
                ><input
                  id="p_rc_12"
                  v-model="ruleForm.p_rc_12"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>室外湿度(RH%)</td>
            <td>0-100</td>
            <td>
              <el-form-item label="" prop="p_rc_13"
                ><input
                  id="p_rc_13"
                  v-model="ruleForm.p_rc_13"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_14"
                ><input
                  id="p_rc_14"
                  v-model="ruleForm.p_rc_14"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>加热杆温(℃)</td>
            <td>≤50</td>
            <td>
              <el-form-item label="" prop="p_rc_15"
                ><input
                  id="p_rc_15"
                  v-model="ruleForm.p_rc_15"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_16"
                ><input
                  id="p_rc_16"
                  v-model="ruleForm.p_rc_16"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td>样气温度(℃)</td>
            <td>0-50</td>
            <td>
              <el-form-item label="" prop="p_rc_15"
                ><input
                  id="p_rc_159"
                  v-model="ruleForm.p_rc_159"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_16"
                ><input
                  id="p_rc_169"
                  v-model="ruleForm.p_rc_169"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td>采样体温(℃)</td>
            <td>45±5</td>
            <td>
              <el-form-item label="" prop="p_rc_17"
                ><input
                  id="p_rc_17"
                  v-model="ruleForm.p_rc_17"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_18"
                ><input
                  id="p_rc_18"
                  v-model="ruleForm.p_rc_18"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>脉冲频率(Hz)</td>
            <td>1000-12000</td>
            <td>
              <el-form-item label="" prop="p_rc_19"
                ><input
                  id="p_rc_19"
                  v-model="ruleForm.p_rc_19"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_20"
                ><input
                  id="p_rc_20"
                  v-model="ruleForm.p_rc_20"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>流量系数</td>
            <td></td>
            <td>
              <el-form-item label="" prop="p_rc_21"
                ><input
                  id="p_rc_21"
                  v-model="ruleForm.p_rc_21"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_22"
                ><input
                  id="p_rc_22"
                  v-model="ruleForm.p_rc_22"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>PMT高压(V)</td>
            <td>-700~-1000</td>
            <td>
              <el-form-item label="" prop="p_rc_23"
                ><input
                  id="p_rc_23"
                  v-model="ruleForm.p_rc_23"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_24"
                ><input
                  id="p_rc_24"
                  v-model="ruleForm.p_rc_24"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>斜率</td>
            <td>1±0.15</td>
            <td>
              <el-form-item label="" prop="p_rc_25"
                ><input
                  id="p_rc_25"
                  v-model="ruleForm.p_rc_25"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_26"
                ><input
                  id="p_rc_26"
                  v-model="ruleForm.p_rc_26"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>截距</td>
            <td>0±10</td>
            <td>
              <el-form-item label="" prop="p_rc_27"
                ><input
                  id="p_rc_27"
                  v-model="ruleForm.p_rc_27"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_28"
                ><input
                  id="p_rc_28"
                  v-model="ruleForm.p_rc_28"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>质量系数</td>
            <td></td>
            <td>
              <el-form-item label="" prop="p_rc_29"
                ><input
                  id="p_rc_29"
                  v-model="ruleForm.p_rc_29"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_30"
                ><input
                  id="p_rc_30"
                  v-model="ruleForm.p_rc_30"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>纸带使用情况</td>
            <td></td>
            <td>
              <el-form-item label="" prop="p_rc_31"
                ><input
                  id="p_rc_31"
                  v-model="ruleForm.p_rc_31"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_32"
                ><input
                  id="p_rc_32"
                  v-model="ruleForm.p_rc_32"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>振荡频率</td>
            <td>100-400HZ</td>
            <td>
              <el-form-item label="" prop="p_rc_33"
                ><input
                  id="p_rc_33"
                  v-model="ruleForm.p_rc_33"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_34"
                ><input
                  id="p_rc_34"
                  v-model="ruleForm.p_rc_34"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>噪声</td>
            <td>≤0.1ug</td>
            <td>
              <el-form-item label="" prop="p_rc_35"
                ><input
                  id="p_rc_35"
                  v-model="ruleForm.p_rc_35"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_36"
                ><input
                  id="p_rc_36"
                  v-model="ruleForm.p_rc_36"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>露点</td>
            <td>≤2℃</td>
            <td>
              <el-form-item label="" prop="p_rc_44"
                ><input
                  id="p_rc_44"
                  v-model="ruleForm.p_rc_44"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_45"
                ><input
                  id="p_rc_45"
                  v-model="ruleForm.p_rc_45"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>TEOM滤膜负载及处置情况（FDMS滤膜需与TEOM滤膜同时更换）</td>
            <td>
              --
              <!-- <input id="p_rc_37"  v-model="ruleForm.p_rc_37" type="text" value="" style="height: 30px;"> -->
            </td>
            <td>
              <el-form-item label="" prop="p_rc_38"
                ><input
                  id="p_rc_38"
                  v-model="ruleForm.p_rc_38"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_39"
                ><input
                  id="p_rc_39"
                  v-model="ruleForm.p_rc_39"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>其他参数（SHARP5030仪器需记录T1～T4，P1～P3）</td>
            <td>
              --
              <!-- <input id="p_rc_40"  v-model="ruleForm.p_rc_40" type="text" value="" style="height: 30px;"> -->
            </td>
            <td>
              <el-form-item label="" prop="p_rc_41"
                ><input
                  id="p_rc_41"
                  v-model="ruleForm.p_rc_41"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="p_rc_42"
                ><input
                  id="p_rc_42"
                  v-model="ruleForm.p_rc_42"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>
          <tr>
            <td>备注</td>
            <td colspan="3">
              <el-form-item label="" prop="p_rc_43"
                ><input
                  id="p_rc_43"
                  v-model="ruleForm.p_rc_43"
                  type="text"
                  value=""
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
        p_rc_1: '',
        SDateTime: '',
        p_rc_3: '',
        p_rc_4: '',
        p_rc_5: '',
        p_rc_6: '',
        p_rc_7: '',
        p_rc_8: '',
        p_rc_9: '',
        p_rc_10: '',
        p_rc_11: '',
        p_rc_12: '',
        p_rc_13: '',
        p_rc_14: '',
        p_rc_15: '',
        p_rc_16: '',
        p_rc_159: '',
        p_rc_169: '',
        p_rc_17: '',
        p_rc_18: '',
        p_rc_19: '',
        p_rc_20: '',
        p_rc_21: '',
        p_rc_22: '',
        p_rc_23: '',
        p_rc_24: '',
        p_rc_25: '',
        p_rc_26: '',
        p_rc_27: '',
        p_rc_28: '',
        p_rc_29: '',
        p_rc_30: '',
        p_rc_31: '',
        p_rc_32: '',
        p_rc_33: '',
        p_rc_34: '',
        p_rc_35: '',
        p_rc_36: '',
        p_rc_37: '',
        p_rc_38: '',
        p_rc_39: '',
        p_rc_40: '',
        p_rc_41: '',
        p_rc_42: '',
        p_rc_43: '',
        p_rc_44: '',
        p_rc_45: '',
        yj_1: '',
        yj_2: '',
      },

      rules: {
        p_rc_1: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        SDateTime: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_3: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_4: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_5: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_6: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_7: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_8: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_9: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_10: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_11: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_12: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_13: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_14: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_15: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_16: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_159: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_169: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_17: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_18: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_19: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_20: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_21: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_22: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_23: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_24: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_25: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_26: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_27: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_28: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_29: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_30: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_31: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_32: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_33: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_34: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_35: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_36: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_37: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_38: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_39: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_40: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_41: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_42: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_43: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_44: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        p_rc_45: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        yj_1: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        yj_2: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
      },
    }
  },
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
