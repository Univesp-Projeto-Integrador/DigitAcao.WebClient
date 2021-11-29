<template>
    <Container class="lesson-finished">

        <ButtonGroup align="center">

            <ButtonBack />
            <ButtonRedo v-if="store.getters['lesson/started']" />

        </ButtonGroup>

    </Container>
</template>

<script setup>

import Container from '@/components/Container'
import ButtonGroup from '@/components/Button/ButtonGroup'
import ButtonBack from './ButtonBack'
import ButtonRedo from './ButtonRedo'

import { useStore } from 'vuex'

const store = useStore()

</script>