<template>
    <div class="login_register">
        <Topback ref="backson"></Topback>
        <div class="login_register_box">
            <input v-model="inputusername" type="text" placeholder="请输入账号">
            <input v-model="inputpassword" type="password" placeholder="请输入密码">
            <input v-model="ainputpassword" type="password" placeholder="确认密码">
            <button @click="register">注册</button>
        </div>
    </div>
</template>
<script>
import {
  Register,
// eslint-disable-next-line import/extensions
} from '../../../api/api.js';

export default {
  data() {
    return {
      // eslint-disable-next-line global-require
      checkout: require('../../../icon/checkout.png'),
      inputusername: '', // 输入用户名
      inputpassword: '', // 输入密码
      ainputpassword: '', // 输入确认密码
    };
  },
  mounted() {
    this.topback();
  },
  methods: {
    // 头部组件
    topback() {
      this.$refs.backson.text = '注 册';
    },
    async register() {
      const obj = {
        username: this.inputusername,
        password: this.inputpassword,
      };
      const { data } = await Register(obj);
      console.log(data);
      if (data.code === 200) {
        this.$router.push({ path: '/personal_center/login' });
        return false;
      } if (data.code === 202) {
        console.log(data);
      }
    },
  },
};
</script>
<style lang="less" scoped>

</style>
