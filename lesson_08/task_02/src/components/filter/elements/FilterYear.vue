<template>
   <div class="year">
      <h4>Рік випуску</h4>
      <div>
         <span>Від</span>
         <input type="number" v-model.number="selectedYearsMin" />
         <span>До</span>
         <input type="number" v-model.number="selectedYearsMax" />
      </div>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
   name: 'FilterYear',
   computed: {
      minCarYear() {
         return Math.min(...this.carsListAll.map((car) => car.year))
      },
      maxCarYear() {
         return Math.max(...this.carsListAll.map((car) => car.year))
      },
      ...mapGetters(['listByYear', 'selectedFilters', 'carsListAll']),
      selectedYearsMin: {
         get() {
            return this.selectedFilters.year.min
         },
         set(value) {
            if (value < this.minCarYear) {
               value = this.minCarYear
            } else if (value > this.selectedYearsMax && this.selectedYearsMax) {
               value = this.selectedYearsMax - 1
            }
            this.updateSelectedFilters({
               category: 'year',
               val: { ...this.selectedFilters.year, min: value },
            })
            this.filterCars()
         },
      },
      selectedYearsMax: {
         get() {
            return this.selectedFilters.year.max
         },
         set(value) {
            if (value < this.minCarYear) {
               value = this.minCarYear
            } else if (value > this.maxCarYear) {
               value = this.maxCarYear
            } else if (value < this.selectedYearsMin && this.selectedYearsMin) {
               value = this.selectedYearsMin + 1
            }
            this.updateSelectedFilters({
               category: 'year',
               val: { ...this.selectedFilters.year, max: value },
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
.year {
   display: flex;
   flex-direction: column;
   gap: 10px;
   & div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & input {
         width: 35%;
         cursor: pointer;
      }
   }
}
</style>
