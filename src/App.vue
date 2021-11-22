<template>
    <router-view/>
</template>

<script setup>

import { useStore } from 'vuex'

const store = useStore()

store.dispatch('user/initialiseStore')

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Raleway:wght@100;300;400;700;900&family=Courier+Prime&display=swap');
@import '~normalize.css';
@import '@/style/main.scss';

</style>