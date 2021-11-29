<template>
    <Container class="visual-helper">
        <div class="wrapper">

            <Hand side="left" />

            <Key />

            <Hand side="right" />

        </div>
    </Container>
</template>

<script setup>

import Container from '@/components/Container'
import Key from './Key'
import Hand from './Hand'

</script>

<style lang="scss" scoped>

.visual-helper {

    padding-bottom: 2rem;
    white-space: pre-wrap;

}

.wrapper {
    
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 90%;

}

</style>