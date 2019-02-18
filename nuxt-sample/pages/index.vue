<template>
  <section class="container">
    <div>
    <!-- cacheFirstのサンプル -->
    <div><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/k/ky777/20171221/20171221151814.png" alt="" width="100" height="10"></div>
    <!-- 通常キャッシュできるかのサンプル -->
    <div><img src="/text.jpg" alt="" width="50" height="10"></div>

    <app-logo/>

    <div class="links">
        <a href="/auth/login/" class="button--green">login</a>
        <a href="/page1/" class="button--green">page1</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'

export default {
  data () {
    return {
      title: 'Hello World!'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' },
        { hid: 'og:title', name: 'og:title', content: this.title + ' | ' + process.env.siteName },
        { hid: 'og:description', name: 'og:description', content: 'My custom description' },
        { hid: 'og:type', name: 'og:type', content: 'article' },
      ]
    }
  },
  components: {
    AppLogo
  }
}
</script>

<style>
</style>

