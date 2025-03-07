import BusDetails from '@/views/buses/BusDetails.vue'
import BusEdit from '@/views/buses/BusEdit.vue'
import BusesList from '@/views/buses/BusesList.vue'

export default [
   {
      path: '/buses',
      name: 'buses',
      component: BusesList,
   },
   {
      path: '/buses/edit/:id?',
      name: 'busEdit',
      component: BusEdit,
   },
   {
      path: '/buses/detail/:id',
      name: 'busDetails',
      component: BusDetails,
   },
]
