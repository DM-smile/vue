<template>
   <main-layout>
      <template #header>
         <header-secondary-comp />
      </template>
      <template #main>
         <div>
            <h1 class="mb">Правила купівлі:</h1>
            <p>* Купуємо багато</p>
            <p>* Платимо швидко</p>
            <p>* Насолоджуємось товаром</p>
         </div>
      </template>
      <template #footer>
         <gallery-comp />
      </template>
   </main-layout>
</template>

<script>
import GalleryComp from '@/components/GalleryComp.vue'
import HeaderSecondaryComp from '@/components/HeaderSecondaryComp.vue'

export default {
   name: 'ShoppingRules',
   components: { GalleryComp, HeaderSecondaryComp },
}
</script>

<style lang="scss" scoped></style>
