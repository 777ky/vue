<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>
<script>
import AppFooter from '@/components/Footer'
import AppHeader from '@/components/Header'
import { mapState, mapGetters } from 'vuex'

export default {
  components: { AppHeader,AppFooter },
  data(){
    return{
    }
  },
  mounted(){
  },
  computed: {
    ...mapState([
      'page'
    ]),
    ...mapGetters([
      'isLoaded'
    ]),
  },
}
</script>
<style lang="scss" scoped>
.container {
  position:relative;
  text-align: center;
  height:100%;
  padding:0;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.page-enter-active {
  transition: opacity 0.25s ease-out;
}
.page-leave-active {
  transition: opacity 0.25s ease-in;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>


