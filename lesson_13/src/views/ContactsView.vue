<template>
   <main-layout>
      <template #header>
         <header-secondary-comp />
      </template>
      <template #main>
         <h1 class="mb">Наші контакти:</h1>
         <p>Адреса магазину: біля юудинку Баби Галі</p>
         <p>Менеджер: Дід Петро</p>
         <p>Заступник: онука Софійка</p>
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
   name: 'ContactsView',
   components: { GalleryComp, HeaderSecondaryComp },
}
</script>

<style lang="scss" scoped></style>
