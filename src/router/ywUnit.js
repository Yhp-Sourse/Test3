let ywUnit = [
    {
        path: '/ywUnit', 
        name: '运维单位',
        meta:{ title: '运维单位'},
        redirect: '/index/ywUnit'
    },
    {
        path: '/index', 
        name: '首页',
        component: () => import('@/components/index'),
        children:[
            {
                path: '/index/ywUnit', 
                name: '运维单位',
                meta:{ title: '运维单位'},
                component: () => import('@/components/pages/ywTask/ywUnit')
            }
        ]
    }
]
export default ywUnit;
