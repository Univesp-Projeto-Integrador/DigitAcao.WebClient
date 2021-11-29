<template>
    <Container class="lesson-finished">

        <h2 class="title">Lição finalizada!</h2>

        <p class="score">
            Nota final:
            <strong :class="['score__value', `score__value--${score}`]">{{ score }}</strong>
        </p>

        <ButtonGroup align="center">

            <ButtonBack />
            <ButtonRedo />
            <ButtonNext />

        </ButtonGroup>

    </Container>
</template>

<script setup>

import Container from '@/components/Container'
import ButtonGroup from '@/components/Button/ButtonGroup'
import ButtonBack from './ButtonBack'
import ButtonRedo from './ButtonRedo'
import ButtonNext from './ButtonNext'

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const score = computed(() => store.getters['lesson/scoreLetter'])

</script>

<style lang="scss" scoped>

.lesson-finished {

    text-align: center;

}

.title {

    color: var(--theme-color-1);
    font-size: 2rem;
    margin: 2rem 0 3rem 0;

}

.score {

    margin-bottom: 3rem;

    &__value {

        display: block;
        font-size: 2rem;
        font-weight: 700;

        &--A { color: var(--success-color) }
        &--B { color: var(--success-color) }
        &--C { color: var(--warning-color) }
        &--D { color: var(--warning-color) }
        &--E { color: var(--danger-color) }
        &--F { color: var(--danger-color) }

    }

}

</style>