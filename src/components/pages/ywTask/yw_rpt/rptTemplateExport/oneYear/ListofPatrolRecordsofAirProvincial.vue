<template>
    <div>
        <el-form id="ASEmergency" :model="ruleForm"  ref="Form"  >
         <div style="float:left;margin:10px 40px; " >
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
                <td><el-form-item label="" prop="id_1">
            <input v-model="ruleForm.id_1"  type="text" id="id_1" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="id_2">
            <input v-model="ruleForm.id_2"  type="text" id="id_2" style="height: 30px;">
        </el-form-item></td>
                <td><label id="param">PM<sub>2.5</sub></label></td>
                <td><el-form-item label="" prop="id_3">
            <el-date-picker v-model="ruleForm.id_3" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
                <td><el-form-item label="" prop="id_4">
            <el-date-picker v-model="ruleForm.id_4" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            </tr>
        </tbody></table>
        <table class="rpt" style="border-bottom: 0.5px solid #AAAAAA;">
            <tbody><tr>
                <td>输入滤纸重量，M（g）（K<sub>0</sub> 确认显示屏）</td>
                <td><el-form-item label="" prop="id_5">
            <input v-model="ruleForm.id_5"  type="text" id="id_5" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>没有滤纸的震荡频率，f<sub>o</sub>（赫兹）（K<sub>0</sub> 确认显示屏）</td>
                <td><el-form-item label="" prop="id_6">
            <input v-model="ruleForm.id_6"  type="text" id="id_6" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>带有滤纸的震荡频率，f<sub>1</sub>（赫兹）（K<sub>0</sub> 确认显示屏）</td>
                <td><el-form-item label="" prop="id_7">
            <input v-model="ruleForm.id_7"  type="text" id="id_7" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>天平的初始校准常数，K<sub>0</sub></td>
                <td><el-form-item label="" prop="id_8">
            <input v-model="ruleForm.id_8"  type="text" id="id_8" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>计算出的天平校准常数，K<sub>0</sub>'（K<sub>0</sub> 确认显示屏）</td>
                <td><el-form-item label="" prop="id_9">
            <input v-model="ruleForm.id_9"  type="text" id="id_9" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>校准常数的误差，（K<sub>0</sub>'-K<sub>0</sub>）/K<sub>0</sub>×100%（应≤2.5%）</td>
                <td><el-form-item label="" prop="id_10">
            <input v-model="ruleForm.id_10"  type="text" id="id_10" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>注：校准常数计算公式为：K'<sub>0</sub>=M/(1/f<sub>1</sub><sup>2</sup>-1/f<sub>0</sub><sup>2</sup>)</td>
                <td><el-form-item label="" prop="id_11">
            <input v-model="ruleForm.id_11"  type="text" id="id_11" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>备注：</td>
                <td><el-form-item label="" prop="id_12">
            <input v-model="ruleForm.id_12"  type="text" id="id_12" style="height: 30px;">
        </el-form-item></td>
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