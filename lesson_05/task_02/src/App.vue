<template>
   <div class="body">
      <header-component
         @click-on-cart="clickOnCart"
         :counter="itemsInCart.length"
      />
      <block-with-goods @select="addToCart" />
      <block-shopping-cart
         :clicked="clicked"
         :items-in-cart="itemsInCart"
         @click-on-cart="clickOnCart"
         @remove-item="removeItem"
         @clean-list="cleanList"
      />
   </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue"
import BlockWithGoods from "./components/BlockWithGoods.vue"
import BlockShoppingCart from "./components/BlockShoppingCart.vue"

export default {
   name: "App",
   components: { BlockWithGoods, BlockShoppingCart, HeaderComponent },
   data() {
      return {
         itemsInCart: [],
         clicked: false,
      }
   },
   methods: {
      addToCart(item) {
         if (!this.itemsInCart.some((el) => el.id === item.id)) {
            this.itemsInCart.push(item)
         } else alert("Даний товар вже є в кошику!")
      },
      clickOnCart() {
         this.clicked = !this.clicked
      },
      removeItem(itemId) {
         this.itemsInCart = this.itemsInCart.filter((el) => el.id !== itemId)
      },
      cleanList() {
         this.itemsInCart = []
      },
   },
}
</script>

<style></style>
