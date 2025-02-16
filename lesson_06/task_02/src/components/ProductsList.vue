<template>
   <div class="products" v-show="productsList.length">
      <ProductItemComponent
         v-for="item in productsList"
         :key="item.id"
         :product-item="item"
      />
   </div>
   <div v-show="!productsList.length" class="no-data">Дані відсутні!</div>
</template>

<script>
import ProductItemComponent from "./page-components/ProductItemComponent.vue"
export default {
   name: "ProductsList",
   components: {
      ProductItemComponent,
   },
   props: {
      productsList: {
         type: Array,
         default: () => [],
      },
   },
}
</script>

<style lang="scss" scoped>
.products {
   display: flex;
   flex-wrap: wrap;
   border: 2px solid black;
}
.no-data {
   font-size: 60px;
   color: red;
}
</style>
