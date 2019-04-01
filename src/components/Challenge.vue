<template>
  <div class="challenge">
    <card-challenge :challenge-name="'plank'" />
    <!--<div>
    激しい動きが必要なく簡単にできる体幹トレーニングのひとつ。
    30日間続けることで美しい姿勢や疲れづらい体になることを目指します。
    </div>-->
    <card-challenge :challenge-name="'pakapaka'"
    />
    <!--
    <v-btn @click="$router.go(-1)">back</v-btn>
    -->
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
