import { createStore } from 'vuex'
import getModuleSettingsObject from './helpers/GetModuleSettingsObject'

export default createStore({
   namespaced: true,
   state() {
      return {}
   },
   modules: {
      drivers: getModuleSettingsObject('drivers'),
      buses: getModuleSettingsObject('buses'),
      appointments: getModuleSettingsObject('appointments'),
   },
})
