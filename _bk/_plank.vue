<template>
  <v-container class="plank">
    <div>
    <div>{{userData.name}}</div>
    <div>{{format()}}</div>
    </div>

    <!-- SETしていない場合に表示する  -->
    <div v-show="!isReset">
    <v-btn type="button" @click="openDatePicker()">pick</v-btn>
    <date-picker v-if="showDatePicker" @close="closeDatePicker"></date-picker>
    <v-btn type="button" @click="setChallengeDate()">SET PLANK</v-btn>
    </div>
    <!--
    SET済みの場合に表示する
    -->
    <div v-show="isReset">
    <v-btn type="button" @click="resetChallengeDate()">Reset First Day</v-btn>
    </div>
      <ul class="challenge-list">
        <li v-for="(item, index) in challenge"
          :key="index"
        >
        <span class="date">
          {{item.date.getMonth()+1}}/{{item.date.getDate()}}
        </span>
        <span class="day">DAY:{{item.day}}</span>
        <span class="min">{{item.text}}</span>
        <span class="check">{{item.check}}</span>
        <span class="btn" ><button type="button" @click="checkCollection(item.day,!item.check)">check</button></span>
        </li>
      </ul>
  </v-container>
</template>

<script>

import { mapState,mapActions,mapMutations,mapGetters } from 'vuex'
import DatePicker from '@/components/DatePicker'


export default {
  head(){
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' },
        { hid: 'og:title', name: 'og:title', content: this.title + ' | ' + process.env.siteName },
        { hid: 'og:description', name: 'og:description', content: 'My custom description' },
        { hid: 'og:type', name: 'og:type', content: 'article' },
      ]
    }
  },
  data(){
    return {
      name: 'plank',
      title: 'プランク',
      userData:{
        name:null
      },
      showDatePicker: false,
      isReset:false,
      dayArray: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    }
  },
  components: { DatePicker },
  computed:{
    ...mapState([
      'localStorage',
      'challenge'
    ]),

    ...mapGetters([
      'testDate',
      'user',
      'isLoaded',
      'startDate',
      'isSetting'
    ])
  },
  methods:{
    ...mapActions([
      'loadComplete',
      'checkChallenge',
    ]),

    format() {
      if(!this.startDate) return
      // const start = this.startDate.toDate()
      const start = this.startDate
      const date = start.getFullYear() + '-' + (start.getMonth()+1) + '-' + start.getDate()
      return date
    },

    openDatePicker() {
      this.showDatePicker = true;
    },

    closeDatePicker() {
      this.showDatePicker = false;
    },

    checkCollection(key,check){
      this.$store.dispatch('CHECK_CHALLENGE', {
        user: this.user,
        key,
        check,
        name:this.name
      })
    },

    resetChallengeDate(){
      this.isReset = !this.isReset
    },

    setChallengeDate() {
      this.$store.dispatch('SET_30_DATE', {
        user:this.user,
        name:this.name,
        date:this.startDate
      })
      // チャレンジステイタスを書き込む
      this.$store.dispatch('SET_CHALLENGE_STATUS', {
        user:this.user,
        name:this.name,
        date:this.startDate,
        flag:true
      })
      this.isReset = !this.isReset

    },
  },

  async mounted(){
    let user
    // ログインユーザかどうかを確認
    if (!this.user) user = await this.$firebaseAuthCheck()

    await Promise.all([
      this.user
        ? Promise.resolve()
        : this.$store.dispatch('GET_CREDENTIAL',{
          user: this.user || user || null,
          name: this.name
        }),
      this.startDate
        ? Promise.resolve()
        : this.$store.dispatch('GET_CHALLENGE_STATUS',{
          user: this.user || user || null,
          name: this.name
        }),
    ])

    this.$store.dispatch('LOAD_CHALLENGE_STATUS',{
      user: this.user || user || null,
      name: this.name
    })

    this.$store.dispatch('LOAD_CHALLENGE',{
      user: this.user || user || null,
      name: this.name
    })

    this.userData = this.user
    this.isReset = this.isSetting


    if (!this.isLoaded) {
      this.loadComplete()
    }

  }

}
</script>

<style lang="scss">
.challenge-list{
  margin:0;
  padding:0;
  list-style-type:none;
    li{
      margin:0;
      list-style:none;
      list-style-type:none;
      border-left:1px solid #eee;
      border-top:1px solid #eee;
      span{
        border-bottom:1px solid #eee;
        display:block;
        text-align:left;
      }
      .btn{
        padding:10px;
        button{
          background:#ccc;
          width:100%;
          padding:3px 5px;
          border-radius:5px;
        }
      }
    }
}
</style>

