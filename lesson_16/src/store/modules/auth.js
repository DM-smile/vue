import { auth } from '@/firebase-config.js'
import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signInWithPopup,
   signInWithCredential,
   signOut,
} from 'firebase/auth'
export default {
   namespaced: true,
   state: {
      user: null,
      loading: false,
      error: null,
   },
   getters: {
      getUser: (state) => state.user,
   },
   mutations: {
      setUser(state, user) {
         state.user = user
      },
      setLoading(state, loading) {
         state.loading = loading
      },
      setError(state, error) {
         state.error = error
      },
   },
   actions: {
      setUser({ commit }, user) {
         commit('setUser', user)
      },
      async saveLoginUserData({ commit, dispatch }, loginResult) {
         // async saveLoginUserData({ commit }, loginResult) {
         //--------- user data -------
         const user = loginResult?.user // об'єкт користувача
         commit('setUser', user)
         //user.displayName - ім'я акаунту
         //user.photoURL - аватар акаунту
         //user.email - електронна адреса акаунту
         //--------- user access token -------
         // This gives you a Google Access Token. You can use it to access the Google API.

         let credential = GoogleAuthProvider.credentialFromResult(loginResult)
         if (credential && credential.idToken) {
            localStorage.setItem(
               'authCredentialGoogle',
               JSON.stringify({ idToken: credential.idToken })
            )
         }
         dispatch('users/loadUserPermissions', user.uid, { root: true })
      },
      loginWithGoogle({ commit, dispatch }) {
         const provider = new GoogleAuthProvider()
         signInWithPopup(auth, provider)
            .then((loginResult) => {
               dispatch('saveLoginUserData', loginResult)
            })
            .catch((error) => {
               commit('setError', error)
            })
      },
      registerWithEmail({ commit, dispatch }, { email, password }) {
         commit('setLoading', true)
         return createUserWithEmailAndPassword(auth, email, password)
            .then((loginResult) => {
               dispatch('saveLoginUserData', loginResult)
            })
            .catch((error) => {
               let message = ''
               switch (error.code) {
                  case 'auth/email-already-in-use':
                     message = 'Такий email вже зареєстровано'
                     break
                  case 'auth/invalid-email':
                     message = 'Неправильний формат email'
                     break
                  case 'auth/weak-password':
                     message = 'Пароль повинен містити щонайменше 6 символів'
                     break
                  default:
                     message = 'Сталася помилка при реєстрації'
               }
               commit('setError', message)
               throw new Error(message)
            })
            .finally(() => {
               commit('setLoading', false)
            })
      },
      loginWithEmail({ commit, dispatch }, { email, password }) {
         commit('setLoading', true)
         return signInWithEmailAndPassword(auth, email, password)
            .then((loginResult) => {
               dispatch('saveLoginUserData', loginResult)
            })
            .catch((error) => {
               let message = ''
               switch (error.code) {
                  case 'auth/user-not-found':
                     message = 'Користувача з таким email не знайдено'
                     break
                  case 'auth/wrong-password':
                     message = 'Неправильний пароль'
                     break
                  case 'auth/invalid-email':
                     message = 'Неправильний формат email'
                     break
                  default:
                     message = 'Сталася помилка при вході'
               }
               commit('setError', message)
               throw new Error(message)
            })
            .finally(() => {
               commit('setLoading', false)
            })
      },
      async loginWithCredential({ commit, dispatch }) {
         return new Promise((resolve, reject) => {
            let credentialData = localStorage.getItem('authCredentialGoogle')
            if (credentialData) {
               try {
                  const parsed = JSON.parse(credentialData)
                  if (!parsed.idToken) throw new Error('Немає idToken')
                  const credential = GoogleAuthProvider.credential(parsed.idToken)
                  signInWithCredential(auth, credential)
                     .then((loginResult) => {
                        dispatch('saveLoginUserData', loginResult)
                        resolve(loginResult)
                     })
                     .catch((error) => {
                        commit('setError', error.message)
                        reject(false)
                     })
               } catch (e) {
                  console.warn('Invalid credential data in localStorage:', e)
                  localStorage.removeItem('authCredentialGoogle')
                  resolve(false)
               }
            } else resolve(false)
         })
      },
      logout({ commit, dispatch }) {
         signOut(auth)
            .then(() => {
               localStorage.removeItem('authCredentialGoogle')
               localStorage.removeItem('authCredentialEmail')
               commit('setUser', null)
               dispatch('users/clearPermissions', null, { root: true })
            })
            .catch((error) => {
               commit('setError', error)
            })
      },
   },
}
