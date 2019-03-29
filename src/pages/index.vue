<template>
  <div class="container" v-if="isAuthenticated">
    <div class="links">
      <button @click="doLogout">logout</button>
    </div>
    <div>
    main
    </div>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import auth from '@/plugins/auth'
import { mapActions,mapMutations,mapGetters } from 'vuex'

export default {
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
  computed:{
    ...mapGetters([
      'isAuthenticated'
    ])
  },
  methods:{
    ...mapMutations([
      'setUser'
    ]),
    ...mapActions([
      'logout',
    ]),
    doLogout () {
      this.logout().then(()=>{
        console.log('logout')
        this.$router.push('/login')
      })
    }
  },
  mounted(){
    auth().then((result)=>{
      this.setUser(result)
      // this.$store.commit('setUser',result)
      console.log(result)
      if(!result){
        this.$router.push('/login/')
      }
    })

  }
}
</script>

<style>
</style>

