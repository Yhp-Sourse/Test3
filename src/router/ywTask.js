let ywTask = [
    {
        path: '/ywTask', 
        name: 'ywTask',
        meta:{ title: '运维任务'},
        redirect: '/index/ywTask',
        component: () => import('@/components/pages/ywTask/ywTask')
    },
    {
        path: '/ywTaskTotal', 
        name: 'ywTaskTotal',
        meta:{ title: '任务统计'},
        redirect: '/index/ywTaskTotal',
    },
    {
        path: '/ywPlan', 
        name: 'ywPlan',
        meta:{ title: '运维计划'},
        redirect: '/index/ywPlan',
    },
    {
        path: '/ywPlanAduit', 
        name: '运维计划审核',
        meta:{ title: '运维计划审核'},
        redirect: '/index/ywPlanAduit',
    },
    {
        path: '/ywUnit', 
        name: '运维单位',
        meta:{ title: '运维单位'},
        redirect: '/index/ywUnit'
    },
    {
        path: '/ywPerson', 
        name: '运维人员',
        meta:{ title: '运维人员'},
        redirect: '/index/ywPerson'
    },
    {
        path: '/ywSignin', 
        name: '考勤签到',
        meta:{ title: '考勤签到'},
        redirect: '/index/ywSignin'
    },
    {
        path: '/arrivalRecord', 
        name: '进站记录',
        meta:{ title: '进站记录'},
        redirect: '/index/arrivalRecord'
    },
    {
        path: '/ywPowercut', 
        name: '停电记录',
        meta:{ title: '停电记录'},
        redirect: '/index/ywPowercut'
    },
    {
        path: '/ywWxts',
        name: '微信推送',
        meta:{ title: '微信推送'},
        redirect: '/index/ywWxts'
    },
    {
        path: '/ywTaskDisplay',
        name: '任务编辑',
        meta:{ title: '任务编辑'},
        redirect: '/index/ywTaskDisplay'
    },
    {
        path: '/ywInspectionPlan',
        name: '检查计划',
        meta:{ title: '检查计划'},
        redirect: '/index/ywInspectionPlan'
    },  
    {
        path: '/ywInspectionPlanAdd',
        name: '检查计划窗口',
        meta:{ title: '检查计划窗口'},
        redirect: '/index/ywInspectionPlanAdd'
    },
    {
        path: '/ywInspectionPlanJudge',
        name: '检查计划审核',
        meta:{ title: '检查计划审核'},
        redirect: '/index/ywInspectionPlanJudge'
    }, 
    {
        path: '/ywFourthInspectionTask',
        name: '第四方检查任务',
        meta:{ title: '第四方检查任务'},
        redirect: '/index/ywFourthInspectionTask'
    },
    {
        path: '/ywProviceInspectionTask',
        name: '省站检查任务',
        meta:{ title: '省站检查任务'},
        redirect: '/index/ywProviceInspectionTask'
    },
    {
        path: '/ywInternalInspectionTask',
        name: '内部检查任务',
        meta:{ title: '内部检查任务'},
        redirect: '/index/ywInternalInspectionTask'
    },
    {
        path: '/ywProviceInspectionTaskShow',
        name: '省站检查任务窗口',
        meta:{ title: '省站检查任务窗口'},
        redirect: '/index/ywProviceInspectionTaskShow'
    },
    {
        path: '/ywInternalInspectionTaskShow',
        name: '内部检查任务窗口',
        meta:{ title: '内部检查任务窗口'},
        redirect: '/index/ywInternalInspectionTaskShow'
    },
    {
        path: '/ywFourthInspectionTaskShow',
        name: '第四方检查任务窗口',
        meta:{ title: '第四方检查任务窗口'},
        redirect: '/index/ywFourthInspectionTaskShow'
    },
    {
        path: '/ywInternalInspectionTaskJudge',
        name: '内部任务整改',
        meta:{ title: '内部任务整改'},
        redirect: '/index/ywInternalInspectionTaskJudge'
    },
    {
        path: '/ywFourthInspectionJudge',
        name: '第四方任务整改',
        meta:{ title: '第四方任务整改'},
        redirect: '/index/ywFourthInspectionJudge'
    },
    {
        path: '/ywProviceInspectionTaskJudge',
        name: '省站任务整改',
        meta:{ title: '省站任务整改'},
        redirect: '/index/ywProviceInspectionTaskJudge'
    },
    {
        path: '/ywReport',
        name: '运维报告',
        meta:{ title: '运维报告'},
        redirect: '/index/ywReport'
    },
    {
        path: '/zgbg',
        name: '整改报告',
        meta:{ title: '整改报告'},
        redirect: '/index/zgbg'
    },
    {
        path: '/nbzgbg',
        name: '内部整改报告',
        meta:{ title: '内部整改报告'},
        redirect: '/index/nbzgbg'
    },
    {
        path: '/szzgbg',
        name: '省站整改报告',
        meta:{ title: '省站整改报告'},
        redirect: '/index/szzgbg'
    },
    {
        path: '/ExportFormOfOneKey',
        name: '电子表单一键导出',
        meta:{ title: '电子表单一键导出'},
        redirect: '/index/ExportFormOfOneKey'
    },
    {
        path: '/ExportFormOfOneKey2',
        name: '电子表单一键导出2',
        meta:{ title: '电子表单一键导出2'},
        redirect: '/index/ExportFormOfOneKey2'
    },
    {
        path: '/ExportFormUpload',
        name: '运维表单存档',
        meta:{ title: '运维表单存档'},
        redirect: '/index/ExportFormUpload'
    },
    {
        path: '/abnormalForm',
        name: '异常表单留痕',
        meta:{ title: '异常表单留痕'},
        redirect: '/index/abnormalForm'
    },


  
    {
        path: '/index', 
        name: '首页',
        component: () => import('@/components/index'),
        children:[
            {
                path: '/index/ywTask', 
                name: 'ywTask',
                meta:{ title: '运维任务',keepAlive:true},
                component: () => import('@/components/pages/ywTask/ywTask')
            },
            {
                path: '/index/ywTaskTotal', 
                name: 'ywTaskTotal',
                meta:{ title: '任务统计'},
                component: () => import('@/components/pages/ywTask/ywTaskTotal')
            },
            {
                path: '/index/ywPlan', 
                name: '运维计划',
                meta:{ title: '运维计划'},
                component: () => import('@/components/pages/ywTask/ywPlan')
            },
            {
                path: '/index/ywPlanAduit', 
                name: '运维计划审核',
                meta:{ title: '运维计划审核'},
                component: () => import('@/components/pages/ywTask/YwPlanAduit')
            },
            {
                path: '/index/ywUnit', 
                name: '运维单位',
                meta:{ title: '运维单位'},
                component: () => import('@/components/pages/ywTask/ywUnit')
            },
            {
                path: '/index/ywPerson', 
                name: '运维人员',
                meta:{ title: '运维人员'},
                component: () => import('@/components/pages/ywTask/ywPerson')
            },
            {
                path: '/index/ywSignin', 
                name: '考勤签到',
                meta:{ title: '考勤签到'},
                component: () => import('@/components/pages/ywTask/ywSignin')
            },
            {
                path: '/index/arrivalRecord', 
                name: '进站记录',
                meta:{ title: '进站记录'},
                component: () => import('@/components/pages/ywTask/ywArrivalRecord')
            },
            {
                path: '/index/ywWxts',
                name: '微信推送',
                meta:{ title: '微信推送'},
                component: () => import('@/components/pages/ywTask/ywWeChatPush')
            },
            {
                path: '/index/ywPowercut',
                name: '停电记录',
                meta:{ title: '停电记录'},
                component: () => import('@/components/pages/ywTask/ywPowercut')
            },
            {
                path: '/index/ywTaskDisplay',
                name: '任务编辑',
                meta:{ title: '任务编辑'},
                component: () => import('@/components/pages/ywTask/ywTaskDisplay')
            },
            {
                path: '/index/ywInspectionPlan',
                name: '检查计划',
                meta:{ title: '检查计划'},
                component: () => import('@/components/pages/ywTask/ywInspectionPlan')
            },
            {
                path: '/index/ywInspectionPlanAdd',
                name: '检查计划窗口',
                meta:{ title: '检查计划窗口'},
                component: () => import('@/components/pages/ywTask/ywInspectionPlanAdd')
            },
            {
                path: '/index/ywInspectionPlanJudge',
                name: '检查计划审核',
                meta:{ title: '检查计划审核'},
                component: () => import('@/components/pages/ywTask/ywInspectionPlanJudge')
            },
            {
                path: '/index/ywFourthInspectionTask/',
                name: '第四方检查任务',
                meta:{ title: '第四方检查任务'},
                component: () => import('@/components/pages/ywTask/ywFourthInspectionTask')
            },
            {
                path: '/index/ywFourthInspectionTaskShow',
                name: '第四方检查任务窗口',
                meta:{ title: '第四方检查任务窗口'},
                component: () => import('@/components/pages/ywTask/ywFourthInspectionTaskShow')
            },
            {
                 path: '/index/ywFourthInspectionJudge',
                 name: '第四方任务整改',
                 meta:{ title: '第四方任务整改'},
                 component: () => import('@/components/pages/ywTask/ywFourthInspectionJudge')
            },

            {
                path: '/index/ywProviceInspectionTask',
                name: '省站检查任务',
                meta:{ title: '省站检查任务'},
                component: () => import('@/components/pages/ywTask/ywProviceInspectionTask')
            },

            {
                path: '/index/ywInternalInspectionTask',
                name: '内部检查任务',
                meta:{ title: '内部检查任务'},
                component: () => import('@/components/pages/ywTask/ywInternalInspectionTask')
            },

            {
                path: '/index/ywProviceInspectionTaskShow',
                name: '省站检查任务窗口',
                meta:{ title: '省站检查任务窗口'},
                component: () => import('@/components/pages/ywTask/ywProviceInspectionTaskShow')
            },
            {
                path: '/index/ywInternalInspectionTaskShow',
                name: '内部检查任务窗口',
                meta:{ title: '内部检查任务窗口'},
                component: () => import('@/components/pages/ywTask/ywInternalInspectionTaskShow')
            },        
            {
                 path: '/index/ywInternalInspectionTaskJudge',
                 name: '内部任务整改',
                 meta:{ title: '内部任务整改'},
                 component: () => import('@/components/pages/ywTask/ywInternalInspectionTaskJudge')
            },           
            {
                 path: '/index/ywProviceInspectionTaskJudge',
                name: '省站任务整改',
                meta:{ title: '省站任务整改'},
                 component: () => import('@/components/pages/ywTask/ywProviceInspectionTaskJudge')
            },
            {
                path: '/index/ywReport',
                name: '运维报告',
                meta:{ title: '运维报告'},
                component: () => import('@/components/pages/ywTask/ywReport')
            },
            {
                path: '/index/zgbg',
                name: '整改报告',
                meta:{ title: '整改报告'},
                component: () => import('@/components/pages/ywTask/zgbg')
            },
            {
                path: '/index/nbzgbg',
                name: '内部整改报告',
                meta:{ title: '内部整改报告'},
                component: () => import('@/components/pages/ywTask/nbzgbg')
            },
            {
                path: '/index/szzgbg',
                name: '省站整改报告',
                meta:{ title: '省站整改报告'},
                component: () => import('@/components/pages/totalAnlysis/szzgbg')
            },
            {
                path: '/index/ExportFormOfOneKey',
                name: '电子表单一键导出',
                meta:{ title: '电子表单一键导出'},
                component: () => import('@/components/pages/totalAnlysis/ExportFormOfOneKey')
            },
            {
                path: '/index/ExportFormOfOneKey2',
                name: '电子表单一键导出2',
                meta:{ title: '电子表单一键导出2'},
                component: () => import('@/components/pages/totalAnlysis/ExportFormOfOneKey2')
            },
            {
                path: '/index/ExportFormUpload',
                name: '运维表单存档',
                meta:{ title: '运维表单存档'},
                component: () => import('@/components/pages/totalAnlysis/ExportFormUpload')
            },
            {
                path: '/index/abnormalForm',
                name: '异常表单留痕',
                meta:{ title: '异常表单留痕'},
                component: () => import('@/components/pages/ywTask/ywAbnormalForm')
            },
           
        
        ]
    }
]
export default ywTask;
