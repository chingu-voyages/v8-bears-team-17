import Vue from 'vue';
import App from './App.vue';
import './plugins/vuetify';
import './registerServiceWorker';
import router from './router';
import './stylus/main.styl';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
