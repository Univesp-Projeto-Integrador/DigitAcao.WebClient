<template>
    <Button @click="redoHandle" label="Refazer" icon="arrow-clockwise" color-style="primary" />
</template>

<script setup>

import Button from '@/components/Button/Button'

import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

const lessonId = route.params.lessonId

const redoHandle = () => {

    if(confirm('Deseja realmente refazer a lição?'))
        store.dispatch('lesson/load', lessonId)

}

</script>