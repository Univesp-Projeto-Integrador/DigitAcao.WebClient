<template>
    <div class="login-template">

        <Box>

            <header class="app-header">
                
                <img class="app-header__logo" src="@/assets/logo-digitacao.svg" alt="DigitAção">

                <h1 class="app-header__title">{{ route.name }}</h1>

            </header>

            <slot />

        </Box>

    </div>
</template>

<script>

import Box from '@/components/Shared/Box';

import { useRoute } from 'vue-router';

export default {

    name: 'LoginTemplate',

    components: {
        Box
    },

    setup() {
        
        const route = useRoute();
    
        return { route };

    },

}

</script>

<style lang="scss" scoped>

.login-template {

    justify-content: center;
    display: flex;
    padding: 2rem;

}

.app-header {

    margin-bottom: 1rem;

    &__logo {

        display: block;
        height: 80px;
        margin: 0 auto;

    }

    &__title {

        color: var(--theme-color-1);
        font-size: 1.5rem;
        margin: 2rem 0;
        text-transform: uppercase;

    }

}

</style>