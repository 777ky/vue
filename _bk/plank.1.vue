<template>
  <div :class="['index '+lower]">
    <transition name="card">
      <div class="card">
        <card-personal :isActive="isActive" />
        <div class="card-challenge-container">
          <card-challenge
            :isActive="isActive"
            :val="{ name:'plank',page }" />
          <card-challenge
            :class="[page==='pakapaka'?'is-selected':'']"
            :val="{ name:'pakapaka',page }" />
          <v-btn :to="'/'">backToHome</v-btn>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapActions,mapMutations,mapGetters } from 'vuex'
import CardPersonal from '@/components/CardPersonal'
import CardChallenge from '@/components/CardChallenge'

import Spark from '@/components/Spark'

export default {
  watchQuery: ['page'],
  components: {
    Spark,
    CardPersonal,
    CardChallenge
  },
  data() {
    return {
      isActive: false,
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
      'user',
      'isLoaded',
    ])
  },
  methods:{
    ...mapActions([
      'loadComplete',
    ]),

    async signOut() {
      const signout = await this.$store.dispatch('signOut')
      this.$router.push('/signin')
    },
  },
  async asyncData({ query }) {
    const page = query.page || ''
    const lower = page!== '' ? 'lower' : ''
    const isActive = page!== '' ? true : false

    return {
      page,
      lower,
      isActive
    }
  },
  async mounted(){

    let user
    if (!this.user) user = await this.$firebaseAuthCheck()

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
<style lang="scss" scoped>
.index{
  margin:0 -16px;
  height:100%;
  box-sizing:border-box;
}
.card{
  height:100%;
  // display:grid;
  // grid-template:
  // "personal" 300px
  // "challenge" 1fr/
  // 1fr;
  // overflow:hidden;
  // .card-personal{
  //   grid-area:personal;
  // }
  // .card-challenge-container{
  //   grid-area:challenge;
  // }
}
</style>
