<template>
  <div>
    <div v-if="!isAuthenticated">
      <p>Login</p>
      <button @click="doLogin">login</button>
    </div>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import auth from '@/plugins/auth'
import { mapActions,mapGetters,mapMutations } from 'vuex'

export default {
  // name:'Auth',
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
      'login',
      'logout',
    ]),

    doLogin () {
      this.login()
    },
    doLogout () {
      this.logout().then(()=>{
        console.log('logout')
      })
    }
  },
  mounted(){
    auth().then((result)=>{
      this.setUser(result)
      if(result){
        this.$router.push('/')
      }
    })
  }
}
</script>

<style>
</style>
