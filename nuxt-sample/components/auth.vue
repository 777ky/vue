<template>
  <div>
      <p v-if="isAuthenticated">{{isAuthenticated}}</p>
    <div v-if="!isAuthenticated">
      <button @click="doLogin">login</button>
    </div>
    <div v-if="isAuthenticated">
      <button @click="doLogout">logout</button>
    </div>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import { mapActions,mapState,mapGetters } from 'vuex'

export default {
  name:'Auth',
  computed:{
    ...mapGetters([
      'isAuthenticated'
    ]),
    ...mapState([
      'localStorage',
    ]),

  },
  methods:{
    ...mapActions([
      'login',
      'logout',
      'setUser'
    ]),
    doLogin () {
      this.login()
    },
    doLogout () {
      this.logout().then(()=>{
        console.log('logout')
      })
    }
  }
}
</script>

<style>
</style>
