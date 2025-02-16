<template>
   <div class="filter filter--mod"></div>
   <div class="filter">
      <div>
         <h4>
            Продавець <span>({{ sellersList.length }})</span>
         </h4>
         <label v-for="seller in sellersList" :key="seller.value">
            <input
               type="checkbox"
               :value="seller.value"
               v-model="selectedSellers"
               @change="filterChanged"
            />
            {{ seller.title }}
            <span>({{ numberOfSellers[seller.value] }})</span>
         </label>
      </div>
      <div>
         <h4>
            Бренд <span>({{ brandsList.length }})</span>
         </h4>
         <div class="search">
            <input
               type="text"
               placeholder="Пошук"
               v-model="searchQuery"
               @input="filterChanged"
            />
         </div>
      </div>
      <div>
         <h4>Алфавітний вказівник</h4>
         <label v-for="brand in brandsList" :key="brand">
            <input
               type="checkbox"
               :value="brand"
               v-model="selectedBrands"
               @change="filterChanged"
            />
            {{ brand }}<span> ({{ numberOfProductsByBrand[brand] }})</span>
         </label>
      </div>
   </div>
</template>

<script>
export default {
   name: "ProductsFilters",
   data() {
      return {
         searchQuery: "",
         selectedSellers: [],
         selectedBrands: [],
      }
   },
   props: {
      productsListData: {
         type: Array,
         default: () => [],
      },
   },
   methods: {
      filterChanged() {
         this.$emit("filter-updated", {
            searchQuery: this.searchQuery,
            selectedSellers: this.selectedSellers,
            selectedBrands: this.selectedBrands,
         })
      },
   },
   computed: {
      sellersList() {
         const sellers = this.productsListData.map((product) => product.seller)
         return [
            ...new Map(
               sellers.map((seller) => [seller.value, seller])
            ).values(),
         ]
      },
      brandsList() {
         return [
            ...new Set(this.productsListData.map((product) => product.brand)),
         ]
      },
      numberOfProductsByBrand() {
         return this.productsListData.reduce((acc, product) => {
            acc[product.brand] = (acc[product.brand] || 0) + 1
            return acc
         }, {})
      },
      numberOfSellers() {
         return this.productsListData.reduce((acc, product) => {
            acc[product.seller.value] = (acc[product.seller.value] || 0) + 1
            return acc
         }, {})
      },
   },
}
</script>

<style lang="scss" scoped>
h4 {
   color: rgb(84, 84, 241);
   & {
      span {
         color: rgb(107, 107, 107);
      }
   }
}
label {
   & {
      span {
         color: rgb(107, 107, 107);
         margin-left: 5px;
      }
   }
}
.filter {
   border: 2px solid black;
   min-width: 250px;
   display: flex;
   flex-direction: column;
   padding: 5px;
   font-size: 20px;
   position: fixed;
   top: 8px;
   left: 3px;
   & div {
      display: flex;
      flex-direction: column;
      gap: 7px;
   }
   &--mod {
      position: static;
      border: none;
   }
}
label {
   display: flex;
   align-items: center;
}
.search {
   input {
      width: 90%;
      outline: 1px solid grey;
      border-radius: 3px;
      padding: 5px;
      border: none;
      font-size: 16px;
      color: rgb(27, 27, 27);
   }
}
</style>
