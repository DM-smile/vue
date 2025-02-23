<template>
   <div class="body">
      <h2>Нас дуже легко знайти:</h2>
      <ul>
         <li>1) Потягом до Ужгорода;</li>
         <li>2) Шукаєте бабу Галю (вона дорогу покаже);</li>
      </ul>
      <h2>До зустрічі!!!</h2>
   </div>
</template>

<script>
export default {
   name: 'ContactsPage',
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
