<template>
    <main class="container">
        <div class="row">
            <Card v-for="(element) in searchFilms.filmsList" :element="element"/>
        </div>
    </main>
</template>

<script>
import { searchFilms } from '../data/store/films';
import Card from './Card.vue';
export default {
    name: 'SearchList',
    components: {
        Card
    },
    data() {
        return {
            searchFilms
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped></style>