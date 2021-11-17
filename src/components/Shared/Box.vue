<template>
    <div :class="$style.box">

        <slot />

    </div>
</template>

<script>

export default {

    name: 'Box'

}

</script>

<style lang="scss" module>

.box {

    background-color: #fff;
    border-bottom: 3px solid var(--theme-color-1);
    border-radius: 5px;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .1);
    display: block;
    max-width: 500px;
    padding: 3rem;
    width: 500px;

}

</style>