<template>
   <div class="content">
      <router-view />
   </div>
</template>

<script>
export default {
   name: 'LessonsView',
}
</script>

<style lang="scss" scoped>
.content {
   text-align: left;
   width: toRem(500);
}
</style>
