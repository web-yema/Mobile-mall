<template>
  <div class="personal_center">
    <div class="topHeader">
      <div class="chunk">
        <div class="headFace">
          <img @click="touxiang" :src="this.headportrait" alt="">
          <span>{{this.username}}</span>
        </div>
      </div>
      <div class="big_tong">
        <div class="botss" @click="zhanghu">账户 <img :src="righti"/></div>
        <div>已购 <img :src="righti"/></div>
      </div>
      <div class="big_tong">
        <div class="botss">我的社群 <img :src="righti"/></div>
        <div>我的每日一课 <img :src="righti"/></div>
      </div>
      <!-- <div class="big_tong">
        <div class="botss">礼券 <img :src="righti"/></div>
        <div class="botss">分享有奖 <img :src="righti"/></div>
        <div>邀请好友 <img :src="righti"/></div>
      </div> -->
      <div style="margin-bottom:12vh" class="big_tong">
        <div class="botss">帮助与反馈 <img :src="righti"/></div>
        <div @click="shezhi">设置 <img :src="righti"/></div>
      </div>
    </div>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import {
  getadmin, // 用户信息
} from '../../api/api';

export default {
  data() {
    return {
      righti: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAdklEQVQ4T73T0Q2AIAwE0GMDV+oGjuYIjuAGx2imif4Y4I6E2O/m0R5pwaIqixw0IZI7gC0iTveh7kQkE6kuNlxtBpMZuZiEMiMHsyAHs6EHuwAcEVG/v/k/pHKyJlJIrikhB5GQiwyhGaQLLT1a9+rfPhm2C95hx0QTMK+oagAAAABJRU5ErkJggg==',
      transitionName: '', // 跳转过渡
      // eslint-disable-next-line global-require
      imgSrc: require('../../public/image/mrtx.jpg'), // 头像链接
      users: '', // 用户token
      headportrait: '', // 用户头像
      username: '', // 用户名
      usermsg: '', // 个人信息
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
    this.yonghu();
    // this.imgSrc = require(`${this.headportrait }`);
  },
  updated() {
    this.yonghu();
  },
  methods: {
    async yonghu() {
      this.users = JSON.parse(localStorage.getItem('users'));
      const { data } = await getadmin(this.users);
      this.headportrait = data.data.avatar;
      this.username = data.data.name;
      localStorage.setItem('usermsg', JSON.stringify(data.data));
      if (this.users === null || data.data === 'success') {
        this.headportrait = this.imgSrc;
        this.username = '未登录';
      }
    },
    touxiang() {
      this.judge();
      if (this.users !== null) {
        this.$router.push({ path: '/personal_center/personalinformation' });
      }
    },
    zhanghu() {
      this.judge();
    },
    shezhi() {
      this.judge();
      if (this.users !== null) {
        this.$router.push({ path: '/personal_center/setup' });
      }
    },
    // eslint-disable-next-line consistent-return
    judge() {
      if (this.users === null) {
        this.$router.push({ path: '/personal_center/login' });
        return false;
      }
    },
  },
};
</script>
<style lang="less">
  @import url('./index.less');
</style>
