<template>
   <div class="login">
      <label>
         <span>E-mail</span>
         <input type="mail" v-model="email" />
      </label>
      <label>
         <span>Password</span>
         <input type="password" v-model="password" />
      </label>
      <div v-if="error" class="error-message">{{ error }}</div>
      <div class="login__action">
         <button :class="{ green: allData }" @click="onLoginEmail">Login</button>
         <button :class="{ green: allData }" @click="onRegister">Register</button>
         <button @click="onLoginGoogle">Google</button>
         <button @click="setAdminData">Admin</button>
         <button @click="onClear">Clear</button>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'LoginPage',
   data() {
      return {
         email: '',
         password: '',
         error: null,
      }
   },
   computed: {
      ...mapGetters('auth', ['getUser']),
      allData() {
         return this.email && this.password ? true : false
      },
   },
   methods: {
      ...mapActions('auth', ['loginWithGoogle', 'loginWithEmail', 'registerWithEmail']),
      setAdminData() {
         this.email = 'super-admin@gmail.com'
         this.password = 'admin1234'
      },
      onClear() {
         this.email = ''
         this.password = ''
      },
      async onLoginEmail() {
         if (!this.email || !this.password) {
            this.error = 'Email та пароль обовʼязкові'
            return
         }
         this.error = null
         try {
            await this.loginWithEmail({ email: this.email, password: this.password })
         } catch (err) {
            this.error = err.message
         }
      },
      async onRegister() {
         if (!this.email || !this.password) {
            this.error = 'Email та пароль обовʼязкові'
            return
         }
         this.error = null
         try {
            await this.registerWithEmail({ email: this.email, password: this.password })
         } catch (err) {
            this.error = err.message
         }
      },
      async onLoginGoogle() {
         try {
            this.loginWithGoogle()
         } catch (error) {
            alert(error.message)
         }
      },
   },
   watch: {
      getUser(newValue) {
         const redirectPath = this.$route.query.redirect
         if (redirectPath) {
            this.$router.push(redirectPath)
         } else {
            this.$router.push({ name: 'home' })
         }
      },
   },
}
</script>

<style lang="scss" scoped>
button {
   @media (any-hover: hover) {
      transition: all 0.2s;
      &:hover {
         transform: scale(1.2);
      }
   }
}
.error-message {
   color: red;
}
.green {
   background-color: greenyellow;
}
</style>
