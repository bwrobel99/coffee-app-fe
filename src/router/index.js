import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'
import ProductPage from '../views/ProductPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'startPage',
      component: StartPage
    },
    {
      path: '/listing',
      name: 'listing',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ListingPage.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductPage
    }
  ]
})

export default router
