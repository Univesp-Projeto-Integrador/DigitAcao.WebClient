<template>
    <div class="lesson">

        <!-- Indicadores -->
        <Kpis />

        <!-- Conteúdo da lição -->
        <Content
            :content="content"
        />

    </div>
</template>

<script>

import Kpis from '@/components/Lesson/LessonKpis'
import Content from '@/components/Lesson/LessonContent'

export default {

    name: 'Lesson',

    components: {
        Kpis,
        Content
    },

    props: {

        content: {
            type: String,
            required: true
        }

    }

}

</script>

<style lang="scss" scoped>

.lesson {

    display: block;

}

</style>