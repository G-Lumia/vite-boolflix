<template>
    <button class="btn m-0 p-0" v-if="element.poster_path != null">
        <div class="thumb d-flex flex-column align-items-center">
            <img class="poster img-fluid" :src="'https://image.tmdb.org/t/p/w342/' + element.poster_path"  :alt="element.original_name">
            <div class="overview d-flex flex-column p-3">
                <p>
                    Titolo: <br>
                    {{element.title}}
                    {{element.name}}
                </p>
                <p>
                    Titolo originale: <br>
                    {{element.original_title}}
                    {{ element.original_name }}
                </p>
                <span :class="'fi fi-' + element.original_language"></span>
                <div class="vote d-flex align-items-center">
                    <p>
                        Voto :
                    </p>
                    <div class="d-flex gap-2 my-2">
                        <img v-for="star in stars" src="../assets/img/svg/star.svg" alt="star">
                    </div>
                </div>
                <p v-if="element.overview.length != 0">
                    Descrizione: <br> {{element.overview}}
                </p>
            </div>
        </div>
    </button>
</template>

<script>
        export default {
            name: 'Card',
            props: ['element'],
            data(){
                return{
                    stars : this.toStars()
                }
            },
            methods: {
                toStars(){
                    return Math.floor(this.element.vote_average / 2);
                }
            },
        }
</script>

<style lang="scss" scoped>
    .poster{
        width:100%;
        height: 100%;
    }

    .thumb{
        width:100%;
        height: 100%;
        position: relative;
    }

    .overview{
        width:100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity:0;
        background-color: rgba(0, 0, 0, 0.75);
        color:white;
        overflow-y: scroll;
        &:hover{
            opacity: 1;
            transition:0.3s;
        }
    }

    .vote p{
        margin:0;
    }
    ::-webkit-scrollbar {
        width: 1px;
    }

    .btn{
        text-align: left;
        height:450px;
        width:300px;
    }
</style>