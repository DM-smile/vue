<template>
   <nav v-if="isNavShow">
      <div class="links">
         <router-link :to="{ name: 'home' }">Головна</router-link>
         <router-link :to="{ name: 'select' }">Уроки</router-link>
         <router-link :to="{ name: 'teachersList' }">Вчителі</router-link>
      </div>
      <button @click="onLogin">{{ bntLogin }}</button>
   </nav>
   <div class="content">
      <router-view />
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'App',
   computed: {
      ...mapGetters('common', { login: 'getLoginData' }),
      bntLogin() {
         return this.login ? `${this.login.name} / Вийти` : 'Вхід'
      },
      isNavShow() {
         if (this.$route.meta?.hideVav) return false
         else return true
      },
   },
   methods: {
      ...mapActions('common', ['setLoginData', 'loadTeachersData']),
      checkRequiresAuth() {
         if (this.$route.meta.requiresAuth) {
            this.$router.push({ name: 'login' })
         }
      },
      onLogin() {
         if (this.login) {
            this.setLoginData()
            this.checkRequiresAuth()
         } else {
            this.$router.push({ name: 'login' })
         }
      },
   },
}
</script>

<style lang="scss" scoped>
.content {
   width: 80%;
   margin: 0 auto;
   padding: toRem(15);
   font-size: toRem(30);
}
nav {
   display: flex;
   justify-content: space-between;
   padding: toRem(20) toRem(40);
   background-color: rgb(55, 187, 205);
   width: 100%;
   & .links {
      display: flex;
      justify-content: space-around;
      width: toRem(500);
      font-size: toRem(25);
      & > * {
         @include button-style;
      }
   }
}
.router-link-active {
   background-color: rgb(0, 213, 0);
   outline: toRem(2) solid black;
}
button {
   @include button-style;
}
</style>
