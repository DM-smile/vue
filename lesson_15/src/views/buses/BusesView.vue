<template>
   <div class="content">
      <h1>Наші Автобуси</h1>
      <div class="titles">
         <div>Номер</div>
         <div>Кількість місць</div>
      </div>
      <div class="sort-buses">
         <div>
            <label
               >Сортування:
               <select name="seats" v-model="sortSeats">
                  <option value="" selected>Не відсортовано</option>
                  <option value="asc">За зростанням</option>
                  <option value="desc">Спаданням</option>
               </select>
            </label>
         </div>
      </div>
      <ol>
         <li v-for="bus in busesList" :key="bus.id">
            <span>{{ bus.number }}</span>
            <div class="list-buttons">
               <span>{{ bus.seats }} місць</span>
               <v-btn size="small" @click="editBus(bus.id)" title="редагувати">
                  <font-awesome-icon :icon="['fas', 'pencil']" />
               </v-btn>
               <v-btn size="small" @click="onDelete(bus.id)" title="видалити">
                  <font-awesome-icon :icon="['fas', 'trash']" />
               </v-btn>
            </div>
         </li>
      </ol>
      <v-btn variant="outlined" @click="addBus()">Додати автобус</v-btn>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'BusesView',
   data() {
      return {
         sortSeats: '',
      }
   },
   computed: {
      ...mapGetters('buses', {
         busesList: 'getItemsList',
         isLoading: 'isLoading',
         hasError: 'hasError',
      }),
      queryOptions() {
         return {
            orderBy: 'seats',
            orderType: this.sortSeats,
         }
      },
   },
   methods: {
      ...mapActions('buses', { loadBusesList: 'loadList', deleteBus: 'deleteItem' }),
      addBus() {
         this.$router.push({ name: 'busEdit' })
      },
      editBus(id) {
         this.$router.push({
            name: 'busEdit',
            params: { busId: id },
         })
      },
      onDelete(id) {
         this.deleteBus(id)
      },
   },
   created() {
      this.loadBusesList()
   },
   watch: {
      sortSeats() {
         this.loadBusesList(this.queryOptions)
      },
   },
}
</script>

<style lang="scss" scoped></style>
