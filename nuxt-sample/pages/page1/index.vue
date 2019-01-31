<template>
  <section class="container">
    <div>
      <p>count={{count}}</p>
      <button @click="addCount">カウントアップ</button>
      <button @click="$store.dispatch('counter/signOut')">ログアウト</button>
      <ul class="hello_footer hello_footer2">
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
import axios from 'axios'
export default {
  computed: {
    count () {
      return this.$store.state.counter.count
    },
    result(){
      return this.$store.state.counter.result
    }
  },
  methods: {
    addCount (e) {
      this.$store.commit('counter/add')
    }
  },
  async fetch ({ store, params }) {

    let result = await axios.get('https://jsondata.okiba.me/v1/json/ymC4X190129052320');

    store.commit('counter/setData', result.data)
  },
}
</script>
