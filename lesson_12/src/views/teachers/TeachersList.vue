<template>
   <div class="content">
      <h1>Вчителі нашої школи</h1>
      <ol>
         <li v-for="teacher in teachersList" :key="teacher.id">
            {{ teacher.name }}
         </li>
      </ol>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'TeachersList',
   computed: {
      ...mapGetters('common', { teachersList: 'getTeachersList' }),
   },
   methods: {
      ...mapActions('common', ['loadTeachersData']),
   },
   created() {
      this.loadTeachersData()
   },
}
</script>

<style lang="scss" scoped>
.content {
   text-align: left;
   width: toRem(400);
}
h1 {
   margin-bottom: toRem(20);
}
li {
   font-size: toRem(20);
}
</style>
