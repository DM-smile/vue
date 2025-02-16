<template>
   <div class="container">
      <items-block />
   </div>
</template>

<script>
import ItemsBlock from "./components/ItemsBlock.vue"
export default {
   name: "App",
   components: { ItemsBlock },
}
</script>

<style>
.container {
   display: flex;
   gap: 20px;
   flex-wrap: wrap;
}
</style>
