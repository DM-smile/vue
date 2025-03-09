<template>
   <div>
      <h1>Навчальний план</h1>
      <div class="content">
         <div class="item" v-for="(pair, index) in currentPairsList" :key="index">
            <span class="lesson">{{ pair.lesson.title }}</span
            ><span class="teacher">{{ pair.teacher.name }}</span>
         </div>
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
   name: 'ReportPage',
   data() {
      return {
         lesson: 'Математика',
         teacher: 'Вася Пупкін',
      }
   },
   computed: {
      ...mapGetters('common', { lessons: 'getSubjectsList', teachers: 'getTeachersList' }),
      getPairsListFromRoute() {
         return this.$route.params.pairIds
      },
      currentPairsList() {
         return this.getPairsListFromRoute.map((pair) => {
            const [lessonId, teacherId] = pair.split('-')
            const lesson = this.lessons.find((lesson) => lesson.id === lessonId)
            const teacher = this.teachers.find((teacher) => teacher.id === teacherId)
            return {
               lesson,
               teacher,
            }
         })
      },
   },
}
</script>

<style lang="scss" scoped>
h1 {
   margin-bottom: toRem(30);
}
.content {
   font-size: toRem(18);
}
.item {
   display: flex;
   justify-content: space-between;
   width: 100%;
}
.lesson {
   text-align: left;
}
.teacher {
   text-align: right;
}
</style>
