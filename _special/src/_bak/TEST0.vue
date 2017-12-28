<template>
  <div class="hello">
    <p>{{ rawHtml }}</p>
    {{delPHP(rawHtml)}}
    <span v-html="rawHtml"></span>
    <?php $FW_VH->fetch_write("layout_rwd/header/?mode=official", $FW_ENV['fetch']['cache_lifetime']) ?>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
