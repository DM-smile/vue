<template>
   <div class="content">
      <h1>Виберіть вчителів</h1>
      <div class="list">
         <label v-for="lesson in currentLessons" :key="lesson.id">
            {{ lesson.title }}
            <select v-model="selectedTeachers[lesson.id]">
               <option value="">Не обрано</option>
               <option v-for="teacher in teachersList" :key="teacher.id" :value="teacher.id">
                  {{ teacher.name }}
               </option>
            </select>
         </label>
      </div>
      <div v-if="error" class="error">Оберіть викладача на кожен предмет!</div>
      <button @click="onStart">Розпочати навчання</button>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'TeachersSelectPage',
   data() {
      return {
         selectedTeachers: {},
         pairsList: [],
         error: false,
      }
   },
   computed: {
      ...mapGetters('common', {
         currentLessons: 'getLessonsById',
         teachersList: 'getTeachersList',
      }),
      lessonsIds() {
         return this.$route.params.lessonsIds
      },
   },
   methods: {
      ...mapActions('common', ['setActiveLessons', 'loadSubjectsData', 'loadTeachersData']),
      getPairsList(obj) {
         this.pairsList = Object.entries(obj).map(([key, value]) => `${key}-${value}`)
      },
      onStart() {
         this.getPairsList(this.selectedTeachers)
         if (this.pairsList.length && this.currentLessons.length === this.pairsList.length) {
            this.$router.push({
               name: 'reportPage',
               params: { pairIds: this.pairsList },
            })
         } else this.error = true
      },
   },
   created() {
      this.loadTeachersData()
      this.setActiveLessons(this.lessonsIds)
   },
}
</script>

<style lang="scss" scoped>
.error {
   color: red;
   font-size: toRem(27);
}
button {
   background-color: rgb(201, 240, 94);
   @include button-style;
}
.content {
   display: flex;
   flex-direction: column;
   gap: toRem(20);
}
.list {
   font-size: toRem(24);
   display: flex;
   flex-direction: column;
   gap: toRem(5);
}
label {
   display: flex;
   justify-content: space-between;
}
select {
   font-size: toRem(15);
   background-color: transparent;
   border-radius: toRem(5);
   border: toRem(1) solid grey;
   @media (any-hover: hover) {
      transition: all 0.2s;
      &:hover {
         background-color: yellow;
      }
   }
}
</style>
