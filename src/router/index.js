import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from '../views/home_page/index.vue'; // 首页
import Mycourse from '../views/my_course/index.vue'; // 我的课程
import Shoppingcart from '../views/shopping_cart/index.vue'; // 购物车
import Personalcenter from '../views/personal_center/index.vue'; // 个人中心
import Login from '../views/personal_center/login/index.vue'; // 登录
import Register from '../views/personal_center/register/index.vue'; // 注册
import Setup from '../views/personal_center/set_up/index.vue'; // 注册
import Personalinformation from '../views/personal_center/personal_information/index.vue'; // 个人信息
import Changepassword from '../views/personal_center/changepassword/index.vue'; // 修改密码
import hooks from './hooks';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home_page',
    component: Homepage,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/my_course',
    name: 'my_course',
    component: Mycourse,
  },
  {
    path: '/shopping_cart',
    name: 'shopping_cart',
    component: Shoppingcart,
  },
  {
    path: '/personal_center',
    name: 'personal_center',
    component: Personalcenter,
    children: [
      // 登录
      {
        path: '/personal_center/login',
        name: 'login',
        component: Login,
      },
      // 注册
      {
        path: '/personal_center/register',
        name: 'register',
        component: Register,
      },
      // 设置
      {
        path: '/personal_center/setup',
        name: 'setup',
        component: Setup,
      },
      // 个人信息
      {
        path: '/personal_center/personalinformation',
        name: 'personalinformation',
        component: Personalinformation,
      },
      // 修改密码
      {
        path: '/personal_center/changepassword',
        name: 'changepassword',
        component: Changepassword,
      },
    ],
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
