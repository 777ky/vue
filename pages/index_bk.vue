<template>
  <section class="container">
    <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <!-- cacheFirstのサンプル -->
    <div><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/k/ky777/20171221/20171221151814.png" alt="" width="100" height="10"></div>
    <!-- 通常キャッシュできるかのサンプル -->
    <div><img src="/text.jpg" alt="" width="50" height="10"></div>
    <!--
    <app-logo/>
    -->

    <div class="links">
        <a href="/login/" class="button--green">login</a>
        <a href="/page1/" class="button--green">page1</a>
      <button @click="doLogout">logout</button>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from '@/plugins/firebase'
import { mapActions,mapMutations,mapGetters } from 'vuex'
import AppLogo from '@/components/AppLogo.vue'

export default {
  data(){
    return{
      title: 'Hello World!',
      description: 'description'
    }
  },
  head(){
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
  middleware: [
    'authenticated',
  ],
  components: {
    AppLogo
  },
  computed:{
    ...mapGetters([
      'isAuthenticated'
    ])
  },
  methods:{
    ...mapActions([
      'login',
      'logout',
    ]),
    doLogout () {
      this.logout().then(()=>{
        console.log('logout')
      })
    }


  },
  mounted(){
    console.log(this.isAuthenticated)
  }

}
</script>

<style>
</style>

