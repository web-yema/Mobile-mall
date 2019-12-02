<template>
    <div :class={login:acticss}>
        1234
    </div>
</template>
<script>
export default {
  data() {
    return {
      acticss: false,
    };
  },
  mounted() {
    this.tabactive();
  },
  methods: {
    tabactive() {
      this.acticss = true;
    },
  },
};
</script>
<style lang="less" scoped>
    .login{
        position: absolute;
        top: 0;
        left: 0;
        background: #fff;
        width: 100%;
        height: 100%;
        transition: all 1s;
    }
</style>
