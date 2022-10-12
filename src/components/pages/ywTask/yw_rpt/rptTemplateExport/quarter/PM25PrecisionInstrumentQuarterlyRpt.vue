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

        <table id="topTable" style="border-bottom: none;">
            <tbody>
            <tr>
                <td>仪器型号</td>
                <td><el-form-item label="" prop="DeviceModel">
            <input v-model="ruleForm.DeviceModel"  type="text" id="DeviceModel" style="height: 30px;">
        </el-form-item></td>
                <td>仪器编号</td>
                <td><el-form-item label="" prop="DeviceNo">
            <input v-model="ruleForm.DeviceNo"  type="text" id="DeviceNo" style="height: 30px;">
        </el-form-item></td>
                <td>检查时间</td>
                <td><el-form-item label="" prop="SDateTime">
            <el-date-picker v-model="ruleForm.SDateTime" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            </tr>
            </tbody>
        </table>

        <table id="middleTable" style="border-bottom: none;">
            <tbody><tr>
                <td rowspan="4">质控设备信息</td>
                <td>设备名称</td>
                <td>型号</td>
                <td>编号</td>

                <td colspan="2">检定日期</td>
            </tr>
            <tr>
                <td>流量计</td>
                <td><el-form-item label="" prop="LlModel">
            <input v-model="ruleForm.LlModel"  type="text" id="LlModel" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="LlznNo">
            <input v-model="ruleForm.LlznNo"  type="text" id="LlznNo" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="LljdTime">
            <el-date-picker v-model="ruleForm.LljdTime" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            </tr>
            <tr>
                <td>温度计</td>
                <td><el-form-item label="" prop="WdModel">
            <input v-model="ruleForm.WdModel"  type="text" id="WdModel" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="WdznNo">
            <input v-model="ruleForm.WdznNo"  type="text" id="WdznNo" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="WdjdTime">
            <el-date-picker v-model="ruleForm.WdjdTime" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            </tr>
            <tr>
                <td>气压计</td>
                <td><el-form-item label="" prop="QyModel">
            <input v-model="ruleForm.QyModel"  type="text" id="QyModel" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="QyznNo">
            <input v-model="ruleForm.QyznNo"  type="text" id="QyznNo" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="QyjdTime">
            <el-date-picker v-model="ruleForm.QyjdTime" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            </tr>
        </tbody></table>

        <table id="detailsTable" style="border-bottom: none;">
            <tbody><tr>
                <td colspan="2">检查项目（单位）</td>
                <td>正常范围</td>
                <td>设定值</td>
                <td>检查值</td>
                <td>误差</td>
                <td>异常时处理记录</td>
            </tr>
            <tr>
                <td rowspan="7">每季度</td>
                <td>流量</td>
                <td>16.7±5% L/min</td>

                <td><el-form-item label="" prop="LlSdValue">
            <input v-model="ruleForm.LlSdValue"  type="text" id="LlSdValue" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="LlCheckValue">
            <input v-model="ruleForm.LlCheckValue"  type="text" id="LlCheckValue" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="LlError">
            <input v-model="ruleForm.LlError"  type="text" id="LlError" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="LlExRecord">
            <input v-model="ruleForm.LlExRecord"  type="text" id="LlExRecord" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>动态加热温度</td>
                <td>30℃~50℃</td>
                <td><el-form-item label="" prop="DtSdValue">
            <input v-model="ruleForm.DtSdValue"  type="text" id="DtSdValue" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="DtCheckValue">
            <input v-model="ruleForm.DtCheckValue"  type="text" id="DtCheckValue" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="DtError">
            <input v-model="ruleForm.DtError"  type="text" id="DtError" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="DtExRecord">
            <input v-model="ruleForm.DtExRecord"  type="text" id="DtExRecord" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>面板显示流量（±2%）</td>
                <td colspan="2">校准后面板显示值：<el-form-item label="" prop="JzMbxsValue">
            <input v-model="ruleForm.JzMbxsValue"  type="text" id="JzMbxsValue" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2">校准后实际测量值：<el-form-item label="" prop="JzSjclValue">
            <input v-model="ruleForm.JzSjclValue"  type="text" id="JzSjclValue" style="height: 30px;">
        </el-form-item></td>
                <td>说明：面板显示流量与实际测量值差别大于±2%需校准</td>
            </tr>
            <tr>
                <td>数据一致性检查</td>

                <td colspan="3"><el-form-item label="" prop="Normal">
            <input v-model="ruleForm.Normal"  type="radio" name="Consistency" value="1" id="Normal" checked="checked" style="width:10%;height: 15px;">正常
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="Normal">
            <input v-model="ruleForm.Normal"  type="radio" name="Consistency" value="0" id="Abnormal" style="width:10%;height: 15px;">异常
        </el-form-item></td>
            </tr>
            <tr>
                <td>时间检查</td>
                <td>设备时间</td>
                <td><el-form-item label="" prop="DeviceTime">
            <input v-model="ruleForm.DeviceTime"  type="text" id="DeviceTime" style="height: 30px;">
        </el-form-item></td>
                <td>数采仪时间</td>
                <td colspan="2"><el-form-item label="" prop="CjTime">
            <input v-model="ruleForm.CjTime"  type="text" id="CjTime" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>清洗部件</td>
                <td>进气管</td>
                <td><el-form-item label="" prop="Jqg">
            <input v-model="ruleForm.Jqg"  type="text" id="Jqg" style="height: 30px;">
        </el-form-item></td>
                <td>光电管和采样体</td>
                <td colspan="2"><el-form-item label="" prop="GdgCjt">
            <input v-model="ruleForm.GdgCjt"  type="text" id="GdgCjt" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>检漏</td>
                <td>泵开：<el-form-item label="" prop="Lk">
            <input v-model="ruleForm.Lk"  type="text" id="Lk" style="height: 30px;">
        </el-form-item></td>
                <td>泵关：<el-form-item label="" prop="Lg">
            <input v-model="ruleForm.Lg"  type="text" id="Lg" style="height: 30px;">
        </el-form-item></td>
                <td>净读数：<el-form-item label="" prop="Jds">
            <input v-model="ruleForm.Jds"  type="text" id="Jds" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2">是否合格：<el-form-item label="" prop="IsHg">
            <input v-model="ruleForm.IsHg"  type="text" id="IsHg" style="height: 30px;">
        </el-form-item></td>
            </tr>
        </tbody></table>


        <table style="border-bottom: none;">
            <tbody><tr>
                <td rowspan="2">校准膜（每季度）</td>
                <td rowspan="2">误差±2%</td>
                <td>标准膜片(ug/m³)</td>
                <td>测量值(ug/m³)</td>
                <td>测定误差</td>
                <td>是否校准</td>
                <td>校准后误差</td>
            </tr>
            <tr>

                <td><el-form-item label="" prop="jzd">
            <input v-model="ruleForm.jzd"  type="text" id="jzd" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="ysz">
            <input v-model="ruleForm.ysz"  type="text" id="ysz" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="clwc">
            <input v-model="ruleForm.clwc"  type="text" id="clwc" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="sfbz">
            <input v-model="ruleForm.sfbz"  type="text" id="sfbz" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="bzhwc">
            <input v-model="ruleForm.bzhwc"  type="text" id="bzhwc" style="height: 30px;">
        </el-form-item></td>
            </tr>
        </tbody></table>

        <table>
            <tbody><tr>
                <td>更换主机电池（每年）</td>
                <td>更换时间</td>

                <td><el-form-item label="" prop="UpdateTime">
            <input v-model="ruleForm.UpdateTime"  type="text" id="UpdateTime" style="height: 30px;">
        </el-form-item></td>
                <td>更换人员:</td>
                <td><el-form-item label="" prop="UpdateUsr">
            <input v-model="ruleForm.UpdateUsr"  type="text" id="UpdateUsr" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>

                <td colspan="5">备注:<el-form-item label="" prop="Remark">
            <textarea  v-model="ruleForm.Remark" style="width: 90%" id="Remark"></textarea>
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