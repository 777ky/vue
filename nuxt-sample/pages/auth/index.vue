<template>
  <div>
  <p v-if=user>user={{user.email}}</p>
  <button @click="doLogout">doLogout</button>
  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex'
export default {
  // 算出プロパティ
  // https://qiita.com/kaorina/items/bb261a119b9f02e02c2d
  computed: {
    // user(){
    //   return this.$store.state.user
    // }
    //https://vuex.vuejs.org/ja/guide/state.html
    ...mapState([
      'user'
    ]),
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    doLogout () {
      this.logout()
        .then(() => {
          this.$router.push('/auth/login')
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
