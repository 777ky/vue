<template>
  <v-container class="delete-account" fluid justify-center align-center>

    <div class="progress-container" v-if="!isLoaded">
      <v-progress-circular
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>

    <div class="delete-account-inr" v-show="!isCredential && isLoaded">
      <p>アカウントを削除するには再度ログインが必要です</p>
      <div class="btn-signin-container">
      <button type="button" class="btn-signin" @click="reSignIn">
        <img src="/images/btn-google-signin.png" alt="Google SignIn">
      </button>
      <p><a href="/">top</a></p>
      </div>

    </div>
    <div v-show="isCredential">
      <p>アカウントを削除してよろしいですか？</p>
      <v-btn round outline color="accent" @click="$router.push('/')">CANCEL</v-btn>
      <v-btn round color="secondary" @click="deleteUser">OK</v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
  data() {
    return {
      title: 'deleteAccount',
      isCredential:false,
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
      // 'isCredential',
      'isLoaded',
    ])
  },
  methods:{
    ...mapActions([
      'loadComplete',
      'reSignIn',
    ]),
    deleteUser(){
      this.$store.dispatch('DELETE_USER',
        this.credential
      )
    }
  },
  async mounted() {

    // this.$firebaseAuth().getRedirectResult().then((result)=>{
    //   console.log(result.credential)
    // })

    this.credential = await this.$firebaseCredential()
    console.log(this.credential)

    if(this.credential){
      this.isCredential = true
      this.loadComplete()
    }else{
      this.loadComplete()
    }

    const user = await this.$firebaseAuthCheck()
    if(!user){
      this.$router.push('/signin')
    }
  }
}
</script>

<style lang="scss">
.delete-account{
  display: flex;
}
.btn-signin-container{
  width:295px;
  margin:0 auto;
  .btn-signin{
    img{
      max-width:100%;
    }
  }
}
</style>
