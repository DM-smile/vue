<template>
   <div class="filter">
      <label v-for="product in products" :key="product.type">
         <input
            type="checkbox"
            :value="product.type"
            v-model="selectedTypes"
            @change="applyFilter"
         />
         {{ product.type }}
      </label>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'FilterPage',
   data() {
      return {
         selectedTypes: [],
      }
   },
   computed: {
      ...mapGetters(['productsList']),
      products() {
         return this.productsList
      },
   },
   methods: {
      ...mapActions(['filter']),
      applyFilter() {
         this.filter(this.selectedTypes)
      },
   },
   created() {
      this.applyFilter()
   },
}
</script>

<style lang="scss" scoped>
.filter {
   display: flex;
   gap: 10px;
   flex-wrap: wrap;
}
input {
   width: 0;
   height: 0;
}
label {
   display: inline-block;
   padding: 10px 15px;
   border: 2px solid transparent;
   cursor: pointer;
   transition: border 0.3s ease-in-out;
   border-radius: 40%;
   background-color: #ebf2fb;
}
label:has(input:checked) {
   border: 2px solid #f60000;
}
</style>
