import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VCalendar from 'v-calendar';
import App from './App.vue';
import filters from './filters';
import router from './router';

Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper);
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});
Vue.config.productionTip = false;
Vue.filter('currency', filters);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
