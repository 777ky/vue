<template>
  <div>
  <!--
    <app-logo/>
  <p v-if="authentication">Loading...</p>
  <p>{{authentication}}</p>
  -->
  <button @click="doLogin">login</button>
  <button @click="openModal(item)">modal</button>
  <modal :val="postItem" v-if="showModal" @close="closeModal"></modal>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import { mapActions,mapState } from 'vuex'
import AppLogo from '~/components/AppLogo.vue'
import modal from '~/components/modal.vue'

export default {
  async mounted () {
    let user = await new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => resolve(user))
    })

    // setUser is mapped action from vuex
    this.setUser(user)

    // ログイン完了したらindexへ遷移
    if (user) {
      this.$router.push('/auth/')
    }
  },
  data() {
    return {
      // user: this.$store.state.user,
      showLoaging: false,
      showModal: false,
      postItem: '',
      item: { id: 1, name: 'aのitem' },
    }
  },
  // computed: {
  //   ...mapState([
  //     'authentication'
  //   ]),
  // },
  methods: {
    ...mapActions([
      'login',
      'setUser',
      'authentication'
    ]),
    doLogin () {
      this.login()
        .then(() => console.log('resloved'))
        .catch((err) => console.log(err))
    },
    openModal(item) {
      this.postItem = item;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  },
  components: {
    AppLogo,
    modal
  }
}
</script>

<style lang="scss" scoped>
</style>
