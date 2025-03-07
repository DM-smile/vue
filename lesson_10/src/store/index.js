import { createStore } from 'vuex'
import commonStore from './modules/commonStore'
import appointmentsStore from './modules/appointmentsStore'
import busesStore from './modules/busesStore'
import driversStore from './modules/driversStore'
import filtersStore from './modules/filtersStore'

export default createStore({
   modules: {
      commonStore,
      appointmentsStore,
      busesStore,
      driversStore,
      filtersStore,
   },
})
