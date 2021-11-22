import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Global Components */
import Icon from '@/components/Icon'

/* Create App */
createApp(App)
    .use(store)
    .use(router)
    .component('Icon', Icon)
    .mount('#app')
