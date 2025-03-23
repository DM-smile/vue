import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'

const router = createRouter({
   history: createWebHistory(),
   mode: 'history',
   routes,
})

router.beforeEach((to) => {
   // const isAuthenticated =
   // if (to.meta.requiresAuth && !isAuthenticated) {
   //    return {
   //       name: 'login',
   //       query: { redirect: to.fullPath },
   //    }
   // }
})

export default router
