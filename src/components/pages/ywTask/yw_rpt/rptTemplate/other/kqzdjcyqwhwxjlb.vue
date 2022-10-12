<template>
  <div>
     <el-form id="ASEmergency" :model="ruleForm" :rules="rules" ref="Form" :label-position="top" >
       <div style="float:left;margin:5px 40px; display:none;" >
            <el-row>
              <el-col :span="11">
                <el-form-item label="巡检时间：" prop="yj_1">
                  <el-date-picker v-model="ruleForm.yj_1" type="date" value-format="yyyy-MM-dd"  placeholder="选择时间" :clearable=false></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="2">
                  &nbsp; &nbsp; &nbsp;
              </el-col>
              <el-col :span="11">
                  <!-- <el-form-item label="巡检结束时间：" prop="yj_2">
                    <el-date-picker v-model="ruleForm.yj_2" type="date" value-format="yyyy-MM-dd"  placeholder="选择时间" :clearable=false></el-date-picker>
                  </el-form-item> -->
              </el-col>
          </el-row>
        </div>
          <table class=WordSection1 border=1 cellspacing=0 cellpadding=0 width="100%"
          style='border-collapse:collapse;border:none'>
          <tr style='height:33.75pt'>
            <td width="20%" style='width:20.04%;border:solid windowtext 1.0pt;background:
            white;padding:0cm 0cm 0cm 0cm;height:33.75pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>检修仪器名称、</span></p>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>型号<span lang=EN-US>/</span>编号</span></p>
            </td>
            <td width="79%" colspan=12 style='width:79.94%;border:solid windowtext 1.0pt;
            border-left:none;background:white;padding:0cm 0cm 0cm 0cm;height:33.75pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_1">
              <input v-model="ruleForm.rc_1"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
          </tr>
          <tr style='height:21.65pt'>
            <td width="20%" style='width:20.04%;border:solid windowtext 1.0pt;border-top:
            none;background:white;padding:0cm 0cm 0cm 0cm;height:21.65pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>现象描述</span></p>
            </td>
            <td width="79%" colspan=12 style='width:79.94%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:21.65pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_2">
             <input v-model="ruleForm.rc_2"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
          </tr>
          <tr style='height:36.5pt'>
            <td width="20%" style='width:20.04%;border:solid windowtext 1.0pt;border-top:
            none;background:white;padding:0cm 0cm 0cm 0cm;height:36.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>检修和维护内容</span></p>
            </td>
            <td width="79%" colspan=12 style='width:79.94%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:36.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_3">
             <input v-model="ruleForm.rc_3"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
          </tr>
          <tr style='height:33.7pt'>
            <td width="20%" style='width:20.04%;border:solid windowtext 1.0pt;border-top:
            none;background:white;padding:0cm 0cm 0cm 0cm;height:33.7pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>更换零件、备件和 耗材名称</span></p>
            </td>
            <td width="79%" colspan=12 style='width:79.94%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:33.7pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_4">
           <input v-model="ruleForm.rc_4"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
          </tr>
          <tr style='height:24.25pt'>
            <td width="100%" colspan=13 style='width:100.0%;border:solid windowtext 1.0pt;
            border-top:none;background:white;padding:0cm 0cm 0cm 0cm;height:24.25pt'>
            <p class=MsoNormal align=center style='text-align:center'><b><span
            style='font-size:12.0pt;font-family:宋体'>气态分析仪</span></b></p>
            </td>
          </tr>
          <tr style='height:24.5pt'>
            <td width="15%" style='width:20.04%;border:solid windowtext 1.0pt;border-top:
            none;background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>校准点</span></p>
            </td>
            <td width="15%" colspan=3 style='width:20.18%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>开始时间</span></p>
            </td>
            <td width="15%" colspan=3 style='width:15.68%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>结束时间</span></p>
            </td>
            <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>标准值</span></p>
            </td>
            <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>响应值</span></p>
            </td>
            <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>校准值</span></p>
            </td>
          </tr>
          <tr style='height:31.2pt'>
            <td width="15%" style='width:20.04%;border:solid windowtext 1.0pt;border-top:
            none;background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'></span></p>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>零点</span></p>
            </td>
            <td width="15%" colspan=3 style='width:20.18%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_5">
             <input v-model="ruleForm.rc_5"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=3 style='width:15.68%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_6">
             <input v-model="ruleForm.rc_6"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_7">
             <input v-model="ruleForm.rc_7"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_8">
            <input v-model="ruleForm.rc_8"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_9">
            <input v-model="ruleForm.rc_9"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
          </tr>
          <tr style='height:31.2pt'>
            <td width="15%" style='width:20.04%;border:solid windowtext 1.0pt;border-top:
            none;background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'>&nbsp;</span></p>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>满量程的<span lang=EN-US> 10%</span></span></p>
            </td>
            <td width="15%" colspan=3 style='width:20.18%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_10">
             <input v-model="ruleForm.rc_10"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=3 style='width:15.68%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_44">
             <input v-model="ruleForm.rc_44"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_11">
             <input v-model="ruleForm.rc_11"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_12">
             <input v-model="ruleForm.rc_12"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_13">
             <input v-model="ruleForm.rc_13"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
          </tr>
          <tr style='height:31.2pt'>
            <td width="15%" style='width:20.04%;border:solid windowtext 1.0pt;border-top:
            none;background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'></span></p>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>满量程的<span lang=EN-US> 20%</span></span></p>
            </td>
            <td width="20%" colspan=3 style='width:20.18%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_14">
            <input v-model="ruleForm.rc_14"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=3 style='width:15.68%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_15">
             <input v-model="ruleForm.rc_15"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="12%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_16">
            <input v-model="ruleForm.rc_16"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
             <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_17">
             <input v-model="ruleForm.rc_17"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_18">
             <input v-model="ruleForm.rc_18"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
          </tr>
          <tr style='height:31.2pt'>
            <td width="20%" style='width:20.04%;border:solid windowtext 1.0pt;border-top:
            none;background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'>&nbsp;</span></p>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>满量程的<span lang=EN-US> 40%</span></span></p>
            </td>
            <td width="20%" colspan=3 style='width:20.18%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_19">
            <input v-model="ruleForm.rc_19"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=3 style='width:15.68%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_20">
            <input v-model="ruleForm.rc_20"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="12%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_21">
             <input v-model="ruleForm.rc_21"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
             <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_22">
             <input v-model="ruleForm.rc_22"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_23">
             <input v-model="ruleForm.rc_23"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
          </tr>
          <tr style='height:31.2pt'>
            <td width="20%" style='width:20.04%;border:solid windowtext 1.0pt;border-top:
            none;background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'>&nbsp;</span></p>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>满量程的<span lang=EN-US> 60%</span></span></p>
            </td>
            <td width="20%" colspan=3 style='width:20.18%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_24">
             <input v-model="ruleForm.rc_24"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=3 style='width:15.68%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_45">
             <input v-model="ruleForm.rc_45"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="12%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_25">
             <input v-model="ruleForm.rc_25"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_26">
             <input v-model="ruleForm.rc_26"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_27">
             <input v-model="ruleForm.rc_27"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
          </tr>
          <tr style='height:31.2pt'>
            <td width="20%" style='width:20.04%;border:solid windowtext 1.0pt;border-top:
            none;background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'>&nbsp;</span></p>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>满量程的<span lang=EN-US> 80%</span></span></p>
            </td>
            <td width="20%" colspan=3 style='width:20.18%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_28">
            <input v-model="ruleForm.rc_28"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=3 style='width:15.68%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_29">
             <input v-model="ruleForm.rc_29"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="12%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.2pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_30">
             <input v-model="ruleForm.rc_30"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
             <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_31">
             <input v-model="ruleForm.rc_31"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
            <td width="15%" colspan=2 style='width:12.06%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:24.5pt'>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'><el-form-item label="" prop="rc_32">
             <input v-model="ruleForm.rc_32"  type="text" id="AnC1" style="height: 30px;">
             </el-form-item></span></p>
            </td>
          </tr>
          <tr style='height:31.75pt'>
            <td width="20%" style='width:20.04%;border:solid windowtext 1.0pt;border-top:
            none;background:white;padding:0cm 0cm 0cm 0cm;height:31.75pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'>&nbsp;</span></p>
            <p class=MsoNormal align=center style='text-align:center'><span
            style='font-size:12.0pt;font-family:宋体'>多点线性校准结果</span></p>
            </td>
            <td width="24%" colspan=4 style='width:24.54%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.75pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'>&nbsp;</span></p>
            <p class=MsoNormal style='text-indent:12.0pt'><span style='font-size:12.0pt;
            font-family:宋体'>斜率<span lang=EN-US>a</span>：<el-form-item label="" prop="rc_33">
             <textarea v-model="ruleForm.rc_33"  id="DeviceChange_15"></textarea>
             </el-form-item></span></p>
            </td>
            <td width="25%" colspan=5 style='width:25.68%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.75pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'>&nbsp;</span></p>
            <p class=MsoNormal style='text-indent:12.0pt'><span style='font-size:12.0pt;
            font-family:宋体'>截距<span lang=EN-US>b</span>：<el-form-item label="" prop="rc_34">
             <textarea v-model="ruleForm.rc_34"  id="DeviceChange_15"></textarea>
             </el-form-item></span></p>
            </td>
            <td width="29%" colspan=3 style='width:29.7%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:31.75pt'>
            <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
            style='font-size:12.0pt;font-family:宋体'>&nbsp;</span></p>
            <p class=MsoNormal style='text-indent:12.0pt'><span style='font-size:12.0pt;
            font-family:宋体'>相关系数<span lang=EN-US>r</span>：<el-form-item label="" prop="rc_35">
             <textarea v-model="ruleForm.rc_35"  id="DeviceChange_15"></textarea>
             </el-form-item></span></p>
            </td>
          </tr>
          <tr style='height:31.4pt'>
            <td width="100%" colspan=13 style='width:100.0%;border:solid windowtext 1.0pt;
            border-top:none;background:white;padding:0cm 0cm 0cm 0cm;height:31.4pt'>
            <p class=MsoNormal align=center style='text-align:center'><b><span
            style='font-size:12.0pt;font-family:宋体'>颗粒物浓度监测仪</span></b></p>
            </td>
          </tr>
          <tr style='height:28.95pt'>
            <td width="29%" colspan=3 style='width:29.86%;border:solid windowtext 1.0pt;
            border-top:none;background:white;padding:0cm 0cm 0cm 0cm;height:28.95pt'>
            <p class=MsoNormal style='text-indent:11.0pt;line-height:150%'><span
            style='font-size:11.0pt;line-height:150%;font-family:宋体'>流量测量（<span
            lang=EN-US>16.7</span>±<span lang=EN-US>5% L/min</span>）</span></p>
            </td>
            <td width="31%" colspan=5 style='width:31.96%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:28.95pt'>
            <p class=MsoNormal style='text-indent:12.0pt;line-height:150%'><span
            style='font-size:12.0pt;line-height:150%;font-family:宋体'>实测流量：<el-form-item label="" prop="rc_36">
             <textarea v-model="ruleForm.rc_36"  id="DeviceChange_15"></textarea>
             </el-form-item></span></p>
            </td>
            <td width="38%" colspan=5 style='width:38.16%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:28.95pt'>
            <p class=MsoNormal style='text-indent:12.0pt;line-height:150%'><span
            style='font-size:12.0pt;line-height:150%;font-family:宋体'>偏差：<el-form-item label="" prop="rc_37">
             <textarea v-model="ruleForm.rc_37"  id="DeviceChange_15"></textarea>
             </el-form-item></span></p>
            </td>
          </tr>
          <tr style='height:28.95pt'>
            <td width="20%" colspan=2 style='width:20.66%;border:solid windowtext 1.0pt;
            border-top:none;background:white;padding:0cm 0cm 0cm 0cm;height:28.95pt'>
            <p class=MsoNormal style='line-height:150%'><span style='font-size:11.0pt;
            line-height:150%;font-family:宋体'>膜片测量（误差±<span lang=EN-US>2%</span>）</span></p>
            </td>
            <td width="29%" colspan=4 style='width:29.22%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:28.95pt'>
            <p class=MsoNormal style='text-indent:12.0pt;line-height:150%'><span
            style='font-size:12.0pt;line-height:150%;font-family:宋体'>标准膜片质量：<el-form-item label="" prop="rc_38">
             <textarea v-model="ruleForm.rc_38"  id="DeviceChange_15"></textarea>
             </el-form-item></span></p>
            </td>
            <td width="30%" colspan=5 style='width:30.86%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:28.95pt'>
            <p class=MsoNormal style='text-indent:12.0pt;line-height:150%'><span
            style='font-size:12.0pt;line-height:150%;font-family:宋体'>实测膜片质量：<el-form-item label="" prop="rc_39">
             <textarea v-model="ruleForm.rc_39"  id="DeviceChange_15"></textarea>
             </el-form-item> </span></p>
            </td>
            <td width="19%" colspan=2 style='width:19.22%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:28.95pt'>
            <p class=MsoNormal style='text-indent:12.0pt;line-height:150%'><span
            style='font-size:12.0pt;line-height:150%;font-family:宋体'>误差：<el-form-item label="" prop="rc_40">
             <textarea v-model="ruleForm.rc_40"  id="DeviceChange_15"></textarea>
             </el-form-item></span></p>
            </td>
          </tr>
          <tr style='height:28.95pt'>
            <td width="20%" colspan=2 style='width:20.66%;border:solid windowtext 1.0pt;
            border-top:none;background:white;padding:0cm 0cm 0cm 0cm;height:28.95pt'>
            <p class=MsoNormal style='text-indent:11.0pt;line-height:150%'><span
            lang=EN-US style='font-size:11.0pt;line-height:150%;font-family:宋体'>KO</span><span
            style='font-size:11.0pt;line-height:150%;font-family:宋体'>值检查（</span><span
            lang=EN-US style='font-size:11.0pt;line-height:150%;font-family:"Arial","sans-serif"'>≤</span><span
            lang=EN-US style='font-size:11.0pt;line-height:150%;font-family:"Times New Roman","serif"'>±</span><span
            lang=EN-US style='font-size:11.0pt;line-height:150%;font-family:"Arial","sans-serif"'>2.5%</span><span
            style='font-size:11.0pt;line-height:150%;font-family:宋体'>）</span></p>
            </td>
            <td width="29%" colspan=4 style='width:29.22%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:28.95pt'>
            <p class=MsoNormal style='text-indent:12.0pt;line-height:150%'><span
            style='font-size:12.0pt;line-height:150%;font-family:宋体'>原始值：<el-form-item label="" prop="rc_41">
             <textarea v-model="ruleForm.rc_41"  id="DeviceChange_15"></textarea>
             </el-form-item></span></p>
            </td>
            <td width="30%" colspan=5 style='width:30.86%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:28.95pt'>
            <p class=MsoNormal style='text-indent:12.0pt;line-height:150%'><span
            style='font-size:12.0pt;line-height:150%;font-family:宋体'>检查值：<el-form-item label="" prop="rc_42">
            <textarea v-model="ruleForm.rc_42"  id="DeviceChange_15"></textarea>
             </el-form-item></span></p>
            </td>
            <td width="19%" colspan=2 style='width:19.22%;border-top:none;border-left:
            none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
            background:white;padding:0cm 0cm 0cm 0cm;height:28.95pt'>
            <p class=MsoNormal style='text-indent:12.0pt;line-height:150%'><span
            style='font-size:12.0pt;line-height:150%;font-family:宋体'>误差：<el-form-item label="" prop="rc_43">
             <textarea v-model="ruleForm.rc_43"  id="DeviceChange_15"></textarea>
             </el-form-item></span></p>
            </td>
          </tr>
          <tr style='height:90.8pt'>
            <td width="100%" colspan=13 style='width:100.0%;border:solid windowtext 1.0pt;
            border-top:none;background:white;padding:0cm 0cm 0cm 0cm;height:90.8pt'>
            <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
            12.0pt;font-family:宋体'>注：<span lang=EN-US>1</span>、对普通易损件维修后，应进行零<span
            lang=EN-US>/</span>跨校准；对关键部件维修后，应进行校准和仪器性能测试，测试合格后，方可投入使用。</span></p>
            <p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt'><span
            lang=EN-US style='font-size:12.0pt;font-family:宋体'>2</span><span
            style='font-size:12.0pt;font-family:宋体'>、对所获校准曲线的检验指标应符合以下要求：</span></p>
            <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
            12.0pt;font-family:宋体'>相关系数（<span lang=EN-US>r</span>）<span lang=EN-US>&gt;0.999</span>；<span
            lang=EN-US>0.95</span>≤斜率（<span lang=EN-US>a</span>）≤<span lang=EN-US>1.05</span>；截距（<span
            lang=EN-US>b</span>）≤满量程±<span lang=EN-US>1%</span>；</span></p>
            <p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt'><span
            lang=EN-US style='font-size:12.0pt;font-family:宋体'>3</span><span
            style='font-size:12.0pt;font-family:宋体'>、每次故障检修完成后，应对检修、校准和测试情况进行记录并存档。</span></p>
            </td>
          </tr>
          <tr height=0>
            <td width=179 style='border:none'></td>
            <td width=6 style='border:none'></td>
            <td width=82 style='border:none'></td>
            <td width=93 style='border:none'></td>
            <td width=39 style='border:none'></td>
            <td width=47 style='border:none'></td>
            <td width=54 style='border:none'></td>
            <td width=53 style='border:none'></td>
            <td width=55 style='border:none'></td>
            <td width=21 style='border:none'></td>
            <td width=94 style='border:none'></td>
            <td width=24 style='border:none'></td>
            <td width=149 style='border:none'></td>
          </tr>
          </table>
    </el-form>
  </div>
</template>
<script>
export default {
    props: {
      formData: Object,
      btnType: String,
    },
    components: {},
    data() {
      return {
          dataContent: "",
          ruleForm: {  
                "yj_1": "",
                "yj_2": "",
                "rc_1": "",
                "rc_2": "",
                "rc_3": "",
                "rc_4": "",
                "rc_5": "",
                "rc_6": "",
                "rc_7": "",
                "rc_8": "",
                "rc_9": "",
                "rc_10": "",
                "rc_11": "",
                "rc_12": "",
                "rc_13": "",
                "rc_14": "",
                "rc_15": "",
                "rc_16": "",
                "rc_17": "",
                "rc_18": "",
                "rc_19": "",
                "rc_20": "",
                "rc_21": "",
                "rc_22": "",
                "rc_23": "",
                "rc_24": "",
                "rc_25": "",
                "rc_26": "",
                "rc_27": "",
                "rc_28": "",
                "rc_29": "",
                "rc_30": "",
                "rc_31": "",
                "rc_32": "",
                "rc_33": "",
                "rc_34": "",
                "rc_35": "",
                "rc_36": "",
                "rc_37": "",
                "rc_38": "",
                "rc_39": "",
                "rc_40": "",
                "rc_41": "",
                "rc_42": "",
                "rc_43": "",
                "rc_44": "",
                "rc_45": "",
          },
          rules: {
            yj_1:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            yj_2:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_1:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_2:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_3:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_4:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_5:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_6:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_7:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_8:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_9:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_10:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_11:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_12:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_13:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_14:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_15:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_16:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_17:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_18:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_19:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_20:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_21:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_22:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_23:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_24:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_25:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_26:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_27:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_28:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_29:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_30:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_31:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_32:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_33:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_34:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_35:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_36:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_37:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_38:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_39:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_40:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_41:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_42:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_43:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_44:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_45:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }]
          },
      };
  },
    // computed: {
    //     formSubmitData: function () {
    //         return this.$emit("formSubmit",this.Qs.stringify(this.ruleForm));
    //     }
    // },
    watch: {
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
        formData(val, oldVal) {
          if (val.content != null) {
              this.ruleForm = JSON.parse(val.content);
          }
      },
  },
  mounted() {
     this.getNowTime();
  },
    methods: {
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
    };
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