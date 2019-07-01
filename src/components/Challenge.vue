<template>
  <div class="challenge">
    <card-challenge :challenge-name="'plank'" />
    <card-challenge :challenge-name="'pakapaka'"
    />
  </div>
</template>
<script>
import { mapActions,mapMutations,mapGetters } from 'vuex'
import CardPersonal from '@/components/CardPersonal'
import CardChallenge from '@/components/CardChallenge'

export default {
  name: 'Challenge',
  components: {
    CardPersonal,
    CardChallenge
  },
  props:{
    itemName: String
  },
  data() {
    return{
    }
  },
  computed:{
  },
  methods:{
  },
  mounted(){
  },
}
</script>
<style lang="scss" scoped>

</style>
