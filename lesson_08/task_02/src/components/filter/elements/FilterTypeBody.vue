<template>
   <div class="type-body">
      <h4>Тип кузова</h4>
      <div>
         <label v-for="type in typeBodyList" :key="type" :value="type">
            <input
               type="checkbox"
               :value="type"
               v-model="selectedtTypeBodyList"
            />
            <span>{{ type }}</span>
         </label>
      </div>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
   name: 'FilterTypeBody',
   computed: {
      ...mapGetters(['typeBodyList', 'selectedFilters']),
      selectedtTypeBodyList: {
         get() {
            return this.selectedFilters.typesBody
         },
         set(value) {
            this.updateSelectedFilters({
               category: 'typesBody',
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
.type-body {
   display: flex;
   flex-direction: column;
   gap: 10px;
   & div {
      display: flex;
      flex-direction: column;
      gap: 3px;
      & span {
         margin-left: 4px;
      }
      & label,
      input {
         cursor: pointer;
      }
   }
}
</style>
