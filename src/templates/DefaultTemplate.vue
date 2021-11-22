<template>
    <div class="default-template">

        <AppHeader />

        <AppContent>
        
            <slot />

        </AppContent>

        <AppFooter />

    </div>
</template>

<script setup>

import AppHeader from './Default/AppHeader'
import AppContent from './Default/AppContent'
import AppFooter from './Default/AppFooter'

</script>