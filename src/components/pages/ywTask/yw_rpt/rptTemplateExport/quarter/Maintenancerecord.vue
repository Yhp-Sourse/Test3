<template>
    <el-form id="ASEmergency" :model="ruleForm"  ref="Form"  >
        <div style="float:left;margin:5px 40px; " >
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
        </div>
      <table class="rpt">
        <tbody>
          <tr>
            <td>臭氧校准设备（工作标准）型号及编号</td>
            <td colspan="2">
              <el-form-item label="" prop="XZXZDeviceCode">
            <input v-model="ruleForm.XZXZDeviceCode"  type="text" id="XZXZDeviceCode" style="height: 30px" />
        </el-form-item>
            </td>
            <td>传递日期</td>
            <td colspan="2">
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
                ><el-form-item label="" prop="SDateTime">
            <el-date-picker v-model="ruleForm.SDateTime" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item><span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
                ></span>
            </td>
          </tr>
          <tr>
            <td>臭氧传递标准型号及编号</td>
            <td colspan="2">
              <el-form-item label="" prop="CDBZDeviceCode">
            <input v-model="ruleForm.CDBZDeviceCode"  type="text" id="CDBZDeviceCode" style="height: 30px" />
        </el-form-item>
            </td>
            <td>传递标准溯源日期</td>
            <td colspan="2">
             <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
                ><el-form-item label="" prop="CDBZSDateTime">
            <input v-model="ruleForm.CDBZSDateTime" 
                  type="text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px" />
        </el-form-item><span
                  ><span
                    class="combo-arrow height30"
                    style="height: 20px"
                  ></span></span
                ></span>
            </td>
          </tr>
          <tr>
            <td>传递用臭氧监测仪型号及编号</td>
            <td colspan="5">
              <el-form-item label="" prop="CDDeviceCode">
            <input v-model="ruleForm.CDDeviceCode"  type="text" id="CDDeviceCode" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>校准点</td>
            <td>传递标准输出浓度<br />（nmol/mol）</td>
            <td>传递用监测仪示值<br />（nmol/mol）</td>
            <td>工作标准输出浓度<br />（nmol/mol）</td>
            <td>传递用监测仪示值<br />（nmol/mol）</td>
            <td>传递用监测仪示值对应的标准值<br />（nmol/mol）</td>
          </tr>
          <tr>
            <td>零点</td>
            <td><el-form-item label="" prop="id_1">
            <input v-model="ruleForm.id_1"  type="text" id="id_1" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_2">
           <input v-model="ruleForm.id_2"  type="text" id="id_2" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_3">
            <input v-model="ruleForm.id_3"  type="text" id="id_3" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_4">
           <input v-model="ruleForm.id_4"  type="text" id="id_4" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_5">
            <input v-model="ruleForm.id_5"  type="text" id="id_5" style="height: 30px" />
        </el-form-item></td>
          </tr>
          <tr>
            <td>满量程的10％</td>
            <td><el-form-item label="" prop="id_6">
            <input v-model="ruleForm.id_6"  type="text" id="id_6" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_7">
            <input v-model="ruleForm.id_7"  type="text" id="id_7" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_8">
            <input v-model="ruleForm.id_8"  type="text" id="id_8" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_9">
            <input v-model="ruleForm.id_9"  type="text" id="id_9" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_10">
            <input v-model="ruleForm.id_10"  type="text" id="id_10" style="height: 30px" />
        </el-form-item></td>
          </tr>
          <tr>
            <td>满量程的20％</td>
            <td><el-form-item label="" prop="id_11">
            <input v-model="ruleForm.id_11"  type="text" id="id_11" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_12">
            <input v-model="ruleForm.id_12"  type="text" id="id_12" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_13">
            <input v-model="ruleForm.id_13"  type="text" id="id_13" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_14">
            <input v-model="ruleForm.id_14"  type="text" id="id_14" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_15">
            <input v-model="ruleForm.id_15"  type="text" id="id_15" style="height: 30px" />
        </el-form-item></td>
          </tr>
          <tr>
            <td>满量程的40％</td>
            <td><el-form-item label="" prop="id_16">
            <input v-model="ruleForm.id_16"  type="text" id="id_16" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_17">
            <input v-model="ruleForm.id_17"  type="text" id="id_17" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_18">
            <input v-model="ruleForm.id_18"  type="text" id="id_18" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_19">
            <input v-model="ruleForm.id_19"  type="text" id="id_19" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_20">
            <input v-model="ruleForm.id_20"  type="text" id="id_20" style="height: 30px" />
        </el-form-item></td>
          </tr>
          <tr>
            <td>满量程的60％</td>
            <td><el-form-item label="" prop="id_21">
            <input v-model="ruleForm.id_21"  type="text" id="id_21" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_22">
            <input v-model="ruleForm.id_22"  type="text" id="id_22" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_23">
            <input v-model="ruleForm.id_23"  type="text" id="id_23" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_24">
            <input v-model="ruleForm.id_24"  type="text" id="id_24" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_25">
            <input v-model="ruleForm.id_25"  type="text" id="id_25" style="height: 30px" />
        </el-form-item></td>
          </tr>
          <tr>
            <td>满量程的80％</td>
            <td><el-form-item label="" prop="id_26">
            <input v-model="ruleForm.id_26"  type="text" id="id_26" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_27">
            <input v-model="ruleForm.id_27"  type="text" id="id_27" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_28">
            <input v-model="ruleForm.id_28"  type="text" id="id_28" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_29">
            <input v-model="ruleForm.id_29"  type="text" id="id_29" style="height: 30px" />
        </el-form-item></td>
            <td><el-form-item label="" prop="id_30">
            <input v-model="ruleForm.id_30"  type="text" id="id_30" style="height: 30px" />
        </el-form-item></td>
          </tr>
          <tr>
            <td>校准曲线</td>
            <td colspan="5">
              Y=ax+b a=<el-form-item label="" prop="QXA">
            <input v-model="ruleForm.QXA" 
                type="text"
                id="QXA"
                style="width: 10%; height: 30px"
              />
        </el-form-item>
              b=<el-form-item label="" prop="QXB">
            <input v-model="ruleForm.QXB" 
                type="text"
                id="QXB"
                style="width: 10%; height: 30px"
              />
        </el-form-item>
              r=<el-form-item label="" prop="QXR">
            <input v-model="ruleForm.QXR" 
                type="text"
                id="QXR"
                style="width: 10%; height: 30px"
              />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>备注：</td>
            <td colspan="5">
              注1：对所获校准曲线的检验指标应符合以下要求：相关系数<br />（r）&gt;0.999；0.97≤斜率（a）≤1.03；截距（b）≤满量程±1%；
            </td>
          </tr>
        </tbody>
      </table>
    </el-form>
</template>
<script>
export default {
    props:{
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