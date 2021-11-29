<template>
    <Button v-if="nextLessonId" @click="nextHandle" label="Próxima lição" icon="arrow-right" icon-position="right" color-style="success" />
</template>

<script setup>

import Button from '@/components/Button/Button'

import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

const nextLessonId = computed(() => store.getters['lesson/getNextLessonId'])

const nextHandle = () => {

    router.push(`/lesson/${nextLessonId.value}`)

    store.dispatch('lesson/load', nextLessonId.value)

}

</script>