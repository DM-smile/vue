<template>
   <item-component v-for="item in itemsList" :key="item.id" :item-data="item" />
</template>

<script>
import { itemsList } from "@/constants/items.js"
import ItemComponent from "./ItemComponent.vue"
export default {
   name: "ItemsBlock",
   components: {
      ItemComponent,
   },
   data() {
      return {
         itemsList,
      }
   },
}
</script>

<style lang="scss" scoped></style>
