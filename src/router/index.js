import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
   {
    path: '/block6',
    name: 'block6',
    component: () => import('@/views/Block6.vue')
  },
    {
    path: '/block7',
    name: 'block7',
    component: () => import('@/views/Block7.vue')
  },
     {
    path: '/block8',
    name: 'block8',
    component: () => import('@/views/Block8.vue')
  },
      {
    path: '/block8v2',
    name: 'block8v2',
    component: () => import('@/views/Block8v2.vue')
  },
    {
    path: '/block9',
    name: 'block9',
    component: () => import('@/views/Block9.vue')
  },
     {
    path: '/block10',
    name: 'block10',
    component: () => import('@/views/Block10.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
