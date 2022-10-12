<template>
  <div>
    <el-form id="ASEmergency" :model="ruleForm" ref="Form">
      <!-- <div style="float:left;margin:5px 40px; " >
            <el-row>
                <el-col :span="11">
                  <el-form-item label="巡检开始时间：" prop="yj_1">
                    <el-date-picker v-model="ruleForm.yj_1" type="datetime" value-format="yyyy-MM-dd HH:mm:ss"  placeholder="选择时间" :clearable=false></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="2">
                    &nbsp; &nbsp; &nbsp;
                </el-col>
                <el-col :span="11">
                    <el-form-item label="巡检结束时间：" prop="yj_2">
                      <el-date-picker v-model="ruleForm.yj_2" type="datetime" value-format="yyyy-MM-dd HH:mm:ss"  placeholder="选择时间" :clearable=false></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
          </div> -->

      <table id="IMRFAQMStb">
        <tbody>
          <tr>
            <td colspan="1">巡检开始时间：</td>
            <td colspan="2">
              <el-form-item label="" prop="yj_1">
                <el-date-picker
                  v-model:value="ruleForm.yj_1"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="选择时间"
                  :clearable="false"
                ></el-date-picker>
              </el-form-item>
            </td>

            <td colspan="1">巡检结束时间：</td>
            <td colspan="2">
              <el-form-item label="" prop="yj_2">
                <el-date-picker
                  v-model:value="ruleForm.yj_2"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="选择时间"
                  :clearable="false"
                ></el-date-picker>
              </el-form-item>
            </td>
          </tr>
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
