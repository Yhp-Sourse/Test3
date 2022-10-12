<template>
  <div id="v_map">
    <div>
      <img class="tuli" src="../../../assets/Images/mapIcon/tuli.png" />
    </div>
    <div id="container"></div>
    <el-dialog
      title="站点信息"
      v-model:visible="isShow"
      width="30%"
      :modal="false"
      center
    >
      <div class="stn">
        <span>{{ sstationObj.city }}-{{ sstationObj.sStation }}</span>
      </div>
      <div class="jwd">
        <div class="jwdItem">
          <span>经度</span>
          <hr />
          <span>{{ sstationObj.gLongitude }}</span>
        </div>
        <div class="jwdItem">
          <span>纬度</span>
          <hr />
          <span>{{ sstationObj.gLatitude }}</span>
        </div>
        <div class="jwdItem">
          <span>日期</span>
          <hr />
          <span>{{ sstationObj.show_queryTime }}</span>
        </div>
      </div>
      <div class="stn">
        <span>实时数据</span>
      </div>
      <div class="sshj">
        <div class="sshjItem">
          <span>PM<sub>2.5</sub></span>
          <hr />
          <span>{{ parseFloat(sstationObj.pM25OneHour * 1000) }}</span>
        </div>

        <div class="sshjItem">
          <span>PM<sub>10</sub></span>
          <hr />
          <span>{{ parseFloat(sstationObj.pM10OneHour * 1000) }}</span>
        </div>

        <div class="sshjItem">
          <span>O<sub>3</sub></span>
          <hr />
          <span>{{ parseFloat(sstationObj.o3OneHour * 1000) }}</span>
        </div>

        <div class="sshjItem">
          <span>SO<sub>2</sub></span>
          <hr />
          <span>{{ parseFloat(sstationObj.sO2OneHour * 1000) }}</span>
        </div>

        <div class="sshjItem">
          <span>NO<sub>2</sub></span>
          <hr />
          <span>{{ parseFloat(sstationObj.nO2OneHour * 1000) }}</span>
        </div>

        <div class="sshjItem">
          <span>CO</span>
          <hr />
          <span>{{ parseFloat(sstationObj.coOneHour) }}</span>
        </div>

        <div class="sshjItem">
          <span>AQI</span>
          <hr />
          <span>{{ sstationObj.aqi }}</span>
        </div>

        <div class="sshjItem">
          <span>空气质量</span>
          <hr />
          <span>{{ sstationObj.aqType }}</span>
        </div>
      </div>

      <div class="stn">
        <span>历史数据</span>
      </div>
      <div class="his">
        <div
          v-for="(item, index) in tabsType"
          :class="active === index ? 'hisItem hisItemActive' : 'hisItem'"
          :key="index"
          @click="showHis(index, item)"
        >
          <span>{{ item }}</span>
        </div>
      </div>
      <div>
        <rateEcharts
          :chartData="HisDataOption"
          :echartStyle="HisStyle"
        ></rateEcharts>
      </div>

      <div class="stn">
        <span>设备状态</span>
      </div>
      <div class="dev">
        <div
          class="devItem"
          v-for="(item, index) in sstationObj.listDev"
          :key="index"
        >
          <div style="width: 30%; float: left">
            <span
              style="
                display: block;
                overflow: hidden;
                line-height: 50px;
                background: #1e9fff;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin: 15px 0;
              "
              >{{ item.param }}</span
            >
          </div>
          <div style="width: 70%; float: right">
            <p>
              <span>品牌：{{ item.facName }}</span>
            </p>
            <p>
              <span>型号：{{ item.model }}</span>
            </p>
            <p>
              <span>状态：{{ item.show_Status }}</span>
            </p>
            <p>
              <span>日期：{{ item.show_ProductionDate }}</span>
            </p>
          </div>
        </div>
      </div>

      <div class="stn">
        <span>运维信息</span>
      </div>
      <div class="ywxx">
        <div class="ywxxItem">
          <span>运维人员</span>
        </div>
        <div class="ywxxItem">
          <span>两率信息</span>
        </div>
      </div>
      <div class="ywxx">
        <div class="ywxxItem2">
          <span>姓名</span>
        </div>
        <div class="ywxxItem2">
          <span>运维单位</span>
        </div>
        <div class="ywxxItem3">
          <span>数据捕获率</span>
        </div>
        <div class="ywxxItem3">
          <span>质控合格率</span>
        </div>
        <div class="ywxxItem3">
          <span>得分</span>
        </div>
      </div>

      <div class="ywxx">
        <div class="ywxxItem2">
          <span>{{ sstationObj.ywPerson }}</span>
        </div>
        <div class="ywxxItem2">
          <span>{{ sstationObj.ywUnitName }}</span>
        </div>
        <div class="ywxxItem3">
          <span>{{ sstationObj.shbhl }}</span>
        </div>
        <div class="ywxxItem3">
          <span>{{ sstationObj.zkhgl }}</span>
        </div>
        <div class="ywxxItem3">
          <span>{{ sstationObj.score }}</span>
        </div>
      </div>

      <div class="stn">
        <span>八方位图</span>
      </div>
      <div class="stn">
        <span>暂无数据</span>
      </div>
    </el-dialog>
    <div>
      <el-switch
        v-model:value="switchValue"
        @change="change"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </el-switch>
    </div>
    <!-- <div class="toolbars">
              <a href="javascript:void(0)" class="item"> <span class="icon"> <i class="el-icon-view"></i> </span> <span class="name">系统通知</span></a>  
              <a href="javascript:void(0)" class="item"> <span class="icon"> <i class="el-icon-view"></i> </span> <span class="name">消息提醒</span></a>  
              <a href="javascript:void(0)" class="item"> <span class="icon"> <i class="el-icon-view"></i> </span> <span class="name">任务列表</span></a>  
              <a href="javascript:void(0)" class="item"> <span class="icon"> <i class="el-icon-view"></i> </span> <span class="name">任务统计</span></a>  
          </div> -->
    <div class="box1"><i :class="iconClass" @click="hide"></i></div>
    <div class="toolbars">
      <template v-for="(i, index) in taskType">
        <template v-if="i.dictCode == 1">
          <!-- 周 -->
          <div
            v-if="i.finishedCount != -1"
            :title="i.info"
            style="
              background: rgb(5, 106, 136);
              width: 120px;
              height: 120px;
              border: 1px solid #000;
              border-radius: 50%;
              color: red;
              line-height: 40px;
              font-size: 15px;
              margin: 10px auto;
            "
          >
            <p style="color: #eef13d">{{ i.info }}</p>
            <p style="color: #eef13d"></p>
            <p style="color: #eef13d">{{ i.time }}</p>
            <p style="color: #eef13d">{{ i.finishedCount }}/113</p>
          </div>
        </template>
        <template v-if="i.dictCode == 2">
          <!-- 单月 -->
          <div
            v-if="i.finishedCount != -1"
            :title="i.info"
            style="
              background: rgb(5, 106, 136);
              width: 120px;
              height: 120px;
              border: 1px solid #000;
              border-radius: 50%;
              color: red;
              line-height: 40px;
              font-size: 15px;
              margin: 10px auto;
            "
          >
            <p style="color: #eef13d">{{ i.info }}</p>
            <p style="color: #eef13d"></p>
            <p style="color: #eef13d">{{ i.time }}</p>
            <p style="color: #eef13d">{{ i.finishedCount }}/113</p>
          </div>
        </template>
        <!-- 两月 -->
        <template v-if="i.dictCode == 6">
          <div
            v-if="i.finishedCount != -1"
            :title="i.info"
            style="
              background: rgb(5, 106, 136);
              width: 120px;
              height: 120px;
              border: 1px solid #000;
              border-radius: 50%;
              color: red;
              line-height: 30px;
              font-size: 15px;
              margin: 10px auto;
            "
          >
            <p style="color: #eef13d">{{ i.info }}</p>
            <p style="color: #eef13d; font-size: 12px">(温湿度、气压和时钟)</p>
            <p style="color: #eef13d">{{ i.time }}</p>
            <p style="color: #eef13d">{{ i.finishedCount }}/113</p>
          </div>
        </template>
        <template v-if="i.dictCode == 3">
          <!-- 季度 -->
          <div
            v-if="i.finishedCount != -1"
            :title="i.info"
            style="
              background: rgb(5, 106, 136);
              width: 120px;
              height: 120px;
              border: 1px solid #000;
              border-radius: 50%;
              color: red;
              line-height: 30px;
              font-size: 15px;
              margin: 10px auto;
            "
          >
            <p style="color: #eef13d">{{ i.info }}</p>
            <p style="color: #eef13d; font-size: 12px">(温度压力校准)</p>
            <p style="color: #eef13d">{{ i.time }}</p>
            <p style="color: #eef13d">{{ i.finishedCount }}/113</p>
          </div>
        </template>
        <template v-if="i.dictCode == 3">
          <!-- 季度 -->
          <div
            v-if="i.finishedCount != -1"
            :title="i.info"
            style="
              background: rgb(5, 106, 136);
              width: 120px;
              height: 120px;
              border: 1px solid #000;
              border-radius: 50%;
              color: red;
              line-height: 30px;
              font-size: 15px;
              margin: 10px auto;
            "
          >
            <p style="color: #eef13d">{{ i.info }}</p>
            <p style="color: #eef13d; font-size: 12px">(臭氧传递)</p>
            <p style="color: #eef13d">{{ i.time }}</p>
            <p style="color: #eef13d">{{ i.finishedCount }}/113</p>
          </div>
        </template>

        <template v-if="i.dictCode == 4">
          <!-- 半年 -->
          <div
            v-if="i.finishedCount != -1"
            :title="i.info"
            style="
              background: rgb(5, 106, 136);
              width: 120px;
              height: 120px;
              border: 1px solid #000;
              border-radius: 50%;
              color: red;
              line-height: 30px;
              font-size: 15px;
              margin: 10px auto;
            "
          >
            <p style="color: #eef13d">{{ i.info }}</p>
            <p style="color: #eef13d; font-size: 12px">(MFC)</p>
            <p style="color: #eef13d">{{ i.time }}</p>
            <p style="color: #eef13d">{{ i.finishedCount }}/113</p>
          </div>
        </template>

        <template v-if="i.dictCode == 5">
          <!-- 年 -->
          <div
            v-if="i.finishedCount != -1"
            :title="i.info"
            style="
              background: rgb(5, 106, 136);
              width: 120px;
              height: 120px;
              border: 1px solid #000;
              border-radius: 50%;
              color: red;
              line-height: 30px;
              font-size: 15px;
              margin: 10px auto;
            "
          >
            <p style="color: #eef13d">{{ i.info }}</p>
            <p style="color: #eef13d; font-size: 12px">(能见度监测)</p>
            <p style="color: #eef13d">{{ i.time }}</p>
            <p style="color: #eef13d">{{ i.finishedCount }}/113</p>
          </div>
        </template>

        <template v-if="i.dictCode == 7">
          <!-- 应急 -->
          <div
            v-if="i.finishedCount != -1"
            :title="i.info"
            style="
              background: rgb(5, 106, 136);
              width: 120px;
              height: 120px;
              border: 1px solid #000;
              border-radius: 50%;
              color: red;
              line-height: 40px;
              font-size: 15px;
              margin: 10px auto;
            "
          >
            <p style="color: #eef13d">{{ i.info }}</p>
            <p style="color: #eef13d">次数</p>
            <p style="color: #eef13d">{{ i.finishedCount }}</p>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
import hubeiJson from '../../../assets/JS/hubei'
import { wgs84_to_gcj02 } from '../../../assets/JS/wgs84_to_gcj02'
import rateEcharts from './rateEcharts'
import * as Vue from 'vue'
export default {
  name: 'v_map',
  data() {
    return {
      taskType: [],
      taskType2: [],
      iconClass: 'el-icon-d-arrow-left b',
      msg: '我是地图组件',
      switchValue: true,
      hourData: [],
      markers: [],
      fillColor: 'blue',
      noticeData: [],
      ywTaskData: [],
      queryParam: {},
      alermData: [],
      option: {},
      HisDataOption: {},
      HisStyle: 'width:520px;height:200px;',
      isShow: false,
      timer: null,
      sstationObj: {},
      active: 0,
      tabsType: ['分钟', '小时', '日', '月', '年'],
      devData: [
        {
          id: 1,
          param: 'PM10监测仪',
          facName: '研华科技',
          model: 'TH-2000PM',
          producionDate: '2013-01-01',
          stauts: '2',
        },
        {
          id: 2,
          param: 'PM2.5监测仪',
          facName: '研华科技',
          model: 'TH-2000PM',
          producionDate: '2013-01-01',
          stauts: '2',
        },
        {
          id: 3,
          param: 'NOX',
          facName: '研华科技',
          model: 'TH-2000PM',
          producionDate: '2013-01-01',
          stauts: '2',
        },
        {
          id: 4,
          param: 'SO2',
          facName: '研华科技',
          model: 'TH-2000PM',
          producionDate: '2013-01-01',
          stauts: '2',
        },
        {
          id: 5,
          param: 'O3',
          facName: '研华科技',
          model: 'TH-2000PM',
          producionDate: '2013-01-01',
          stauts: '2',
        },
        {
          id: 6,
          param: 'CO',
          facName: '研华科技',
          model: 'TH-2000PM',
          producionDate: '2013-01-01',
          stauts: '2',
        },
      ],
    }
  },
  created() {
    // this.getNoticeData();
    // this.getYwTaskData();
    // this.getAlermData();
    // this.getYwTaskTotal();
    this.timer = setInterval(() => {
      var d = new Date()
      if (d.getSeconds() % 2 == 0) {
        this.xs()
      } else {
        this.yc()
      }
    }, 1000)
    this.$nextTick(() => {
      //这里放你要更新的数据
      var Enumerable = require('linq')
      this.InitTaskType()
      setTimeout(() => {
        debugger
        this.taskType = Enumerable.from(this.taskType)
          .orderBy(function (p) {
            return p.sort
          })
          .toArray()
        this.hide() //必须这么写，不然出不来，后面在研究
        this.hide() //必须这么写，不然出不来，后面在研究
        this.hide() //必须这么写，不然出不来，后面在研究
      }, 5000)
    })
  },
  mounted() {
    this.initMap()
  },
  updated() {
    this.$nextTick(function () {
      //在下次 DOM 更新循环结束之后执行这个回调。在修改数据之后立即使用这个方法，获取更新后的DOM.
      console.log(this.taskType)
    })
  },
  beforeUnmount() {
    clearInterval(this.timer)
  },
  methods: {
    xs() {
      $('.wx').show()
    },
    yc() {
      $('.wx').hide()
    },
    change() {
      this.initMap()
    },
    jumpTo(param, path) {
      $emit(this, 'jump', { param: param, path: path, isjump: true })
    },
    showHis(i, name) {
      var Enumerable = require('linq')
      this.active = i
      switch (this.active) {
        case 0:
          var _PM25 = Enumerable.from(this.sstationObj.minuHisData)
            .select('a=>a.pM25')
            .toArray()
          var _PM10 = Enumerable.from(this.sstationObj.minuHisData)
            .select('a=>a.pM10')
            .toArray()
          var _O3 = Enumerable.from(this.sstationObj.minuHisData)
            .select('a=>a.o3')
            .toArray()
          var _SO2 = Enumerable.from(this.sstationObj.minuHisData)
            .select('a=>a.sO2')
            .toArray()
          var _NO2 = Enumerable.from(this.sstationObj.minuHisData)
            .select('a=>a.nO2')
            .toArray()
          var _CO = Enumerable.from(this.sstationObj.minuHisData)
            .select('a=>a.co')
            .toArray()
          var _Time = Enumerable.from(this.sstationObj.minuHisData)
            .select('a=>a.queryTime')
            .toArray()
          //AQI值倒序跟一站一档的AQI值相同(reverse()倒序) 仪表盘数据源
          var _AQI2 = Enumerable.from(this.sstationObj.minuHisData)
            .select('a=>a.aQI')
            .toArray()
            .reverse()
          //折线图数据源
          var _AQI = Enumerable.from(this.sstationObj.minuHisData)
            .select('a=>a.aQI')
            .toArray()
          this.HisDataOption = {
            title: {
              text: '1小时污染物变化趋势',
              x: 'center',
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985',
                },
              },
            },
            legend: {
              data: ['PM2.5', 'PM10', 'SO2', 'NO2', 'O3', 'CO'],
              orient: 'horizontal',
              top: 30,
            },
            toolbox: {
              feature: {
                saveAsImage: {},
              },
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: _Time,
                axisLabel: {
                  //X轴刻度配置
                  rotate: 30,
                  interval: 0, //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                },
              },
            ],
            yAxis: [
              {
                name: 'ug/m3',
                type: 'value',
              },
              {
                name: 'mg/m3',
                type: 'value',
              },
            ],
            series: [
              {
                name: 'PM2.5',
                type: 'line',
                data: _PM25,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'PM10',
                type: 'line',
                data: _PM10,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'SO2',
                type: 'line',
                data: _SO2,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'NO2',
                type: 'line',
                data: _NO2,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'O3',
                type: 'line',
                data: _O3,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'CO',
                type: 'line',
                data: _CO,
                smooth: true,
                yAxisIndex: 1,
              },
            ],
          }
          break
        case 1:
          var _PM25 = Enumerable.from(this.sstationObj.horseHisData)
            .select('a=>a.pM25')
            .toArray()
          var _PM10 = Enumerable.from(this.sstationObj.horseHisData)
            .select('a=>a.pM10')
            .toArray()
          var _O3 = Enumerable.from(this.sstationObj.horseHisData)
            .select('a=>a.o3')
            .toArray()
          var _SO2 = Enumerable.from(this.sstationObj.horseHisData)
            .select('a=>a.sO2')
            .toArray()
          var _NO2 = Enumerable.from(this.sstationObj.horseHisData)
            .select('a=>a.nO2')
            .toArray()
          var _CO = Enumerable.from(this.sstationObj.horseHisData)
            .select('a=>a.co')
            .toArray()
          var _Time = Enumerable.from(this.sstationObj.horseHisData)
            .select('a=>a.queryTime')
            .toArray()

          this.HisDataOption = {
            title: {
              text: '24小时污染物变化趋势',
              x: 'center',
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985',
                },
              },
            },
            legend: {
              data: ['PM2.5', 'PM10', 'SO2', 'NO2', 'O3', 'CO'],
              orient: 'horizontal',
              top: 30,
            },
            toolbox: {
              feature: {
                saveAsImage: {},
              },
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: _Time,
                axisLabel: {
                  //X轴刻度配置
                  rotate: 30,
                  interval: 0, //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                },
              },
            ],
            yAxis: [
              {
                name: 'ug/m3',
                type: 'value',
              },
              {
                name: 'mg/m3',
                type: 'value',
              },
            ],
            series: [
              {
                name: 'PM2.5',
                type: 'line',
                data: _PM25,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'PM10',
                type: 'line',
                data: _PM10,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'SO2',
                type: 'line',
                data: _SO2,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'NO2',
                type: 'line',
                data: _NO2,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'O3',
                type: 'line',
                data: _O3,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'CO',
                type: 'line',
                data: _CO,
                smooth: true,
                yAxisIndex: 1,
              },
            ],
          }
          break
        case 2:
          var _PM25 = Enumerable.from(this.sstationObj.dayHisData)
            .select('a=>a.pM25')
            .toArray()
          var _PM10 = Enumerable.from(this.sstationObj.dayHisData)
            .select('a=>a.pM10')
            .toArray()
          var _O3 = Enumerable.from(this.sstationObj.dayHisData)
            .select('a=>a.o3')
            .toArray()
          var _SO2 = Enumerable.from(this.sstationObj.dayHisData)
            .select('a=>a.sO2')
            .toArray()
          var _NO2 = Enumerable.from(this.sstationObj.dayHisData)
            .select('a=>a.nO2')
            .toArray()
          var _CO = Enumerable.from(this.sstationObj.dayHisData)
            .select('a=>a.co')
            .toArray()
          var _Time = Enumerable.from(this.sstationObj.dayHisData)
            .select('a=>a.queryTime')
            .toArray()

          this.HisDataOption = {
            title: {
              text: '一个月污染物变化趋势',
              x: 'center',
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985',
                },
              },
            },
            legend: {
              data: ['PM2.5', 'PM10', 'SO2', 'NO2', 'O3', 'CO'],
              orient: 'horizontal',
              top: 30,
            },
            toolbox: {
              feature: {
                saveAsImage: {},
              },
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: _Time,
                axisLabel: {
                  //X轴刻度配置
                  rotate: 30,
                  interval: 0, //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                },
              },
            ],
            yAxis: [
              {
                name: 'ug/m3',
                type: 'value',
              },
              {
                name: 'mg/m3',
                type: 'value',
              },
            ],
            series: [
              {
                name: 'PM2.5',
                type: 'line',
                data: _PM25,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'PM10',
                type: 'line',
                data: _PM10,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'SO2',
                type: 'line',
                data: _SO2,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'NO2',
                type: 'line',
                data: _NO2,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'O3',
                type: 'line',
                data: _O3,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'CO',
                type: 'line',
                data: _CO,
                smooth: true,
                yAxisIndex: 1,
              },
            ],
          }
          break
        case 3:
          var _PM25 = Enumerable.from(this.sstationObj.monthHisData)
            .select('a=>a.pM25')
            .toArray()
          var _PM10 = Enumerable.from(this.sstationObj.monthHisData)
            .select('a=>a.pM10')
            .toArray()
          var _O3 = Enumerable.from(this.sstationObj.monthHisData)
            .select('a=>a.o3')
            .toArray()
          var _SO2 = Enumerable.from(this.sstationObj.monthHisData)
            .select('a=>a.sO2')
            .toArray()
          var _NO2 = Enumerable.from(this.sstationObj.monthHisData)
            .select('a=>a.nO2')
            .toArray()
          var _CO = Enumerable.from(this.sstationObj.monthHisData)
            .select('a=>a.co')
            .toArray()
          var _Time = Enumerable.from(this.sstationObj.monthHisData)
            .select('a=>a.queryTime')
            .toArray()
          this.HisDataOption = {
            title: {
              text: '12个月污染物变化趋势',
              x: 'center',
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985',
                },
              },
            },
            legend: {
              data: ['PM2.5', 'PM10', 'SO2', 'NO2', 'O3', 'CO'],
              orient: 'horizontal',
              top: 30,
            },
            toolbox: {
              feature: {
                saveAsImage: {},
              },
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: _Time,
                axisLabel: {
                  //X轴刻度配置
                  rotate: 30,
                  interval: 'auto', //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                },
              },
            ],
            yAxis: [
              {
                name: 'ug/m3',
                type: 'value',
              },
              {
                name: 'mg/m3',
                type: 'value',
              },
            ],
            series: [
              {
                name: 'PM2.5',
                type: 'line',
                data: _PM25,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'PM10',
                type: 'line',
                data: _PM10,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'SO2',
                type: 'line',
                data: _SO2,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'NO2',
                type: 'line',
                data: _NO2,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'O3',
                type: 'line',
                data: _O3,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'CO',
                type: 'line',
                data: _CO,
                smooth: true,
                yAxisIndex: 1,
              },
            ],
          }
          break
        case 4:
          var _PM25 = Enumerable.from(this.sstationObj.yearHisData)
            .select('a=>a.pM25')
            .toArray()
          var _PM10 = Enumerable.from(this.sstationObj.yearHisData)
            .select('a=>a.pM10')
            .toArray()
          var _O3 = Enumerable.from(this.sstationObj.yearHisData)
            .select('a=>a.o3')
            .toArray()
          var _SO2 = Enumerable.from(this.sstationObj.yearHisData)
            .select('a=>a.sO2')
            .toArray()
          var _NO2 = Enumerable.from(this.sstationObj.yearHisData)
            .select('a=>a.nO2')
            .toArray()
          var _CO = Enumerable.from(this.sstationObj.yearHisData)
            .select('a=>a.co')
            .toArray()
          var _Time = Enumerable.from(this.sstationObj.yearHisData)
            .select('a=>a.queryTime')
            .toArray()
          this.HisDataOption = {
            title: {
              text: '2年污染物变化趋势',
              x: 'center',
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985',
                },
              },
            },
            legend: {
              data: ['PM2.5', 'PM10', 'SO2', 'NO2', 'O3', 'CO'],
              orient: 'horizontal',
              top: 30,
            },
            toolbox: {
              feature: {
                saveAsImage: {},
              },
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: _Time,
                axisLabel: {
                  //X轴刻度配置
                  rotate: 30,
                  interval: 'auto', //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                },
              },
            ],
            yAxis: [
              {
                name: 'ug/m3',
                type: 'value',
              },
              {
                name: 'mg/m3',
                type: 'value',
              },
            ],
            series: [
              {
                name: 'PM2.5',
                type: 'line',
                data: _PM25,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'PM10',
                type: 'line',
                data: _PM10,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'SO2',
                type: 'line',
                data: _SO2,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'NO2',
                type: 'line',
                data: _NO2,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'O3',
                type: 'line',
                data: _O3,
                smooth: true,
                yAxisIndex: 0,
              },
              {
                name: 'CO',
                type: 'line',
                data: _CO,
                smooth: true,
                yAxisIndex: 1,
              },
            ],
          }
          break
      }
    },
    getNoticeData() {
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_NoticeMgr/GetAllNotice?pageSize=5&pageIndex=1',
      }).then((res) => {
        this.noticeData = res.data.data
      })
    },
    InitTaskType() {
      var self = this
      var Enumerable = require('linq')
      this.$http({
        method: 'GET',
        url: this.api + '/api/Select/GetSelectList?TypeCode=002006',
      })
        .then((res) => {
          debugger
          if (res.status == 200) {
            var currentMonth = '2021-06'
            var date = new Date()
            var week = self.getYearWeek(date)
            var year = date.getFullYear()
            var month = date.getMonth() + 1
            var nextMonth = date.getMonth() + 2 //结束时间 下个月
            month = month < 10 ? '0' + month : month
            currentMonth = year.toString() + '-' + month.toString()
            nextMonth = year.toString() + '-' + nextMonth.toString()

            self.taskType = Enumerable.from(res.data.data)
              .orderBy('p=>p.id')
              .toArray()
            self.taskType.forEach((item) => {
              if (item.dictCode == '1') {
                //1：周巡检
                item.time = year + '年' + (week > 9 ? week : '0' + week) + '周'
                item.sort = 1
                self
                  .$http({
                    method: 'GET',
                    url:
                      self.api +
                      '/api/Yw_Task/HomePageStatistics?pagesize=999&pageindex=1&isFinish=1&searchMonth=' +
                      currentMonth +
                      '&TaskCategoryType=' +
                      item.dictCode,
                  })
                  .then((res) => {
                    if (res.status == 200) {
                      item.finishedCount = res.data.count
                      // self.$set(self.taskType, "finishedCount", res.data.count);
                    }
                  })
                  .catch((error) => {
                    console.log(error)
                  })
              } else if (item.dictCode == '2') {
                //2：月巡检
                item.time = currentMonth + '月'
                item.sort = 2
                self
                  .$http({
                    method: 'GET',
                    url:
                      self.api +
                      '/api/Yw_Task/HomePageStatistics?pagesize=999&pageindex=1&isFinish=1&searchMonth=' +
                      currentMonth +
                      '&TaskCategoryType=' +
                      item.dictCode,
                  })
                  .then((res) => {
                    if (res.status == 200) {
                      item.finishedCount = res.data.count
                    }
                  })
                  .catch((error) => {
                    console.log(error)
                  })
              } else if (item.dictCode == '3') {
                //3：季度
                item.time = currentMonth + '月'
                item.sort = 4
                self
                  .$http({
                    method: 'GET',
                    url:
                      self.api +
                      '/api/Yw_Task/HomePageStatistics?pagesize=999&pageindex=1&isFinish=1&searchMonth=' +
                      currentMonth +
                      '&TaskCategoryType=' +
                      item.dictCode,
                  })
                  .then((res) => {
                    if (res.status == 200) {
                      item.finishedCount = res.data.count
                      // item.finishedCount=-1;
                      // if(res.data.data.length!=0 || res.data.data[0].seasonMonthShouldDo>0){//季度检查 如果某一个站点季度应该做的任务部位0，则判定该月有该任务类型，否则该月无该任务类型
                      //     item.finishedCount=res.data.count;
                      // }else{
                      //     item.finishedCount=-1;
                      // }
                    }
                  })
                  .catch((error) => {
                    item.finishedCount = -1
                    console.log(error)
                  })
              } else if (item.dictCode == '4') {
                //4：半年
                item.time = currentMonth + '月'
                item.sort = 5
                self
                  .$http({
                    method: 'GET',
                    url:
                      self.api +
                      '/api/Yw_Task/HomePageStatistics?pagesize=999&pageindex=1&isFinish=1&searchMonth=' +
                      currentMonth +
                      '&TaskCategoryType=' +
                      item.dictCode,
                  })
                  .then((res) => {
                    if (res.status == 200) {
                      //item.finishedCount=res.data.count;
                      item.finishedCount = -1
                      // if(res.data.data.length!=0 || res.data.data[0].halfYearMonthShouldDo>0){//半年检查 如果某一个站点应该做的任务部位0，则判定该月有该任务类型，否则该月无该任务类型
                      //     item.finishedCount=res.data.count;
                      // }else{
                      //     item.finishedCount=-1;
                      // }
                    }
                  })
                  .catch((error) => {
                    item.finishedCount = -1
                    console.log(error)
                  })
              } else if (item.dictCode == '5') {
                //5年
                item.time = currentMonth + '月'
                item.sort = 6
                self
                  .$http({
                    method: 'GET',
                    url:
                      self.api +
                      '/api/Yw_Task/HomePageStatistics?pagesize=999&pageindex=1&isFinish=1&searchMonth=' +
                      currentMonth +
                      '&TaskCategoryType=' +
                      item.dictCode,
                  })
                  .then((res) => {
                    if (res.status == 200) {
                      //item.finishedCount=res.data.count;
                      item.finishedCount = -1
                      // if(res.data.data.length!=0 || res.data.data[0].yearMonthShouldDo>0){//年度检查 如果某一个站点应该做的任务部位0，则判定该月有该任务类型，否则该月无该任务类型
                      //     item.finishedCount=res.data.count;
                      // }else{
                      //     item.finishedCount=-1;
                      // }
                    }
                  })
                  .catch((error) => {
                    item.finishedCount = -1
                    console.log(error)
                  })
              } else if (item.dictCode == '6') {
                //6：两月
                item.time = currentMonth + '月'
                item.sort = 3
                self
                  .$http({
                    method: 'GET',
                    url:
                      self.api +
                      '/api/Yw_Task/HomePageStatistics?pagesize=999&pageindex=1&isFinish=1&searchMonth=' +
                      currentMonth +
                      '&TaskCategoryType=' +
                      item.dictCode,
                  })
                  .then((res) => {
                    if (res.status == 200) {
                      item.finishedCount = -1
                      //item.finishedCount=res.data.count;
                      // if(res.data.data.length!=0 || res.data.data[0].twoMonthShouldDo>0){//两月检查 如果某一个站点应该做的任务部位0，则判定该月有该任务类型，否则该月无该任务类型
                      //     item.finishedCount=res.data.count;
                      // }else{
                      //     item.finishedCount=-1;
                      // }
                    }
                  })
                  .catch((error) => {
                    item.finishedCount = -1
                    console.log(error)
                  })
              } else {
                item.sort = 7
                nextMonth = '2099-07' //结束时间要下一个月
                self
                  .$http({
                    method: 'GET',
                    url:
                      this.api +
                      '/api/Yw_Task/GetTaskList?pagesize=999&pageindex=1&TaskCategoryId=7&Status=6&startDate=' +
                      currentMonth +
                      '&endDate=' +
                      nextMonth,
                  })
                  .then((res) => {
                    if (res.status == 200) {
                      item.finishedCount = res.data.total
                      // self.$set(self.taskType, "finishedCount", res.data.total);
                    }
                  })
                  .catch((error) => {
                    console.log(error)
                  })
              }
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getYwTaskData() {
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_Task/GetTaskList?pagesize=5&pageindex=1',
      }).then((res) => {
        this.ywTaskData = res.data.data
      })
    },
    getAlermData() {
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/AlarmRemind/GetAllAlarmMessage?pageSize=5&pageIndex=1',
      }).then((res) => {
        this.alermData = res.data.data
      })
    },
    async getYwTaskTotal() {
      var self = this
      await this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_Task/GetTaskTotal',
      }).then((res) => {
        self.option = {
          title: {
            text: '',
            left: 'center',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          legend: {
            bottom: 10,
            left: 'center',
            data: ['已完成', '处理中', '待下发'],
          },
          series: [
            {
              name: '占比',
              type: 'pie',
              radius: '60%',
              center: ['50%', '50%'],
              selectedMode: 'single',
              data: [
                { value: res.data.data.finishedCount, name: '已完成' },
                { value: res.data.data.unFinishedCount, name: '处理中' },
                { value: res.data.data.unGetTaskCount, name: '待下发' },
              ],
            },
          ],
        }
      })
    },
    initMap() {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Map_HourData/GetMapHourData',
      })
        .then((res) => {
          if (res.status == 200) {
            self.hourData = res.data.data
            var Map = new AMap.Map('container', {
              zoom: 8,
              center: [112.008497, 30.998136],
              pitch: 75, // 地图俯仰角度，有效范围 0 度- 83 度
              viewMode: this.switchValue ? '2D' : '3D', // 地图模式可选值：3D
            })
            Map.setMapStyle('amap://styles/c78a92b94cdeb9c4dbd0c7e7d42618dd')

            //湖北省地市州边界图
            var polygons = []
            hubeiJson.features.forEach((item) => {
              var polygon = new AMap.Polygon({
                map: Map,
                strokeWeight: 2,
                path: item.geometry.coordinates,
                fillOpacity: 0.1,
                fillColor: '#CCF3FF',
                strokeColor: '#1E9FFF',
              })
              polygons.push(polygon)
            })
            Map.add(polygons)

            self.hourData.forEach((item) => {
              //做出空判断
              item.aqi = item.aqi == null ? '--' : item.aqi
              item.pM10OneHour =
                item.pM10OneHour == null ? '--' : item.pM10OneHour
              item.pM25OneHour =
                item.pM25OneHour == null ? '--' : item.pM25OneHour
              item.sO2OneHour = item.sO2OneHour == null ? '--' : item.sO2OneHour
              item.nO2OneHour = item.nO2OneHour == null ? '--' : item.nO2OneHour
              item.o3OneHour = item.o3OneHour == null ? '--' : item.o3OneHour
              item.coOneHour = item.coOneHour == null ? '--' : item.coOneHour

              // 构造点标记
              if (item.gLongitude > 0 || item.gLatitude > 0) {
                var content = ''
                if (
                  item.sO2OneHour == '--' &&
                  item.nO2OneHour == '--' &&
                  item.pM10OneHour == '--' &&
                  item.coOneHour == '--' &&
                  item.o3OneHour == '--' &&
                  item.pM25OneHour == '--'
                ) {
                  if (
                    item.createdTime != null &&
                    new Date(item.createdTime) <= new Date() &&
                    item.backTime == null
                  ) {
                    //签到过，且在当前时间之前签到，还没有签退，则此站房有人在运维
                    content =
                      '' +
                      '<div class="custom-content-marker dh">' +
                      '   <img width=30px src="http://59.172.208.250:8100/Content/images/Guidepa/省控点离线.png">' +
                      '<div class="wx"><img alt=' +
                      item.realName +
                      ' title=' +
                      item.realName +
                      ' width=15px style="position: absolute;top: 8px;right: -10px;" src="http://59.172.208.250:8100/Content/images/Guidepa/维修.png"></div>' +
                      '</div>'
                  } else {
                    content =
                      '' +
                      '<div class="custom-content-marker">' +
                      '   <img width=30px src="http://59.172.208.250:8100/Content/images/Guidepa/省控点离线.png">' +
                      '</div>'
                  }
                } else {
                  if (
                    item.createdTime != null &&
                    new Date(item.createdTime) <= new Date() &&
                    item.backTime == null
                  ) {
                    //签到过，且在当前时间之前签到，还没有签退，则此站房有人在运维
                    content =
                      '' +
                      '<div class="custom-content-marker dh">' +
                      '   <img width=30px src="http://59.172.208.250:8100/Content/images/Guidepa/省控点在线' +
                      self.getbgColor('AQI', item.aqType).level +
                      '.png">' +
                      '<div class="wx"><img alt=' +
                      item.realName +
                      ' title=' +
                      item.realName +
                      ' width=15px style="position: absolute;top: 8px;right: -10px;" src="http://59.172.208.250:8100/Content/images/Guidepa/维修.png"></div>' +
                      '</div>'
                  } else {
                    content =
                      '' +
                      '<div class="custom-content-marker">' +
                      '   <img width=30px src="http://59.172.208.250:8100/Content/images/Guidepa/省控点在线' +
                      self.getbgColor('AQI', item.aqType).level +
                      '.png">' +
                      '</div>'
                  }
                }

                var marker = new AMap.Marker({
                  // position: [item.gLongitude, item.gLatitude],
                  position: wgs84_to_gcj02(item.gLongitude, item.gLatitude),
                  // 将 html 传给 content
                  content: content,
                  // 以 icon 的 [center bottom] 为原点
                  offset: new AMap.Pixel(-13, -15),
                })

                // 将点标记添加到地图上
                //marker.setAnimation('AMAP_ANIMATION_BOUNCE');// 设置点标记的动画效果，此处为弹跳效果
                marker.setTitle(item.sStation)
                Map.add(marker)
                marker.on('click', function () {
                  //构建信息窗体中显示的内容
                  var info = []
                  console.log(item)
                  self.sstationObj = item
                  info.push(
                    "<div style='background:#8d8d8d;text-align:left;border-radius: 4px;opacity: 0.8;padding: 6px;'>"
                  )
                  // info.push("<div><span style='font-size:18px;'>"+item.city+'-'+item.sStation+"</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='text-align:right;'>更多</span></div>");
                  info.push(
                    "<div style='display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: flex-start;align-items:center;'>"
                  )
                  info.push(
                    "<div style='width:90%;'><span style='font-size:18px;'>" +
                      item.city +
                      '-' +
                      item.sStation +
                      '</span></div>'
                  )
                  info.push(
                    "<div style='width:10%;text-align:right;font-size:20px;'><span class='more' v-on:click='more()'><a style='color:#fff;text-decoration: none;' href=#>更多</a></span></div>"
                  )
                  info.push('</div>')
                  info.push(
                    "<div style='display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: flex-start;align-items:center;'>"
                  )
                  info.push(
                    "<div style=''><span style='font-size:38px;'>" +
                      item.aqi +
                      '</span></div>'
                  )
                  info.push("<div style=''>")
                  if (item.aqType == null) {
                    item.aqType = '--'
                  }
                  info.push(
                    "<span style='width:30px;height:25px;background:" +
                      self.getbgColor('AQI', item.aqType).color +
                      ";text-align:center;'>" +
                      item.aqType +
                      '</span><br/>'
                  )
                  info.push("<span style=''>" + item.show_queryTime + '</span>')
                  info.push('</div>')
                  info.push('</div>')

                  info.push(
                    "<div style='display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: flex-start;align-items:center;width: 460px;text-align:center !important;'>"
                  )
                  if (item.pM25OneHour == '--') {
                    info.push("<div style='padding-left: 0 20px;width:60px;'>")
                    info.push("<span style=''>PM<sub>2.5</sub></span><br/>")
                    info.push("<span style=''>--</span><br/>")
                    info.push(
                      "<span style='width:30px;height:25px;text-align:center;font-size:14px;'>--</span><br/>"
                    )
                    info.push('</div>')
                  } else {
                    info.push("<div style='padding-left: 0 20px;width:60px;'>")
                    info.push("<span style=''>PM<sub>2.5</sub></span><br/>")
                    info.push(
                      "<span style=''>" +
                        parseFloat(item.pM25OneHour * 1000) +
                        '</span><br/>'
                    )
                    info.push(
                      "<span style='width:30px;height:25px;background:" +
                        self.getbgColor(
                          'PM2.5',
                          parseFloat(item.pM25OneHour * 1000)
                        ).color +
                        ";text-align:center;font-size:14px;'>" +
                        self.getbgColor(
                          'PM2.5',
                          parseFloat(item.pM25OneHour * 1000)
                        ).CHNType +
                        '</span><br/>'
                    )
                    info.push('</div>')
                  }
                  if (item.pM10OneHour == '--') {
                    info.push("<div style='padding-left: 0 20px;width:60px;'>")
                    info.push("<span style=''>PM<sub>10</sub></span><br/>")
                    info.push("<span style=''>--</span><br/>")
                    info.push(
                      "<span style='width:30px;height:25px;text-align:center;font-size:14px;'>--</span><br/>"
                    )
                    info.push('</div>')
                  } else {
                    info.push("<div style='padding-left: 0 20px;width:60px;'>")
                    info.push("<span style=''>PM<sub>10</sub></span><br/>")
                    info.push(
                      "<span style=''>" +
                        parseFloat(item.pM10OneHour * 1000) +
                        '</span><br/>'
                    )
                    info.push(
                      "<span style='width:30px;height:25px;background:" +
                        self.getbgColor(
                          'PM10',
                          parseFloat(item.pM10OneHour * 1000)
                        ).color +
                        ";text-align:center;font-size:14px;'>" +
                        self.getbgColor(
                          'PM10',
                          parseFloat(item.pM10OneHour * 1000)
                        ).CHNType +
                        '</span><br/>'
                    )
                    info.push('</div>')
                  }
                  if (item.o3OneHour == '--') {
                    info.push("<div style='padding-left: 0 20px;width:60px;'>")
                    info.push("<span style=''>O<sub>3</sub></span><br/>")
                    info.push("<span style=''>--</span><br/>")
                    info.push(
                      "<span style='width:30px;height:25px;text-align:center;font-size:14px;'>--</span><br/>"
                    )
                    info.push('</div>')
                  } else {
                    info.push("<div style='padding-left: 0 20px;width:60px;'>")
                    info.push("<span style=''>O<sub>3</sub></span><br/>")
                    info.push(
                      "<span style=''>" +
                        parseFloat(item.o3OneHour * 1000) +
                        '</span><br/>'
                    )
                    info.push(
                      "<span style='width:30px;height:25px;background:" +
                        self.getbgColor('O3', parseFloat(item.o3OneHour * 1000))
                          .color +
                        ";text-align:center;font-size:14px;'>" +
                        self.getbgColor('O3', parseFloat(item.o3OneHour * 1000))
                          .CHNType +
                        '</span><br/>'
                    )
                    info.push('</div>')
                  }
                  if (item.sO2OneHour == '--') {
                    info.push("<div style='padding-left: 0 20px;width:60px;'>")
                    info.push("<span style=''>SO<sub>2</sub></span><br/>")
                    info.push("<span style=''>--</span><br/>")
                    info.push(
                      "<span style='width:30px;height:25px;text-align:center;font-size:14px;'>--</span><br/>"
                    )
                    info.push('</div>')
                  } else {
                    info.push("<div style='padding-left: 0 20px;width:60px;'>")
                    info.push("<span style=''>SO<sub>2</sub></span><br/>")
                    info.push(
                      "<span style=''>" +
                        parseFloat(item.sO2OneHour * 1000) +
                        '</span><br/>'
                    )
                    info.push(
                      "<span style='width:30px;height:25px;background:" +
                        self.getbgColor(
                          'SO2',
                          parseFloat(item.sO2OneHour * 1000)
                        ).color +
                        ";text-align:center;font-size:14px;'>" +
                        self.getbgColor(
                          'SO2',
                          parseFloat(item.sO2OneHour * 1000)
                        ).CHNType +
                        '</span><br/>'
                    )
                    info.push('</div>')
                  }
                  if (item.sO2OneHour == '--') {
                    info.push("<div style='padding-left: 0 20px;width:60px;'>")
                    info.push("<span style=''>NO<sub>2</sub></span><br/>")
                    info.push("<span style=''>--</span><br/>")
                    info.push(
                      "<span style='width:30px;height:25px;text-align:center;font-size:14px;'>--</span><br/>"
                    )
                    info.push('</div>')
                  } else {
                    info.push("<div style='padding-left: 0 20px;width:60px;'>")
                    info.push("<span style=''>NO<sub>2</sub></span><br/>")
                    info.push(
                      "<span style=''>" +
                        parseFloat(item.nO2OneHour * 1000) +
                        '</span><br/>'
                    )
                    info.push(
                      "<span style='width:30px;height:25px;background:" +
                        self.getbgColor(
                          'NO2',
                          parseFloat(item.nO2OneHour * 1000)
                        ).color +
                        ";text-align:center;font-size:14px;'>" +
                        self.getbgColor(
                          'NO2',
                          parseFloat(item.nO2OneHour * 1000)
                        ).CHNType +
                        '</span><br/>'
                    )
                    info.push('</div>')
                  }
                  if (item.coOneHour == '--') {
                    info.push("<div style='padding-left: 0 20px;width:60px;'>")
                    info.push("<span style=''>CO<sub></sub></span><br/>")
                    info.push("<span style=''>--</span><br/>")
                    info.push(
                      "<span style='width:30px;height:25px;text-align:center;font-size:14px;'>--</span><br/>"
                    )
                    info.push('</div>')
                  } else {
                    info.push("<div style='padding-left: 0 20px;width:60px;'>")
                    info.push("<span style=''>CO<sub></sub></span><br/>")
                    info.push(
                      "<span style=''>" +
                        parseFloat(item.coOneHour) +
                        '</span><br/>'
                    )
                    info.push(
                      "<span style='width:30px;height:25px;background:" +
                        self.getbgColor('CO', parseFloat(item.coOneHour))
                          .color +
                        ";text-align:center;font-size:14px;'>" +
                        self.getbgColor('CO', parseFloat(item.coOneHour))
                          .CHNType +
                        '</span><br/>'
                    )
                    info.push('</div>')
                  }
                  if (item.primaryEP == null) {
                    info.push("<div style='padding-left: 0 20px;width:100px;'>")
                    info.push("<span style=''>首要污染物</span><br/>")
                    info.push("<span style=''>--</span><br/>")
                    info.push(
                      "<span style='width:30px;height:25px;text-align:center;font-size:14px;'>--</span><br/>"
                    )
                    info.push('</div>')
                  } else {
                    info.push("<div style='padding-left: 0 20px;width:100px;'>")
                    info.push("<span style=''>首要污染物</span><br/>")
                    info.push(
                      "<span style=''>" + item.primaryEP + '</span><br/>'
                    )
                    info.push(
                      "<span style='width:30px;height:25px;background:" +
                        self.getbgColor('AQI', item.aqType).color +
                        ";text-align:center;font-size:14px;'>" +
                        item.aqType +
                        '</span><br/>'
                    )
                    info.push('</div>')
                  }

                  info.push('</div>')

                  info.push('</div>')
                  var MyComponent = {
                    template: info.join(''),
                    data() {
                      return {}
                    },
                    methods: {
                      // 控制更多的显示，more即为更多的click方法
                      more: function () {
                        self
                          .$http({
                            method: 'GET',
                            url:
                              this.api +
                              '/api/Map_HourData/GetMapHourDataByStn?SSID=' +
                              item.ssid,
                          })
                          .then((result) => {
                            self.sstationObj = result.data.data[0]
                            console.log(self.sstationObj)
                            self.isShow = true
                            self.showHis(0, '分钟')
                          })
                      },
                    },
                    emits: ['jump'],
                  }
                  // 将新创建的子组件进行挂载
                  var component = new MyComponent().$mount()

                  var infoWindow = new AMap.InfoWindow({
                    // content: info.join(""),  //使用默认信息窗体框样式，显示信息内容
                    content: component.$el,
                    isCustom: true,
                    closeWhenClickMap: true,
                    size: new AMap.Size(500, 200),
                  })
                  // 打开窗体
                  infoWindow.open(
                    Map,
                    wgs84_to_gcj02(item.gLongitude, item.gLatitude)
                  )
                }) //给marker注册点击事件
              }
            })

            // 地图绑定事件
            Map.on('click', function (ev) {
              // 触发事件的对象
              var target = ev.target

              // 触发事件的地理坐标，AMap.LngLat 类型
              var lnglat = ev.lnglat

              // 触发事件的像素坐标，AMap.Pixel 类型
              var pixel = ev.pixel

              // 触发事件类型
              var type = ev.type
            })

            //高德自带组件
            AMap.plugin(
              [
                'AMap.ToolBar',
                'AMap.Scale',
                'AMap.OverView',
                'AMap.MapType',
                'AMap.Geolocation',
              ],
              function () {
                // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
                // Map.addControl(new AMap.ToolBar());

                // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
                Map.addControl(new AMap.Scale())

                // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
                Map.addControl(new AMap.OverView({ isOpen: false }))

                // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
                Map.addControl(new AMap.MapType())

                // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
                // Map.addControl(new AMap.Geolocation());
              }
            )
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    mapClick() {
      console.log('地图被点击！')
    },
    hide() {
      this.isSHow = !this.isSHow
      var aside2 = document.querySelector('.toolbars')
      var box = document.querySelector('.box')
      if (!this.isSHow) {
        this.iconClass = 'el-icon-d-arrow-right b'
        aside2.style.display = 'none'
      } else {
        this.iconClass = 'el-icon-d-arrow-left b'
        aside2.style.display = 'block'
      }
    },
    getYearWeek(endDate) {
      //本年的第一天
      var beginDate = new Date(endDate.getFullYear(), 0, 1)
      //星期从0-6,0代表星期天，6代表星期六
      var endWeek = endDate.getDay()
      if (endWeek == 0) endWeek = 7
      var beginWeek = beginDate.getDay()
      if (beginWeek == 0) beginWeek = 7
      //计算两个日期的天数差
      var millisDiff = endDate.getTime() - beginDate.getTime()
      var dayDiff = Math.floor(
        (millisDiff + (beginWeek - endWeek) * (24 * 60 * 60 * 1000)) / 86400000
      )
      return Math.ceil(dayDiff / 7) + 1
    },
    getbgColor(param, aqType) {
      var obj = { color: '', level: '', CHNType: '良' }
      if (param == 'AQI' && typeof aqType == 'number') {
        if (aqType > 0 && aqType <= 50) {
          obj.color = '#00E400'
          obj.level = '1'
        } else if (aqType > 51 && aqType <= 100) {
          obj.color = '#FFFF00'
          obj.level = '2'
        } else if (aqType > 101 && aqType <= 150) {
          obj.color = '#FF7E00'
          obj.level = '3'
        } else if (aqType > 151 && aqType <= 200) {
          obj.color = '#FF0000'
          obj.level = '4'
        } else if (aqType > 201 && aqType <= 300) {
          obj.color = '#99004C'
          obj.level = '5'
        } else if (aqType > 301) {
          obj.color = '#7E0023'
          obj.level = '6'
        } else {
          obj.color = '#808080'
          obj.level = '6'
        }
        return obj
      }
      if (param == 'AQI' && typeof aqType == 'string') {
        if (aqType == '优') {
          obj.color = '#00E400'
          obj.level = '1'
        } else if (aqType == '良') {
          obj.color = '#FFFF00'
          obj.level = '2'
        } else if (aqType == '轻度污染') {
          obj.color = '#FF7E00'
          obj.level = '3'
        } else if (aqType == '中度污染') {
          obj.color = '#FF0000'
          obj.level = '4'
        } else if (aqType == '重度污染') {
          obj.color = '#99004C'
          obj.level = '5'
        } else if (aqType == '严重污染') {
          obj.color = '#7E0023'
          obj.level = '6'
        } else {
          obj.color = '#808080'
          obj.level = '6'
        }
        return obj
      } else if (param == 'PM2.5') {
        if (aqType > 0 && aqType <= 35) {
          obj.color = '#00E400'
          obj.CHNType = '优'
        } else if (aqType >= 36 && aqType <= 75) {
          obj.color = '#FFFF00'
          obj.CHNType = '良'
        } else if (aqType >= 76 && aqType <= 115) {
          obj.color = '#FF7E00'
          obj.CHNType = '轻度污染'
        } else if (aqType >= 116 && aqType <= 150) {
          obj.color = '#FF0000'
          obj.CHNType = '中度污染'
        } else if (aqType >= 151 && aqType <= 250) {
          obj.color = '#99004C'
          obj.CHNType = '重度污染'
        } else if (aqType > 250) {
          obj.color = '#7E0023'
          obj.CHNType = '严重污染'
        } else {
          obj.color = '#808080'
          obj.CHNType = '离线'
        }
        return obj
      } else if (param == 'PM10') {
        if (aqType > 0 && aqType <= 50) {
          obj.color = '#00E400'
          obj.CHNType = '优'
        } else if (aqType >= 51 && aqType <= 150) {
          obj.color = '#FFFF00'
          obj.CHNType = '良'
        } else if (aqType >= 151 && aqType <= 250) {
          obj.color = '#FF7E00'
          obj.CHNType = '轻度污染'
        } else if (aqType >= 251 && aqType <= 350) {
          obj.color = '#FF0000'
          obj.CHNType = '中度污染'
        } else if (aqType >= 351 && aqType <= 420) {
          obj.color = '#99004C'
          obj.CHNType = '重度污染'
        } else if (aqType > 420) {
          obj.color = '#7E0023'
          obj.CHNType = '严重污染'
        } else {
          obj.color = '#808080'
          obj.CHNType = '离线'
        }
        return obj
      } else if (param == 'O3') {
        if (aqType > 0 && aqType <= 160) {
          obj.color = '#00E400'
          obj.CHNType = '优'
        } else if (aqType >= 161 && aqType <= 200) {
          obj.color = '#FFFF00'
          obj.CHNType = '良'
        } else if (aqType >= 201 && aqType <= 300) {
          obj.color = '#FF7E00'
          obj.CHNType = '轻度污染'
        } else if (aqType >= 301 && aqType <= 400) {
          obj.color = '#FF0000'
          obj.CHNType = '中度污染'
        } else if (aqType >= 401 && aqType <= 800) {
          obj.color = '#99004C'
          obj.CHNType = '重度污染'
        } else if (aqType > 800) {
          obj.color = '#7E0023'
          obj.CHNType = '严重污染'
        } else {
          obj.color = '#808080'
          obj.CHNType = '离线'
        }
        return obj
      } else if (param == 'SO2') {
        if (aqType > 0 && aqType <= 150) {
          obj.color = '#00E400'
          obj.CHNType = '优'
        } else if (aqType >= 151 && aqType <= 500) {
          obj.color = '#FFFF00'
          obj.CHNType = '良'
        } else if (aqType >= 501 && aqType <= 650) {
          obj.color = '#FF7E00'
          obj.CHNType = '轻度污染'
        } else if (aqType >= 651 && aqType <= 800) {
          obj.color = '#FF0000'
          obj.CHNType = '中度污染'
        } else if (aqType > 800) {
          obj.color = '#7E0023'
          obj.CHNType = '重度污染'
        } else {
          obj.color = '#808080'
          obj.CHNType = '离线'
        }
        return obj
      } else if (param == 'NO2') {
        if (aqType > 0 && aqType <= 100) {
          obj.color = '#00E400'
          obj.CHNType = '优'
        } else if (aqType >= 101 && aqType <= 200) {
          obj.color = '#FFFF00'
          obj.CHNType = '良'
        } else if (aqType >= 201 && aqType <= 700) {
          obj.color = '#FF7E00'
          obj.CHNType = '轻度污染'
        } else if (aqType >= 701 && aqType <= 1200) {
          obj.color = '#FF0000'
          obj.CHNType = '中度污染'
        } else if (aqType >= 1201 && aqType <= 2340) {
          obj.color = '#99004C'
          obj.CHNType = '重度污染'
        } else if (aqType > 2340) {
          obj.color = '#7E0023'
          obj.CHNType = '严重污染'
        } else {
          obj.color = '#808080'
          obj.CHNType = '离线'
        }
        return obj
      } else if (param == 'CO') {
        if (aqType > 0 && aqType <= 5) {
          obj.color = '#00E400'
          obj.CHNType = '优'
        } else if (aqType >= 6 && aqType <= 10) {
          obj.color = '#FFFF00'
          obj.CHNType = '良'
        } else if (aqType >= 11 && aqType <= 35) {
          obj.color = '#FF7E00'
          obj.CHNType = '轻度污染'
        } else if (aqType >= 36 && aqType <= 60) {
          obj.color = '#FF0000'
          obj.CHNType = '中度污染'
        } else if (aqType >= 61 && aqType <= 90) {
          obj.color = '#99004C'
          obj.CHNType = '重度污染'
        } else if (aqType > 90) {
          obj.color = '#7E0023'
          obj.CHNType = '严重污染'
        } else {
          obj.color = '#808080'
          obj.CHNType = '离线'
        }
        return obj
      }
      return obj
    },
  },
  components: {
    rateEcharts,
  },
  emits: ['jump'],
}
</script>

<style scoped>
* {
  color: #fff;
}
.b {
  color: #000 !important;
}
#container {
  width: 100%;
  height: calc(100vh - 105px);
}
.el-switch {
  position: absolute;
  right: 20px;
  top: 120px;
  z-index: 23;
}
.tuli {
  position: absolute;
  bottom: 0px;
  left: calc(50% - 215px);
  z-index: 99;
}
.el-carousel {
  position: absolute;
  right: 200px;
  top: 0px;
  z-index: 22;
  width: 250px;
  background: #fff;
}
.toolbars {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 22;
  width: 150px;
  height: 100%;
  overflow: auto;
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
.el-tabs--border-card > .el-tabs__content {
  padding: 0px !important;
}
.el-tab-pane {
  background: #fff !important;
}
a {
  text-decoration: none;
}
a:hover span,
a:hover i {
  font-size: 16px;
  color: #1e9fff;
}
.notice {
  background: #fff;
}
.notice .el-link {
  justify-content: flex-start !important;
}
.notice li {
  text-align: left;
  text-indent: 10px;
  padding: 4px;
  border-bottom: 1px solid #ccc;
}
.notice li .content {
  font-size: 20px;
  width: 280px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.notice li .cretime {
  font-size: 14px;
  text-align: right;
}
.box1:hover i {
  background: #fff;
  color: lightskyblue;
}
.box1 {
  font-size: 20px;
  color: darkslateblue;
  background: #fff;
  position: absolute;
  left: 0px;
  top: calc(50% - 58px);
  z-index: 23;
  opacity: 0.5;
}
.el-dialog__header {
  background: #1e9fff;
  width: 30%;
  margin: 0px auto;
  border-radius: 0 0 50px 50px;
  color: #fff;
}
.el-dialog__body {
  text-align: center;
}
.el-dialog__body span {
  color: #000 !important;
}
.el-dialog__body sub {
  color: #000 !important;
}
.stn {
  text-align: center;
  color: #000 !important;
}
hr {
  width: 80%;
  margin: 0 auto;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(30, 159, 255, 0),
    rgba(30, 100, 255, 0.75),
    rgba(30, 159, 255, 0)
  );
}
.jwd {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
.jwd .jwdItem {
  width: 30%;
  margin: 20px auto;
  height: 80px;
  border: 1px dashed #1e9fff;
  line-height: 40px;
}
.sshj {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
.sshj .sshjItem {
  width: 20%;
  height: 80px;
  border: 1px solid #1e9fff;
  line-height: 40px;
  margin: 10px auto;
}
.his {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
.his .hisItem {
  width: 20%;
  height: 30px;
  border: 1px solid #1e9fff;
  border-radius: 6px;
  line-height: 30px;
  margin: 10px auto;
}
.his .hisItem :hover {
  background: #1e9fff;
}
.hisItemActive {
  background: #1e9fff;
}
.dev {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
.dev .devItem {
  width: 30%;
  height: 80px;
  border: 1px solid #1e9fff;
  border-radius: 10px;
  line-height: 30px;
  margin: 10px auto;
}
.dev .devItem p {
  overflow: hidden;
  font-size: 12px;
  line-height: 20px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ywxx {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
.ywxx .ywxxItem {
  width: 50%;
  margin: 10px auto;
  height: 40px;
  border: 1px solid #1e9fff;
  line-height: 40px;
}
.ywxx .ywxxItem2 {
  width: 30%;
  margin: 0 auto;
  height: 40px;
  border: 1px solid #1e9fff;
  line-height: 40px;
  overflow: hidden;
}
.ywxx .ywxxItem3 {
  overflow: hidden;
  width: 20%;
  margin: 0 auto;
  height: 40px;
  border: 1px solid #1e9fff;
  line-height: 40px;
}
@keyframes fade {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.dh {
  width: 100px;
  background: #ff0;
  padding: 10px;
  font-size: 15px;
  height: 100px;
  animation: fade 600ms infinite;
}
</style>
