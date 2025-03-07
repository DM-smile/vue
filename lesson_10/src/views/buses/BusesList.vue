<template>
   <div class="head">
      <h1>{{ sectionTitle }}</h1>
   </div>

   <div class="content">
      <div v-if="busesList.length" class="titles">
         <h2>Номер</h2>
         <h2>Кількість місць</h2>
      </div>
      <h2 v-else>Список порожній</h2>
      <ul>
         <li v-for="bus in busesList" :key="bus.id">
            <div class="item">
               <div>
                  <button class="btn-el" @click="onEdit(bus.id)" title="Редагувати елемент">
                     ✎
                  </button>
                  <button class="btn-el" @click="delBus(bus.id)" title="Видалити елемент">
                     🗑️
                  </button>
               </div>
               <router-link
                  class="item-name"
                  :to="{ name: 'busDetails', params: { id: bus.id } }"
                  >{{ bus.name }}</router-link
               >
            </div>
            <span>{{ bus.numOfSeats }}</span>
         </li>
      </ul>
      <div class="btns">
         <button @click="onAdd()" class="button">{{ addButtonTitle }}</button>
         <button @click="onAddTestList()" class="button">Додати тестові дані</button>
      </div>
   </div>
</template>

<script>
import { button, title } from '@/mixins/commonMixins'
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'BusesList',
   mixins: [button, title],
   computed: {
      ...mapGetters('busesStore', { busesList: 'getItemsList' }),
      ...mapGetters('commonStore', { busesTestList: 'getBusesDataTest' }),
   },
   methods: {
      ...mapActions('busesStore', {
         delBus: 'deleteItem',
         loadBusesList: 'loadItemsList',
         addTestList: 'addNewItem',
      }),
      onAdd() {
         this.$router.push({ name: 'busEdit' })
      },
      onEdit(busId) {
         this.$router.push({ name: 'busEdit', params: { id: busId } })
      },
      onAddTestList() {
         const busesList = this.busesTestList
         for (const bus of busesList) {
            this.addTestList(bus)
         }
         this.loadBusesList()
      },
   },
   created() {
      this.loadBusesList()
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
