<template>
   <div class="item">
      <div class="item__photo">
         <img :src="itemData.image" alt="img" />
      </div>
      <div class="item__info">
         <div class="item__title">{{ itemData.title }}</div>
         <div class="item__price-new">{{ itemData.priceNew }} ₴</div>
         <div class="description">{{ itemData.description }}</div>
      </div>

      <button @click="remove" class="del-button" title="Видалити товар">
         Х
      </button>
   </div>
</template>

<script>
export default {
   name: "ProductComponentForCart",
   props: {
      itemData: {
         type: Object,
         default: () => ({}),
      },
   },
   methods: {
      remove() {
         this.$emit("remove-item")
      },
   },
}
</script>

<style lang="scss" scoped>
.item {
   width: 750px;
   width: 95%;
   display: flex;
   justify-content: flex-start;
   gap: 10px;
   position: relative;
   padding: 10px;
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
      color: rgb(0, 0, 0);
   }

   // .item__price-new

   &__price-new {
      color: rgb(0, 0, 0);
      font-size: 36px;
   }
   .del-button {
      height: 40px;
      background-color: red;
      width: 40px;
      cursor: pointer;
      align-self: center;
      color: white;
      font-size: 30px;
   }
   .description {
      color: black;
   }
}
</style>
