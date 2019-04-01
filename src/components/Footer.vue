<template>
  <v-bottom-nav
    :value="true"
    fixed
    color="#fff"
  >
    <v-btn
      color="teal"
      flat
      value="recent"
    >
      <span>Recent</span>
      <v-icon>history</v-icon>
    </v-btn>

    <v-btn
      color="teal"
      flat
      value="favorites"
    >
      <span>Favorites</span>
      <v-icon>favorite</v-icon>
    </v-btn>

    <v-btn
      color="teal"
      flat
      value="nearby"
    >
      <span>Nearby</span>
      <v-icon>place</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppFooter',
  computed: {
    ...mapGetters(['user'])
  }
}
</script>
