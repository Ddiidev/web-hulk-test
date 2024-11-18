import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'


import {pt_BR} from './locale/pt_BR';
import {en_US} from './locale/en'
import { injectLocalStorage } from './utils/customLocalStorage'

injectLocalStorage()

const languagges = {
    pt_BR,
    en_US
}

const i18n = createI18n({
    locale:'pt_BR',
    fallbackLocale: 'en_US',
    messages: languagges
})

const app = createApp(App)

app.use(router)

app.use(i18n);

app.mount('#app')
