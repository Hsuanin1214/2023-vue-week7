import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '前台',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'home',
        component: () => import('../views/HomeView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: '登入頁',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: '後台',
    component: () => import('../views/Admin/AdminView.vue'),
    children: [
      {
        path: 'blog',
        component: () => import('../views/Admin/BlogView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/Admin/CartView.vue')
      },
      {
        path: 'cupon',
        component: () => import('../views/Admin/CuponView.vue')
      },
      {
        path: 'order',
        component: () => import('../views/Admin/OrderView.vue')
      },
      {
        path: 'post',
        component: () => import('../views/Admin/PostView.vue')
      },
      {
        path: 'product',
        component: () => import('../views/Admin/ProductView.vue')
      }
    ]
  },
  {
    path: '/admin/:pathMatch(.*)*',
    redirect: { name: '登入頁' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
