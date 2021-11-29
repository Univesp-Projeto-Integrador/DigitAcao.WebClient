<template>
    <Container class="wrapper">

        <div class="loader" />

    </Container>
</template>

<script setup>

import Container from './Container'

</script>

<style lang="scss" scoped>

.wrapper {

    align-items: center;
    display: flex;
    justify-content: center;

}

.loader {
    
    animation: spin .5s linear infinite;
    border: 6px solid var(--theme-color-1);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: block;
    height: 40px;
    margin-bottom: 2rem;
    width: 40px;

}

@keyframes spin {
    
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }

}

</style>