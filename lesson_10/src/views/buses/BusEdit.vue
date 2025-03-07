<template>
   <h1>{{ editPageTitle }}</h1>
   <div class="form">
      <label>
         <span>Номер *</span>
         <input type="text" v-model="itemData.name" />
      </label>
      <label>
         <span>Кількість місць *</span>
         <input type="number" v-model="itemData.numOfSeats" />
      </label>
      <label>
         <span>Посилання на фото (не обов'язково)</span>
         <input type="text" v-model="itemData.photo" />
      </label>
      <label>
         <span>Додаткова інформація (не обов'язково)</span>
         <textarea v-model.lazy="itemData.info"></textarea>
      </label>
   </div>
   <div class="buttons">
      <button @click="onSave" class="button">{{ saveButtonTitle }}</button>
      <button @click="onCancel" class="button">Відміна</button>
   </div>
</template>

<script>
import { title, button } from '@/mixins/commonMixins'
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'BusEdit',
   mixins: [title, button],
   data() {
      return {
         itemData: {},
      }
   },
   computed: {
      ...mapGetters('busesStore', { currentBus: 'getCurrentItem' }),
      currentItemId() {
         return this.$route.params.id
      },
   },
   methods: {
      ...mapActions('busesStore', {
         addNewBus: 'addNewItem',
         updateBusData: 'updateItem',
         loadItemById: 'loadItemById',
      }),
      onCancel() {
         this.$router.push({ name: 'buses' })
      },
      onSave() {
         if (this.itemData.name && this.itemData.numOfSeats) {
            if (this.currentItemId) {
               this.updateBusData(this.itemData)
            } else this.addNewBus(this.itemData)
            this.$router.push({ name: 'buses' })
         } else alert("Заповніть всі обов'язкові поля!")
      },
   },
   created() {
      if (this.currentItemId) {
         this.loadItemById(this.currentItemId)
         this.itemData = this.currentBus
      }
   },
}
</script>

<style lang="scss" scoped>
textarea {
   width: 100%;
   height: 100px;
   resize: none;
   padding: toRem(10);
   font-size: toRem(20);
   outline: toRem(2) solid black;
   border-radius: toRem(5);
}
input {
   outline: toRem(2) solid black;
   border-radius: toRem(5);
   text-align: center;
   &:focus {
      outline: toRem(2) solid rgb(47, 199, 77);
   }
}
.form {
   display: flex;
   flex-direction: column;
   gap: toRem(20);
}
label {
   display: flex;
   flex-direction: column;
   gap: toRem(5);
}
.edit {
   margin-bottom: toRem(40);
}
.buttons {
   display: flex;
   gap: toRem(20);
}
</style>
