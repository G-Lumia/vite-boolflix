<template>
    <HeaderComponent @search="getCards"/>
    <SearchList/>
</template>

<script>
import { store } from '../data/store/store';
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
            store
        }
    },
    methods: {
        getCards() {
            var urlFilm = store.filmUrl + store.endpoint;
            axios.get(urlFilm).then((res) => {
                store.filmsList = res.data.results;
                });
            var urlSeries = store.seriesUrl + store.endpoint;
            axios.get(urlSeries).then((res) => {
                store.seriesList = res.data.results;
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