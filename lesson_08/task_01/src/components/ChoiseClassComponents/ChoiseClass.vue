<template>
   <div class="choise-block">
      <div class="choise-block__body">
         <choise-product-item
            :product-class="item"
            v-for="item in productsListAll"
            :key="productsListAll.classValue"
         />
      </div>
   </div>
</template>

<script>
import ChoiseProductItem from './items/ChoiseProductItem.vue'
import { mapGetters } from 'vuex'

export default {
   name: 'ChoiseClass',
   components: {
      ChoiseProductItem,
   },
   computed: {
      ...mapGetters(['productsListAll']),
   },
}
</script>

<style lang="scss" scoped>
.choise-block {
   z-index: 10;
   background-color: rgb(232, 232, 232);
   min-height: 170px;
   position: sticky;
   top: 15px;
   padding: 15px;
   border-radius: 10px;
   &__body {
      display: flex;
      gap: 15px;
      justify-content: space-around;
      width: 100%;
      flex-wrap: wrap;
   }
}
</style>
