<template>
    <div>
       <el-form id="ASEmergency" :model="ruleForm" :rules="rules" ref="Form" :label-position="top" >
        <table border="0" id="mainTable" style="border-bottom: none">
            <tbody>
            <tr style="">
                <td>
                    巡检时间：
                </td>     
                <td colspan="1">
                    <el-form-item label="" prop="yj_1">
                       <el-date-picker v-model="ruleForm.yj_1" type="date" value-format="yyyy-MM-dd"  placeholder="选择时间" :clearable=false></el-date-picker>
                   </el-form-item>
                </td>
                
                <!-- <td>
                    巡检结束时间：
                </td>
                <td colspan="3">
                    <el-form-item label="" prop="yj_2">
                       <el-date-picker v-model="ruleForm.yj_2" type="date" value-format="yyyy-MM-dd"  placeholder="选择时间" :clearable=false></el-date-picker>
                    </el-form-item>
                </td>                  -->
            </tr>
            <tr>
                <td>仪器型号</td>
                <td colspan="1"><el-form-item label="" prop="DeviceModel"><input type="text"  v-model="ruleForm.DeviceModel" class="td_input" id="DeviceModel" style="height: 30px;"> </el-form-item></td>
                <td>出厂编号</td>
                <td colspan="3"><el-form-item label="" prop="FactoryNo"><input type="text" v-model="ruleForm.FactoryNo"  class="td_input" id="FactoryNo" style="height: 30px;"> </el-form-item></td>
            </tr>
            <tr>
                <td>环境条件</td>
                <td colspan="5">
                     温度（℃）<input v-model="ruleForm.Temperature"  type="text" id="Temperature" style="width:10%;height: 30px;">
                    湿度（%）：<input v-model="ruleForm.Humidity"  type="text" id="Humidity" style="width:10%;height: 30px;">
                    其它： <input v-model="ruleForm.Other"  type="text" id="Other" style="width:10%;height: 30px;">
                </td>
            </tr>
            <tr>
                <td id="Mergetd" rowspan="4" style="width: 18%">质控设备信息</td>
                <td>设备名称</td>
                <td>型号</td>
                <td colspan="2">站内编号</td>
                <td colspan="2">检定日期</td>
            </tr>
            <tr>
                <td>流量计</td>
                <td><el-form-item label="" prop="FlowModel"><input type="text" class="td_input"  v-model="ruleForm.FlowModel" id="FlowModel" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="FlowZlbh"><input type="text" v-model="ruleForm.FlowZlbh"  class="td_input" id="FlowZlbh" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="FlowVerification"><el-date-picker v-model="ruleForm.FlowVerification" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd" placeholder="选择时间"></el-date-picker></el-form-item></td>
            </tr>
            <tr>
                <td>温湿度计</td>
                <td><el-form-item label="" prop="TemperatureModel"><input type="text" v-model="ruleForm.TemperatureModel"  class="td_input" id="TemperatureModel" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="TemperatureZlbh"><input v-model="ruleForm.TemperatureZlbh"  type="text" class="td_input" id="TemperatureZlbh" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="TemperatureVerificat"><el-date-picker v-model="ruleForm.TemperatureVerificat" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker></el-form-item></td>
            </tr>
            <tr>
                <td>气压计</td>
                <td><el-form-item label="" prop="BaroModel"><input type="text" class="td_input" v-model="ruleForm.BaroModel"  id="BaroModel" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="BaroZlbh"><input type="text"  v-model="ruleForm.BaroZlbh" class="td_input" id="BaroZlbh" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="BaroVerification"><el-date-picker v-model="ruleForm.BaroVerification" type="date" value-format="yyyy-MM-dd"  format="yyyy-MM-dd" placeholder="选择时间"></el-date-picker></el-form-item></td>
            </tr>
        </tbody></table>
        <table id="leakTable" style="border-bottom: none">
            <tbody><tr><td colspan="5" class="Mergetd">检漏</td></tr>
            <tr>
                <td></td>
                <td>泵关</td>
                <td>泵开</td>
                <td>净读数</td>
                <td>是否合格</td>
            </tr>
            <tr>
                <td>β射线法流量读数[L/min]</td>
                <td><el-form-item label="" prop="BetaLg"><input type="text"  v-model="ruleForm.BetaLg" class="td_input" id="BetaLg" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="BetaLk"><input type="text"  v-model="ruleForm.BetaLk" class="td_input" id="BetaLk" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="BetaJds"><input type="text"  v-model="ruleForm.BetaJds" class="td_input" id="BetaJds" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="BetaSfhg"><input type="text"  v-model="ruleForm.BetaSfhg" class="td_input" id="BetaSfhg" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <td>振荡天平法主流量读数[L/min]</td>
                <td><el-form-item label="" prop="OsczLg"><input type="text"  v-model="ruleForm.OsczLg" class="td_input" id="OsczLg" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OsczLk"><input type="text"  v-model="ruleForm.OsczLk" class="td_input" id="OsczLk" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OsczJds"><input type="text"  v-model="ruleForm.OsczJds" class="td_input" id="OsczJds" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OsczSfhg"><input type="text"  v-model="ruleForm.OsczSfhg" class="td_input" id="OsczSfhg" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <td>振荡天平法辅流量读数[L/min]</td>
                <td><el-form-item label="" prop="OscfLg"><input type="text"  v-model="ruleForm.OscfLg" class="td_input" id="OscfLg" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OscfLkg"><input type="text"  v-model="ruleForm.OscfLkg" class="td_input" id="OscfLkg" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OscfJds"><input type="text"  v-model="ruleForm.OscfJds" class="td_input" id="OscfJds" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OscfSfhg"><input type="text"  v-model="ruleForm.OscfSfhg" class="td_input" id="OscfSfhg" style="height: 30px;"></el-form-item></td>
            </tr>
        </tbody></table>
        <table id="flowTable" style="border-bottom: none">
            <tbody><tr><td colspan="6" class="Mergetd">流量检查（L/min）</td></tr>
            <tr>
                <td class="Mergetd">仪器设定值</td>
                <td class="Mergetd">仪器示值流量</td>
                <td class="Mergetd"> 标准流量计</td>
                <td class="Mergetd"> 设定流量误差 </td>
                <td class="Mergetd">显示流量误差</td>
                <td class="Mergetd">是否合格（不合格需校准）</td>
            </tr>
            <tr>
                <td>β射线法流量</td>
                <td><el-form-item label="" prop="BetaYqsz"><input type="text"  v-model="ruleForm.BetaYqsz" class="td_input" id="BetaYqsz" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="BetaBzxzq"><input type="text"  v-model="ruleForm.BetaBzxzq" class="td_input" id="BetaBzxzq" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="BetaSdllwc"><input type="text"  v-model="ruleForm.BetaSdllwc" class="td_input" id="BetaSdllwc" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="BetaXsllwc"><input type="text"  v-model="ruleForm.BetaXsllwc" class="td_input" id="BetaXsllwc" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="BetaFlowSfhg"><input type="text"  v-model="ruleForm.BetaFlowSfhg" class="td_input" id="BetaFlowSfhg" style="height: 30px;"></el-form-item></td>
            </tr>

            <tr>
                <td>振荡天平法总流量</td>
                <td><el-form-item label="" prop="OscsYqsz"><input type="text"  v-model="ruleForm.OscsYqsz" class="td_input" id="OscsYqsz" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OscsBzxzq"><input type="text"  v-model="ruleForm.OscsBzxzq" class="td_input" id="OscsBzxzq" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OscsSdllwc"><input type="text"  v-model="ruleForm.OscsSdllwc" class="td_input" id="OscsSdllwc" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OscsXsllwc"><input type="text"  v-model="ruleForm.OscsXsllwc" class="td_input" id="OscsXsllwc" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OscsFlowSfhg"><input type="text"  v-model="ruleForm.OscsFlowSfhg" class="td_input" id="OscsFlowSfhg" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <td>振荡天平法主流量</td>
                <td><el-form-item label="" prop="OsczYqsz"><input type="text"  v-model="ruleForm.OsczYqsz" class="td_input" id="OsczYqsz" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OsczBzxzq"><input type="text"  v-model="ruleForm.OsczBzxzq" class="td_input" id="OsczBzxzq" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OsczSdllwc"><input type="text"  v-model="ruleForm.OsczSdllwc" class="td_input" id="OsczSdllwc" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OsczXsllwc"><input type="text"  v-model="ruleForm.OsczXsllwc" class="td_input" id="OsczXsllwc" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OsczFlowSfhg"><input type="text"  v-model="ruleForm.OsczFlowSfhg" class="td_input" id="OsczFlowSfhg" style="height: 30px;"></el-form-item></td>
            </tr>
        </tbody></table>
        <table id="correctTable">
            <tbody><tr><td colspan="5">流量校准（L/min）</td></tr>
            <tr>
                <td colspan="1" rowspan="2">仪器设定流量</td>
                <td colspan="2">校准前</td>
                <td colspan="2">校准后</td>
            </tr>
            <tr>
                <td>仪器显示流量</td>
                <td>标准流量计</td>
                <td>仪器读数</td>
                <td>标准流量计</td>
            </tr>
            <tr>
                <td rowspan="2">β射线法<br>流量</td>
                <td><el-form-item label="" prop="BetaJzqyqxs"><input type="text"  v-model="ruleForm.BetaJzqyqxs" class="td_input" id="BetaJzqyqxs" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="BetaJzqxzq"><input type="text"  v-model="ruleForm.BetaJzqxzq" class="td_input" id="BetaJzqxzq" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="BetaJzhyqds"><input type="text"  v-model="ruleForm.BetaJzhyqds" class="td_input" id="BetaJzhyqds" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="BetaJzhxzq"><input type="text"  v-model="ruleForm.BetaJzhxzq" class="td_input" id="BetaJzhxzq" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <!-- <td><el-form-item label="" prop="BetaJzqyqxs1"><input type="text"  v-model="ruleForm.BetaJzqyqxs1" class="td_input" id="BetaJzqyqxs1" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="BetaJzqxzq1"><input type="text"  v-model="ruleForm.BetaJzqxzq1" class="td_input" id="BetaJzqxzq1" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="BetaJzhyqds1"><input type="text"  v-model="ruleForm.BetaJzhyqds1" class="td_input" id="BetaJzhyqds1" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="BetaJzhxzq1"><input type="text"  v-model="ruleForm.BetaJzhxzq1" class="td_input" id="BetaJzhxzq1" style="height: 30px;"></el-form-item></td> -->
            </tr>
            <tr>

                <td rowspan="2" style="height: 16%">振荡天平法<br>主流量</td>
                <td><el-form-item label="" prop="OsczJzqyqxs"><input type="text"  v-model="ruleForm.OsczJzqyqxs" class="td_input" id="OsczJzqyqxs" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OsczJzqxzq"><input type="text"  v-model="ruleForm.OsczJzqxzq" class="td_input" id="OsczJzqxzq" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OsczJzhyqds"><input type="text"  v-model="ruleForm.OsczJzhyqds" class="td_input" id="OsczJzhyqds" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OsczJzhxzh"><input type="text"  v-model="ruleForm.OsczJzhxzh" class="td_input" id="OsczJzhxzh" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <!-- <td><el-form-item label="" prop="OsczJzqyqxs1"><input type="text"  v-model="ruleForm.OsczJzqyqxs1" class="td_input" id="OsczJzqyqxs1" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OsczJzqxzq1"><input type="text"  v-model="ruleForm.OsczJzqxzq1" class="td_input" id="OsczJzqxzq1" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OsczJzhyqds1"><input type="text"  v-model="ruleForm.OsczJzhyqds1" class="td_input" id="OsczJzhyqds1" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OsczJzhxzh1"><input type="text"  v-model="ruleForm.OsczJzhxzh1" class="td_input" id="OsczJzhxzh1" style="height: 30px;"></el-form-item></td> -->
            </tr>
            <tr>
                <td rowspan="2">振荡天平法<br>辅流量</td>
                <td><el-form-item label="" prop="OscfJzqyqxs"><input type="text"  v-model="ruleForm.OscfJzqyqxs" class="td_input" id="OscfJzqyqxs" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OscfJzqxzq"><input type="text"  v-model="ruleForm.OscfJzqxzq" class="td_input" id="OscfJzqxzq" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OscfJzhyqds"><input type="text"  v-model="ruleForm.OscfJzhyqds" class="td_input" id="OscfJzhyqds" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OscfJzhxzq"><input type="text"  v-model="ruleForm.OscfJzhxzq" class="td_input" id="OscfJzhxzq" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <!-- <td><el-form-item label="" prop="OscfJzqyqxs1"><input type="text"  v-model="ruleForm.OscfJzqyqxs1" class="td_input" id="OscfJzqyqxs1" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OscfJzqxzq1"><input type="text"  v-model="ruleForm.OscfJzqxzq1" class="td_input" id="OscfJzqxzq1" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OscfJzhyqds1"><input type="text"  v-model="ruleForm.OscfJzhyqds1" class="td_input" id="OscfJzhyqds1" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="OscfJzhxzq1"><input type="text"  v-model="ruleForm.OscfJzhxzq1" class="td_input" id="OscfJzhxzq1" style="height: 30px;"></el-form-item></td> -->
            </tr>
        </tbody></table>
     </el-form>
    </div>
</template>
<script>
export default {
    props:{
        formData: Object,
        btnType: String,
    },
    components:{},
    data(){
        return{
            dataContent:'',
            ruleForm:{
                 "InspectionSTime": "",
                "InspectionETime": "",
                "DeviceModel": "",
                "FactoryNo": "",
                "Temperature": "",
                "Humidity": "",
                "Other": "",
                "FlowModel": "",
                "FlowZlbh": "",
                "FlowVerification": "",
                "TemperatureModel": "",
                "TemperatureZlbh": "",
                "TemperatureVerificat": "",
                "BaroModel": "",
                "BaroZlbh": "",
                "BaroVerification": "",
                "BetaLg": "",
                "BetaLk": "",
                "BetaJds": "",
                "BetaSfhg": "",
                "OsczLg": "",
                "OsczLk": "",
                "OsczJds": "",
                "OsczSfhg": "",
                "OscfLg": "",
                "OscfLkg": "",
                "OscfJds": "",
                "OscfSfhg": "",
                "BetaYqsz": "",
                "BetaBzxzq": "",
                "BetaSdllwc": "",
                "BetaXsllwc": "",
                "BetaFlowSfhg": "",
                "OscsYqsz": "",
                "OscsBzxzq": "",
                "OscsSdllwc": "",
                "OscsXsllwc": "",
                "OscsFlowSfhg": "",
                "OsczYqsz": "",
                "OsczBzxzq": "",
                "OsczSdllwc": "",
                "OsczXsllwc": "",
                "OsczFlowSfhg": "",
                "BetaJzqyqxs": "",
                "BetaJzqxzq": "",
                "BetaJzhyqds": "",
                "BetaJzhxzq": "",
                "BetaJzqyqxs1": "",
                "BetaJzqxzq1": "",
                "BetaJzhyqds1": "",
                "BetaJzhxzq1": "",
                "OsczJzqyqxs": "",
                "OsczJzqxzq": "",
                "OsczJzhyqds": "",
                "OsczJzhxzh": "",
                "OsczJzqyqxs1": "",
                "OsczJzqxzq1": "",
                "OsczJzhyqds1": "",
                "OsczJzhxzh1": "",
                "OscfJzqyqxs": "",
                "OscfJzqxzq": "",
                "OscfJzhyqds": "",
                "OscfJzhxzq": "",
                "OscfJzqyqxs1": "",
                "OscfJzqxzq1": "",
                "OscfJzhyqds1": "",
                "OscfJzhxzq1": "",
                "yj_1": "",
                "yj_2": "",
            },

            rules: {
                "DeviceModel": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "FactoryNo": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "FlowModel": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "FlowZlbh": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "FlowVerification": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "TemperatureModel": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "TemperatureZlbh": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "TemperatureVerificat": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BaroModel": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BaroZlbh": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BaroVerification": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaLg": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaLk": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaJds": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaSfhg": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczLg": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczLk": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczJds": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczSfhg": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscfLg": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscfLkg": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscfJds": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscfSfhg": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaYqsz": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaBzxzq": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaSdllwc": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaXsllwc": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaFlowSfhg": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscsYqsz": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscsBzxzq": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscsSdllwc": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscsXsllwc": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscsFlowSfhg": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczYqsz": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczBzxzq": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczSdllwc": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczXsllwc": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczFlowSfhg": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaJzqyqxs": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaJzqxzq": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaJzhyqds": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaJzhxzq": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaJzqyqxs1": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaJzqxzq1": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaJzhyqds1": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "BetaJzhxzq1": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczJzqyqxs": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczJzqxzq": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczJzhyqds": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczJzhxzh": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczJzqyqxs1": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczJzqxzq1": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczJzhyqds1": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OsczJzhxzh1": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscfJzqyqxs": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscfJzqxzq": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscfJzhyqds": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscfJzhxzq": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscfJzqyqxs1": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscfJzqxzq1": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscfJzhyqds1": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "OscfJzhxzq1": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "yj_1": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "yj_2": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            },

        }
    },
    // computed: {
    //     formSubmitData: function () {
    //         return this.$emit("formSubmit",this.Qs.stringify(this.ruleForm));
    //     }
    // },
    watch:{
        btnType(val, oldVal) {
          this.$refs["Form"].validate((valid) => {
                if (valid) {
                    if (val == "保存") {
                      this.$emit("formSava", JSON.stringify(this.ruleForm));
                    }
                    if (val == "提交") {
                      this.$emit("formSubmit", JSON.stringify(this.ruleForm));
                    }
                }else {
                    this.$emit("reSet", "");
                    return false;
                }
          });
            
        },
        formData(val,oldVal){
            if(val.content!=null){
                this.ruleForm=JSON.parse(val.content);
                
            }
        }
    },
    mounted(){
       //this.getNowTime();
    },
    methods:{
                //初始化时间
       getNowTime() {
         var d = new Date();
         var dyear = d.getFullYear(); //得到年份
         var dmonth = d.getMonth(); //得到月份
         dmonth = dmonth + 1;
         dmonth = dmonth.toString().padStart(2, "0");
         var dTime= d.getTime();
         var dhour = d.getHours();
         dhour = dhour.toString().padStart(2, "0");   
         var dminutes = d.getMinutes();
         dminutes = dminutes.toString().padStart(2, "0");   
         var dseconds=d.getSeconds();
         dseconds = dseconds.toString().padStart(2, "0"); 
         var ddate = d.getDate(); //得到日期       
         ddate = ddate.toString().padStart(2, "0");     
         var dbeforedefaultDate = `${dyear}-${dmonth}-${ddate} ${dhour}:${dminutes}:${dseconds}`;

         //1个小时后
         var myDate =new Date();
         var myDateyear = myDate.getFullYear(); //得到年份
         var myDatemonth = myDate.getMonth(); //得到月份
         myDatemonth = myDatemonth + 1;
         myDatemonth = myDatemonth.toString().padStart(2, "0");
         var myDateTime= myDate.getTime();
         var hour = myDate.getHours()+1;
         hour = hour.toString().padStart(2, "0");   
         var minutes = myDate.getMinutes();
         minutes = minutes.toString().padStart(2, "0");   
         var seconds=myDate.getSeconds();
         seconds = seconds.toString().padStart(2, "0"); 
         var myDatedate = myDate.getDate(); //得到日期       
         myDatedate = myDatedate.toString().padStart(2, "0");     
         var afteOneHourDate = `${myDateyear}-${myDatemonth}-${myDatedate} ${hour}:${minutes}:${seconds}`;
         //运维任务统计
         this.$set(this.ruleForm, "yj_1", dbeforedefaultDate);     
         this.$set(this.ruleForm, "yj_2", afteOneHourDate);
        },
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