<template>
  <div>
  <button @click="openModal(item)">modal</button>
  <modal :val="postItem" v-if="showModal" @close="closeModal"></modal>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import { mapActions,mapState,mapGetters } from 'vuex'
import modal from '~/components/modal.vue'

export default {
  created(){
  },
  mounted () {
  },
  data() {
    return {
      showLoaging: false,
      showModal: false,
      postItem: '',
      item: { id: 1, name: 'aのitem' },
    }
  },
  computed: {
  },
  methods: {
    openModal(item) {
      this.postItem = item;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  },
  components: {
    modal
  }
}
</script>

<style lang="scss" scoped>
</style>
