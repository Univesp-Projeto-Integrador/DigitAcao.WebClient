import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store';
import routes from './routes'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const DEFAULT_TITLE = 'DigitAção';

router.beforeEach((to, from, next) => {
    
    // Secure routes
    let secure = typeof to.meta.secure === 'boolean' ? to.meta.secure : true

    if (secure && !store.state.user.logged)
        next('/user/login');

    else if(to.path == '/user/logout') {
        if(confirm('Deseja realmente sair?'))
            next()
    }
    
    // Title
    else {
    
        let title = DEFAULT_TITLE;

        if(!to.meta.title && to.name)
            to.meta.title = to.name

        if(to.meta.title)
            title = `${to.meta.title} - ${DEFAULT_TITLE}`;

        document.title = title;

        next();

    }
    
});

export default router