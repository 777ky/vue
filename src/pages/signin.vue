<template>
  <v-container class="signin" fluid justify-center align-center>
    <div class="signin-filter"></div>

    <div class="progress-container" v-if="!isLoaded">
      <v-progress-circular
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>

    <div class="btn-signin-container" v-show="isLoaded">
      <button type="button" class="btn-signin" @click="signIn">
        <img src="/images/btn-google-signin.png" alt="Google SignIn">
      </button>
    </div>
  </v-container>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

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
      'isLoaded',
    ])
  },
  methods:{
    ...mapActions([
      'loadComplete',
      'signIn',
    ])
  },
  async mounted() {
    const user = await this.$firebaseAuthCheck()
    if(user){
      this.$router.push('/')
    } else {
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
  z-index:2;
  width:295px;

  .btn-signin{
    img{
      max-width:100%;
    }
  }
}
</style>
