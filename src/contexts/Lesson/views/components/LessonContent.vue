<template>
    <div class="lesson-content">

        <span>{{ contentDone }}</span>
        <span :class="['lesson-content__current', { 'lesson-content__current--wrong-key': status == 'wrong-key' }]">{{ contentCurrent }}</span>
        <span class="lesson-content__pending">{{ contentPending }}</span>

    </div>
</template>

<script setup>

import { ref, computed, defineProps } from "vue"
import { useKeypress } from "vue3-keypress"

const props = defineProps({

    content: {
        type: String,
        required: true
    }

})

// Data
let counter = ref(0)
let status = ref('ok')

// Computed
const contentDone = computed(() => props.content.substring(0, counter.value))
const contentCurrent = computed(() => props.content[counter.value])
const contentPending = computed(() => props.content.slice(-(props.content.length - counter.value - 1)))

// Methods
const onKeyDown = ({ event }) => {

    if (event.key.length != 1)
        return

    if(event.key != contentCurrent.value) {

        status.value = 'wrong-key'
        return

    }

    status.value = 'ok'
    counter.value++

}

// Setup
useKeypress({
    keyEvent: "keydown",
    keyBinds: [],
    onAnyKey: onKeyDown
})

</script>

<style lang="scss" scoped>

$currentKeyColor: var(--theme-color-2);
$wrongKeyColor: var(--theme-color-1);

.lesson-content {

    background-color: #fff;
    border-radius: 5px;
    font-family: 'Courier Prime', monospace;
    font-size: 1.4rem;
    font-weight: 400;
    padding: 2rem;

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