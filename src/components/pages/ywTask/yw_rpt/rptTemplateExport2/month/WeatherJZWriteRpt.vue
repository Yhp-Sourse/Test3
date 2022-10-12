<template>
    <div>
       <form id="FlowTest">
        
        <div style="float:left;margin:15px 45px; " >
             巡检开始时间：
            <el-date-picker v-model="ruleForm.yj_1" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择时间" :clearable=false></el-date-picker>
             &nbsp; &nbsp; &nbsp; 
             巡检结束时间：
            <el-date-picker v-model="ruleForm.yj_2" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择时间" :clearable=false></el-date-picker>
        </div>

        <table border="0" id="mainTable" style="border-bottom: none">
            <tbody><tr>
                <td>仪器型号</td>
                <td><input v-model="ruleForm.DeviceModel"  type="text" class="td_input" id="DeviceModel" style="height: 30px;"></td>
                <td>仪器编号</td>
                <td><input v-model="ruleForm.DeviceNo"  type="text" class="td_input" id="DeviceNo" style="height: 30px;"></td>
                <td>检查时间</td>
                <td><el-date-picker v-model="ruleForm.ACheckTime" type="datetime" placeholder="选择时间"></el-date-picker></td>

            </tr>
        </tbody></table>
        <table id="correctTable">
            <tbody><tr>
                <td rowspan="5">质控设备信息</td>
            </tr>
            <tr>
                <td>设备名称</td>
                <td>型号</td>
                <td>站内编号</td>
                <td>检定日期</td>
            </tr>
            <tr>
                <td>标准气压计</td>
                <td><input v-model="ruleForm.StandardType"  type="text" class="td_input" id="StandardType" style="height: 30px;"></td>
                <td><input v-model="ruleForm.StandardNo"  type="text" class="td_input" id="StandardNo" style="height: 30px;"></td>
                <td><el-date-picker v-model="ruleForm.StandardCheckTime" type="datetime" placeholder="选择时间"></el-date-picker></td>
            </tr>
            <tr>
                <td>标准温湿度计</td>
                <td><input v-model="ruleForm.StandardType1"  type="text" class="td_input" id="StandardType1" style="height: 30px;"></td>
                <td><input v-model="ruleForm.StandardNo1"  type="text" class="td_input" id="StandardNo1" style="height: 30px;"></td>
                <td><el-date-picker v-model="ruleForm.StandardCheckTime1" type="datetime" placeholder="选择时间"></el-date-picker></td>
            </tr>
            <tr>
                <td>手持式风速风向仪</td>
                <td><input v-model="ruleForm.StandardType2"  type="text" class="td_input" id="StandardType2" style="height: 30px;"></td>
                <td><input v-model="ruleForm.StandardNo2"  type="text" class="td_input" id="StandardNo2" style="height: 30px;"></td>
                <td><el-date-picker v-model="ruleForm.StandardCheckTime2" type="datetime" placeholder="选择时间"></el-date-picker></td>
            </tr>
            <tr>
                <td>校准仪器</td>
                <td>标准质控设备读数</td>
                <td>仪器显示数值</td>
                <td>是否合格</td>
                <td>处理措施</td>
            </tr>
            <tr>
                <td>室外温度</td>
                <td><input v-model="ruleForm.StandardDeviceNum"  type="text" class="td_input" id="StandardDeviceNum" style="height: 30px;"></td>
                <td><input v-model="ruleForm.DeviceNum"  type="text" class="td_input" id="DeviceNum" style="height: 30px;"></td>
                <td><input v-model="ruleForm.IsOrNotQualified"  type="text" class="td_input" id="IsOrNotQualified" style="height: 30px;"></td>
                <td><input v-model="ruleForm.DealWays"  type="text" class="td_input" id="DealWays" style="height: 30px;"></td>
            </tr>
            <tr>
                <td>室内温度</td>
                <td><input v-model="ruleForm.StandardDeviceNum1"  type="text" class="td_input" id="StandardDeviceNum1" style="height: 30px;"></td>
                <td><input v-model="ruleForm.DeviceNum1"  type="text" class="td_input" id="DeviceNum1" style="height: 30px;"></td>
                <td><input v-model="ruleForm.IsOrNotQualified1"  type="text" class="td_input" id="IsOrNotQualified1" style="height: 30px;"></td>
                <td><input v-model="ruleForm.DealWays1"  type="text" class="td_input" id="DealWays1" style="height: 30px;"></td>
            </tr>
            <tr>
                <td>室外湿度</td>
                <td><input v-model="ruleForm.StandardDeviceNum2"  type="text" class="td_input" id="StandardDeviceNum2" style="height: 30px;"></td>
                <td><input v-model="ruleForm.DeviceNum2"  type="text" class="td_input" id="DeviceNum2" style="height: 30px;"></td>
                <td><input v-model="ruleForm.IsOrNotQualified2"  type="text" class="td_input" id="IsOrNotQualified2" style="height: 30px;"></td>
                <td><input v-model="ruleForm.DealWays2"  type="text" class="td_input" id="DealWays2" style="height: 30px;"></td>
            </tr>
            <tr>
                <td>室内湿度</td>
                <td><input v-model="ruleForm.StandardDeviceNum3"  type="text" class="td_input" id="StandardDeviceNum3" style="height: 30px;"></td>
                <td><input v-model="ruleForm.DeviceNum3"  type="text" class="td_input" id="DeviceNum3" style="height: 30px;"></td>
                <td><input v-model="ruleForm.IsOrNotQualified3"  type="text" class="td_input" id="IsOrNotQualified3" style="height: 30px;"></td>
                <td><input v-model="ruleForm.DealWays3"  type="text" class="td_input" id="DealWays3" style="height: 30px;"></td>
            </tr>
            <tr>
                <td>气压</td>
                <td><input v-model="ruleForm.StandardDeviceNum4"  type="text" class="td_input" id="StandardDeviceNum4" style="height: 30px;"></td>
                <td><input v-model="ruleForm.DeviceNum4"  type="text" class="td_input" id="DeviceNum4" style="height: 30px;"></td>
                <td><input v-model="ruleForm.IsOrNotQualified4"  type="text" class="td_input" id="IsOrNotQualified4" style="height: 30px;"></td>
                <td><input v-model="ruleForm.DealWays4"  type="text" class="td_input" id="DealWays4" style="height: 30px;"></td>
            </tr>
            <tr>
                <td>风速</td>
                <td><input v-model="ruleForm.StandardDeviceNum5"  type="text" class="td_input" id="StandardDeviceNum5" style="height: 30px;"></td>
                <td><input v-model="ruleForm.DeviceNum5"  type="text" class="td_input" id="DeviceNum5" style="height: 30px;"></td>
                <td><input v-model="ruleForm.IsOrNotQualified5"  type="text" class="td_input" id="IsOrNotQualified5" style="height: 30px;"></td>
                <td><input v-model="ruleForm.DealWays5"  type="text" class="td_input" id="DealWays5" style="height: 30px;"></td>
            </tr>
            <tr>
                <td>风向</td>
                <td><input v-model="ruleForm.StandardDeviceNum6"  type="text" class="td_input" id="StandardDeviceNum6" style="height: 30px;"></td>
                <td><input v-model="ruleForm.DeviceNum6"  type="text" class="td_input" id="DeviceNum6" style="height: 30px;"></td>
                <td><input v-model="ruleForm.IsOrNotQualified6"  type="text" class="td_input" id="IsOrNotQualified6" style="height: 30px;"></td>
                <td><input v-model="ruleForm.DealWays6"  type="text" class="td_input" id="DealWays6" style="height: 30px;"></td>
            </tr>

        </tbody></table>
    </form>
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