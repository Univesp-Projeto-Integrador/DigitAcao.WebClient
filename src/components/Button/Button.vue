<template>
    <button
        class="button"
        :type="type"
        :disabled="loading"
    >
        <Icon v-if="icon" class="button__icon" :symbol="loading ? 'clock' : icon" />
        <span class="button__label">{{ label }}</span>
    </button>
</template>

<script>

export default {

    name: 'Button',

    props: {

        label: {
            type: String,
            required: true
        },
        icon: String,
        type: {
            type: String,
            default: 'text'
        },
        loading: {
            type: Boolean,
            default: false
        }

    }

}

</script>

<style lang="scss" scoped>

.button {

    background-color: var(--theme-color-2);
    border: 0 none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    overflow: hidden;
    padding: .8rem 1.2rem;
    position: relative;

    &:disabled {

        cursor: not-allowed;

    }

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

    &:hover::after {

        opacity: .2;

    }

    &__icon {

        fill: #fff;
        margin: 0 .8rem 0 -.1rem;

    }

}

</style>