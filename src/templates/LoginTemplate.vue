<template>
    <div class="login-template">

        <Box>

            <header class="app-header">
                
                <router-link to="/">
                    <img class="app-header__logo" src="@/assets/logo-digitacao.svg" alt="DigitAção">
                </router-link>

                <h1 class="app-header__title">{{ route.name }}</h1>

            </header>

            <slot />

        </Box>

    </div>
</template>

<script setup>

import Box from '@/components/Box';

import { useRoute } from 'vue-router';

const route = useRoute();
    
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