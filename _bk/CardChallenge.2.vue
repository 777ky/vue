<template>
  <div :class="['card-challenge',val.name]">
    <transition-group name="card-item" tag="div">
      <div key="card-item" class="card-item">
        <v-btn block :to="'?page='+[val.name]" @click="initChallenge()">{{val.name}} Challenge</v-btn>
      <!-- /card-item --></div>
    </transition-group>

      <div v-show="isSelected">
        <v-btn class="card-link" :to="'/'" @click="toggleChallengeStatus()">BACK</v-btn>

        <div v-if="!isChallengeLoaded" fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex shrink>
              <v-progress-circular
                indeterminate
                color="amber"
              ></v-progress-circular>
            </v-flex>
          </v-layout>
        </div>

        <transition-group name="card" tag="div">
          <div key="card" v-show="isChallengeLoaded" class="card-challenge-item">

          <div :class="['card-challenge-item',isChallengeLoaded?'is-challenge-loaded':'']">

          <div>{{format()}}</div>

          <div v-show="!isReset">
            <v-btn type="button" @click="toggleDatePicker()">pick</v-btn>
            <date-picker v-if="showDatePicker" @close="toggleDatePicker"></date-picker>
            <v-btn type="button" @click="setChallengeDate()">SET PLANK</v-btn>
          </div>
          <!--
          <div v-show="isReset">
            <v-btn type="button" @click="resetChallengeDate()">Reset First Day</v-btn>
          </div>
          TODO:マス目に変更
          -->

          <v-card flat tile>
            <v-window v-model="onboarding">
              <v-window-item
                v-for="(item, index) in challenge"
                :key="`card-${index+1}`"
              >
                <v-card height="200">
                  <div tag="v-card-text">
                    <div class="date">
                      {{item.date.getMonth()+1}}/{{item.date.getDate()}}
                    </div>
                    <div class="day">DAY:{{item.day}}</div>
                    <div class="min">{{item.text}}</div>
                    <div class="check">{{item.check}}</div>
                    <div class="btn" ><button type="button" @click="checkCollection(item.day,!item.check)">check</button></div>
                  </div>
                </v-card>
              </v-window-item>
            </v-window>

            <v-card-actions>
              <v-btn @click.stop="prev">
                <v-icon>chevron_left</v-icon>
              </v-btn>

              <v-btn @click.stop="next">
                <v-icon>chevron_right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
          </div>


      </div>
    </transition-group>

    </div>

  </div>
</template>

<script>
import { mapState,mapGetters,mapActions } from 'vuex'
import DatePicker from '@/components/DatePicker'


export default {
  name: 'CardChallenge',
  components: {
    DatePicker,
  },
  props: {
    val: Object
  },
  data(){
    return {


      length: 30,
      onboarding: 0,

      name: this.val.name,
      showDatePicker: false,
      isSelected:false,
      isSelectedClass:'',
      isReset:false,
      isChallengeLoaded: false,
      dayArray: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    }
  },
  computed:{
    ...mapState([
      'localStorage',
      'challenge'
    ]),
    ...mapGetters([
      'page',
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

    initCard(){
      // TODO:今日を表示

      this.onboarding = 16

      console.log('ss')
    },

    next(){
      this.onboarding = this.onboarding + 1 === this.length
        ? 0
        : this.onboarding + 1
    },
    prev(){
      this.onboarding = this.onboarding - 1 < 0
        ? this.length - 1
        : this.onboarding - 1
    },

    format(){
      if(!this.startDate) return
      // const start = this.startDate.toDate()
      const start = this.startDate
      const date = start.getFullYear() + '-' + (start.getMonth()+1) + '-' + start.getDate()
      return date
    },

    toggleDatePicker(){
      this.showDatePicker = !this.showDatePicker;
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
    toggleChallengeLoaded(){
      this.isChallengeLoaded = !this.isChallengeLoaded
    },
    toggleChallengeStatus(){
      this.isSelected = false
      this.toggleChallengeLoaded()
    },
    async initChallenge(){

      // console.log( this.$route.query )
      // console.log( this.isSelected )
      // this.toggleSelected()
      this.isSelected = true
      this.isSelectedClass = this.isSelected ?'is-selected':''

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

      this.isReset = this.isSetting

      if (!this.isChallengeLoaded) {
        this.toggleChallengeLoaded()
        // this.isChallengeLoaded = true
        // this.loadComplete()
      }

      // console.log( this.$route.query )

    },

  },
  mounted(){
    // console.log(this.isChallengeLoaded)

    if(this.$route.query.page === this.val.name){
      this.initChallenge()
    }
    this.initCard()
  },
}
</script>
<style lang="scss" scoped>
.card-challenge{
  opacity:1;
  height:150px;
  background-color:#ffe;
  transition: .5s all ease-in-out;
}
.lower{
  .card-challenge{
    height:0;
    overflow:hidden;
    &.is-selected{
      opacity:1;
      height:100%;
    }
  }
}
.card-link{
  color:#333;
}


// .card-challenge-item{
//   opacity:1
// }
// .card-enter-active, .card-leave-active {
// transition: .5s all ease-in-out;
// }
// .card-enter, .card-leave-to {
// opacity: 0;
// transform: translateX(10px);
// }
// .card-move {
// transition: 5s all ease;
// }

// .challenge-list{
//   margin:0;
//   padding:0;
//   list-style-type:none;
//     li{
//       margin:0;
//       list-style:none;
//       list-style-type:none;
//       border-left:1px solid #eee;
//       border-top:1px solid #eee;
//       span{
//         border-bottom:1px solid #eee;
//         display:block;
//         text-align:left;
//       }
//       .btn{
//         padding:10px;
//         button{
//           background:#ccc;
//           width:100%;
//           padding:3px 5px;
//           border-radius:5px;
//         }
//       }
//     }
// }
</style>
