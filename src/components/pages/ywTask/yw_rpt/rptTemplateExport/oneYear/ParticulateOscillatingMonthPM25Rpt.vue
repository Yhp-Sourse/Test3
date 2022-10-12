<template>
    <div>
        <el-form id="ASEmergency" :model="ruleForm"  ref="Form"  >
        
        <div style="float:left;margin:15px 45px; " >
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

        <table id="topTable" style="border-bottom: none">
            <tbody><tr>
                <td>检修分析仪名称、型号/编号</td>
                <td colspan="3"><el-form-item label="" prop="E_rc_1">
            <input v-model="ruleForm.E_rc_1"  type="text" id="E_DeviceName" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>现象描述</td>
                <td colspan="3"><el-form-item label="" prop="E_rc_2">
            <input v-model="ruleForm.E_rc_2"  type="text" id="E_DeviceDes" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>检修和维护内容</td>
                <td colspan="3"><el-form-item label="" prop="E_rc_3">
            <input v-model="ruleForm.E_rc_3"  type="text" id="E_DeviceCheckContent" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>更换零件、备件和 耗材名称</td>
                <td colspan="3"><el-form-item label="" prop="E_rc_4">
            <input v-model="ruleForm.E_rc_4"  type="text" id="E_DeviceNames" style="height: 30px;">
        </el-form-item></td>
            </tr>
        </tbody></table>

        <table id="middleTable">
            <tbody><tr>
                <td rowspan="2">校准点（%）</td>
                <td rowspan="2">开始时间</td>
                <td rowspan="2">结束时间</td>
                <td rowspan="2">标准值</td>
                <td colspan="3">仪器响应浓度</td>
            </tr>
            <tr>
                <td>响应值</td>
                <td>备用记录1</td>
                <td>备用记录2</td>
            </tr>
            <tr>
                <td>零点</td>
                <td><el-form-item label="" prop="E_rc_5">
            <el-time-picker v-model="ruleForm.E_rc_5"  format="HH:mm" value-format="HH:mm" placeholder="选择时间"></el-time-picker>
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_6">
            <el-time-picker v-model="ruleForm.E_rc_6"  format="HH:mm" value-format="HH:mm" placeholder="选择时间"></el-time-picker>
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_7">
            <input v-model="ruleForm.E_rc_7"  type="text" id="E_AnC1" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_8">
            <input v-model="ruleForm.E_rc_8"  type="text" id="E_AnC2" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_9">
            <input v-model="ruleForm.E_rc_9"  type="text" id="E_AnC3" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_10">
            <input v-model="ruleForm.E_rc_10"  type="text" id="E_AnC4" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>满量程的 10%</td>
                <td><el-form-item label="" prop="E_rc_11">
            <el-time-picker v-model="ruleForm.E_rc_11"  format="HH:mm" value-format="HH:mm" placeholder="选择时间"></el-time-picker>
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_12">
            <el-time-picker v-model="ruleForm.E_rc_12"  format="HH:mm" value-format="HH:mm" placeholder="选择时间"></el-time-picker>
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_13">
            <input v-model="ruleForm.E_rc_13"  type="text" id="E_AnC5" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_14">
            <input v-model="ruleForm.E_rc_14"  type="text" id="E_AnC6" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_15">
            <input v-model="ruleForm.E_rc_15"  type="text" id="E_AnC7" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_16">
            <input v-model="ruleForm.E_rc_16"  type="text" id="E_AnC8" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>满量程的 20%</td>
                <td><el-form-item label="" prop="E_rc_17">
            <el-time-picker v-model="ruleForm.E_rc_17"  format="HH:mm" value-format="HH:mm" placeholder="选择时间"></el-time-picker>
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_18">
            <el-time-picker v-model="ruleForm.E_rc_18"  format="HH:mm" value-format="HH:mm" placeholder="选择时间"></el-time-picker>
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_19">
            <input v-model="ruleForm.E_rc_19"  type="text" id="E_AnC9" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_20">
            <input v-model="ruleForm.E_rc_20"  type="text" id="E_AnC10" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_21">
            <input v-model="ruleForm.E_rc_21"  type="text" id="E_AnC11" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_22">
            <input v-model="ruleForm.E_rc_22"  type="text" id="E_AnC12" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>满量程的 40%</td>
                <td><el-form-item label="" prop="E_rc_23">
            <el-time-picker v-model="ruleForm.E_rc_23"  format="HH:mm" value-format="HH:mm" placeholder="选择时间"></el-time-picker>
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_24">
            <el-time-picker v-model="ruleForm.E_rc_24"  format="HH:mm" value-format="HH:mm" placeholder="选择时间"></el-time-picker>
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_25">
            <input v-model="ruleForm.E_rc_25"  type="text" id="E_AnC13" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_26">
            <input v-model="ruleForm.E_rc_26"  type="text" id="E_AnC14" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_27">
            <input v-model="ruleForm.E_rc_27"  type="text" id="E_AnC15" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_28">
            <input v-model="ruleForm.E_rc_28"  type="text" id="E_AnC16" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>满量程的 60%</td>
                <td><el-form-item label="" prop="E_rc_29">
            <el-time-picker v-model="ruleForm.E_rc_29"  format="HH:mm" value-format="HH:mm" placeholder="选择时间"></el-time-picker>
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_30">
            <el-time-picker v-model="ruleForm.E_rc_30"  format="HH:mm" value-format="HH:mm" placeholder="选择时间"></el-time-picker>
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_31">
            <input v-model="ruleForm.E_rc_31"  type="text" id="E_AnC17" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_32">
            <input v-model="ruleForm.E_rc_32"  type="text" id="E_AnC18" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_33">
            <input v-model="ruleForm.E_rc_33"  type="text" id="E_AnC19" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_34">
            <input v-model="ruleForm.E_rc_34"  type="text" id="E_AnC20" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>满量程的 80%</td>
                <td><el-form-item label="" prop="E_rc_35">
            <el-time-picker v-model="ruleForm.E_rc_35" format="HH:mm" value-format="HH:mm" placeholder="选择时间"></el-time-picker>
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_36">
            <el-time-picker v-model="ruleForm.E_rc_36" format="HH:mm" value-format="HH:mm" placeholder="选择时间"></el-time-picker>
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_37">
            <input v-model="ruleForm.E_rc_37"  type="text" id="E_AnC21" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_38">
            <input v-model="ruleForm.E_rc_38"  type="text" id="E_AnC22" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_39">
            <input v-model="ruleForm.E_rc_39"  type="text" id="E_AnC23" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="E_rc_40">
            <input v-model="ruleForm.E_rc_40"  type="text" id="E_AnC24" style="height: 30px;">
        </el-form-item></td>
            </tr>
        </tbody></table>
        <table id="bottomTable">
            <tbody><tr>
                <td>多点线性校准结果</td>
                <td>斜率a：<el-form-item label="" prop="E_rc_41">
            <input v-model="ruleForm.E_rc_41"  type="text" id="E_Slope" style="height: 30px;width:60%;">
        </el-form-item></td>
                <td>截距b：<el-form-item label="" prop="E_rc_42">
            <input v-model="ruleForm.E_rc_42"  type="text" id="E_Intercept" style="height: 30px;;width:60%;">
        </el-form-item></td>
                <td>相关系数r：<el-form-item label="" prop="E_rc_43">
            <input v-model="ruleForm.E_rc_43"  type="text" id="E_Coefficient" style="height: 30px;;width:60%;">
        </el-form-item></td>
            </tr>
            <tr>

                <td colspan="4" style="text-align: left;">
                    注 1：对所获校准曲线的检验指标应符合以下要求：相关系数（r）&gt;0.999；0.95≤斜率（a）≤1.05；截距（b）≤满量程±1%；<br/>
                    注 2：若其中任何一项不满足指标要求，则需对监测分析仪器重新进行调整后，再次进行多点校 准，直至取得满意的结果。
                </td>
            </tr>
        </tbody></table>


    </el-form>
    </div>
</template>
<script>
export default {
    props:{
        ruleForm: Object,
    },
}
</script>
<style scoped>
    #main, table {
        width: 95%;
        margin: 10px auto;
        border-left: 1px solid #AAAAAA;
        border-bottom: 1px solid #AAAAAA;
    }

    #main {
        border: none;
    }

    td {
        border-top: 1px solid #AAAAAA;
        border-right: 1px solid #AAAAAA;
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