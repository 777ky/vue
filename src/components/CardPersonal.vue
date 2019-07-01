<template>
  <div>
  <div class="card-personal" v-bind:class="{ isActive: isActive }">
    <transition name="personal">
      <div class="card-personal-inr">
        <div class="logo"><img src="/images/logo.svg" alt=""></div>
        <div class="card-parsonal-info">
          <div v-if="user">
             <div class="user-icon"><img :src="user.icon" alt=""></div>
             <div class="user-info">
              <div class="user-name">{{user.name}}</div>
              <div class="user-delete">
                <v-btn icon flat  color="#fff" @click="deleteUser()" ><v-icon>delete_forever</v-icon></v-btn>
                <!-- <v-btn icon flat  color="#fff" @click="openModalAlert()" ><v-icon>delete_forever</v-icon></v-btn> -->
              </div>
             </div>
          </div>
        </div>
        <div class="card-personal-btn-container">
          <v-btn class="card-personal-btn" outline round block @click="signOut">signOut</v-btn>
        </div>

        <div class="card-personal-back-btn-container">
          <button type="button" class="card-personal-back-btn" @click="back()"><v-icon color="#ffffff">chevron_left</v-icon><span class="card-personal-back-btn-txt">back</span></button>
        </div>
      </div>
    </transition>
  </div>
  <modal-alert :title="'DELETE USER'" :message="'アカウントを削除します'" :action="'DELETE'" v-if="showModalAlert"
@close="closeModalAlert"
@action="deleteUser"
></modal-alert>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalAlert from '@/components/ModalAlert'

export default {
  name: 'CardPersonal',
  components:{
    ModalAlert
  },
  props: {
    isActive: Boolean,
  },
  data(){
    return {
      showModalAlert: false,
    }
  },
  computed:{
    ...mapGetters([
      'user',
      'routeQuery'
    ])
  },
  methods:{
    async signOut(){
      const signout = await this.$store.dispatch('signOut')
      this.$router.push('/signin')
    },
    deleteUser(){
      this.$router.push('/deleteaccount')

      // this.closeModalAlert()
      // this.$store.dispatch('DELETE_USER', {
      //   user:this.user
      // })

    },
    openModalAlert(){
      this.showModalAlert = true;
    },
    closeModalAlert(){
      this.showModalAlert = false;
    },
    toggleView(){
      this.isActive = !this.isActive
    },
    back(){
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../static/styles/set.scss";

.card-personal{
  grid-area: header;

  width:100%;
  box-sizing:border-box;
  padding:24px 16px 32px;
  position:relative;
  background-color:$primary;

  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.23));
  @include group;
  overflow:hidden;

  .card-personal-back-btn-container{
    position:absolute;
    top:0;
    left:0;
    display:none;
    color:#fff;
    @include group;
    .card-personal-back-btn-txt{
      position:relative;
      top:-3px;
    }
  }


  .card-personal-inr{
    height:auto;
    @include group;
  }

  .logo{
    width:168px;
    margin:0 auto;
    @include group;
  }

  .user-icon{
    margin:12px auto 6px;
    width:53px;
    height:53px;
    border-radius:50%;
    overflow:hidden;
    @include group;
    & img{
      max-width:100%;
      max-height:100%;
      @include group;
    }
  }

  .user-info{
    display: flex;
    margin-left:50px;
    @include group;
    align-items: center;
    justify-content: center;
  }

  .user-delete{
    min-width:50px;
  }

  .user-name{
    font-size:16px;
    font-weight:bold;
    color:#fff;
    @include group;
  }

  .card-personal-btn-container{
    width:142px;
    margin:0 auto;
    overflow:hidden;
    @include group;
  }
  .card-personal-btn{
    color:#fff;
    height:32px;
    @include group;
  }
}

.v-btn{
  text-transform: none !important;
}

// animationあればこちら
.card-personal.isActive{
  padding:16px;

  .card-personal-back-btn-container{
    display:block;
  }

  .logo{
    width:95px;
  }

  .user-icon{
    margin:0 auto;
    width:0;
    height:0;
    overflow:hidden;
    & img{
      max-width:0;
      max-height:0;
    }
  }

  .user-info{
    display: none;
  }
  .user-name{
    font-size:0;
  }

  .card-personal-btn-container{
    transform:scale(0);
    width:0;
    height:0;
    overflow:hidden;
  }
  .card-personal-btn{
    height:0;
    button{
      height:0;
    }
  }
}
</style>
