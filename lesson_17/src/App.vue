<template>
   <div class="body">
      <nav>
         <router-link :to="{ name: 'home' }">Головна</router-link>|
         <router-link :to="{ name: 'friends' }">Друзі</router-link>|
         <router-link :to="{ name: 'gifts' }">Подарунки</router-link>|
         <router-link :to="{ name: 'appointments' }">Призначення подарунків</router-link>
      </nav>
      <div class="container">
         <router-view />
      </div>
   </div>
</template>

<script setup></script>

<style lang="scss">
.body {
   display: flex;
   flex-direction: column;
   height: 100%;
   text-align: center;
}
nav {
   margin-bottom: 20px;
   font-size: 24px;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   & > * {
      border-radius: 10px;
      padding: 0 10px;
   }
}
.router-link-active {
   background-color: rgb(74, 74, 73);
   color: rgb(178, 245, 78);
}
.title {
   margin-bottom: 20px;
}
.list {
   width: 400px;
   margin: 0 auto;
   // .list__item

   &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid grey;
      padding: 5px 10px;
      border-radius: 5px;
      @media (any-hover: hover) {
         transition: all 0.2s;
         &:hover {
            background-color: rgb(49, 49, 49);
         }
      }
   }
}
button {
   cursor: pointer;
   @media (any-hover: hover) {
      transition: all 0.2s;
      border-radius: 7px;
      padding: 4px;
      &:hover {
         background-color: greenyellow;
      }
   }
}
</style>
