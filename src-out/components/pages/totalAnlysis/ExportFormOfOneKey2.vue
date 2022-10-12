<template>
  <div id="v_deviceOnlineInfo">
    <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
      <!-- <el-aside width="250px"> 
                  <treeSStation  :IsCheckBox='true' @checkedNodes="getSearchStations"></treeSStation>
              </el-aside> -->
      <el-container>
        <el-header>
          <div class="topbar">
            <el-button
              size="small"
              class="el-button--iconButton"
              @click="handleReturn"
              >返回</el-button
            >
          </div>
          <div class="topbar2">
            <!-- <el-button
                          size="small"
                          class="el-button--iconButton"
                          @click="exprotReport()"
                          >导出word</el-button> -->

            <el-button
              size="small"
              class="el-button--iconButton"
              @click="downloadReport()"
              >导出</el-button
            >
          </div>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <!-- <el-form-item label="选择月份：">
                              <el-date-picker
                                  v-model="queryparam.SearchTime"
                                  type="month"   
                                   :clearable=false                                          
                                  value-format="yyyy-MM"
                                  placeholder="请选择日期">
                              </el-date-picker>
                           </el-form-item> -->
              <el-form-item class="btn">
                <!-- <el-button type="primary"  @click="Search();">查询</el-button> -->
                <!-- <el-button type="primary" icon="el-icon-download" @click="();"></el-button> -->
              </el-form-item>
            </el-form>
          </div>
        </el-header>
        <el-main id="exportWord" v-if="isRefresh">
          <!-- 第一周 -->
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'InspectionSummaryRpt' &&
                item.weekNumInMonth == 1
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <InspectionSummaryRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>

          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ProvincialRpt' && item.weekNumInMonth == 1
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ProvincialRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>

          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'AnalyzerOperationStatusCheckRecordForm' &&
                item.weekNumInMonth == 1
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <AnalyzerOperationStatusCheckRecordForm
              :ruleForm="JSON.parse(i.content)"
            />
            <rptFooter :footerData="i.footerData" />
          </div>

          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'NOXAnlyzerOperaRpt' &&
                item.weekNumInMonth == 1
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <NOXAnlyzerOperaRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'O3AnlyzerOperaRpt' &&
                item.weekNumInMonth == 1
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <O3AnlyzerOperaRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'COAnlyzerOperaWeekRpt' &&
                item.weekNumInMonth == 1
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <COAnlyzerOperaWeekRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'PM10AnlyzerOperaWeekRpt' &&
                item.weekNumInMonth == 1
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <PM10AnlyzerOperaWeekRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'PM25AnlyzerOperaWeekRpt' &&
                item.weekNumInMonth == 1
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <PM25AnlyzerOperaWeekRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>

          <!-- 第2周 -->
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'InspectionSummaryRpt' &&
                item.weekNumInMonth == 2
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <InspectionSummaryRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ProvincialRpt' && item.weekNumInMonth == 2
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ProvincialRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'AnalyzerOperationStatusCheckRecordForm' &&
                item.weekNumInMonth == 2
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <AnalyzerOperationStatusCheckRecordForm
              :ruleForm="JSON.parse(i.content)"
            />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'NOXAnlyzerOperaRpt' &&
                item.weekNumInMonth == 2
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <NOXAnlyzerOperaRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'O3AnlyzerOperaRpt' &&
                item.weekNumInMonth == 2
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <O3AnlyzerOperaRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'COAnlyzerOperaWeekRpt' &&
                item.weekNumInMonth == 2
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <COAnlyzerOperaWeekRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'PM10AnlyzerOperaWeekRpt' &&
                item.weekNumInMonth == 2
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <PM10AnlyzerOperaWeekRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'PM25AnlyzerOperaWeekRpt' &&
                item.weekNumInMonth == 2
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <PM25AnlyzerOperaWeekRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>

          <!-- 第3周 -->
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'InspectionSummaryRpt' &&
                item.weekNumInMonth == 3
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <InspectionSummaryRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ProvincialRpt' && item.weekNumInMonth == 3
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ProvincialRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'AnalyzerOperationStatusCheckRecordForm' &&
                item.weekNumInMonth == 3
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <AnalyzerOperationStatusCheckRecordForm
              :ruleForm="JSON.parse(i.content)"
            />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'NOXAnlyzerOperaRpt' &&
                item.weekNumInMonth == 3
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <NOXAnlyzerOperaRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'O3AnlyzerOperaRpt' &&
                item.weekNumInMonth == 3
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <O3AnlyzerOperaRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'COAnlyzerOperaWeekRpt' &&
                item.weekNumInMonth == 3
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <COAnlyzerOperaWeekRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'PM10AnlyzerOperaWeekRpt' &&
                item.weekNumInMonth == 3
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <PM10AnlyzerOperaWeekRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'PM25AnlyzerOperaWeekRpt' &&
                item.weekNumInMonth == 3
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <PM25AnlyzerOperaWeekRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>

          <!-- 第4周 -->
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'InspectionSummaryRpt' &&
                item.weekNumInMonth == 4
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <InspectionSummaryRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ProvincialRpt' && item.weekNumInMonth == 4
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ProvincialRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'AnalyzerOperationStatusCheckRecordForm' &&
                item.weekNumInMonth == 4
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <AnalyzerOperationStatusCheckRecordForm
              :ruleForm="JSON.parse(i.content)"
            />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'NOXAnlyzerOperaRpt' &&
                item.weekNumInMonth == 4
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <NOXAnlyzerOperaRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'O3AnlyzerOperaRpt' &&
                item.weekNumInMonth == 4
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <O3AnlyzerOperaRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'COAnlyzerOperaWeekRpt' &&
                item.weekNumInMonth == 4
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <COAnlyzerOperaWeekRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'PM10AnlyzerOperaWeekRpt' &&
                item.weekNumInMonth == 4
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <PM10AnlyzerOperaWeekRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'PM25AnlyzerOperaWeekRpt' &&
                item.weekNumInMonth == 4
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <PM25AnlyzerOperaWeekRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>

          <!-- 第5周 -->
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'InspectionSummaryRpt' &&
                item.weekNumInMonth == 5
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <InspectionSummaryRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ProvincialRpt' && item.weekNumInMonth == 5
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ProvincialRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'AnalyzerOperationStatusCheckRecordForm' &&
                item.weekNumInMonth == 5
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <AnalyzerOperationStatusCheckRecordForm
              :ruleForm="JSON.parse(i.content)"
            />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'NOXAnlyzerOperaRpt' &&
                item.weekNumInMonth == 5
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <NOXAnlyzerOperaRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'O3AnlyzerOperaRpt' &&
                item.weekNumInMonth == 5
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <O3AnlyzerOperaRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'COAnlyzerOperaWeekRpt' &&
                item.weekNumInMonth == 5
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <COAnlyzerOperaWeekRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'PM10AnlyzerOperaWeekRpt' &&
                item.weekNumInMonth == 5
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <PM10AnlyzerOperaWeekRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'PM25AnlyzerOperaWeekRpt' &&
                item.weekNumInMonth == 5
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <PM25AnlyzerOperaWeekRpt :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>

          <!-- 月 -->
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ParticulateOscillatingMonthRpt' &&
                item.weekNumInMonth == 6
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ParticulateOscillatingMonthRpt :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'EquipmentMaintenanceRpt' &&
                item.weekNumInMonth == 6
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <EquipmentMaintenanceRpt :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'GasAnalyzerRpt' && item.weekNumInMonth == 6
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <GasAnalyzerRpt :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName ==
                  'CalibrationChecklistOfMulti-gasDynamicCalibrator' &&
                item.weekNumInMonth == 6
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <CalibrationChecklistOfMulti :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ASEmergencyMonthRpt' &&
                item.weekNumInMonth == 6
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ASEmergencyMonthRpt :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ASEmergencyMonthPM10Rpt' &&
                item.weekNumInMonth == 6
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ASEmergencyMonthPM10Rpt :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>

          <!-- 两月 -->
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ParticulateOscillatingMonthPM10Rpt' &&
                item.weekNumInMonth == 7
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ParticulateOscillatingMonthPM10Rpt
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ParticulateOscillatingMonthPM2.5Rpt' &&
                item.weekNumInMonth == 7
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ParticulateOscillatingMonthPM25Rpt
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>

          <!-- 季度 -->
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ParticulateMatterQuarterRpt' &&
                item.weekNumInMonth == 8
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ParticulateMatterQuarterRpt :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'PM10ParticulateMatterQuarter' &&
                item.weekNumInMonth == 8
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <PM10ParticulateMatterQuarter :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'PM25ParticulateMatterQuarter' &&
                item.weekNumInMonth == 8
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <PM25ParticulateMatterQuarter :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'O3CalibrationQuarterRpt' &&
                item.weekNumInMonth == 8
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <O3CalibrationQuarterRpt :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'SO2CalibrationQuarterRpt' &&
                item.weekNumInMonth == 8
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <SO2CalibrationQuarterRpt :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'NOxCalibrationQuarterRpt' &&
                item.weekNumInMonth == 8
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <NOxCalibrationQuarterRpt :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'COCalibrationQuarterRpt' &&
                item.weekNumInMonth == 8
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <COCalibrationQuarterRpt :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'PrecisionInstrumentQuarterlyRpt' &&
                item.weekNumInMonth == 8
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <PrecisionInstrumentQuarterlyRpt
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'PM25PrecisionInstrumentQuarterlyRpt' &&
                item.weekNumInMonth == 8
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <PM25PrecisionInstrumentQuarterlyRpt
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'PM10PrecisionInstrumentQuarterlyRpt' &&
                item.weekNumInMonth == 8
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <PM10PrecisionInstrumentQuarterlyRpt
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ZDTPPM10PrecisionInstrumentQuarterlyRpt' &&
                item.weekNumInMonth == 8
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ZDTPPM10PrecisionInstrumentQuarterlyRpt
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName ==
                  'ZDTPPM25TemperaturePressureCalibrationRpt' &&
                item.weekNumInMonth == 8
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ZDTPPM25TemperaturePressureCalibrationRpt
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'Maintenancerecord' &&
                item.weekNumInMonth == 8
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <Maintenancerecord :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>

          <!-- 半年 -->
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'HalfyearmaintenanceRpt' &&
                item.weekNumInMonth == 9
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <HalfyearmaintenanceRpt :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'NitrogenOxideConversionRecordRpt' &&
                item.weekNumInMonth == 9
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <NitrogenOxideConversionRecordRpt
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ConversionRateofMolybdenumFurnace' &&
                item.weekNumInMonth == 9
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ConversionRateofMolybdenumFurnace
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>

          <!-- 年 -->
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'MeasurementTraceabilityTransmissionRpt' &&
                item.weekNumInMonth == 10
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <MeasurementTraceabilityTransmissionRpt
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'SO2AnalyzerAccuracyAuditRecordRpt' &&
                item.weekNumInMonth == 10
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <SO2AnalyzerAccuracyAuditRecordRpt
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'NOxAnalyzerAccuracyAuditRecordRpt' &&
                item.weekNumInMonth == 10
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <NOxAnalyzerAccuracyAuditRecordRpt
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'COAnalyzerAccuracyAuditRecordRpt' &&
                item.weekNumInMonth == 10
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <COAnalyzerAccuracyAuditRecordRpt
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'O3AnalyzerAccuracyAuditRecordRpt' &&
                item.weekNumInMonth == 10
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <O3AnalyzerAccuracyAuditRecordRpt
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'TraceVibrationQualityCalibrationRpt' &&
                item.weekNumInMonth == 10
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <TraceVibrationQualityCalibrationRpt
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ListofPatrolRecordsofAirProvincial' &&
                item.weekNumInMonth == 10
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ListofPatrolRecordsofAirProvincial
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'NJDEnvironmentalMaintenanceRecordRpt' &&
                item.weekNumInMonth == 10
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <NJDEnvironmentalMaintenanceRecordRpt
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'MaintenanceOfVisibilityRpt' &&
                item.weekNumInMonth == 10
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <MaintenanceOfVisibilityRpt :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ManualComparisonSamplingRpt' &&
                item.weekNumInMonth == 10
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ManualComparisonSamplingRpt :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ComparisonParticulateMatterRpt' &&
                item.weekNumInMonth == 10
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ComparisonParticulateMatterRpt :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ParticulateOscillatingMonthPM25Rpt' &&
                item.weekNumInMonth == 10
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ParticulateOscillatingMonthPM25Rptnian
              :ruleForm="JSON.parse(i.content)"
            />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'hjkqzlzdjcyqbjghjl' &&
                item.weekNumInMonth == 10
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <hjkqzlzdjcyqbjghjl :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'hjkqzlzdjcyqhpbjghjl' &&
                item.weekNumInMonth == 10
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <hjkqzlzdjcyqhpbjghjl :ruleForm="JSON.parse(i.content)" />
            <rptImg :footerData="i.footerData" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'hjkqzlzdjcxtzdxxqkb' &&
                item.weekNumInMonth == 10
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <hjkqzlzdjcxtzdxxqkb :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>

          <!-- 其它 -->
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'hjkqzlzdjcyqbjghjlnew' &&
                item.weekNumInMonth == 11
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <hjkqzlzdjcyqbjghjlnew :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'kqzdjcyqwhwxjlb' &&
                item.weekNumInMonth == 11
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <kqzdjcyqwhwxjlb :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
          <div
            v-for="(i, idx) in arr.filter(
              (item) =>
                item.englishName == 'ycqkyjzjlb' && item.weekNumInMonth == 11
            )"
            :key="idx"
          >
            <h5 id="rptTitle" v-html="i.rptName"></h5>
            <rptHeader :rptName="empt" :headerData="i.taskData" />
            <ycqkyjzjlb :ruleForm="JSON.parse(i.content)" />
            <rptFooter :footerData="i.footerData" />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
import treeSStation from '../common/treeSStation'
import rptImg from '../ywTask/yw_rpt/rpt_img'
import rptHeader from '../ywTask/yw_rpt/rpt_headerExport'
import rptFooter from '../ywTask/yw_rpt/rpt_footerExport'
// 周
import AnalyzerOperationStatusCheckRecordForm from '../ywTask/yw_rpt/rptTemplateExport2/week/AnalyzerOperationStatusCheckRecordForm'
import COAnlyzerOperaWeekRpt from '../ywTask/yw_rpt/rptTemplateExport2/week/COAnlyzerOperaWeekRpt'
import InspectionSummaryRpt from '../ywTask/yw_rpt/rptTemplateExport2/week/InspectionSummaryRpt'
import NOXAnlyzerOperaRpt from '../ywTask/yw_rpt/rptTemplateExport2/week/NOXAnlyzerOperaRpt'
import O3AnlyzerOperaRpt from '../ywTask/yw_rpt/rptTemplateExport2/week/O3AnlyzerOperaRpt'
import PM10AnlyzerOperaWeekRpt from '../ywTask/yw_rpt/rptTemplateExport2/week/PM10AnlyzerOperaWeekRpt'
import PM25AnlyzerOperaWeekRpt from '../ywTask/yw_rpt/rptTemplateExport2/week/PM25AnlyzerOperaWeekRpt'
import ProvincialRpt from '../ywTask/yw_rpt/rptTemplateExport2/week/ProvincialRpt'

// 月
import ParticulateOscillatingMonthRpt from '../ywTask/yw_rpt/rptTemplateExport2/month/ParticulateOscillatingMonthRpt'
import EquipmentMaintenanceRpt from '../ywTask/yw_rpt/rptTemplateExport2/month/EquipmentMaintenanceRpt'
import GasAnalyzerRpt from '../ywTask/yw_rpt/rptTemplateExport2/month/GasAnalyzerRpt'
import CalibrationChecklistOfMulti from '../ywTask/yw_rpt/rptTemplateExport2/month/CalibrationChecklistOfMulti-gasDynamicCalibrator'
import ASEmergencyMonthRpt from '../ywTask/yw_rpt/rptTemplateExport2/month/ASEmergencyMonthRpt'
import ASEmergencyMonthPM10Rpt from '../ywTask/yw_rpt/rptTemplateExport2/month/ASEmergencyMonthPM10Rpt'

// 两月
import ParticulateOscillatingMonthPM10Rpt from '../ywTask/yw_rpt/rptTemplateExport2/month/ParticulateOscillatingMonthPM10Rpt'
import ParticulateOscillatingMonthPM25Rpt from '../ywTask/yw_rpt/rptTemplateExport2/month/ParticulateOscillatingMonthPM2.5Rpt'

// 季度
import ParticulateMatterQuarterRpt from '../ywTask/yw_rpt/rptTemplateExport2/quarter/ParticulateMatterQuarterRpt'
import PM10ParticulateMatterQuarter from '../ywTask/yw_rpt/rptTemplateExport2/quarter/PM10ParticulateMatterQuarter'
import PM25ParticulateMatterQuarter from '../ywTask/yw_rpt/rptTemplateExport2/quarter/PM25ParticulateMatterQuarter'
import O3CalibrationQuarterRpt from '../ywTask/yw_rpt/rptTemplateExport2/quarter/O3CalibrationQuarterRpt'
import SO2CalibrationQuarterRpt from '../ywTask/yw_rpt/rptTemplateExport2/quarter/SO2CalibrationQuarterRpt'
import NOxCalibrationQuarterRpt from '../ywTask/yw_rpt/rptTemplateExport2/quarter/NOxCalibrationQuarterRpt'
import COCalibrationQuarterRpt from '../ywTask/yw_rpt/rptTemplateExport2/quarter/COCalibrationQuarterRpt'
import PrecisionInstrumentQuarterlyRpt from '../ywTask/yw_rpt/rptTemplateExport2/quarter/PrecisionInstrumentQuarterlyRpt'
import PM25PrecisionInstrumentQuarterlyRpt from '../ywTask/yw_rpt/rptTemplateExport2/quarter/PM25PrecisionInstrumentQuarterlyRpt'
import PM10PrecisionInstrumentQuarterlyRpt from '../ywTask/yw_rpt/rptTemplateExport2/quarter/PM10PrecisionInstrumentQuarterlyRpt'
import ZDTPPM10PrecisionInstrumentQuarterlyRpt from '../ywTask/yw_rpt/rptTemplateExport2/quarter/ZDTPPM10PrecisionInstrumentQuarterlyRpt'
import ZDTPPM25TemperaturePressureCalibrationRpt from '../ywTask/yw_rpt/rptTemplateExport2/quarter/ZDTPPM25TemperaturePressureCalibrationRpt'
import Maintenancerecord from '../ywTask/yw_rpt/rptTemplateExport2/quarter/Maintenancerecord'

// 半年
import HalfyearmaintenanceRpt from '../ywTask/yw_rpt/rptTemplateExport2/halfYear/HalfyearmaintenanceRpt'
import NitrogenOxideConversionRecordRpt from '../ywTask/yw_rpt/rptTemplateExport2/halfYear/NitrogenOxideConversionRecordRpt'
import ConversionRateofMolybdenumFurnace from '../ywTask/yw_rpt/rptTemplateExport2/halfYear/ConversionRateofMolybdenumFurnace'

// 年
import MeasurementTraceabilityTransmissionRpt from '../ywTask/yw_rpt/rptTemplateExport2/oneYear/MeasurementTraceabilityTransmissionRpt'
import SO2AnalyzerAccuracyAuditRecordRpt from '../ywTask/yw_rpt/rptTemplateExport2/oneYear/SO2AnalyzerAccuracyAuditRecordRpt'
import NOxAnalyzerAccuracyAuditRecordRpt from '../ywTask/yw_rpt/rptTemplateExport2/oneYear/NOxAnalyzerAccuracyAuditRecordRpt'
import COAnalyzerAccuracyAuditRecordRpt from '../ywTask/yw_rpt/rptTemplateExport2/oneYear/COAnalyzerAccuracyAuditRecordRpt'
import O3AnalyzerAccuracyAuditRecordRpt from '../ywTask/yw_rpt/rptTemplateExport2/oneYear/O3AnalyzerAccuracyAuditRecordRpt'
import TraceVibrationQualityCalibrationRpt from '../ywTask/yw_rpt/rptTemplateExport2/oneYear/TraceVibrationQualityCalibrationRpt'
import ListofPatrolRecordsofAirProvincial from '../ywTask/yw_rpt/rptTemplateExport2/oneYear/ListofPatrolRecordsofAirProvincial'
import NJDEnvironmentalMaintenanceRecordRpt from '../ywTask/yw_rpt/rptTemplateExport2/oneYear/NJDEnvironmentalMaintenanceRecordRpt'
import MaintenanceOfVisibilityRpt from '../ywTask/yw_rpt/rptTemplateExport2/oneYear/MaintenanceOfVisibilityRpt'
import ManualComparisonSamplingRpt from '../ywTask/yw_rpt/rptTemplateExport2/oneYear/ManualComparisonSamplingRpt'
import ComparisonParticulateMatterRpt from '../ywTask/yw_rpt/rptTemplateExport2/oneYear/ComparisonParticulateMatterRpt'
import ParticulateOscillatingMonthPM25Rptnian from '../ywTask/yw_rpt/rptTemplateExport2/oneYear/ParticulateOscillatingMonthPM25Rpt'
import hjkqzlzdjcyqbjghjl from '../ywTask/yw_rpt/rptTemplateExport2/oneYear/hjkqzlzdjcyqbjghjl'
import hjkqzlzdjcyqhpbjghjl from '../ywTask/yw_rpt/rptTemplateExport2/oneYear/hjkqzlzdjcyqhpbjghjl'
import hjkqzlzdjcxtzdxxqkb from '../ywTask/yw_rpt/rptTemplateExport2/oneYear/hjkqzlzdjcxtzdxxqkb'

// 其它
import hjkqzlzdjcyqbjghjlnew from '../ywTask/yw_rpt/rptTemplateExport2/other/hjkqzlzdjcyqbjghjlnew'
import kqzdjcyqwhwxjlb from '../ywTask/yw_rpt/rptTemplateExport2/other/kqzdjcyqwhwxjlb'
import ycqkyjzjlb from '../ywTask/yw_rpt/rptTemplateExport2/other/ycqkyjzjlb'

import { saveAs } from '../ywTask/yw_rpt/js/FileSaver'
export default {
  name: 'v_deviceOnlineInfo',
  data() {
    return {
      empt: '',
      isRefresh: true,
      //运维单位绑定下拉框信息
      CheckData: [], // [{sStation:'SS4301051'},{sStation:'SS4301051'}]
      queryparam: {
        SearchTime: '2022-02',
        chooseStationIds: 'SS4201051',
      },
      formData1: {},
      formData2: {},
      arr: [],
    } //return ending
  },
  components: {
    treeSStation,
    rptImg,
    rptHeader,
    rptFooter,
    AnalyzerOperationStatusCheckRecordForm,
    COAnlyzerOperaWeekRpt,
    InspectionSummaryRpt,
    NOXAnlyzerOperaRpt,
    O3AnlyzerOperaRpt,
    PM10AnlyzerOperaWeekRpt,
    PM25AnlyzerOperaWeekRpt,
    ProvincialRpt,

    ParticulateOscillatingMonthRpt,
    EquipmentMaintenanceRpt,
    GasAnalyzerRpt,
    CalibrationChecklistOfMulti,
    ASEmergencyMonthRpt,
    ASEmergencyMonthPM10Rpt,

    ParticulateOscillatingMonthPM10Rpt,
    ParticulateOscillatingMonthPM25Rpt,

    ParticulateMatterQuarterRpt,
    PM10ParticulateMatterQuarter,
    PM25ParticulateMatterQuarter,
    O3CalibrationQuarterRpt,
    SO2CalibrationQuarterRpt,
    NOxCalibrationQuarterRpt,
    COCalibrationQuarterRpt,
    PrecisionInstrumentQuarterlyRpt,
    PM25PrecisionInstrumentQuarterlyRpt,
    PM10PrecisionInstrumentQuarterlyRpt,
    ZDTPPM10PrecisionInstrumentQuarterlyRpt,
    ZDTPPM25TemperaturePressureCalibrationRpt,
    Maintenancerecord,

    HalfyearmaintenanceRpt,
    NitrogenOxideConversionRecordRpt,
    ConversionRateofMolybdenumFurnace,

    MeasurementTraceabilityTransmissionRpt,
    SO2AnalyzerAccuracyAuditRecordRpt,
    NOxAnalyzerAccuracyAuditRecordRpt,
    COAnalyzerAccuracyAuditRecordRpt,
    O3AnalyzerAccuracyAuditRecordRpt,
    TraceVibrationQualityCalibrationRpt,
    ListofPatrolRecordsofAirProvincial,
    NJDEnvironmentalMaintenanceRecordRpt,
    MaintenanceOfVisibilityRpt,
    ManualComparisonSamplingRpt,
    ComparisonParticulateMatterRpt,
    ParticulateOscillatingMonthPM25Rptnian,
    hjkqzlzdjcyqbjghjl,
    hjkqzlzdjcyqhpbjghjl,
    hjkqzlzdjcxtzdxxqkb,

    hjkqzlzdjcyqbjghjlnew,
    kqzdjcyqwhwxjlb,
    ycqkyjzjlb,
  },
  computed: {},
  created() {},
  watch: {
    queryparam: {
      handler: function () {
        // this.getList();
      },
      deep: true,
    },
  },
  mounted() {
    this.getParam()
    this.getList()
  },
  methods: {
    Search() {
      this.getList()
      // var self=this;
      // this.$emit("closeCurrentPage", "电子表单一键导出"); //调用closeCurrentPage方法注意；两点1：第二个参数必须是string，2：长度必须大于等于4
      // setTimeout(()=>{
      //     self.open()
      // }, 3000);
    },
    // open(){
    //     var obj = {SearchTime:self.queryparam.SearchTime,chooseStationIds:self.queryparam.chooseStationIds};
    //     this.$emit("jump", {
    //         param: "电子表单一键导出",
    //         path: "/ExportFormOfOneKey?obj="+JSON.stringify(obj),
    //         isjump: true,
    //     });
    //  },
    getList() {
      var self = this
      this.isRefresh = false
      this.arr = []
      this.$nextTick(() => {
        this.$http({
          method: 'GET',
          url:
            this.api +
            '/api/Common/getReportByStnMonth?CreatedTime=' +
            self.queryparam.SearchTime +
            '&SStation=' +
            self.queryparam.chooseStationIds,
        })
          .then((res) => {
            if (res.data.code == 200) {
              if (res.data.data != null) {
                res.data.data.forEach((item, index) => {
                  self.arr.push({
                    rptName: item.name,
                    englishName: item.englishName,
                    weekNumInMonth: item.weekNumInMonth,
                    taskData: {
                      city: item.city,
                      sStationName: item.sStationname,
                      unitName: item.unitName,
                    },
                    footerData: {
                      taskNo: item.taskNo,
                      reportCode: item.reportCode,
                      dealerName: item.createUsr,
                      createTime: item.createTime,
                      nextAuditerName: item.auditeUsr,
                      auditeTime: item.auditeTime,
                    },
                    content: item.content,
                  })
                })
                this.isRefresh = true
              }
            }
          })
          .catch((error) => {
            console.log(error)
          })
      })
    },
    //获取参数
    getParam() {
      var self = this
      const data = self.getUrlKey('obj')
      if (data != null) {
        self.queryparam.SearchTime = JSON.parse(data).SearchTime
        self.queryparam.chooseStationIds = JSON.parse(data).chooseStationIds
      }
    },
    getUrlKey(name) {
      return (
        decodeURIComponent(
          (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(
            location.href
          ) || [, ''])[1].replace(/\+/g, '%20')
        ) || null
      )
    },
    getSearchStations(obj) {
      var self = this
      var configIds = ''
      if (obj != null) {
        obj.forEach((o) => {
          configIds += o.sStation
        })
        self.queryparam.chooseStationIds = configIds
      }
    },
    exprotReport() {
      var self = this
      var exportMain = $('#exportWord').clone()
      exportMain.find('input').each(function () {
        if ($(this).attr('type') != 'hidden') {
          if ($(this).attr('type') == 'radio') {
            if ($(this).is(':checked')) {
              $(this).after('√')
            }
          } else {
            var html = $(this).val()
            $(this).after('<lable>' + html + '</lable>')
          }
        }
        $(this).remove()
      })
      exportMain.find('button').each(function () {
        $(this).remove()
      })
      exportMain.find('.el-input').each(function (i, item) {
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
      exportMain.wordExport('运维表单')
    },
    handleReturn() {
      $emit(this, 'closeCurrentPage', '电子表单一键导出') //调用closeCurrentPage方法注意；两点1：第二个参数必须是string，2：长度必须大于等于4
      var obj = {
        SearchTime: this.queryparam.SearchTime,
        chooseStationIds: this.queryparam.chooseStationIds,
      }
      $emit(this, 'jump', {
        param: '电子表单一键导出',
        path: '/ExportFormOfOneKey?obj=' + JSON.stringify(obj),
        isjump: true,
      })
    },
    downloadReport() {
      debugger
      var type = 'sMonth'
      var self = this
      self.loading = true
      if (self.queryparam.SearchTime == '') {
        self.$message({
          message: '请选择月份!',
          type: 'warning', //success,warning,info,error
        })
        self.loading = false
        return
      }
      if (
        self.queryparam.chooseStationIds == '' ||
        self.queryparam.chooseStationIds.length != 9
      ) {
        self.$message({
          message: '请选且选一个站点导出!',
          type: 'warning', //success,warning,info,error
        })
        self.loading = false
        return
      }
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_Report/ZHYWForm?stime=' +
          self.queryparam.SearchTime +
          '&sstation=' +
          self.queryparam.chooseStationIds,
      })
        .then((res) => {
          if (res.status == 200) {
            if (res.data.message == '生成失败') {
              self.$message({
                message: '生成word失败，无法下载',
                type: 'error', //success,warning,info,error
              })
              return
            } else if (res.data.message == '数据质量不全，无法生成报表') {
              self.$message({
                message: '数据质量不全，无法生成报表',
                type: 'error', //success,warning,info,error
              })
              return
            } else {
              //开始导出
              location.href =
                self.api +
                '/api/Yw_Report/DownLoadYwReportByUrl?path=' +
                res.data.message
            }
            self.loading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  emits: ['closeCurrentPage', 'jump'],
}
</script>

<style scoped>
#v_deviceOnlineInfo {
  color: black;
}
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #c8c8c8;
}
.el-aside {
  color: #333;
}
.el-header {
  height: 100px !important;
}
.el-header .search {
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  text-align: left;
}
.el-header .search .btn {
  position: absolute;
  right: 12px;
  top: 2px;
}
.el-header .tools {
  height: 40px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  line-height: 35px;
  text-align: right;
  padding: 0px 5px;
}
.el-main {
  height: calc(100vh - 356px);
}
div.topbar {
  position: fixed;
  top: 100px;
  left: 250px;
  margin: 10px;
  z-index: 66;
}
div.topbar2 {
  position: fixed;
  top: 100px;
  right: 100px;
  margin: 10px;
  z-index: 67;
}
</style>
