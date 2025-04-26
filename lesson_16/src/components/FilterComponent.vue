<template>
   <div class="filter">
      <div class="filter__body">
         <h2>{{ $t('titles.filters') }}</h2>
         <h4>{{ $t('titles.seller') }}:</h4>
         <div class="filter__seller">
            <label v-for="seller in sellersList" :key="filter.seller">
               <input
                  type="checkbox"
                  name="seller"
                  :value="seller"
                  v-model.lazy="filter.sellerFilt"
               />
               <span>{{ seller }}</span>
            </label>
         </div>
         <h4>{{ $t('titles.brand') }}:</h4>
         <div class="filter__brand mgb-10">
            <label v-for="brand in brandsList" :key="brand">
               <input type="checkbox" :value="brand" v-model.lazy="filter.brandsFilt" />
               <span>{{ brand }}</span>
            </label>
         </div>
         <div class="buttons">
            <button @click="applyFilters">{{ $t('buttons.apply') }}</button>
            <button @click="clearFilters">{{ $t('buttons.clearFilters') }}</button>
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'FilterComponent',
   computed: {
      ...mapGetters('productsList', { productsList: 'getItemsList' }),
      sellersList() {
         const sellers = this.productsList.map((product) => product.seller)
         return [...new Map(sellers.map((seller) => [seller, seller])).values()]
      },
      brandsList() {
         const brands = this.productsList.map((brand) => brand.brand)
         return [...new Map(brands.map((brand) => [brand, brand])).values()]
      },
   },
   data() {
      return {
         filter: {
            sellerFilt: [],
            brandsFilt: [],
         },
      }
   },
   methods: {
      ...mapActions('productsList', ['loadFilteredData', 'loadList']),
      applyFilters() {
         if (this.filter.sellerFilt.length === 0) {
            this.filter.sellerFilt = [...this.sellersList]
         }
         if (this.filter.brandsFilt.length === 0) {
            this.filter.brandsFilt = [...this.brandsList]
         }
         this.loadFilteredData({
            firstFieldTitle: 'seller',
            firstCompareOperator: 'in',
            firstValueToCompare: this.filter.sellerFilt,
            secondFieldTitle: 'brand',
            secondCompareOperator: 'in',
            secondValueToCompare: this.filter.brandsFilt,
         })
      },
      clearFilters() {
         this.sellerFilt = ''
         this.brandsFilt = []
         this.loadList()
      },
   },
}
</script>

<style lang="scss" scoped>
label {
   display: block;
   cursor: pointer;
}
h4 {
   margin: 0 0 toRem(10) 0;
}
.filter {
   min-width: toRem(200);
   position: relative;

   // .filter__seller

   &__body {
      position: fixed;
      top: toRem(100);
      left: toRem(20);
   }

   &__seller {
      margin-bottom: toRem(10);
   }

   // .filter__brand

   &__brand {
   }
}
.buttons {
   display: flex;
   flex-direction: column;
   gap: toRem(5);
}
</style>
