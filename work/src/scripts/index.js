import Vue from 'vue';
import App from '../components/app';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});