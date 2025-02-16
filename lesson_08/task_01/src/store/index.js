import { createStore } from 'vuex'
import { productsListData } from '../constants/productData'

export default createStore({
   state() {
      return {
         productsListAll: productsListData,
         choiseClassList: Object.keys(productsListData)[0]
      }
   },
   getters: {
      productsListAll: (state) => state.productsListAll,
      getChoiseClassList: (state) => state.choiseClassList,
   },
   mutations: {
      choiseClassList(state, val) {
         state.choiseClassList = val
      }
   },
   actions: {
      setChoiseClassList: ({ commit }, val) => {
         commit('choiseClassList', val)
      }
   }
})