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
        巡检时间：
        <el-date-picker
          v-model:value="ruleForm.yj_1"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择时间"
          :clearable="false"
        ></el-date-picker>
        &nbsp; &nbsp; &nbsp;
        <!-- 巡检结束时间：
              <el-date-picker v-model="ruleForm.yj_2" type="date" value-format="yyyy-MM-dd" placeholder="选择时间" :clearable=false></el-date-picker> -->
      </div>

      <table class="rpt">
        <tbody>
          <tr>
            <td colspan="5">颗粒物监测仪资料</td>
          </tr>
          <tr>
            <td rowspan="2">仪器型号</td>
            <td rowspan="2">出厂编号</td>
            <td rowspan="2">监测项目</td>
            <td colspan="2">校准日期</td>
          </tr>
          <tr>
            <td>上一次</td>
            <td>下一次</td>
          </tr>
          <tr>
            <td>
              <el-form-item label="" prop="Tp1">
                <input
                  v-model="ruleForm.Tp1"
                  type="text"
                  id="Tp1"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Tp2">
                <input
                  v-model="ruleForm.Tp2"
                  type="text"
                  id="Tp2"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <label id="param">PM<sub>2.5</sub></label>
            </td>
            <td>
              <el-form-item label="" prop="Dt1">
                <el-date-picker
                  v-model:value="ruleForm.Dt1"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Dt2">
                <el-date-picker
                  v-model:value="ruleForm.Dt2"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="rpt">
        <tbody>
          <tr>
            <td colspan="12">环境温度传感器资料 单位：℃</td>
          </tr>
          <tr>
            <td colspan="2">传感器编号</td>
            <td colspan="2">
              <el-form-item label="" prop="Tp3">
                <input
                  v-model="ruleForm.Tp3"
                  type="text"
                  id="Tp3"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td colspan="2">上次校准日期</td>
            <td colspan="2">
              <el-form-item label="" prop="Dt3">
                <el-date-picker
                  v-model:value="ruleForm.Dt3"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td colspan="2">下次校准日期</td>
            <td colspan="2">
              <el-form-item label="" prop="Dt4">
                <el-date-picker
                  v-model:value="ruleForm.Dt4"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="12">参考温度计资料</td>
          </tr>
          <tr>
            <td colspan="2">设备型号</td>
            <td colspan="4">
              <el-form-item label="" prop="Tp4">
                <input
                  v-model="ruleForm.Tp4"
                  type="text"
                  id="Tp4"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td colspan="2">出厂编号</td>
            <td colspan="4">
              <el-form-item label="" prop="Tp5">
                <input
                  v-model="ruleForm.Tp5"
                  type="text"
                  id="Tp5"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="2">测量范围</td>
            <td colspan="4">
              <el-form-item label="" prop="Tp6">
                <input
                  v-model="ruleForm.Tp6"
                  type="text"
                  id="Tp6"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td colspan="2">示值修正量</td>
            <td colspan="4">
              <el-form-item label="" prop="Tp7">
                <input
                  v-model="ruleForm.Tp7"
                  type="text"
                  id="Tp7"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="2">上次校准日期</td>
            <td colspan="4">
              <el-form-item label="" prop="Dt5">
                <el-date-picker
                  v-model:value="ruleForm.Dt5"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td colspan="2">下次校准日期</td>
            <td colspan="4">
              <el-form-item label="" prop="Dt6">
                <el-date-picker
                  v-model:value="ruleForm.Dt6"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="12">温度校准结果</td>
          </tr>
          <tr>
            <td colspan="6">参考温度计的读数</td>
            <td colspan="6">传感器的读数</td>
          </tr>
          <tr>
            <td colspan="3">直接读取的标准读数</td>
            <td colspan="3">已修正的标准值*</td>
            <td colspan="3">校准前</td>
            <td colspan="3">校准后</td>
          </tr>
          <tr>
            <td colspan="3">
              <el-form-item label="" prop="Tp8">
                <input
                  v-model="ruleForm.Tp8"
                  type="text"
                  id="Tp8"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td colspan="3">
              <el-form-item label="" prop="Tp9">
                <input
                  v-model="ruleForm.Tp9"
                  type="text"
                  id="Tp9"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td colspan="3">
              <el-form-item label="" prop="Tp10">
                <input
                  v-model="ruleForm.Tp10"
                  type="text"
                  id="Tp10"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td colspan="3">
              <el-form-item label="" prop="Tp11">
                <input
                  v-model="ruleForm.Tp11"
                  type="text"
                  id="Tp11"
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
            <td colspan="12">环境压力传感器资料 单位：mmHg</td>
          </tr>
          <tr>
            <td colspan="2">传感器编号</td>
            <td colspan="2">
              <el-form-item label="" prop="Tp12">
                <input
                  v-model="ruleForm.Tp12"
                  type="text"
                  id="Tp12"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td colspan="2">上次校准日期</td>
            <td colspan="2">
              <el-form-item label="" prop="Dt7">
                <el-date-picker
                  v-model:value="ruleForm.Dt7"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td colspan="2">下次校准日期</td>
            <td colspan="2">
              <el-form-item label="" prop="Dt8">
                <el-date-picker
                  v-model:value="ruleForm.Dt8"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="12">参考气压计资料</td>
          </tr>
          <tr>
            <td colspan="2">设备型号</td>
            <td colspan="4">
              <el-form-item label="" prop="Tp13">
                <input
                  v-model="ruleForm.Tp13"
                  type="text"
                  id="Tp13"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td colspan="6">校准方程（Y—真实值，X—显示值）</td>
          </tr>
          <tr>
            <td colspan="2">出厂编号</td>
            <td colspan="4">
              <el-form-item label="" prop="Tp14">
                <input
                  v-model="ruleForm.Tp14"
                  type="text"
                  id="Tp14"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td colspan="2">斜率</td>
            <td colspan="2">截距</td>
            <td colspan="2">相关系数</td>
          </tr>
          <tr>
            <td colspan="2">上次校准日期</td>
            <td colspan="4">
              <el-form-item label="" prop="Dt9">
                <el-date-picker
                  v-model:value="ruleForm.Dt9"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="Tp15">
                <input
                  v-model="ruleForm.Tp15"
                  type="text"
                  id="Tp15"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="Tp16">
                <input
                  v-model="ruleForm.Tp16"
                  type="text"
                  id="Tp16"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td colspan="2">
              <el-form-item label="" prop="Tp17">
                <input
                  v-model="ruleForm.Tp17"
                  type="text"
                  id="Tp17"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="2">下次校准日期</td>
            <td colspan="4">
              <el-form-item label="" prop="Dt10">
                <el-date-picker
                  v-model:value="ruleForm.Dt10"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td colspan="6"></td>
          </tr>
          <tr>
            <td colspan="12">压力校准结果</td>
          </tr>
          <tr>
            <td colspan="6">参考气压计的读数</td>
            <td colspan="6">传感器的读数</td>
          </tr>
          <tr>
            <td colspan="3">直接读取的标准读数</td>
            <td colspan="3">已修正的标准值*</td>
            <td colspan="3">校准前</td>
            <td colspan="3">校准后</td>
          </tr>
          <tr>
            <td colspan="3">
              <el-form-item label="" prop="Tp18">
                <input
                  v-model="ruleForm.Tp18"
                  type="text"
                  id="Tp18"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td colspan="3">
              <el-form-item label="" prop="Tp19">
                <input
                  v-model="ruleForm.Tp19"
                  type="text"
                  id="Tp19"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td colspan="3">
              <el-form-item label="" prop="Tp20">
                <input
                  v-model="ruleForm.Tp20"
                  type="text"
                  id="Tp20"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td colspan="3">
              <el-form-item label="" prop="Tp21">
                <input
                  v-model="ruleForm.Tp21"
                  type="text"
                  id="Tp21"
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
            <td colspan="5">KO值检查</td>
          </tr>
          <tr>
            <td>正常范围</td>
            <td>仪器K0值</td>
            <td>检查值</td>
            <td>误差</td>
            <td>异常时处理记录</td>
          </tr>
          <tr>
            <td>≤±2.5%</td>
            <td>
              <el-form-item label="" prop="Tp22">
                <input
                  v-model="ruleForm.Tp22"
                  type="text"
                  id="Tp22"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Tp23">
                <input
                  v-model="ruleForm.Tp23"
                  type="text"
                  id="Tp23"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Tp24">
                <input
                  v-model="ruleForm.Tp24"
                  type="text"
                  id="Tp24"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Tp25">
                <input
                  v-model="ruleForm.Tp25"
                  type="text"
                  id="Tp25"
                  style="height: 30px"
                />
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="5" style="text-align: left">
              注:*
              对于参考温度计的读数，已修正的标准值=直接读取的标准读数+示值修正量；<br />
              对于参考气压计的读数，已修正的标准值=直接读取的标准读数X斜率+截距。
            </td>
          </tr>
          <tr>
            <td colspan="5">
              备注:<el-form-item label="" prop="Remark">
                <textarea
                  v-model="ruleForm.Remark"
                  style="width: 90%"
                  id="Remark"
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
        Calibrationer: '',
        SDateTime: '',
        StatrTime: '',
        EDateTime: '',
        Tp1: '',
        Tp2: '',
        Dt1: '',
        Dt2: '',
        Tp3: '',
        Dt3: '',
        Dt4: '',
        Tp4: '',
        Tp5: '',
        Tp6: '',
        Tp7: '',
        Dt5: '',
        Dt5: '',
        Tp8: '',
        Tp9: '',
        Tp10: '',
        Tp11: '',
        Tp12: '',
        Dt7: '',
        Dt8: '',
        Tp13: '',
        Tp14: '',
        Dt9: '',
        Tp15: '',
        Tp16: '',
        Tp17: '',
        Dt10: '',
        Tp18: '',
        Tp19: '',
        Tp20: '',
        Tp21: '',
        Tp22: '',
        Tp23: '',
        Tp24: '',
        Tp25: '',
        yj_1: '',
        yj_2: '',
        Remark: '',
      },
      rules: {
        yj_1: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        yj_2: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Calibrationer: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        SDateTime: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        StatrTime: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        EDateTime: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp1: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp2: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Dt1: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Dt2: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp3: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Dt3: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Dt4: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp4: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp5: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp6: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp7: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Dt5: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Dt5: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp8: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp9: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp10: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp11: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp12: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Dt7: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Dt8: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp13: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp14: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Dt9: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp15: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp16: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp17: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Dt10: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp18: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp19: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp20: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp21: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp22: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp23: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp24: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Tp25: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Remark: [
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
