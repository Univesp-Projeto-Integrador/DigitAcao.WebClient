<template>
    <section class="app-content">

        <header class="content-header">

            <h1 class="content-header__title">{{ title }}</h1>

        </header>
        
        <slot />

    </section>
</template>

<script setup>

import { computed } from "vue";
import { useStore } from "vuex";

const title = computed(() => useStore().getters.getTitle)

</script>

<style lang="scss" scoped>

.app-content {

    margin: 0 auto;
    max-width: 1200px;
    padding: 3rem 2rem;

}

.content-header {

    &__title {

        color: var(--theme-color-1);
        font-size: 1.5rem;
        margin: 0 0 3rem 0;
        text-transform: uppercase;

    }

}

</style>