<template>
  <div>
    <div class="head">
      <span>左</span>
      <span @click="showDrawer">右</span>
    </div>
    <!-- 抽屉 -->
    <cube-drawer
      ref="drawer"
      title="请选择"
      :data="data"
      @select="selectHandler"
    ></cube-drawer>
  </div>
</template>

<script>
export default {
  name: 'homeheader',
  data() {
    return {
      data: [[{ text: '全部商品', value: '-1' }, { text: '水果', value: '1' }]],
    };
  },
  methods: {
    showDrawer() {
      this.$refs.drawer.show();
    },
    selectHandler(val) {
      console.log(val[0]);
    },
  },
};
</script>

<style lang='less' scoped>
.head {
  display: flex;
  height: 60px;
  background: cornflowerblue;
  align-items: center;
  justify-content: space-between;
  span {
    margin: 0 10px;
  }
}
</style>
