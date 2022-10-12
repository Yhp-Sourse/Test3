<template>
  <div>
    <el-form id="ASEmergency" :model="ruleForm" :rules="rules" ref="Form">
      <table id="tb2" style="">
        <tbody>
          <tr style="">
            <td style="width: 200px">巡检时间：</td>
            <td colspan="2">
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

            <td style="width: 200px">巡检结束时间：</td>
            <td colspan="2">
              <!-- <el-form-item label="" prop="yj_2">
                         <el-date-picker v-model="ruleForm.yj_2" type="date" value-format="yyyy-MM-dd"  placeholder="选择时间" :clearable=false></el-date-picker>
                      </el-form-item> -->
            </td>
          </tr>

          <tr>
            <td style="width: 200px"><span id="td_1">仪器型号</span></td>
            <td colspan="2">
              <el-form-item label="" prop="rc_1"
                ><input
                  type="text"
                  value=""
                  v-model="ruleForm.rc_1"
                  id="rc_1"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2"><span id="td_2">校准日期</span></td>
            <td>
              <el-form-item label="" prop="sdateTime"
                ><el-date-picker
                  v-model:value="ruleForm.sdateTime"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker
              ></el-form-item>
            </td>
          </tr>

          <tr>
            <td><span id="td_3">仪器编号</span></td>
            <td colspan="2">
              <el-form-item label="" prop="rc_3"
                ><input
                  type="text"
                  value=""
                  id="rc_3"
                  v-model="ruleForm.rc_3"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2"><span id="td_4">使用满量程（PPB）</span></td>
            <td>
              <el-form-item label="" prop="rc_4"
                ><input
                  type="text"
                  value=""
                  id="rc_4"
                  v-model="ruleForm.rc_4"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td><span id="td_5">标气瓶编号</span></td>
            <td colspan="2">
              <el-form-item label="" prop="rc_5"
                ><input
                  type="text"
                  value=""
                  id="rc_5"
                  v-model="ruleForm.rc_5"
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td rowspan="2" colspan="2">
              <span id="td_6">标气瓶浓度（PPM）</span>
            </td>
            <td rowspan="2">
              <el-form-item label="" prop="rc_6"
                ><input
                  type="text"
                  value=""
                  id="rc_6"
                  v-model="ruleForm.rc_6"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td><span id="td_7">标气瓶压力（MPa）</span></td>
            <td colspan="2">
              <el-form-item label="" prop="rc_7"
                ><input
                  type="text"
                  value=""
                  id="rc_7"
                  @blur="checkKeydown('rc_7', 1)"
                  v-model="ruleForm.rc_7"
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td rowspan="2"><span id="td_8">校准点</span></td>
            <td rowspan="2"><span id="td_9">开始时间</span></td>
            <td rowspan="2"><span id="td_10">结束时间</span></td>
            <td rowspan="2"><span id="td_11">标准浓度（PPB）</span></td>
          </tr>

          <tr>
            <td><span id="td_14">响应浓度（PPB）</span></td>
            <td><span id="td_15">校准后浓度（PPB）</span></td>
          </tr>

          <tr>
            <td><span id="td_16">零点</span></td>
            <td>
              <el-form-item label="" prop="rc_8"
                ><el-time-picker
                  v-model:value="ruleForm.rc_8"
                  format="HH:mm"
                  value-format="HH:mm"
                  placeholder="选择时间"
                  id="rc_8"
                ></el-time-picker
              ></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_9"
                ><el-time-picker
                  v-model:value="ruleForm.rc_9"
                  format="HH:mm"
                  value-format="HH:mm"
                  placeholder="选择时间"
                  id="rc_9"
                ></el-time-picker
              ></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_10"
                ><input
                  id="rc_10"
                  v-model="ruleForm.rc_10"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_11"
                ><input
                  id="rc_11"
                  @blur="checkKeydown('rc_11', 2)"
                  v-model="ruleForm.rc_11"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_12"
                ><input
                  id="rc_12"
                  v-model="ruleForm.rc_12"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td><span id="td_17">满量程的80%</span></td>
            <td>
              <el-form-item label="" prop="rc_13"
                ><el-time-picker
                  v-model:value="ruleForm.rc_13"
                  value-format="HH:mm"
                  format="HH:mm"
                  placeholder="选择时间"
                  id="rc_13"
                ></el-time-picker
              ></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_14"
                ><el-time-picker
                  v-model:value="ruleForm.rc_14"
                  value-format="HH:mm"
                  format="HH:mm"
                  placeholder="选择时间"
                  d="rc_14"
                ></el-time-picker
              ></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_15"
                ><input
                  id="rc_15"
                  v-model="ruleForm.rc_15"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_16"
                ><input
                  id="rc_16"
                  @blur="checkKeydown('rc_16', 2)"
                  v-model="ruleForm.rc_16"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_17"
                ><input
                  id="rc_17"
                  v-model="ruleForm.rc_17"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td><span id="td_18">零点漂移（PPB）</span></td>
            <td colspan="5">
              <el-form-item label="" prop="rc_18"
                ><input
                  id="rc_18"
                  @blur="checkKeydown('rc_18', 2)"
                  v-model="ruleForm.rc_18"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td><span id="td_19">跨度漂移（%）</span></td>
            <td colspan="5">
              <el-form-item label="" prop="rc_19"
                ><input
                  id="rc_19"
                  @blur="checkKeydown('rc_19', 2)"
                  v-model="ruleForm.rc_19"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td><span id="td_20">检查项目</span></td>
            <td colspan="2"><span id="td_21">参考范围</span></td>
            <td><span id="td_22">检查值</span></td>
            <td colspan="2"><span id="td_23">异常时处理记录</span></td>
          </tr>

          <!-- start -->
          <tr>
            <td><span id="td_24">采样压力（样气压力）</span></td>
            <td colspan="2">
              <span id="td_25"
                >环境压力±3In-Hg-A（API），7～15 PSIA（聚光），400～1000mmHg
                (赛默飞)，50～105 kpa（天虹），400～800
                TORR（EC），50-102kpa（新先河）</span
              >
            </td>
            <td>
              <el-form-item label="" prop="rc_20"
                ><input
                  id="rc_20"
                  v-model="ruleForm.rc_20"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="rc_21"
                ><input
                  id="rc_21"
                  v-model="ruleForm.rc_21"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td><span id="td_26">采样流量(样气流量)</span></td>
            <td colspan="2">
              <span id="td_27"
                >650±10% ml/min（API），300～900ml/min（天虹），580～720
                sccm（聚光），0.350～0.750L/min (赛默飞)，0.4～0.8
                SLPM（EC），650±65ml/min(新先河)</span
              >
            </td>
            <td>
              <el-form-item label="" prop="rc_22"
                ><input
                  id="rc_22"
                  v-model="ruleForm.rc_22"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="rc_23"
                ><input
                  id="rc_23"
                  v-model="ruleForm.rc_23"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td>
              <span id="td_28">参考PMT信号(或模拟电压/ PMT通零状态）</span>
            </td>
            <td colspan="2">
              <span id="td_29"
                >0～5000 mv（API），1.5～4.096 v（聚光），11.6～12.2
                v（EC），0～5000 mv（新先河）</span
              >
            </td>
            <td>
              <el-form-item label="" prop="rc_24"
                ><input
                  id="rc_24"
                  v-model="ruleForm.rc_24"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="rc_25"
                ><input
                  id="rc_25"
                  v-model="ruleForm.rc_25"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td>
              <span id="td_30"
                >紫外灯光强（紫外灯参比电压/紫外灯信号/锌灯电压/光强）</span
              >
            </td>
            <td colspan="2">
              <span id="td_31"
                >600～4800 mv（API），1.5～4.096
                v（聚光），40～100%(赛默飞)，300-3000 mv （天虹），1.5～3.5
                v（EC），2.0～9.0 v（ESA），2000-5000mv（新先河）</span
              >
            </td>
            <td>
              <el-form-item label="" prop="rc_26"
                ><input
                  id="rc_26"
                  v-model="ruleForm.rc_26"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="rc_27"
                ><input
                  id="rc_27"
                  v-model="ruleForm.rc_27"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td><span id="td_32">斜率(Slope)</span></td>
            <td colspan="2">
              <span id="td_33"
                >1±0.3（API），0.85～1.15（聚光），0.500～2.000(赛默飞)，0.4-2（天虹)，0.111～0.141（新先河）</span
              >
            </td>
            <td>
              <el-form-item label="" prop="rc_28"
                ><input
                  id="rc_28"
                  v-model="ruleForm.rc_28"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="rc_29"
                ><input
                  id="rc_29"
                  v-model="ruleForm.rc_29"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td><span id="td_34">截距(Offset)</span></td>
            <td colspan="2">
              <span id="td_35"
                >&lt;250 mv（API)，-20～50 ppb（聚光)，&gt;0(赛默飞)，-50～50
                ppb（天虹)，0～500mv（新先河）</span
              >
            </td>
            <td>
              <el-form-item label="" prop="rc_30"
                ><input
                  id="rc_30"
                  v-model="ruleForm.rc_30"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="rc_31"
                ><input
                  id="rc_31"
                  v-model="ruleForm.rc_31"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td><span id="td_36">高压电源(倍增管高压/高压)</span></td>
            <td colspan="2">
              <span id="td_37"
                >400～900 V（API)，400～900
                V（聚光)，-1200～-500V(赛默飞)，630～730
                V（EC)，-500～-1100V（天虹)，400-1000v（新先河）</span
              >
            </td>
            <td>
              <el-form-item label="" prop="rc_32"
                ><input
                  id="rc_32"
                  v-model="ruleForm.rc_32"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="rc_33"
                ><input
                  id="rc_33"
                  v-model="ruleForm.rc_33"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr id="tr8" style="display: table-row">
            <td><span id="td_38">反应室温度</span></td>
            <td colspan="2">
              <span id="td_39"
                >50±1℃（API)，50±5℃（聚光/天虹)，43～47℃(赛默飞)，50±3℃（EC)，45±1℃℃（新先河）</span
              >
            </td>
            <td>
              <el-form-item label="" prop="rc_34"
                ><input
                  id="rc_34"
                  v-model="ruleForm.rc_34"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="rc_35"
                ><input
                  id="rc_35"
                  v-model="ruleForm.rc_35"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <!-- end -->
          <tr>
            <td><span id="td_50">是否更换滤膜</span></td>
            <td colspan="2">
              <el-form-item label="" prop="rc_50"
                ><input
                  id="rc_50"
                  v-model="ruleForm.rc_50"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_51"
                ><input
                  id="rc_51"
                  type="text"
                  v-model="ruleForm.rc_51"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="rc_52"
                ><input
                  id="rc_52"
                  v-model="ruleForm.rc_52"
                  type="text"
                  value=""
                  style="height: 30px"
              /></el-form-item>
            </td>
          </tr>

          <tr>
            <td><span id="td_51">备注</span></td>
            <td colspan="5">
              <el-form-item label="" prop="rc_53"
                ><input
                  id="rc_53"
                  v-model="ruleForm.rc_53"
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
import changeNumber2 from '../../../../../../assets/JS/changeNumber2.js'

export default {
  props: {
    formData: Object,
    btnType: String,
  },
  components: {},
  data() {
    return {
      ruleForm: {
        InspectionSTime: '',
        InspectionETime: '',
        rc_1: '',
        sdateTime: '',
        rc_3: '',
        rc_4: '',
        rc_5: '',
        rc_6: '',
        rc_7: '',
        rc_8: '',
        rc_9: '',
        rc_10: '0',
        rc_11: '',
        rc_12: '',
        rc_13: '',
        rc_14: '',
        rc_15: '400',
        rc_16: '',
        rc_17: '',
        rc_18: '',
        rc_19: '',
        rc_20: '',
        rc_21: '',
        rc_22: '',
        rc_23: '',
        rc_24: '',
        rc_25: '',
        rc_26: '',
        rc_27: '',
        rc_28: '',
        rc_29: '',
        rc_30: '',
        rc_31: '',
        rc_32: '',
        rc_33: '',
        rc_34: '',
        rc_35: '',

        rc_50: '',
        rc_51: '',
        rc_52: '',
        rc_53: '',
        yj_1: '',
        yj_2: '',
      },

      rules: {
        rc_1: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        sdateTime: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_3: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_4: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_5: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_6: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_7: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_8: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_9: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_10: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_11: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_12: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_13: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_14: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_15: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_16: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_17: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_18: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_19: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_20: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_21: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_22: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_23: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_24: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_25: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_26: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_27: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_28: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_29: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_30: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_31: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_32: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_33: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_34: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_35: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],

        rc_50: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_51: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_52: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        rc_53: [
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
      this.ruleForm.sdateTime = val
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
    checkKeydown(key, bl) {
      this.ruleForm[key] = changeNumber2(this.ruleForm[key], bl)
    },
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
      this.ruleForm['sdateTime'] = currentDate
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
