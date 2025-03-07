import { createRouter, createWebHistory } from 'vue-router'
import drivers from './routes/driversRoute'
import buses from './routes/busesRoute'
import appointments from './routes/appointmentsRoute'
import common from './routes/commonRoute'

export default createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [...common, ...drivers, ...buses, ...appointments],
})
