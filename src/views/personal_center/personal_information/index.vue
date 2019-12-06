<template>
    <div class="personal_information login_register">
        <div class="big_top">
            <div><img @click="out" :src="checkout" alt=""></div>
            <div style="margin: 0 auto;font-size:3vh;">个人信息</div>
        </div>
        <div class="setupbody">
          <div class="chunk getbtm">
            <div class="headFace">
              <img :src="this.headportrait" alt="">
            </div>
             <!-- eslint-disable-next-line max-len -->
            <span style="line-height:15vh;color:#2e2e2e" class="grshezhi" @click="changeheadimg">头像</span>
          </div>
            <div class="big_tong">
              <!-- eslint-disable-next-line max-len -->
                <div class="botss">昵称 <span class="grshezhi">{{this.username}}</span></div>
                <div class="botss">性别 <span class="grshezhi">未设置</span></div>
                <div>生日 <span class="grshezhi">未设置</span></div>
            </div>
            <div class="big_tong">
                <div class="botss">学历 <span class="grshezhi">未设置</span></div>
            </div>
        </div>
        <!-- 上传头像 -->
        <div style="display:none" :class="{'item_bock head_p':isChoose}">
          <div class="setting_right" @click.stop="uploadHeadImg">
            <div class="caption">更改头像</div>
          </div>
          <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
        </div>
    </div>
</template>
<script>
import {
  headportrait, // 修改用户头像
} from '../../../api/api';

export default {
  data() {
    return {
      isChoose: false, // 隐藏修改按钮
      // eslint-disable-next-line global-require
      checkout: require('../../../icon/checkout.png'),
      username: '', // 用户名
      headportrait: '', // 用户头像
      usermsg: '', // 用户信息
      headid: '', // 用户id
      righti: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAdklEQVQ4T73T0Q2AIAwE0GMDV+oGjuYIjuAGx2imif4Y4I6E2O/m0R5pwaIqixw0IZI7gC0iTveh7kQkE6kuNlxtBpMZuZiEMiMHsyAHs6EHuwAcEVG/v/k/pHKyJlJIrikhB5GQiwyhGaQLLT1a9+rfPhm2C95hx0QTMK+oagAAAABJRU5ErkJggg==',
    };
  },
  mounted() {
    this.receive();
    document.addEventListener('click', this.handleDocumentClick);
    document.addEventListener('touchstart', this.handleDocumentClick);
  },
  methods: {
    out() {
      window.history.go(-1);
    },
    receive() {
      this.usermsg = JSON.parse(localStorage.getItem('usermsg'));
      this.headportrait = this.usermsg.avatar;
      this.username = this.usermsg.name;
      this.headid = this.usermsg.id;
    },
    // 修改头像
    changeheadimg() {
      this.isChoose = !this.isChoose;
    },
    // 打开图片上传
    uploadHeadImg() {
      this.$el.querySelector('.hiddenInput').click();
    },
    // 将头像显示
    async handleFile(e) {
      const asd = await headportrait({ id: this.headid });
    },
    handleDocumentClick(e) {
      // 点击颜色其它区域隐藏
      if (!this.$el.contains(e.target)) {
        this.isChoose = false;
      }
    },
  },
};
</script>
<style lang="less" scoped>

</style>
