import DriverDetails from '@/views/drivers/DriverDetails.vue'
import DriverEdit from '@/views/drivers/DriverEdit.vue'
import DriversList from '@/views/drivers/DriversList.vue'

export default [
   {
      path: '/drivers',
      name: 'drivers',
      component: DriversList,
   },
   {
      path: '/drivers/edit/:id?',
      name: 'driverEdit',
      component: DriverEdit,
   },
   {
      path: '/drivers/detail/:id',
      name: 'driverDetails',
      component: DriverDetails,
   },
]
