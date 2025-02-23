<template>
   <div class="item">
      <div class="item__photo">
         <img :src="currentProduct.photo" alt="photo" />
      </div>
      <div class="item__info">
         <h2 class="item__name">{{ currentProduct.name }}</h2>
         <div class="item__price">
            {{ currentProduct.price }} <span>грн</span>
         </div>
      </div>
      <div class="buttons">
         <router-link
            class="link-main-page"
            :to="{
               name: 'products',
               params: {
                  products: currentCategory.name,
               },
            }"
            >Назад</router-link
         >
         <router-link
            class="link-main-page"
            :to="{
               name: 'home',
            }"
            >На головну</router-link
         >
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
   name: 'ProductData',
   computed: {
      ...mapGetters(['getProductById', 'getCategoryByName']),
      productData() {
         return Number(this.$route.params.itemId)
      },
      currentProduct() {
         return this.getProductById(this.productData)
      },
      productCategory() {
         return this.$route.params.products
      },
      currentCategory() {
         return this.getCategoryByName(this.productCategory)
      },
   },
}
</script>

<style lang="scss" scoped>
.item {
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: toRem(30);
   // .item__photo

   &__photo {
      width: toRem(300);
      height: toRem(300);
      & img {
         width: 100%;
         height: 100%;
         object-fit: contain;
      }
   }

   // .item__info

   &__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: toRem(30);
   }

   // .item__name

   &__name {
      font-size: toRem(25);
      text-align: center;
   }

   // .item__price

   &__price {
      font-size: toRem(40);
      color: red;
   }
}
.link-main-page {
   font-size: toRem(30);
   border: toRem(2) solid black;
   padding: toRem(5) toRem(10);
   background-color: greenyellow;
   border-radius: toRem(10);
   transition: all 0.2s;
   &:active {
      transform: scale(0.95);
      box-shadow: 0 0 10px black;
   }
   @media (any-hover: hover) {
      &:hover {
         background-color: green;
         color: white;
      }
   }
}
.buttons {
   display: flex;
   gap: toRem(15);
}
</style>
