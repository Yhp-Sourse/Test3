<template>
    <div>
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


        <table id="topTable">
            <tbody>
            <tr>
                <td>站点名称及代码</td>
                <td colspan="3">仪器设备</td>
                <td colspan="5">基本信息</td>
            </tr>
            <tr>
                <td rowspan="12"><el-form-item label="" prop="AnC1">
            <input v-model="ruleForm.AnC1"  type="text" id="AnC1" style="height: 30px;">
        </el-form-item></td>
                <td>建成时间</td>
                <td colspan="2"><el-form-item label="" prop="StartTime">
            <el-date-picker v-model="ruleForm.StartTime" type="date" format="yyyy-MM" placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
                <td colspan="2">名称及型号</td>
                <td>仪器编号</td>
                <td>分析方法</td>
                <td>生产厂商</td>
            </tr>
            <tr>
                <td>位置</td>
                <td colspan="2"><el-form-item label="" prop="AnC2">
            <input v-model="ruleForm.AnC2"  type="text" id="AnC2" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="AnC3">
            <input v-model="ruleForm.AnC3"  type="text" id="AnC3" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC4">
            <input v-model="ruleForm.AnC4"  type="text" id="AnC4" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC5">
            <input v-model="ruleForm.AnC5"  type="text" id="AnC5" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC6">
            <input v-model="ruleForm.AnC6"  type="text" id="AnC6" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>经度</td>
                <td colspan="2"><el-form-item label="" prop="AnC7">
            <input v-model="ruleForm.AnC7"  type="text" id="AnC7" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="AnC8">
           <input v-model="ruleForm.AnC8"  type="text" id="AnC8" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC9">
            <input v-model="ruleForm.AnC9"  type="text" id="AnC9" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC10">
            <input v-model="ruleForm.AnC10"  type="text" id="AnC10" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC11">
            <input v-model="ruleForm.AnC11"  type="text" id="AnC11" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>纬度</td>
                <td colspan="2"><el-form-item label="" prop="AnC12">
            <input v-model="ruleForm.AnC12"  type="text" id="AnC12" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="AnC13">
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
                <td>海拔</td>
                <td colspan="2"><el-form-item label="" prop="AnC17">
            <input v-model="ruleForm.AnC17"  type="text" id="AnC17" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="AnC18">
            <input v-model="ruleForm.AnC18"  type="text" id="AnC18" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC19">
            <input v-model="ruleForm.AnC19"  type="text" id="AnC19" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC20">
            <input v-model="ruleForm.AnC20"  type="text" id="AnC20" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC21">
            <input v-model="ruleForm.AnC21"  type="text" id="AnC21" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>相对高度</td>
                <td colspan="2"><el-form-item label="" prop="AnC22">
            <input v-model="ruleForm.AnC22"  type="text" id="AnC22" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="AnC23">
            <input v-model="ruleForm.AnC23"  type="text" id="AnC23" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC24">
            <input v-model="ruleForm.AnC24"  type="text" id="AnC24" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC25">
            <input v-model="ruleForm.AnC25"  type="text" id="AnC25" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC26">
            <input v-model="ruleForm.AnC26"  type="text" id="AnC26" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>气候条件</td>
                <td colspan="2"><el-form-item label="" prop="AnC27">
            <input v-model="ruleForm.AnC27"  type="text" id="AnC27" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="AnC28">
            <input v-model="ruleForm.AnC28"  type="text" id="AnC28" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC29">
            <input v-model="ruleForm.AnC29"  type="text" id="AnC29" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC30">
            <input v-model="ruleForm.AnC30"  type="text" id="AnC30" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC31">
            <input v-model="ruleForm.AnC31"  type="text" id="AnC31" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>区域代表</td>
                <td colspan="2"><el-form-item label="" prop="AnC32">
            <input v-model="ruleForm.AnC32"  type="text" id="AnC32" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="AnC33">
            <input v-model="ruleForm.AnC33"  type="text" id="AnC33" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC34">
            <input v-model="ruleForm.AnC34"  type="text" id="AnC34" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC35">
            <input v-model="ruleForm.AnC35"  type="text" id="AnC35" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC36">
            <input v-model="ruleForm.AnC36"  type="text" id="AnC36" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>执行标准</td>
                <td colspan="2"><el-form-item label="" prop="AnC37">
            <input v-model="ruleForm.AnC37"  type="text" id="AnC37" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="AnC38">
            <input v-model="ruleForm.AnC38"  type="text" id="AnC38" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC39">
            <input v-model="ruleForm.AnC39"  type="text" id="AnC39" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC40">
            <input v-model="ruleForm.AnC40"  type="text" id="AnC40" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC41">
            <input v-model="ruleForm.AnC41"  type="text" id="AnC41" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>监测点类型</td>
                <td colspan="2"><el-form-item label="" prop="AnC42">
            <input v-model="ruleForm.AnC42"  type="text" id="AnC42" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="AnC43">
            <input v-model="ruleForm.AnC43"  type="text" id="AnC43" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC44">
            <input v-model="ruleForm.AnC44"  type="text" id="AnC44" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC45">
            <input v-model="ruleForm.AnC45"  type="text" id="AnC45" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC46">
           <input v-model="ruleForm.AnC46"  type="text" id="AnC46" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>联系电话</td>
                <td colspan="2"><el-form-item label="" prop="AnC47">
            <input v-model="ruleForm.AnC47"  type="text" id="AnC47" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="AnC48">
            <input v-model="ruleForm.AnC48"  type="text" id="AnC48" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC49">
            <input v-model="ruleForm.AnC49"  type="text" id="AnC49" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC50">
            <input v-model="ruleForm.AnC50"  type="text" id="AnC50" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC51">
            <input v-model="ruleForm.AnC51"  type="text" id="AnC51" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>其它补充</td>
                <td colspan="2"><el-form-item label="" prop="AnC52">
            <input v-model="ruleForm.AnC52"  type="text" id="AnC52" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="AnC53">
            <input v-model="ruleForm.AnC53"  type="text" id="AnC53" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC54">
            <input v-model="ruleForm.AnC54"  type="text" id="AnC54" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC55">
            <input v-model="ruleForm.AnC55"  type="text" id="AnC55" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC56">
           <input v-model="ruleForm.AnC56"  type="text" id="AnC56" style="height: 30px;">
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