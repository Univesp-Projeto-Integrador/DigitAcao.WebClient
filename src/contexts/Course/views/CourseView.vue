<template>
    <Template>

        <Container v-if="!loading" title="Lições">

            <ProgressItem
                v-for="lesson in lessons"
                :key="lesson.lessonId"
                :to="`/lesson/${lesson.lessonId}`"
                :label="`Lição ${lesson.order} - ${lesson.lessonLevelName}`"
                :description="lesson.lessonContent"
            />

            <ButtonGroup align="center">

                <Button @click="backHandle" label="Voltar ao dashboard" icon="arrow-left" color-style="primary" />

            </ButtonGroup>

        </Container>
        
        <Loader v-else />

    </Template>
</template>

<script setup>

import Template from '@/templates/DefaultTemplate'
import Container from '@/components/Container'
import Loader from '@/components/Loader'
import ProgressItem from './components/ProgressItem'
import ButtonGroup from '@/components/Button/ButtonGroup'
import Button from '@/components/Button/Button'

import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed, onBeforeMount } from 'vue'

const route = useRoute()
const router = useRouter()
const store = useStore()

const courseId = route.params.courseId

store.dispatch('setTitle', 'Carregando...')

const loading = computed(() => store.getters['course/getLoading'])
const courses = computed(() => store.getters['course/getCourses'])
const lessons = computed(() => store.getters['course/getLessons'].filter((lesson) => lesson.courseId == courseId))
const courseName = computed(() => 'Curso: ' + store.getters['course/getCourses'].reduce((prev, curr) => curr.courseId == courseId ? curr.courseName : prev, ''))

onBeforeMount(async () => {

    if(courses.value.length == 0)
        await store.dispatch('course/loadCourses')

    if(lessons.value.length == 0)
        await store.dispatch('course/loadLessons', courseId)

    store.dispatch('setTitle', courseName.value)

})

const backHandle = () => {

    router.push('/dashboard')

}

</script>