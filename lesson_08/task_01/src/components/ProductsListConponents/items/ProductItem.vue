<template>
   <div class="products-list__item item">
      <div class="item__image">
         <img :src="itemData.image" alt="image" />
      </div>
      <div class="item__description">
         <div class="item__title">{{ itemData.name }}</div>
         <div class="item__price">{{ itemData.price }} грн</div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'ProductItem',
   props: {
      itemData: {
         type: Object,
         default: () => ({}),
      },
   },
}
</script>

<style lang="scss" scoped>
.item {
   flex: 0 0 30%;
   display: flex;
   align-items: center;
   height: 150px;
   border: 1px solid rgb(181, 181, 181);
   padding: 10px;
   overflow-x: auto;
   // .item__image

   &__image {
      width: 200px;
      height: 150px;
      flex-shrink: 0;
      overflow: hidden;
      cursor: pointer;
      &:hover {
         & img {
            transform: scale(1.1);
         }
      }
      & img {
         width: 100%;
         height: 100%;
         object-fit: contain;
         transition: transform 0.2s;
      }
   }

   // .item__description

   &__description {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
   }

   // .item__title

   &__title {
      font-size: 20px;
      cursor: pointer;
      position: relative;
      transition: color 0.2s;
      &::before {
         content: '';
         width: 0%;
         height: 2px;
         background-color: red;
         position: absolute;
         bottom: -2px;
         left: 50%;
         transition: all 0.2s;
      }
      &:hover {
         color: red;
         &::before {
            width: 100%;
            left: 0;
         }
      }
   }

   // .item__price

   &__price {
      color: red;
      font-size: 24px;
   }
}
</style>
