<template>
  <div class="str-container signin">
    <div class="str-header">
      <app-header :isActive="false" />
    </div>
    <div class="str-content">
      <main class="str-content-inr">
        <div class="str-content-inr-center">
          <div class="signin-filter"></div>
          <v-progress-circular
              v-if="!isLoaded"
              class="progress"
              color="primary"
              indeterminate
            />

          <div class="btn-signin" v-show="isLoaded">
            <button type="button" class="btn-signin-google" @click="signIn">Google SignIn</button>
          </div>
        </div>
      </main>
    <!-- /str-content --></div>
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
  background:url(/images/run-woman.png) center 0 no-repeat;
  background-size:cover;
  .signin-filter{
    position:fixed;
    top:0;
    left:0;
    height:100%;
    width:100%;
    filter: blur(1px);
    background-color: rgba(255, 255, 255, 0.41);
  }
  .btn-signin{
    width: 100%;
  }
}
</style>
