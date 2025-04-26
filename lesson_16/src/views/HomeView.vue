<template>
   <div v-if="isLoading" class="loader">
      <img
         src="https://cdn.svgator.com/images/2023/06/spiral-css-preloader.gif"
         alt="loading"
         class="ibg loader"
      />
   </div>
   <div v-else-if="hasError" class="error">
      <img src="/src/assets/error404.png" alt="Error" class="ibg" />
   </div>
   <div v-else class="content">
      <button v-if="userPermissions.write" class="add-new-product" @click="onEdit()">
         {{ $t('buttons.addProduct') }}
      </button>
      <div class="body">
         <div v-if="getUser" class="filter">
            <filter-component />
         </div>
         <div class="products-list">
            <div class="empty-product" v-if="!emptyProductsList">{{ $t('titles.epmtyList') }}</div>
            <card-component v-for="card in productsList" :key="card.id" :card="card" />
         </div>
      </div>
   </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue'
import FilterComponent from '@/components/FilterComponent.vue'

import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'HomeView',
   components: {
      CardComponent,
      FilterComponent,
   },
   computed: {
      ...mapGetters('productsList', { productsList: 'getItemsList' }),
      ...mapGetters('productsList', ['isLoading', 'hasError']),
      ...mapGetters('auth', ['getUser']),
      ...mapGetters('users', ['userPermissions']),
      emptyProductsList() {
         return this.productsList.length
      },
   },
   methods: {
      ...mapActions('productsList', { loadProductsList: 'loadList' }),
      ...mapActions('auth', ['loginWithCredential']),
      onLogout() {
         this.logout()
         this.$router.push({
            name: 'login',
         })
      },
      onEdit() {
         this.$router.push({ name: 'edit' })
      },
   },
   created() {
      this.loadProductsList()
      this.loginWithCredential()
   },
}
</script>

<style lang="scss" scoped>
.body {
   display: flex;
   gap: toRem(20);
   justify-content: space-between;
   width: 100%;
}
.empty-product {
   color: red;
   font-size: toRem(40);
}
</style>
