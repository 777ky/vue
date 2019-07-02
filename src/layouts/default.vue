<template>
  <v-app>
    <nuxt />
  </v-app>
</template>
<script>
import AppFooter from '@/components/Footer'
import AppHeader from '@/components/AppHeader'
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
    ]),
    ...mapGetters([
    ]),
  },
}
</script>



