import { products } from '@/constants/dataBase'
import { createStore } from 'vuex'

export default createStore({
   state() {
      return {
         productsList: products,
         filteredProducts: {},
      }
   },
   getters: {
      productsList: ({ productsList }) => JSON.parse(JSON.stringify(productsList)),
      filteredProducts: ({ filteredProducts }) => JSON.parse(JSON.stringify(filteredProducts)),
   },
   mutations: {
      addProduct(state, productData) {
         state.productsList.push(productData)
      },
      filter(state, types) {
         if (types.length === 0) {
            state.filteredProducts = [...state.productsList]
         } else {
            state.filteredProducts = state.productsList.filter((product) =>
               types.includes(product.type)
            )
         }
      },
   },
   actions: {
      addProduct({ commit }, productData) {
         commit('addProduct', productData)
      },
      filter({ commit }, types) {
         commit('filter', types)
      },
   },
})
