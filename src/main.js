import { createApp } from 'vue'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import './assets/styles/main.css'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(VueReCaptcha, {
    siteKey: '6LcC31ItAAAAAPeDsdwHsU_MaJ63bx8zPAHHKvAi',
    loaderOptions: {
      autoHideBadge: true,
    }
  })
  .use(router)
  .mount('#app')
