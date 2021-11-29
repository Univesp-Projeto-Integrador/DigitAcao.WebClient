<template>
    <Template>

        <div class="container">

            <Box title="Cursos">
                
                <div v-if="!loading">
                
                    <ProgressItem
                        v-for="course in courses"
                        :key="course.courseId"
                        :to="`/course/${course.courseId}`"
                        :label="`${course.courseName} - ${course.courseLevelName}`"
                        :progress="course.progress"
                    />

                </div>

                <Loader v-else />

            </Box>

            <Box title="Suas estatísticas">

                <Kpis />

            </Box>

        </div>

    </Template>
</template>

<script setup>

import Template from '@/templates/DefaultTemplate'
import Box from '@/components/Box'
import Loader from '@/components/Loader'
import Kpis from './components/CoursesKpis'
import ProgressItem from './components/ProgressItem'

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const loading = computed(() => store.getters['course/getLoading'])
const courses = computed(() => store.getters['course/getCourses'])

if(courses.value.length == 0)
    store.dispatch('course/loadCourses')

</script>

<style lang="scss" scoped>

.container {

    align-items: flex-start;
    column-gap: 2rem;
    display: flex;

}

</style>