<template>
   <header class="header mgb-20">
      <router-link :to="{ name: 'home' }">{{ $t('titles.homeLink') }}</router-link>
      <router-link :to="{ name: 'contacts' }">{{ $t('titles.contacts') }}</router-link>
      <div class="header__title">{{ $t('titles.header') }}</div>
      <div v-if="getUser" class="cart" @click="clearCart">
         <div class="cart__image">
            <img
               class="ibg"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi79VACDIu2TDK3t0mVFG8YsYFFE30EwYuHw&s"
            />
            <div v-if="getCounter > 0" class="cart__counter">{{ getCounter }}</div>
         </div>
      </div>
      <div class="header__action-menu">
         <button @click="changeLang" class="lang-btn" :title="langTitle">
            {{ $t('buttons.lang') }}
         </button>
         <div v-if="getUser" class="user-data">
            <img
               class="user-data__photo"
               :src="getUser.photoURL"
               alt="user photo"
               @error="onUserPhotoError"
            />
            <div>
               <span class="user-data__name">{{ getUser.displayName }}</span>
               <button @click="onLogout">{{ $t('buttons.logout') }}</button>
            </div>
         </div>
         <button v-else @click="onLogin" class="btn-auth">{{ $t('buttons.login') }}</button>
      </div>
   </header>

   <div class="container">
      <router-view />
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'App',
   computed: {
      ...mapGetters(['getCounter']),
      ...mapGetters('auth', ['getUser']),
      currentLang() {
         return this.$i18n.locale
      },
      langTitle() {
         return this.$t('titles.langTitle')
      },
   },
   methods: {
      ...mapActions(['setCounter']),
      ...mapActions('auth', ['loginWithGoogle', 'logout', 'setUser', 'loginWithCredential']),
      changeLang() {
         const lang = this.$i18n.locale === 'ua' ? 'en' : 'ua'
         this.$i18n.locale = lang
         localStorage.setItem('lastLanguage', lang)
      },
      onUserPhotoError(event) {
         event.target.style.display = 'none'
      },
      clearCart() {
         this.setCounter('clear')
      },
      onLogin() {
         this.$router.push({ name: 'login' })
      },
      onLogout() {
         this.logout()
      },
   },
   created() {
      this.$i18n.locale = localStorage.getItem('lastLanguage') || 'en'
      if (localStorage.getItem('lastLanguage') !== this.$i18n.locale) {
         localStorage.setItem('lastLanguage', this.$i18n.locale)
      }
      const self = this
      window.addEventListener('storage', function () {
         if (self.$i18n.locale !== localStorage.getItem('lastLanguage')) {
            self.$i18n.locale = localStorage.getItem('lastLanguage')
            self.$router.go()
         }
         if (event.key === 'authCredentialGoogle') {
            self.$store.dispatch('auth/loginWithCredential').then((isAuthenticated) => {
               if (!isAuthenticated) {
                  self.$store.commit('auth/setUser', null)
               }
            })
         }
      })
   },
}
</script>

<style lang="scss" scoped></style>
