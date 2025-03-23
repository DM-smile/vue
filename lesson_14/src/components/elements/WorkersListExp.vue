<template>
   <div class="list" :start="startIndex">
      <div v-for="worker in currentPageWorkersList" :key="worker.id" class="item">
         <span>{{ worker.name }}</span
         ><span>{{ worker.experience }} р.</span>
      </div>
   </div>
</template>

<script>
export default {
   name: 'WorkersListExp',
   props: {
      currentPageWorkersList: {
         type: Array,
         default: () => [],
      },
      startIndex: {
         type: Number,
         default: 1,
      },
   },
}
</script>

<style lang="scss" scoped>
.item {
   display: flex;
   justify-content: space-between;
}
</style>
