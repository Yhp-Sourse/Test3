let ywStatisticalAnaly = [
    {
        path: '/stationRanking',
        name: '运维站点排名',
        meta:{ title: '运维站点排名'},
        redirect: '/index/stationRanking'
    },
    {
        path: '/unitRanking',
        name: '运维单位排名',
        meta:{ title: '运维单位排名'},
        redirect: '/index/unitRanking'
    },
    {
        path: '/peopleRanking',
        name: '运维人员排名',
        meta:{ title: '运维人员排名'},
        redirect: '/index/peopleRanking'
    },
    {
        path: '/maintenanceReport',
        name: '运维考核报告',
        meta:{ title: '运维考核报告'},
        redirect: '/index/maintenanceReport'
    },
    {
        path: '/maintenanceReportEdit',
        name: '运维考核报告修改',
        meta:{ title: '运维考核报告修改'},
        redirect: '/index/maintenanceReportEdit'
    },
    {
        path: '/maintenanceStatistics',
        name: '运维成效统计',
        meta:{ title: '运维成效统计'},
        redirect: '/index/maintenanceStatistics'
    },
    {
        path: '/patrolFormStatistics',
        name: '巡检表单统计',
        meta:{ title: '巡检表单统计'},
        redirect: '/index/patrolFormStatistics'
    },
    {
        path: '/ArrivalLogTotal', 
        name: '进站记录统计',
        meta:{ title: '进站记录统计'},
        redirect: '/index/ArrivalLogTotal'
    },
    {
        path: '/lessFormFile', 
        name: '统计表单缺失图片',
        meta:{ title: '统计表单缺失图片'},
        redirect: '/index/lessFormFile'
    },
    {
        path: '/fileMgr', 
        name: '文件管理',
        meta:{ title: '文件管理'},
        redirect: '/index/fileMgr'
    },
    {
        path: '/index',
        name: '首页',
        component: () => import('@/components/index'),
        children: [
            {
                path: '/index/stationRanking',
                name: '运维站点排名',
                meta:{ title: '运维站点排名'},
                component: () => import('@/components/pages/ywStatisticalAnaly/ywStationRanking.vue')
            },
            {
                path: '/index/unitRanking',
                name: '运维单位排名',
                meta:{ title: '运维单位排名'},
                component: () => import('@/components/pages/ywStatisticalAnaly/ywUnitRanking.vue')
            },
            {
                path: '/index/peopleRanking',
                name: '运维人员排名',
                meta:{ title: '运维人员排名'},
                component: () => import('@/components/pages/ywStatisticalAnaly/ywPeopleRanking.vue')
            },
            {
                path: '/index/maintenanceReport',
                name: '运维考核报告',
                meta:{ title: '运维考核报告'},
                component: () => import('@/components/pages/ywStatisticalAnaly/ywMaintenanceReport.vue')
            },
            {
                path: '/index/maintenanceReportEdit',
                name: '运维考核报告修改',
                meta:{ title: '运维考核报告修改'},
                component: () => import('@/components/pages/ywStatisticalAnaly/maintenanceReportEdit.vue')
            },
            {
                path: '/index/maintenanceStatistics',
                name: '运维成效统计',
                meta:{ title: '运维成效统计'},
                component: () => import('@/components/pages/ywStatisticalAnaly/ywMaintenanceStatistics.vue')
            },
            {
                path: '/index/patrolFormStatistics',
                name: '巡检表单统计',
                meta:{ title: '巡检表单统计'},
                component: () => import('@/components/pages/ywStatisticalAnaly/patrolFormStatistics.vue')
            },
            {
                path: '/index/ArrivalLogTotal', 
                name: '进站记录统计',
                meta:{ title: '进站记录统计'},
                component: () => import('@/components/pages/ywStatisticalAnaly/ArrivalLogTotal')
            },
            {
                path: '/index/lessFormFile', 
                name: '统计表单缺失图片',
                meta:{ title: '统计表单缺失图片'},
                component: () => import('@/components/pages/totalAnlysis/lessFormFile')
            },
            {
                path: '/index/fileMgr', 
                name: '文件管理',
                meta:{ title: '文件管理'},
                component: () => import('@/components/pages/ywStatisticalAnaly/fileMgr')
            },

        ]
    }
]
export default ywStatisticalAnaly;