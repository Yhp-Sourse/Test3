let ywConsume = [
    {
        path: '/ywConsume', 
        name: '运维耗材',
        meta:{ title: '运维耗材'},
        redirect: '/index/ywConsume',
    },
    {
        path: '/index', 
        name: '首页',
        component: () => import('@/components/index'),
        children:[
            {
                path: '/index/ywConsume',
                name: '运维耗材',
                meta:{ title: '运维耗材'},
                component: () => import('@/components/pages/ywTask/ywConsume')
            }
        ]
    }
]
export default ywConsume;
