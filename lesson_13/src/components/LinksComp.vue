<template>
   <div class="buttons">
      <button @click="filter">Фільтри</button>
      <button @click="edit">Додати товар</button>
   </div>
</template>

<script>
export default {
   name: 'LinksComp',
   methods: {
      filter() {
         this.$router.push({ name: 'selector' })
      },
      edit() {
         this.$router.push({ name: 'editor' })
      },
   },
}
</script>

<style lang="scss" scoped>
.buttons {
   display: flex;
   gap: toRem(10);
   margin-bottom: toRem(20);
   & > * {
      border: toRem(1) solid black;
      padding: toRem(2);
      border-radius: toRem(4);
      background-color: rgb(219, 218, 218);
   }
}
</style>
