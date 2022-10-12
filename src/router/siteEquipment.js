let siteEquipment = [
    {
        path: '/SiteEquipment/DeviceOnlineInfo', 
        name: '设备在线使用',
        meta:{ title: '设备在线使用'},
        redirect: '/index/SiteEquipment/DeviceOnlineInfo',
        component: () => import('@/components/pages/siteEquipment/deviceOnlineInfo')
    }, 
    {
        path: '/SiteEquipment/DeviceHostLibraryInfo', 
        name: '主机设备',
        meta:{ title: '主机设备'},
        redirect: '/index/SiteEquipment/DeviceHostLibraryInfo',
        component: () => import('@/components/pages/siteEquipment/deviceHostLibraryInfo')
    }, 
    {
        path: '/SiteEquipment/DeviceFactoryInfo', 
        name: '设备厂家',
        meta:{ title: '设备厂家'},
        redirect: '/index/SiteEquipment/DeviceFactoryInfo',
        component: () => import('@/components/pages/siteEquipment/deviceFactoryInfo')
    }, 
    {
        path: '/SiteEquipment/DeviceSparePartInfo', 
        name: '备品备件',
        meta:{ title: '备品备件'},
        redirect: '/index/SiteEquipment/DeviceSparePartInfo',
        component: () => import('@/components/pages/siteEquipment/deviceSparePartInfo')
    },
    {
        path: '/SiteEquipment/DeviceLifeCycle', 
        name: '设备生命周期',
        meta:{ title: '设备生命周期'},
        redirect: '/index/SiteEquipment/DeviceLifeCycle',
        component: () => import('@/components/pages/siteEquipment/deviceLifeCycle')
    },
    {
        path: '/SiteEquipment/DeviceLifeCycleDisplay', 
        name: '生命周期详情',
        meta:{ title: '生命周期详情'},
        redirect: '/index/SiteEquipment/DeviceLifeCycleDisplay',
    },  
    {
        path: '/DevUseRecord', 
        name: '设备使用',
        meta:{ title: '设备使用'},
        redirect: '/index/DevUseRecord',
    },
    {
        path: '/InstrumentFaultRecord', 
        name: '仪器故障记录',
        meta:{ title: '仪器故障记录'},
        redirect: '/index/InstrumentFaultRecord',
    },
    {
        path: '/devStandardGas', 
        name: '标准气体',
        meta:{ title: '标准气体'},
        redirect: '/index/devStandardGas',
    },
    {
        path: '/index', 
        name: '首页',
        component: () => import('@/components/index'),
        children:[
            {
                path: '/index/SiteEquipment/DeviceOnlineInfo', 
                name: '设备在线使用',
                meta:{ title: '设备在线使用'},
                component: () => import('@/components/pages/siteEquipment/deviceOnlineInfo')
            },
            {
                path: '/index/SiteEquipment/DeviceHostLibraryInfo', 
                name: '主机设备',
                meta:{ title: '主机设备'},
                component: () => import('@/components/pages/siteEquipment/deviceHostLibraryInfo')
            },
            {
                path: '/index/SiteEquipment/DeviceFactoryInfo', 
                name: '设备厂家',
                meta:{ title: '设备厂家'},
                component: () => import('@/components/pages/siteEquipment/deviceFactoryInfo')
            },
            {
                path: '/index/SiteEquipment/DeviceSparePartInfo', 
                name: '备品备件',
                meta:{ title: '备品备件'},
                component: () => import('@/components/pages/siteEquipment/deviceSparePartInfo')
            },
            {
                path: '/index/SiteEquipment/DeviceLifeCycle', 
                name: '设备生命周期',
                meta:{ title: '设备生命周期'},
                component: () => import('@/components/pages/siteEquipment/deviceLifeCycle')
            },
            {
                path: '/index/SiteEquipment/DeviceLifeCycleDisplay', 
                name: '生命周期详情',
                meta:{ title: '生命周期详情'},
                component: () => import('@/components/pages/siteEquipment/deviceLifeCycleDisplay')
            },
            {
                path: '/index/DevUseRecord', 
                name: '设备使用',
                meta:{ title: '设备使用'},
                component: () => import('@/components/pages/siteEquipment/devUseRecord')
            },  
            {
                path: '/index/InstrumentFaultRecord', 
                name: '仪器故障记录',
                meta:{ title: '仪器故障记录'},
                component: () => import('@/components/pages/siteEquipment/InstrumentFaultRecord')
            },  
            {
                path: '/index/devStandardGas', 
                name: '标准气体',
                meta:{ title: '标准气体'},
                component: () => import('@/components/pages/siteEquipment/devStandardGas')
            },
           
        ]
    }
]
export default siteEquipment;
