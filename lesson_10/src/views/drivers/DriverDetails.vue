<template>
   <h1>
      Карточка водія <span>{{ currentDriver.name }}</span>
   </h1>
   <div class="driver">
      <div class="driver__photo">
         <img :src="currentDriver.photo" class="ibg" />
      </div>
      <div class="driver__info">
         <h2>ПІБ: {{ currentDriver.name }}</h2>
         <h2>Стаж роботи: {{ currentDriver.experience }} р.</h2>
         <h2>Додаткова інформація <span v-if="!currentDriver.info">відсутня</span></h2>
         <p>{{ currentDriver.info }}</p>
      </div>
   </div>
   <button @click="onBack" class="button">Повернутись <=</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'DriverDetails',
   computed: {
      ...mapGetters('driversStore', { currentDriver: 'getCurrentItem' }),
      currentItemId() {
         return this.$route.params.id
      },
   },
   methods: {
      ...mapActions('driversStore', { loadDriverById: 'loadItemById' }),
      onBack() {
         this.$router.push({ name: 'drivers' })
      },
   },
   created() {
      if (this.currentItemId) {
         this.loadDriverById(this.currentItemId)
      }
   },
}
</script>

<style lang="scss" scoped>
.driver {
   display: flex;
   gap: toRem(20);
   max-height: toRem(400);
   &__photo {
      width: toRem(100);
      height: toRem(400);
      flex: 0 0 50%;
      background-image: url('https://setam.net.ua/images/compat/big/2000.jpg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
   }
   &__info {
      display: flex;
      flex-direction: column;
      flex: 0 0 50%;
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
