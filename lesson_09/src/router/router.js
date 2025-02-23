import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RulesPage from '@/views/RulesPage.vue'
import ShopPage from '@/views/ShopPage.vue'
import ContactsPage from '@/views/ContactsPage.vue'
import ProductsList from '@/views/ProductsList.vue'
import ProductData from '@/views/ProductData.vue'
import EditPruductPage from '@/views/EditPruductPage.vue'

export default createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         component: HomeView,
      },
      {
         path: '/rules',
         name: 'rules',
         component: RulesPage,
      },
      {
         path: '/contacts',
         name: 'contacts',
         component: ContactsPage,
      },
      {
         path: '/shop',
         name: 'shop',
         component: ShopPage,
      },
      {
         path: '/shop/:products',
         name: 'products',
         component: ProductsList,
      },
      {
         path: '/shop/:products/:itemId',
         name: 'product',
         component: ProductData,
      },
      {
         path: '/shop/:products/edit/:itemId?',
         name: 'edit',
         component: EditPruductPage,
      },
   ],
})
