<template>
  <div :class="['card-challenge',{'is-active':isActive},{'is-pseudo':isPseudo}]">
    <div v-show="isPseudo" class="str-pseudo">

      <date-picker v-if="showDatePicker" @close="toggleDatePicker"></date-picker>
    <!-- /str-pseudo --></div>

    <div  v-show="!isPseudo">
    <transition name="card-challenge-transition">
      <div v-if="!isHidden" class="card-challenge-inr">
        <div class="card-challenge-content">
          <div @click="initChallenge()">
            <h2 class="card-challenge-hdg">{{name}}</h2>
            <p class="card-challenge-txt">
          30日間続けることで美しい姿勢や疲れづらい体になることを目指します。</p>
          </div>
          <div v-show="isActive" class="">
            <!--
              <v-btn class="card-challenge-link" @click="toggleChallengeStatus()">BACK</v-btn>
              -->

            <div v-if="!isChallengeLoaded" class="progress-container">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </div>

            <transition name="card-challenge-item">
              <div v-show="isChallengeLoaded" class="card-challenge-item">
                <div :class="{'is-challenge-loaded':isChallengeLoaded}">

                <div class="start-date-container">
                <span class="start-date-sup">Start Date</span>
                <div class="start-date">{{format()}}</div>
                </div>

                <v-icon class="icon-calendar">calendar_today</v-icon>
                <!--
                  TODO:何日目かどうか？
                  戻るボタンの挙動について検討する
                  タイマーのモーダルについて再検討

                  初日と当日を計算
                  日付セットしていない場合は0→startボタン
                  未来なら0
                  過去ならリセットを促す？
                  <div class="cirle">
                    <svg viewBox="0 0 156 156">
                      <circle :class="['circle','circle-anime','d'+challenge[index].day]" cx="77" cy="77" r="75" fill="none" stroke="#ccc" width="150" height="150"/>
                      <circle class="circle" cx="77" cy="77" r="75" fill="none" stroke="#ccc" width="150" height="150" />
                      <text class="circle-day" x="50%" y="50%" text-anchor="middle" dominant-baseline="central">
                      {{challenge[index].day}}
                      </text>
                    </svg>
                  </div>
                  -->



                <modal :index="postIndex" v-if="showModal"
                @close="closeModal" @checkCollection="checkCollection"></modal>

                <div v-show="!isReset">
                  <v-btn type="button" @click="toggleDatePicker()">pick</v-btn>
                  <v-btn type="button" @click="setChallengeDate()">SET PLANK</v-btn>
                </div>
                <div v-show="isReset">
                  <v-btn type="button" @click="resetChallengeDate()">Reset First Day</v-btn>
                </div>
                <div class="card-challenge-calendar">
                  <div class="card-challenge-calendar-item"
                    v-for="(item, index) in challenge"
                    :key="`card-${index+1}`"
                  >
                    <div
                    :class="['card-challenge-calendar-item-inr',{'is-checked':item.check},{'is-rest':item.text==='REST'}]"
                    >

                    <div v-if="item.text!=='REST'">
                      <button @click="openModal(index)">modal</button>
                    </div>

                    <div class="date">
                      {{item.date.getMonth()+1}}/{{item.date.getDate()}}
                    </div>
                    <div class="day">DAY:{{item.day}}</div>
                    <div class="min">{{item.text}}</div>
                    <div class="check">{{item.check}}</div>
                    </div>
                  </div>
                </div>

                </div>
              </div>
            </transition>

          </div>

        </div>
      </div>
    </transition>
    </div>

  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import DatePicker from '@/components/DatePicker'
import Modal from '@/components/Modal'
import HeaderPse from '@/components/HeaderPse'

export default {
  watchQuery: true,
  name: 'CardChallenge',
  components: {
    HeaderPse,
    DatePicker,
    Modal
  },
  props: {
    challengeName:String,
  },
  data(){
    return {

      showModal: false,
      name: this.challengeName,
      showDatePicker: false,
      isReset:false,
      isChallengeLoaded: false,
    }
  },
  computed:{
    ...mapGetters([
      'routeName',
      'routeQuery',
      'challenge',
      'user',
      'startDate',
      'isLoaded',
      'isSetting',
      'isPseudo'
    ]),
    isActive(){
      if(this.routeQuery.item === void 0) return false
      return this.routeQuery.item === this.challengeName?true:false
    },
    isHidden(){
      if(this.routeQuery.item === void 0) return false
      return this.routeQuery.item !== this.challengeName?true:false
    },
  },
  methods:{
    ...mapActions([
      'loadComplete',
      'checkChallenge',
    ]),
    // isHidden(){
    //   if(this.routeQuery.item === void 0) return false
    //   return this.routeQuery.item !== this.challengeName?true:false
    // },

    openModal(index){
      this.postIndex = index;
      this.showModal = true;
    },
    closeModal(){
      this.showModal = false;
    },

    format(){
      if(!this.startDate) return
      // const start = this.startDate.toDate()
      const start = this.startDate
      const date = start.getFullYear() + '-' + (start.getMonth()+1) + '-' + start.getDate()
      return date
    },

    toggleDatePicker(){

      this.$router.push({query:{
        item:this.name,
        pse:true
      }})

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
      this.$router.go(-1)
      this.isSelected = false
      this.toggleChallengeLoaded()
    },
    async initChallenge(){

      this.$router.push({query:{item:this.name}})

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
      }

    },

  },
  mounted(){

    if(this.routeQuery.item === this.name){
      this.initChallenge()
    }
  },
}
</script>
<style lang="scss" scoped>
@import "../static/styles/set.scss";
.str-pseudo{
  position: aboslute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:#fff;
}
.start-date-container{
  .start-date-sup{
    color:$txtSecondary;
  }
  .start-date{
    color:$txtPrimary;
    font-weight:bold;
    font-size:25px;

  }
}
.icon-calendar{
  color:$txtSecondary;
}
.progress-container{
  margin-top:160px;
}
.card-challenge{
  &.is-active{
  height:100%;
    .card-challenge-inr{
      height:100%;
    }
  }
}
.card-challenge-content{
  height:100%;
}
.card-challenge-inr{
flex:1;
height:100%;
padding:16px 16px 8px;
background-color: #fff;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
margin-bottom:8px;
}
.card-challenge-hdg{
  font-size:20px;
  color:$txtPrimary;
}
.card-challenge-txt{
  font-size:12px;
  color:$txtSecondary;
}
.card-challenge-calendar{
  display:flex;
  flex-wrap:wrap;
  .card-challenge-calendar-item{
    width:(100%/7);
    .card-challenge-calendar-item-inr{
      &.is-checked{
        background-color:#fec;
      }
    }
  }
}

.card-challenge-transition-enter-active, .card-challenge-transition-leave-active {
transition: .5s all ease-in-out;
transform: scaleY(1);
}
.card-challenge-transition-enter, .card-challenge-transition-leave-to {
transform: scaleY(0);
height:0;
overflow:hidden;
}



.card-challenge-item-enter-active, .card-challenge-item-leave-active {
transition: .5s all ease-in-out;
}
.card-challenge-item-enter, .card-challenge-item-leave-to {
opacity: 0;
transform: translateX(10px);
}
</style>
