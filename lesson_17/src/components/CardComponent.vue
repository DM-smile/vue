<template>
   <span>{{ item.name }}</span>
   <button @click="$emit('delete', item.id)">Видалити</button>
</template>

<script setup>
defineProps({
   item: {
      type: Object,
      default: () => ({}),
   },
})
defineEmits(['delete'])
</script>

<style lang="scss" scoped></style>
