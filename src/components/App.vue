<template>
    <HeaderComponent @search="getCards"/>
    <SearchList/>
</template>

<script>
import { searchFilms } from '../data/store/films';
import axios from 'axios';
import HeaderComponent from './HeaderComponent.vue';
import SearchList from './SearchList.vue';
export default {
    name: 'App',
    components: {
        HeaderComponent,
        SearchList
    },
    data() {
        return {
            searchFilms
        }
    },
    methods: {
        getCards() {
        var url = searchFilms.baseUrl + searchFilms.endpoint;
        axios.get(url).then((res) => {
            searchFilms.filmsList = res.data.results;
            console.log(res.data.results)
            });
        }
    },
    mounted(){
        this.getCards();
    }
}
</script>
<style lang="scss" scoped>
</style>