import { createStore } from 'vuex'
import { carsList } from '../constants/carsData'

export default createStore({
   state() {
      return {
         carsListAll: carsList,
         selectedCarsList: [],
         selectedFilters: {
            typeTransport: '',
            typesBody: [],
            brand: '',
            year: {
               min: null,
               max: null,
            }
         }
      }
   },
   getters: {
      carsListAll: (state) => state.carsListAll,
      selectedCarsList: (state) => state.selectedCarsList,
      typeTransportList: (state) => {
         return [...new Set(state.carsListAll.map(car => car.typeTransport))]
      },
      typeBodyList: (state) => {
         return [...new Set(state.carsListAll.map(car => car.typeBody))]
      },
      brandsList: (state) => {
         return [...new Set(state.carsListAll.map(car => car.brand))]
      },
      listByYear: (state) => state.selectedFilters.year,
      selectedFilters: (state) => state.selectedFilters
   },
   mutations: {
      setData(state, { category, val }) {
         state.selectedFilters = { ...state.selectedFilters, [category]: val }
      },
      setFilteredCars(state, filteredCars) {
         state.selectedCarsList = filteredCars

      },
      resetFilter(state) {
         state.selectedFilters = {
            typeTransport: '',
            typesBody: [],
            brand: '',
            year: {
               min: null,
               max: null,
            }
         }
      },
   },
   actions: {
      updateSelectedFilters({ commit }, { category, val }) {
         commit('setData', { category, val })
      },
      filterCars({ state, commit }) {
         let filteredCars = state.carsListAll
         // фільтр за типом транспорту
         if (state.selectedFilters.typeTransport) {
            filteredCars = filteredCars.filter(car => car.typeTransport === state.selectedFilters.typeTransport)
         }
         // фільтр за маркою
         if (state.selectedFilters.brand) {
            filteredCars = filteredCars.filter(car => car.brand === state.selectedFilters.brand)
         }
         // фільтр за типом кузова
         if (state.selectedFilters.typesBody.length) {
            filteredCars = filteredCars.filter(car => state.selectedFilters.typesBody.includes(car.typeBody))
         }
         // фільтр за роком випуску
         const year = state.selectedFilters.year
         if (year.min) {
            filteredCars = filteredCars.filter(car =>
               (car.year >= year.min)
            )
         }
         if (year.max) {
            filteredCars = filteredCars.filter(car =>
               (car.year <= year.max)
            )
         }
         commit('setFilteredCars', filteredCars)
      },
      resetFilter({ commit }) {
         commit('resetFilter')
         commit('setFilteredCars', this.state.carsListAll)
      }

   }
})