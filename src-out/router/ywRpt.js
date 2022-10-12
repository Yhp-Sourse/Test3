import * as Vue from 'vue'
let ywRpt = [
  {
    //1级路由
    path: '/MaintainceRpt',
    name: '运维表单',
    redirect: '/index/MaintainceRpt',
  },
  {
    path: '/index',
    name: '首页',
    component: Vue.defineAsyncComponent(() => import('@/components/index')),
    children: [
      {
        //2级路由
        path: '/index/MaintainceRpt',
        name: '运维表单',
        component: Vue.defineAsyncComponent(
          () => import('@/components/pages/ywTask/yw_rpt/MaintainceRpt')
        ),
        children: [
          //3级路由
          //周
          {
            path: '/index/MaintainceRpt/InspectionSummaryRpt',
            name: '环境空气质量自动监测子站日常巡检记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/week/InspectionSummaryRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/ProvincialRpt',
            name: 'SO2分析仪运行状况检查记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/week/ProvincialRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/AnalyzerOperationStatusCheckRecordForm',
            name: 'NOx分析仪运行状况检查记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/week/AnalyzerOperationStatusCheckRecordForm'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/NOXAnlyzerOperaRpt',
            name: 'O3分析仪运行状况检查记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/week/NOXAnlyzerOperaRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/O3AnlyzerOperaRpt',
            name: 'CO分析仪运行状况检查记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/week/O3AnlyzerOperaRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/COAnlyzerOperaWeekRpt',
            name: '颗粒物分析仪PM10运行状况检查记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/week/COAnlyzerOperaWeekRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/PM10AnlyzerOperaWeekRpt',
            name: '颗粒物分析仪PM2.5运行状况检查记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/week/PM10AnlyzerOperaWeekRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/PM25AnlyzerOperaWeekRpt',
            name: '其他仪器、设备运行状况检查记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/week/PM25AnlyzerOperaWeekRpt'
                )
            ),
          },
          //月
          {
            path: '/index/MaintainceRpt/EquipmentMaintenanceRpt',
            name: '环境空气质量监测系统仪器维护记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/month/EquipmentMaintenanceRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/GasAnalyzerRpt',
            name: '标气使用与更换记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/month/GasAnalyzerRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/CalibrationChecklistOfMulti-gasDynamicCalibrator',
            name: '异常情况应急处置记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/month/CalibrationChecklistOfMulti-gasDynamicCalibrator'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/ASEmergencyMonthRpt',
            name: '颗粒物PM10监测仪流量测试与校准记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/month/ASEmergencyMonthRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/ParticulateOscillatingMonthRpt',
            name: '颗粒物PM2.5监测仪流量测试与校准记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/month/ParticulateOscillatingMonthRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/ASEmergencyMonthPM10Rpt',
            name: '气体分析仪和动态校准仪流量检查记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/month/ASEmergencyMonthPM10Rpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/ParticulateOscillatingMonthPM10Rpt',
            name: 'PM10分析仪温湿度、气压和时钟检查校准',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/month/ParticulateOscillatingMonthPM10Rpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/ParticulateOscillatingMonthPM2.5Rpt',
            name: 'PM2.5分析仪温湿度、气压和时钟检查校准',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/month/ParticulateOscillatingMonthPM2.5Rpt'
                )
            ),
          },
          ,
          //{
          //  path: '/index/MaintainceRpt/WeatherJZWriteRpt',
          //name: '气象校准记录',
          //component: () => import('@/components/pages/ywTask/yw_rpt/rptTemplate/month/WeatherJZWriteRpt')
          // }
          //季度
          {
            path: '/index/MaintainceRpt/ParticulateMatterQuarterRpt',
            name: 'SO2分析仪多点校准记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/quarter/ParticulateMatterQuarterRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/PM10ParticulateMatterQuarter',
            name: 'NOx分析仪多点校准记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/quarter/PM10ParticulateMatterQuarter'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/PM25ParticulateMatterQuarter',
            name: 'CO分析仪多点校准记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/quarter/PM25ParticulateMatterQuarter'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/O3CalibrationQuarterRpt',
            name: 'O3分析仪多点校准记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/quarter/O3CalibrationQuarterRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/SO2CalibrationQuarterRpt',
            name: 'SO2分析仪精密度审核记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/quarter/SO2CalibrationQuarterRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/NOxCalibrationQuarterRpt',
            name: 'NOx分析仪精密度审核记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/quarter/NOxCalibrationQuarterRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/COCalibrationQuarterRpt',
            name: 'CO分析仪精密度审核记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/quarter/COCalibrationQuarterRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/PrecisionInstrumentQuarterlyRpt',
            name: 'O3分析仪精密度审核记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/quarter/PrecisionInstrumentQuarterlyRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/PM25PrecisionInstrumentQuarterlyRpt',
            name: 'β射线法颗粒物PM2.5自动监测分析仪检查记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/quarter/PM25PrecisionInstrumentQuarterlyRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/PM10PrecisionInstrumentQuarterlyRpt',
            name: 'β射线法颗粒物PM10自动监测分析仪检查记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/quarter/PM10PrecisionInstrumentQuarterlyRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/ZDTPPM10PrecisionInstrumentQuarterlyRpt',
            name: '微量振荡天平法颗粒物PM10监测仪环境温度和压力校准表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/quarter/ZDTPPM10PrecisionInstrumentQuarterlyRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/ZDTPPM25TemperaturePressureCalibrationRpt',
            name: '微量振荡天平法颗粒物PM2.5监测仪环境温度和压力校准表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/quarter/ZDTPPM25TemperaturePressureCalibrationRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/Maintenancerecord',
            name: '臭氧校准仪（工作标准）量值传递记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/quarter/Maintenancerecord'
                )
            ),
          },
          //半年度
          {
            path: '/index/MaintainceRpt/HalfyearmaintenanceRpt',
            name: '多气体动态校准仪校准检查记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/halfYear/HalfyearmaintenanceRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/NitrogenOxideConversionRecordRpt',
            name: '氮氧化物分析仪钼/碳炉转化率记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/halfYear/NitrogenOxideConversionRecordRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/EnvironmentalMaintenanceRecordRpt',
            name: '臭氧校准仪（工作标准）量值传递记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/halfYear/EnvironmentalMaintenanceRecordRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/ConversionRateofMolybdenumFurnace',
            name: '环境空气质量监测系统维护记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/halfYear/ConversionRateofMolybdenumFurnace'
                )
            ),
          },
          //年度
          {
            path: '/index/MaintainceRpt/MeasurementTraceabilityTransmissionRpt',
            name: '量值溯源与传递记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/oneYear/MeasurementTraceabilityTransmissionRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/SO2AnalyzerAccuracyAuditRecordRpt',
            name: 'SO2分析仪准确度审核记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/oneYear/SO2AnalyzerAccuracyAuditRecordRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/NOxAnalyzerAccuracyAuditRecordRpt',
            name: 'NOx分析仪准确度审核记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/oneYear/NOxAnalyzerAccuracyAuditRecordRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/COAnalyzerAccuracyAuditRecordRpt',
            name: 'CO分析仪准确度审核记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/oneYear/COAnalyzerAccuracyAuditRecordRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/O3AnalyzerAccuracyAuditRecordRpt',
            name: 'O3分析仪准确度审核记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/oneYear/O3AnalyzerAccuracyAuditRecordRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/TraceVibrationQualityCalibrationRpt',
            name: '微量振荡天平法颗粒物PM10监测仪质量传感器校准表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/oneYear/TraceVibrationQualityCalibrationRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/ListofPatrolRecordsofAirProvincial',
            name: '微量振荡天平法颗粒物PM2.5监测仪质量传感器校准表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/oneYear/ListofPatrolRecordsofAirProvincial'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/NJDEnvironmentalMaintenanceRecordRpt',
            name: '能见度监测系统维护记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/oneYear/NJDEnvironmentalMaintenanceRecordRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/MaintenanceOfVisibilityRpt',
            name: '颗粒物手工比对采样记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/oneYear/MaintenanceOfVisibilityRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/ManualComparisonSamplingRpt',
            name: '颗粒物（PM10）手工比对记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/oneYear/ManualComparisonSamplingRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/ComparisonParticulateMatterRpt',
            name: '颗粒物（PM2.5）手工比对记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/oneYear/ComparisonParticulateMatterRpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/ParticulateOscillatingMonthPM25Rpt',
            name: '空气自动监测仪器维护维修记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/oneYear/ParticulateOscillatingMonthPM25Rpt'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/hjkqzlzdjcyqbjghjl',
            name: '环境空气质量自动监测仪器备机更换记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/oneYear/hjkqzlzdjcyqbjghjl'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/hjkqzlzdjcyqhpbjghjl',
            name: '环境空气质量自动监测仪器耗品备件更换记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/oneYear/hjkqzlzdjcyqhpbjghjl'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/hjkqzlzdjcxtzdxxqkb',
            name: '环境空气质量自动监测系统站点详细情况表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/oneYear/hjkqzlzdjcxtzdxxqkb'
                )
            ),
          },
          //  其他
          {
            path: '/index/MaintainceRpt/hjkqzlzdjcyqbjghjlnew',
            name: '环境空气质量自动监测仪器备机更换记录',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/other/hjkqzlzdjcyqbjghjlnew'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/kqzdjcyqwhwxjlb',
            name: '空气自动监测仪器维护维修记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/other/kqzdjcyqwhwxjlb'
                )
            ),
          },
          {
            path: '/index/MaintainceRpt/ycqkyjzjlb',
            name: '异常情况应急处置记录表',
            component: Vue.defineAsyncComponent(
              () =>
                import(
                  '@/components/pages/ywTask/yw_rpt/rptTemplate/other/ycqkyjzjlb'
                )
            ),
          },
        ],
      },
    ],
  },
]
export default ywRpt
