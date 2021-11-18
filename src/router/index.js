import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/user/login'
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About')
    },
    {
        path: '/user/login',
        name: 'Login',
        component: () => import('../views/User/LoginView')
    },
    {
        path: '/user/signup',
        name: 'Cadastro',
        component: () => import('../views/User/SignUpView')
    },
    {
        path: '/user/activation',
        name: 'Ativação do Cadastro',
        component: () => import('../views/User/ActivationView')
    },
    {
        path: '/lesson',
        name: 'Lição',
        component: () => import('../views/Lesson/LessonView')
    },
    {
        path: '/lesson/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Lesson/DashboardView')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const DEFAULT_TITLE = 'DigitAção';

router.beforeEach((to, from, next) => {
    
    document.title = to.name ? `${to.name} - ${DEFAULT_TITLE}` : DEFAULT_TITLE;

    next();
    
});


export default router
