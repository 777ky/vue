import Vue from 'vue';
import axios from 'axios';

const URL_BASE = URL;

module.exports = new Vue({
  data: {
    result:""
  },
  methods: {
    // 取得したら GET_AJAX_COMPLETE で通知する
    get_ajax(url, name) {      
      // return axios.get(URL_BASE + url,{
      //   responseType: 'document'
      // })
      return axios.get(URL_BASE + url)
      .then((res) => {
        Vue.set(this, name, res.data);
        this.$emit('GET_AJAX_COMPLETE');
      });
    },
    // プロパティ名を指定してデータを取得
    get_data(name) {

      const str_base = this.$data[name]
      const travelko = "<?php echo $FW_ENV['site']['NAME']; ?>"
      const m = str_base.match(/<\?php([\s\S]*?) \?>/g);
      let str = str_base;
      for(var idx in m){
        if(m[idx] === travelko){
          str = str.replace(m[idx],"トラベルコ")
        }else{
          str = str.replace(m[idx],"")
        }
      }
      return str
    },
  }
});
