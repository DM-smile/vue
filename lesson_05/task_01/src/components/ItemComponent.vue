<template>
   <div class="item">
      <div class="item__photo">
         <img :src="itemData.img" alt="image" />
      </div>
      <div class="item__info">
         <div class="item__title">{{ itemData.title }}</div>
         <div v-if="itemData.action" class="item__price-old">
            {{ itemData.priceOld }} грн.
         </div>
         <div class="item__price-new">{{ itemData.priceNew }} грн.</div>
         <a class="item__link" :href="itemData.url">{{ itemData.urlTitle }}</a>
         <div v-if="itemData.delivery" class="item__delivery-info">
            Вартість доставки: {{ itemData.deliveryPrice }} грн.
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "ItemComponent",
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
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 300px;
   border: 1px solid grey;
   border-radius: 20px;
   padding-bottom: 30px;
   gap: 10px;
   transition: all 0.1s;
   &:hover {
      outline: 3px solid rgb(12, 207, 12);
      background-color: rgb(222, 222, 222);
   }
   // .item__photo

   &__photo {
      width: 300px;
      & img {
         width: 100%;
         height: 100%;
         object-fit: cover;
         border-radius: 20px 20px 0 0;
      }
   }

   // .item__info
   &__info {
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
   }

   // .item__title

   &__title {
      font-size: 20px;
   }

   // .item__price-old

   &__price-old {
      text-decoration: line-through;
   }

   // .item__price-new

   &__price-new {
   }

   // .item__link

   &__link {
   }

   // .item__delivery-info

   &__delivery-info {
   }
}
</style>
