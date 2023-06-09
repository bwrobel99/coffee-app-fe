import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< Updated upstream
import StartPage from '../views/StartPage.vue'
=======
>>>>>>> Stashed changes

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'startPage',
      component: () => import('../views/StartPage.vue')
    },
    {
      path: '/listing',
      name: 'listing',
      component: () => import('../views/ListingPage.vue')
<<<<<<< Updated upstream
=======
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductPage.vue')
>>>>>>> Stashed changes
    }
  ]
})

export default router
