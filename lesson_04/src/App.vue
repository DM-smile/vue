<template>
   <a
      class="repository-link"
      href="https://github.com/DM-smile/vue/tree/main/lesson_04"
      target="_blank"
      >👉 Переглянути репозиторій 👈</a
   >
   <div class="main">
      <first-task />
      <second-task />
   </div>
   <a href="https://dm-smile.github.io/vue/index.html">All lessons</a>
</template>

<script>
import FirstTask from "./components/task_01/FirstTask.vue"
import SecondTask from "./components/task_02/SecondTask.vue"
export default {
   name: "App",
   components: {
      FirstTask,
      SecondTask,
   },
}
</script>

<style lang="scss" scoped>
.main {
   padding: 20px 20px 100px;
}
.repository-link {
   font-size: 35px;
   color: rgb(252, 0, 0);
   text-decoration: none;
   background-color: rgb(0, 253, 253);
   padding: 10px;
   border-radius: 30px;
   border: 3px solid black;
   text-shadow: 2px 2px 2px black;
   position: sticky;
   top: 0;
}
</style>
