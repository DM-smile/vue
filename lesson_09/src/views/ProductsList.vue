<template>
   <div class="product-list">
      <div class="header">
         <h1>{{ currentCategory.title }}</h1>
         <button @click="onEditProduct()" class="addition-product">
            Додати товар в категорію
         </button>
      </div>
      <h2 v-if="!currentCategory.productsList.length">
         Товари в цій категорії відсутні!
      </h2>
      <div
         class="item"
         v-for="product in currentCategory.productsList"
         :key="product.id"
      >
         <div class="item__photo">
            <img :src="product.photo" alt="photo" />
         </div>
         <router-link
            class="item__info"
            :to="{
               name: 'product',
               params: {
                  itemId: product.id,
               },
            }"
         >
            <div class="item__title">{{ product.name }}</div>
            <div class="item__price">{{ product.price }} <span>грн</span></div>
         </router-link>

         <button
            @click="onEditProduct(product.id)"
            class="edit-button"
            title="Редагувати товар"
         >
            ✎
         </button>
         <button
            @click="onDeleteProduct(product.id, currentCategory.name)"
            class="delete-button"
            title="Видалити товар"
         >
            ❌
         </button>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'ProductsList',
   computed: {
      ...mapGetters(['getCategoryByName']),
      productCategory() {
         return this.$route.params.products
      },
      currentCategory() {
         return this.getCategoryByName(this.productCategory)
      },
   },
   methods: {
      ...mapActions(['deleteProduct']),
      onEditProduct(productId) {
         this.$router.push({
            name: 'edit',
            params: {
               itemId: productId,
            },
         })
      },
      onDeleteProduct(productId, category) {
         this.deleteProduct({
            categoryName: category,
            productId: productId,
         })
      },
   },
}
</script>

<style lang="scss" scoped>
.product-list {
   display: flex;
   flex-direction: column;
   gap: toRem(20);
}
.item {
   position: relative;
   height: toRem(200);
   border: 1px solid grey;
   padding: toRem(10);
   border-radius: toRem(10);
   display: flex;
   flex-shrink: 0;
   gap: toRem(20);
   @media (any-hover: hover) {
      transition: all 0.2s;
      &:hover {
         background-color: rgb(226, 226, 226);
      }
   }

   // .item__photo

   &__photo {
      width: toRem(200);
      flex-shrink: 0;
      z-index: 40;
      & img {
         width: 100%;
         height: 100%;
         object-fit: contain;
         transition: all 0.3s;
      }
      @media (any-hover: hover) {
         &:hover {
            & img {
               transform: scale(1.5);
               box-shadow: toRem(5) toRem(5) toRem(5) black;
            }
         }
      }
   }

   // .item__info

   &__info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-right: toRem(50);
   }

   // .item__title

   &__title {
      font-size: toRem(22);
      @media (any-hover: hover) {
         &:hover {
            text-decoration: underline;
         }
      }
   }

   // .item__price

   &__price {
      color: red;
   }
}
.edit-button,
.delete-button {
   color: red;
   width: toRem(40);
   height: toRem(40);
   position: absolute;
   right: toRem(10);
   z-index: 10;
   @media (any-hover: hover) {
      transition: all 0.2s;
      &:hover {
         transform: scale(1.2);
      }
   }
}
.edit-button {
   bottom: toRem(10);
   font-size: toRem(40);
}
.delete-button {
   top: toRem(10);
   font-size: toRem(30);
}
h1 {
   font-size: toRem(50);
}
h2 {
   color: red;
   font-size: toRem(40);
}
.header {
   display: flex;
   align-items: center;
   justify-content: space-between;
}
.addition-product {
   border: 2px solid black;
   border-radius: toRem(10);
   padding: toRem(5) toRem(10);
   background-color: rgb(195, 179, 179);
   cursor: pointer;
   @media (any-hover: hover) {
      transition: all 0.2s;
      &:hover {
         background-color: rgb(173, 151, 151);
      }
   }
}
</style>
