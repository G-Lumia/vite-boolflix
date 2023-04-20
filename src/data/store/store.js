import { reactive } from 'vue';

export const store = reactive({
    filmsList: [],
    seriesList : [],
    filmUrl: 'https://api.themoviedb.org/3/search/movie?api_key=09025619010a780d4131c16c843f8703&language=it&page=1&query=',
    seriesUrl: 'https://api.themoviedb.org/3/search/tv?api_key=09025619010a780d4131c16c843f8703&language=it&page=1&query=',
    endpoint: ''
})