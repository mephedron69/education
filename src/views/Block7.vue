<template >
    <form class="block7 container" @submit.prevent="submitDate">
        <h1>Анкета на Vue разработчика</h1>
        <div class="block7__input" :class="{errorActive: errors.name}">
            <p>Как тебя зовут?</p>
            <input type="text" placeholder="Введите имя" v-model.trim="name"/>
            <p class="block7__input__error">{{ errors.name }}</p>
        </div>
        <div class="block7__input">
            <p>Выбери возраст</p>
            <input type="number" min="18" max="70" v-model.number="age"/>
        </div>
        <div class="block7__select">
            <label for="select">Твой город</label>
            <select id="select" v-model.trim="city">
                <option value="alm">Алматы</option>
                <option value="ast">Астана</option>
                <option value="shmy">Шымкент</option>
            </select>
        </div>
        <div class="block7__radio">
            <p>Готовы к переезду в США?</p>
            <div class="block7__radio__div">
                <label><input type="radio" name="radio1" v-model="choice1" value="yes"/>Да</label>
            </div>
            <div class="block7__radio__div">
                <label ><input type="radio" name="radio1" v-model="choice1" value="no"/>Нет</label>
            </div>
        </div>
         <div class="block7__radio">
            <p>Что знаешь во Vue?</p>
            <div class="block7__radio__div">
                <label><input type="checkbox" v-model="choice2" value="Vuex" name="checkbox1"/>Vuex</label>
            </div>
            <div class="block7__radio__div">
                <label><input type="checkbox" v-model="choice2" value="Vue CLI" name="checkbox1"/>Vue CLI</label>
            </div>
            <div class="block7__radio__div">
                <label><input type="checkbox" v-model="choice2" value="Vue ROUTER" name="checkbox1"/>Vue ROUTER</label>
            </div>
        </div>
         <div class="block7__last">
            <div class="block7__radio__div">
                <label><input type="checkbox" v-model="choice3" value="yes" name="checkbox2"/>Вы согласны с правилам конфеденциальности?</label>
            </div>
        </div>
        <button type="submit" class="block7__button">Отправить</button>
    </form>
</template>
<script>

export default {
    data() {
        return {
            name: "",
            age: 20,
            city: "ast",
            choice1: null,
            choice2: [],
            choice3: false,
            errors: {
                name: null
            }
        }
    },
    methods: {
        checkForms() {
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
        submitDate() {
            if (this.checkForms()) {
                console.group("Ваши данные:")
                console.log("Имя :", this.name);
                console.log("Возраст :", this.age);
                console.log("Город: ", this.city);
                console.log("Готовы к переезеду?", this.choice1)
                console.log("То что вы знаете о Vue:", this.choice2)
                console.log("Вы согласны с правилами конф?", this.choice3)
                console.groupEnd()
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.block7 {
    margin-top: 40px;
    padding: 15px 40px;
    box-sizing: border-box;
    background: rgb(0, 0, 84);
    border-radius: 15px;
    display: flex;
    color: white;
    flex-direction: column;
    gap: 10px;
    &__input {
        display: flex;
        flex-direction: column;
        gap: 7px;
        input {
            background: #FFFFFF;
            border: 1px solid #D7DADD;
            border-radius: 4px;
            outline: none;
            padding: 7px 12px;
        }
        &__error {
            color: red;
            font-size: 13px;
        }
        &.errorActive {
            input {
                 border: 2px solid red;
            }
        }
    }
    &__select {
        display: flex;
        flex-direction: column;
        gap: 7px;
        select {
            background: #FFFFFF;
            border: 1px solid #D7DADD;
            border-radius: 4px;
            outline: none;
            padding: 7px 12px;
        }
    }
    &__radio {
        display: flex;
        flex-direction: column;
        gap: 7px;
        input {
            accent-color: teal;
        }
        label {
            display: flex;
            gap: 7px;
            align-items: center;
        }
    }
    &__button {
        width: fit-content;
        background: teal;
        color: white;
        font-weight: 700;
        margin-top: 20px;
            border-radius: 4px;
            outline: none;
            padding: 7px 12px;
        &:hover {
            opacity: 0.9;
        }
    }
    &__last {
        margin-top: 25px;
        input {
            accent-color: teal;
        }
        label {
            display: flex;
            gap: 7px;
            align-items: center;
        }
        
    }
}
</style>