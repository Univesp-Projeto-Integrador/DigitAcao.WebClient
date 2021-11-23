export default [
    {
        path: '/lesson/:lessonId',
        name: 'Lição',
        meta: {
            title: 'Lição'
        },
        component: () => import(/* webpackChunkName: "lesson" */ './views/LessonView'),
    }
]