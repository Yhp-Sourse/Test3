<template>
<div style="overflow: auto;text-align:center;">
    <div class="topbar2">
        <template>
            <el-select v-model="DateT" placeholder="请选择" @change='change'>
                <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.dateT"
                :value="item.dateT">
                </el-option>
            </el-select>
        </template>

        <el-button
        size="small"
        type="primary"
        id="btnExportPDF"
        class="el-button--iconButton"
        @click="handleExportPDF"
        >导出Word</el-button>
    </div>
  <div id='exportWord' v-if="hackReset">
  <table  width="2160" border="0" cellpadding="0" cellspacing="0" style='width:1620.00pt;border-collapse:collapse;table-layout:fixed;'>
   <col width="72" span="30" style='width:54.00pt;'/>
   <tr height="42" style='height:31.50pt;'>
    <td class="xl66" height="42" width="2160" colspan="30" style='height:31.50pt;width:1620.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;'>
       {{ruleForm.title}} 
       <!-- <input id="title" v-model="ruleForm.title"  type="text" value="" style="text-align:center;height: 30px;width：100%;border:none;" /> -->
    </td>
   </tr>
   <tr height="25" style='height:18.75pt;'>
    <td class="xl67" height="25" colspan="30" style='height:18.75pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;'></td>
   </tr>
   <tr height="19" style='height:14.25pt;'>
    <td class="xl69" height="19" colspan="4" style='height:14.25pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>鄂东北<span style='mso-spacerun:yes;'>&nbsp; </span>田志杰</td>
    <td class="xl69"></td>
    <td class="xl69"></td>
    <td class="xl69" colspan="4" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>鄂东南<span style='mso-spacerun:yes;'>&nbsp;&nbsp; </span>周杨</td>
    <td class="xl69"></td>
    <td class="xl69"></td>
    <td class="xl69" colspan="4" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>鄂中南<span style='mso-spacerun:yes;'>&nbsp;&nbsp; </span>唐伟林</td>
    <td class="xl69"></td>
    <td class="xl69"></td>
    <td class="xl69" colspan="4" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>鄂西南<span style='mso-spacerun:yes;'>&nbsp;&nbsp; </span>姜小腾</td>
    <td class="xl69"></td>
    <td class="xl69"></td>
    <td class="xl69" colspan="6" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>鄂西北<span style='mso-spacerun:yes;'>&nbsp;&nbsp; </span>刘立</td>
   </tr>
   <tr height="19" style='height:14.25pt;'>
    <td class="xl69" height="38" rowspan="2" style='height:28.50pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>城市</td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>站点名称</td>
    <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>上周巡检</td>
    <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>本周巡检</td>
    <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>本周故障时间</td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>是否故障</td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>城市</td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>站点名称</td>
    <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>上周巡检</td>
    <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>本周巡检</td>
    <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>本周故障时间</td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>是否故障</td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>城市</td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>站点名称</td>
    <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>上周巡检</td>
    <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>本周巡检</td>
    <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>本周故障时间</td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>是否故障</td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>城市</td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>站点名称</td>
    <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>上周巡检</td>
    <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>本周巡检</td>
    <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>本周故障时间</td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>是否故障</td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>城市</td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>站点名称</td>
    <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>上周巡检</td>
    <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>本周巡检</td>
    <td class="xl70" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>本周故障时间</td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>是否故障</td>
   </tr>
   <tr height="19" style='height:14.25pt;'/>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl69" height="330" rowspan="11" style='height:247.50pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>武汉</td>
    <td class="xl72" x:str>江汉区后襄河南路站</td>
    <td class="fs xl73">{{ruleForm.LSS4201051}}</td>
    <td class="fs xl74">{{ruleForm.SS4201051}}</td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl69" rowspan="9" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>黄冈</td>
    <td class="xl72" x:str>英山县鸡鸣尖站</td>
    <td class="fs xl73">{{ruleForm.LSS4211051}} </td>
    <td class="fs xl74">{{ruleForm.SS4211051}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>天门</td>
    <td class="xl72" x:str>天门市陆羽大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4296001}} </td>
    <td class="fs xl74">{{ruleForm.SS4296001}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl70" rowspan="10" style='border-right:.5pt solid windowtext;border-bottom:none;' x:str>恩施</td>
    <td class="xl72" x:str>巴东县北京大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4228051}} </td>
    <td class="fs xl74">{{ruleForm.SS4228051}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl106" rowspan="9" style='border-right:.5pt solid windowtext;border-bottom:none;' x:str>襄阳</td>
    <td class="xl95" x:str>谷城县粉阳路站</td>
    <td class="fs xl73">{{ruleForm.LSS4206051}} </td>
    <td class="fs xl74">{{ruleForm.SS4206051}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>江汉区大兴路站</td>
    <td class="fs xl73">{{ruleForm.LSS4201052}} </td>
    <td class="fs xl73">{{ruleForm.SS4201052}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>武穴市郭祥站</td>
    <td class="fs xl73">{{ruleForm.LSS4211052}} </td>
    <td class="fs xl73">{{ruleForm.SS4211052}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>天门市钟惺大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4296002}} </td>
    <td class="fs xl74">{{ruleForm.SS4296002}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>咸丰县营屏寨站</td>
    <td class="fs xl73">{{ruleForm.LSS4228052}} </td>
    <td class="fs xl74">{{ruleForm.SS4228052}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl118" x:str>谷城县银城大<span style='display:none;'>道站</span></td>
    <td class="fs xl74">{{ruleForm.LSS4206061}} </td>
    <td class="fs xl74">{{ruleForm.SS4206061}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>硚口区解放大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4201053}} </td>
    <td class="fs xl74">{{ruleForm.SS4201053}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>浠水县车站路站</td>
    <td class="fs xl73">{{ruleForm.LSS4211053}} </td>
    <td class="fs xl74">{{ruleForm.SS4211053}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>仙桃</td>
    <td class="xl72" x:str>仙桃沔阳大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4294001}} </td>
    <td class="fs xl74">{{ruleForm.SS4294001}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>建始县船儿岛站</td>
    <td class="fs xl73">{{ruleForm.LSS4228053}} </td>
    <td class="fs xl74">{{ruleForm.SS4228053}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl95" x:str>宜城市振兴大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4206052}} </td>
    <td class="fs xl74">{{ruleForm.SS4206052}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>洪山区鲁磨路站</td>
    <td class="fs xl73">{{ruleForm.LSS4201054}} </td>
    <td class="fs xl73">{{ruleForm.SS4201054}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>红安县发展大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4211054}} </td>
    <td class="fs xl74">{{ruleForm.SS4211054}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl95" x:str>仙桃市工业园站</td>
    <td class="fs xl73">{{ruleForm.LSS4294002}} </td>
    <td class="fs xl74">{{ruleForm.SS4294002}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>鹤峰县连升路站</td>
    <td class="fs xl73">{{ruleForm.LSS4228054}} </td>
    <td class="fs xl74">{{ruleForm.SS4228054}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl95" x:str>保康县清溪路站</td>
    <td class="fs xl73">{{ruleForm.LSS4206053}} </td>
    <td class="fs xl74">{{ruleForm.SS4206053}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>东西湖区环湖路站</td>
    <td class="fs xl73">{{ruleForm.LSS4201055}} </td>
    <td class="fs xl74">{{ruleForm.SS4201055}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>罗田县城南站</td>
    <td class="fs xl73">{{ruleForm.LSS4211055}} </td>
    <td class="fs xl73">{{ruleForm.SS4211055}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>潜江</td>
    <td class="xl72" x:str>潜江市潜阳中路站</td>
    <td class="fs xl73">{{ruleForm.LSS4295001}} </td>
    <td class="fs xl74">{{ruleForm.SS4295001}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>鹤峰县后坝站</td>
    <td class="fs xl73">{{ruleForm.LSS4228060}} </td>
    <td class="fs xl74">{{ruleForm.SS4228060}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl95" x:str>老河口市胜利路站</td>
    <td class="fs xl73">{{ruleForm.LSS4206054}} </td>
    <td class="fs xl73">{{ruleForm.SS4206054}} </td>
    <td class="xl74"></td>
    <td class="xl119"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>黄陂区黄陂大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4201056}} </td>
    <td class="fs xl73">{{ruleForm.SS4201056}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>黄梅县迎宾大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4211056}} </td>
    <td class="fs xl74">{{ruleForm.SS4211056}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>潜江市章华南路站</td>
    <td class="fs xl73">{{ruleForm.LSS4295002}} </td>
    <td class="fs xl73">{{ruleForm.SS4295002}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>宣恩县沿河路站</td>
    <td class="fs xl73">{{ruleForm.LSS4228055}} </td>
    <td class="fs xl74">{{ruleForm.SS4228055}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl95" x:str>老河口市民主路站</td>
    <td class="fs xl73">{{ruleForm.LSS4206057}} </td>
    <td class="fs xl74">{{ruleForm.SS4206057}} </td>
    <td class="xl74"></td>
    <td class="xl119"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>江夏区纸坊大街站</td>
    <td class="fs xl73">{{ruleForm.LSS4201057}} </td>
    <td class="fs xl73">{{ruleForm.SS4201057}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>麻城市金桥大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4211057}} </td>
    <td class="fs xl73">{{ruleForm.SS4211057}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl69" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>荆门</td>
    <td class="xl72" x:str>漳河新区凤袁路站</td>
    <td class="fs xl74">{{ruleForm.LSS4208005}} </td>
    <td class="fs xl74">{{ruleForm.SS4208005}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>来凤县半边城站</td>
    <td class="fs xl73">{{ruleForm.LSS4228056}} </td>
    <td class="fs xl74">{{ruleForm.SS4228056}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl95" x:str>枣阳市朝阳路站</td>
    <td class="fs xl74">{{ruleForm.LSS4206056}} </td>
    <td class="fs xl74">{{ruleForm.SS4206056}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>新洲区红旗街站</td>
    <td class="fs xl73">{{ruleForm.LSS4201058}} </td>
    <td class="fs xl74">{{ruleForm.SS4201058}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>团风县广场路站</td>
    <td class="fs xl73">{{ruleForm.LSS4211058}} </td>
    <td class="fs xl73">{{ruleForm.SS4211058}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>京山县轻机大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4208051}} </td>
    <td class="fs xl74">{{ruleForm.SS4208051}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>利川市腾龙大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4228057}} </td>
    <td class="fs xl74">{{ruleForm.SS4228057}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl120" x:str>枣阳市人民路站</td>
    <td class="fs xl74">{{ruleForm.LSS4206060}} </td>
    <td class="fs xl74">{{ruleForm.SS4206060}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>汉南区纱帽正街站</td>
    <td class="fs xl73">{{ruleForm.LSS4201059}} </td>
    <td class="fs xl73">{{ruleForm.SS4201059}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>蕲春县豁口路站</td>
    <td class="fs xl73">{{ruleForm.LSS4211059}} </td>
    <td class="fs xl73">{{ruleForm.SS4211059}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>沙洋县荷花大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4208052}} </td>
    <td class="fs xl73">{{ruleForm.SS4208052}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>利川市滨江北路站</td>
    <td class="fs xl73">{{ruleForm.LSS4228058}} </td>
    <td class="fs xl74">{{ruleForm.SS4228058}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl95" x:str>南漳县学府路站</td>
    <td class="fs xl73">{{ruleForm.LSS4206055}} </td>
    <td class="fs xl73">{{ruleForm.SS4206055}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>化工区化工大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4201060}} </td>
    <td class="fs xl73">{{ruleForm.SS4201060}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl69" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>黄石</td>
    <td class="xl72" x:str>阳新县东坡路站</td>
    <td class="fs xl73">{{ruleForm.LSS4202051}} </td>
    <td class="fs xl73">{{ruleForm.SS4202051}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>钟祥市长寿路站</td>
    <td class="fs xl74">{{ruleForm.LSS4208053}} </td>
    <td class="fs xl73">{{ruleForm.SS4208053}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>宣恩县三河沟站</td>
    <td class="fs xl73">{{ruleForm.LSS4228061}} </td>
    <td class="fs xl74">{{ruleForm.SS4228061}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl107"></td>
    <td class="xl72" x:str>宜城市委党校站</td>
    <td class="fs xl74">{{ruleForm.LSS4206062}} </td>
    <td class="fs xl74">{{ruleForm.SS4206062}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>蔡甸区汉阳大街站</td>
    <td class="fs xl73">{{ruleForm.LSS4201061}} </td>
    <td class="fs xl73">{{ruleForm.SS4201061}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>大冶市湛月路站</td>
    <td class="fs xl73">{{ruleForm.LSS4202052}} </td>
    <td class="fs xl73">{{ruleForm.SS4202052}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>屈家岭金色农谷站</td>
    <td class="fs xl73">{{ruleForm.LSS4208054}} </td>
    <td class="fs xl74">{{ruleForm.SS4208054}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl69" rowspan="11" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>宜昌</td>
    <td class="xl72" x:str>宜都市园林大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4205051}} </td>
    <td class="fs xl74">{{ruleForm.SS4205051}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl106" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:none;' x:str>随州</td>
    <td class="xl95" x:str>随县民主路站</td>
    <td class="fs xl73">{{ruleForm.LSS4213051}} </td>
    <td class="fs xl74">{{ruleForm.SS4213051}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl69" height="240" rowspan="8" style='height:180.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>孝感</td>
    <td class="xl72" x:str>孝昌县开发区站</td>
    <td class="fs xl73">{{ruleForm.LSS4209051}} </td>
    <td class="fs xl73">{{ruleForm.SS4209051}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>大冶市乾塔路站</td>
    <td class="fs xl73">{{ruleForm.LSS4202053}} </td>
    <td class="fs xl73">{{ruleForm.SS4202053}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl70" rowspan="11" style='border-right:.5pt solid windowtext;border-bottom:none;' x:str>荆州</td>
    <td class="xl72" x:str>监利县章华大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4210051}} </td>
    <td class="fs xl74">{{ruleForm.SS4210051}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>宜都市杨守敬大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4205052}} </td>
    <td class="fs xl74">{{ruleForm.SS4205052}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl121" x:str>广水滨河东路站</td>
    <td class="fs xl73">{{ruleForm.LSS4213052}} </td>
    <td class="fs xl74">{{ruleForm.SS4213052}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>孝昌县桃源路站</td>
    <td class="fs xl73">{{ruleForm.LSS4209052}} </td>
    <td class="fs xl73">{{ruleForm.SS4209052}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl69" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>鄂州</td>
    <td class="xl72" x:str>华容区体育路站</td>
    <td class="fs xl73">{{ruleForm.LSS4207051}} </td>
    <td class="fs xl74">{{ruleForm.SS4207051}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>监利县民主路站</td>
    <td class="fs xl73">{{ruleForm.LSS4210057}} </td>
    <td class="fs xl74">{{ruleForm.SS4210057}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl95" x:str>五峰县西北路站</td>
    <td class="fs xl73">{{ruleForm.LSS4205053}} </td>
    <td class="fs xl74">{{ruleForm.SS4205053}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl122" rowspan="13" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>十堰</td>
    <td class="xl72" x:str>丹江口市沙坨营路站</td>
    <td class="fs xl73">{{ruleForm.LSS4203052}} </td>
    <td class="fs xl74">{{ruleForm.SS4203052}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>汉川滨湖大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4209067}} </td>
    <td class="fs xl74">{{ruleForm.SS4209067}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>梁子湖区青峰路站</td>
    <td class="fs xl73">{{ruleForm.LSS4207052}} </td>
    <td class="fs xl73">{{ruleForm.SS4207052}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>江陵县江陵大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4210052}} </td>
    <td class="fs xl73">{{ruleForm.SS4210052}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl95" x:str>长阳县东峰岭路站</td>
    <td class="fs xl73">{{ruleForm.LSS4205054}} </td>
    <td class="fs xl74">{{ruleForm.SS4205054}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>丹江口市武当大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4203053}} </td>
    <td class="fs xl74">{{ruleForm.SS4203053}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>安陆市涢水路站</td>
    <td class="fs xl73">{{ruleForm.LSS4209061}} </td>
    <td class="fs xl73">{{ruleForm.SS4209061}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl70" rowspan="6" style='border-right:.5pt solid windowtext;border-bottom:none;' x:str>咸宁</td>
    <td class="xl72" x:str>通山县隆鼎丽都站</td>
    <td class="fs xl73">{{ruleForm.LSS4212051}} </td>
    <td class="fs xl74">{{ruleForm.SS4212051}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>石首市笔架山路站</td>
    <td class="fs xl73">{{ruleForm.LSS4210053}} </td>
    <td class="fs xl73">{{ruleForm.SS4210053}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl95" x:str>兴山丰邑大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4205055}} </td>
    <td class="fs xl74">{{ruleForm.SS4205055}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>房县房陵东大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4203056}} </td>
    <td class="fs xl74">{{ruleForm.SS4203056}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>安陆市府东南路站</td>
    <td class="fs xl73">{{ruleForm.LSS4209062}} </td>
    <td class="fs xl73">{{ruleForm.SS4209062}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>崇阳县大觉路站</td>
    <td class="fs xl73">{{ruleForm.LSS4212052}} </td>
    <td class="fs xl74">{{ruleForm.SS4212052}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>公安县油江路站</td>
    <td class="fs xl73">{{ruleForm.LSS4210054}} </td>
    <td class="fs xl73">{{ruleForm.SS4210054}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl95" x:str>秭归县屈原路站</td>
    <td class="fs xl73">{{ruleForm.LSS4205057}} </td>
    <td class="fs xl74">{{ruleForm.SS4205057}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>房县诗经大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4203062}} </td>
    <td class="fs xl74">{{ruleForm.SS4203062}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>应城市家和小区站</td>
    <td class="fs xl73">{{ruleForm.LSS4209063}} </td>
    <td class="fs xl73">{{ruleForm.SS4209063}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>通城县银山广场站</td>
    <td class="fs xl73">{{ruleForm.LSS4212053}} </td>
    <td class="fs xl74">{{ruleForm.SS4212053}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>公安县孱陵大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4210058}} </td>
    <td class="fs xl73">{{ruleForm.SS4210058}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl95" x:str>当阳市友谊路站</td>
    <td class="fs xl73">{{ruleForm.LSS4205056}} </td>
    <td class="fs xl74">{{ruleForm.SS4205056}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>茅箭区北京路站</td>
    <td class="fs xl73">{{ruleForm.LSS4203060}} </td>
    <td class="fs xl74">{{ruleForm.SS4203060}} </td>
    <td class="xl74"></td>
    <td class="xl123"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>云梦县龙岗路站</td>
    <td class="fs xl73">{{ruleForm.LSS4209064}} </td>
    <td class="fs xl74">{{ruleForm.SS4209064}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>赤壁市陆水湖大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4212054}} </td>
    <td class="fs xl74">{{ruleForm.SS4212054}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl96" x:str>松滋市白云路<span style='display:none;'>站</span></td>
    <td class="fs xl73">{{ruleForm.LSS4210055}} </td>
    <td class="fs xl73">{{ruleForm.SS4210055}} </td>
    <td class="xl105"></td>
    <td class="xl75"></td>
    <td class="xl95" x:str>当阳市锦屏大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4205061}} </td>
    <td class="fs xl74">{{ruleForm.SS4205061}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>武当山特区沿河路站</td>
    <td class="fs xl73">{{ruleForm.LSS4203059}} </td>
    <td class="fs xl73">{{ruleForm.SS4203059}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>大悟县前进大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4209065}} </td>
    <td class="fs xl73">{{ruleForm.SS4209065}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>嘉鱼县滨湖路站</td>
    <td class="fs xl73">{{ruleForm.LSS4212055}} </td>
    <td class="fs xl73">{{ruleForm.SS4212055}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>洪湖市爱国路站</td>
    <td class="fs xl73">{{ruleForm.LSS4210056}} </td>
    <td class="fs xl74">{{ruleForm.SS4210056}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl95" x:str>枝江市江汉大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4205060}} </td>
    <td class="fs xl74">{{ruleForm.SS4205060}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>郧西县环城西路站</td>
    <td class="fs xl73">{{ruleForm.LSS4203054}}</td>
    <td class="fs xl74">{{ruleForm.SS4203054}}</td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl77" height="218" colspan="6" rowspan="8" style='height:163.50pt;border-right:none;border-bottom:none;'></td>
    <td class="xl78" x:str>咸安区东门村站</td>
    <td class="fs xl73">{{ruleForm.LSS4212056}} </td>
    <td class="fs xl74">{{ruleForm.SS4212056}} </td>
    <td class="xl97"></td>
    <td class="xl98"></td>
    <td class="xl72" x:str>洪湖市宏伟北路站</td>
    <td class="fs xl73">{{ruleForm.LSS4210059}} </td>
    <td class="fs xl73">{{ruleForm.SS4210059}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl95" x:str>枝江市体育路站</td>
    <td class="fs xl73">{{ruleForm.LSS4205059}} </td>
    <td class="fs xl74">{{ruleForm.SS4205059}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>郧西县五龙河大道站</td>
    <td class="fs xl73">{{ruleForm.inp_197}} </td>
    <td class="fs xl74">{{ruleForm.inp_198}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl79" colspan="6" rowspan="7" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;'></td>
    <td class="xl96" x:str>松滋市环湖路<span style='display:none;'>站</span></td>
    <td class="fs xl73">{{ruleForm.LSS4210060}} </td>
    <td class="fs xl73">{{ruleForm.SS4210060}} </td>
    <td class="xl105"></td>
    <td class="xl75"></td>
    <td class="xl95" x:str>远安县嫘祖路站</td>
    <td class="fs xl73">{{ruleForm.LSS4205063}} </td>
    <td class="fs xl74">{{ruleForm.SS4205063}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>郧阳区柳新路站</td>
    <td class="fs xl74">{{ruleForm.LSS4203058}} </td>
    <td class="fs xl74">{{ruleForm.SS4203058}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl72" x:str>江陵县中兴路站</td>
    <td class="fs xl73">{{ruleForm.LSS4210061}} </td>
    <td class="fs xl74">{{ruleForm.SS4210061}} </td>
    <td class="xl97"></td>
    <td class="xl98"></td>
    <td class="xl106" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>神农架</td>
    <td class="xl95" x:str>神农架林区神农大道站</td>
    <td class="fs xl73">{{ruleForm.LSS4297002}} </td>
    <td class="fs xl74">{{ruleForm.SS4297002}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>张湾区西城路站</td>
    <td class="fs xl73">{{ruleForm.LSS4203055}} </td>
    <td class="fs xl74">{{ruleForm.SS4203055}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl69" colspan="6" rowspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;'></td>
    <td class="xl95" x:str>神农架林区博物馆路站</td>
    <td class="fs xl73">{{ruleForm.LSS4297003}} </td>
    <td class="fs xl74">{{ruleForm.SS4297003}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>竹山县体育路站</td>
    <td class="fs xl73">{{ruleForm.LSS4203057}} </td>
    <td class="fs xl74">{{ruleForm.SS4203057}} </td>
    <td class="xl74"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl95" x:str>神农架林区土家包站</td>
    <td class="fs xl73">{{ruleForm.LSS4297004}}</td>
    <td class="fs xl74">{{ruleForm.SS4297004}}</td>
    <td class="xl73"></td>
    <td class="xl75"></td>
    <td class="xl72" x:str>竹溪县东风路站</td>
    <td class="fs xl73">{{ruleForm.LSS4203051}} </td>
    <td class="fs xl74">{{ruleForm.SS4203051}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="30" style='height:22.50pt;'>
    <td class="xl109" colspan="6" rowspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;'></td>
    <td class="xl72" x:str>竹山县柿湾路站</td>
    <td class="fs xl73">{{ruleForm.LSS4203063}} </td>
    <td class="fs xl73">{{ruleForm.SS4203063}} </td>
    <td class="xl73"></td>
    <td class="xl75"></td>
   </tr>
   <tr height="19" style='height:14.25pt;'>
    <td class="xl124" colspan="6" rowspan="6" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;'></td>
   </tr>
   <tr height="19" style='height:14.25pt;'/>
   <tr height="19" style='height:14.25pt;'>
    <td class="xl85" height="38" colspan="24" rowspan="2" style='height:28.50pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>各区周巡检完成率</td>
   </tr>
   <tr height="19" style='height:14.25pt;'/>
   <tr height="19" style='height:14.25pt;'>
    <td class="xl89" height="19" colspan="3" style='height:14.25pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>鄂东北田志杰（19个）</td>
    <td class="xl92" colspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>鄂东南周杨（20个）</td>
    <td class="xl89" colspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>鄂中南唐伟林（22个）</td>
    <td class="xl103" colspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>鄂西南姜小腾（24个）</td>
    <td class="xl92" colspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>鄂西北刘立（25个）</td>
    <td class="xl104" colspan="9" rowspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;'></td>
   </tr>
   <tr height="19" style='height:14.25pt;'>
    <td class="xl93" height="19" colspan="3" style='height:14.25pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;'></td>
    <td class="xl93" colspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;'></td>
    <td class="xl93" colspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;'></td>
    <td class="xl93" colspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;'></td>
    <td class="xl93" colspan="3" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;'></td>
   </tr>
  </table>
  </div>
  <!-- <el-button  @click='rpt_sava' type="primary" round >保存</el-button> -->
</div>

</template>
<script>
export default {
    components:{},
    data(){
        return{
            hackReset:false,
            DateT:'2021-43',
            options:[],
            dataContent:'',
            ruleForm:{},
            rules: {//含L的代表上周，不含L代表本周
                title:'',
                SS4201051:'',
                SS4201052:'',
                SS4201053:'',
                SS4201054:'',
                SS4201055:'',
                SS4201056:'',
                SS4201057:'',
                SS4201058:'',
                SS4201059:'',
                SS4201060:'',
                SS4201061:'',
                SS4202051:'',
                SS4202052:'',
                SS4202053:'',
                SS4203051:'',
                SS4203052:'',
                SS4203053:'',
                SS4203054:'',
                SS4203055:'',
                SS4203056:'',
                SS4203057:'',
                SS4203058:'',
                SS4203059:'',
                SS4203060:'',
                SS4203061:'',
                SS4203062:'',
                SS4203063:'',
                SS4205051:'',
                SS4205052:'',
                SS4205053:'',
                SS4205054:'',
                SS4205055:'',
                SS4205056:'',
                SS4205057:'',
                SS4205059:'',
                SS4205060:'',
                SS4205061:'',
                SS4205063:'',
                SS4206051:'',
                SS4206052:'',
                SS4206053:'',
                SS4206054:'',
                SS4206055:'',
                SS4206056:'',
                SS4206057:'',
                SS4206060:'',
                SS4206061:'',
                SS4206062:'',
                SS4207051:'',
                SS4207052:'',
                SS4208005:'',
                SS4208051:'',
                SS4208052:'',
                SS4208053:'',
                SS4208054:'',
                SS4209051:'',
                SS4209052:'',
                SS4209061:'',
                SS4209062:'',
                SS4209063:'',
                SS4209064:'',
                SS4209065:'',
                SS4209067:'',
                SS4210051:'',
                SS4210052:'',
                SS4210053:'',
                SS4210054:'',
                SS4210055:'',
                SS4210056:'',
                SS4210057:'',
                SS4210058:'',
                SS4210059:'',
                SS4210060:'',
                SS4210061:'',
                SS4211051:'',
                SS4211052:'',
                SS4211053:'',
                SS4211054:'',
                SS4211055:'',
                SS4211056:'',
                SS4211057:'',
                SS4211058:'',
                SS4211059:'',
                SS4212051:'',
                SS4212052:'',
                SS4212053:'',
                SS4212054:'',
                SS4212055:'',
                SS4212056:'',
                SS4213051:'',
                SS4213052:'',
                SS4228051:'',
                SS4228052:'',
                SS4228053:'',
                SS4228054:'',
                SS4228055:'',
                SS4228056:'',
                SS4228057:'',
                SS4228058:'',
                SS4228060:'',
                SS4228061:'',
                SS4294001:'',
                SS4294002:'',
                SS4295001:'',
                SS4295002:'',
                SS4296001:'',
                SS4296002:'',
                SS4297002:'',
                SS4297003:'',
                SS4297004:'',
                LSS4201051:'',
                LSS4201052:'',
                LSS4201053:'',
                LSS4201054:'',
                LSS4201055:'',
                LSS4201056:'',
                LSS4201057:'',
                LSS4201058:'',
                LSS4201059:'',
                LSS4201060:'',
                LSS4201061:'',
                LSS4202051:'',
                LSS4202052:'',
                LSS4202053:'',
                LSS4203051:'',
                LSS4203052:'',
                LSS4203053:'',
                LSS4203054:'',
                LSS4203055:'',
                LSS4203056:'',
                LSS4203057:'',
                LSS4203058:'',
                LSS4203059:'',
                LSS4203060:'',
                LSS4203061:'',
                LSS4203062:'',
                LSS4203063:'',
                LSS4205051:'',
                LSS4205052:'',
                LSS4205053:'',
                LSS4205054:'',
                LSS4205055:'',
                LSS4205056:'',
                LSS4205057:'',
                LSS4205059:'',
                LSS4205060:'',
                LSS4205061:'',
                LSS4205063:'',
                LSS4206051:'',
                LSS4206052:'',
                LSS4206053:'',
                LSS4206054:'',
                LSS4206055:'',
                LSS4206056:'',
                LSS4206057:'',
                LSS4206060:'',
                LSS4206061:'',
                LSS4206062:'',
                LSS4207051:'',
                LSS4207052:'',
                LSS4208005:'',
                LSS4208051:'',
                LSS4208052:'',
                LSS4208053:'',
                LSS4208054:'',
                LSS4209051:'',
                LSS4209052:'',
                LSS4209061:'',
                LSS4209062:'',
                LSS4209063:'',
                LSS4209064:'',
                LSS4209065:'',
                LSS4209067:'',
                LSS4210051:'',
                LSS4210052:'',
                LSS4210053:'',
                LSS4210054:'',
                LSS4210055:'',
                LSS4210056:'',
                LSS4210057:'',
                LSS4210058:'',
                LSS4210059:'',
                LSS4210060:'',
                LSS4210061:'',
                LSS4211051:'',
                LSS4211052:'',
                LSS4211053:'',
                LSS4211054:'',
                LSS4211055:'',
                LSS4211056:'',
                LSS4211057:'',
                LSS4211058:'',
                LSS4211059:'',
                LSS4212051:'',
                LSS4212052:'',
                LSS4212053:'',
                LSS4212054:'',
                LSS4212055:'',
                LSS4212056:'',
                LSS4213051:'',
                LSS4213052:'',
                LSS4228051:'',
                LSS4228052:'',
                LSS4228053:'',
                LSS4228054:'',
                LSS4228055:'',
                LSS4228056:'',
                LSS4228057:'',
                LSS4228058:'',
                LSS4228060:'',
                LSS4228061:'',
                LSS4294001:'',
                LSS4294002:'',
                LSS4295001:'',
                LSS4295002:'',
                LSS4296001:'',
                LSS4296002:'',
                LSS4297002:'',
                LSS4297003:'',
                LSS4297004:''
            },
        }
    },
    watch:{
        // DateT(val, oldVal){
        //     if(val){
        //        this.change(val);
        //     }
        // },
        // a(val, oldVal){//普通的watch监听
        //  console.log("a: "+val, oldVal);
        // },
        // b:{//深度监听，可监听到对象、数组的变化
        //     handler(val, oldVal){
        //         console.log("b.c: "+val.c, oldVal.c);
        //     },
        //     deep:true //true 深度监听
        // }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            var self = this;
            this.$http({
                headers: {
                  deviceCode: "A95ZEF1-47B5-AC90BF3",
                },
                method: 'POST',
                url: self.api + "/api/Yw_Rpt/xjqkylb_search",
                data: {}
            }).then(res => {
                if(res.data.code==200){
                   if(res.data.data!=null && res.data.data.length>0){
                       self.options=res.data.data;
                       self.ruleForm=JSON.parse(res.data.data[0].content);
                    }
                   
                }
            }).catch(error => {
                console.log(error);
            });
        },
        change(val){
            var self = this;
            this.hackReset=false;
            this.$nextTick(() => {
                this.hackReset=true;
                this.$http({
                headers: {
                  deviceCode: "A95ZEF1-47B5-AC90BF3",
                },
                method: 'GET',
                url: self.api + "/api/Yw_Rpt/xjqkylb_search?DateT="+val,
            }).then(res => {
                if(res.data.code==200){
                    if(res.data.data!=null && res.data.data.length>0){
                        self.ruleForm=JSON.parse(res.data.data[0].content);
                    }
                }
            }).catch(error => {
                console.log(error);
            });
            });
            // setTimeout(()=>{
                
            // },100)
        },
        rpt_sava(){
            var self = this;
            this.$http({
                headers: {
                  deviceCode: "A95ZEF1-47B5-AC90BF3",
                },
                method: 'POST',
                url: self.api + "/api/Yw_Rpt/xjqkylb",
                data: self.Qs.stringify({
                    DateT:self.DateT,
                    Content:JSON.stringify(self.ruleForm),
                })
            }).then(res => {
                if(res.data.code==200){
                    self.$message({
                      message: res.data.message,
                      type: res.data.type,
                    });  
                }
            }).catch(error => {
                console.log(error);
            });
            
        },
        //pdf
        handleExportPDF(){
            var self=this;
            debugger
            var exportMain = $("#exportWord").clone();
                exportMain.find("input").each(function(i,item) {
                    if ($(this).attr("type") != "hidden") {
                        if ($(this).attr("type") == "radio") {
                            if ($(this).is(":checked")) {
                                $(this).after("√");
                            }
                        } else {
                            var html = $(this).val();
                            $(this).after("<lable>" + html + "</lable>");
                        }
                    }
                    $(this).remove();
                });
                exportMain.find("button").each(function() {
                    $(this).remove();
                });
                
                exportMain.find(".el-input").each(function(i,item) {
                    var html = item.innerText;
                    $(this).after("<lable>" + html + "</lable>");
                    $(this).remove();
                });
                
                exportMain.find(".beizhu").each(function() {
                    $(this).remove();
                });
                
                exportMain.find("textarea").each(function() {
                    if ($(this).attr("type") != "hidden") {
                        var html = $(this).val();
                        $(this).after("<lable>" + html + "</lable>");
                    }
                    $(this).remove();
                });
                exportMain.wordExport("巡检情况一览表");
        },
    },
}
</script>
<style scoped>
div.topbar2 {position: fixed;top: 100px;right:100px;margin: 10px;z-index: 67;}
    #main, table {
        width: 95%;
        margin: 10px auto;
        border-left: 1px solid #AAAAAA;
        border-bottom: 1px solid #AAAAAA;
    }
    .fs{font-size: 12px;}
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