<template>
  <div style="overflow: auto; text-align: center">
    <div class="topbar2">
      <template>
        <input
          id="title"
          v-model="DateT"
          type="text"
          value=""
          style="text-align: center; height: 30px"
        />
        <el-select v-model:value="DateT" placeholder="请选择" @change="change">
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.dateT"
            :value="item.dateT"
          >
          </el-option>
        </el-select>
      </template>
      <el-button size="small" @click="rpt_sava" type="primary">保存</el-button>
      <el-button
        size="small"
        type="primary"
        id="btnExportPDF"
        class="el-button--iconButton"
        @click="handleExportPDF"
        >导出Word</el-button
      >
    </div>
    <div id="exportWord">
      <table
        width="2160"
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="width: 1620pt; border-collapse: collapse; table-layout: fixed"
      >
        <col width="72" span="30" style="width: 54pt" />
        <tr height="42" style="height: 31.5pt">
          <td
            class="xl66"
            height="42"
            width="2160"
            colspan="30"
            style="
              height: 31.5pt;
              width: 1620pt;
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
          >
            <input
              id="title"
              v-model="ruleForm.title"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
        </tr>
        <tr height="25" style="height: 18.75pt">
          <td
            class="xl67"
            height="25"
            colspan="30"
            style="
              height: 18.75pt;
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
          ></td>
        </tr>
        <tr height="19" style="height: 14.25pt">
          <td
            class="xl69"
            height="19"
            colspan="4"
            style="
              height: 14.25pt;
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            鄂东北<span style="mso-spacerun: yes">&nbsp; </span>田志杰
          </td>
          <td class="xl69"></td>
          <td class="xl69"></td>
          <td
            class="xl69"
            colspan="4"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            鄂东南<span style="mso-spacerun: yes">&nbsp;&nbsp; </span>周杨
          </td>
          <td class="xl69"></td>
          <td class="xl69"></td>
          <td
            class="xl69"
            colspan="4"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            鄂中南<span style="mso-spacerun: yes">&nbsp;&nbsp; </span>唐伟林
          </td>
          <td class="xl69"></td>
          <td class="xl69"></td>
          <td
            class="xl69"
            colspan="4"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            鄂西南<span style="mso-spacerun: yes">&nbsp;&nbsp; </span>姜小腾
          </td>
          <td class="xl69"></td>
          <td class="xl69"></td>
          <td
            class="xl69"
            colspan="6"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            鄂西北<span style="mso-spacerun: yes">&nbsp;&nbsp; </span>刘立
          </td>
        </tr>
        <tr height="19" style="height: 14.25pt">
          <td
            class="xl69"
            height="38"
            rowspan="2"
            style="
              height: 28.5pt;
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            城市
          </td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            站点名称
          </td>
          <td
            class="xl70"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            上周巡检
          </td>
          <td
            class="xl70"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            本周巡检
          </td>
          <td
            class="xl70"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            本周故障时间
          </td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            是否故障
          </td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            城市
          </td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            站点名称
          </td>
          <td
            class="xl70"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            上周巡检
          </td>
          <td
            class="xl70"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            本周巡检
          </td>
          <td
            class="xl70"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            本周故障时间
          </td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            是否故障
          </td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            城市
          </td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            站点名称
          </td>
          <td
            class="xl70"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            上周巡检
          </td>
          <td
            class="xl70"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            本周巡检
          </td>
          <td
            class="xl70"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            本周故障时间
          </td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            是否故障
          </td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            城市
          </td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            站点名称
          </td>
          <td
            class="xl70"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            上周巡检
          </td>
          <td
            class="xl70"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            本周巡检
          </td>
          <td
            class="xl70"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            本周故障时间
          </td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            是否故障
          </td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            城市
          </td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            站点名称
          </td>
          <td
            class="xl70"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            上周巡检
          </td>
          <td
            class="xl70"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            本周巡检
          </td>
          <td
            class="xl70"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            本周故障时间
          </td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            是否故障
          </td>
        </tr>
        <tr height="19" style="height: 14.25pt" />
        <tr height="30" style="height: 22.5pt">
          <td
            class="xl69"
            height="330"
            rowspan="11"
            style="
              height: 247.5pt;
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            武汉
          </td>
          <td class="xl72" x:str>江汉区后襄河南路站</td>
          <td class="xl73">
            <input
              id="inp_1"
              v-model="ruleForm.inp_1"
              type="text"
              value="1"
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              id="inp_2"
              v-model="ruleForm.inp_2"
              type="text"
              value="2"
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td
            class="xl69"
            rowspan="9"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            黄冈
          </td>
          <td class="xl72" x:str>英山县鸡鸣尖站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_3"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_4"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            天门
          </td>
          <td class="xl72" x:str>天门市陆羽大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_5"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_6"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td
            class="xl70"
            rowspan="10"
            style="border-right: 0.5pt solid windowtext; border-bottom: none"
            x:str
          >
            恩施
          </td>
          <td class="xl72" x:str>巴东县北京大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_7"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_8"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td
            class="xl106"
            rowspan="9"
            style="border-right: 0.5pt solid windowtext; border-bottom: none"
            x:str
          >
            襄阳
          </td>
          <td class="xl95" x:str>谷城县粉阳路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_9"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_10"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>江汉区大兴路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_11"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_12"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>武穴市郭祥站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_13"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_14"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>天门市钟惺大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_15"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_16"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>咸丰县营屏寨站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_17"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_18"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl118" x:str>
            谷城县银城大<span style="display: none">道站</span>
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_19"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_20"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>硚口区解放大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_21"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_22"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>浠水县车站路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_23"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_24"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            仙桃
          </td>
          <td class="xl72" x:str>仙桃沔阳大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_25"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_26"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>建始县船儿岛站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_27"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_28"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl95" x:str>宜城市振兴大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_29"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_30"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>洪山区鲁磨路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_31"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_32"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>红安县发展大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_33"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_34"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl95" x:str>仙桃市工业园站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_35"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_36"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>鹤峰县连升路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_37"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_38"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl95" x:str>保康县清溪路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_39"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_40"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>东西湖区环湖路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_41"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_42"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>罗田县城南站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_43"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_44"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            潜江
          </td>
          <td class="xl72" x:str>潜江市潜阳中路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_45"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_46"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>鹤峰县后坝站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_47"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_48"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl95" x:str>老河口市胜利路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_49"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_50"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl119"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>黄陂区黄陂大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_51"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_52"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>黄梅县迎宾大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_53"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_54"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>潜江市章华南路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_55"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_56"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>宣恩县沿河路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_57"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_58"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl95" x:str>老河口市民主路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_59"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_60"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl119"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>江夏区纸坊大街站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_61"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_62"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>麻城市金桥大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_63"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_64"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td
            class="xl69"
            rowspan="5"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            荆门
          </td>
          <td class="xl72" x:str>漳河新区凤袁路站</td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_65"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_66"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>来凤县半边城站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_67"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_68"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl95" x:str>枣阳市朝阳路站</td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_69"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_70"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>新洲区红旗街站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_71"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_72"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>团风县广场路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_73"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_74"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>京山县轻机大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_75"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_76"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>利川市腾龙大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_77"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_78"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl120" x:str>枣阳市人民路站</td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_79"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_80"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>汉南区纱帽正街站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_81"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_82"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>蕲春县豁口路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_83"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_84"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>沙洋县荷花大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_85"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_86"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>利川市滨江北路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_87"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_88"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl95" x:str>南漳县学府路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_89"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_90"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>化工区化工大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_91"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_92"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td
            class="xl69"
            rowspan="3"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            黄石
          </td>
          <td class="xl72" x:str>阳新县东坡路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_93"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_94"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>钟祥市长寿路站</td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_95"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_96"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>宣恩县三河沟站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_97"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_98"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl107"></td>
          <td class="xl72" x:str>宜城市委党校站</td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_99"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_100"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>蔡甸区汉阳大街站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_101"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_102"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>大冶市湛月路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_103"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_104"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>屈家岭金色农谷站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_105"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_106"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td
            class="xl69"
            rowspan="11"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            宜昌
          </td>
          <td class="xl72" x:str>宜都市园林大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_107"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_108"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td
            class="xl106"
            rowspan="2"
            style="border-right: 0.5pt solid windowtext; border-bottom: none"
            x:str
          >
            随州
          </td>
          <td class="xl95" x:str>随县民主路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_109"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_110"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td
            class="xl69"
            height="240"
            rowspan="8"
            style="
              height: 180pt;
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            孝感
          </td>
          <td class="xl72" x:str>孝昌县开发区站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_111"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_112"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>大冶市乾塔路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_113"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_114"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td
            class="xl70"
            rowspan="11"
            style="border-right: 0.5pt solid windowtext; border-bottom: none"
            x:str
          >
            荆州
          </td>
          <td class="xl72" x:str>监利县章华大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_115"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_116"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>宜都市杨守敬大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_117"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_118"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl121" x:str>广水滨河东路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_119"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_120"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>孝昌县桃源路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_121"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_122"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td
            class="xl69"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            鄂州
          </td>
          <td class="xl72" x:str>华容区体育路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_123"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_124"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>监利县民主路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_125"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_126"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl95" x:str>五峰县西北路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_127"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_128"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td
            class="xl122"
            rowspan="13"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            十堰
          </td>
          <td class="xl72" x:str>丹江口市沙坨营路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_129"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_130"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>汉川滨湖大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_131"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_132"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>梁子湖区青峰路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_133"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_134"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>江陵县江陵大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_135"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_136"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl95" x:str>长阳县东峰岭路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_137"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_138"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>丹江口市武当大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_139"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_140"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>安陆市涢水路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_141"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_142"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td
            class="xl70"
            rowspan="6"
            style="border-right: 0.5pt solid windowtext; border-bottom: none"
            x:str
          >
            咸宁
          </td>
          <td class="xl72" x:str>通山县隆鼎丽都站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_143"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_144"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>石首市笔架山路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_145"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_146"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl95" x:str>兴山丰邑大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_147"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_148"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>房县房陵东大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_149"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_150"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>安陆市府东南路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_151"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_152"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>崇阳县大觉路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_153"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_154"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>公安县油江路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_155"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_156"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl95" x:str>秭归县屈原路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_157"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_158"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>房县诗经大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_159"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_160"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>应城市家和小区站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_161"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_162"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>通城县银山广场站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_163"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_164"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>公安县孱陵大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_165"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_166"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl95" x:str>当阳市友谊路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_167"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_168"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>茅箭区北京路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_169"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_170"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl123"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>云梦县龙岗路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_171"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_172"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>赤壁市陆水湖大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_173"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_174"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl96" x:str>
            松滋市白云路<span style="display: none">站</span>
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_175"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_176"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl105"></td>
          <td class="xl75"></td>
          <td class="xl95" x:str>当阳市锦屏大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_177"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_178"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>武当山特区沿河路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_179"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_180"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>大悟县前进大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_181"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_182"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>嘉鱼县滨湖路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_183"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_184"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>洪湖市爱国路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_185"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_186"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl95" x:str>枝江市江汉大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_187"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_188"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>郧西县环城西路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_189"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_190"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td
            class="xl77"
            height="218"
            colspan="6"
            rowspan="8"
            style="height: 163.5pt; border-right: none; border-bottom: none"
          ></td>
          <td class="xl78" x:str>咸安区东门村站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_191"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_192"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl97"></td>
          <td class="xl98"></td>
          <td class="xl72" x:str>洪湖市宏伟北路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_193"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_194"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl95" x:str>枝江市体育路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_195"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_196"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>郧西县五龙河大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_197"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_198"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td
            class="xl79"
            colspan="6"
            rowspan="7"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
          ></td>
          <td class="xl96" x:str>
            松滋市环湖路<span style="display: none">站</span>
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_199"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_200"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl105"></td>
          <td class="xl75"></td>
          <td class="xl95" x:str>远安县嫘祖路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_201"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_202"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>郧阳区柳新路站</td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_203"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_204"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl72" x:str>江陵县中兴路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_205"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_206"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl97"></td>
          <td class="xl98"></td>
          <td
            class="xl106"
            rowspan="3"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            神农架
          </td>
          <td class="xl95" x:str>神农架林区神农大道站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_207"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_208"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>张湾区西城路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_209"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_210"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td
            class="xl69"
            colspan="6"
            rowspan="5"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
          ></td>
          <td class="xl95" x:str>神农架林区博物馆路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_211"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_212"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>竹山县体育路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_213"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_214"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td class="xl95" x:str>神农架林区土家包站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_215"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_216"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
          <td class="xl72" x:str>竹溪县东风路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_217"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl74">
            <input
              v-model="ruleForm.inp_218"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="30" style="height: 22.5pt">
          <td
            class="xl109"
            colspan="6"
            rowspan="3"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
          ></td>
          <td class="xl72" x:str>竹山县柿湾路站</td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_219"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73">
            <input
              v-model="ruleForm.inp_220"
              type="text"
              value=""
              style="text-align:center;height: 30px;width：100%;border:none;"
            />
          </td>
          <td class="xl73"></td>
          <td class="xl75"></td>
        </tr>
        <tr height="19" style="height: 14.25pt">
          <td
            class="xl124"
            colspan="6"
            rowspan="6"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
          ></td>
        </tr>
        <tr height="19" style="height: 14.25pt" />
        <tr height="19" style="height: 14.25pt">
          <td
            class="xl85"
            height="38"
            colspan="24"
            rowspan="2"
            style="
              height: 28.5pt;
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            各区周巡检完成率
          </td>
        </tr>
        <tr height="19" style="height: 14.25pt" />
        <tr height="19" style="height: 14.25pt">
          <td
            class="xl89"
            height="19"
            colspan="3"
            style="
              height: 14.25pt;
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            鄂东北田志杰（19个）
          </td>
          <td
            class="xl92"
            colspan="3"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            鄂东南周杨（20个）
          </td>
          <td
            class="xl89"
            colspan="3"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            鄂中南唐伟林（22个）
          </td>
          <td
            class="xl103"
            colspan="3"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            鄂西南姜小腾（24个）
          </td>
          <td
            class="xl92"
            colspan="3"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            鄂西北刘立（25个）
          </td>
          <td
            class="xl104"
            colspan="9"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
          ></td>
        </tr>
        <tr height="19" style="height: 14.25pt">
          <td
            class="xl93"
            height="19"
            colspan="3"
            style="
              height: 14.25pt;
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
          ></td>
          <td
            class="xl93"
            colspan="3"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
          ></td>
          <td
            class="xl93"
            colspan="3"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
          ></td>
          <td
            class="xl93"
            colspan="3"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
          ></td>
          <td
            class="xl93"
            colspan="3"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
          ></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      DateT: '2021-43',
      options: [],
      dataContent: '',
      ruleForm: {},
      rules: {
        title: '',
        ipt_1: '',
        ipt_2: '',
        ipt_3: '',
        ipt_4: '',
        ipt_5: '',
        ipt_6: '',
        ipt_7: '',
        ipt_8: '',
        ipt_9: '',
        ipt_10: '',
        ipt_11: '',
        ipt_12: '',
        ipt_13: '',
        ipt_14: '',
        ipt_15: '',
        ipt_16: '',
        ipt_17: '',
        ipt_18: '',
        ipt_19: '',
        ipt_20: '',
        ipt_21: '',
        ipt_22: '',
        ipt_23: '',
        ipt_24: '',
        ipt_25: '',
        ipt_26: '',
        ipt_27: '',
        ipt_28: '',
        ipt_29: '',
        ipt_30: '',
        ipt_31: '',
        ipt_32: '',
        ipt_33: '',
        ipt_34: '',
        ipt_35: '',
        ipt_36: '',
        ipt_37: '',
        ipt_38: '',
        ipt_39: '',
        ipt_40: '',
        ipt_41: '',
        ipt_42: '',
        ipt_43: '',
        ipt_44: '',
        ipt_45: '',
        ipt_46: '',
        ipt_47: '',
        ipt_48: '',
        ipt_49: '',
        ipt_50: '',
        ipt_51: '',
        ipt_52: '',
        ipt_53: '',
        ipt_54: '',
        ipt_55: '',
        ipt_56: '',
        ipt_57: '',
        ipt_58: '',
        ipt_59: '',
        ipt_60: '',
        ipt_61: '',
        ipt_62: '',
        ipt_63: '',
        ipt_64: '',
        ipt_65: '',
        ipt_66: '',
        ipt_67: '',
        ipt_68: '',
        ipt_69: '',
        ipt_70: '',
        ipt_71: '',
        ipt_72: '',
        ipt_73: '',
        ipt_74: '',
        ipt_75: '',
        ipt_76: '',
        ipt_77: '',
        ipt_78: '',
        ipt_79: '',
        ipt_80: '',
        ipt_81: '',
        ipt_82: '',
        ipt_83: '',
        ipt_84: '',
        ipt_85: '',
        ipt_86: '',
        ipt_87: '',
        ipt_88: '',
        ipt_89: '',
        ipt_90: '',
        ipt_91: '',
        ipt_92: '',
        ipt_93: '',
        ipt_94: '',
        ipt_95: '',
        ipt_96: '',
        ipt_97: '',
        ipt_98: '',
        ipt_99: '',
        ipt_100: '',
        ipt_101: '',
        ipt_102: '',
        ipt_103: '',
        ipt_104: '',
        ipt_105: '',
        ipt_106: '',
        ipt_107: '',
        ipt_108: '',
        ipt_109: '',
        ipt_110: '',
        ipt_111: '',
        ipt_112: '',
        ipt_113: '',
        ipt_114: '',
        ipt_115: '',
        ipt_116: '',
        ipt_117: '',
        ipt_118: '',
        ipt_119: '',
        ipt_120: '',
        ipt_121: '',
        ipt_122: '',
        ipt_123: '',
        ipt_124: '',
        ipt_125: '',
        ipt_126: '',
        ipt_127: '',
        ipt_128: '',
        ipt_129: '',
        ipt_130: '',
        ipt_131: '',
        ipt_132: '',
        ipt_133: '',
        ipt_134: '',
        ipt_135: '',
        ipt_136: '',
        ipt_137: '',
        ipt_138: '',
        ipt_139: '',
        ipt_140: '',
        ipt_141: '',
        ipt_142: '',
        ipt_143: '',
        ipt_144: '',
        ipt_145: '',
        ipt_146: '',
        ipt_147: '',
        ipt_148: '',
        ipt_149: '',
        ipt_150: '',
        ipt_151: '',
        ipt_152: '',
        ipt_153: '',
        ipt_154: '',
        ipt_155: '',
        ipt_156: '',
        ipt_157: '',
        ipt_158: '',
        ipt_159: '',
        ipt_160: '',
        ipt_161: '',
        ipt_162: '',
        ipt_163: '',
        ipt_164: '',
        ipt_165: '',
        ipt_166: '',
        ipt_167: '',
        ipt_168: '',
        ipt_169: '',
        ipt_170: '',
        ipt_171: '',
        ipt_172: '',
        ipt_173: '',
        ipt_174: '',
        ipt_175: '',
        ipt_176: '',
        ipt_177: '',
        ipt_178: '',
        ipt_179: '',
        ipt_180: '',
        ipt_181: '',
        ipt_182: '',
        ipt_183: '',
        ipt_184: '',
        ipt_185: '',
        ipt_186: '',
        ipt_187: '',
        ipt_188: '',
        ipt_189: '',
        ipt_190: '',
        ipt_191: '',
        ipt_192: '',
        ipt_193: '',
        ipt_194: '',
        ipt_195: '',
        ipt_196: '',
        ipt_197: '',
        ipt_198: '',
        ipt_199: '',
        ipt_200: '',
        ipt_201: '',
        ipt_202: '',
        ipt_203: '',
        ipt_204: '',
        ipt_205: '',
        ipt_206: '',
        ipt_207: '',
        ipt_208: '',
        ipt_209: '',
        ipt_210: '',
        ipt_211: '',
        ipt_212: '',
        ipt_213: '',
        ipt_214: '',
        ipt_215: '',
        ipt_216: '',
        ipt_217: '',
        ipt_218: '',
        ipt_219: '',
        ipt_220: '',
        ipt_221: '',
        ipt_222: '',
        ipt_223: '',
        ipt_224: '',
        ipt_225: '',
        ipt_226: '',
        ipt_227: '',
        ipt_228: '',
        ipt_229: '',
        ipt_230: '',
        ipt_231: '',
        ipt_232: '',
        ipt_233: '',
        ipt_234: '',
        ipt_235: '',
        ipt_236: '',
        ipt_237: '',
        ipt_238: '',
        ipt_239: '',
        ipt_240: '',
        ipt_241: '',
        ipt_242: '',
        ipt_243: '',
        ipt_244: '',
        ipt_245: '',
        ipt_246: '',
        ipt_247: '',
        ipt_248: '',
        ipt_249: '',
        ipt_250: '',
        ipt_251: '',
        ipt_252: '',
        ipt_253: '',
        ipt_254: '',
        ipt_255: '',
        ipt_256: '',
        ipt_257: '',
        ipt_258: '',
        ipt_259: '',
        ipt_260: '',
        ipt_261: '',
        ipt_262: '',
        ipt_263: '',
        ipt_264: '',
        ipt_265: '',
        ipt_266: '',
        ipt_267: '',
        ipt_268: '',
        ipt_269: '',
        ipt_270: '',
        ipt_271: '',
        ipt_272: '',
        ipt_273: '',
        ipt_274: '',
        ipt_275: '',
        ipt_276: '',
        ipt_277: '',
        ipt_278: '',
        ipt_279: '',
        ipt_280: '',
        ipt_281: '',
        ipt_282: '',
        ipt_283: '',
        ipt_284: '',
        ipt_285: '',
        ipt_286: '',
        ipt_287: '',
        ipt_288: '',
        ipt_289: '',
        ipt_290: '',
        ipt_291: '',
        ipt_292: '',
        ipt_293: '',
        ipt_294: '',
        ipt_295: '',
        ipt_296: '',
        ipt_297: '',
        ipt_298: '',
        ipt_299: '',
        ipt_300: '',
        // ipt_1:'',
        // ipt_2:'',
        // ipt_3:'',
        // ipt_4:'',
        // ipt_5:'',
        // ipt_6:'',
        // ipt_7:'',
        // ipt_8:'',
        // ipt_9:'',
        // ipt_10:'',
      },
    }
  },
  watch: {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      var self = this
      this.$http({
        headers: {
          deviceCode: 'A95ZEF1-47B5-AC90BF3',
        },
        method: 'POST',
        url: self.api + '/api/Yw_Rpt/xjqkylb_search',
        data: {},
      })
        .then((res) => {
          if (res.data.code == 200) {
            self.options = res.data.data
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    change(val) {
      var self = this
      setTimeout(() => {
        this.$http({
          headers: {
            deviceCode: 'A95ZEF1-47B5-AC90BF3',
          },
          method: 'GET',
          url: self.api + '/api/Yw_Rpt/xjqkylb_search?DateT=' + val,
        })
          .then((res) => {
            if (res.data.code == 200) {
              if (res.data.data != null && res.data.data.length > 0) {
                self.ruleForm = JSON.parse(res.data.data[0].content)
              }
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }, 3000)
    },
    rpt_sava() {
      var self = this
      this.$http({
        headers: {
          deviceCode: 'A95ZEF1-47B5-AC90BF3',
        },
        method: 'POST',
        url: self.api + '/api/Yw_Rpt/xjqkylb',
        data: self.Qs.stringify({
          DateT: self.DateT,
          Content: JSON.stringify(self.ruleForm),
        }),
      })
        .then((res) => {
          if (res.data.code == 200) {
            self.$message({
              message: res.data.message,
              type: res.data.type,
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    //pdf
    handleExportPDF() {
      var self = this
      debugger
      var exportMain = $('#exportWord').clone()
      exportMain.find('input').each(function (i, item) {
        // if ($(this).attr("type") != "hidden") {
        //     if ($(this).attr("type") == "radio") {
        //         if ($(this).is(":checked")) {
        //             $(this).after("√");
        //         }
        //     } else {
        //         var html = $(this).val();
        //         $(this).after("<lable>" + html + "</lable>");
        //     }
        // }
        debugger
        var html = item.innerText
        $(this).after('<lable>' + html + '</lable>')
        $(this).remove()
      })
      exportMain.find('button').each(function () {
        $(this).remove()
      })

      exportMain.find('.el-input').each(function (i, item) {
        debugger
        var html = item.innerText
        $(this).after('<lable>' + html + '</lable>')
        $(this).remove()
      })

      exportMain.find('.beizhu').each(function () {
        $(this).remove()
      })

      exportMain.find('textarea').each(function () {
        if ($(this).attr('type') != 'hidden') {
          var html = $(this).val()
          $(this).after('<lable>' + html + '</lable>')
        }
        $(this).remove()
      })
      exportMain.wordExport('巡检情况一览表')
    },
  },
}
</script>

<style scoped>
div.topbar2 {
  position: fixed;
  top: 100px;
  right: 100px;
  margin: 10px;
  z-index: 67;
}
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
