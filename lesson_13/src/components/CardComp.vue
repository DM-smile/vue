<template>
   <div class="card">
      <div class="card__image">
         <img class="ibg" :src="cardImgUrl" alt="img" />
      </div>
      <div class="card__title">{{ cardTitle }}</div>
      <slot>
         <div class="card__info">{{ cardInfo }}</div>
      </slot>
      <button>Купити</button>
   </div>
</template>

<script>
export default {
   name: 'CardComp',
   props: {
      cardImgUrl: {
         type: String,
         default: '',
      },
      cardTitle: {
         type: String,
         default: '',
      },
      cardInfo: {
         type: String,
         default: '',
      },
   },
}
</script>

<style lang="scss" scoped>
.card {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   border: toRem(2) solid rgb(107, 161, 26);
   padding: toRem(10) toRem(5);
   border-radius: toRem(10);
   gap: toRem(10);
   max-width: toRem(150);
   align-items: center;
   &__image {
      width: toRem(120);
      height: toRem(110);
      border-radius: toRem(5);
      & img {
         border-radius: toRem(5);
      }
   }
   &__title {
      font-size: toRem(20);
   }
   &__info {
      font-size: toRem(18);
   }
}
button {
   border: toRem(2) solid black;
   border-radius: toRem(10);
   padding: toRem(5);
}
</style>
