<template>
   <div class="brand">
      <h4>Марка</h4>
      <select name="brand" v-model="selectedBrand">
         <option value="" selected>Всі</option>
         <option v-for="brand in brandsList" :key="brand" :value="brand">
            {{ brand }}
         </option>
      </select>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
   name: 'FilterBrand',
   computed: {
      ...mapGetters(['brandsList', 'selectedFilters']),
      selectedBrand: {
         get() {
            return this.selectedFilters.brand
         },
         set(value) {
            this.updateSelectedFilters({
               category: 'brand',
               val: value,
            })
            this.filterCars()
         },
      },
   },
   methods: {
      ...mapActions(['updateSelectedFilters', 'filterCars']),
   },
}
</script>

<style lang="scss" scoped>
.brand {
   display: flex;
   flex-direction: column;
   gap: 10px;
   & select {
      cursor: pointer;
   }
}
</style>
