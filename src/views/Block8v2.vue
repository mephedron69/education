<template>
     <div class="block8v2 container">
       <div class="block8v2__content">

            <form class="block8v2__content__left" @submit.prevent="addInformation">
                <div class="block8v2__content__left__block">
                    <label for="block1">Тип блока</label>
                    <select id="block1" v-model="select">
                        <option value="title">Заголовок</option>
                        <option value="subtitle">Подзаголовок</option>
                        <option value="avatar">Аватар</option>
                        <option value="text">Текст</option>
                    </select>
                </div>
                <div class="block8v2__content__left__block">
                    <label for="block2">Значение</label>
                    <textarea id="block2" v-model="text" rows="3"></textarea>
                </div>   
                <button :disabled="!isValid">Добавить</button>
            </form>

             <div class="block8v2__content__right">
                <template v-if="blocks.length">
                     <component
                            v-for="item in blocks"
                            :key="item.id"
                            :is="'type-' + item.select"
                            v-bind="{value: item.text}">
                        </component>
                </template> 
                <div v-else>
                    <h3>Пока тут ничего нет, добавьте что-нибудь.</h3>
                </div>  
            </div>
       </div>
       <div>
            <button style="background: green; color: white; border: none;" @click="loadComment">Открыть комментария</button>
            <div class="block8v2__comments" v-if="comments.length">
                <h2>Комментарии</h2>
                <loading-view v-if="loading" class="load"></loading-view>
                <div v-else class="comments">
                    <div v-for="item in comments" :key="item">
                        <hr style="opacity: 0.2;"/>
                        <p>{{ item.name }}</p>
                        <p>{{ item.email }}</p>
                        <p>{{ item.body }}</p>
                    </div>
                </div>
             </div>
       </div>
    </div>
</template>
<script>
import TypeAvatar from '@/components/Block8v2/TypeAvatar.vue'
import TypeSubtitle from '@/components/Block8v2/TypeSubtitle.vue'
import TypeText from '@/components/Block8v2/TypeText.vue'
import TypeTitle from '@/components/Block8v2/TypeTitle.vue'
import LoadingView from '@/components/UI/LoadingView.vue'

export default {
    data() {
        return {
            select: "title",
            text: "",
            blocks: [],
            comments: [],
            loading: false
        }
    },
    computed: {
        isValid() {
            return this.text.length > 3;
        }
    },
    methods: {
        async loadComment() {
            this.loading = true
            const result = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=42')
            this.comments = await result.json()
            this.loading = false
        },
        addInformation() {
            const block = {
                select: this.select,
                text: this.text,
                id: Date.now()
            }
            this.blocks.push(block)
            this.text = ''
            this.select = 'title'
        }
    },
    components: {TypeAvatar, TypeSubtitle, TypeText, TypeTitle, LoadingView}
}
</script>
<style lang="scss" scoped>
.comments {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.load {
    margin-bottom: 20px;
}
.background {
    background: rgb(60, 60, 102);
    height: 100vh;
}
.block8v2 {
    color: white;
    &__content {
        margin-top: 25px;
        margin-bottom: 15px;
        display: flex;
        width: 100%;
        gap: 2%;
        &__left {
            display: flex;
            flex-direction: column;
            background: rgb(0, 0, 84);
            border-radius: 14px;
            padding: 15px 14px;
            box-sizing: border-box;
            width: 25%;
            gap: 15px;
            &__block {
                display: flex;
                flex-direction: column;
                gap: 7px;
                textarea {
                    height: 80px;
                    resize: none;
                    outline: none;
                    padding: 5px;
                }
                select {
                    outline: none;
                }
            }
            button {
                width: fit-content;
                letter-spacing: 2px;
                background: green;
                color: white;
                border: none;
            }
            button:disabled {
                background: white;
                color: black;
                opacity: 0.8;
            }
        }
        &__right {
            background: rgb(0, 0, 84);
            border-radius: 14px;
            padding: 15px 14px;
            box-sizing: border-box;
            width: 73%;
        }
    }
    &__comments {
         background: rgb(0, 0, 84);
         margin-top: 15px;
            border-radius: 14px;
            padding: 7px 12px;
            box-sizing: border-box;
    }
}
</style>