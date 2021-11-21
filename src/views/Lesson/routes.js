export default [
    {
        path: '/lesson',
        name: 'Lição',
        meta: {
            title: 'Lição'
        },
        component: () => import('./LessonView'),
    },
    {
        path: '/lesson/dashboard',
        name: 'Dashboard',
        component: () => import('./DashboardView')
    }
]