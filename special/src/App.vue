<template>
  <div v-html="result"></div>
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
      document.body.removeChild(iframe);

      this.result =  '<div id="str-main">'+main+'</div>';

    });
  },

  mounted(){

    const script01 = document.createElement('script');
    const script02 = document.createElement('script');
    const script03 = document.createElement('script');

    script01.src = '/element/shared/lib/jquery/core/jquery-1.11.3.min.js';
    script01.defer = true;
    document.body.appendChild(script01);
    script01.onload = () => {
      // 新verの$.headerButtonsがある場合は途中でエラーになるのでコメントアウトしておいたり工夫が必要
      script02.src ="/element/shared/script/rwd/shared.rwd.min.js";
      script02.defer = true;
      document.body.appendChild(script02);
      script02.onload = () => {
        script03.innerHTML = "$(function(){ $('.cmn-carousel').slideShow({ autoplay:false }); });";
        document.body.appendChild(script03);
      }
    }
  }
};

</script>
