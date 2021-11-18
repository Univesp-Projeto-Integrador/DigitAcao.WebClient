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

import AppHeader from '@/components/AppHeader'
import AppContent from '@/components/AppContent'
import AppFooter from '@/components/AppFooter'

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