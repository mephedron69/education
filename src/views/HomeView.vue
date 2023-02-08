<template>
    <div class="home container">
        <h1>Изучаю фишки Vue3</h1>
        <h3>Текущая дата: {{ nowDate }}</h3>
        <!-- <h3>Текущая время: {{ nowTime }}</h3> -->
        <div class="home__now">

            <p class="home__process">Мой текущий процесс: 
                <div v-for="(item, index) in process" :key="index" :class="{activeProcess: index == activeIndex}">
                        <p @click="nowProcess(index)">{{ item.title }}</p>
                </div>
             </p>

            <p class="home__text">
                <p>{{ textProcess.title }}</p>
                <p>{{ textProcess.text }}</p>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: "HomeView",
    data() {
        return {
            nowDate: new Date().toLocaleDateString(),
            // nowTime: new Date().toLocaleTimeString(),
            activeIndex: 0,
            activeProcess: 0,
            process: [
                {
                    title: "1 Видео пройдено успешно",
                    text: "На первое видео было сказано только о курсе, практики там нет.",
                },
                {
                    title: "2 Видео пройдено успешно",
                    text: "Материал находится на 2 блоке",
                },
                {
                    title: "3 Видео пройдено успешно",
                    text: "Материал находится на 3 блоке",
                },
                {
                    title: "4 Видео пройдено успешно",
                    text: "Материал находится на 4 блоке",
                },
                {
                    title: "5 Видео пройдено успешно",
                    text: "Материал находится на 5 блоке",
                },
                {
                    title: "6 Видео пройдено успешно",
                    text: "Материал находится на 6 блоку",
                },
                {
                    title: "7 Видео пройдено успешно",
                    text: "Практика находится в 7 блоке. Создание и получение данных из input через submit",
                },
                 {
                    title: "8 Видео пройдено успешно",
                    text: "Работа с базы данных, Как Vue взаимодействует с сервером, c Rest API, с Backend, FireBase, и курсовая по 8 блоку находится в блоке block 8v2",
                   
                },
                {
                    title: "9 Видео пройдено успешно",
                    text: "Все находится в 9 блоке."
                }
            ]
        }
    },
    methods: {
        nowProcess(index) {
            this.activeIndex = index
        }
    },
    computed: {
        textProcess() {
            return this.process[this.activeIndex]
        }
    }
}
</script>
<style lang="scss" scoped>
.home {
    &__process {
        box-shadow: 1px -2px 8px 0px rgba(34, 60, 80, 0.2);
        width: fit-content;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 18%;
        height: fit-content;
        .activeProcess {
            background: green;
            border-radius: 10px;
            padding: 0 10px;
            color: white;
        }
    }
    &__text {
        box-shadow: 1px -2px 8px 0px rgba(34, 60, 80, 0.2);
        width: fit-content;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 76%;
    }
    &__now {
        display: flex;
        gap: 2%;
        width: 100%;
    }
}
</style>