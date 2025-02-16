<template>
   <h4>
      Задача 1. Розробити компонент для введення віку користувача (з підтримкою
      v-model). При заданні модифікатора check не допускати введення
      некоректного віку (вік не може бути більшим за 150). При заданні
      модифікатора setColor задавати фон (вік менше 10 – зелений, від 10 до 21 –
      жовтий, інакше – оранжевий)
   </h4>
   <div>
      <user-age-input
         :label="labelText"
         v-model.check.number.setColor="userAge"
         :color-status-list="ageStatusList"
      />
   </div>
</template>

<script>
import UserAgeInput from "./components/UserAgeInput.vue"

export default {
   name: "App",
   components: { UserAgeInput },
   data() {
      return {
         labelText: "Введіть вік: ",
         userAge: null,
         ageStatusList: {
            low: 10,
            medium: 21,
         },
      }
   },
}
</script>

<style lang="scss" scoped>
h4 {
   margin-bottom: 30px;
}
</style>
