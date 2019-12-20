<template>
    <div class="big_top">
        <div><img @click="out" :src="checkout" alt=""></div>
        <div style="margin: 0 auto;font-size:3vh;">{{text}}</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      text: '',
      // eslint-disable-next-line global-require
      checkout: require('../icon/checkout.png'),
    };
  },
  methods: {
    //   返回
    out() {
      window.history.go(-1);
    },
  },
};
</script>
