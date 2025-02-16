<template>
   <div class="wrapper">
      <products-filters
         :products-list-data="productsList"
         @filter-updated="handleFilterUpdate"
      />
      <products-list :products-list="productsFilteredList" />
   </div>
</template>

<script>
import ProductsFilters from "./components/ProductsFilters.vue"
import ProductsList from "./components/ProductsList.vue"
import { productsListData } from "./constants/shopData.js"
export default {
   name: "App",
   components: {
      ProductsList,
      ProductsFilters,
   },
   data() {
      return {
         productsList: productsListData.products,
         productsFilteredList: productsListData.products,
      }
   },
   methods: {
      handleFilterUpdate(filters) {
         this.productsFilteredList = productsListData.products.filter(
            (product) => {
               const matchesSearch = filters.searchQuery
                  ? product.brand
                       .toLowerCase()
                       .includes(filters.searchQuery.toLowerCase()) ||
                    product.name
                       .toLowerCase()
                       .includes(filters.searchQuery.toLowerCase()) ||
                    product.price.toString().includes(filters.searchQuery)
                  : true
               const matchesSeller = filters.selectedSellers.length
                  ? filters.selectedSellers.includes(product.seller.value)
                  : true
               const matchesBrand = filters.selectedBrands.length
                  ? filters.selectedBrands.includes(product.brand)
                  : true
               return matchesSearch && matchesSeller && matchesBrand
            }
         )
      },
   },
}
</script>

<style lang="scss" scoped>
.wrapper {
   display: flex;
   gap: 20px;
   user-select: none;
}
</style>
