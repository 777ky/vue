<template>
  <div v-html="result">
  </div>
</template>

<script>
import Vue from 'vue';
// データ管理ストア
import store from './store';

export default {
  data() {
    return {
      result: ""
    };
  },
  created() {
    store.get_ajax('', 'result');
    store.$on('GET_AJAX_COMPLETE', () => {

      const str = store.get_data('result');
      const h = document.createElement('html');
      h.innerHTML = str;
      document.body.appendChild(h);
      const elem = document.getElementsByTagName('head')[0];
      // document.body.removeChild(h);
      // const div2 = document.createElement('div');

      console.log(elem.innerHTML)


      this.result = '<head>'+elem.innerHTML+'</head>'
      // this.result = store.get_data('result', 'head');
    });
  }
};

</script>
