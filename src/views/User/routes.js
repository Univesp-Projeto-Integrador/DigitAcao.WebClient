export default [
    {
        path: '/user/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "user-login" */ './LoginView')
    },
    {
        path: '/user/signup',
        name: 'Cadastro',
        component: () => import(/* webpackChunkName: "user-signup" */ './SignUpView')
    },
    {
        path: '/user/activation',
        name: 'Ativação do Cadastro',
        component: () => import(/* webpackChunkName: "user-activation" */ './ActivationView')
    },
    {
        path: '/user/profile',
        name: 'Perfil',
        component: () => import(/* webpackChunkName: "user-profile" */ './ProfileView')
    }
]