<template>
   <nav>
      <div class="nav-wrapper">
         <router-link :to="{ name: 'home' }">На головну</router-link>
      </div>
   </nav>
</template>

<script>
export default {
   name: 'HeaderSecondaryComp',
}
</script>

<style lang="scss" scoped></style>
