<template>
   <h2 class="title">{{ title }}</h2>
   <div class="list">
      <div class="list__item">
         <span>Баба галя</span>
         <button @click="$emit('delete', id)">Видалити</button>
      </div>
   </div>
</template>

<script setup>
const props = defineProps({ title: { type: String } })
</script>

<style lang="scss" scoped></style>
