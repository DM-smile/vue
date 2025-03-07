import { state as generalState } from '../helpers/generalStoreTemplates'
export default {
   namespaced: true,
   state: () => ({
      ...JSON.parse(JSON.stringify(generalState)),
      collectionName: 'drivers',
      filteredList: [],
   }),
   getters: {
      driversList: (state, getters, rootstate, rootGetters) => {
         return rootGetters['driversStore/getItemsList'] || []
      },
      getFilteredList: ({ filteredList }) => filteredList,
   },
   mutations: {
      driversFilter(state, { drivers, filterData }) {
         state.filteredList = drivers.filter((driver) => {
            const name = driver.name.toLowerCase().includes(filterData.name?.toLowerCase() || '')
            const min = !filterData.minExp || driver.experience >= filterData.minExp
            const max = !filterData.maxExp || driver.experience <= filterData.maxExp
            return name && min && max
         })
      },
   },
   actions: {
      driversFilter({ commit, rootGetters }, filterData) {
         const drivers = rootGetters['driversStore/getItemsList']
         commit('driversFilter', { drivers, filterData })
      },
   },
}
