import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'startPage',
      component: StartPage
    },
    {
      path: '/favorite',
      name: 'favorite',
    },
    {
      path: '/listing',
      name: 'listing',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ListingPage.vue')
    }
  ]
})

export default router
