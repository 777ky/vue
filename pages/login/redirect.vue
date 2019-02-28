<template>
  <section class="container">
    <div>
     <p>loading...</p>
    </div>
  </section>
</template>

<script>
import firebase from '@/plugins/firebase'
import auth from '@/plugins/auth'
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations([
      'setUser'
    ]),
  },
  mounted(){
    auth().then((result)=>{
      if(result){
        this.setUser(result)
        this.$router.push('/')
      }else{
       const googleProvider = new firebase.auth.GoogleAuthProvider()
       firebase.auth().signInWithRedirect(googleProvider)
      }
    })
  }
}
</script>
