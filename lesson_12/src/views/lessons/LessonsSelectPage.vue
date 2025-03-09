<template>
   <div class="content">
      <h1>Виберіть уроки:</h1>
      <ul>
         <label v-for="lesson in lessonsList" :key="lesson.id">
            <input type="checkbox" selected :value="lesson.id" v-model="idsList" />{{
               lesson.title
            }}
         </label>
      </ul>
      <div v-if="error" class="error">Оберіть уроки!</div>
      <button @click="setIdsToRoute">Вибрати вчителів</button>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'LessonsSelectPage',
   data() {
      return {
         idsList: [],
         error: false,
      }
   },
   computed: {
      ...mapGetters('common', { lessonsList: 'getSubjectsList' }),
   },
   methods: {
      ...mapActions('common', ['loadSubjectsData']),
      setIdsToRoute() {
         if (this.idsList.length) {
            this.$router.push({ name: 'teachersSelect', params: { lessonsIds: this.idsList } })
         } else this.error = true
      },
   },
   created() {
      this.loadSubjectsData()
   },
}
</script>

<style lang="scss" scoped>
.error {
   color: red;
   margin-bottom: toRem(20);
}
h1 {
   margin-bottom: toRem(30);
}
.content {
   width: toRem(400);
}
label {
   font-size: toRem(20);
   display: flex;
   justify-content: flex-start;
   user-select: none;
}
input {
   width: toRem(40);
}
ul {
   display: flex;
   flex-direction: column;
   gap: toRem(3);
   margin-bottom: toRem(20);
}
button {
   background-color: rgb(201, 240, 94);
   @include button-style;
}
</style>
