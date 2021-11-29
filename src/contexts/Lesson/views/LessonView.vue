<template>
    <Template>

        <!-- Loader -->
        <Loader v-if="status == 'loading'" />

        <!-- Indicadores -->
        <Kpis v-if="ready" />

        <!-- Conteúdo da lição -->
        <Content v-if="ready" />

        <!-- Auxiliador virtual -->
        <VisualHelper v-if="ready && !store.getters['lesson/finished']" />

        <!-- Ações -->
        <Actions v-if="!store.getters['lesson/finished']" />

        <!-- Fim da lição -->
        <Finished v-if="store.getters['lesson/finished']" />

    </Template>
</template>

<script setup>

import Template from '@/templates/DefaultTemplate'
import Loader from '@/components/Loader'
import Kpis from './components/LessonKpis'
import Content from './components/LessonContent'
import VisualHelper from './components/LessonVisualHelper'
import Actions from './components/LessonActions'
import Finished from './components/LessonFinished'

import { useKeypress } from "vue3-keypress"
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'

const route = useRoute()
const store = useStore()

const lessonId = route.params.lessonId

const ready = computed(() => store.getters['lesson/ready'])
const status = computed(() => store.getters['lesson/getStatus'])

store.dispatch('lesson/load', lessonId)

// Setup
useKeypress({
    keyEvent: "keydown",
    keyBinds: [],
    onAnyKey: ({ event }) => {
        
        if(event.key == ' ')
            event.preventDefault()

        store.dispatch('lesson/typeKey', event.key)

    }
})

</script>