import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const DEFAULT_TITLE = 'DigitAção';

router.beforeEach((to, from, next) => {
    
    let title = DEFAULT_TITLE;

    if(!to.meta.title && to.name)
        to.meta.title = to.name

    if(to.meta.title)
        title = `${to.meta.title} - ${DEFAULT_TITLE}`;

    document.title = title;

    next();
    
});

export default router