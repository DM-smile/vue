import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FriendsView from '@/views/FriendsView.vue'
import GiftsView from '@/views/GiftsView.vue'
import AppointmentsView from '@/views/AppointmentsView.vue'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         component: HomeView,
      },
      {
         path: '/friends',
         name: 'friends',
         component: FriendsView,
      },
      {
         path: '/gifts',
         name: 'gifts',
         component: GiftsView,
      },
      {
         path: '/appointments',
         name: 'appointments',
         component: AppointmentsView,
      },
   ],
})

export default router
