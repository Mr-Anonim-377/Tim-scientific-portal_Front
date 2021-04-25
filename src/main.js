import { createApp } from 'vue';
import App from './App.vue';
import { store } from './utils/сommonMethods';
import router from './route';

/* UI для админки */
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app');
