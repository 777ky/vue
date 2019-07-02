<template>
  <div class="str-container index">
    <div class="str-header">
      <div class="card-container" v-show="isLoaded">
        <app-header :isUser="true" :isActive="isActive" />
      </div>
    </div>
    <div class="str-content">
      <main class="str-content-inr">
        <div class="str-content-inr-center" v-show="!isLoaded">
          <v-progress-circular
            class="progress"
            color="primary"
            indeterminate />
        </div>
        <div class="str-content-inr-start" v-show="isLoaded">
          <div class="challenge-container">
            <card-challenge :challenge-name="'plank'" :challenge-txt="' 30日間続けることで美しいくびれを目指します'" />
            <!-- <card-challenge :challenge-name="'pakapaka'"
            :challenge-txt="' 30日間続けることで美しい脚を目指します'"
            /> -->
          </div>
        </div>
      </main>
    <!-- /str-content --></div>
  </div>
</template>
<script>
import { mapActions,mapGetters } from 'vuex'
import AppHeader from '@/components/AppHeader'
import CardChallenge from '@/components/CardChallenge'

export default {
  watchQuery: ['page','item','pse'],
  components: {
    AppHeader,
    CardChallenge,
  },
  data() {
    return {
      title: 'TOP',
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
      'routeQuery',
      'routeName',
      'user',
      'isLoaded',
      'isPseudo'
    ])
  },
  methods:{
    ...mapActions([
      'loadComplete',
    ]),
  },
  async asyncData({ query }) {
    const itemName = query.item || ''
    const isActive = itemName === ''? false:true
    return {
      // itemName,
      isActive
    }
  },
  async mounted(){
    const user = await this.$firebaseAuthCheck()
    if(!user){
      this.$router.push('/signin')
      return
    }

    await Promise.all([
      this.user
        ? Promise.resolve()
        : this.$store.dispatch('GET_CREDENTIAL', {
          user:this.user || user || null
        })
    ])

    if (!this.isLoaded) {
      this.loadComplete()
    }

  },
}
</script>
<style lang="scss" scope>
.challenge-container{
  width: 100%;
}
</style>
