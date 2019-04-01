<template>
  <v-container :class="['index '+page+' '+lower]">
    <div :class="[page]">
    <card-personal />
    </div>
    <transition name="bounce-top">
    <div class="card" v-if="show">
    <div>{{userData.name}}</div>
    <v-btn block @click="signOut">signOut</v-btn >
    <v-btn block :to="{name:'plank'}">Plank Challenge</v-btn>
    <nuxt-link :to="'?page=plank'">LINK</nuxt-link>
    <nuxt-link :to="'/'">BACK</nuxt-link>
    {{page}}
    <!--
    <nuxt-link :to="'?page=' + (page - 1)">LINK</nuxt-link>
    -->
    </div>
    </transition>

    <button @click="show = !show">Toggle show</button>
    <transition name="bounce">
    <div v-if="show">
      <div class="box">
      <p>hello</p>
      </div>
    </div>
    </transition>

    <div
    :class="{
      'test' : !show,
    }">
    <transition-group tag="div">
    <div :class="[following ? followclass : '', follow]" key="follow">
    <button @click="toggleFollow" >
      <span v-if="following">&#10004; Following</span>
      <span v-else>Follow</span>
    </button>
    </div>
    </transition-group>
    </div>

  </v-container>
</template>
<script>
import { mapActions,mapMutations,mapGetters } from 'vuex'
import CardPersonal from '@/components/CardPersonal'


export default {
  watchQuery: ['page'],
  // key: to => to.fullPath,
  // transition(to, from) {
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // },
  components: { CardPersonal },
  data() {
    return {
      following: false,
      follow: 'follow',
      followclass: 'active-follow',


      show: true,
      title: 'TOP',
      userData:{
        name:null
      }
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
    toggleFollow() {
      if (this.following) {
        // this.$store.commit('removeFollower')
      } else {
        // this.$store.commit('addFollower')
      }
      this.following = !this.following
    },

  },
  async asyncData({ query }) {
    // /?sss=123 => {sss: 123}
    // /?sss     => {sss: null}
    //query.page
    const page = query.page || null
    const lower = page!== null ? 'lower' : null

    console.log(lower)
    return {
      page,
      lower
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

    this.userData = this.user

    if (!this.isLoaded) {
      this.loadComplete()
    }
  },
}
</script>
<style lang="scss" scoped>
.container{
  position:relative;
}
@mixin group($top, $left) {
  position: absolute;
  top: $top;
  left: $left;
  display: block;
  transform: translateZ(0);
  transition: 0.4s all ease-out;
}

.follow {
  font-weight: bold;
  width: 150px;
  height:100px;
  background-color:#eee;
  transition: 1s all ease;

  // @include group(320px, 220px);
  &:focus {
    outline: 1px dotted rgb(5, 134, 106);
  }
}

.active-follow {
  background: rgb(5, 134, 106);
}
.test{

  .follow {
    height:200px;
    // transition:height 1s ease;
    // transform:scaleY(10)
    // transform: translate3d(-215px, -80px, 0);
  }
}


.card{
  background-color:#ccc;
  height:150px;
  transform-origin: top left;
}
.box{
  background-color:#eee;
}

.bounce-top-enter-active {
  animation: bounce-top-in .5s;
}
.bounce-top-leave-active {
  animation: bounce-top-in .5s reverse;
}
@keyframes bounce-top-in {
  0% {
    transform:scaleY(0);
  }
  50% {
    transform:scaleY(1);
  }
  100% {
    transform: scaleY(1) ;
  }
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>
