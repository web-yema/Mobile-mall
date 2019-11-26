<template>
  <div>
    {{ msg }}
    这是儿子组件显示888888
    {{ money }}
    <button @click="change">
      点击改变
    </button>
  </div>
</template>

<script>
export default {
  name: 'son',
  inject: ['msg'],
  mounted() {
    this.$bus.$emit('bus', 100);
  },
  props: {
    money: {
      type: Number,
    },
  },
  methods: {
    change() {
      this.$emit('update:money', 200);
    },
  },
};
</script>

<style>
</style>
