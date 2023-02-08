<template>
    <div class="people" v-if="people.length !== 0">
        <div v-for="(item, idx) in people" :key="item.id">
            <div class="people__list">
                <p>{{ item.firstName }}</p>
                <button class="people__button1" @click="$emit('remove', item.id)">Удалить</button>
            </div>
            <hr v-if="people.length !== idx + 1" style="opacity: 0.2;"/>
         </div>
    </div>
    <div class="people people1" v-else>
        <h3>Пока нет людей.</h3>
        <button @click="$emit('load')">Загрузить людей</button>
    </div>
</template>
<script>
export default {
    emits: ['load', 'remove'],
    props: ["people"]
}
</script>
<style lang="scss" scoped>
.people {
    margin-top: 20px;
    gap: 20px;
        padding: 10px 20px;
        background: rgb(0, 0, 84);
        border-radius: 15px;
        color: white;
        display: flex;
        flex-direction: column;
        &__list {
            border-radius: 10px;
            color: white;
            padding: 5px 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__button1 {
            cursor: pointer;
            border: none;
            background: red;
            &:hover {
                opacity: 0.8;
            }
        }
}
.people1 {  
        align-items: center;
}

button {
    border-radius: 7px;
    background: teal;
    color: white;
    width: fit-content;
    padding: 7px 12px;
    &:hover {
        opacity: 0.9;
    }
}
</style>