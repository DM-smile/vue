import { defineStore } from 'pinia'
import { useBaseItems } from './baseItems'
export const useAppointmentsStore = defineStore('appointments', () => {
   const initialList = []
   return {
      ...useBaseItems(initialList),
   }
})
