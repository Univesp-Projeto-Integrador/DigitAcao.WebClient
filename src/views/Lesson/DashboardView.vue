<template>
    <DefaultTemplate class="dashboard-view">

        <router-link to="/lesson">Lição</router-link>

    </DefaultTemplate>
</template>

<script>

import DefaultTemplate from '@/templates/DefaultTemplate';

export default {

    name: 'DashboardView',

    components: {
        DefaultTemplate
    }

}

</script>

<style lang="scss" scoped>

.dashboard-view {

    display: block;

}

</style>