<template>
   <div class="body">
      <h2>Можливіть оплатити заповлення:</h2>
      <ul>
         <li>* при отриманні;</li>
         <li>* переказ на карту;</li>
         <li>* записати у зошит;</li>
      </ul>
   </div>
</template>

<script>
export default {
   name: 'RulesPage',
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
