import { defineStore } from 'pinia'
import { useBaseItems } from './baseItems'
export const useFriendsStore = defineStore('friends', () => {
   const initialList = [
      {
         id: 1,
         name: 'Баба Галя',
      },
      {
         id: 2,
         name: 'Дід Петро',
      },
      {
         id: 3,
         name: 'Онука Оленка',
      },
   ]
   return {
      ...useBaseItems(initialList),
   }
})
