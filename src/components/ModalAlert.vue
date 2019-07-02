<template>
  <transition name="modal">
    <div class="modal-container">
      <div :class="['modal-item',{'is-active':isActive}]">

      <h1>{{title}}</h1>
      <div>{{message}}</div>

      <ul class="modal-btn-container">
        <li><v-btn round block color="secondary" class="modal-btn-action"
      @click="$emit('action')"
      >{{action}}</v-btn></li>
        <li><v-btn round block outline color="info" class="modal-btn-cancel" @click="$emit('close')">cancel</v-btn></li>
      </ul>

      </div>
      <div class="modal-mask" @click="$emit('close')"></div>

    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalAlert',
  props: {
    title:String,
    message:String,
    action:String
  },
  data(){
    return{
      isActive:false,
    }
  },
  computed:{
  },
  methods:{
  },
  mounted(){
    setTimeout(()=>this.isActive = true, 100);
  }
}
</script>
<style lang="scss" scoped>
@import "../static/styles/set.scss";
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
    padding:60px 20px 30px;
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

.modal-btn-container{
  margin-top: 40px;
}

</style>
