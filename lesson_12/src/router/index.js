import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'
import store from '@/store'

const router = createRouter({
   history: createWebHistory(),
   mode: 'history',
   routes,
})

router.beforeEach((to) => {
   const isAuthenticated = store.getters['common/getLoginData']
   if (to.meta.requiresAuth && !isAuthenticated) {
      return {
         name: 'login',
         query: { redirect: to.fullPath },
      }
   }
})

export default router
