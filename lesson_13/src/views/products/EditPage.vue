<template>
   <div class="body">
      <input type="text" placeholder="Назва товару" v-model.lazy="addProductData.title" />
      <input type="text" placeholder="Посилання на фото" v-model.lazy="addProductData.image" />
      <input type="text" placeholder="Тип продукту" v-model.lazy="addProductData.type" />
      <input type="text" placeholder="Ціна" v-model.lazy="addProductData.info" />
      <button @click="ok">Додати товар</button>
   </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
   name: 'EditPage',
   data() {
      return {
         addProductData: {
            title: null,
            image: null,
            info: null,
            type: null,
         },
      }
   },
   methods: {
      ...mapActions(['addProduct', 'filter']),
      ok() {
         const title = this.addProductData.title
         const info = this.addProductData.info
         const type = this.addProductData.type
         if (title && info && type) {
            this.addProduct(this.addProductData)
            this.addProductData = {}
            this.filter([])
         }
      },
   },
}
</script>

<style lang="scss" scoped>
.body {
   display: flex;
   flex-direction: column;
   gap: toRem(2);
}
input,
button {
   border: toRem(1) solid black;
   width: toRem(400);
}
button {
   background-color: greenyellow;
}
</style>
