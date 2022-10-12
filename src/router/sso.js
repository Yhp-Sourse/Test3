let sso = [
      {
        path: '/',
        name: 'HelloWorld',
        meta:{ title: 'HelloWorld'},
        component: () => import('@/components/HelloWorld')
      },
      {
        path: '/CallBack',
        name: 'CallBack',
        meta:{ title: 'CallBack'},
        component: () => import('@/components/CallBack')
      },
      {
        path: '/Home',
        name: 'Home',
        meta:{ title: 'Home'},
        component: () => import('@/components/index')
      }
]
export default sso;