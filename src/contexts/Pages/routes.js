export default [
    {
        path: '/',
        name: 'Home',
        meta: { secure: false },
        component: () => import(/* webpackChunkName: "home" */ './views/HomeView')
    },
    {
        path: '/about',
        name: 'Sobre',
        meta: {
            title: 'Sobre este Software',
            secure: false
        },
        component: () => import(/* webpackChunkName: "about" */ './views/AboutView')
    }
]