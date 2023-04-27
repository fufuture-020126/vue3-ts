import { createRouter, createWebHistory } from 'vue-router';
import index from "@/layout/index.vue";
import { getUserStore } from '@/store';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: index,
    redirect: '/home',
    meta: {
      title: '首页',
      requiresAuth: true,
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '首页'
        },
        component: () => import ('@/pages/home/home.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import ('@/pages/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import ('@/pages/register/register.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 切换路由始终回滚顶部
  scrollBehavior(to, from, savedPosition) {
    return {top: 0};
  },
  routes: routes,
})

// 路由守卫
router.beforeEach((to, from, next)=> {
  const loginState = getUserStore();
  console.log(to.path);
  if(to.path == '/login') {
    if(loginState.getLoginState && from.path != '/register') {
      next(from.path);
    }
    else {
      next();
    }
  }
  else {
    if(!loginState.getLoginState && to.path != '/register') {
      next('/login');
    }
    else {
      next();
    }
  }
})

export default router;
