<template>
   <header class="header">
      <slot name="header">
         <nav>
            <div class="nav-wrapper">
               <router-link :to="{ name: 'home' }">Головна</router-link>
               <router-link :to="{ name: 'products' }">Товари</router-link>
               <router-link :to="{ name: 'suppliers' }">Постачальники</router-link>
               <router-link :to="{ name: 'contacts' }">Контакти</router-link>
               <router-link :to="{ name: 'rules' }">Правила купівлі</router-link>
            </div>
         </nav>
      </slot>
   </header>
   <main class="main">
      <slot name="main"></slot>
   </main>
   <footer class="footer">
      <slot name="footer">
         <div>Рейтинг магазину: 54449</div>
         <div class="footer__body">
            Власник: Баба Галя
            <div class="image">
               <img
                  class="ibg"
                  src="https://img.freepik.com/free-vector/hand-drawn-old-lady-cartoon-cartoon-illustration_52683-115975.jpg"
                  alt="#"
               />
            </div>
         </div>
      </slot>
   </footer>
</template>

<script>
export default {
   name: 'MainLayout',
}
</script>

<style lang="scss" scoped></style>
