<template>
    <div class="set_up login_register">
        <div class="big_top">
            <div><img @click="out" :src="checkout" alt=""></div>
            <div style="margin: 0 auto;font-size:3vh;">设 置</div>
        </div>
        <div class="setupbody">
            <div class="big_tong">
                <div class="botss" @click="changepassword">修改密码 <img :src="righti"/></div>
            </div>
            <div class="big_tong">
                <div class="botss" @click="outlogin">退出登录 <img :src="righti"/></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      // eslint-disable-next-line global-require
      checkout: require('../../../icon/checkout.png'),
      righti: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAdklEQVQ4T73T0Q2AIAwE0GMDV+oGjuYIjuAGx2imif4Y4I6E2O/m0R5pwaIqixw0IZI7gC0iTveh7kQkE6kuNlxtBpMZuZiEMiMHsyAHs6EHuwAcEVG/v/k/pHKyJlJIrikhB5GQiwyhGaQLLT1a9+rfPhm2C95hx0QTMK+oagAAAABJRU5ErkJggg==',

    };
  },
  methods: {
    //   返回
    out() {
      window.history.go(-1);
    },
    outlogin() {
      localStorage.clear();
      this.$router.push({ path: '/personal_center' });
    },
    changepassword() {
      this.$router.push({ path: '/personal_center/changepassword' });
    },
  },
};
</script>
<style lang="less" scoped>

</style>
