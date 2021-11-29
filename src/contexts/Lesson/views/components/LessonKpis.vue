<template>
    <Container :negative="true">

        <ul class="indicators">
            <li class="indicator">
                <span class="indicator__label">Última tecla:</span>
                <span class="indicator__value">
                    <span :class="[
                    'key-indicator',
                    status == 'wrong-key' ? 'key-indicator--danger' : 'key-indicator--ok'
                ]">{{ typedKey }}</span>
                </span>
            </li>
            <li class="indicator">
                <span class="indicator__label">Precisão:</span>
                <span class="indicator__value">{{ accuracy }}%</span>
            </li>
            <li class="indicator">
                <span class="indicator__label">Velocidade:</span>
                <span class="indicator__value">{{ wpm }} ppm</span>
            </li>
            <li class="indicator">
                <span class="indicator__label">Nota:</span>
                <span class="indicator__value">{{ score }}</span>
            </li>
            <li class="indicator">
                <span class="indicator__label">Duração:</span>
                <span class="indicator__value">{{ time }}</span>
            </li>
            <!-- <li class="indicator">
                <span class="indicator__label">Teclas por Minuto (TPM):</span>
                <span class="indicator__value">{{ kpm }}</span>
            </li> -->
            <li class="indicator">
                <span class="indicator__label">Progresso:</span>
                <span class="indicator__value">{{ progress }}</span>
            </li>
            <li class="indicator">
                <span class="indicator__label">Status:</span>
                <span class="indicator__value">{{ statusDescription }}</span>
            </li>
        </ul>

    </Container>
</template>

<script setup>

import Container from '@/components/Container'

import { computed, onUnmounted } from "vue"
import { useStore } from 'vuex'

const store = useStore()

// Computed
const progress = computed(() => {
    
    const currentCharPosition = store.state.lesson.currentCharPosition
    const lessonLength = store.state.lesson.content.length
    const perc = Math.round((currentCharPosition / lessonLength) * 100) || 0

    return `${currentCharPosition} / ${lessonLength} (${perc}%)`

})
const typedKey = computed(() => store.getters['lesson/getTypedKey'] || '-')
const status = computed(() => store.getters['lesson/getStatus'])
const statusDescription = computed(() => store.getters['lesson/getStatusDescription'])
const accuracy = computed(() => Math.round(store.getters['lesson/getAccuracy'] * 100))
const wpm = computed(() => Math.round(store.getters['lesson/getWpm']))
const score = computed(() => store.getters['lesson/scoreLetter'] || '-')
// const kpm = computed(() => Math.round(store.getters['lesson/getKpm']))
const time = computed(() => store.getters['lesson/getTime'])

let interval = setInterval(() => {

    if(store.getters['lesson/finished'])
        clearInterval(interval)

    else {
        
        store.dispatch('lesson/updateWpm')
        store.dispatch('lesson/updateKpm')
        store.dispatch('lesson/updateTime')

    }

}, 100)

onUnmounted(() => clearInterval(interval))

</script>

<style lang="scss" scoped>

.indicators {

    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    margin: 0 0 2rem 0;
    padding: 0;

}

.indicator {

    list-style: none;
    // min-width: 20%;

    &__label {

        color: #e3d969;
        font-weight: 700;
        display: block;
        font-size: .7rem;
        margin-bottom: .4rem;
        text-transform: uppercase;

    }

}

.key-indicator {

    background-color: #fff;
    border-radius: 3px;
    color: var(--success-color);
    font-family: 'Courier Prime', monospace;
    font-weight: 400;
    padding: 0 .3rem;
    white-space: pre-wrap;

    &--danger { color: var(--danger-color); }

}

</style>