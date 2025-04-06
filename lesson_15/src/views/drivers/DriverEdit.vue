<template>
   <div class="content">
      <h1>{{ mainTitle }}</h1>
      <Form
         class="form"
         @submit="onSubmit"
         :validation-schema="schema"
         :initial-values="driverData"
         :key="formKey"
      >
         <div class="form-body">
            <label for="name">Ім'я:</label>
            <Field
               class="input"
               name="name"
               id="name"
               type="text"
               placeholder="введіть ім'я водія"
            />
            <label for="experience">Стаж</label>
            <Field
               class="input"
               name="experience"
               id="experience"
               type="number"
               placeholder="введіть стаж водія"
            />
         </div>
         <div class="action-block">
            <v-btn type="submit">Зберегти</v-btn>
            <v-btn @click="onClear">Очистити</v-btn>
            <v-btn @click="onCancel">Відміна</v-btn>
         </div>
      </Form>
   </div>
</template>

<script>
import { Form, Field } from 'vee-validate'
import { mapActions, mapGetters } from 'vuex'
import * as yup from 'yup'

const initialDriverData = {
   name: null,
   experience: null,
}

export default {
   components: {
      Form,
      Field,
   },
   name: 'DriverEdit',
   data() {
      return {
         driverData: initialDriverData,
         schema: yup.object({
            name: yup.string().required().min(2),
            experience: yup.number().required().min(1),
         }),
         formKey: 0,
      }
   },
   props: {
      driverId: {
         type: String,
         required: false,
      },
   },
   computed: {
      ...mapGetters('drivers', { getDriverData: 'getCurrentItem' }),
      mainTitle() {
         let value
         if (!this.driverId) value = 'Додавання водія'
         else value = 'Редагування водія'
         return value
      },
   },
   methods: {
      ...mapActions('drivers', {
         loadDriverById: 'loadItemDataById',
         addNewDriver: 'addItem',
         updateDriverData: 'updateItem',
      }),

      async onSubmit(values) {
         try {
            if (this.driverId) {
               await this.updateDriverData({ itemId: this.driverId, data: values })
            } else {
               await this.addNewDriver(values)
            }
            this.$router.push({ name: 'drivers' })
         } catch {
            alert()
         }
      },
      onCancel() {
         this.$router.push({ name: 'drivers' })
      },
      onReset() {
         this.$router.push({ name: 'drivers' })
      },
      onClear() {
         this.driverData = { ...initialDriverData }
         this.formKey++
      },
   },
   watch: {
      getDriverData: {
         handler(newValue) {
            if (newValue) {
               this.driverData = {
                  name: newValue.name,
                  experience: newValue.experience,
               }
               this.formKey++
            }
         },
      },
   },
   created() {
      if (this.driverId) {
         this.loadDriverById(this.driverId)
      }
   },
}
</script>

<style lang="scss" scoped></style>
