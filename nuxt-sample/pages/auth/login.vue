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
  created(){
    // (async () => {
    //   try {
    //       const {user, credential} = await firebase.auth().getRedirectResult();
    //         console.log(user)
    //   }catch (err) {
    //   }
    // })();
    firebase.auth().onAuthStateChanged(
      (user) => {
        this.setUser(user)
        // this.$router.push('/auth/')
      }
    );
  },
  // async mounted () {
  mounted () {
    console.log('mounted')

    // firebase.auth().onAuthStateChanged(
    //   (user) => {
    //     this.setUser(user)
    //     console.log('change')
    //     // this.$router.push('/auth/')
    //   }
    // );


  },
  data() {
    return {
      showLoaging: false,
    }
  },
  computed: {
    // ...mapState([
      // 'authentication'
    // ]),
    ...mapGetters([
      'isAuthenticated'
    ])
  },
  methods: {
    ...mapActions([
      'login',
      'logout',
      'setUser',
      // 'setAuthentication'
    ]),
    doLogin () {
      this.login()
    },
    doLogout () {
      this.logout()
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
