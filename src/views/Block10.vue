<template>
    <div class="block10 container">
         <div class="block10-title">
            <p style="font-weight: 700;">Block10. Что изучаем тут? </p>
            <li>Vue Router</li>
            <li>Создаем Мини клон Gmail</li>
        </div>
        <div class="block10__swiper">
            <p class="block10__swiper-box" @click="$router.back">Предыдущая страница</p>
            <p class="block10__swiper-box">Следующая страница</p>
        </div>
        <div class="block10__inmail" v-if="isAuth">
            <div class="block10__inmail__header">
                <p>Gmail</p>
                <div class="block10__inmail__header-right">
                    <p>Главная</p>
                    <p>Почта</p>
                    <p @click="isAuth = false">Выйти</p>
                </div>
            </div>
            <p class="block10__inmail-p1">Поздравялю вы вошли в свою почту!</p>
        </div>
        <form class="block10__gmail" v-else>
            <h2>Мини клон Gmail</h2>
            <div class="block10__gmail__input">
                <label for="mail">Email</label>
                <input id="mail" type="text" v-model="email"/>
            </div>
            <div class="block10__gmail__input">
                <label for="mail">Password</label>
                <input id="mail" type="password" v-model="password"/>
            </div>
            <div class="block10__gmail__buttons">
                <button class="block10__gmail__buttons-button1" @click="submit" type="submit">Войти</button>
                <button class="block10__gmail__buttons-button2" @click="forget = !forget">Забыл пароль</button>
                <BlockForget :forget="forget" @close="forget = false"/>
            </div>
        </form>
    </div>
</template>
<script>
import BlockForget from '@/components/Block10/BlockForget.vue'
export default {    
    components: { BlockForget },
    data() {
        return{
            forget: false,
            email: "",
            password: "",
            isAuth: false
        }
    },
    computed: {
        isValid() {
            return this.email !== "" && this.password !== ""
        }
    },
    methods: {
        submit() {
            if (this.isValid) {
                this.isAuth = true
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.block10 {
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
    &__swiper {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        color: rgb(21, 13, 69);
        font-weight: 700;
        &-box {
            background: teal;
            border-radius: 4px;
            padding: 4px 12px;
        }
    }
    &__inmail {
        padding: 12px 20px;
        box-sizing: border-box; 
        margin-top: 100px;
        border-radius: 15px;
        background: rgb(0, 0, 69);
        &__header {
            margin: -12px -20px;
            border-radius: 15px;
            padding: 12px 20px;
            background: rgb(10, 10, 122);
            display: flex;
            justify-content: space-between;
            &-right {
                display: flex;
                gap: 10px;
            }
        }
        &-p1 {
            margin-top: 20px;
            display: flex;
            justify-content: center;
        }
    }
    &__gmail {
        padding: 12px 20px;
        box-sizing: border-box; 
        margin-top: 100px;
        border-radius: 15px;
        background: rgb(0, 0, 69);
         display: flex;
        flex-direction: column;
        gap: 12px;
        &__input {
            display: flex;
            flex-direction: column;
            gap: 7px;
        }
        &__buttons {
            margin-top: 20px;
            display: flex;
            gap: 10px;
            &-button1 {
                color: white;
                background: green;
                border: none;
            }
            &-button2 {
                color: white;
                background: darkred;
                border: none;
            }
        }
    }
}
</style>