<template>
   <div class="content" :is-loading="isLoading" :has-error="hasError">
      <h1>Призначення</h1>
      <div class="titles">
         <div>Шофер</div>
         <div>Номер автобуса</div>
      </div>

      <ol>
         <li v-for="appointment in appointmentsWithDetails" :key="appointment.id">
            <span>{{ appointment.driverName }}</span>
            <div class="list-buttons">
               <span>{{ appointment.busNumber }}</span>
               <v-btn size="small" @click="onDelete(appointment.id)">
                  <font-awesome-icon :icon="['fas', 'trash']" title="видалити" />
               </v-btn>
            </div>
         </li>
      </ol>
      <v-btn variant="outlined" @click="addAppointment()">Додати призначення</v-btn>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'AppointmentsView',
   computed: {
      ...mapGetters('appointments', {
         appointmentsList: 'getItemsList',
         isLoading: 'isLoading',
         hasError: 'hasError',
      }),
      ...mapGetters('drivers', { getDriverById: 'getItemById' }),
      ...mapGetters('buses', { getBusById: 'getItemById' }),
      appointmentsWithDetails() {
         return this.appointmentsList.map((app) => ({
            ...app,
            driverName: this.getDriverById(app.driver)?.name || '[ВИДАЛЕНО]',
            busNumber: this.getBusById(app.numberBus)?.number || '[ВИДАЛЕНО]',
         }))
      },
   },
   methods: {
      ...mapActions('appointments', {
         loadAppointmentsList: 'loadList',
         deleteAppointment: 'deleteItem',
      }),
      ...mapActions('drivers', { loadDriversList: 'loadList' }),
      ...mapActions('buses', { loadBusesList: 'loadList' }),
      currentDriver(driverId) {
         const driver = this.getDriverById(driverId)
         return driver ? driver.name : 'Видалений'
      },
      currentBus(busId) {
         const bus = this.getBusById(busId)
         return bus ? bus.name : 'Видалений'
      },

      addAppointment() {
         this.$router.push({ name: 'appointmentEdit' })
      },
      onDelete(id) {
         this.deleteAppointment(id)
      },
   },
   created() {
      this.loadDriversList()
      this.loadBusesList()
      this.loadAppointmentsList()
   },
}
</script>

<style lang="scss" scoped></style>
