import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'FrontView',
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
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/Dashboard/DashboardView.vue'),
    children: [
      {
        path: 'blog',
        component: () => import('../views/Dashboard/BlogView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/Dashboard/CartView.vue')
      },
      {
        path: 'cupon',
        component: () => import('../views/Dashboard/CuponView.vue')
      },
      {
        path: 'order',
        component: () => import('../views/Dashboard/OrderView.vue')
      },
      {
        path: 'post',
        component: () => import('../views/Dashboard/PostView.vue')
      },
      {
        path: 'product',
        component: () => import('../views/Dashboard/ProductView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
