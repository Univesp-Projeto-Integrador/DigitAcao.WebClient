<template>
    <Template>

        <div class="container">

            <Box title="Cursos">

                <ProgressItem
                    to="/course/1"
                    label="Digitação Básica"
                    :progress="100"
                />
                <ProgressItem
                    to="/course/2"
                    label="Digitação Intermediária"
                    :progress="0"
                />
                <ProgressItem
                    to="/course/3"
                    label="Digitação Avançada"
                />

            </Box>

            <Box title="Suas estatísticas">

                <p>Nenhuma estatísticas localizada</p>

            </Box>

        </div>

    </Template>
</template>

<script setup>

import Template from '@/templates/DefaultTemplate'
import Box from '@/components/Box'
import ProgressItem from './components/ProgressItem'

</script>

<style lang="scss" scoped>

.container {

    align-items: flex-start;
    column-gap: 2rem;
    display: flex;

}

</style>