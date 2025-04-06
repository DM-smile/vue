<template>
   <div class="content">
      <h1>Наші водії</h1>
      <div class="titles">
         <div>
            ПІБ
            <v-btn class="sort-btn" size="small" @click="sort('name')">
               <font-awesome-icon :icon="iconNameSort" />
            </v-btn>
         </div>
         <div>
            Стаж
            <v-btn class="sort-btn" size="small" @click="sort('exp')">
               <font-awesome-icon :icon="iconExpSort" />
            </v-btn>
         </div>
      </div>

      <ol>
         <li v-for="driver in driversListByCyrillic" :key="driver.id">
            <span>{{ driver.name }}</span>
            <div class="list-buttons">
               <span>{{ driver.experience }} р.</span>
               <v-btn size="small" @click="editDriver(driver.id)" title="редагувати">
                  <font-awesome-icon :icon="['fas', 'pencil']" />
               </v-btn>
               <v-btn size="small" @click="onDelete(driver.id)" title="видалити">
                  <font-awesome-icon :icon="['fas', 'trash']" />
               </v-btn>
            </div>
         </li>
      </ol>
      <v-btn variant="outlined" @click="addDriver()">Додати водія</v-btn>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'DriversView',
   data() {
      return {
         nameSort: null,
         expSort: null,
      }
   },
   computed: {
      ...mapGetters('drivers', {
         driversList: 'getItemsList',
      }),
      iconNameSort() {
         if (this.nameSort === 'asc') return ['fas', 'arrow-down-a-z']
         else if (this.nameSort === 'desc') return ['fas', 'arrow-up-a-z']
         else return ['fas', 'sort']
      },
      iconExpSort() {
         if (this.expSort === 'asc') return ['fas', 'arrow-down-1-9']
         else if (this.expSort === 'desc') return ['fas', 'arrow-up-1-9']
         else return ['fas', 'sort']
      },
      getOrder() {
         if (this.nameSort) return 'name'
         if (this.expSort) return 'experience'
         return null
      },
      getOrderType() {
         return this.nameSort || this.expSort
      },
      queryOptions() {
         return {
            orderBy: this.getOrder,
            orderType: this.getOrderType,
         }
      },
      driversListByCyrillic() {
         const list = [...this.driversList]
         if (this.nameSort) {
            list.sort((a, b) => {
               return (
                  a.name.localeCompare(b.name, 'uk', { sensitivity: 'base' }) *
                  (this.nameSort === 'desc' ? -1 : 1)
               )
            })
         } else if (this.expSort) {
            list.sort((a, b) => {
               return (a.experience - b.experience) * (this.expSort === 'desc' ? -1 : 1)
            })
         }
         return list
      },
   },
   methods: {
      ...mapActions('drivers', { loadDriversList: 'loadList', deleteDriver: 'deleteItem' }),
      addDriver() {
         this.$router.push({ name: 'driverEdit' })
      },
      editDriver(id) {
         this.$router.push({
            name: 'driverEdit',
            params: { driverId: id },
         })
      },
      onDelete(id) {
         this.deleteDriver(id)
      },
      sort(type) {
         if (type === 'name') {
            if (!this.nameSort) this.nameSort = 'desc'
            this.nameSort === 'asc' ? (this.nameSort = 'desc') : (this.nameSort = 'asc')
            this.expSort = null
         } else if (type === 'exp') {
            if (!this.expSort) this.expSort = 'desc'
            this.expSort === 'asc' ? (this.expSort = 'desc') : (this.expSort = 'asc')
            this.nameSort = null
         }
         this.loadDriversList(this.queryOptions)
      },
   },
   created() {
      this.loadDriversList()
   },
}
</script>

<style lang="scss" scoped>
h1 {
   margin-bottom: toRem(10);
}
</style>
