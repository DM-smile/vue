import { schoolSubjects, teachers } from '@/constants/dataBase'

export default {
   namespaced: true,
   state: () => ({
      loginData: null,
      teachersList: [],
      subjectsList: [],
      activeLessons: [],
   }),
   getters: {
      getLoginData: ({ loginData }) => loginData,
      getTeachersList: ({ teachersList }) => teachersList,
      getSubjectsList: ({ subjectsList }) => subjectsList,
      getLessonsById: (state) => {
         return state.subjectsList.filter((subject) => state.activeLessons.includes(subject.id))
      },
   },
   mutations: {
      setTeachersList(state, data) {
         state.teachersList = JSON.parse(JSON.stringify(data))
      },
      setSubjectsList(state, data) {
         state.subjectsList = JSON.parse(JSON.stringify(data))
      },
      setActiveLessons(state, lessonsIdsList) {
         state.activeLessons = lessonsIdsList
      },
      setLoginData(state, data) {
         state.loginData = data
      },
   },
   actions: {
      loadTeachersData({ commit }) {
         commit('setTeachersList', teachers)
      },
      loadSubjectsData({ commit }) {
         commit('setSubjectsList', schoolSubjects)
      },
      setActiveLessons({ commit }, lessonsIdsList) {
         commit('setActiveLessons', lessonsIdsList)
      },
      setActiveTeachers({ commit }, teachersIdsList) {
         commit('setActiveTeachers', teachersIdsList)
      },
      setLoginData({ commit }, data) {
         commit('setLoginData', data)
      },
   },
}
