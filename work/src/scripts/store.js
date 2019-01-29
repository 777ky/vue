import Vue from 'vue';
import axios from 'axios';
import 'es6-promise/auto';

module.exports = new Vue({
  data: {
    // Jsonデータ格納用
    result:""
  },

  methods: {
    // 取得したら GET_AJAX_COMPLETE で通知する
    getAjax(url, name){
      return axios.get(url)
      .then((res) => {
        this.$set(this, name, res.data[0].name);
        // $emit は、カスタム要素の発行するイベント
        this.$emit('GET_AJAX_COMPLETE');
      });
    },
    // プロパティ名を指定してデータを取得
    getData(name){
      return this.$data[name];
    },
  }
});
