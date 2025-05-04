import { computed, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { useAppointmentsStore } from '@/stores/appointments'
import { storeToRefs } from 'pinia'

export const useBaseItems = (initialList) => {
   const items = ref([...initialList])
   const getItems = computed(() => items.value)
   const addNewItem = (itemData) => {
      items.value.push({
         id: uuidv4(),
         ...itemData,
      })
   }
   const deleteItem = (itemId) => {
      items.value = items.value.filter((item) => item.id !== itemId)
      const appointmentsStore = useAppointmentsStore()
      const { getItems: appointmentsList } = storeToRefs(appointmentsStore)
      const toDeleteIds = appointmentsList.value
         .filter((appointment) => appointment.friendId === itemId || appointment.giftId === itemId)
         .map((appointment) => appointment.id)

      toDeleteIds.forEach((id) => appointmentsStore.deleteItem(id))
   }

   return {
      items,
      getItems,
      addNewItem,
      deleteItem,
   }
}
