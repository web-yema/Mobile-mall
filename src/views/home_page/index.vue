<template>
  <div class="home">
    <!-- 轮播图 -->
    <cube-slide :data="sliders" />
  </div>
</template>

<script>
// @ is an alias to /src
import { createNamespacedHelpers } from 'vuex';
import * as Types from '../../store/mutations-types';

const { mapActions, mapState } = createNamespacedHelpers('home');

export default {
  name: 'home',
  provide() {
    return { msg: 'provide' };
  },
  created() {
    this[Types.SET_SLIDER]();
  },
  computed: {
    ...mapState(['sliders']),
  },
  data() {
    return {

    };
  },
  methods: {
    ...mapActions([Types.SET_SLIDER]),
  },
  mounted() {

  },

};
</script>
<style lang="less" scoped>
  .home{
    width: 80%;
  }
  .cube-slide-item > a > img{
        width: 281px;
  }
</style>
