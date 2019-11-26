<template>
  <div>
    <button @click="changeT">更改</button>
    {{ value }}
    <div @click="changeT">点击改30000</div>
    这是son1组件
    <button @click="$listeners.c">
      子组件调用父组件的fn
    </button>
    <!-- attr 如果再往下级组件传值 需要使用v-bind -->
    <!-- $listeners 如果再往下级组件传递时间 需要使用v-on -->
    <grandSon v-bind="$attrs" v-on="$listeners"></grandSon>
    <div v-for="x in $attrs.a" :key="x">
      {{ x }}
    </div>
  </div>
</template>

<script>
import grandSon from './granSon.vue';

export default {
  inheritAttrs: false, // 不显示继承的attr
  components: {
    grandSon,
  },
  inject: ['msg'],
  mounted() {
    this.$bus.$emit('bus', 100);
  },
  props: {
    money: {
      type: Number,
    },
    value: {
      type: Number,
    },
  },
  methods: {
    change() {
      this.$emit('update:money', 200);
    },
    changeT() {
      // this.$parent.$parent.value = 1000;
      this.$emit('input', 600);
    },
  },
};
</script>

<style>
</style>
