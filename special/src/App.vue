<template>
  <div>
    <div v-html="result"></div>
  </div>
</template>

<script>
import Vue from 'vue';
// データ管理ストア
import store from './store';
// import 'es6-promise/auto';

export default {
  data:function() {
    return {
      result: "",
      script:[]
    };
  },
  methods:{
    appendScript: function(script) {
      // const spt=[]
      const len = script.length;
      let i = 0;

      (function appdendSpt(){
        const spt = document.createElement('script');
        if(script[i].getAttribute('src')){
          spt.src = script[i].getAttribute('src');
        }else{
          spt.innerHTML = script[i].innerHTML;
        }
        document.body.appendChild(spt);

        if (i++ < len) {
          spt.onload = appdendSpt;
        }
      })();
    }
  },
  created:function() {
    const that = this;
    store.get_ajax('', 'result');
    // for IE11
    store.$on('GET_AJAX_COMPLETE', function(){
    // store.$on('GET_AJAX_COMPLETE', ()=>{
      const str = store.get_data('result');

      const iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      const ifrm = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
      ifrm.document.open();
      ifrm.document.write(str);
      ifrm.document.close();

      iframe.onload =  function(){
        const ifm = this.contentWindow || this.contentDocument.document || this.contentDocument;
        const head = ifm.document.getElementsByTagName('head')[0].innerHTML;
        const main = ifm.document.getElementById('str-main').innerHTML;
        const script = ifm.document.getElementsByTagName('script');
        document.body.removeChild(iframe);
        document.head.innerHTML = head+'<meta name="viewport" content="width=device-width">';
        that.result =  '<div id="str-main">'+main+'</div>';
        that.appendScript(script);
      }

    });

  },

  mounted:function() {

    // const script01 = document.createElement('script');
    // const script02 = document.createElement('script');
    // const script03 = document.createElement('script');
    //
    // script01.src = '/element/shared/lib/jquery/core/jquery-1.11.3.min.js';
    // script01.defer = true;
    // document.body.appendChild(script01);
    // // script01.onload =  () => {
    // script01.onload =  function(){
    //   // 新verのshared.rwd.jsは$.headerButtons内でエラーになるので$.headerButtons()をコメントアウトする必要あり
    //   script02.src ="/element/shared/script/rwd/shared.rwd.min.js";
    //   script02.defer = true;
    //   document.body.appendChild(script02);
    //   // script02.onload = () => {
    //   script02.onload =  function(){
    //     script03.innerHTML = "$(function(){ $('.cmn-carousel').slideShow({ autoplay:false }); });";
    //     document.body.appendChild(script03);
    //   }
    // }

  }
};

</script>
