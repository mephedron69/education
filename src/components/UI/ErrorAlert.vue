<template>
    <div class="error" v-if="alert" v-cloak>
        <div class="alert" :class="alert.style">
            <h2>{{ alert.text }}</h2>
            <p>{{ alert.message }}</p>
            <button  @click.capture="$emit('close')" style="cursor: pointer;" :class="alert.style">Закрыть</button>
        </div>
    </div>
</template>
<script>
export default {
    emits: ['close'],
    props: ['alert']
}
</script>
<style lang="scss" scoped>
[v-cloak] {
    display: none;
}
.error {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.647); /*Черный с непрозрачностью */
    width: 100%; 
    height: 100%; 
}
.button1 {
    background: red;
    color: white;
    border: 1px solid #D7DADD;
    border-radius: 4px;
    outline: none;
    padding: 7px 12px;
    width: fit-content;
}
.button2 {
    background: green;
    color: white;
    border: 1px solid #D7DADD;
    border-radius: 4px;
    outline: none;
    padding: 7px 12px;
    width: fit-content;
}
.button3 {
    background: orange;
    color: white;
    border: 1px solid #D7DADD;
    border-radius: 4px;
    outline: none;
    padding: 7px 12px;
    width: fit-content;
}
.alert {
    border-left: 7px solid red;
    padding: 15px;
    color: black;
    box-shadow: -1px -2px 29px -3px rgba(34, 60, 80, 0.2);
    background: white;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
    &.button2 {
             border-left: 7px solid green;
    }
    &.button1 {
             border-left: 7px solid red;
    }
    &.button3 {
             border-left: 7px solid orange;
    }
}
</style>