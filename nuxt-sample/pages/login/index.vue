<template>
  <section class="container">
    <div>
      <auth />
    </div>
    <div>a</div>
  </section>
</template>

<script>
import axios from 'axios';
import firebase from '@/plugins/firebase';
// import 'firebase/auth';
import auth from '~/components/auth.vue';

export default {
  computed: {
  },
  methods: {
  },
  components: {
    auth,
  }
}
</script>
