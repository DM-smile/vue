import ContactsView from '@/views/ContactsView.vue'
import HomeView from '@/views/HomeView.vue'
import EditPage from '@/views/products/EditPage.vue'
import FilterPage from '@/views/products/FilterPage.vue'
import ProductsView from '@/views/products/ProductsView.vue'
import ShoppingRules from '@/views/ShoppingRules.vue'
import SuppliersView from '@/views/SuppliersView.vue'

export const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
   },
   {
      path: '/products',
      name: 'products',
      component: ProductsView,
      children: [
         {
            path: 'selector',
            name: 'selector',
            component: FilterPage,
         },
         {
            path: 'editor',
            name: 'editor',
            component: EditPage,
         },
      ],
   },
   {
      path: '/suppliers',
      name: 'suppliers',
      component: SuppliersView,
   },
   {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
   },
   {
      path: '/shopping-rules',
      name: 'rules',
      component: ShoppingRules,
   },
]
