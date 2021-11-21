<template>
    <div class="default-template">

        <AppHeader />

        <AppContent>
        
            <slot />

        </AppContent>

        <AppFooter />

    </div>
</template>

<script>

import AppHeader from './Default/AppHeader'
import AppContent from './Default/AppContent'
import AppFooter from './Default/AppFooter'

export default {

    name: 'DefaultTemplate',

    components: {
        AppHeader,
        AppContent,
        AppFooter
    }

}

</script>

<style lang="scss" scoped>

.default-template {

    display: block;

}

</style>