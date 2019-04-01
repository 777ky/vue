<template>
  <v-container class="signin" fluid justify-center align-center>
    <div class="signin-filter"></div>
    <div class="btn-signin-container">
      <button type="button" class="btn-signin" @click="signIn">
        <img src="/images/btn-google-signin.png" alt="Google SignIn">
      </button>
    </div>
  </v-container>
</template>

<script>
import { mapState,mapActions,mapGetters,mapMutations } from 'vuex'

export default {
  data() {
    return {
      title: 'SignIn',
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
  computed:{
    ...mapGetters([
      'user',
    ]),
  },
  methods:{
    ...mapActions([
      'loadComplete',
      'signIn',
    ])
  },
  async mounted() {

    // let user
    // if (!this.user) user = await this.$firebaseAuthCheck()
    const user = await this.$firebaseAuthCheck()

    // await Promise.all([
    //   // ユーザ情報を取得する
    //   this.user
    //     ? Promise.resolve()
    //     : this.$store.dispatch('GET_CREDENTIAL', {
    //       user: this.user|| user || null
    //     })
    // ])

    if(user){
      // ログイン済
      this.$router.push('/')
    } else {
      // 未ログイン
      this.loadComplete()
    }
  }
}
</script>

<style lang="scss">
.signin{
  display:flex;
  background:url(/images/run-woman.png) center 0 no-repeat;
  background-size:cover;
}
.signin-filter{
  position:fixed;
  height:100%;
  width:100%;
  filter: blur(1px);
  background-color: rgba(255, 255, 255, 0.41);
  z-index:1;
}
.btn-signin-container{
  margin: 0 56px;
  z-index:2;
  .btn-signin{
    img{
      max-width:100%;
    }
  }
}
</style>
