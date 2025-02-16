import { createStore } from 'vuex';
import { productsList } from "../constants/productData.js";

export default createStore({
   state: {
      productsList: productsList,
      cartList: [],
      dollarRate: 42,
      grnRate: 1
   },
   getters: {
      productsList: (state) => state.productsList,
      cartList: (state) => state.cartList,
      dollarRate: (state) => state.dollarRate,
      grnRate: (state) => state.grnRate,
      cartTotal: (state) => {
         return state.cartList.reduce((total, product) => total + product.price, 0);
      },

   },
   mutations: {
      addToCart(state, id) {
         const product = state.productsList.find(item => item.id === id)
         if (product) state.cartList = [...state.cartList, product]
      },
      removeFromCart(state, id) {
         const index = state.cartList.findIndex(item => item.id === id)
         if (index !== -1) {
            state.cartList.splice(index, 1)
         }
      },
      cleanCart(state) {
         state.cartList = []
      },
   },
   actions: {
      addToCart({ commit }, id) {
         commit('addToCart', id)
      },
      removeFromCart({ commit }, id) {
         commit('removeFromCart', id)
      },
      cleanCart({ commit }) {
         commit('cleanCart')
      },
   }
})
