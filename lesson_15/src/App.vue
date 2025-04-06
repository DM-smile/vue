<template>
   <v-card>
      <v-tabs v-model="tab" bg-color="primary">
         <v-tab value="home">Головна</v-tab>
         <v-tab value="drivers">Водії</v-tab>
         <v-tab value="buses">Автобуси</v-tab>
         <v-tab value="appointments">Призначення</v-tab>
         <v-tab value="contacts">Контакти</v-tab>
      </v-tabs>

      <v-card-text>
         <router-view />
      </v-card-text>
   </v-card>
</template>

<script>
export default {
   name: 'App',
   computed: {
      tab: {
         get() {
            return this.$route.name
         },
         set(value) {
            this.$router.push({ name: value })
         },
      },
   },
}
</script>

<style lang="scss" scoped></style>
