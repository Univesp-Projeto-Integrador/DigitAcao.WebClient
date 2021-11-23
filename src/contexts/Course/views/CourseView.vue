<template>
    <Template>

        <Box title="Lições">

            <ProgressItem
                to="/lesson/1"
                label="Lição 1"
                description="qwerty uiop qwerty uiop qwerty uiop..."
                :progress="100"
            />
            <ProgressItem
                to="/lesson/2"
                label="Lição 2"
                description="asdfg hjklç asdfg hjklç asdfg hjklç..."
            />

        </Box>

    </Template>
</template>

<script setup>

import Template from '@/templates/DefaultTemplate'
import Box from '@/components/Box'
import ProgressItem from './components/ProgressItem'

import { useRoute } from 'vue-router'

const route = useRoute()

route.meta.title = `Curso: ${route.params.courseId}`

</script>

<style lang="scss" scoped>


</style>