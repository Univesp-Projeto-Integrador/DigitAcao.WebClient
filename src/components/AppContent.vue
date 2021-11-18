<template>
    <section class="app-content">

        <header class="content-header">

            <h1 class="content-header__title">{{ route.name }}</h1>

        </header>
        
        <slot />

    </section>
</template>

<script>

import { useRoute } from 'vue-router';

export default {

    name: 'AppContent',

    setup() {
        
        const route = useRoute();
    
        return { route };

    },

}

</script>

<style lang="scss" scoped>

.app-content {

    margin: 0 auto;
    max-width: 1200px;
    padding: 2rem 0;

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