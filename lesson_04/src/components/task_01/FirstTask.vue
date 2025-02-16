<template>
   <h3>Задача 1. Спробуйте відтворити використовуючи відповідні компоненти</h3>
   <h1>Списки порівнянь</h1>
   <div class="phones__wrapper">
      <h3>Мобільні телефони</h3>
      <h4>Кількість товарів: {{ phonesList.length }}</h4>
      <div class="phones__items">
         <phone-component
            v-for="(el, ind) in phonesList"
            :key="ind"
            :phone="el"
         />
      </div>
   </div>
   <h1>Останні переглянуті товари</h1>
   <div class="reviewed-product">
      <reviewed-product
         v-for="item of otherGoods"
         :key="item.id"
         :productData="item"
      />
   </div>
</template>

<script>
import PhoneComponent from "../task_01/PhoneComponent.vue"
import ReviewedProduct from "../task_01/ReviewedProduct.vue"

const phoneImagesUrl = [
   require("@/assets/img/phone1.png"),
   require("@/assets/img/phone2.png"),
   require("@/assets/img/phone3.png"),
]
const reviewedProducts = [
   {
      id: 1111,
      photo: require("@/assets/img/tv1.png"),
      title: 'Портативний укран TouYinger 130"',
      oldPrice: 1899,
      newPrice: 1899,
      action: false,
      availability: true,
   },
   {
      id: 2222,
      photo: require("@/assets/img/tv2.png"),
      title: 'Портативний монітор MUCAI N116A black 11,6"',
      oldPrice: 2950,
      newPrice: 2950,
      action: false,
      availability: true,
   },
   {
      id: 3333,
      photo: require("@/assets/img/sofa.png"),
      title: "Шафа розпашна Roko Дуб Верге 90х50х204.5 см",
      oldPrice: 3504,
      newPrice: 2976,
      action: true,
      availability: false,
   },
]
export default {
   name: "FirstTask",
   components: {
      PhoneComponent,
      ReviewedProduct,
   },
   data() {
      return {
         phonesList: phoneImagesUrl,
         otherGoods: reviewedProducts,
      }
   },
}
</script>

<style lang="scss" scoped>
.phones__wrapper {
   border: 1px solid rgb(222, 222, 222);
   border-radius: 10px;
   padding: 10px 20px;
   max-width: 600px;
}
.phones__items {
   display: flex;
   gap: 30px;
}
.reviewed-product {
   border: 1px solid rgb(183, 183, 183);
   display: flex;
   flex-wrap: 5px;
}
</style>
