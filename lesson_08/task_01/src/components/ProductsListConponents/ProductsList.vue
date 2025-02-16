<template>
   <div class="products-list">
      <product-item
         v-for="item in selectProductClassList"
         :key="item.id"
         :itemData="item"
      />
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from './items/ProductItem.vue'
export default {
   name: 'ProductsList',
   components: {
      ProductItem,
   },
   computed: {
      ...mapGetters(['productsListAll', 'getChoiseClassList']),
      selectProductClassList() {
         const choise = this.getChoiseClassList
         return this.productsListAll[choise]?.productsList || []
      },
   },
}
</script>

<style lang="scss" scoped>
.products-list {
   display: flex;
   flex-wrap: wrap;
}
</style>
