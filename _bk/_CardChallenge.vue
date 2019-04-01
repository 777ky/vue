<template>
  <!--
  <div :class="[select ? selected : '', 'card-challenge' ]">
  -->
  <div class="card-challenge">
    <transition-group tag="div">
    <div key="card-challenge">
      <v-btn block :to="'?page='+[val]" @click="toggleSelect">{{val}} Challenge</v-btn>
      <nuxt-link :to="'/'">BACK</nuxt-link>
    </div>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CardChallenge',
  props: {
    val: String
  },
  computed:{
    ...mapGetters([
      'user'
    ])
  },
  methods:{
    toggleSelect() {
      this.select = !this.select
    },
  },
  // asyncDataはコンポーネント側では使えないぽい？
  async asyncData({ query }) {
    const page = query.page || ''
    const lower = page!== '' ? 'lower' : ''
    console.log(page)
    return {
      page,
      lower
    }
  },
  data(){
    return {
      select: false,
      selected: 'selected',
    }
  }
}
</script>
<style lang="scss" scoped>
.card-challenge{
  opacity:1;
  height:150px;
  background-color:#ffe;
  transition: 1s all ease;
}
.lower{
  .card-challenge{
    height:0;
    overflow:hidden;
    &.selected{
      opacity:1;
      height:100%;
    }
  }
}
</style>
