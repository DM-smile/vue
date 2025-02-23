<template>
   <div class="edit-data">
      <h2>{{ titleText }}</h2>
      <label>
         <span>Назва</span>
         <input type="text" v-model="productData.name" />
      </label>
      <label>
         <span>Ціна</span>
         <input type="number" v-model="productData.price" />
      </label>
      <label>
         <span>Посилання на зображення</span>
         <input type="text" v-model="productData.photo" />
      </label>
      <div class="buttons">
         <router-link
            :to="{
               name: 'products',
               params: {
                  products: currentCategory.name,
               },
            }"
            class="button"
            @click="onSave"
            >OK</router-link
         >
         <router-link
            :to="{
               name: 'products',
               params: {
                  products: currentCategory.name,
               },
            }"
            class="button"
            title="відміна"
            >❌</router-link
         >
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'EditPruductPage',
   data() {
      return {
         productData: {
            name: '',
            photo: '',
            price: null,
         },
         createText: 'Додавання нового товару',
         editText: 'Редагування товару',
      }
   },
   computed: {
      ...mapGetters(['getProductById', 'getCategoryByName']),
      productId() {
         return Number(this.$route.params.itemId)
      },
      titleText() {
         return this.productId ? this.editText : this.createText
      },
      productCategory() {
         return this.$route.params.products
      },
      currentCategory() {
         return this.getCategoryByName(this.productCategory)
      },
   },
   methods: {
      ...mapActions(['updateProductData', 'createProduct']),
      onSave() {
         if (this.productId) {
            this.updateProductData(this.productData)
         } else
            this.createProduct({
               productData: this.productData,
               categoryName: this.currentCategory.name,
            })
      },
   },
   created() {
      if (this.productId) {
         this.productData = { ...this.getProductById(this.productId) }
      }
   },
}
</script>

<style lang="scss" scoped>
input {
   outline: 2px solid green;
   border-radius: toRem(6);
   text-align: center;
   padding: toRem(5) toRem(10);
}
.edit-data {
   display: flex;
   flex-direction: column;
   gap: toRem(15);
   max-width: toRem(500);
   margin: 0 auto;
   align-items: center;
}
label {
   display: flex;
   flex-direction: column;
   gap: toRem(5);
   width: 100%;
}
.button {
   text-align: center;
   border: 2px solid black;
   border-radius: toRem(7);
   width: toRem(70);
   background-color: greenyellow;
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
h2 {
   color: black;
   font-size: toRem(30);
   margin-bottom: toRem(30);
}
.buttons {
   display: flex;
   gap: toRem(20);
}
</style>
