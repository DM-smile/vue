<template>
   <nav>
      <div class="nav__body">
         <router-link :to="{ name: 'home' }">Головна</router-link>
         <router-link :to="{ name: 'shop' }">Магазин</router-link>
         <router-link :to="{ name: 'rules' }">Правила оплати</router-link>
         <router-link :to="{ name: 'contacts' }">Контакти</router-link>
      </div>
   </nav>
   <div class="body">
      <div class="content">
         <router-view />
      </div>
   </div>
</template>

<script>
import HomeView from './views/HomeView.vue'
import RulesPage from './views/RulesPage.vue'

export default {
   name: 'App',
   components: { HomeView, RulesPage },
}
</script>

<style lang="scss" scoped>
$widthContent: toRem(800);
* {
   user-select: none;
}
nav {
   width: 100%;
   background-color: grey;
   font-size: toRem(30);
   position: sticky;
   top: 0;
   left: 0;
   z-index: 100;
}
.nav__body {
   width: $widthContent;
   margin: 0 auto;
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding: toRem(20);

   & * {
      border: 3px solid black;
      padding: toRem(10);
      border-radius: toRem(10);
      background-color: rgb(177, 177, 177);
      @media (any-hover: hover) {
         transition: all 0.2s;
         &:hover {
            background-color: rgb(220, 247, 179);
         }
      }
      &:active {
         transform: scale(0.9);
      }
   }
}
.router-link-active {
   border: 3px solid greenyellow;
}
.content {
   width: $widthContent;
   margin: 0 auto;
   font-size: toRem(24);
   padding-top: toRem(40);
   padding-bottom: toRem(100);
}
</style>
