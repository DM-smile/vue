<template>
   <div>
      <main-list
         title="Список подарунків"
         :list="getItems"
         add-button-title="Додати подарунок"
         input-title="Назва подарунку"
         @delete="onDelete"
         @addItem="addItem"
      />
   </div>
</template>

<script setup>
import MainList from '@/components/MainList.vue'
import { useGiftsStore } from '@/stores/gifts'
import { storeToRefs } from 'pinia'
const giftsStore = useGiftsStore()
const { getItems } = storeToRefs(giftsStore)
const onDelete = (itemId) => {
   giftsStore.deleteItem(itemId)
}
const addItem = (data) => giftsStore.addNewItem({ name: data })
</script>

<style lang="scss" scoped></style>
