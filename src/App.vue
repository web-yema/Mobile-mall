<template>
  <div id="app">
    <div class="container">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
    <div class="footer">
      <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        @change="tabChange"
      >
      </cube-tab-bar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedLabelDefault: '/', // 默认选中的导航
      tabs: [
        {
          label: '首页',
          value: '/',
          icon: 'iconfont icon-wode', // icon 样式
        },
        {
          label: '我的课程',
          icon: 'cubeic-like',
          value: '/my_course',
        },
        {
          label: '购物车',
          icon: 'cubeic-like',
          value: '/shopping_cart',
        },
        {
          label: '个人中心',
          icon: 'iconfont icon-wode',
          value: '/personal_center',
        },
      ],
    };
  },
  watch: {
    $route: {
      // 如果有立即执行，需要写成对象形式
      // eslint-disable-next-line no-unused-vars
      handler(to, from) {
        this.selectedLabelDefault = to.path;
      },
      immediate: true, // 立即执行
    },
  },
  methods: {
    // 切换路由
    tabChange(label) {
      this.$router.push(label);
    },
  },
};
</script>
<style lang="less">
#app,
html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
@media screen and (min-width:500px ) {
  body{
    margin: 0 auto;
    width: 500px;
    position: relative;
  }
  .footer{
    width: 500px !important;
  }
}
.container {
  overflow-y: auto;
  flex: 1;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  height: 9vh;
  border-top: 0.01vh solid #e3e3e3;
}
.cube-tab {
  i {
    font-size: 5vh;
  }
  font-size: 2vh;
}
</style>
