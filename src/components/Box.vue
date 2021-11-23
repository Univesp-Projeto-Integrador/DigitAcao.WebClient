<template>
    <div class="box">

        <h2 class="title">{{ title }}</h2>

        <slot />

    </div>
</template>

<script setup>

import { defineProps } from 'vue'

const props = defineProps({

    title: String
    
})

</script>

<style lang="scss" scoped>

.box {

    background-color: #fff;
    border-bottom: 3px solid var(--theme-color-1);
    border-radius: 5px;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .1);
    display: block;
    padding: 3rem;
    width: 100%;

}

.title {

    color: var(--theme-color-1);
    font-size: 1.5rem;
    margin: 0 0 2rem 0;
    text-transform: uppercase;

}

</style>