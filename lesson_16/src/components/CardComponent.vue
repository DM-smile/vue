<template>
   <div class="card">
      <div class="card__image">
         <img :src="card.image" alt="image" class="ibg ibg--contain" />
      </div>
      <div class="card__info">
         <div class="card__title">{{ card.name }}</div>
         <div class="card__price">{{ card.price }} {{ $t('labels.price') }}</div>
         <div class="card__seller">{{ $t('titles.seller') }}: {{ card.seller }}</div>
         <div class="action-card-block">
            <button v-if="userPermissions.write" @click="onEdit(card.id)">
               {{ $t('buttons.edit') }}
            </button>
            <button v-if="userPermissions.write" @click="onDelete(card.id)">
               {{ $t('buttons.delete') }}
            </button>
            <button @click="addToCart">{{ $t('buttons.buy') }}</button>
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'CardComponent',
   props: {
      card: {
         type: Object,
         default: () => {},
      },
   },
   computed: {
      ...mapGetters('users', ['userPermissions']),
      ...mapGetters('auth', ['getUser']),
   },
   methods: {
      ...mapActions('productsList', ['deleteItem']),
      ...mapActions(['setCounter']),
      addToCart() {
         if (this.getUser) this.setCounter()
         else this.$router.push({ name: 'login' })
      },
      onDelete(id) {
         this.deleteItem(id)
      },
      onEdit(id) {
         this.$router.push({ name: 'edit', params: { id } })
      },
   },
}
</script>

<style lang="scss" scoped></style>
