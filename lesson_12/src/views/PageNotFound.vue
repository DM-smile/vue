<template>
   <div>
      <h1>Сторінка не знайдена</h1>
   </div>
   <div class="img">
      <img
         class="ibg"
         src="https://hostiq.ua/wiki/wp-content/uploads/2021/05/03-error-404-not-found.png"
         alt="#"
      />
   </div>
   <button @click="toHome">Повернутись на головну</button>
</template>

<script>
export default {
   name: 'PageNotFound',
   methods: {
      toHome() {
         this.$router.push({ name: 'home' })
      },
   },
}
</script>

<style lang="scss" scoped>
.img {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
}
button {
   position: absolute;
   bottom: toRem(100);
   z-index: 5;
   left: 50%;
   transform: translateX(-50%);
   border-radius: toRem(15);
   @media (any-hover: hover) {
      &:hover {
         text-decoration: underline;
      }
   }
}
</style>
