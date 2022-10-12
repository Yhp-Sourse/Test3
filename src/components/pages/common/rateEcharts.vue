<template>
  <div>
    <div :style="echartStyle" :id="echarts" class="echarts"  ref="echarts"></div>
  </div>
</template>

<script>
// 引入echarts
import echarts from 'echarts'
// import 'echarts/map/js/china.js'


export default {
  
  props: {
    // 接收父组件传递过来的信息
    chartData: {
      type: Object,
      default: ()=>{}
    },
    echartStyle:{
      type:String,
      default:"width:420px;height:200px;"
    }
  },
  data () {
    return {
        option:{
          title: {
              text: '',
              left: 'center'
          },
          tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
              bottom: 10,
              left: 'center',
              data: ['已完成', '处理中', '待下发']
          },
          series: [
              {  
                  name:'',
                  type: 'pie',
                  radius: '65%',
                  center: ['50%', '50%'],
                  selectedMode: 'single',
                  data: [
                      {value: 3, name: '已完成'},
                      {value: 1, name: '处理中'},
                      {value: 1, name: '待下发'},
                  ],
              }
          ]
        }
    }
  },
  methods: {
    drawChart () {
      const vm = this
      // 基于准备好的dom，初始化echarts实例
      var myChart =echarts.init(document.getElementById(this.echarts))
      // 绘制图表
      myChart.setOption(this.chartData)
    }
  },
  watch:{
    chartData(){//监听数据变化，重新渲染图表
      this.drawChart();
    }
  },
  computed: {
    echarts() {
      return 'echarts' + Math.random()*100000
    }
  },
  mounted: function () {
    const vm = this
    vm.$nextTick(()=> {
        vm.drawChart();
    })
  },
  created: () => {}
}
</script>

<style scoped>
</style>