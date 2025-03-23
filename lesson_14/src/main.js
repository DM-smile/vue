import '@/assets/styles/reset.scss'
import '@/assets/styles/base.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import icons */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight)
library.add(faArrowLeft)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
   components,
   directives,
})

const app = createApp(App)
app.use(store)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(vuetify)
app.mount('#app')
