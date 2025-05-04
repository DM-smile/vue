<template>
   <h2 class="title">Розподіл подарунків <span v-if="!appointmentsList.length">порожній</span></h2>
   <div class="list">
      <div class="list">
         <div class="list__item" v-for="appointment in appointmentsList" :key="appointment.id">
            <span>{{ appointment.name }}</span>
            <button @click="onDelete(appointment.id)">Видалити</button>
         </div>
      </div>
   </div>
   <div class="add-new-item">
      <select name="friend" v-model="selectedFriend">
         <option value="0" selected disabled>Обрати друга</option>
         <option v-for="friend in friendsList" :key="friend.id" :value="friend">
            {{ friend.name }}
         </option>
      </select>
      <select name="gift" v-model="selectedGift">
         <option value="0" selected disabled>Обрати подарунок</option>
         <option v-for="gift in giftsList" :key="gift.id" :value="gift">
            {{ gift.name }}
         </option>
      </select>
      <button @click="addNewItem">Додати в список</button>
   </div>
</template>

<script setup>
import { useFriendsStore } from '@/stores/friends'
import { useGiftsStore } from '@/stores/gifts'
import { useAppointmentsStore } from '@/stores/appointments'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'

const appointmentsStore = useAppointmentsStore()
const friendsStore = useFriendsStore()
const giftsStore = useGiftsStore()

const { getItems: friendsList } = storeToRefs(friendsStore)
const { getItems: giftsList } = storeToRefs(giftsStore)
const { getItems: appointmentsList } = storeToRefs(appointmentsStore)

const selectedFriend = ref('0')
const selectedGift = ref('0')
const association = computed(() => {
   const name = selectedFriend.value?.name || ''
   const gift = selectedGift.value?.name || ''
   return name && gift ? `${name} : ${gift}` : ''
})

const onDelete = (itemId) => appointmentsStore.deleteItem(itemId)
const addNewItem = () => {
   if (selectedFriend.value !== '0' && selectedGift.value !== '0') {
      appointmentsStore.addNewItem({
         name: association.value,
         friendId: selectedFriend.value.id,
         giftId: selectedGift.value.id,
      })
      selectedFriend.value = '0'
      selectedGift.value = '0'
   }
}
</script>

<style lang="scss" scoped></style>
