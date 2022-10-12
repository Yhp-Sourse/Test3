let alarmMgr = [
    {
        path: '/alarmRemind',
        name: '报警提醒',
        meta:{ title: '报警提醒'},
        redirect: '/index/alarmRemind'
    },
    {
        path: '/equStatusAlarm',
        name: '状态量报警',
        meta:{ title: '状态量报警'},
        redirect: '/index/equStatusAlarm'
    },
    {
        path: '/alarmStatistics',
        name: '报警统计',
        meta:{ title: '报警统计'},
        redirect: '/index/alarmStatistics'
    },
    

    {
        path: '/index',
        name: '首页',
        component: () => import('@/components/index'),
        children: [
            {
                path: '/index/alarmRemind',
                name: '报警提醒',
                meta:{ title: '报警提醒'},
                component: () => import('@/components/pages/ywAlarmManage/ywAlarmRemind.vue')
            },
            {
                path: '/index/alarmStatistics',
                name: '报警统计',
                meta:{ title: '报警统计'},
                component: () => import('@/components/pages/ywAlarmManage/ywAlarmStatistics.vue')
            },
            {
                path: '/index/equStatusAlarm',
                name: '状态量报警',
                meta:{ title: '状态量报警'},
                component: () => import('@/components/pages/ywAlarmManage/ywEquStatusAlarm.vue')
            },
              

        ]
    }
]
export default alarmMgr;