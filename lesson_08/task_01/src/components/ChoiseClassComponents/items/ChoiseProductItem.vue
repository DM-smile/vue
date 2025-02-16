<template>
   <label class="item">
      <div class="item__body">
         <input
            type="radio"
            name="product"
            :value="productClass.classValue"
            @change="updateChoiseClass"
         />
         <img :src="productClass.classImage" alt="image" />
      </div>
      <h4>{{ productClass.productClassName }}</h4>
   </label>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'ChoiseProductItem',
   props: {
      productClass: {
         type: Object,
         default: () => ({}),
      },
   },
   computed: {
      ...mapGetters(['getChoiseClassList']),
   },
   methods: {
      ...mapActions(['setChoiseClassList']),
      updateChoiseClass() {
         const val = this.productClass.classValue
         this.setChoiseClassList(val)
      },
   },
}
</script>

<style lang="scss" scoped>
.item {
   width: 100px;
   height: 130px;
   display: flex;
   flex-direction: column;
   gap: 15px;
   text-align: center;
   cursor: pointer;
   justify-content: space-between;
   flex-shrink: 0;
   // .item__body

   &__body {
      position: relative;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      & img {
         width: 100%;
         height: 100%;
         object-fit: cover;
         border-radius: 50%;
      }
   }
   h4 {
      font-size: 15px;
   }
}
input[type='radio'] {
   cursor: pointer;
   appearance: none;
   -webkit-appearance: none;
   -moz-appearance: none;
   width: 100%;
   height: 100%;
   border-radius: 50%;
   position: absolute;
   &:checked {
      outline: 5px solid red;
      transform: scale(1.1);
   }
}
</style>
