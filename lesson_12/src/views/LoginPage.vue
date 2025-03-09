<template>
   <div v-if="loginData" class="login">{{ loginData.name }} Авторизовано!</div>
   <div v-else class="login">
      <label>
         <span>Логін *</span>
         <input type="text" v-model="currentLoginData.name" />
      </label>
      <label>
         <span>Пароль *</span>
         <input type="password" v-model="currentLoginData.password" />
      </label>
      <div v-if="error" class="error">Заповніть обов'язкові поля!</div>
      <button @click="onLogin">Авторизуватися</button>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'LoginPage',
   data() {
      return {
         currentLoginData: {
            name: 'Вундеркіндер',
            password: '123456789',
         },
         error: false,
      }
   },
   computed: {
      ...mapGetters('common', { loginData: 'getLoginData' }),
   },
   methods: {
      ...mapActions('common', ['setLoginData']),
      onLogin() {
         const name = this.currentLoginData.name
         const pass = this.currentLoginData.password
         if (name && pass) {
            this.setLoginData(this.currentLoginData)
            if (this.$route.query.redirect) {
               this.$router.push({ path: this.$route.query.redirect })
            }
         } else this.error = true
      },
   },
}
</script>

<style lang="scss" scoped>
.error {
   color: red;
}
.login {
   margin: 0 auto;
   width: toRem(400);
   text-align: center;
   display: flex;
   flex-direction: column;
   gap: toRem(10);
   & input {
      outline: toRem(1) solid black;
      border-radius: toRem(5);
      text-align: center;
   }
   & label {
      display: flex;
      flex-direction: column;
      gap: toRem(10);
   }
}
button {
   background-color: rgb(201, 240, 94);
   @include button-style;
}
</style>
