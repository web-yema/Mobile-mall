<template>
    <div class="personal_information login_register">
        <div class="big_top">
            <div><img @click="out" :src="checkout" alt=""></div>
            <div style="margin: 0 auto;font-size:3vh;">个人信息</div>
        </div>
        <div class="setupbody">
          <div class="chunk">

          </div>
            <div class="big_tong">
                <div class="botss">昵称 <span class="grshezhi">未设置</span></div>
                <div class="botss">性别 <span class="grshezhi">未设置</span></div>
                <div>生日 <span class="grshezhi">未设置</span></div>
            </div>
            <div class="big_tong">
                <div class="botss">学历 <span class="grshezhi">未设置</span></div>
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
    };
  },
  mounted() {

  },
  methods: {
    out() {
      window.history.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>

</style>
