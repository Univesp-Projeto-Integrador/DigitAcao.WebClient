<template>
    <button
        class="button"
        :type="type"
    >{{ label }}</button>
</template>

<script>

export default {

    name: 'Button',

    props: {

        label: {
            type: String,
            required: true
        },

        type: {
            type: String,
            default: 'text'
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
    padding: .8rem 1rem;
    position: relative;

    &::after {

        background-color: #fff;
        content: '';
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        transition: all .1s linear;
        width: 100%;

    }

    &:hover::after {

        opacity: .2;

    }

}

</style>