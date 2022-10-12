<template>
  <div>
    <el-form id="ASEmergency" :model="ruleForm" ref="Form">
      <div style="float: left; margin: 5px 40px">
        <el-row>
          <el-col :span="11">
            <el-form-item label="巡检开始时间：" prop="yj_1">
              <el-date-picker
                v-model:value="ruleForm.yj_1"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择时间"
                :clearable="false"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2"> &nbsp; &nbsp; &nbsp; </el-col>
          <el-col :span="11">
            <el-form-item label="巡检结束时间：" prop="yj_2">
              <el-date-picker
                v-model:value="ruleForm.yj_2"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择时间"
                :clearable="false"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
      <table
        class="WordSection1"
        border="1"
        cellspacing="0"
        cellpadding="0"
        width="100%"
        style="border-collapse: collapse; border: none"
      >
        <tr style="height: 33.75pt">
          <td
            width="20%"
            style="
              width: 20.04%;
              border: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 33.75pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                >检修仪器名称、</span
              >
            </p>
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                >型号<span lang="EN-US">/</span>编号</span
              >
            </p>
          </td>
          <td
            width="79%"
            colspan="12"
            style="
              width: 79.94%;
              border: solid windowtext 1pt;
              border-left: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 33.75pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_1">
                  <input
                    v-model="ruleForm.rc_1"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
        </tr>
        <tr style="height: 21.65pt">
          <td
            width="20%"
            style="
              width: 20.04%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 21.65pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体">现象描述</span>
            </p>
          </td>
          <td
            width="79%"
            colspan="12"
            style="
              width: 79.94%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 21.65pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_2">
                  <input
                    v-model="ruleForm.rc_2"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
        </tr>
        <tr style="height: 36.5pt">
          <td
            width="20%"
            style="
              width: 20.04%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 36.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                >检修和维护内容</span
              >
            </p>
          </td>
          <td
            width="79%"
            colspan="12"
            style="
              width: 79.94%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 36.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_3">
                  <input
                    v-model="ruleForm.rc_3"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
        </tr>
        <tr style="height: 33.7pt">
          <td
            width="20%"
            style="
              width: 20.04%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 33.7pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                >更换零件、备件和 耗材名称</span
              >
            </p>
          </td>
          <td
            width="79%"
            colspan="12"
            style="
              width: 79.94%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 33.7pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_4">
                  <input
                    v-model="ruleForm.rc_4"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
        </tr>
        <tr style="height: 24.25pt">
          <td
            width="100%"
            colspan="13"
            style="
              width: 100%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.25pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <b
                ><span style="font-size: 12pt; font-family: 宋体"
                  >气态分析仪</span
                ></b
              >
            </p>
          </td>
        </tr>
        <tr style="height: 24.5pt">
          <td
            width="15%"
            style="
              width: 20.04%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体">校准点</span>
            </p>
          </td>
          <td
            width="15%"
            colspan="3"
            style="
              width: 20.18%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体">开始时间</span>
            </p>
          </td>
          <td
            width="15%"
            colspan="3"
            style="
              width: 15.68%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体">结束时间</span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体">标准值</span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体">响应值</span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体">校准值</span>
            </p>
          </td>
        </tr>
        <tr style="height: 31.2pt">
          <td
            width="15%"
            style="
              width: 20.04%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span
                lang="EN-US"
                style="font-size: 12pt; font-family: 宋体"
              ></span>
            </p>
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体">零点</span>
            </p>
          </td>
          <td
            width="15%"
            colspan="3"
            style="
              width: 20.18%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_5">
                  <input
                    v-model="ruleForm.rc_5"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="3"
            style="
              width: 15.68%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_6">
                  <input
                    v-model="ruleForm.rc_6"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_7">
                  <input
                    v-model="ruleForm.rc_7"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_8">
                  <input
                    v-model="ruleForm.rc_8"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_9">
                  <input
                    v-model="ruleForm.rc_9"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
        </tr>
        <tr style="height: 31.2pt">
          <td
            width="15%"
            style="
              width: 20.04%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                >&nbsp;</span
              >
            </p>
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                >满量程的<span lang="EN-US"> 10%</span></span
              >
            </p>
          </td>
          <td
            width="15%"
            colspan="3"
            style="
              width: 20.18%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_10">
                  <input
                    v-model="ruleForm.rc_10"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="3"
            style="
              width: 15.68%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_44">
                  <input
                    v-model="ruleForm.rc_44"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_11">
                  <input
                    v-model="ruleForm.rc_11"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_12">
                  <input
                    v-model="ruleForm.rc_12"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_13">
                  <input
                    v-model="ruleForm.rc_13"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
        </tr>
        <tr style="height: 31.2pt">
          <td
            width="15%"
            style="
              width: 20.04%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span
                lang="EN-US"
                style="font-size: 12pt; font-family: 宋体"
              ></span>
            </p>
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                >满量程的<span lang="EN-US"> 20%</span></span
              >
            </p>
          </td>
          <td
            width="20%"
            colspan="3"
            style="
              width: 20.18%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_14">
                  <input
                    v-model="ruleForm.rc_14"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="3"
            style="
              width: 15.68%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_15">
                  <input
                    v-model="ruleForm.rc_15"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="12%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_16">
                  <input
                    v-model="ruleForm.rc_16"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_17">
                  <input
                    v-model="ruleForm.rc_17"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_18">
                  <input
                    v-model="ruleForm.rc_18"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
        </tr>
        <tr style="height: 31.2pt">
          <td
            width="20%"
            style="
              width: 20.04%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                >&nbsp;</span
              >
            </p>
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                >满量程的<span lang="EN-US"> 40%</span></span
              >
            </p>
          </td>
          <td
            width="20%"
            colspan="3"
            style="
              width: 20.18%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_19">
                  <input
                    v-model="ruleForm.rc_19"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="3"
            style="
              width: 15.68%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_20">
                  <input
                    v-model="ruleForm.rc_20"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="12%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_21">
                  <input
                    v-model="ruleForm.rc_21"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_22">
                  <input
                    v-model="ruleForm.rc_22"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_23">
                  <input
                    v-model="ruleForm.rc_23"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
        </tr>
        <tr style="height: 31.2pt">
          <td
            width="20%"
            style="
              width: 20.04%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                >&nbsp;</span
              >
            </p>
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                >满量程的<span lang="EN-US"> 60%</span></span
              >
            </p>
          </td>
          <td
            width="20%"
            colspan="3"
            style="
              width: 20.18%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_24">
                  <input
                    v-model="ruleForm.rc_24"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="3"
            style="
              width: 15.68%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_45">
                  <input
                    v-model="ruleForm.rc_45"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="12%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_25">
                  <input
                    v-model="ruleForm.rc_25"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_26">
                  <input
                    v-model="ruleForm.rc_26"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_27">
                  <input
                    v-model="ruleForm.rc_27"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
        </tr>
        <tr style="height: 31.2pt">
          <td
            width="20%"
            style="
              width: 20.04%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                >&nbsp;</span
              >
            </p>
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                >满量程的<span lang="EN-US"> 80%</span></span
              >
            </p>
          </td>
          <td
            width="20%"
            colspan="3"
            style="
              width: 20.18%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_28">
                  <input
                    v-model="ruleForm.rc_28"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="3"
            style="
              width: 15.68%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_29">
                  <input
                    v-model="ruleForm.rc_29"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="12%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.2pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_30">
                  <input
                    v-model="ruleForm.rc_30"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_31">
                  <input
                    v-model="ruleForm.rc_31"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
          <td
            width="15%"
            colspan="2"
            style="
              width: 12.06%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 24.5pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                ><el-form-item label="" prop="rc_32">
                  <input
                    v-model="ruleForm.rc_32"
                    type="text"
                    id="AnC1"
                    style="height: 30px"
                  /> </el-form-item
              ></span>
            </p>
          </td>
        </tr>
        <tr style="height: 31.75pt">
          <td
            width="20%"
            style="
              width: 20.04%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.75pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                >&nbsp;</span
              >
            </p>
            <p class="MsoNormal" align="center" style="text-align: center">
              <span style="font-size: 12pt; font-family: 宋体"
                >多点线性校准结果</span
              >
            </p>
          </td>
          <td
            width="24%"
            colspan="4"
            style="
              width: 24.54%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.75pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                >&nbsp;</span
              >
            </p>
            <p class="MsoNormal" style="text-indent: 12pt">
              <span style="font-size: 12pt; font-family: 宋体"
                >斜率<span lang="EN-US">a</span>：<el-form-item
                  label=""
                  prop="rc_33"
                >
                  <textarea
                    v-model="ruleForm.rc_33"
                    id="DeviceChange_15"
                  ></textarea></el-form-item
              ></span>
            </p>
          </td>
          <td
            width="25%"
            colspan="5"
            style="
              width: 25.68%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.75pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                >&nbsp;</span
              >
            </p>
            <p class="MsoNormal" style="text-indent: 12pt">
              <span style="font-size: 12pt; font-family: 宋体"
                >截距<span lang="EN-US">b</span>：<el-form-item
                  label=""
                  prop="rc_34"
                >
                  <textarea
                    v-model="ruleForm.rc_34"
                    id="DeviceChange_15"
                  ></textarea></el-form-item
              ></span>
            </p>
          </td>
          <td
            width="29%"
            colspan="3"
            style="
              width: 29.7%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.75pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                >&nbsp;</span
              >
            </p>
            <p class="MsoNormal" style="text-indent: 12pt">
              <span style="font-size: 12pt; font-family: 宋体"
                >相关系数<span lang="EN-US">r</span>：<el-form-item
                  label=""
                  prop="rc_35"
                >
                  <textarea
                    v-model="ruleForm.rc_35"
                    id="DeviceChange_15"
                  ></textarea></el-form-item
              ></span>
            </p>
          </td>
        </tr>
        <tr style="height: 31.4pt">
          <td
            width="100%"
            colspan="13"
            style="
              width: 100%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 31.4pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <b
                ><span style="font-size: 12pt; font-family: 宋体"
                  >颗粒物浓度监测仪</span
                ></b
              >
            </p>
          </td>
        </tr>
        <tr style="height: 28.95pt">
          <td
            width="29%"
            colspan="3"
            style="
              width: 29.86%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 28.95pt;
            "
          >
            <p class="MsoNormal" style="text-indent: 11pt; line-height: 150%">
              <span
                style="font-size: 11pt; line-height: 150%; font-family: 宋体"
                >流量测量（<span lang="EN-US">16.7</span>±<span lang="EN-US"
                  >5% L/min</span
                >）</span
              >
            </p>
          </td>
          <td
            width="31%"
            colspan="5"
            style="
              width: 31.96%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 28.95pt;
            "
          >
            <p class="MsoNormal" style="text-indent: 12pt; line-height: 150%">
              <span
                style="font-size: 12pt; line-height: 150%; font-family: 宋体"
                >实测流量：<el-form-item label="" prop="rc_36">
                  <textarea
                    v-model="ruleForm.rc_36"
                    id="DeviceChange_15"
                  ></textarea></el-form-item
              ></span>
            </p>
          </td>
          <td
            width="38%"
            colspan="5"
            style="
              width: 38.16%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 28.95pt;
            "
          >
            <p class="MsoNormal" style="text-indent: 12pt; line-height: 150%">
              <span
                style="font-size: 12pt; line-height: 150%; font-family: 宋体"
                >偏差：<el-form-item label="" prop="rc_37">
                  <textarea
                    v-model="ruleForm.rc_37"
                    id="DeviceChange_15"
                  ></textarea></el-form-item
              ></span>
            </p>
          </td>
        </tr>
        <tr style="height: 28.95pt">
          <td
            width="20%"
            colspan="2"
            style="
              width: 20.66%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 28.95pt;
            "
          >
            <p class="MsoNormal" style="line-height: 150%">
              <span
                style="font-size: 11pt; line-height: 150%; font-family: 宋体"
                >膜片测量（误差±<span lang="EN-US">2%</span>）</span
              >
            </p>
          </td>
          <td
            width="29%"
            colspan="4"
            style="
              width: 29.22%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 28.95pt;
            "
          >
            <p class="MsoNormal" style="text-indent: 12pt; line-height: 150%">
              <span
                style="font-size: 12pt; line-height: 150%; font-family: 宋体"
                >标准膜片质量：<el-form-item label="" prop="rc_38">
                  <textarea
                    v-model="ruleForm.rc_38"
                    id="DeviceChange_15"
                  ></textarea></el-form-item
              ></span>
            </p>
          </td>
          <td
            width="30%"
            colspan="5"
            style="
              width: 30.86%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 28.95pt;
            "
          >
            <p class="MsoNormal" style="text-indent: 12pt; line-height: 150%">
              <span
                style="font-size: 12pt; line-height: 150%; font-family: 宋体"
                >实测膜片质量：<el-form-item label="" prop="rc_39">
                  <textarea
                    v-model="ruleForm.rc_39"
                    id="DeviceChange_15"
                  ></textarea>
                </el-form-item>
              </span>
            </p>
          </td>
          <td
            width="19%"
            colspan="2"
            style="
              width: 19.22%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 28.95pt;
            "
          >
            <p class="MsoNormal" style="text-indent: 12pt; line-height: 150%">
              <span
                style="font-size: 12pt; line-height: 150%; font-family: 宋体"
                >误差：<el-form-item label="" prop="rc_40">
                  <textarea
                    v-model="ruleForm.rc_40"
                    id="DeviceChange_15"
                  ></textarea></el-form-item
              ></span>
            </p>
          </td>
        </tr>
        <tr style="height: 28.95pt">
          <td
            width="20%"
            colspan="2"
            style="
              width: 20.66%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 28.95pt;
            "
          >
            <p class="MsoNormal" style="text-indent: 11pt; line-height: 150%">
              <span
                lang="EN-US"
                style="font-size: 11pt; line-height: 150%; font-family: 宋体"
                >KO</span
              ><span
                style="font-size: 11pt; line-height: 150%; font-family: 宋体"
                >值检查（</span
              ><span
                lang="EN-US"
                style="
                  font-size: 11pt;
                  line-height: 150%;
                  font-family: 'Arial', 'sans-serif';
                "
                >≤</span
              ><span
                lang="EN-US"
                style="
                  font-size: 11pt;
                  line-height: 150%;
                  font-family: 'Times New Roman', 'serif';
                "
                >±</span
              ><span
                lang="EN-US"
                style="
                  font-size: 11pt;
                  line-height: 150%;
                  font-family: 'Arial', 'sans-serif';
                "
                >2.5%</span
              ><span
                style="font-size: 11pt; line-height: 150%; font-family: 宋体"
                >）</span
              >
            </p>
          </td>
          <td
            width="29%"
            colspan="4"
            style="
              width: 29.22%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 28.95pt;
            "
          >
            <p class="MsoNormal" style="text-indent: 12pt; line-height: 150%">
              <span
                style="font-size: 12pt; line-height: 150%; font-family: 宋体"
                >原始值：<el-form-item label="" prop="rc_41">
                  <textarea
                    v-model="ruleForm.rc_41"
                    id="DeviceChange_15"
                  ></textarea></el-form-item
              ></span>
            </p>
          </td>
          <td
            width="30%"
            colspan="5"
            style="
              width: 30.86%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 28.95pt;
            "
          >
            <p class="MsoNormal" style="text-indent: 12pt; line-height: 150%">
              <span
                style="font-size: 12pt; line-height: 150%; font-family: 宋体"
                >检查值：<el-form-item label="" prop="rc_42">
                  <textarea
                    v-model="ruleForm.rc_42"
                    id="DeviceChange_15"
                  ></textarea></el-form-item
              ></span>
            </p>
          </td>
          <td
            width="19%"
            colspan="2"
            style="
              width: 19.22%;
              border-top: none;
              border-left: none;
              border-bottom: solid windowtext 1pt;
              border-right: solid windowtext 1pt;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 28.95pt;
            "
          >
            <p class="MsoNormal" style="text-indent: 12pt; line-height: 150%">
              <span
                style="font-size: 12pt; line-height: 150%; font-family: 宋体"
                >误差：<el-form-item label="" prop="rc_43">
                  <textarea
                    v-model="ruleForm.rc_43"
                    id="DeviceChange_15"
                  ></textarea></el-form-item
              ></span>
            </p>
          </td>
        </tr>
        <tr style="height: 90.8pt">
          <td
            width="100%"
            colspan="13"
            style="
              width: 100%;
              border: solid windowtext 1pt;
              border-top: none;
              background: white;
              padding: 0cm 0cm 0cm 0cm;
              height: 90.8pt;
            "
          >
            <p class="MsoNormal" align="left" style="text-align: left">
              <span style="font-size: 12pt; font-family: 宋体"
                >注：<span lang="EN-US">1</span
                >、对普通易损件维修后，应进行零<span lang="EN-US">/</span
                >跨校准；对关键部件维修后，应进行校准和仪器性能测试，测试合格后，方可投入使用。</span
              >
            </p>
            <p
              class="MsoNormal"
              align="left"
              style="text-align: left; text-indent: 24pt"
            >
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                >2</span
              ><span style="font-size: 12pt; font-family: 宋体"
                >、对所获校准曲线的检验指标应符合以下要求：</span
              >
            </p>
            <p class="MsoNormal" align="left" style="text-align: left">
              <span style="font-size: 12pt; font-family: 宋体"
                >相关系数（<span lang="EN-US">r</span>）<span lang="EN-US"
                  >&gt;0.999</span
                >；<span lang="EN-US">0.95</span>≤斜率（<span lang="EN-US"
                  >a</span
                >）≤<span lang="EN-US">1.05</span>；截距（<span lang="EN-US"
                  >b</span
                >）≤满量程±<span lang="EN-US">1%</span>；</span
              >
            </p>
            <p
              class="MsoNormal"
              align="left"
              style="text-align: left; text-indent: 24pt"
            >
              <span lang="EN-US" style="font-size: 12pt; font-family: 宋体"
                >3</span
              ><span style="font-size: 12pt; font-family: 宋体"
                >、每次故障检修完成后，应对检修、校准和测试情况进行记录并存档。</span
              >
            </p>
          </td>
        </tr>
        <tr height="0">
          <td width="179" style="border: none"></td>
          <td width="6" style="border: none"></td>
          <td width="82" style="border: none"></td>
          <td width="93" style="border: none"></td>
          <td width="39" style="border: none"></td>
          <td width="47" style="border: none"></td>
          <td width="54" style="border: none"></td>
          <td width="53" style="border: none"></td>
          <td width="55" style="border: none"></td>
          <td width="21" style="border: none"></td>
          <td width="94" style="border: none"></td>
          <td width="24" style="border: none"></td>
          <td width="149" style="border: none"></td>
        </tr>
      </table>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
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
