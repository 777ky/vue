<template>
  <section class="container">
    <div>
     <p>...</p>
    </div>
  </section>
</template>

<script>
import firebase from '@/plugins/firebase'
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'setUser',
    ])
  },
  mounted(){
    firebase.auth().onAuthStateChanged(
      (result) => {
        if(result){
          this.setUser(true)
          this.$router.push('/login/')
          return;
        }
      });
  }
}
</script>
