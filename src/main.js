import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

import './assets/main.css'

const app = createApp(App)
const options = {
  position: "top-center",
  timeout: 1968,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false
}

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages: {
    en: {
      form: "Please fill the form."
    },
    pt: {
      form: "Por favor, preencha o formulário."
    }
  }
});

app.use(createPinia())
app.use(router)
app.use(Toast, options)
app.use(i18n)


app.mount('#app')
