let ywCar = [
    {
        path: '/ywCar', 
        name: '运维车辆',
        meta:{ title: '运维车辆'},
        redirect: '/index/ywCar',
        component: () => import('@/components/pages/ywTask/ywCar'),
        meta:{
            keepAlive:true//需要缓存
        }
    },
    {
        path: '/problemFeedback', 
        name: '问题反馈',
        meta:{ title: '问题反馈'},
        redirect: '/index/problemFeedback',
        component: () => import('@/components/pages/ywTask/problemFeedback')
    },
    {
        path: '/questionFeedback', 
        name: '反馈详情',
        meta:{ title: '反馈详情'},
        redirect: '/index/questionFeedback',
        component: () => import('@/components/pages/ywTask/questionFeedback')
    },
    {
        path: '/xjqkylb', 
        name: '巡检情况一览表',
        meta:{ title: '巡检情况一览表'},
        redirect: '/index/xjqkylb',
        component: () => import('@/components/pages/ywTask/xjqkylb')
    },
    {
        path: '/xjqkylb2', 
        name: '巡检情况一览表2',
        meta:{ title: '巡检情况一览表2'},
        redirect: '/index/xjqkylb2',
        component: () => import('@/components/pages/ywTask/xjqkylb2')
    },
    {
        path: '/index', 
        name: '首页',
        component: () => import('@/components/index'),
        children:[
            {
                path: '/index/ywCar',
                name: '运维车辆',
                meta:{ title: '运维车辆',keepAlive:true},
                component: () => import('@/components/pages/ywTask/ywCar'),
            },
            {
                path: '/index/problemFeedback',
                name: '问题反馈',
                meta:{ title: '问题反馈'},
                component: () => import('@/components/pages/ywTask/problemFeedback')
            },
            {
                path: '/index/questionFeedback',
                name: '反馈详情',
                meta:{ title: '反馈详情'},
                component: () => import('@/components/pages/ywTask/questionFeedback')
            },
            {
                path: '/index/xjqkylb',
                name: '巡检情况一览表',
                meta:{ title: '巡检情况一览表'},
                component: () => import('@/components/pages/ywTask/xjqkylb')
            },
            {
                path: '/index/xjqkylb2',
                name: '巡检情况一览表2',
                meta:{ title: '巡检情况一览表2'},
                component: () => import('@/components/pages/ywTask/xjqkylb2')
            }
        ]
    }
]
export default ywCar;
