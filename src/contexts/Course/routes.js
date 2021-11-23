export default [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ './views/DashboardView')
    },
    {
        path: '/course/:courseId',
        name: 'Lições',
        component: () => import(/* webpackChunkName: "course" */ './views/CourseView')
    }
]