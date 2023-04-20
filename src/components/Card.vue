<template>
    <div v-if="element.poster_path != null" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <img :src="'https://image.tmdb.org/t/p/w342/' + element.poster_path"  :alt="element.original_name">
    </div>
</template>

<script>
        export default {
            name: 'Card',
            props: ['element']
        }
</script>

<style lang="scss" scoped>
</style>