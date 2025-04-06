<template>
   <div class="content">
      <h1>Додавання призначення</h1>
      <Form class="form" @submit="onSubmit" :key="formKey">
         <div class="form-body">
            <label for="driver">Шофер</label>
            <Field as="select" name="driver" id="driver" class="input">
               <option value="" disabled selected>Не обрано</option>
               <option v-for="driver in driversList" :key="driver.id" :value="driver.id">
                  {{ driver.name }}
               </option>
            </Field>
            <label for="bus">Автобус:</label>
            <Field as="select" name="numberBus" id="bus" class="input">
               <option value="" disabled selected>Не обрано</option>
               <option v-for="bus in busesList" :key="bus.id" :value="bus.id">
                  {{ bus.number }}
               </option>
            </Field>
         </div>
         <div class="action-block">
            <v-btn type="submit">Зберегти</v-btn>
            <v-btn @click="onCancel">Відміна</v-btn>
         </div>
      </Form>
   </div>
</template>

<script>
import { Form, Field } from 'vee-validate'
import { mapActions, mapGetters } from 'vuex'
import * as yup from 'yup'
export default {
   components: {
      Form,
      Field,
   },
   name: 'Edit',
   data() {
      return {
         schema: yup.object({
            driver: yup.string().required('Оберіть водія'),
            bus: yup.string().required('Оберіть автобус'),
         }),
         formKey: 0,
      }
   },
   computed: {
      ...mapGetters('drivers', { driversList: 'getItemsList' }),
      ...mapGetters('buses', { busesList: 'getItemsList' }),
   },
   methods: {
      ...mapActions('drivers', { loadDriversList: 'loadList' }),
      ...mapActions('buses', { loadBusesList: 'loadList' }),
      ...mapActions('appointments', { addNewAppointment: 'addItem' }),
      async onSubmit(values) {
         try {
            await this.addNewAppointment(values)
            this.$router.push({ name: 'appointments' })
         } catch {
            alert()
         }
      },
      onCancel() {
         this.$router.push({ name: 'appointments' })
      },
   },
   created() {
      this.loadDriversList()
      this.loadBusesList()
   },
}
</script>

<style lang="scss" scoped></style>
