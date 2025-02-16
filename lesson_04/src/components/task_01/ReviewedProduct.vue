<template>
   <div class="item">
      <div>
         <div class="heart">
            <img src="@/assets/img/heart.png" alt="img" />
         </div>
         <div class="product-photo">
            <img :src="productData.photo" alt="img" />
         </div>
      </div>
      <div class="item-info">
         <div class="item-title">{{ productData.title }}</div>
         <div class="review">
            <img src="@/assets/img/icon.png" alt="icon" />
            <span>Залишити відгук</span>
         </div>
         <div v-if="productData.availability" class="availability">
            Є в наявності
         </div>
         <div v-else class="availability-none">Немає в наявності</div>
         <div class="price">
            <div class="price__list">
               <div :class="{ action: productData.action }">
                  {{ productData.oldPrice }} ₴
               </div>
               <div
                  v-if="productData.action"
                  :class="{ red: productData.action }"
               >
                  {{ productData.newPrice }} ₴
               </div>
            </div>
            <img src="@/assets/img/cart.png" alt="img" />
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "ReviewedProduct",
   props: {
      productData: {
         type: Object,
         reqoired: true,
      },
      data() {
         return {
            action: "",
         }
      },
   },
}
</script>

<style lang="scss" scoped>
.item {
   max-width: 300px;
   padding: 10px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 10px;
}
.heart {
   display: flex;
   justify-content: flex-end;
}
.product-photo {
   text-align: center;
}
.item-title {
   font-size: 20px;
}
.review {
   font-size: 14px;
   display: flex;
   align-items: center;
   gap: 5px;
   & span {
      cursor: pointer;
      transition: transform 0.2s;
      &:hover {
         transform: scale(1.05);
      }
   }
}
.availability {
   font-size: 14px;
}
.price {
   display: flex;
   justify-content: space-between;
}
.cart {
   display: flex;
   justify-content: flex-end;
}
.heart {
   img {
      cursor: pointer;
   }
}
.price {
   img {
      cursor: pointer;
   }
}
.action {
   text-decoration: line-through;
}
.red {
   color: red;
}
.item-info {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 7px;
}
</style>
