<template>
   <div class="filter">
      Фільтри
      <label>
         ПІБ
         <input type="text" v-model="currentFilter.name" />
      </label>
      <div>
         <span>Стаж</span>
         <label>
            від
            <input class="num" type="number" min="1" v-model.number="currentFilter.minExp" />
         </label>
         <label>
            до
            <input class="num" type="number" min="1" v-model.number="currentFilter.maxExp" />
            <button @click="onClear" class="clear" title="очистити фільтри">🧹</button>
         </label>
      </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
   name: 'DriversFilterComponent',
   data() {
      return {
         currentFilter: {},
      }
   },
   methods: {
      ...mapActions('filtersStore', ['driversFilter']),
      onClear() {
         this.currentFilter = {}
      },
   },
   watch: {
      currentFilter: {
         deep: true,
         handler(newValue) {
            this.driversFilter(newValue)
         },
      },
   },
}
</script>

<style lang="scss" scoped>
.clear {
   margin-left: toRem(5);
   border-radius: toRem(5);
   border: toRem(1) solid black;
   padding: toRem(2);
}
.filter {
   display: flex;
   flex-direction: column;
   gap: toRem(20);
   border: toRem(1) solid grey;
   border-radius: toRem(10);
   padding: toRem(10);
   background-color: rgb(231, 231, 231);
}
input {
   outline: toRem(2) solid black;
   border-radius: toRem(5);
   text-align: center;
   &:focus {
      outline: toRem(2) solid rgb(47, 199, 77);
   }
}
.num {
   width: toRem(50);
}
</style>
