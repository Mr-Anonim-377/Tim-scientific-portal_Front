import { createApp } from 'vue'
import App from './App.vue'
import {store} from './utils/сommonMethods';
import router from './route';

createApp(App).use(store).use(router).use(router).mount('#app');
