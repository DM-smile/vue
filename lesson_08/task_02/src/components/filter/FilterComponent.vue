<template>
   <div class="wrapper" :class="{ open: isOpen }">
      <div class="filter" :class="{ open: isOpen }">
         <filter-type-transport />
         <filter-type-body />
         <filter-brand />
         <filter-year />
         <button @click="resetFilter()">Скинути фільтри</button>
      </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
import FilterBrand from './elements/FilterBrand.vue'
import FilterTypeBody from './elements/FilterTypeBody.vue'
import FilterTypeTransport from './elements/FilterTypeTransport.vue'
import FilterYear from './elements/FilterYear.vue'

export default {
   name: 'FilterComponent',
   components: {
      FilterTypeTransport,
      FilterTypeBody,
      FilterYear,
      FilterBrand,
   },
   methods: {
      ...mapActions(['resetFilter']),
   },
   props: {
      isOpen: Boolean,
   },
}
</script>

<style lang="scss" scoped>
$widthFilterBlock: 270px;
.wrapper {
   width: $widthFilterBlock;
   height: 100vh;
   @media (max-width: 1024px) {
      position: absolute;
      left: -100%;
      transition: all 0.5s;
   }
}
.filter {
   width: $widthFilterBlock;
   padding: 20px;
   display: flex;
   flex-direction: column;
   gap: 25px;
   height: 100vh;
   background-color: rgb(231, 231, 231);
   position: fixed;
   left: 0;
   top: 0;
   z-index: 10;
   & button {
      cursor: pointer;
   }
   @media (max-width: 1024px) {
      left: -100%;
      transition: all 0.5s;
   }
}
.open {
   left: 0;
   z-index: 200;
   @media (max-width: 425px) {
      width: 100%;
   }
}
</style>
