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
      <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=660
        style='border-collapse:collapse;mso-padding-alt:0cm 5.4pt 0cm 5.4pt'>
        <tr style='mso-yfti-irow:1;height:14.85pt'>
        <td width=46 style='width:34.45pt;border:solid windowtext 1.0pt;mso-border-alt:
        solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:14.85pt'>
        <p class=MsoNormal align=center style='text-align:center;line-height:18.0pt;
        mso-line-height-rule:exactly'><b><span style='mso-bidi-font-size:10.5pt;
        font-family:宋体'>序号<span lang=EN-US></span></span></b></p>
        </td>
        <td width=156 style='width:117.05pt;border:solid windowtext 1.0pt;border-left:
        none;mso-border-top-alt:solid windowtext .5pt;mso-border-bottom-alt:solid windowtext .5pt;
        mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
        height:14.85pt'>
        <p class=MsoNormal align=center style='text-align:center;line-height:18.0pt;
        mso-line-height-rule:exactly'><b><span style='mso-bidi-font-size:10.5pt;
        font-family:宋体'>异常情况<span lang=EN-US></span></span></b></p>
        </td>
        <td width=77 style='width:57.75pt;border:solid windowtext 1.0pt;border-left:
        none;mso-border-top-alt:solid windowtext .5pt;mso-border-bottom-alt:solid windowtext .5pt;
        mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
        height:14.85pt'>
        <p class=MsoNormal style='line-height:18.0pt;mso-line-height-rule:exactly'><b><span
        style='mso-bidi-font-size:10.5pt;font-family:宋体'>发现时间<span lang=EN-US></span></span></b></p>
        </td>
        <td width=65 style='width:48.75pt;border:solid windowtext 1.0pt;border-left:
        none;mso-border-top-alt:solid windowtext .5pt;mso-border-bottom-alt:solid windowtext .5pt;
        mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
        height:14.85pt'>
        <p class=MsoNormal align=center style='text-align:center;line-height:18.0pt;
        mso-line-height-rule:exactly'><b><span style='mso-bidi-font-size:10.5pt;
        font-family:宋体'>发现人<span lang=EN-US></span></span></b></p>
        </td>
        <td width=173 style='width:129.9pt;border:solid windowtext 1.0pt;border-left:
        none;mso-border-top-alt:solid windowtext .5pt;mso-border-bottom-alt:solid windowtext .5pt;
        mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
        height:14.85pt'>
        <p class=MsoNormal align=center style='text-align:center;line-height:18.0pt;
        mso-line-height-rule:exactly'><b><span style='mso-bidi-font-size:10.5pt;
        font-family:宋体'>处置结果<span lang=EN-US></span></span></b></p>
        </td>
        <td width=143 style='width:107.05pt;border:solid windowtext 1.0pt;border-left:
        none;mso-border-top-alt:solid windowtext .5pt;mso-border-bottom-alt:solid windowtext .5pt;
        mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
        height:14.85pt'>
        <p class=MsoNormal align=center style='text-align:center;line-height:18.0pt;
        mso-line-height-rule:exactly'><b><span style='mso-bidi-font-size:10.5pt;
        font-family:宋体'>采样数据恢复<span lang=EN-US></span></span></b></p>
        <p class=MsoNormal align=center style='text-align:center;line-height:18.0pt;
        mso-line-height-rule:exactly'><b><span style='mso-bidi-font-size:10.5pt;
        font-family:宋体'>正常时间<span lang=EN-US></span></span></b></p>
        </td>
        </tr>
        <tr style='mso-yfti-irow:2;'>
        <td width=46 style='width:34.45pt;border:solid windowtext 1.0pt;border-top:
        none;mso-border-left-alt:solid windowtext .5pt;mso-border-bottom-alt:solid windowtext .5pt;
        mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
        '>
        <p class=MsoNormal align=center style='text-align:center;'><span
        lang=EN-US style='mso-bidi-font-size:10.5pt;;font-family:
        宋体'>1</span></p>
        </td>
        <td width=156 style='width:117.05pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
        padding:0cm 5.4pt 0cm 5.4pt;'>
        <p class=MsoNormal style='text-indent:5.25pt;mso-char-indent-count:.5;
        '><span lang=EN-US style='mso-bidi-font-size:10.5pt;
        font-family:宋体'><el-form-item label="" prop="rc_1">
            <input v-model="ruleForm.rc_1" type="text" id="AnC1" style="height: 30px;">
        </el-form-item></span></p>
        </td>
        <td width=77 style='width:57.75pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
        padding:0cm 5.4pt 0cm 5.4pt;'>
        <p class=MsoNormal align=center style='text-align:center;'><span
        style='mso-bidi-font-size:10.5pt;font-family:宋体'>　<span
        lang=EN-US><el-form-item label="" prop="rc_2">
            <input v-model="ruleForm.rc_2" type="text" id="AnC1" style="height: 30px;">
        </el-form-item></span></span></p>
        </td>
        <td width=65 style='width:48.75pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
        padding:0cm 5.4pt 0cm 5.4pt;'>
        <p class=MsoNormal align=center style='text-align:center;'><span
        lang=EN-US style='mso-bidi-font-size:10.5pt;font-family:
        宋体'><el-form-item label="" prop="rc_3">
            <input v-model="ruleForm.rc_3" type="text" id="AnC1" style="height: 30px;">
        </el-form-item></span></p>
        </td>
        <td width=173 style='width:129.9pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
        padding:0cm 5.4pt 0cm 5.4pt;'>
        <p class=MsoNormal align=center style='text-align:center;'><span
        style='mso-bidi-font-size:10.5pt;font-family:宋体'>　<span
        lang=EN-US><el-form-item label="" prop="rc_4">
            <input v-model="ruleForm.rc_4" type="text" id="AnC1" style="height: 30px;">
        </el-form-item></span></span></p>
        </td>
        <td width=143 style='width:107.05pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
        padding:0cm 5.4pt 0cm 5.4pt;'>
        <p class=MsoNormal align=center style='text-align:center;'><span
        lang=EN-US style='mso-bidi-font-size:10.5pt;font-family:
        宋体'><el-form-item label="" prop="rc_5">
            <input v-model="ruleForm.rc_5"  type="text" id="AnC1" style="height: 30px;">
        </el-form-item></span></p>
        </td>
        </tr>
        <tr style='mso-yfti-irow:3;'>
        <td width=46 style='width:34.45pt;border:solid windowtext 1.0pt;border-top:
        none;mso-border-left-alt:solid windowtext .5pt;mso-border-bottom-alt:solid windowtext .5pt;
        mso-border-right-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;
        '>
        <p class=MsoNormal align=center style='text-align:center;'><span
        lang=EN-US style='mso-bidi-font-size:10.5pt;font-family:
        宋体'>2</span></p>
        </td>
        <td width=156 style='width:117.05pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
        padding:0cm 5.4pt 0cm 5.4pt;'>
        <p class=MsoNormal style='text-indent:5.25pt;mso-char-indent-count:.5;
        '><span lang=EN-US style='mso-bidi-font-size:10.5pt;
        font-family:宋体'><el-form-item label="" prop="rc_6">
            <input v-model="ruleForm.rc_6" type="text" id="AnC1" style="height: 30px;">
        </el-form-item></span></p>
        </td>
        <td width=77 style='width:57.75pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
        padding:0cm 5.4pt 0cm 5.4pt;'>
        <p class=MsoNormal align=center style='text-align:center;'><span
        lang=EN-US style='mso-bidi-font-size:10.5pt;font-family:
        宋体'><el-form-item label="" prop="rc_7">
            <input v-model="ruleForm.rc_7" type="text" id="AnC1" style="height: 30px;">
        </el-form-item></span></p>
        </td>
        <td width=65 style='width:48.75pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
        padding:0cm 5.4pt 0cm 5.4pt;'>
        <p class=MsoNormal align=center style='text-align:center;'><span
        lang=EN-US style='mso-bidi-font-size:10.5pt;font-family:
        宋体'>
        <el-form-item label="" prop="rc_8">
            <input v-model="ruleForm.rc_8" type="text" id="AnC1" style="height: 30px;">
        </el-form-item>
        </span></p>
        </td>
        <td width=173 style='width:129.9pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
        padding:0cm 5.4pt 0cm 5.4pt;'>
        <p class=MsoNormal align=center style='text-align:center;'><span
        lang=EN-US style='mso-bidi-font-size:10.5pt;font-family:
        宋体'><el-form-item label="" prop="rc_9">
            <input v-model="ruleForm.rc_9" type="text" id="AnC1" style="height: 30px;">
        </el-form-item></span></p>
        </td>
        <td width=143 style='width:107.05pt;border-top:none;border-left:none;
        border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
        mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
        padding:0cm 5.4pt 0cm 5.4pt;'>
        <p class=MsoNormal align=center style='text-align:center;'><span
        lang=EN-US style='mso-bidi-font-size:10.5pt;font-family:
        宋体'>
        <el-form-item label="" prop="rc_10">
            <input v-model="ruleForm.rc_10" type="text" id="AnC1" style="height: 30px;">
        </el-form-item></span></p>
        </td>
        </tr>
        <tr style='mso-yfti-irow:4;mso-yfti-lastrow:yes;'>
        <td width=660 colspan=6 style='width:494.95pt;border:solid windowtext 1.0pt;
        border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
        padding:0cm 5.4pt 0cm 5.4pt;'>
        <p class=MsoNormal style='mso-line-height-rule:exactly'><span
        style='mso-bidi-font-size:10.5pt;font-family:宋体'>
        <el-form-item label="备注：" prop="rc_11">
          <textarea v-model="ruleForm.rc_11"  id="DeviceChange_15"></textarea>
        </el-form-item><span lang=EN-US></span></span></p>
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