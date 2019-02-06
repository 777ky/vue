<template>
  <div>
    <div>{{isDuring}}</div>
    <!--
      <p v-if="isAuthenticated">{{isAuthenticated}}</p>
    -->
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
      'ls',
      'isDuring'
    ]),

  },
  methods:{
    ...mapActions([
      'login',
      'logout',
      'setUser'
    ]),
    doLogin () {
      // this.isDuring = true;
      this.login()
    },
    doLogout () {
      this.logout()
    }
  },
  data() {
    return {
      // isDuring: false,
    }
  },
  created(){

    console.log(this.ls)


    firebase.auth().getRedirectResult().then(
      result=>{
        // console.log('result')
        // console.log(result)
        // if (result.credential) {
        //   this.setUser(result.user)
        // }
        // this.isDuring = true;
      }
    ).catch(err=>console.log(err));

    firebase.auth().onAuthStateChanged(
    (user) => {
      this.setUser(user)
      console.log('change')
      // this.$router.push('/auth/')
    });
  },
  mounted() {

  },
}
</script>

<style>
</style>
