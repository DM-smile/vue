<template>
   <nav>
      <router-link :to="{ name: 'home' }">Головна</router-link>
      <router-link :to="{ name: 'drivers' }">Водії</router-link>
      <router-link :to="{ name: 'buses' }">Автобуси</router-link>
      <router-link :to="{ name: 'appointments' }">Призначення</router-link>
      <router-link :to="{ name: 'contacts' }">Контакти</router-link>
   </nav>
   <div class="content">
      <div class="content__body">
         <router-view />
      </div>
   </div>
</template>

<script>
export default {
   name: 'App',
}
</script>

<style lang="scss" scoped>
nav {
   font-size: toRem(30);
   display: flex;
   gap: toRem(50);
   flex-wrap: wrap;
   justify-content: center;
   position: relative;
   &::after {
      content: '';
      width: 100%;
      height: toRem(1);
      background-color: grey;
      position: absolute;
      bottom: toRem(-10);
   }
   & > * {
      padding: toRem(2) toRem(10);
      &:not(:last-child) {
         position: relative;
         &::after {
            content: '|';
            position: absolute;
            right: toRem(-25);
         }
      }
   }
   .router-link-active {
      outline: toRem(2) solid green;
      border-radius: toRem(5);
   }
}
.content {
   padding: toRem(100) toRem(30) 0;
   &__body {
      font-size: toRem(20);
      border: toRem(2) solid grey;
      padding: toRem(15);
      border-radius: toRem(10);
      width: toRem(600);
      margin: 0 auto;
   }
}
</style>
