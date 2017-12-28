<template>
  <div v-html="result">
      sss
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

      const iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      iframe.contentWindow.document.write(str);

      const head = iframe.contentWindow.document.getElementsByTagName('head')[0].innerHTML;
      const main = iframe.contentWindow.document.getElementById('str-main').innerHTML;
      document.head.innerHTML = head+'<meta name="viewport" content="width=device-width">';
      // document.body.removeChild(iframe);


      this.result =  '<div id="str-main">'+main+'</div>';

    });
  }
};

</script>
