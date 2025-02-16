<template>
   <div class="body">
      <choise-class />
      <products-list />
   </div>
</template>

<script>
import ChoiseClass from './components/ChoiseClassComponents/ChoiseClass.vue'
import ProductsList from './components/ProductsListConponents/ProductsList.vue'

export default {
   name: 'App',
   components: {
      ProductsList,
      ChoiseClass,
   },
}
</script>

<style lang="scss" scoped>
.body {
   display: flex;
   flex-direction: column;
   gap: 30px;
}
</style>
