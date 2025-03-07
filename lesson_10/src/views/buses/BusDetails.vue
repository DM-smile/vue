<template>
   <h1>
      Дані автобуса <span>{{ currentBus.name }}</span>
   </h1>
   <div class="bus">
      <div class="bus__photo">
         <img :src="currentBus.photo" class="ibg ibg--contain" />
      </div>
      <div class="bus__info">
         <h2>Номер автобуса: {{ currentBus.name }}</h2>
         <h2>Кількість місць: {{ currentBus.numOfSeats }}</h2>
         <h2>Додаткова інформація <span v-if="!currentBus.info">відсутня</span></h2>
         <p v-if="currentBus.info">{{ currentBus.info }}</p>
      </div>
   </div>
   <button @click="onBack" class="button">Повернутись <=</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'BusDetails',
   computed: {
      ...mapGetters('busesStore', { currentBus: 'getCurrentItem' }),
      currentItemId() {
         return this.$route.params.id
      },
   },
   methods: {
      ...mapActions('busesStore', { loadBusById: 'loadItemById' }),
      onBack() {
         this.$router.push({ name: 'buses' })
      },
   },
   created() {
      if (this.currentItemId) {
         this.loadBusById(this.currentItemId)
      }
   },
}
</script>

<style lang="scss" scoped>
.bus {
   display: flex;
   gap: toRem(30);
   max-height: toRem(400);
   align-items: center;
   &__photo {
      width: toRem(100);
      height: toRem(150);
      flex: 0 0 50%;
      background-image: url('https://setam.net.ua/images/compat/big/2000.jpg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
   }
   &__info {
      display: flex;
      flex-direction: column;
      flex: 0 0 40%;
      gap: toRem(10);
      & p {
         overflow: scroll;
      }
   }
}
span:not(:last-child) {
   color: rgb(254, 0, 0);
   font-size: toRem(40);
}
</style>
