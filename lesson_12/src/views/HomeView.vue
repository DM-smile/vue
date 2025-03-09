<template>
   <div>
      <h1>Вітаємо на сайті школи</h1>
      <h2>У нашій школі учень сам вибирає уроки і вчителів</h2>
      <h2>Увійдіть для повноцінного користування</h2>
   </div>
</template>

<script>
export default {
   name: 'HomeView',
}
</script>

<style lang="scss" scoped>
div {
   display: flex;
   flex-direction: column;
   gap: toRem(15);
}
h1 {
   font-size: toRem(30);
}
h2 {
   font-size: toRem(22);
}
</style>
