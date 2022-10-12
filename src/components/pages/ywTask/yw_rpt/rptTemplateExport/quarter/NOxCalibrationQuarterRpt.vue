<template>
  <div>
    <el-form id="ASEmergency" :model="ruleForm"  ref="Form"  >
      <div style="float:left;margin:5px 40px; " >
                   巡检开始时间：
                   <el-date-picker v-model="ruleForm.yj_1" type="datetime" value-format="yyyy-MM-dd HH:mm:ss"  placeholder="选择时间" :clearable=false></el-date-picker>
                    &nbsp; &nbsp; &nbsp; 
                    巡检结束时间：
                   <el-date-picker v-model="ruleForm.yj_2" type="datetime" value-format="yyyy-MM-dd HH:mm:ss"  placeholder="选择时间" :clearable=false></el-date-picker>
      </div>
      <table id="topTable">
       
        <tr>
          <td colspan="2">点位名称</td>
          <td><el-form-item label="" prop="rc_1">
            <input v-model="ruleForm.rc_1"  type="text" id="rc_1" style="height: 30px" />
        </el-form-item></td>
          <td colspan="2">审核日期</td>
          <td colspan="2"><el-form-item label="" prop="rc_2">
            <el-date-picker v-model="ruleForm.rc_2" type="date"   value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
        </tr>

        <tr>
          <td colspan="2">仪器型号及编号</td>
          <td><el-form-item label="" prop="rc_3">
            <input v-model="ruleForm.rc_3"  type="text" id="rc_3" style="height: 30px" />
        </el-form-item></td>
          <td colspan="2">室内温/湿度</td>
          <td colspan="2"><el-form-item label="" prop="rc_4">
            <input v-model="ruleForm.rc_4"  type="text" id="rc_4" style="height: 30px" />
        </el-form-item></td>
        </tr>
         
        <tr>
          <td colspan="2">审核时间</td>
          <td>
            <el-form-item label="" prop="rc_5">
              <input v-model="ruleForm.rc_5"  type="text" id="rc_5" style="height: 30px" />
              <!-- <el-time-picker v-model="ruleForm.rc_5"   format="HH:mm" value-format="HH:mm"  placeholder="选择时间" id="rc_5"></el-time-picker> -->
        </el-form-item>
          </td>
          <td colspan="2">标气编号/浓度</td>
          <td colspan="2"><el-form-item label="" prop="rc_6">
            <input v-model="ruleForm.rc_6"  type="text" id="rc_6" style="height: 30px" />
        </el-form-item></td>
        </tr>
      
        <tr>
          <td>通入仪器标气浓度</td>
          <td colspan="6"><el-form-item label="" prop="rc_7">
            <input v-model="ruleForm.rc_7"  type="text" id="rc_7" style="height: 30px" readonly/>
        </el-form-item></td>
        </tr>
         
        <tr>
            <td>仪器响应值(ppb)</td>
            <td><el-form-item label="" prop="rc_8">
            <input v-model="ruleForm.rc_8"  type="text" id="rc_8" style="height: 30px;">
        </el-form-item></td>
            <td><el-form-item label="" prop="rc_9">
            <input v-model="ruleForm.rc_9"  type="text" id="rc_9" style="height: 30px;">
        </el-form-item></td>
            <td><el-form-item label="" prop="rc_10">
            <input v-model="ruleForm.rc_10"  type="text" id="rc_10" style="height: 30px;">
        </el-form-item></td>
            <td><el-form-item label="" prop="rc_11">
            <input v-model="ruleForm.rc_11"  type="text" id="rc_11" style="height: 30px;">
        </el-form-item></td>
            <td><el-form-item label="" prop="rc_12">
            <input v-model="ruleForm.rc_12"  type="text" id="rc_12" style="height: 30px;">
        </el-form-item></td>
            <td><el-form-item label="" prop="rc_13">
            <input v-model="ruleForm.rc_13"  type="text" id="rc_13" style="height: 30px;">
        </el-form-item></td>
        </tr>
      
        <tr>
          <td>相对标准偏差（%）</td>
          <td colspan="6"><el-form-item label="" prop="rc_14">
            <input v-model="ruleForm.rc_14"  type="text" id="rc_14" style="height: 30px" />
        </el-form-item></td>
        </tr>

        <tr>
          <td>审核结果</td>  
           <td colspan="3"><el-form-item label="" prop="rc_15">
            <input v-model="ruleForm.rc_15"  type="radio" name="Consistency" value="1" id="rc_15" checked="checked" style="width:10%;height: 15px;">合格
        </el-form-item></td>
          <td colspan="3"><el-form-item label="" prop="rc_15">
            <input v-model="ruleForm.rc_15"  type="radio" name="Consistency" value="0" id="rc_16" style="width:10%;height: 15px;">不合格
        </el-form-item></td>        
        </tr>

        <tr>
          <td>备注</td>
          <td colspan="6" style="text-align:left;">
            1.精密度审核时，仪器示值的相对标准偏差应≤5%;<br/>
            2.仪器精密度审核时，现场仪器通入零气，待仪器示值达到零点附近时，通入仪器满量程20%的标气，待仪器读数稳定后，记录仪器示值，重复上述测试操作至少6次以上，计算出该仪器示值的相对标准偏差，来确定仪器的精密度。
          </td>
        </tr>

      </table>
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