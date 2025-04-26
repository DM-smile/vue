import { createStore } from 'vuex'
import getModuleSettingsObject from './helpers/GetModuleSettingsObject'
import auth from './modules/auth'
import users from './modules/users'

export default createStore({
   state: {
      counter: 0,
   },
   getters: {
      getCounter: ({ counter }) => counter,
   },
   mutations: {
      setCounter(state, data) {
         if (data) {
            state.counter = 0
         } else state.counter++
      },
   },
   actions: {
      setCounter({ commit }, data) {
         commit('setCounter', data)
      },
   },
   modules: {
      auth,
      users,
      productsList: getModuleSettingsObject('productsList'),
   },
})
