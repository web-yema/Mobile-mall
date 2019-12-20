<template>
    <div class="login_register">
        <Topback ref="backson"></Topback>
        <div class="login_register_box">
            <input v-model="inputusername" type="text" placeholder="请输入账号">
            <input v-model="inputpassword" type="password" placeholder="请输入密码">
            <button @click="login">登 录</button>
            <p @click="register">免费注册</p>
        </div>
    </div>
</template>
<script>
import {
  Login,
} from '../../../api/api';

export default {
  data() {
    return {
      inputusername: '',
      inputpassword: '',
    };
  },
  mounted() {
    this.topback();
  },
  methods: {
    // 头部组件
    topback() {
      this.$refs.backson.text = '登 录';
    },
    register() {
      this.$router.push({ path: '/personal_center/register' });
    },
    async login() {
      const obj = {
        username: this.inputusername,
        password: this.inputpassword,
      };
      const Logincs = await Login(obj);
      if (Logincs.data.code === 200) {
        this.$router.push({ path: '/personal_center' });
        localStorage.setItem('users', JSON.stringify(Logincs.data.data.token));
      } else if (Logincs.data.code === 201) {
        alert('密码不正确');
      } else if (Logincs.data.code === 202) {
        alert('用户名或密码不能为空!');
      } else if (Logincs.data.code === 203) {
        alert('该用户未注册!');
      }
    },
  },
};
</script>
<style lang="less" scoped>

</style>
