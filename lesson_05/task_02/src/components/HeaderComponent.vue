<template>
   <div class="header">
      <img :src="icons.smile" alt="logo" />
      <div class="title">Супер-пупер інтернет магазин</div>
      <div @click="clickOnCart" class="cart">
         <img :src="icons.cart" alt="cart" />
         <div v-if="counter" class="counter">
            {{ counter }}
         </div>
      </div>
   </div>
</template>

<script>
import { icons } from "@/constants/items.js"
export default {
   name: "HeaderComponent",
   data() {
      return {
         icons,
      }
   },
   props: {
      counter: {
         type: Number,
         default: null,
      },
   },
   methods: {
      clickOnCart() {
         this.$emit("click-on-cart")
      },
   },
}
</script>

<style lang="scss" scoped>
* {
   margin: 0;
   padding: 0;
}
.header {
   background-color: rgb(197, 239, 224);
   position: sticky;
   top: 0;
   z-index: 10;
   font-size: 40px;
   text-align: center;
   padding: 10px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0 auto;
   & .title {
      color: rgb(204, 68, 68);
   }
   & img {
      width: 60px;
      height: 60px;
   }
   .cart {
      position: relative;
      cursor: pointer;
      border-radius: 50%;
      background-color: rgb(246, 235, 221);
      transition: all 0.2s;
      &:hover {
         background-color: rgb(234, 207, 172);
      }
   }
   .counter {
      position: absolute;
      bottom: 10px;
      left: 0;
      font-size: 15px;
      background-color: rgb(255, 0, 0);
      border-radius: 50%;
      padding: 3px;
      width: 15px;
      height: 15px;
   }
}
</style>
