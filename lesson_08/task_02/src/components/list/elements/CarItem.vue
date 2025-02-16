<template>
   <div class="item">
      <div class="item__photo">
         <img :src="carData.photo" alt="photo" />
      </div>
      <div class="item__info">
         <div class="item__title">{{ carData.name }}</div>
         <div class="item__price">{{ carData.price }} $</div>
         <div class="year">
            <span>Рік випуску:</span>
            {{ carData.year }}
            <span>р.</span>
         </div>
         <div class="item__mileage">Пробіг: {{ carData.mileage }}</div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'CarItem',
   props: {
      carData: {
         type: Object,
         default: () => [],
      },
   },
}
</script>

<style lang="scss" scoped>
.item {
   width: 100%;
   display: flex;
   gap: 10px;
   padding: 10px 5px;
   border-left: 1px solid rgb(228, 228, 228);
   border-right: 1px solid rgb(228, 228, 228);
   border-bottom: 1px solid rgb(228, 228, 228);
   @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 0;
      height: 400px;
   }
   &:first-child {
      border-top: 1px solid rgb(228, 228, 228);
   }
   @media (any-hover: hover) {
      transition: background-color 0.2s;
      &:hover {
         background-color: rgb(241, 241, 241);
      }
   }
   // .item__photo

   &__photo {
      width: 250px;
      height: 150px;
      flex-shrink: 0;
      overflow: hidden;
      @media (max-width: 768px) {
         width: 60%;
         height: 50%;
      }
      @media (max-width: 440px) {
         width: 100%;
         height: 50%;
      }
      & img {
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
      @media (any-hover: hover) {
         &:hover {
            & img {
               object-fit: contain;
            }
         }
      }
   }

   // .item__info

   &__info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      @media (max-width: 768px) {
         align-items: flex-start;
         height: 300px;
      }
   }

   // .item__title

   &__title {
      font-size: 24px;
      cursor: pointer;
      transition: all 0.2s;
      position: relative;
      @media (max-width: 768px) {
         font-size: 22px;
         max-width: 255px;
      }
      &::before {
         transition: all 0.2s;
         content: '';
         width: 0%;
         height: 2px;
         background-color: red;
         position: absolute;
         left: 50%;
         bottom: -2px;
      }
      @media (any-hover: hover) {
         &:hover {
            color: rgb(255, 0, 0);
            &::before {
               left: 0;
               width: 100%;
            }
         }
      }
   }

   // .item__price

   &__price {
      font-size: 20px;
      color: red;
   }

   // .item__mileage

   &__mileage {
      color: rgb(29, 33, 26);
   }
}
</style>
