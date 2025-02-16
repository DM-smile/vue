<template>
   <div class="products__item item">
      <div class="item__photo">
         <img :src="productItem.image" alt="product image" />
      </div>
      <div class="item__title">{{ productItem.name }}</div>
      <div class="item__price">{{ productItem.price }} ₴</div>
   </div>
</template>

<script>
export default {
   name: "ProductItemComponent",
   props: {
      productItem: {
         type: Object,
         default: () => ({}),
      },
   },
}
</script>

<style lang="scss" scoped>
.item {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 15px;
   border: 1px solid rgb(230, 230, 230);
   max-width: 300px;
   padding: 10px;

   // .item__photo

   &__photo {
      width: 300px;
      height: 300px;
      overflow: hidden;
      cursor: pointer;
      & img {
         width: 100%;
         height: 100%;
         object-fit: contain;
         transition: transform 0.1s;
      }
      &:hover {
         & img {
            transform: scale(1.2);
         }
      }
   }

   // .item__title

   &__title {
      font-size: 20px;
   }

   // .item__price

   &__price {
      font-size: 34px;
      color: red;
   }
}
</style>
