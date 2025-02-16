<template>
   <div class="container">
      <product-component
         v-for="item of itemsList"
         :key="item.id"
         :itemData="item"
         @select="$emit('select', item)"
      />
   </div>
</template>

<script>
import ProductComponent from "./ProductComponent.vue"
import { items } from "@/constants/items.js"

export default {
   name: "BlockWithGoods",
   components: {
      ProductComponent,
   },
   data() {
      return {
         itemsList: items,
      }
   },
}
</script>

<style lang="scss" scoped>
.container {
   display: flex;
   flex-direction: column;
   gap: 40px;
   width: 800px;
}
</style>
