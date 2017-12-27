import Vue from 'vue';
import App from './App';
import HEAD from './HEAD';

// Vue.config.productionTip = false;
//
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// });

new Vue({
  el: '#head',
  template: '<HEAD/>',
  components: { HEAD }
});
