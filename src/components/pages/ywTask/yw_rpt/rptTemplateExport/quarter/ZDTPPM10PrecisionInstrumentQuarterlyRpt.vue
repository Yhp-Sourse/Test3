<template>
    <div>
        <el-form id="ASEmergency" :model="ruleForm"  ref="Form"  >
         <div style="float:left;margin:15px 45px; " >
             巡检开始时间：
            <el-date-picker v-model="ruleForm.yj_1" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择时间" :clearable=false></el-date-picker>
             &nbsp; &nbsp; &nbsp; 
             巡检结束时间：
            <el-date-picker v-model="ruleForm.yj_2" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择时间" :clearable=false></el-date-picker>
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
                <td><el-form-item label="" prop="Tp1">
            <input v-model="ruleForm.Tp1"  type="text" id="Tp1" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="Tp2">
            <input v-model="ruleForm.Tp2"  type="text" id="Tp2" style="height: 30px;">
        </el-form-item></td>
                <td><label id="param">PM<sub>10</sub></label></td>
                <td><el-form-item label="" prop="Dt1">
            <el-date-picker v-model="ruleForm.Dt1" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item>
                    
                </td>
                <td><el-form-item label="" prop="Dt2">
            <el-date-picker v-model="ruleForm.Dt2" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item>
                    
                </td>
            </tr>
        </tbody></table>
        <table class="rpt">
            <tbody><tr>
                <td colspan="12">环境温度传感器资料 单位：℃</td>
            </tr>
            <tr>
                <td colspan="2">传感器编号</td>
                <td colspan="2"><el-form-item label="" prop="Tp3">
            <input v-model="ruleForm.Tp3"  type="text" id="Tp3" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2">上次校准日期</td>
                <td colspan="2"><el-form-item label="" prop="Dt3">
             <el-date-picker v-model="ruleForm.Dt3" type="date" value-format="yyyy-MM-dd"  format="yyyy-MM-dd"   placeholder="选择时间"></el-date-picker>
        </el-form-item>
                   
                </td>
                <td colspan="2">下次校准日期</td>
                <td colspan="2"><el-form-item label="" prop="Dt4">
            <el-date-picker v-model="ruleForm.Dt4" type="date" value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item>
                    
                </td>
            </tr>
            <tr>
                <td colspan="12">参考温度计资料</td>
            </tr>
            <tr>
                <td colspan="2">设备型号</td>
                <td colspan="4"><el-form-item label="" prop="Tp4">
            <input v-model="ruleForm.Tp4"  type="text" id="Tp4" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2">出厂编号</td>
                <td colspan="4"><el-form-item label="" prop="Tp5">
            <input v-model="ruleForm.Tp5"  type="text" id="Tp5" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td colspan="2">测量范围</td>
                <td colspan="4"><el-form-item label="" prop="Tp6">
            <input v-model="ruleForm.Tp6"  type="text" id="Tp6" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2">示值修正量</td>
                <td colspan="4"><el-form-item label="" prop="Tp7">
            <input v-model="ruleForm.Tp7"  type="text" id="Tp7" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td colspan="2">上次校准日期</td>
                <td colspan="4"><el-form-item label="" prop="Dt5">
            <el-date-picker v-model="ruleForm.Dt5" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item>
                    
                    </td>
                <td colspan="2">下次校准日期</td>
                <td colspan="4"><el-form-item label="" prop="Dt6">
             <el-date-picker v-model="ruleForm.Dt6" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item>
                   
                </td>
            </tr>
            <tr>
                <td colspan="12">温度校准结果</td>
            </tr>
            <tr>
                <td colspan="6">参考温度计的读数</td>
                <td colspan="6">传感器的读数</td>
            </tr>
            <tr>
                <td colspan="3">直接读取的标准读数</td>
                <td colspan="3">已修正的标准值*</td>
                <td colspan="3">校准前</td>
                <td colspan="3">校准后</td>
            </tr>
            <tr>
                <td colspan="3"><el-form-item label="" prop="Tp8">
            <input v-model="ruleForm.Tp8"  type="text" id="Tp8" style="height: 30px;">
        </el-form-item></td>
                <td colspan="3"><el-form-item label="" prop="Tp9">
            <input v-model="ruleForm.Tp9"  type="text" id="Tp9" style="height: 30px;">
        </el-form-item></td>
                <td colspan="3"><el-form-item label="" prop="Tp10">
            <input v-model="ruleForm.Tp10"  type="text" id="Tp10" style="height: 30px;">
        </el-form-item></td>
                <td colspan="3"><el-form-item label="" prop="Tp11">
            <input v-model="ruleForm.Tp11"  type="text" id="Tp11" style="height: 30px;">
        </el-form-item></td>
            </tr>
        </tbody></table>

        <table class="rpt">
            <tbody><tr>
                <td colspan="12">环境压力传感器资料 单位：mmHg</td>
            </tr>
            <tr>
                <td colspan="2">传感器编号</td>
                <td colspan="2"><el-form-item label="" prop="Tp12">
            <input v-model="ruleForm.Tp12"  type="text" id="Tp12" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2">上次校准日期</td>
                <td colspan="2"><el-form-item label="" prop="Dt7">
            <el-date-picker v-model="ruleForm.Dt7" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"   placeholder="选择时间"></el-date-picker>
        </el-form-item>
                    
                </td>
                <td colspan="2">下次校准日期</td>
                <td colspan="2"><el-form-item label="" prop="Dt8">
            <el-date-picker v-model="ruleForm.Dt8" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item>
                    
                </td>
            </tr>
            <tr>
                <td colspan="12">参考气压计资料</td>
            </tr>
            <tr>
                <td colspan="2">设备型号</td>
                <td colspan="4"><el-form-item label="" prop="Tp13">
            <input v-model="ruleForm.Tp13"  type="text" id="Tp13" style="height: 30px;">
        </el-form-item></td>
                <td colspan="6">校准方程（Y—真实值，X—显示值）</td>
            </tr>
            <tr>
                <td colspan="2">出厂编号</td>
                <td colspan="4"><el-form-item label="" prop="Tp14">
            <input v-model="ruleForm.Tp14"  type="text" id="Tp14" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2">斜率</td>
                <td colspan="2">截距</td>
                <td colspan="2">相关系数</td>
            </tr>
            <tr>
                <td colspan="2">上次校准日期</td>
                <td colspan="4"><el-form-item label="" prop="Dt9">
            <el-date-picker v-model="ruleForm.Dt9" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item>
                    
                </td>
                <td colspan="2"><el-form-item label="" prop="Tp15">
            <input v-model="ruleForm.Tp15"  type="text" id="Tp15" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="Tp16">
            <input v-model="ruleForm.Tp16"  type="text" id="Tp16" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="Tp17">
            <input v-model="ruleForm.Tp17"  type="text" id="Tp17" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td colspan="2">下次校准日期</td>
                <td colspan="4"><el-form-item label="" prop="Dt10">
             <el-date-picker v-model="ruleForm.Dt10" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item>
                   
                </td>
                <td colspan="6"> </td>
            </tr>
            <tr>
                <td colspan="12">压力校准结果</td>
            </tr>
            <tr>
                <td colspan="6">参考气压计的读数</td>
                <td colspan="6">传感器的读数</td>
            </tr>
            <tr>
                <td colspan="3">直接读取的标准读数</td>
                <td colspan="3">已修正的标准值*</td>
                <td colspan="3">校准前</td>
                <td colspan="3">校准后</td>
            </tr>
            <tr>
                <td colspan="3"><el-form-item label="" prop="Tp18">
            <input v-model="ruleForm.Tp18"  type="text" id="Tp18" style="height: 30px;">
        </el-form-item></td>
                <td colspan="3"><el-form-item label="" prop="Tp19">
            <input v-model="ruleForm.Tp19"  type="text" id="Tp19" style="height: 30px;">
        </el-form-item></td>
                <td colspan="3"><el-form-item label="" prop="Tp20">
            <input v-model="ruleForm.Tp20"  type="text" id="Tp20" style="height: 30px;">
        </el-form-item></td>
                <td colspan="3"><el-form-item label="" prop="Tp21">
            <input v-model="ruleForm.Tp21"  type="text" id="Tp21" style="height: 30px;">
        </el-form-item></td>
            </tr>
        </tbody></table>

        <table class="rpt">
            <tbody><tr>
                <td colspan="5">KO值检查</td>
            </tr>
            <tr>
                <td>正常范围</td>
                <td>原始值</td>
                <td>检查值</td>
                <td>误差</td>
                <td>异常时处理记录</td>
            </tr>
            <tr>
                <td>≤±2.5%</td>
                <td><el-form-item label="" prop="Tp22">
            <input v-model="ruleForm.Tp22"  type="text" id="Tp22" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="Tp23">
           <input v-model="ruleForm.Tp23"  type="text" id="Tp23" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="Tp24">
            <input v-model="ruleForm.Tp24"  type="text" id="Tp24" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="Tp25">
            <input v-model="ruleForm.Tp25"  type="text" id="Tp25" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td colspan="5" style="text-align:left;">
                   注:* 对于参考温度计的读数，已修正的标准值=直接读取的标准读数+示值修正量；<br/>
                   对于参考气压计的读数，已修正的标准值=直接读取的标准读数X斜率+截距。
                </td>
            </tr>
              <tr>
                <td colspan="5">备注:<el-form-item label="" prop="Remark">
            <textarea v-model="ruleForm.Remark" style="width: 90%" id="Remark"></textarea>
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