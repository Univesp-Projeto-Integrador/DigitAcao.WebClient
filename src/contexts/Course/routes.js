export default [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ './views/DashboardView')
    },
    {
        path: '/course/:courseId',
        name: 'Curso',
        component: () => import(/* webpackChunkName: "course" */ './views/CourseView')
    }
]