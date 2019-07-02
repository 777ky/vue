<template>
  <div class="app-header" v-bind:class="{ isActive: isActive }">
    <transition name="user">
      <div class="user-container">

      <header>
        <div class="app-header-logo"><a href="/"><span>challenge30</span></a></div>

        <ul class="app-header-list">
          <li class="app-header-back"><button type="button" @click="back()"><v-icon color="primaryRev">chevron_left</v-icon><span class="app-header-btn-txt">back</span></button></li>
        </ul>
      </header>

      <div v-if="user && showUser" class="user-container-inr">
        <div class="user-icon"><img :src="user.icon" alt=""></div>
        <div class="user-info">
          <div class="user-name">{{user.name}}</div>
          <div class="user-delete">
            <v-btn icon flat  color="primaryRev" @click="deleteUser()" ><v-icon>delete_forever</v-icon></v-btn>
            <!-- <v-btn icon flat  color="#fff" @click="openModalAlert()" ><v-icon>delete_forever</v-icon></v-btn> -->
          </div>
        </div>
        <v-btn class="user-singout-btn" color="primaryRev" outline round @click="signOut">signOut</v-btn>
      </div>

      <!-- /user-container --></div>
    </transition>

    <modal-alert
      v-if="showModalAlert"
      :title="'DELETE USER'"
      :message="'アカウントを削除します'"
      :action="'DELETE'"
      @close="closeModalAlert"
      @action="deleteUser"
    />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalAlert from '@/components/ModalAlert'

export default {
  name: 'AppHeader',
  components:{
    ModalAlert
  },
  props: {
    isUser: Boolean,
    isActive: Boolean,
  },
  data(){
    return{
      showUser: this.isUser || false,
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
<style lang="scss">
@import "../static/styles/set.scss";
.app-header{
  position: relative;
  padding:16px 16px 8px;
  background-color: $primary;
  @include group;
  overflow:hidden;
}
.app-header-logo{
  display: block;
  margin:0 25%;
  @include group;
  span{
    display: block;
    width: 100%;
    height: 0;
    padding-top: 21.666666%;
    background:url(/images/logo.svg) center center no-repeat;
    background-size:cover;
    text-indent: -9999px;
  }
}

.app-header-back{
  position:absolute;
  top:0;
  left:0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color:$primaryRev;
  display:none;
  @include group;
  button{
    display:block;
    height: 100%;
    padding-right: 16px;
    position: relative;
    top:-5px;
  }
  .v-icon{
    position:relative;
    top:2px;
  }
}



.card-personal-inr{
  height:auto;
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

.user-container-inr{
  height: 100%;
  margin-bottom: 16px;
  @include group;
}

.user-info{
  display:flex;
  margin-left:50px;
  align-items: center;
  justify-content: center;
  @include group;
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

.user-singout-btn{
  width:142px;
  margin:0 auto;
  overflow:hidden;
  @include group;
}


// animationあればこちら
.isActive{

  .app-header-logo{
    margin:0 30%;
  }

  .app-header-back{
    display: block;
  }

  .user-container-inr{
    height:0;
    margin-bottom: 0;
    transform:scale(0);
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

  .user-singout-btn{
    transform:scale(0);
  }
}

</style>


