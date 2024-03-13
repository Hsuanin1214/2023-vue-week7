import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '前台',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/Front/IndexView.vue')
      },
      {
        path: 'about',
        component: () => import('../views/Front/AboutView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/Front/FrontProductsView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/Front/FrontCartView.vue')
      },
      {
        path: 'product',
        component: () => import('../views/Front/FrontProductView.vue')
      },
      {
        path: 'news',
        component: () => import('../views/Front/NewsView.vue')
      },
      {
        path: 'questions',
        component: () => import('../views/Front/QusetionView.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Front/FrontOrderView.vue')
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
