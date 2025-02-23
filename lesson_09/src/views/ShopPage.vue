<template>
   <div>
      <h1>Список товарів:</h1>
      <ul>
         <li v-for="item in productsListAll" :key="item.name">
            <router-link
               :to="{
                  name: 'products',
                  params: { products: item.name },
               }"
               >{{ item.title }}</router-link
            >
         </li>
      </ul>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
   name: 'ShopPage',
   computed: {
      ...mapGetters(['productsListAll']),
   },
}
</script>

<style lang="scss" scoped>
h1 {
   font-size: toRem(30);
   margin-bottom: toRem(30);
}
ul {
   display: flex;
   flex-direction: column;
   gap: toRem(7);
}
li {
   @media (any-hover: hover) {
      padding: toRem(5);
      & > * {
         transition: all 0.2s;
         &:hover {
            text-decoration: underline;
            color: rgb(177, 2, 2);
         }
      }
   }
}
</style>
