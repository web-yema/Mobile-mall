<template>
  <div>
    <button @click="fn1">
      孙子调用爷爷的input事件99999
    </button>
    这是孙子组件
    {{ $attrs }}
    <button @click="$listeners.c">
      孙子组件调用fn
    </button>
  </div>
</template>

<script>
export default {
  name: 'granSon',
  inheritAttrs: false, // 不显示继承的attr

  mounted() {},
  props: {},
  methods: {
    fn1() {
      this.$parent.$emit('input', 700);
    },
  },
};
</script>

<style>
</style>
