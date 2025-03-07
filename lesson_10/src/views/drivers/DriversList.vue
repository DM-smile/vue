<template>
   <div class="head">
      <h1>{{ sectionTitle }}</h1>
      <div>
         <drivers-filter-component />
      </div>
   </div>

   <div class="content">
      <div v-if="driversList.length" class="titles">
         <h2>ПІБ</h2>
         <h2>Стаж</h2>
      </div>
      <h2 v-else>Не знайдено</h2>
      <ul>
         <li v-for="driver in driversList" :key="driver.id">
            <div class="item">
               <div>
                  <button class="btn-el" @click="onEdit(driver.id)" title="Редагувати елемент">
                     ✎
                  </button>
                  <button class="btn-el" @click="onDelete(driver.id)" title="Видалити елемент">
                     🗑️
                  </button>
               </div>
               <router-link
                  class="item-name"
                  :to="{ name: 'driverDetails', params: { id: driver.id } }"
                  >{{ driver.name }}</router-link
               >
            </div>
            <span>{{ driver.experience }} р.</span>
         </li>
      </ul>
      <div class="btns">
         <button @click="onAdd()" class="button">{{ addButtonTitle }}</button>
         <button @click="onAddTestList()" class="button">Додати тестові дані</button>
      </div>
   </div>
</template>

<script>
import DriversFilterComponent from '@/components/DriversFilterComponent.vue'
import { button, title } from '@/mixins/commonMixins'
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'DriversList',
   mixins: [button, title],
   components: {
      DriversFilterComponent,
   },
   computed: {
      ...mapGetters('commonStore', { driversTestList: 'getDriversDataTest' }),
      ...mapGetters('filtersStore', { driversList: 'getFilteredList' }),
   },
   methods: {
      ...mapActions('driversStore', {
         delDrider: 'deleteItem',
         loadDriversList: 'loadItemsList',
         addTestList: 'addNewItem',
      }),
      onDelete(id) {
         this.delDrider(id)
         this.driversFilter('')
      },
      ...mapActions('filtersStore', ['driversFilter']),
      onAdd() {
         this.$router.push({ name: 'driverEdit' })
      },
      onEdit(driverId) {
         this.$router.push({ name: 'driverEdit', params: { id: driverId } })
      },
      onAddTestList() {
         const driversList = this.driversTestList
         for (const driver of driversList) {
            this.addTestList(driver)
         }
         this.loadDriversList()
         this.driversFilter('')
      },
   },
   created() {
      this.loadDriversList()
      this.driversFilter('')
   },
}
</script>

<style lang="scss" scoped>
.btns {
   display: flex;
   gap: toRem(20);
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
.item-name {
   @media (any-hover: hover) {
      transition: all 0.3s;
      &:hover {
         color: red;
      }
   }
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
</style>
