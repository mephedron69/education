<template>
    <div class="block6 container">
        <p>01:05:00</p>
        <h2 class="block6-p1">Видео 6 по счету, все про него</h2>
        <div class="counter">Сколько раза нажата: {{ counter }}</div>
        <div class="counter">Прочитано: {{ counterRead }}</div>
        <div class="block6__cards">
            <AnimalCard  v-for="(item) in animals" 
            :name="item.name" 
            :img="item.img" 
            :text="item.text" 
            :id="item.id"
            :key="item"
            :open-card="item.openCard"
            :desc-noted="item.descNoted"
            @counter-plus="counter++" 
            @noted-text="notedText">
            {{ item }}
        </AnimalCard>
        </div>
    </div>
</template>
<script>
import AnimalCard from '@/components/UI/AnimalCard.vue';
export default {
    components: { AnimalCard },
    data() {
        return {
            counter: 0,
            counterRead: 0,
            animals: [
                {
                    id: 1,
                    name: "Тукан",
                    img: "animal1",
                    text: "Тука́новые — семейство птиц отряда дятлообразные. У туканов несоразмерно большой, сжатый с боков, ярко окрашенный клюв. Однако сам клюв, несмотря на свои размеры, сравнительно лёгок, из-за его пористой структуры. Самые крупные представители отряда дятлообразных. Насчитывают 40 видов птиц, объединяемых в 6 родов",
                    openCard: false,
                    descNoted: false
                },
                {
                    id: 2,
                    name: "Корова",
                    img: "animal2",
                    text: "Коро́ва — отелившаяся самка крупного рогатого скота, то есть домашнего быка. Прежде чем стать коровой, самка быка является тёлкой, после оплодотворения до первых родов она называется нетелью. Коровы используются для получения потомства, а также молочной и мясной продукции.",
                    openCard: false,
                    descNoted: false
                },
                {
                    id: 3,
                    name: "Олень",
                    img: "animal3",
                    text: "Оле́невые, или оле́ньи, или оле́ни, — семейство парнокопытных млекопитающих, содержащее 51 современный вид. Оленевые распространены в Евразии, Северной и Южной Америке, а также были завезены человеком в Австралию и Новую Зеландию. Величина оленевых варьируется между величиной зайца и лошади.",
                    openCard: false,
                    descNoted: false
                },
                {
                    id: 4,
                    name: "Панда",
                    img: "animal5",
                    text: "Больша́я па́нда, или бамбу́ковый медведь — вид всеядных млекопитающих из семейства медвежьих со своеобразной чёрно-белой окраской шерсти, обладающих некоторыми признаками енотов. Единственный современный вид рода Ailuropoda подсемейства Ailuropodinae.",
                    openCard: false,
                    descNoted: false
                }
            ]
        }
    },
    methods: {
        notedText(id) {
            console.log(id);
            const index = this.animals.findIndex(item => item.id === id)
            this.animals[index].descNoted = true
            this.counterRead++ 
        }
    }
}
</script>
<style lang="scss" scoped>
.counter {
    display: flex;
    margin: auto;
    color: white;
    padding: 7px 12px;
    border-radius: 7px;
    background: teal;
    width: fit-content;
    margin-bottom: 30px;
}
.block6 {
    &-p1 {
        display: flex;
        justify-content: center;
    }
    &__cards {
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
    }
}  
</style>