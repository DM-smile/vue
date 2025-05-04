<template>
   <h2 class="title">{{ title }} <span v-if="!list.length">порожній</span></h2>
   <div class="list">
      <div class="list__item" v-for="currentItem in list" :key="currentItem.id">
         <card-component :item="currentItem" @delete="onDelete(currentItem.id)" />
      </div>
   </div>
   <div class="add-new-item">
      <input type="text" :placeholder="inputTitle" v-model.lazy="inputData" :class="inputStyle" />
      <button @click="addNewItem">{{ addButtonTitle }}</button>
   </div>
</template>

<script setup>
import { ref } from 'vue'
import CardComponent from './CardComponent.vue'
const props = defineProps({
   title: { type: String, default: '' },
   list: {
      type: Array,
      default: () => [],
   },
   addButtonTitle: {
      type: String,
      default: 'Додати новий елемент',
   },
   inputTitle: {
      type: String,
      default: 'Назва елементу',
   },
})
const emit = defineEmits(['delete', 'addItem'])
const onDelete = (itemId) => {
   emit('delete', itemId)
}
const inputData = ref(null)
const inputStyle = ref('')
const addNewItem = () => {
   if (inputData.value) {
      emit('addItem', inputData.value)
      inputData.value = null
      inputStyle.value = ''
   } else inputStyle.value = 'red'
}
</script>

<style lang="scss" scoped>
.red {
   outline: 2px solid red;
}
</style>
