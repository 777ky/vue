<template>
  <v-app>
    <v-layout
      class="v-layout"
      align-center
      justify-center
    >
      <v-content>
      <nuxt />
      <!--
        <v-container v-if="!isLoaded" fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex shrink>
              <v-progress-circular
                color="primary"
                indeterminate
              ></v-progress-circular>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container v-show="isLoaded">
          <nuxt />
        </v-container>
        -->
      </v-content>
    </v-layout>
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

.v-app{
}
.v-layout{
  background:var(--v-backgroud-base);
  height:100%;
}
.v-content{
  height:100%;
}

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


