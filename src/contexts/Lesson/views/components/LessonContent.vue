<template>
    <Container class="lesson-content">

        <span>{{ contentDone }}</span>
        <span :class="[
            'lesson-content__current',
            { 'lesson-content__current--wrong-key': status == 'wrong-key' }
        ]">{{ currentChar }}</span>
        <span class="lesson-content__pending">{{ contentPending }}</span>
    
    </Container>
</template>

<script setup>

import Container from '@/components/Container'

import { computed } from "vue"
import { useStore } from 'vuex'

const store = useStore()

// Computed
const status = computed(() => store.getters['lesson/getStatus'])
const currentCharPosition = computed(() => store.state.lesson.currentCharPosition)
const contentDone = computed(() => store.getters['lesson/getContent'].substring(0, currentCharPosition.value))
const currentChar = computed(() => store.getters['lesson/currentChar'])
const contentPending = computed(() => store.getters['lesson/getContent'].substring(currentCharPosition.value + 1, store.getters['lesson/getContent'].length))

</script>

<style lang="scss" scoped>

$currentKeyColor: var(--theme-color-2);
$wrongKeyColor: var(--theme-color-1);

.lesson-content {

    font-family: 'Courier Prime', monospace;
    font-size: 1.8rem;
    font-weight: 400;
    padding-bottom: 2rem;
    white-space: pre-wrap;

    &__current {

        background-color: $currentKeyColor;
        border-radius: 3px;
        color: #fff;

        &--wrong-key {

            background-color: $wrongKeyColor;

        }

    }

    &__pending {

        opacity: .5;

    }

}

</style>