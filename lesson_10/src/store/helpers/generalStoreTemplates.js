import CollectionManager from '../services/localStorageDB'
export const state = {
   itemsList: [],
   currentItem: null,
   collectionName: null,
}

export const getters = {
   getItemsList: ({ itemsList }) => itemsList,
   getCurrentItem: ({ currentItem }) => currentItem,
}
export const mutations = {
   setStoreItem(state, { propTitle, propValue }) {
      state[propTitle] = propValue
   },
}
export const actions = {
   loadItemsList({ commit, state }) {
      const items = CollectionManager.getItemsList(state.collectionName)
      commit('setStoreItem', { propTitle: 'itemsList', propValue: items })
   },
   loadItemById({ commit, state }, itemId) {
      const item = CollectionManager.getItemById(state.collectionName, itemId)
      commit('setStoreItem', { propTitle: 'currentItem', propValue: item })
      return item
   },
   addNewItem({ state }, itemData) {
      CollectionManager.addItem(state.collectionName, itemData)
   },
   updateItem({ state }, itemData) {
      CollectionManager.updateItem(state.collectionName, itemData)
   },
   deleteItem({ dispatch, state }, itemId) {
      CollectionManager.removeItemById(state.collectionName, itemId)
      dispatch('loadItemsList')
   },
}
