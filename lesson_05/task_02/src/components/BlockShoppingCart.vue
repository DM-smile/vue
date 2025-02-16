<template>
   <div :class="{ visible: clicked, hidden: !clicked }" class="container">
      <div class="header">
         <button @click="clickOnCart" class="close" title="Закрити кошик">
            Х
         </button>
      </div>
      <div class="content">
         <product-component-for-cart
            v-for="item in itemsInCart"
            :key="item.id"
            :item-data="item"
            @remove-item="removeItem(item.id)"
         />
      </div>

      <div v-if="!itemsInCart.length" class="cart-empty">Кошик пустий</div>
      <div v-if="itemsInCart.length" class="footer">
         <h3>Загальна сума: {{ totalPrice }} ₴</h3>
         <button @click="sendOrder" class="send-order">
            Сформувати замовлення
         </button>
      </div>
   </div>
</template>

<script>
import ProductComponentForCart from "./ProductComponentForCart.vue"
export default {
   name: "BlockShoppingCart",
   components: { ProductComponentForCart },
   props: {
      itemsInCart: {
         type: Array,
         default: () => [],
      },
      clicked: Boolean,
      data() {
         return {
            close: false,
         }
      },
   },
   computed: {
      totalPrice() {
         return this.itemsInCart
            .reduce((sum, item) => sum + item.priceNew, 0)
            .toFixed(2)
      },
   },
   methods: {
      clickOnCart() {
         this.$emit("click-on-cart")
      },
      removeItem(itemId) {
         this.$emit("remove-item", itemId)
      },
      sendOrder() {
         this.$emit("clean-list")
         alert("Дякуємо за замовлення!")
      },
   },
}
</script>

<style lang="scss" scoped>
.container {
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background-color: rgba(189, 244, 242, 0.968);
   width: 860px;
   height: 80%;
   border-radius: 15px;
   color: white;
   border: 5px solid black;
}
.content {
   height: 80%;
   overflow: auto;
}
.footer {
   height: 100px;
   background-color: rgba(232, 234, 205, 0.968);
   position: fixed;
   bottom: 0;
   left: 0;
   border-radius: 0 0 15px 15px;
   color: black;
   padding: 0 40px;
   font-size: 24px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 90.5%;
}
.header {
   position: fixed;
   width: 30px;
   top: 7px;
   left: 95%;
   z-index: 10;
}
.send-order {
   background-color: rgb(128, 189, 36);
   height: 40px;
   font-size: 20px;
   border-radius: 10px;
   transition: all 0.2s;
   color: white;
   cursor: pointer;
   &:hover {
      color: black;
      background-color: greenyellow;
   }
}
.close {
   right: 0;
   background-color: red;
   border-radius: 50%;
   font-size: 24px;
   border: 4px solid black;
   cursor: pointer;
   transition: all 0.2s;
   &:hover {
      transform: scale(1.2);
   }
}
.visible {
   visibility: visible;
}
.hidden {
   visibility: hidden;
}
.cart-empty {
   background-color: red;
   font-size: 40px;
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100px;
   position: absolute;
   width: 100%;
   top: 50%;
   transform: translateY(-50%);
}
</style>
