<template>
  <div class="hello">
    <p>{{ msg | defaultMsg }}</p>

    <?php mb_internal_encoding('UTF-8') ?>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
//      msg: 'Welcome to Your Vue.js App'
      msg: ''
    }
  },
  filters: {
    defaultMsg: function (value) {
      if (!value) {
        return 'Hello from defaultMsg';
      }
      return value;
    }
  },
  method: {
    test2: function(){
      console.log('sss')
    }
  }
}
</script>
