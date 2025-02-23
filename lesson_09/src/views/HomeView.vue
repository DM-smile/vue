<template>
   <div class="body">
      <h1>Цей магазин належить програмісту на фрілансі.</h1>
      <h2>Тому:</h2>
      <ul>
         <li>* магазин працює коли хоче;</li>
         <li>* товари надсилає швидко;</li>
         <li>* на запитання відповідає коли висипається;</li>
      </ul>
   </div>
</template>

<script>
export default {
   name: 'HomeView',
}
</script>

<style lang="scss" scoped>
.body {
   display: flex;
   flex-direction: column;
   gap: toRem(30);
}
h1 {
   font-size: toRem(30);
}
h1 {
   font-size: toRem(26);
}
ul {
   padding-left: toRem(30);
}
</style>
