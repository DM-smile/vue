<template>
   <div class="head">
      <h1>{{ sectionTitle }}</h1>
   </div>

   <div class="content">
      <div v-if="apptsList.length" class="titles">
         <h2>Шофер</h2>
         <h2>Номер автобуса</h2>
      </div>
      <h2 v-else>Список порожній</h2>
      <ul>
         <li v-for="appt in apptsList" :key="appt.id">
            <div class="item">
               <div>
                  <button class="btn-el" @click="deleteItem(appt.id)" title="Видалити елемент">
                     🗑️
                  </button>
               </div>
               <div class="item-name">{{ appt.driver.name }}</div>
            </div>
            <span>{{ appt.bus.name }}</span>
         </li>
      </ul>
      <div class="add-new-appt">
         <h2 class="add-new-appt__title">Додати призначення</h2>
         <label
            >Шофер
            <select name="driver" v-model="itemData.driver">
               <option value="">Не обрано</option>
               <option v-for="driver in driversList" :key="driver.id" :value="driver">
                  {{ driver.name }}
               </option>
            </select>
         </label>
         <label
            >Автобус
            <select name="bus" v-model="itemData.bus">
               <option value="">Не обрано</option>
               <option v-for="bus in busesList" :key="bus.id" :value="bus">
                  {{ bus.name }}
               </option>
            </select>
         </label>
      </div>
      <button @click="onAdd()" class="button">{{ addButtonTitle }}</button>
   </div>
</template>

<script>
import { button, title } from '@/mixins/commonMixins'
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'AppointmentsList',
   mixins: [button, title],
   data() {
      return {
         itemData: {
            driver: '',
            bus: '',
         },
      }
   },
   computed: {
      ...mapGetters('appointmentsStore', { apptsList: 'getItemsList' }),
      ...mapGetters('busesStore', { busesList: 'getItemsList' }),
      ...mapGetters('driversStore', { driversList: 'getItemsList' }),
   },
   methods: {
      ...mapActions('appointmentsStore', {
         deleteItem: 'deleteItem',
         loadIapptsList: 'loadItemsList',
         addNewAppointment: 'addNewItem',
      }),
      ...mapActions('busesStore', {
         loadBusesList: 'loadItemsList',
      }),
      ...mapActions('driversStore', {
         loadDriversList: 'loadItemsList',
      }),
      onAdd() {
         if (this.itemData.driver && this.itemData.bus) {
            this.addNewAppointment(this.itemData)
            this.loadIapptsList()
            this.itemData = {
               driver: '',
               bus: '',
            }
         }
      },
   },
   created() {
      this.loadIapptsList()
      this.loadBusesList()
      this.loadDriversList()
   },
}
</script>

<style lang="scss" scoped>
.add-new-appt {
   margin-bottom: toRem(20);
   // .add-new-appt__title

   &__title {
      margin-bottom: toRem(10);
   }
}
label {
   display: flex;
   justify-content: space-between;
   &:not(:last-child) {
      margin-bottom: toRem(10);
   }
   & > *:last-child {
      flex-basis: 70%;
   }
}

.head {
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: toRem(50);
}
.content {
   width: toRem(400);
   margin: 0 auto;
}
li {
   display: flex;
   width: 100%;
   justify-content: space-between;
}
.titles {
   font-size: toRem(24);
   margin-bottom: toRem(20);
   display: flex;
   width: 100%;
   justify-content: space-between;
}
.item {
   display: flex;
   gap: toRem(10);
}
.btn-el {
   @media (any-hover: hover) {
      transition: all 0.1s;
      &:hover {
         transform: scale(1.3);
      }
   }
}
ul {
   &::after {
      content: '';
      width: 100%;
      height: toRem(1);
      background-color: gray;
   }
}
select {
   background-color: rgb(237, 247, 239);
   width: 100%;
   border: toRem(1) solid grey;
   border-radius: toRem(4);
   font-size: toRem(16);
}
</style>
