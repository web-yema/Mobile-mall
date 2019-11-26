import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import hooks from './hooks';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});
// hooks里面路由的钩子拿出来依次执行 this需要指向router
Object.values(hooks).forEach((hook) => {
  router.beforeEach(hook.bind(router));
});

export default router;
