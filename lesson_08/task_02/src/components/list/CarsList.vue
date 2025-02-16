<template>
   <div class="cars-list">
      <h1 v-if="!selectedCarsList.length">
         За вказаними фільтрами результатів не знайдено!
      </h1>
      <car-item
         v-for="item in selectedCarsList"
         :key="item.id"
         :carData="item"
      />
   </div>
</template>

<script>
import CarItem from './elements/CarItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'CarsList',
   components: {
      CarItem,
   },
   computed: {
      ...mapGetters(['selectedCarsList']),
   },
   methods: {
      ...mapActions(['filterCars']),
   },
   created() {
      this.filterCars()
   },
}
</script>

<style lang="scss" scoped>
.cars-list {
   flex-grow: 1;
   display: flex;
   flex-direction: column;
   padding: 10px;
}
h1 {
   color: red;
   text-align: center;
}
</style>
