<template>
    <header>
        <div class="p-2 row h-100 w-100">
            <div class="d-flex justify-content-between align-items-center w-100">
                <div class="d-flex justify-content-between align-items-center">
                    <img class="logo mx-5" src="../assets/img/logo.png" alt="logo">
                    <div class="d-flex justify-content-between d-none d-lg-block">
                        <a class="active" href="#"> Home </a>
                        <a href="#"> Serie Tv</a>
                        <a href="#"> Film </a>
                        <a href="#"> Nuovi e popolari </a>
                        <a href="#"> La mia lista </a>
                        <a href="#"> Sfoglia per lingua </a>
                    </div>
                </div>
                <div class="d-flex justify-content-between gap-2" >
                    <img src="../assets/img/svg/magnifying-glass-svgrepo-com.svg" alt="glass">
                    <input class="form-control" type="search" v-model="searchFilms.endpoint">
                    <button class="btn">
                        <img src="../assets/img/svg/send-message-svgrepo-com.svg" alt="send" @click="$emit('search')">
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { searchFilms } from '../data/store/films';
export default {
    name : 'HeaderComponent',
    data() {
        return {
            searchFilms
        }
    }
}
</script>
<style lang="scss">
    header{
        height: 10vh;
        background-color: black;
        color:white;
    }
    .logo{
        width:120px;
    }

    a{
        text-decoration: none;
        font-size: 1rem;
        color: white;
        &:hover{
            color:dimgray;
            transition: 0.3s;
        }
        padding: 0px 10px 0px 10px;
    }

    .active{
        font-weight: bold;
    }
</style>