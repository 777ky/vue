<template>
  <div>
    <!-- <div v-html="result"></div> -->
    <ul class="hello_footer hello_footer2">
      <li v-for="item in result">
      {{ item.id }}:{{ item.name }}/{{ item.tel }}

      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
@import "../styles/todo.scss";
.hello {
  &_footer2{
    color: #f00
  }
}
</style>
<script>
import store from '../scripts/store';
import "../styles/initialize.scss";
import "../styles/master.scss";

export default {
  data(){
    return {
      result: ''
    };
  },
  created(){
    store.getAjax('https://jsondata.okiba.me/v1/json/ymC4X190129052320', 'result');
    store.$on('GET_AJAX_COMPLETE', ()=>{
      this.result = store.getData('result');
    });

  },
  mounted(){
  }
};

</script>
