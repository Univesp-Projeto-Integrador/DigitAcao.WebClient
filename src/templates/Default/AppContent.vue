<template>
    <section class="app-content">

        <header class="content-header">

            <h1 class="content-header__title">{{ route.meta.title }}</h1>

        </header>
        
        <slot />

    </section>
</template>

<script setup>

import { useRoute } from 'vue-router';

const route = useRoute();
    
</script>

<style lang="scss" scoped>

.app-content {

    margin: 0 auto;
    max-width: 1200px;
    padding: 2rem;

}

.content-header {

    &__title {

        color: var(--theme-color-1);
        font-size: 1.5rem;
        margin: 0 0 2rem 0;
        text-transform: uppercase;

    }

}

</style>