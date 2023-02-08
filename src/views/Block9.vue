<template>
    <div class="block9 container">
        <div class="block9-title">
            <p style="font-weight: 700;">Block9. Что изучаем тут? </p>
            <li>Миксины (тут не использовал, но в целом понял как можнжо работать с ним)</li>
            <li>Создаем свою директиву</li>
            <li>Жизненные циклы директивы</li>
            <li>Передача параметров в директиву</li>
            <li>Работа с модификаторами</li>
            <li>Создание своего плагина</li>
            <li>teleport = "#id, default" может телепортировать блок в любое место.</li>
        </div>

        <!-- Тут миксины -->
        <div class="block9__mixins">
                <div class="block9-button"> 
                <button @click="showMessage">{{ alert == false ? "Показать" : "Скрыть" }} сообщение</button>
            </div>
            <teleport to="body"><error-alert :alert="alert" @close="alert = false"></error-alert></teleport>

            <div class="block9-button">
                <button @click="showMessage1">{{ alert1 == false ? "Показать" : "Скрыть" }} сообщение</button>
            </div>
            <error-alert :alert="alert1" @close="alert1 = false"></error-alert>
        </div>

        <!-- Как создать свою директиву -->
        <div class="block9__direct" v-if="show">
            <h2>Разговор про Директивы</h2>
            <hr style="opacity: 0.3;"/>
            <div class="block9__direct__input">
                <label for="id1">Активный по умолчанию</label>
                <input v-focus id="id1" type="text"/>
            </div>
            <div class="block9__direct__color">
                <p v-color:[type].blink1.hover="myColor">Директива для v-color</p>
                <button @click="myColor = 'blue'">Изменить цвет v-color</button>
                <button @click="type = type === 'color' ? 'backgroundColor' : 'color'">Переключит тип параметра</button>
            </div>
        </div>


        <!-- Тут про плагины -->
        <div class="block9__plugins">
            <h2>{{ $i18n('app.plugin') }}</h2>
            <hr style="opacity: 0.3;"/>
            <div class="block9__plugins__content">
                <button @click="$transl('Это работает братишка')">{{ $i18n('app.plWord') }}</button>
                <p>{{ $i18n('app.title') }}</p> 
                <p>{{ $i18n('app.desc') }}</p> 
                <p>{{ $i18n('app.text') }}</p> 
                <button @click="translateLang">{{ $i18n('app.lang') }}</button>
            </div>
        </div>
    </div>
</template>
<script>
import ErrorAlert from '@/components/UI/ErrorAlert.vue';
import colorDirectives from '@/components/Directives/colorDirectives.js'
export default {
    components: { ErrorAlert },
    directives: {
        focus: {
            mounted(el) {
                el.focus()    
            },
        },
        color: colorDirectives
    },
    data() {
        return {
            myColor: 'red',
            type: 'color',
            show: true,
            alert: false,
            alert1: false
        }
    },
    mounted() {
        // setTimeout(() => {
        //     this.show = false
        // }, 2000)
    },
    inject: ['changeLang'],
    methods: {
        translateLang() {
            if (localStorage.getItem('lang') === 'ru') {
                localStorage.setItem('lang', 'en')
            }
            else {
                localStorage.setItem('lang', 'ru')
            }
            this.changeLang("");
            
            this.$forceUpdate()
        },
        showMessage() {
            this.alert = {
                text: "Внимание!",
                message: "Это очень важное сообщение, будьте бдительны.",
                style: "button1"
            }
        },
         showMessage1() {
            this.alert1 = {
                text: "Внимание!",
                message: "Это очень важное сообщение, будьте бдительны.",
                style: "button3"
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.block9 {
    color: rgb(224, 224, 224);
    &-title {
        padding: 12px 20px;
        box-sizing: border-box;
        margin-top: 20px;
        border-radius: 15px;
        background: rgb(0, 0, 69);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &-button {
        padding: 12px 20px;
        box-sizing: border-box;
        margin-top: 20px;
        border-radius: 15px;
        background: rgb(0, 0, 69);
        display: flex;
        flex-direction: column;
        button {
            width: fit-content;
            background: green;
            border: none;
            color: white;
            font-weight: 700;
            letter-spacing: 2px;
        }
    }
    &__mixins {
        margin-top: 70px;
    }
    &__direct {
        padding: 12px 20px;
        box-sizing: border-box; 
        margin-top: 120px;
        border-radius: 15px;
        background: rgb(0, 0, 69);
        &__input {
            display: flex;
            flex-direction: column;
            gap: 7px;
            input:focus {
                box-sizing: border-box;
                height: fit-content;
                border: 2px solid green;
            }
        }
        &__color {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            button {
                width: fit-content;
                color: white;
                background: green;
                border: none;
            }
        }
    }
    &__plugins {
        padding: 12px 20px;
        box-sizing: border-box; 
        margin-top: 120px;
        border-radius: 15px;
        background: rgb(0, 0, 69);
        button {
            color: white;
            border: none;
            background: green;
            width: fit-content;
        }
        &__content {
            margin-top: 24px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
    }
}
</style>