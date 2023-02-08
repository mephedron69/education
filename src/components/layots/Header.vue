<template>
    <div class="background">
        <div class="header">
            <div class="header__top container">
                <router-link to="/">
                <div class="header__top__left">
                    <img src="@/assets/icons/vuelogo.png"/>
                    <p>Vue3 Обучение</p>
                </div>
                </router-link>
                <div class="header__top__right">
                    <div class="header__top__right-filter">Фильтрация по курсу</div>
                    <div class="content">
                        <router-link to="block6" class="content-block">Block6</router-link>
                        <router-link to="block7" class="content-block">Block7</router-link>
                        <router-link to="block8" class="content-block">Block8</router-link>
                        <router-link to="block8v2" class="content-block">Block8v2</router-link>
                        <router-link to="block9" class="content-block">Block9</router-link>
                        <router-link to="block10" class="content-block">Block10</router-link>
                        <router-link to="block8" class="content-block">Block11</router-link>
                        <router-link to="block8" class="content-block">Block12</router-link>
                        <router-link to="block8" class="content-block">Block13</router-link>
                        <router-link to="block8" class="content-block">Block14</router-link>
                    </div>
                </div>
            </div>  
        </div>     
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
a {
    text-decoration: none;
    color: white;
}
.background {
    background: rgb(0, 0, 59);
    padding: 10px 0;
}  
.header {
    &__top {
    align-items: center;
    color: white;
    display: flex;
    justify-content: space-between;
    &__left {
        display: flex;
        align-items: center;
        gap: 10px;
        img {
            width: 30px;
        }
    }
    select {
        background: transparent;
        color: white;
        border: 1px solid #D7DADD;
        border-radius: 4px;
        outline: none;
        padding: 7px 16px;
        option {
            background: rgb(0, 0, 59);
        }
    }
    &__right {
        position: relative;
        &-filter {
            background: transparent;
            border: 1px solid white;
            color: white;
            border-radius: 4px;
            outline: none;
            padding: 7px 16px;
        }
        .content {
            color: black;
            display: none;
            position: absolute;
            &-block {
                width: 100%;
                color: white;
            }
        }
        &:hover {
            .content {
                width: 100%;
                background: rgb(0, 0, 59);
                display: block;
                display: flex;
                flex-direction: column;
                gap: 7px;
                box-sizing: border-box;
                padding: 7px 0 12px 17px;
                &-block {
                    &:hover {
                        opacity: 0.7;
                    }
                }
            }
        }
    }
}  
}
</style>