import {
   state as generalState,
   getters as generalGetters,
   mutations as generalMutations,
   actions as generalActions,
} from '../helpers/generalStoreTemplates'
export default {
   namespaced: true,
   state: () => ({
      ...JSON.parse(JSON.stringify(generalState)),
      collectionName: 'drivers',
   }),
   getters: generalGetters,
   mutations: generalMutations,
   actions: generalActions,
}
