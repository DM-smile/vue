import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import store from '@/store'
import EditView from '@/views/EditView.vue'
import ContactsView from '@/views/ContactsView.vue'
const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiredAuth: false },
   },
   {
      path: '/edit/:id?',
      name: 'edit',
      component: EditView,
      props: true,
      meta: { requiredAuth: true },
   },
   {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: { requiredAuth: false },
   },
   {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
      meta: { requiredAuth: false },
   },
]
const router = createRouter({
   history: createWebHistory(),
   routes,
})
router.beforeEach(async (to) => {
   if (to.meta?.requiredAuth) {
      let isAuthenticated = store.state.auth.user
      if (!isAuthenticated) isAuthenticated = await store.dispatch('auth/loginWithCredential')
      if (!isAuthenticated) return { name: 'login', query: { redirect: to.fullPath } }
   }
})
export default router
