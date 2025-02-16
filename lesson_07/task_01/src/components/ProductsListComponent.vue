<template>
   <div class="wrapper">
      <div class="content">
         <div>
            <label for="currency">Виберіть валюту</label>
            <select name="currency" id="currency" v-model="currency">
               <option value="grn" selected>Гривня</option>
               <option value="usd">Долар (курс {{ dollarRate }})</option>
            </select>
            <h2>Список товарів</h2>
            <ul>
               <li v-for="product in productsList" :key="product.id">
                  {{ product.name }}
                  <span
                     >{{ getProductPrice(product.price) }}
                     <button @click="addToCart(product.id)">
                        Купити
                     </button></span
                  >
               </li>
            </ul>
         </div>
      </div>
      <div class="cart-block">
         <div>
            <h2>Кошик <span v-if="!cartList.length">пустий</span></h2>
            <ul>
               <li v-for="product in cartList" :key="product.id">
                  {{ product.name }}
                  <span
                     >{{ getProductPrice(product.price)
                     }}<button @click="removeFromCart(product.id)">
                        Відмовитись
                     </button></span
                  >
               </li>
            </ul>
         </div>
         <div class="buy">
            Разом до оплати
            <span
               >{{ totalPrice
               }}<button @click="payForThePurchase">Оплатити</button></span
            >
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'ProductsListComponent',
   data() {
      return {
         currency: 'grn',
      }
   },
   computed: {
      ...mapGetters([
         'productsList',
         'cartList',
         'cartTotal',
         'dollarRate',
         'grnRate',
      ]),
      totalPrice() {
         return this.currency === 'usd'
            ? (this.cartTotal / this.dollarRate).toFixed(2) + ' $'
            : this.cartTotal + ' ₴'
      },
   },
   methods: {
      ...mapActions(['addToCart', 'removeFromCart', 'cleanCart']),
      payForThePurchase() {
         if (this.cartList.length) {
            alert(
               `Куплено товарів: ${this.cartList.length} \nНа суму: ${this.totalPrice}`
            )
            this.cleanCart()
         } else {
            alert('В кошику відсутні товари для покупки!')
         }
      },
      getProductPrice(price) {
         if (this.currency === 'usd') {
            return (price / this.dollarRate).toFixed(2) + ' $'
         }
         return price + ' ₴'
      },
   },
}
</script>

<style lang="scss" scoped>
button {
   margin-left: 10px;
   cursor: pointer;
}
.wrapper {
   display: flex;
   gap: 30px;
   border: 3px solid white;
   padding: 10px;
   min-height: 400px;
   & div {
      display: flex;
      flex-direction: column;
      border: 1px solid white;
      padding: 10px;
      gap: 10px;
      min-width: 350px;
   }
   ul {
      padding: 0;
   }
   li {
      display: flex;
      justify-content: space-between;
   }
   .cart-block {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }
   .buy {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
   }
}
</style>
