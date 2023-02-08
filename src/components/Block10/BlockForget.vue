<template>
    <div class="background" v-if="forget">
        <div class="forget">
            <h2>Забыли пароль? Так вспоминайте!</h2>
            <button style="color: white; background: green; border: none;" @click="$emit('close')">Обратно к логину</button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['forget']
}
</script>
<style lang="scss" scoped>
.background {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.647); /*Черный с непрозрачностью */
    width: 100%; 
    height: 100%; 
    display: flex;
    justify-content: center;
}
.forget {
    height: fit-content;
    width: 700px;
    padding: 12px 20px;
    box-sizing: border-box; 
    margin-top: 100px;
    border-radius: 15px;
    background: rgb(0, 0, 69);
}
</style>