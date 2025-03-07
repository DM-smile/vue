import ContactsView from '@/views/ContactsView.vue'
import HomeView from '@/views/HomeView.vue'

export default [
   {
      path: '/',
      name: 'home',
      component: HomeView,
   },
   {
      path: '/contscts',
      name: 'contacts',
      component: ContactsView,
   },
]
