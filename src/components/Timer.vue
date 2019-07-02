<template>
  <div class="timer">

    <div class="ctrl">
      <div class="progressCircle">
        <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="70" class="base" />
        <circle cx="50" cy="50" r="70" :class="['circle', 'pie',{'is-comp':timerComplete}]" :style="styles" />
        <text v-if="timerComplete" class="circle-day-comp" x="50%" y="50%" text-anchor="middle" dominant-baseline="central">
          Complete!!!
        </text>
        <text v-if="!timerComplete" class="circle-day-sup" x="50%" y="20%" text-anchor="middle" dominant-baseline="central">
          day
        </text>
        <text v-if="!timerComplete" class="circle-day" x="50%" y="60%" text-anchor="middle" dominant-baseline="central">
          {{day}}
        </text>
        </svg>
      </div>
    </div>

    <div class="time">
      {{ formatTime }}
    </div>
    <div v-if="!timerComplete">
      <v-btn class="btn-start" round color="primary" v-on:click="start" v-if="!timerOn">START</v-btn>
      <v-btn class="btn-cancel" round outline color="primary" v-on:click="reset" v-if="timerOn">CANCEL</v-btn>
    </div>
    <div v-if="timerComplete">
      <Spark />
    </div>
  </div>
</template>

<script>
import Spark from '@/components/Spark'

export default {
  name: 'Timer',
  components: {
    Spark
  },
  data() {
    return {
      pieAnime:0,
      min: 0,
      sec: 0,
      timerComplete: false,
      timerOn: false,
      timerObj: null,
    }
  },
  props: {
    time: String,
    day: Number,
  },
  mounted(){
    this.init()
  },
  methods: {

    init(){
      if(this.time === "REST") return
      this.min = Math.floor(this.time / 60);
      this.sec = this.time % 60;
    },

    count(){

      if (this.sec <= 0 && this.min >= 1) {
        this.min --
        this.sec = 59
      }else {
        this.sec --
        if(this.sec == 0){
          this.complete()
        }
      }

      // pie用
      this.pieAnime = this.time * 2

    },

    start(){
      let self = this
      this.timerObj = setInterval(()=>{self.count()}, 1000)
      this.timerOn = true
    },

    reset(){
      clearInterval(this.timerObj)
      this.timerOn = false
      this.init()
    },

    stop(){
      clearInterval(this.timerObj)
      this.timerOn = false
    },

    complete(){
      this.timerComplete = true
      clearInterval(this.timerObj)
      this.$emit('timerComplete')
    }
  },
  computed: {
    styles(){
      if(!this.timerOn) return
      return{
        'animation':'pie '+ this.pieAnime +'s linear'
      }
    },
    formatTime(){

      if(this.time.toString() === "REST") {
        this.complete()
        return this.time.toString()
      }

      let timeStrings = [
        this.min.toString(),
        this.sec.toString()
      ].map((str)=> {
        if (str.length < 2) {
          return "0" + str
        } else {
          return str
        }
      })
      return timeStrings[0] + ":" + timeStrings[1]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../static/styles/set.scss";
.time{
  font-size:70px;
  color:$txtPrimary;
}
</style>
<style lang="scss">
@import "../static/styles/set.scss";
.ctrl{
  margin: 0 auto;
  width: 100px;
  text-align: center;
}

@keyframes pie {
  50%,100% { stroke-dasharray: 439,439,0,0;}
}

.progressCircle{
  height: 0;
  width: 100px;
  display: block;
  padding-bottom: 100px;
  position: relative;
  margin-bottom:10px;
  svg {
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: visible;
  }
  // stroke-dasharray(破線の間隔の値)は、円周の長さを設定する
  // 円周の長さ=直径 x 3.14
  .circle {
    fill: none;
    stroke-width: 5;
    stroke-dasharray: 0,439;
    stroke: $primary;
    transform-origin:50% 50%;
		transform: rotate(-90deg);
  }
  .circle-day{
    fill:$txtPrimary;
    font-size:60px;
  }
  .circle-day-sup{
    fill:$txtPrimary;
    font-size:18px;
  }
  .circle-day-comp{
    fill:$secondary;
    font-size:16px;
  }
  .pie {
    stroke: $primary;
    &.is-comp{
      stroke: $secondary;
      stroke-dasharray: 439,439;
    }
  }
  .base{
    fill:none;
    stroke:#ccc;
    stroke-width: 3;
  }
}
.btn-cancel,
.btn-start{
  width:90%;
  margin:0 auto 16px;
}
</style>
