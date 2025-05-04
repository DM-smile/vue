import { defineStore } from 'pinia'
import { useBaseItems } from './baseItems'
export const useGiftsStore = defineStore('gifts', () => {
   const initialList = [
      {
         id: 4,
         name: 'Торт',
      },
      {
         id: 5,
         name: 'Листівка',
      },
      {
         id: 6,
         name: 'Шовдарь',
      },
   ]
   return {
      ...useBaseItems(initialList),
   }
})
