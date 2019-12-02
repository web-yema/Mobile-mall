<template>
  <div class="personal_center">
    <div class="topHeader">
      <div class="chunk">
        <div class="headFace"></div>
      </div>
      <div class="big_tong">
        <div class="botss" @click="zhanghu">账户 <img :src="righti"/></div>
        <div>已购 <img :src="righti"/></div>
      </div>
      <div class="big_tong">
        <div class="botss">我的社群 <img :src="righti"/></div>
        <div>我的每日一课 <img :src="righti"/></div>
      </div>
      <div class="big_tong">
        <div class="botss">礼券 <img :src="righti"/></div>
        <div class="botss">分享有奖 <img :src="righti"/></div>
        <div>邀请好友 <img :src="righti"/></div>
      </div>
      <div class="big_tong">
        <div class="botss">帮助与反馈 <img :src="righti"/></div>
        <div style="height: 11vh">设置 <img :src="righti"/></div>
      </div>
    </div>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      righti: '/img/right.78a915da.svg',
      transitionName: '',
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = 'slide-right';
      }
    },
  },
  mounted() {

  },
  methods: {
    zhanghu() {
      this.$router.push({ path: '/personal_center/login' });
    },
  },
};
</script>
<style lang="less">
.personal_center{
  height: 22vh;
  background-attachment: fixed;
  background-image: url('http://img5.imgtn.bdimg.com/it/u=366416667,485179466&fm=15&gp=0.jpg');
}
.topHeader{
  float: left;
  margin-top: 22vh;
  height: 90vh;
  width: 100%;
  background: #F5F5F5;
}
.chunk{
  height: 13vh;
  background: #fff;
  position: relative;
}
.headFace{
  height: 15vh;
  width: 15vh;
  border-radius: 50%;
  background-color: rgb(127, 255, 212);
  position: absolute;
  top: -7.5vh;
  left: 20px;
}
.big_tong{
  background: #fff;
  margin-top: 3vh;
  div{
    padding: 3vh;
    font-size: 2.7vh;
    position: relative;
    img{
      position: absolute;
      right: 3vh;
      top: 2vh;
    }
  }
  div:hover{
    background-color: #E5E5E5;
  }
  .botss{
    border-bottom: 0.01vh solid #F4F4F4;
  }
}
.slide-right-enter-active,
.slide-right-leave-active {
  will-change: transform;
  position: absolute; //这里的定位使用relative可以解决切换时页面残影
}.slide-right-enter {
  opacity: 0;
   transform: translate3d( 0,5%, 0);
 }.slide-right-leave-active {
   opacity: 0;
   transform: translate3d( 0,20%, 0);
 }
</style>
