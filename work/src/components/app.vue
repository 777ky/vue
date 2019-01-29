<template>
  <div>
    <div v-html="result"></div>
    <div>{{ result }}</div>
  </div>
</template>

<script>
import store from '../scripts/store';

export default {
  data(){
    return {
      result: ''
    };
  },
  methods:{
    // appendScript: (script)=>{
    // }
  },
  created(){
    const that = this;
    store.getAjax('https://jsondata.okiba.me/v1/json/ymC4X190129052320', 'result');
    store.$on('GET_AJAX_COMPLETE', ()=>{
      // const str = store.getData('result');
      that.result = store.getData('result');
    });

  },
  mounted(){
  }
};

</script>
