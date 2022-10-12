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
        <table class="rpt">
            <tbody><tr>
                <td>仪器型号</td>
                <td><el-form-item label="" prop="Mo1">
            <input v-model="ruleForm.Mo1"  type="text" id="Mo1" style="height: 30px;">
        </el-form-item></td>
                <td>仪器编号</td>
                <td><el-form-item label="" prop="Mo2">
            <input v-model="ruleForm.Mo2"  type="text" id="Mo2" style="height: 30px;">
        </el-form-item></td>
                <td>校准日期</td>
                <td><el-form-item label="" prop="SDateTime">
            <el-date-picker v-model="ruleForm.SDateTime" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"   placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            </tr>
            <tr>
                <td>环境条件</td>
                <td class="tem" colspan="5">
                    温度（℃）:<el-form-item label="" prop="Mt1">
            <input v-model="ruleForm.Mt1"  type="text" id="Mt1" style="width:10%;height: 30px;">
        </el-form-item>
                    湿度（%）：<el-form-item label="" prop="Mt2">
            <input v-model="ruleForm.Mt2"  type="text" id="Mt2" style="width:10%;height: 30px;">
        </el-form-item>
                    大气压（Pa）：<el-form-item label="" prop="Mt3">
            <input v-model="ruleForm.Mt3"  type="text" id="Mt3" style="width:10%;height: 30px;"> 
        </el-form-item>
                    当前能见度值：<el-form-item label="" prop="Mt4">
            <input v-model="ruleForm.Mt4"  type="text" id="Mt4" style="width:10%;height: 30px;"> 
        </el-form-item>
                    其他：<el-form-item label="" prop="Mt5">
            <input v-model="ruleForm.Mt5"  type="text" id="Mt5" style="width:10%;height: 30px;">
        </el-form-item> </td>
            </tr><br/>
            <tr>
                <td rowspan="2">校验所用设备</td>
                <td>校准板型号</td>
                <td colspan="2">消光系数</td>
                <td colspan="2">不确定度</td>
            </tr>
            <tr>
                <td><el-form-item label="" prop="Mo3">
            <input v-model="ruleForm.Mo3"  type="text" id="Mo3" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="Mo4">
            <input v-model="ruleForm.Mo4"  type="text" id="Mo4" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="Mo5">
            <input v-model="ruleForm.Mo5"  type="text" id="Mo5" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td rowspan="4">校准膜校验</td>
                <td>内容</td>
                <td>校验结果</td>
                <td>校准要求</td>
                <td>误差要求</td>
                <td>是否合格</td>
            </tr>
            <tr>
                <td>零点</td>
                <td><el-form-item label="" prop="Mo6">
            <input v-model="ruleForm.Mo6"  type="text" id="Mo6" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="Mo7">
            <input v-model="ruleForm.Mo7"  type="text" id="Mo7" style="height: 30px;">
        </el-form-item></td>
                <td rowspan="2">≤±10%</td>
                <td><el-form-item label="" prop="Mo8">
            <input v-model="ruleForm.Mo8"  type="text" id="Mo8" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>标点</td>
                <td><el-form-item label="" prop="Mo9">
           <input v-model="ruleForm.Mo9"  type="text" id="Mo9" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="Mo10">
            <input v-model="ruleForm.Mo10"  type="text" id="Mo10" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="Mo11">
            <input v-model="ruleForm.Mo11"  type="text" id="Mo11" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>允许偏差</td>
                <td colspan="4">≤±2%</td>
            </tr>
            <tr>
                <td>校验结论</td>
                <td colspan="5"><el-form-item label="" prop="Mo12">
            <input v-model="ruleForm.Mo12"  type="text" id="Mo12" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>备注</td>
                <td colspan="5"><el-form-item label="" prop="Mo13">
            <input v-model="ruleForm.Mo13"  type="text" id="Mo13" style="height: 30px;">
        </el-form-item></td>

            </tr>
            <tr>
                <td colspan="6" style="text-align:left;">注：如当前能见度小于10KM，或恶劣气象条件时，则视为不具备校准条件。</td>
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