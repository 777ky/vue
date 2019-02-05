<template>
  <section class="container">
    <div>
    <img src="https://cdn-ak.f.st-hatena.com/images/fotolife/k/ky777/20171221/20171221151814.png" alt="">
    <img src="/text.jpg" alt="">
      <app-logo/>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

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

