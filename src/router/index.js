import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/user/login',
        name: 'Login',
        component: () => import('../views//User/LoginView.vue')
    },
    {
        path: '/user/signup',
        name: 'Cadastro',
        component: () => import('../views//User/SignUpView.vue')
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
