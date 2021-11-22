export default [
    {
        path: '/user/login',
        name: 'Login',
        meta: { secure: false },
        component: () => import(/* webpackChunkName: "user-login" */ './views/LoginView')
    },
    {
        path: '/user/logout',
        name: 'Logout',
        component: () => import(/* webpackChunkName: "user-logout" */ './views/LogoutView')
    },
    {
        path: '/user/signup',
        name: 'Cadastro',
        meta: { secure: false },
        component: () => import(/* webpackChunkName: "user-signup" */ './views/SignUpView')
    },
    {
        path: '/user/activation',
        name: 'Ativação do Cadastro',
        meta: { secure: false },
        component: () => import(/* webpackChunkName: "user-activation" */ './views/ActivationView')
    },
    {
        path: '/user/profile',
        name: 'Perfil',
        component: () => import(/* webpackChunkName: "user-profile" */ './views/ProfileView')
    }
]