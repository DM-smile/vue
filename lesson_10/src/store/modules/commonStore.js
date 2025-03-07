import { driversDataTest, busesDataTest } from '@/constants/testData'

export default {
   namespaced: true,
   state: () => ({
      driversDataTest,
      busesDataTest,
   }),
   getters: {
      getDriversDataTest: ({ driversDataTest }) => driversDataTest,
      getBusesDataTest: ({ busesDataTest }) => busesDataTest,
   },
   mutations: {},
   actions: {},
}
