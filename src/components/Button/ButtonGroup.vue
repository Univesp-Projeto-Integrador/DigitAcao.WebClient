<template>
    <div :class="['button-group', { 'button-group--center': align == 'center' }]">

        <slot />

    </div>
</template>

<script setup>

import { defineProps } from 'vue'

defineProps({

    align: {
        type: String,
        default: 'left'
    }

})

</script>

<style lang="scss" scoped>

.button-group {

    align-items: center;
    display: flex;
    margin: 0 0 2rem 0;
    gap: 1rem;

    &--center {

        justify-content: center;

    }

}

</style>