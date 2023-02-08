export default {
    install(app, options) {
        let current = localStorage.getItem('lang') || 'ru';
        const changeLang = () => {
            current = localStorage.getItem('lang')
        }

        app.config.globalProperties.$transl = text => {
            window.alert(text)
        }

        app.config.globalProperties.$i18n = key => {
            // app.title -> [app, title]
            return key.split('.').reduce((item, index) => {
                return item[index] || '---UNKNOWN---'
            }, options[current])
        }
        app.provide('changeLang', changeLang)
    }
}