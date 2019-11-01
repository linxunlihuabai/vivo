import Vue from 'vue'
import App from './App.vue';

import axios from 'axios';
Vue.prototype.$http=axios;

import './mock'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import SunUI from './components';
Vue.use(SunUI);

import router from './router';


import store from './store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
