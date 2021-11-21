export default [
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ './About')
    }
]