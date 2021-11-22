<template>
    <svg :class="$style.icon">
        <use :xlink:href="`${require('@/assets/icons.svg')}#${$props.symbol}`" />
    </svg>
</template>

<script>

export default {

    name: 'Icon',

    props: {

        symbol: String

    }

}

</script>

<style lang="scss" module>

.icon {

    display: inline-block;
    fill: var(--color-2);
    height: 1em;
    transition: all .1s linear;
    vertical-align: top;
    width: 1em;

}

</style>