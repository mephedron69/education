import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import translatePlugin from './translatePlugin'

const ru = {
    app: {
        title: "Как работает Vue?",
        desc: "Для проверкы работы i18n",
        text: "Какой то текст тут.",
        lang: "Перевести на другой язык",
        plugin: "Плагины во Vue",
        plWord: "Работает ли translatePlugin?"
    }
}
const en = {
    app: {
        title: "How to working Vue?",
        desc: "To test the operation of i18n",
        text: "Some text here.",
        lang: "Translate other language",
        plugin: "Plugins on Vue",
        plWord: "Does it working translatePlugin?"
    }
}

createApp(App)
    // .directive('focus', {
    //     mounted(el) {
    //         el.focus()
    //     }
    // })
    .use(translatePlugin, {ru, en})
    .use(store)
    .use(router)
    .mount('#app')
