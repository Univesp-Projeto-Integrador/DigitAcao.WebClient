<template>
    <DefaultTemplate class="lesson-view">

        <!-- Indicadores -->
        <Kpis />

        <!-- Conteúdo da lição -->
        <LessonContent />

    </DefaultTemplate>
</template>

<script>

import DefaultTemplate from '@/views/Template/DefaultTemplate';
import Kpis from '@/components/Kpis/Kpis';
import LessonContent from '@/components/LessonContent';

export default {

    name: 'LessonView',

    components: {
        DefaultTemplate,
        Kpis,
        LessonContent
    }

}

</script>

<style lang="scss" scoped>

.lesson-view {

    display: block;

}

</style>