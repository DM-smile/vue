import '@/assets/styles/reset.scss'
import '@/assets/styles/base.scss'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
   components,
   directives,
   theme: {
      // defaultTheme: 'dark',
   },
})

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import icons */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
library.add(fab, fas, far)

const app = createApp(App)
app.use(store)
app.use(router)
app.use(vuetify)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
