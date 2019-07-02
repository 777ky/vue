<template>
  <v-container class="index" fluid justify-center align-center>


    <div v-show="!isLoaded" class="progress-container"
      style="display:flex;flex:1;height:100%;justify-content:center;align-items:center;"
    >
      <v-progress-circular
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>

    <div class="card-container" v-show="isLoaded">
      <card-personal :isActive="isActive" />
      <challenge />
    </div>
  </v-container>
</template>
<script>
import { mapActions,mapGetters } from 'vuex'
import Top from '@/components/Top'
import Challenge from '@/components/Challenge'
import CardPersonal from '@/components/CardPersonal'

export default {
  watchQuery: ['page','item','pse'],
  components: {
    CardPersonal,
    Top,
    Challenge
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
      itemName,
      isActive
    }
  },
  async mounted(){
    // let user
    // if (!this.user) user = await this.$firebaseAuthCheck()
    const user = await this.$firebaseAuthCheck()
    if(!user){
      // 未ログイン
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
<style lang="scss" scoped>
.progress-container{
  flex:1;
  height:100%;
  justify-content:center;
  align-items:center;
}
.card-container{
  display:grid;
  grid-template:
  "header" auto
  "content" 1fr/
   1fr;
  height:100%;
}
</style>
