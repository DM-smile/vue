<template>
   <div class="content">
      <h1>{{ mainTitle }}</h1>
      <Form
         class="form"
         @submit="onSubmit"
         :validation-schema="schema"
         :initial-values="busData"
         :key="formKey"
      >
         <div class="form-body">
            <label for="number">Номер автобуса:</label>
            <Field
               class="input"
               name="number"
               id="number"
               type="text"
               placeholder="введіть номер автобуса"
            />
            <label for="seats">Кількість місць</label>
            <Field
               class="input"
               name="seats"
               id="seats"
               type="number"
               placeholder="введіть кількість місць"
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

const initialBusData = {
   number: null,
   seats: null,
}

export default {
   components: {
      Form,
      Field,
   },
   name: 'BusEdit',
   data() {
      return {
         busData: initialBusData,
         schema: yup.object({
            number: yup.string().required().min(2),
            seats: yup.number().required().min(1),
         }),
         formKey: 0,
      }
   },
   props: {
      busId: {
         type: String,
         required: false,
      },
   },
   computed: {
      ...mapGetters('buses', { getBusData: 'getCurrentItem' }),
      mainTitle() {
         let value
         if (!this.busId) value = 'Додавання автобуса'
         else value = 'Редагування автобуса'
         return value
      },
   },
   methods: {
      ...mapActions('buses', {
         loadBusById: 'loadItemDataById',
         addNewBus: 'addItem',
         updateBusData: 'updateItem',
      }),

      async onSubmit(values) {
         try {
            if (this.busId) {
               await this.updateBusData({ itemId: this.busId, data: values })
            } else {
               await this.addNewBus(values)
            }
            this.$router.push({ name: 'buses' })
         } catch {
            alert()
         }
      },
      onCancel() {
         this.$router.push({ name: 'buses' })
      },
      onReset() {
         this.$router.push({ name: 'buses' })
      },
      onClear() {
         this.busData = { ...initialBusData }
         this.formKey++
      },
   },
   watch: {
      getBusData: {
         handler(newValue) {
            if (newValue) {
               this.busData = {
                  number: newValue.number,
                  seats: newValue.seats,
               }
               this.formKey++
            }
         },
      },
   },
   created() {
      if (this.busId) {
         this.loadBusById(this.busId)
      }
   },
}
</script>

<style lang="scss" scoped></style>
