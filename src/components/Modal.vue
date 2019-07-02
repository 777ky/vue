<template>
  <transition name="modal">
    <div class="modal-container">
      <div :class="['modal-item',{'is-active':isActive}]">
        <!-- <div class="date">
          {{challenge[index].date.getMonth()+1}}/{{challenge[index].date.getDate()}}
        </div> -->
        <div class="btn">
          <timer
            @timerComplete="timerComplete"
            :time="challenge[index].text"
            :day="challenge[index].day"
          />
        </div>

      <div v-show="complate">
      <v-btn round color="secondary" class="modal-btn-check"
        @click="$emit('checkCollection',challenge[index].day,!challenge[index].check)"
      >check</v-btn>
      </div>

        <v-btn round block outline color="info" type="button" class="modal-btn-close" @click="$emit('close')">close</v-btn>
      </div>
      <div class="modal-mask" @click="$emit('close')"></div>

    </div>
  </transition>
</template>

<script>
import { mapState,mapGetters,mapActions } from 'vuex'
import Timer from '@/components/Timer'

export default {
  name: 'Modal',
  components: {
    Timer,
  },
  props: {
    index: Number,
  },
  data(){
    return{
      complate:false,
      isActive:false,
    }
  },
  computed:{
    ...mapGetters([
      'challenge',
    ])
  },
  methods:{
    timerComplete(){
      this.complate = !this.complate
    }
  },
  mounted(){
    setTimeout(()=>this.isActive = true, 100);
  }
}
</script>

<style lang="scss" scoped>
@import "../static/styles/set.scss";
.date{
  font-size:20px;
  margin-bottom: 16px;
}
.modal-mask {
  display:flex;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: all .3s ease;
}
.modal-container{
  display:flex;
  top:0;
  left:0;
  position:fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  align-items:center;
  .modal-item{
    z-index: 10000;
    opacity:0;
    width: 0;
    padding:50px 20px;
    margin: 0px auto;
    background-color: $backgroud;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .5s ease-in-out;
    overflow:hidden;
    &.is-active{
      opacity:1;
      width: 80%;
      height:80%;
    }
  }
}
.modal-btn-check,
.modal-btn-close{
z-index:99999;
width:90%;
margin:0 auto 16px;
}

</style>
