let login = [
        {
            path: '/login',
            name: '登录',
            meta:{ title: '登录'},
            component: () => import('@/components/Login')
        },
        {
            path: '/login2',
            name: '登录',
            meta:{ title: '登录'},
            component: () => import('@/components/Login2')
        }
    ]
export default login;
