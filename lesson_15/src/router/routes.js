import AppointmentsEdit from '@/views/Appointments/AppointmentsEdit.vue'
import AppointmentsView from '@/views/Appointments/AppointmentsView.vue'
import BusEdit from '@/views/buses/BusEdit.vue'
import BusesView from '@/views/buses/BusesView.vue'
import ContactsView from '@/views/ContactsView.vue'
import DriverEdit from '@/views/drivers/DriverEdit.vue'
import DriversView from '@/views/drivers/DriversView.vue'
import HomeView from '@/views/HomeView.vue'

export const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
   },
   {
      path: '/drivers',
      name: 'drivers',
      component: DriversView,
   },
   {
      path: '/drivers/edit/:driverId?',
      name: 'driverEdit',
      component: DriverEdit,
      props: true,
   },
   {
      path: '/buses',
      name: 'buses',
      component: BusesView,
   },
   {
      path: '/buses/edit/:busId?',
      name: 'busEdit',
      component: BusEdit,
      props: true,
   },
   {
      path: '/appointments',
      name: 'appointments',
      component: AppointmentsView,
   },
   {
      path: '/appointments/edit',
      name: 'appointmentEdit',
      component: AppointmentsEdit,
   },
   {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
   },
]
