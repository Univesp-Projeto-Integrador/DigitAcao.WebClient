<template>
    <button
        :class="['button', `button--${colorStyle}`]"
        :type="type"
        :disabled="loading"
    >
        <Icon v-if="icon && iconPosition == 'left'" class="button__icon" :symbol="loading ? 'clock' : icon" />
        <span class="button__label">{{ label }}</span>
        <Icon v-if="icon && iconPosition == 'right'" class="button__icon button__icon--right" :symbol="loading ? 'clock' : icon" />
    </button>
</template>

<script setup>

import { defineProps } from 'vue'

defineProps({

    label: {
        type: String,
        required: true
    },
    icon: String,
    iconPosition: {
        type: String,
        default: 'left'
    },
    type: {
        type: String,
        default: 'text'
    },
    colorStyle: {
        type: String,
        default: 'primary'
    },
    loading: {
        type: Boolean,
        default: false
    }

})

</script>

<style lang="scss" scoped>

.button {

    align-items: center;
    background-color: var(--theme-color-2);
    border: 0 none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-weight: 700;
    overflow: hidden;
    padding: .8rem 1.2rem;
    position: relative;

    &:disabled { cursor: not-allowed }

    &::after {

        background-color: #fff;
        content: '';
        height: 100%;
        left: 0;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        transition: all .1s linear;
        width: 100%;

    }

    &:hover::after { opacity: .2 }

    &__icon {

        fill: #fff;
        margin: 0 .8rem 0 -.1rem;

        &--right { margin: 0 -.1rem 0 .8rem }

    }

    &--primary { background-color: var(--primary-color) }
    &--secondary { background-color: var(--secondary-color) }
    &--success { background-color: var(--success-color) }
    &--danger { background-color: var(--danger-color) }
    &--warning { background-color: var(--warning-color) }
    &--info { background-color: var(--info-color) }
    &--light { background-color: var(--light-color) }
    &--dark { background-color: var(--dark-color) }

}

</style>