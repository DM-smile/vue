<template>
   <div class="main-content">
      <paginated-comp :workersList="workersList" :listMode="1" />
      <paginated-comp
         :workersList="workersList"
         :listMode="2"
         :buttonsMode="1"
         title="Стаж працівників"
      />
      <paginated-comp :workersList="workersList" :listMode="1" :buttonsMode="2">
         <template #header="{ workersNum }">
            <h1>Всього {{ workersNum }} працівників</h1>
         </template>
      </paginated-comp>
      <paginated-comp :workersList="workersList" :listMode="2" :buttonsMode="1">
         <template #header="{ workersNum }">
            <h1>Наші {{ workersNum }} працівників</h1>
         </template>
      </paginated-comp>
      <paginated-comp :workersList="workersList" :listMode="1" :buttonsMode="2">
         <template #header="{ shownWokkers, workersNum }">
            <h1>Показано {{ shownWokkers }} з {{ workersNum }} осіб</h1>
         </template>
      </paginated-comp>
      <paginated-comp :workersList="workersList" :listMode="2" :buttonsMode="2">
         <template #header>
            <h1>Супер-пупер працівники</h1>
         </template>
      </paginated-comp>
   </div>
</template>

<script>
import PaginatedComp from './components/PaginatedComp.vue'
import { employees } from './constants/dataBase'

export default {
   name: 'App',
   components: {
      PaginatedComp,
   },
   data() {
      return {
         workersList: employees,
         outerCurrentPageIndex: 1,
      }
   },
}
</script>

<style lang="scss" scoped></style>
