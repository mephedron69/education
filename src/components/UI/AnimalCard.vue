<template>
    <div class="animal">
        <p class="animal-p1">{{ name }}</p>
        <img :src="require('@/assets/images/' + img + '.jpg')" @click="open"/>
        <div v-if="newOpenCard" class="desc" :class="{active: newOpenCard == true}">
            <p class="desc__text">{{ text }}</p>
            <button v-if="!descNoted" @click="noteReading">Прочитано</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        descNoted: Boolean,
        id: {
            type: Number,
            require: true
        },
        name: {
            type: String
        },
        img: String,
        text: {
            type: String
        },
        openCard: {
            type: Boolean,
            require: false,
            default: false,
            validator(value) {
                return value === true || value === false
            }
        },
    },
    emits: {
        counterPlus: null,
        notedText(id) {
            if (id) {
                return true;
            }
            else {
                console.warn("Нет параметра id в emit notedText")
                return false
            }
        }
    },
    data() {
        return {
            newOpenCard: this.openCard
        }
    },
    methods: {
        open() {
            this.newOpenCard = !this.newOpenCard
            if (this.newOpenCard) {
                this.$emit('counterPlus')
            }
        },
        noteReading() {
            this.newOpenCard = false
            this.$emit("notedText", this.id)
        }
    }
}
</script>
<style lang="scss" scoped>
img {
    width: 400px;
    height: 250px;
    object-fit: cover;
}
.animal {
    position: relative;
    width: 31.6%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-p1 {
        font-weight: 700;
        display: flex;
        font-size: 22px;
    }
    .active {
        position: absolute;
        bottom: -52%;
        z-index: 2;
        background: teal;
        width: 100%;
        display: flex;
        justify-content: center;
        color: white;
        padding: 7px 0;
    }
    .desc {
        width: 100%;
        display: flex;
        gap: 15px;
        flex-direction: column;
        button {
            border: none;
            background: white;
            border-radius: 7px;
            width: 70%;
            display: flex;
            margin: auto;
            justify-content: center;
        }
        &__text {
            margin: 12px;
        }
    }
}
</style>