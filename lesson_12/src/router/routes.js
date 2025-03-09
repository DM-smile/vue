import HomeView from '@/views/HomeView.vue'
import LessonsSelectPage from '@/views/lessons/LessonsSelectPage.vue'
import TeachersSelectPage from '@/views/lessons/TeachersSelectPage.vue'
import TeachersList from '@/views/teachers/TeachersList.vue'
import LessonsView from '@/views/lessons/LessonsView.vue'
import ReportPage from '@/views/lessons/ReportPage.vue'

export const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: false },
   },
   {
      path: '/lessons',
      name: 'lessons',
      component: LessonsView,
      children: [
         {
            path: 'select',
            name: 'select',
            component: LessonsSelectPage,
            meta: { requiresAuth: true },
         },
         {
            path: ':lessonsIds+',
            name: 'teachersSelect',
            component: TeachersSelectPage,
            meta: { requiresAuth: true },
            beforeEnter: (to, from) => {
               if (from.name !== 'select') {
                  if (to.meta.requiresAuth) {
                     return { name: 'select' }
                  } else return { name: 'home' }
               }
            },
         },
         {
            path: ':pairIds+',
            name: 'reportPage',
            component: ReportPage,
            meta: { requiresAuth: false },
         },
      ],
   },
   {
      path: '/teachers-list',
      name: 'teachersList',
      component: TeachersList,
      meta: { requiresAuth: true },
   },

   {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginPage.vue'),
      meta: { requiresAuth: false },
   },
   {
      path: '/:notFound(.*)*',
      name: 'notFound',
      component: () => import('@/views/PageNotFound.vue'),
      meta: { requiresAuth: false, hideVav: true },
   },
]
