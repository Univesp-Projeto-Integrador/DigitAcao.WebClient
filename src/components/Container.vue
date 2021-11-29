<template>
    <div :class="['container', { 'container--negative': negative }]">

        <h2 v-if="title" class="title">{{ title }}</h2>

        <slot />

    </div>
</template>

<script setup>

import { defineProps } from 'vue'

defineProps({

    title: String,
    negative: {
        type: Boolean,
        default: false
    }

})

</script>

<style lang="scss" scoped>

.container {

    background-color: #fff;
    border-radius: 5px;
    display: block;
    margin-bottom: 2rem;
    overflow: hidden;
    padding: 2rem 2rem 0 2rem;

    &--negative {

        background-color: var(--theme-color-2);
        color: #fff;

    }

}

.title {

    color: var(--theme-color-1);
    font-size: 1.5rem;
    margin: 1rem 0 3rem 0;
    text-transform: uppercase;

}

</style>