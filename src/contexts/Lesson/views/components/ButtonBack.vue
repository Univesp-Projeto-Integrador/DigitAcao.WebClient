<template>
    <Button @click="backHandle" label="Voltar ao índice" icon="arrow-left" color-style="secondary" />
</template>

<script setup>

import Button from '@/components/Button/Button'

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const backHandle = () => {

    if(!store.getters['lesson/started'] || confirm('Deseja realmente retornar ao índice?'))
        router.push('/course/1')

}

</script>