<template>
    <div class="changepassword login_register">
        <div class="big_top">
            <div><img @click="out" :src="checkout" alt=""></div>
            <div style="margin: 0 auto;font-size:3vh;">修改密码</div>
        </div>
        <div class="login_register_box">
            <input v-model="oldinputpassword" type="password" placeholder="旧密码">
            <input v-model="newinputpassword" type="password" placeholder="新密码">
            <input v-model="againinputpassword" type="password" placeholder="确认密码">
            <button @click="change">修 改</button>
        </div>
    </div>
</template>
<script>
import {
  changepassword,
} from '../../../api/api';

export default {
  data() {
    return {
      // eslint-disable-next-line global-require
      checkout: require('../../../icon/checkout.png'),
      oldinputpassword: '',
      newinputpassword: '',
      againinputpassword: '',
      usermsg: '',
    };
  },
  mounted() {
    this.receive();
  },
  methods: {
    receive() {
      this.usermsg = JSON.parse(localStorage.getItem('usermsg'));
    },
    //   返回
    out() {
      window.history.go(-1);
    },
    // 修改密码
    // eslint-disable-next-line consistent-return
    async change() {
      if (this.newinputpassword === '') {
        alert('新密码不能为空');
      } else if (this.againinputpassword === '') {
        alert('请确认密码');
      } else if (this.oldinputpassword === '') {
        alert('旧密码不能为空');
      } else if (this.oldinputpassword === this.newinputpassword) {
        alert('新密码不能与旧密码相同');
      } else if (this.newinputpassword !== this.againinputpassword) {
        alert('两次新密码不一致');
      } else {
        const obj = {
          _id: this.usermsg.id,
          oldpassword: this.oldinputpassword,
          newpassword: this.newinputpassword,
        };
        const { data } = await changepassword(obj);
        if (data.code === 200) {
          alert('修改成功');
          this.$router.push({ path: '/personal_center/setup' });
        } else if (data.code === 201) {
          alert('旧密码错误');
        }
      }
    },
  },
};
</script>
<style lang="less" scoped>

</style>
