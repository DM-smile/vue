import { createStore } from 'vuex'
import { productsListAll } from '../constants/shopData'

export default createStore({
   state() {
      return {
         productsListAll: productsListAll,
      }
   },
   getters: {
      productsListAll: (state) => state.productsListAll,
      getCategoryByName: (state) => (name) =>
         state.productsListAll.find((category) => category.name === name),
      getProductById: (state) => (productId) =>
         state.productsListAll
            .flatMap((category) => category.productsList)
            .find((product) => product.id === productId),
   },
   mutations: {
      updateProductData(state, productData) {
         const category = productsListAll.find((category) =>
            category.productsList.some(
               (product) => product.id === productData.id
            )
         )
         if (category) {
            const productIndex = category.productsList.findIndex(
               (product) => product.id === productData.id
            )

            if (productIndex !== -1) {
               category.productsList[productIndex] = { ...productData }
            }
         }
      },
      createProduct(state, { productData, categoryName }) {
         const category = state.productsListAll.find(
            (c) => c.name === categoryName
         )
         category.productsList.push({
            id: new Date().getTime(),
            ...productData,
         })
      },
      deleteProduct(state, { categoryName, productId }) {
         const category = state.productsListAll.find(
            (c) => c.name === categoryName
         )
         category.productsList = category.productsList.filter(
            (product) => product.id !== productId
         )
      },
   },
   actions: {
      updateProductData({ commit }, productData) {
         commit('updateProductData', productData)
      },
      createProduct({ commit }, { productData, categoryName }) {
         commit('createProduct', { productData, categoryName })
      },
      deleteProduct({ commit }, { categoryName, productId }) {
         commit('deleteProduct', { categoryName, productId })
      },
   },
})
