<template>
   <main-layout>
      <template #main>
         <h1 class="mb">Оберіть Постачальника</h1>
         <div class="wrapper">
            <card-comp
               v-for="supplier in suppliersList"
               :key="supplier.title"
               :cardImgUrl="supplier.image"
               :cardTitle="supplier.title"
            >
               {{ supplier.icon }}
            </card-comp>
         </div>
      </template>
      <template #footer>
         <div>Найпопулятрніший: <span>Економ</span></div>
         <div>Статус: <span>відкрито</span></div>
      </template>
   </main-layout>
</template>

<script>
import CardComp from '@/components/CardComp.vue'
import { suppliers } from '@/constants/dataBase'
export default {
   name: 'SuppliersView',
   components: { CardComp },
   computed: {
      suppliersList() {
         return suppliers
      },
   },
}
</script>

<style lang="scss" scoped>
span {
   color: green;
}
.wrapper {
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   flex-wrap: wrap;
}
</style>
