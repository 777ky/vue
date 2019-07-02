<template>
  <div class="str-container delete">
    <div class="str-header">
      <app-header :isUser="false" :isActive="false" />
    </div>
    <div class="str-content">
      <main class="str-content-inr">
        <div class="str-content-inr-center">
          <v-progress-circular
            v-if="!isLoaded"
            class="progress"
            color="primary"
            indeterminate
          />
        <div v-show="!isCredential && isLoaded">
          <p>アカウントを削除するには再度ログインが必要です</p>
          <div class="btn-signin">
            <button type="button" class="btn-signin-google" @click="reSignIn">Google SignIn
          </button>
          </div>
          <v-btn flat color="accent" @click="$router.push('/')">CANCEL</v-btn>
        </div>

        <div v-show="isCredential && isLoaded">
          <p>アカウントを削除してよろしいですか？</p>
          <v-btn round outline color="accent" @click="$router.push('/')">CANCEL</v-btn>
          <v-btn round color="secondary" @click="deleteUser">OK</v-btn>
        </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'

export default {
  components: {
    AppHeader
  },
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

<style lang="scss" scope>
.delete{
  .btn-signin{
    position: relative;
    margin: 16px 20% auto;
  }
}
</style>
