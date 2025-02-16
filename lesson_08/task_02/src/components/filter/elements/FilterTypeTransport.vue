<template>
   <div class="type-transport">
      <h4>Тип транспорта</h4>
      <select v-model="selectedTypeTransport">
         <option value="" selected>Всі</option>
         <option v-for="type in typeTransportList" :key="type" :value="type">
            {{ type }}
         </option>
      </select>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
   name: 'FilterTypeTransport',
   computed: {
      ...mapGetters(['typeTransportList', 'selectedFilters']),
      selectedTypeTransport: {
         get() {
            return this.selectedFilters.typeTransport
         },
         set(value) {
            this.updateSelectedFilters({
               category: 'typeTransport',
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
.type-transport {
   display: flex;
   flex-direction: column;
   gap: 10px;
   & select {
      cursor: pointer;
   }
}
</style>
