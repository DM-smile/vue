export const button = {
   computed: {
      addButtonTitle() {
         const routeName = this.$route.name
         if (routeName === 'buses') return 'Додати автобус'
         if (routeName === 'drivers') return 'Додати Водія'
         if (routeName === 'appointments') return 'Додати'
         return '*'
      },
      saveButtonTitle() {
         return this.currentItemId ? 'Зберегти зміни' : 'Додати елемент'
      },
   },
}
export const title = {
   computed: {
      sectionTitle() {
         const routeName = this.$route.name
         if (routeName === 'buses') return 'Наші автобуси'
         if (routeName === 'drivers') return 'Наші водії'
         if (routeName === 'appointments') return 'Призначення'
         if (routeName === 'home') return 'Вітаємо на сторінці автопарку'
         if (routeName === 'contacts') return 'Наші контакти засекречені :)'
      },
      editPageTitle() {
         return this.currentItemId ? `Редагування даних` : 'Додавання елемента'
      },
   },
}
