<template>
   <div>
      <main-list
         title="Список друзів"
         :list="getItems"
         add-button-title="Додати друга"
         input-title="Ім'я друга"
         @delete="onDelete"
         @addItem="addItem"
      />
   </div>
</template>

<script setup>
import MainList from '@/components/MainList.vue'
import { useFriendsStore } from '@/stores/friends'
import { storeToRefs } from 'pinia'
const friendsStore = useFriendsStore()
const { getItems } = storeToRefs(friendsStore)
const onDelete = (itemId) => {
   friendsStore.deleteItem(itemId)
}
const addItem = (data) => friendsStore.addNewItem({ name: data })
</script>

<style lang="scss" scoped></style>
