<template>
    <HeaderComponent/>
</template>
<script>
import { searchFilms } from '../data/store/films';
import axios from 'axios';
import HeaderComponent from './HeaderComponent.vue';
export default {
    name: 'App',
    components: {
        HeaderComponent
    }

}
</script>
<style lang="scss">
    template{
        width:100%;
        height:100vh;
        overflow-y: scroll;
    }
</style>