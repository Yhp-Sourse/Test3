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

      <table id="IMRFAQMStb">
        <tbody>
          <tr>
            <td style="text-align: center">序号</td>
            <td colspan="4" style="text-align: center">项目</td>
            <td style="text-align: center">维护情况</td>
          </tr>
          <tr>
            <td style="text-align: center">1</td>
            <td colspan="4">校准各监测仪器时钟和数采仪一致，误差在30S内；</td>
            <td>
              <el-form-item label="" prop="Pro_1">
                <textarea v-model="ruleForm.Pro_1" id="Pro_1"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">2</td>
            <td colspan="4">清洗PM10/PM2.5切割器和采样管</td>
            <td>
              <el-form-item label="" prop="Pro_2">
                <textarea v-model="ruleForm.Pro_2" id="Pro_2"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">3</td>
            <td colspan="4">
              检查、清洁颗粒物分析仪仪器喷嘴、压环、振荡原件腔室等部件是否干净
            </td>
            <td>
              <el-form-item label="" prop="Pro_3">
                <textarea v-model="ruleForm.Pro_3" id="Pro_3"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">4</td>
            <td colspan="4">
              检查震荡天平法PM10/PM2.5辅助滤芯使用时间是否超出2个月*
            </td>
            <td>
              <el-form-item label="" prop="Pro_4">
                <textarea v-model="ruleForm.Pro_4" id="Pro_4"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">5</td>
            <td colspan="4">
              检查震荡天平法PM10/PM2.5零气过滤芯使用时间是否超出2个月*
            </td>
            <td>
              <el-form-item label="" prop="Pro_5">
                <textarea v-model="ruleForm.Pro_5" id="Pro_5"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">6</td>
            <td colspan="4">检查计算机、仪器、空调散热防尘网是否清洁</td>
            <td>
              <el-form-item label="" prop="Pro_6">
                <textarea v-model="ruleForm.Pro_6" id="Pro_6"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">7</td>
            <td colspan="4">检查消防器材是否在使用有效期内</td>
            <td>
              <el-form-item label="" prop="Pro_7">
                <textarea v-model="ruleForm.Pro_7" id="Pro_7"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">8</td>
            <td colspan="4">检查SO2、NO、CO标气是否在有效期内</td>
            <td>
              <el-form-item label="" prop="Pro_8">
                <textarea v-model="ruleForm.Pro_8" id="Pro_8"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">9</td>
            <td colspan="4">检查城市摄影系统是否正常</td>
            <td>
              <el-form-item label="" prop="Pro_9">
                <textarea v-model="ruleForm.Pro_9" id="Pro_9"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">10</td>
            <td colspan="4">检查站房室内外安保系统是否正常</td>
            <td>
              <el-form-item label="" prop="Pro_10">
                <textarea v-model="ruleForm.Pro_10" id="Pro_10"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">11</td>
            <td colspan="4">检查能见度系统是否正常并定期清理护罩等</td>
            <td>
              <el-form-item label="" prop="Pro_11">
                <textarea v-model="ruleForm.Pro_11" id="Pro_11"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">12</td>
            <td colspan="4">检查仪器显示数据和数据采集仪之间的一致性</td>
            <td>
              <el-form-item label="" prop="Pro_12">
                <textarea v-model="ruleForm.Pro_12" id="Pro_12"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">13</td>
            <td colspan="4">对城市站数据、省站平台数据数据进行检查、备份</td>
            <td>
              <el-form-item label="" prop="Pro_13">
                <textarea v-model="ruleForm.Pro_13" id="Pro_13"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">14</td>
            <td colspan="4">
              对城市站驱动管理中间件、子站数据传输中间件、省站数据交换中间件进行月检，保证后台程序的稳定
            </td>
            <td>
              <el-form-item label="" prop="Pro_14">
                <textarea v-model="ruleForm.Pro_14" id="Pro_14"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">15</td>
            <td colspan="4">站房内外清洁情况</td>
            <td>
              <el-form-item label="" prop="Pro_15">
                <textarea v-model="ruleForm.Pro_15" id="Pro_15"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">16</td>
            <td colspan="4">检查气态采样总管及支管是否干净，及时清洗</td>
            <td>
              <el-form-item label="" prop="Pro_16">
                <textarea v-model="ruleForm.Pro_16" id="Pro_16"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">17</td>
            <td colspan="4">检查颗粒物PM10/2.5标准膜测试是否合格</td>
            <td>
              <el-form-item label="" prop="Pro_17">
                <textarea v-model="ruleForm.Pro_17" id="Pro_17"></textarea>
              </el-form-item>
            </td>
          </tr>

          <tr>
            <td style="text-align: center">其他情况</td>
            <td colspan="5" style="width: 30px">
              <el-form-item label="" prop="Pro_18">
                <textarea v-model="ruleForm.Pro_18" id="Pro_18"></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td colspan="6">备注：“*”项目各地根据实际情况决定是否需要。</td>
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
        Pro_1: '',
        Pro_2: '',
        Pro_3: '',
        Pro_4: '',
        Pro_5: '',
        Pro_6: '',
        Pro_7: '',
        Pro_8: '',
        Pro_9: '',
        Pro_10: '',
        Pro_11: '',
        Pro_12: '',
        Pro_13: '',
        Pro_14: '',
        Pro_15: '',
        Pro_16: '',
        Pro_17: '',
        Pro_18: '',
        yj_1: '',
        yj_2: '',
      },

      rules: {
        Pro_1: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_2: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_3: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_4: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_5: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_6: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_7: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_8: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_9: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_10: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_11: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_12: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_13: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_14: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_15: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_16: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_17: [
          { required: true, message: '必填项，没有的填写“/”', trigger: 'blur' },
        ],
        Pro_18: [
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
