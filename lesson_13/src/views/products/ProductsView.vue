<template>
   <main-layout>
      <template #main>
         <links-comp />
         <router-view />
         <h1 class="mb">Оберіть продукти</h1>
         <div class="wrapper">
            <card-comp
               v-for="product in products"
               :key="product.title"
               :cardImgUrl="product.image"
               :cardTitle="product.title"
               :cardInfo="product.info"
            />
         </div>
      </template>
      <template #footer>
         <div>Рейтинг магазину: 54449</div>
         <div>Статус: <span>відкрито</span></div>
      </template>
   </main-layout>
</template>

<script>
import CardComp from '@/components/CardComp.vue'
import LinksComp from '@/components/LinksComp.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'ProductsView',
   components: { CardComp, LinksComp },
   computed: {
      ...mapGetters(['filteredProducts']),
      products() {
         return this.filteredProducts
      },
   },
   methods: {
      ...mapActions(['filter']),
   },
   created() {
      this.filter([])
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
   justify-content: flex-start;
   flex-wrap: wrap;
   gap: toRem(5);
}
</style>
