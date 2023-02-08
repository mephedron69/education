<template>
    <div class="block8 container" v-cloak>
        <error-alert :alert="alert" @close="alert = null"></error-alert>

        <div class="block8__info">
            <p>Работа с базы данных</p>
            <p>Как Vue взаимодействует с сервером, c Rest API, с Backend</p>
        </div>
        <form class="block8__form" @submit.prevent="createUser">
            <h3>Создание человека</h3>
            <div class="block8__form__input" :class="{nameActive: errors.name}">
                <label for="input1">Введите имя:</label>
                <input type="text" id="input1" v-model.trim="name"/>
                <div class="error">{{ errors.name }}</div>
            </div>
            <button class="block8__form__button" :class="{disButton: name.length === 0}">Создать человека</button>
        </form>
        <loading-view v-if="loading"></loading-view>
        <people-list v-else :people="people" @load="loadPeople" @remove="removePeople"></people-list>
    </div>
</template>
<script>
import PeopleList from '@/components/UI/PeopleList.vue'
import ErrorAlert from '@/components/UI/ErrorAlert.vue'
import LoadingView from '@/components/UI/LoadingView.vue'
import axios from 'axios'

export default {
    data() {
        return {
            name: "",
            people: [],
            errors: {
                name: null
            },
            alert: null,
            loading: false
        }
    },
    mounted() {
        this.loadPeople()
    },
    methods: {
        errorName() {
            let forms = true;
            if (this.name.length === 0) {
                this.errors.name = "Имя не был введен" 
                forms = false
            }
            else {
                this.errors.name = ""
            }
            return forms
        },
        async createUser() {
            if (this.errorName()) {
             const response = await fetch('https://minin-course-a386d-default-rtdb.firebaseio.com/people.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'applications/json'
                },
                body: JSON.stringify({
                    firstName: this.name,
                })
            }) 
            const fireBaseData = await response.json
            this.people.push({
                firstName: this.name,
                id: fireBaseData.name
            })
            this.name = ""
           }
        },

        async loadPeople() {
            try {
                this.loading = true;
                const { data } = await axios.get('https://minin-course-a386d-default-rtdb.firebaseio.com/people.json')
                if (!data) {
                    throw new Error('Список людей пуст.')
                }
                this.people = Object.keys(data).map(key => {
                    return {
                        id: key,
                        firstName: data[key].firstName
                    }
                })
                this.loading = false;
            } catch (e) {
                this.alert = {
                    text: "Ошибка!",
                    message: e.message,
                    style: "button1"
                }
                this.loading = false;
                console.log(e.message)
            }
        },

        async removePeople(id) {
            try {
                const name = this.people.find(item => item.id === id).firstName
                await axios.delete(`https://minin-course-a386d-default-rtdb.firebaseio.com/people/${id}.json`)
                this.people = this.people.filter(item => item.id !== id)
                this.alert = {
                    name: name,
                    text: "Успешно",
                     message: `Пользователь с именем ${name} был удален!`,
                    style: "button2"
                }

            } catch (e) {
            }
        }
    },
    components: {PeopleList, ErrorAlert, LoadingView}
}
</script>
<style lang="scss" scoped>
[v-cloak] {
    display: none;
}
.error {
    color: red;
    font-size: 16px;
}
.block8 {
    &__info {
        margin-top: 20px;
        padding: 5px 0;
        background: rgb(0, 0, 84);
        border-radius: 15px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 20px;
        background: rgb(0, 0, 84);
        border-radius: 15px;
        color: white;
        padding: 10px 12px;
        box-sizing: border-box;
        .nameActive {
            input {
               border: 2px solid red;
            }
        }
        &__input {
            display: flex;
            flex-direction: column;
            gap: 15px;
            input {
                background: #FFFFFF;
                border: 1px solid #D7DADD;
                border-radius: 4px;
                outline: none;
                padding: 7px 12px;
            }
        }
        &__button {
              background: teal;
              color: white;
              width: fit-content;
            border-radius: 4px;
            outline: none;
            padding: 7px 12px;
            &:hover{
                opacity: 0.9;
            }
            &:disabled {
                background: white;
                color: black;
                opacity: 0.8;
            }
            
        }
        .disButton {
            cursor: not-allowed;
                color: black;
                background: white;
                opacity: 0.8;
        }
    }
}

</style>