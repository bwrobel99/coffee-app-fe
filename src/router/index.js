import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'startPage',
      component: () => import('../views/StartPage.vue')
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('../views/Favorite.vue')
    },
    {
      path: '/listing',
      name: 'listing',
      component: () => import('../views/ListingPage.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductPage.vue')
    }
  ]
})

export default router
