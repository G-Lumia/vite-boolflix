import { reactive } from 'vue';

export const searchSeries = reactive({
    seriesList: [],
    baseUrl: 'https://api.themoviedb.org/3/search/tv?api_key=09025619010a780d4131c16c843f8703&language=it&page=1&query=',
    endpoint: ''
})