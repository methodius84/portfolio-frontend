import './assets/main.sass'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ScrollAnimation from "@/directives/scrollanimation";

const app = createApp(App)

app.use(router)
app.directive('scroll-animation',  ScrollAnimation)

app.mount('#app')
