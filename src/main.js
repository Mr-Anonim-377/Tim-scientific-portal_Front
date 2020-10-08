import Vue from 'vue'
import App from './App.vue'
import store from './components/Methods/store'
// import router from "./router/router"


// createApp(App).mount('#app');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  // router
}).$mount('#app');
