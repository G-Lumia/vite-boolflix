<template>
    <div class="thumb d-flex flex-column align-items-center" v-if="element.poster_path != null">
        <img class="poster img-fluid" :src="'https://image.tmdb.org/t/p/w342/' + element.poster_path"  :alt="element.original_name">
        <div class="overview d-flex flex-column p-3">
            <p>
                {{element.title}}
                {{element.name}}
            </p>
            <p>
                {{element.original_title}}
                {{ element.original_name }}
            </p>
            <span :class="'fi fi-' + element.original_language"></span>
            <div class="d-flex my-2">
                <img v-for="star in stars" src="../assets/img/svg/star.svg" alt="star">
            </div>
            <p>
                {{element.overview}}
            </p>
        </div>
    </div>
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
        width:300px;
        height: 450px;
    }

    .thumb{
        width:300px;
        height: 450px;
        position: relative;
    }

    .overview{
        width:300px;
        height: 450px;
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

    ::-webkit-scrollbar {
        width: 1px;
    }

</style>