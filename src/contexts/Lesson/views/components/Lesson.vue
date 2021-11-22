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

<script setup>

import Kpis from './LessonKpis'
import Content from './LessonContent'

import { defineProps } from 'vue'

defineProps({

    content: {
        type: String,
        required: true
    }

})

</script>

<style lang="scss" scoped>

.lesson {

    display: block;

}

</style>