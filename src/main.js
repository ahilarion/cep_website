import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'font-awesome-animation/css/font-awesome-animation.min.css'

import { faPaperPlane, faPhone, faBars, faArrowRight, faXmark, faMapLocationDot} from '@fortawesome/free-solid-svg-icons'

library.add(faPaperPlane, faPhone, faBars, faArrowRight, faXmark, faMapLocationDot)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
