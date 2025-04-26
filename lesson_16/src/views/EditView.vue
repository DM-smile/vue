<template>
   <div class="edit">
      <h2 v-if="id">{{ $t('titles.edit') }}: {{ currentProduct?.name }}</h2>
      <h2 v-else>{{ $t('titles.editNew') }}</h2>
      <label>
         <span>{{ $t('form.brand') }}</span>
         <input type="text" v-model.lazy="productData.brand" />
      </label>
      <label>
         <span>{{ $t('form.title') }}</span>
         <input type="text" v-model.lazy="productData.name" />
      </label>
      <label>
         <span>{{ $t('form.price') }}</span>
         <input type="number" v-model.lazy="productData.price" />
      </label>
      <label>
         <span>{{ $t('form.photo') }}</span>
         <input type="text" v-model.lazy="productData.image" />
      </label>
      <label class="mgb-20">
         <span>{{ $t('form.seller') }}</span>
         <select v-model="productData.seller">
            <option value="Rozetka" selected>{{ $t('form.rozetka') }}</option>
            <option value="Інші продавці">{{ $t('form.other') }}</option>
         </select>
      </label>
      <div class="form-action">
         <button @click="onSave">{{ $t('buttons.save') }}</button>
         <button @click="onCancel">{{ $t('buttons.cancel') }}</button>
         <button @click="onClear">{{ $t('buttons.clear') }}</button>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'EditView',
   props: {
      id: {
         type: String,
         required: false,
      },
   },
   data() {
      return {
         productData: { seller: 'Rozetka' },
      }
   },
   computed: {
      ...mapGetters('productsList', { currentProduct: 'getCurrentItem' }),
   },
   methods: {
      ...mapActions('productsList', {
         addProduct: 'addItem',
         updateProductData: 'updateItem',
         loadProductData: 'loadItemDataById',
      }),
      onSave() {
         if (this.productData) {
            if (this.id) {
               this.updateProductData({ itemId: this.id, data: this.productData })
            } else {
               this.addProduct(this.productData)
            }
            this.$router.push({ name: 'home' })
         }
      },
      onClear() {
         this.productData = { seller: 'Rozetka' }
      },
      onCancel() {
         this.$router.push({ name: 'home' })
      },
   },
   watch: {
      currentProduct: {
         handler(newValue) {
            if (newValue) {
               this.productData = {
                  brand: newValue.brand,
                  name: newValue.name,
                  price: newValue.price,
                  seller: newValue.seller,
                  image: newValue.image,
               }
            }
         },
      },
   },
   created() {
      if (this.id) {
         this.loadProductData(this.id)
      }
   },
}
</script>

<style lang="scss" scoped></style>
