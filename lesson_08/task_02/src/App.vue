<template>
   <button class="burger" @click="toggleFilter">
      <span v-if="!isFilterOpen">></span>
      <span v-else><</span>
   </button>
   <div class="header">
      <h1>Магазин автомобілів</h1>
   </div>
   <div class="body">
      <filter-component :isOpen="isFilterOpen" />
      <cars-list :isOpen="isFilterOpen" />
   </div>
</template>

<script>
import FilterComponent from './components/filter/FilterComponent.vue'
import CarsList from './components/list/CarsList.vue'
export default {
   name: 'App',
   components: {
      FilterComponent,
      CarsList,
   },
   data() {
      return {
         isFilterOpen: false,
      }
   },
   methods: {
      toggleFilter() {
         const bodyElement = document.documentElement
         this.isFilterOpen = !this.isFilterOpen
         if (this.isFilterOpen) {
            bodyElement.style.overflow = 'hidden'
         } else bodyElement.style.overflow = 'auto'
      },
   },
}
</script>

<style lang="scss" scoped>
.body {
   display: flex;
   gap: 20px;
   position: relative;
}
.header {
   width: 100%;
   height: 50px;
   background-color: #e7e7e7;
   position: sticky;
   top: 0;
   left: 0;
   z-index: 5;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 12px;
   color: red;
}
.burger {
   width: 35px;
   height: 60px;
   font-size: 25px;
   background-color: rgb(221, 193, 109);
   border-radius: 50% 0 0 50%;
   cursor: pointer;
   position: fixed;
   top: 10%;
   right: 0;
   z-index: 400;
   @media (min-width: 1023.8px) {
      display: none;
   }
}
h1 {
   margin-right: 20px;
}
</style>
