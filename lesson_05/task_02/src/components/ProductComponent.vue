<template>
   <div class="item">
      <div class="item__photo">
         <img :src="itemData.image" alt="img" />
      </div>
      <div class="item__info">
         <div class="item__title">{{ itemData.title }}</div>
         <div v-if="itemData.action" class="item__saving">
            Ваша економія: <span>{{ saving }} ₴</span>
         </div>
         <div v-if="itemData.action" class="item__price-old">
            {{ itemData.priceOld }} ₴
         </div>
         <div class="item__price-new">{{ itemData.priceNew }} ₴</div>
         <button @click="$emit('select', itemData)" class="bye">Купити</button>
      </div>
   </div>
</template>

<script>
export default {
   name: "ProductComponent",
   props: {
      itemData: {
         type: Object,
         default: () => ({}),
      },
   },

   computed: {
      saving() {
         const prOld = this.itemData.priceOld
         const prNew = this.itemData.priceNew
         let sav
         if (prNew < prOld) {
            sav = prOld - prNew
         }
         return sav
      },
   },
}
</script>

<style lang="scss" scoped>
.item {
   width: 750px;
   display: flex;
   justify-content: flex-start;
   gap: 10px;
   position: relative;
   padding: 10px;
   width: 100%;
   &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: rgb(142, 142, 142);
   }
   // .item__photo

   &__photo {
      width: 200px;
      height: 200px;
      flex-shrink: 0;
      & img {
         width: 100%;
         height: 100%;
         object-fit: contain;
      }
   }

   // .item__info

   &__info {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
   }

   // .item__title

   &__title {
      font-size: 24px;
      color: rgb(52, 52, 228);
   }

   // .item__saving

   &__saving {
      & span {
         color: red;
      }
   }

   // .item__price-old

   &__price-old {
      color: grey;
      font-size: 24px;
      text-decoration: line-through;
   }

   // .item__price-new

   &__price-new {
      color: red;
      font-size: 32px;
   }
}
.bye {
   position: absolute;
   bottom: 0;
   right: 0;
   color: white;
   background-color: rgb(0, 190, 0);
   font-size: 18px;
   border-radius: 5px;
   border: 0;
   padding: 8px 16px;
   transition: all 0.1s;
   cursor: pointer;
   &:hover {
      background-color: green;
   }
}
</style>
