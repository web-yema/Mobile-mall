import Vue from 'vue';
import VueRouter from 'vue-router';
import Home_page from '../views/home_page/index.vue';
import My_course from '../views/my_course/index.vue';
import Shopping_cart from '../views/shopping_cart/index.vue';
import Personal_center from '../views/personal_center/index.vue';
import Login from '../views/personal_center/login/index.vue';
import hooks from './hooks';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home_page',
    component: Home_page,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/my_course',
    name: 'my_course',
    component: My_course,
  },
  {
    path: '/shopping_cart',
    name: 'shopping_cart',
    component: Shopping_cart,
  },
  {
    path: '/personal_center',
    name: 'personal_center',
    component: Personal_center,
    children: [
      {
        path: '/personal_center/login',
        name: 'login',
        component: Login,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
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
