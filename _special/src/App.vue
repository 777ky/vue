<template>
  <div v-html="result">
  </div>
</template>

<script>
import Vue from 'vue';
// データ管理ストア
import store from './store';

// import HEAD from './HEAD';

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
      const div = document.createElement('div');
      div.innerHTML = str;
      document.body.appendChild(div);
      const elem = document.getElementById('str-main');
      document.body.removeChild(div);
      const div2 = document.createElement('div');
      this.result =  '<div id="str-main">'+elem.innerHTML+'</div>';
      // this.result = store.get_data('result',"str-main");
    });
  }
};

</script>
