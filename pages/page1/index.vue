<template>
  <section class="container">
    <div>
      <p class="cnt">count={{count}}</p>
      <button class="add-btn" @click="add">+</button>
      <!--
      <button @click="$store.dispatch('counter/setInit')">0</button>
      -->
      <button @click="init">0</button>
        <ul>
        <li v-for="(item, index) in result"
          :key="index"
          v-bind:id="item.id"
          v-bind:name="item.name"
          v-bind:tel="item.tel"
        >{{item.name}}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapActions,mapState } from 'vuex'
import axios from 'axios';

export default {
  computed: {

    ...mapState('counter',[
      'count',
      'result'
    ]),

    // count () {
    //   return this.$store.state.counter.count
    // },
    // result(){
    //   return this.$store.state.counter.result
    // }
  },
  methods: {
    ...mapActions('counter',[
      'addCount',
      'setInit',
      'setData'
    ]),
    init(){
      this.setInit()
      // this.$store.commit('counter/setInit')
    },
    add() {
      this.addCount()
      // this.$store.commit('counter/addCount')
    },
  },
  async fetch ({ store, params }) {
    let result = await axios.get('https://jsondata.okiba.me/v1/json/ymC4X190129052320');

    // この時点でmapActionsにsetDataが入っていない・・・
    // this.setData(result.data)
    store.commit('counter/setData', result.data)

  }
}
</script>
