export default [
    {
        path: '/lesson',
        name: 'Lição',
        meta: {
            title: 'Lição'
        },
        component: () => import(/* webpackChunkName: "lesson" */ './views/LessonView'),
    },
    {
        path: '/lessons',
        name: 'Lições',
        component: () => import(/* webpackChunkName: "lessons" */ './views/LessonsView')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ './views/DashboardView')
    }
]