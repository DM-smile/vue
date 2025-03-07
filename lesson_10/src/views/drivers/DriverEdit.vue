<template>
   <h1>{{ editPageTitle }}</h1>
   <div class="form">
      <label>
         <span>ПІБ водія *</span>
         <input type="text" v-model.lazy="itemData.name" />
      </label>
      <label>
         <span>Стаж водія (років) *</span>
         <input type="number" v-model.lazy="itemData.experience" />
      </label>
      <label>
         <span>Посилання на фото (не обов'язково)</span>
         <input type="text" v-model.lazy="itemData.photo" />
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
   name: 'DriverEdit',
   mixins: [title, button],
   data() {
      return {
         itemData: {},
      }
   },
   computed: {
      ...mapGetters('driversStore', { currentDriver: 'getCurrentItem' }),
      currentItemId() {
         return this.$route.params.id
      },
   },
   methods: {
      ...mapActions('driversStore', {
         addNewDriver: 'addNewItem',
         updateDriverData: 'updateItem',
         loadItemById: 'loadItemById',
      }),
      onCancel() {
         this.$router.push({ name: 'drivers' })
      },
      onSave() {
         if (this.itemData.name && this.itemData.experience) {
            if (this.currentItemId) {
               this.updateDriverData(this.itemData)
            } else this.addNewDriver(this.itemData)
            this.$router.push({ name: 'drivers' })
         } else alert("Заповніть всі обов'язкові поля!")
      },
   },
   created() {
      if (this.currentItemId) {
         this.loadItemById(this.currentItemId)
         this.itemData = this.currentDriver
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
