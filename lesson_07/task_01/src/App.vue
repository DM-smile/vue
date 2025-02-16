<template>
   <div>
      <h1>Вітаємо на нашому сайті</h1>
      <ProductsListComponent />
   </div>
</template>

<script>
import ProductsListComponent from './components/ProductsListComponent.vue'

export default {
   name: 'App',
   components: {
      ProductsListComponent,
   },
}
</script>

<style lang="scss" scoped>
* {
   user-select: none;
}
</style>
