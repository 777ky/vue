<template>
  <div :class="['card-challenge',{'is-active':isActive},{'is-pseudo':isPseudo}]">
    <date-picker v-if="showDatePicker" @close="toggleDatePicker"></date-picker>
    <modal :index="postIndex" v-if="showModal"
    @close="closeModal" @checkCollection="checkCollection"></modal>

    <modal-alert :title="'RESET'" :message="'開始日をリセット'" :action="'RESET'" v-if="showModalAlert"
    @close="closeModalAlert"
    @action="resetChallengeDate"
    ></modal-alert>

    <transition name="card-challenge-transition">
      <div v-if="!isHidden" class="">
        <div class="card-challenge-inr">

        <div class="card-challenge-content">
          <div @click="initChallenge()">
            <h2 class="card-challenge-hdg">{{name}}</h2>
            <p class="card-challenge-txt">
          30日間続けることで美しい姿勢や疲れづらい体になることを目指します。</p>
          </div>
          <div v-show="isActive" class="">
            <div v-if="!isChallengeLoaded" class="progress-container">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </div>

            <transition name="card-challenge-item">
              <div v-show="isChallengeLoaded" class="card-challenge-item">
                <div :class="{'is-challenge-loaded':isChallengeLoaded}">

                <div class="circle-container">
                  <svg viewBox="0 0 156 156">
                    <circle class="circle" cx="77" cy="77" r="75" width="150" height="150" />
                    <circle
                      :class="['circle','circle-anime','d'+termDate]" cx="77" cy="77" r="75" width="150" height="150"
                    />
                    <text class="circle-day-sup" x="50%" y="28%" text-anchor="middle" dominant-baseline="central">
                    day
                    </text>
                    <text class="circle-day" x="50%" y="52%" text-anchor="middle" dominant-baseline="central">
                    {{termDate}}
                    </text>
                  </svg>
                </div>

                <div class="start-date-sup">Start Date</div>

                <!-- 日付が設定されていない場合 -->
                <div v-show="!isSetting">
                  <!-- 日付がpickされていない場合 -->
                  <button class="start-date-btn" type="button"
                    @close="toggleDatePicker"
                    @click="toggleDatePicker()">

                    <div v-if="!pickDate" class="start-date-placeholder">日付選択</div>
                    <div v-if="pickDate" class="start-date">{{format(pickDate)}}</div>
                    <span class="icon-calendar"><img src="/images/icon-calendar.svg" alt="datePicker"></span>
                  </button>



                  <div v-show="!pickDate">
                    <v-btn disabled round block color="primary" type="button" >START</v-btn>
                  </div>
                  <div v-if="pickDate">
                    <v-btn round block color="primary" type="button" @click="setChallengeDate()">START</v-btn>
                  </div>

                </div>




                <!-- 日付セットした場合 -->
                <div v-show="isSetting">
                  <div class="start-date-set">{{format(startDate)}}</div>

                  <div class="card-challenge-calendar">
                    <div class="card-challenge-calendar-item"
                      v-for="(item, index) in challenge"
                      :key="`card-${index+1}`"
                    >
                      <div
                      :class="['card-challenge-calendar-item-inr',
                      {'is-today':item.day===termDate},
                      {'is-checked':item.check},{'is-rest':item.text==='REST'}]"
                      >

                      <div v-if="item.text!=='REST'">
                        <button @click="openModal(index)">
                          <div class="day">{{item.day}}</div>
                          <div class="min">{{item.text}}<span>min</span></div>
                        </button>
                      </div>
                      <div v-if="item.text==='REST'">
                        <div>
                          <div class="day">{{item.day}}</div>
                          <div class="min">{{item.text}}</div>
                        </div>
                      </div>

                      </div>
                    </div>
                  </div>

                </div>
                </div>

              </div>
            </transition>
          </div>
        <!-- /card-challenge-content --></div>
        <!-- /card-challenge-inr --></div>

        <div v-if="isSetting && isActive">
        <v-btn outline round color="info" @click="openModalAlert()">Reset First Day</v-btn>
        </div>

      <!-- /!isHidden --></div>
    </transition>

  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import DatePicker from '@/components/DatePicker'
import Modal from '@/components/Modal'
import ModalAlert from '@/components/ModalAlert'
import HeaderPse from '@/components/HeaderPse'

export default {
  watchQuery: true,
  name: 'CardChallenge',
  components: {
    HeaderPse,
    DatePicker,
    Modal,
    ModalAlert
  },
  props: {
    challengeName:String,
  },
  data(){
    return {
      showModal: false,
      showModalAlert: false,
      name: this.challengeName,
      showDatePicker: false,
      // isReset:false,
      isChallengeLoaded: false,
    }
  },
  computed:{
    ...mapGetters([
      'termDate',
      'routeName',
      'routeQuery',
      'challenge',
      'user',
      'pickDate',
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
    openModalAlert(){
      this.showModalAlert = true;
    },
    closeModalAlert(){
      this.showModalAlert = false;
    },

    format(start){
      if(!start) return
      const date = start.getFullYear() + '-' + (start.getMonth()+1) + '-' + start.getDate()
      return date
    },

    toggleDatePicker(){

      // this.$router.push({query:{
      //   item:this.name,
      //   pse:true
      // }})

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
      this.closeModalAlert()
      // this.isReset = !this.isReset
      this.$store.dispatch('RESET_CHALLENGE_START_DATE', {
        user:this.user,
        name:this.name,
        flag:false
      })

      // this.isReset = false
    },

    setChallengeDate(date) {
      this.$store.dispatch('setTermDate',this.pickDate)

      // チャレンジステイタスを書き込む
      this.$store.dispatch('SET_CHALLENGE_STATUS', {
        user:this.user,
        name:this.name,
        date:this.pickDate,
        flag:true
      })
      this.$store.dispatch('SET_30_DATE', {
        user:this.user,
        name:this.name,
        date:this.pickDate
      })
      // this.isReset = !this.isReset

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

      const user = await this.$firebaseAuthCheck()

      // console.log('★startDateあるか', this.startDate)
      await Promise.all([
        // ログインデータ保持ならGET_CREDENTIALをスキップ
        this.user
          ? Promise.resolve()
          : this.$store.dispatch('GET_CREDENTIAL',{
            user: this.user || user || null,
            name: this.name
          }),
        // スタート日保持ならGET_CHALLENGE_STATUSをスキップ
        // this.isSetting
        //   ? Promise.resolve()
        //   : this.$store.dispatch('GET_CHALLENGE_STATUS',{
        //     user: this.user || user || null,
        //     name: this.name
        //   }),
        // this.startDate
        //   ? Promise.resolve()
        //   : this.$store.dispatch('GET_CHALLENGE_STATUS',{
        //     user: this.user || user || null,
        //     name: this.name
        //   }),

        this.$store.dispatch('GET_CHALLENGE_STATUS',{
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

      // console.log('設定済みか',this.name,this.isSetting)
      // console.log('+++++++++'+this.name+'/'+this.startDate)
      // console.log('設定済みか',this.name,this.isSetting)
      if(this.isSetting){
        // console.log('設定されている場合とおる')
        this.$store.dispatch('setTermDate',this.startDate)
      }else{
        this.$store.commit('setTermDate', 0)
      }

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
.date-container{
  display:flex;
  .date-sup{
    color:$txtSecondary;
  }
}
.str-pseudo{
  position: aboslute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:#fff;
}
.start-date-sup{
  color:$txtSecondary;
}
.start-date-btn{
  width:80%;
  border:1px solid $txtPrimary;
  border-radius: 4px;
  padding:0 20px;
  position: relative;
  height: 32px;
  .icon-calendar{
    position: absolute;
    right:5px;
    top:3px;
  }
  .start-date{
    color:$txtPrimary;
    font-weight: bold;
    font-size:20px;
  }
  .start-date-placeholder{
    color:$txtSecondary;
  }
}
.start-date-set{
  color:$txtPrimary;
  font-weight:bold;
  font-size:25px;
}

.icon-calendar{
  width:20px;
  height:21px;
  display:block;
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
  justify-content: space-between;
  margin-top: 16px;
  .card-challenge-calendar-item{
    width:(100%/7);
    margin-left:1px;
    .card-challenge-calendar-item-inr{
      border-top:3px solid #BDCDD1;
      .day{
        font-size:29px;
        font-weight: bold;
        color:$txtPrimary;
        line-height: 1;
        padding:3px 0;
      }
      .min{
        border-top:1px dotted #BDCDD1;
        color:#89A6AC;
        font-size:16px;
        span{
          font-size:12px;
        }
      }
      &.is-today{
        border-top:3px solid $txtPrimary;
      }
      &.is-checked{
        border-top:3px solid $primary;
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

.circle-container{
  width:118px;
  margin:0 auto;
}
.circle-day-sup{
  fill:$txtPrimary;
  font-size:20px;
}
.circle-day{
  fill:$txtPrimary;
  font-size:70px;
}
.circle{
  fill:#fff;
  stroke:$txtPrimary;
  transform-origin:50% 50%;
  transform:rotate(-90deg);
}
.circle.circle-anime{
  fill:#fff;
  stroke: $primary;
  stroke-miterlimit: 10;
  stroke-width: 5px;
  stroke-dasharray: 480;
  stroke-dashoffset: 480;
}

@keyframes d1{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 464; }
}
@keyframes d2{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 448; }
}
@keyframes d3{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 432; }
}
@keyframes d4{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 416; }
}
@keyframes d5{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 400; }
}
@keyframes d6{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 384; }
}
@keyframes d7{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 368; }
}
@keyframes d8{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 352; }
}
@keyframes d9{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 336; }
}
@keyframes d10{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 320; }
}
@keyframes d11{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 304; }
}
@keyframes d12{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 288; }
}
@keyframes d13{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 272; }
}
@keyframes d14{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 256; }
}
@keyframes d15{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 240; }
}
@keyframes d16{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 224; }
}
@keyframes d17{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 208; }
}
@keyframes d18{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 192; }
}
@keyframes d19{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 176; }
}
@keyframes d20{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 160; }
}
@keyframes d21{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 144; }
}
@keyframes d22{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 128; }
}
@keyframes d23{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 112; }
}
@keyframes d24{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 96; }
}
@keyframes d25{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 80; }
}
@keyframes d26{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 64; }
}
@keyframes d27{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 48; }
}
@keyframes d28{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 32; }
}
@keyframes d29{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 16; }
}
@keyframes d30{
  0%{ stroke-dashoffset: 480; }
  100% { stroke-dashoffset: 0; }
}
.d1{ animation: d1 1s ease-in forwards; }
.d2{ animation: d2 1s ease-in forwards; }
.d3{ animation: d3 1s ease-in forwards; }
.d4{ animation: d4 1s ease-in forwards; }
.d5{ animation: d5 1s ease-in forwards; }
.d6{ animation: d6 1s ease-in forwards; }
.d7{ animation: d7 1s ease-in forwards; }
.d8{ animation: d8 1s ease-in forwards; }
.d9{ animation: d9 1s ease-in forwards; }
.d10{ animation: d10 1s ease-in forwards; }
.d11{ animation: d11 1s ease-in forwards; }
.d12{ animation: d12 1s ease-in forwards; }
.d13{ animation: d13 1s ease-in forwards; }
.d14{ animation: d14 1s ease-in forwards; }
.d15{ animation: d15 1s ease-in forwards; }
.d16{ animation: d16 1s ease-in forwards; }
.d17{ animation: d17 1s ease-in forwards; }
.d18{ animation: d18 1s ease-in forwards; }
.d19{ animation: d19 1s ease-in forwards; }
.d20{ animation: d20 1s ease-in forwards; }
.d21{ animation: d21 1s ease-in forwards; }
.d22{ animation: d22 1s ease-in forwards; }
.d23{ animation: d23 1s ease-in forwards; }
.d24{ animation: d24 1s ease-in forwards; }
.d25{ animation: d25 1s ease-in forwards; }
.d26{ animation: d26 1s ease-in forwards; }
.d27{ animation: d27 1s ease-in forwards; }
.d28{ animation: d28 1s ease-in forwards; }
.d29{ animation: d29 1s ease-in forwards; }
.d30{ animation: d30 1s ease-in forwards; }



</style>
