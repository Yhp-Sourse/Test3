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
                <td>仪器型号</td>
                <td><el-form-item label="" prop="DeviceName">
            <input v-model="ruleForm.DeviceName"  type="text" id="DeviceName" style="height: 30px;">
        </el-form-item></td>
                <td>校准日期</td>
                <td><el-form-item label="" prop="SDateTime">
            <el-date-picker v-model="ruleForm.SDateTime" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            </tr>
            <tr>
                <td>仪器编号</td>
                <td><el-form-item label="" prop="DeviceNo">
            <input v-model="ruleForm.DeviceNo"  type="text" id="DeviceNo" style="height: 30px;">
        </el-form-item></td>

                <td id="tduse">使用量程（ppb）</td>
                <td><el-form-item label="" prop="UseRange">
            <input v-model="ruleForm.UseRange"  type="text" id="UseRange" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td id="td1">传递标准型号及编号</td>
                <td><el-form-item label="" prop="AirbottleNovalidity">
            <input v-model="ruleForm.AirbottleNovalidity"  type="text" id="AirbottleNovalidity" style="height: 30px;">
        </el-form-item></td>
                <td id="td2">溯源日期</td>
                <td><el-form-item label="" prop="AirConcentration">
            <input v-model="ruleForm.AirConcentration"  type="text" id="AirConcentration" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>校准器型号/编号</td>
                <td><el-form-item label="" prop="CorretModelNo">
            <input v-model="ruleForm.CorretModelNo"  type="text" id="CorretModelNo" style="height: 30px;">
        </el-form-item></td>
                <td>零气源型号/编号</td>
                <td><el-form-item label="" prop="LqyModelNo">
            <input v-model="ruleForm.LqyModelNo"  type="text" id="LqyModelNo" style="height: 30px;">
        </el-form-item></td>
            </tr>
        </tbody></table>

        <table id="middleTable" style="border-bottom: none">
            <tbody><tr>
                <td rowspan="2">校准点（%）</td>
                <td rowspan="2">开始时间</td>
                <td rowspan="2">结束时间</td>
                <td rowspan="2">标准值(ppb)</td>
                <td colspan="3">仪器响应浓度(ppb)</td>
            </tr>
            <tr>
                <td>响应值</td>
                <td>备用记录1</td>
                <td>备用记录2</td>
            </tr>
            <tr>
                <td>零点</td>
                <td>
                    <el-form-item label="" prop="StartTime1">
            <el-time-picker v-model="ruleForm.StartTime1" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="StartTime1"></el-time-picker>
        </el-form-item> 
                </td>
                <td>
                    <el-form-item label="" prop="EndTime1">
            <el-time-picker v-model="ruleForm.EndTime1" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="EndTime1"></el-time-picker> 
        </el-form-item>
                </td>
                <td><el-form-item label="" prop="AnC1">
            <input v-model="ruleForm.AnC1"  type="text" id="AnC1" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC2">
            <input v-model="ruleForm.AnC2"  type="text" id="AnC2" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC3">
            <input v-model="ruleForm.AnC3"  type="text" id="AnC3" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC4">
            <input v-model="ruleForm.AnC4"  type="text" id="AnC4" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>满量程的 10%</td>
                <td>
                    <el-form-item label="" prop="StartTime2">
            <el-time-picker v-model="ruleForm.StartTime2" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="StartTime2"></el-time-picker>
        </el-form-item>
                    </td>
                <td>
                    <el-form-item label="" prop="EndTime2">
            <el-time-picker v-model="ruleForm.EndTime2" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="EndTime2"></el-time-picker>
        </el-form-item>
                    </td>
                <td><el-form-item label="" prop="AnC5">
            <input v-model="ruleForm.AnC5"  type="text" id="AnC5" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC6">
            <input v-model="ruleForm.AnC6"  type="text" id="AnC6" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC7">
            <input v-model="ruleForm.AnC7"  type="text" id="AnC7" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC8">
            <input v-model="ruleForm.AnC8"  type="text" id="AnC8" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>满量程的 20%</td>
                <td>
                    <el-form-item label="" prop="StartTime3">
             <el-time-picker v-model="ruleForm.StartTime3" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="StartTime3"></el-time-picker> 
        </el-form-item>
                </td>
                <td>
                    <el-form-item label="" prop="EndTime3">
            <el-time-picker v-model="ruleForm.EndTime3" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="EndTime3"></el-time-picker>
        </el-form-item>
                </td>
                <td><el-form-item label="" prop="AnC9">
            <input v-model="ruleForm.AnC9"  type="text" id="AnC9" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC10">
            <input v-model="ruleForm.AnC10"  type="text" id="AnC10" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC11">
            <input v-model="ruleForm.AnC11"  type="text" id="AnC11" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC12">
            <input v-model="ruleForm.AnC12"  type="text" id="AnC12" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>满量程的 40%</td>
                <td>
                    <el-form-item label="" prop="StartTime4">
            <el-time-picker v-model="ruleForm.StartTime4" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="StartTime4"></el-time-picker> 
        </el-form-item>
                    </td>
                <td>
                     <el-form-item label="" prop="EndTime4">
            <el-time-picker v-model="ruleForm.EndTime4" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="EndTime4"></el-time-picker>
        </el-form-item>
                    </td>
                <td><el-form-item label="" prop="AnC13">
            <input v-model="ruleForm.AnC13"  type="text" id="AnC13" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC14">
            <input v-model="ruleForm.AnC14"  type="text" id="AnC14" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC15">
            <input v-model="ruleForm.AnC15"  type="text" id="AnC15" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC16">
            <input v-model="ruleForm.AnC16"  type="text" id="AnC16" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>满量程的 60%</td>
                <td>
                    <el-form-item label="" prop="StartTime5">
            <el-time-picker v-model="ruleForm.StartTime5" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="StartTime5"></el-time-picker>
        </el-form-item>
                    </td>
                <td>
                    <el-form-item label="" prop="EndTime5">
            <el-time-picker v-model="ruleForm.EndTime5" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="EndTime5"></el-time-picker>
        </el-form-item> 
                    </td>
                <td><el-form-item label="" prop="AnC17">
            <input v-model="ruleForm.AnC17"  type="text" id="AnC17" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC18">
            <input v-model="ruleForm.AnC18"  type="text" id="AnC18" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC19">
            <input v-model="ruleForm.AnC19"  type="text" id="AnC19" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC20">
            <input v-model="ruleForm.AnC20"  type="text" id="AnC20" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>满量程的 80%</td>
                <td>
                    <el-form-item label="" prop="StartTime6">
            <el-time-picker v-model="ruleForm.StartTime6" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="StartTime6"></el-time-picker> 
        </el-form-item> 
                    </td>
                <td>
                    <el-form-item label="" prop="EndTime6">
             <el-time-picker v-model="ruleForm.EndTime6" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="EndTime6"></el-time-picker> 
        </el-form-item>
                    </td>
                <td><el-form-item label="" prop="AnC21">
            <input v-model="ruleForm.AnC21"  type="text" id="AnC21" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC22">
            <input v-model="ruleForm.AnC22"  type="text" id="AnC22" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC23">
            <input v-model="ruleForm.AnC23"  type="text" id="AnC23" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC24">
            <input v-model="ruleForm.AnC24"  type="text" id="AnC24" style="height: 30px;">
        </el-form-item></td>
            </tr>
        </tbody></table>
        <table id="bottomTable">
            <tbody><tr>
                <td>多点线性校准结果</td>
                <td>斜率a：<el-form-item label="" prop="Slope">
            <input v-model="ruleForm.Slope"  type="text" id="Slope" style="height: 30px;">
        </el-form-item></td>
                <td>截距b：<el-form-item label="" prop="Intercept">
            <input v-model="ruleForm.Intercept"  type="text" id="Intercept" style="height: 30px;">
        </el-form-item></td>
                <td>相关系数r：<el-form-item label="" prop="Coefficient">
            <input v-model="ruleForm.Coefficient"  type="text" id="Coefficient" style="height: 30px;">
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