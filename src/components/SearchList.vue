<template>
    <main class="p-5 d-flex flex-wrap justify-content-center gap-5">
        <Card v-for="(element) in store.filmsList" :element="element"/>
        <Card v-for="(element) in store.seriesList" :element="element"/>
    </main>
</template>

<script>
import { store } from '../data/store/store';
import Card from './Card.vue';
export default {
    name: 'SearchList',
    components: {
        Card
    },
    data() {
        return {
            store
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
    main{
        width:100%;
    }
</style>