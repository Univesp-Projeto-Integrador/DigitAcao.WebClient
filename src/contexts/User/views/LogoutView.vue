<template>
    <div>Saindo...</div>
</template>

<script setup>

import { useStore } from "vuex";
import router from '@/router';

const store = useStore()

store.dispatch('user/logout')

router.push('/user/login')

</script>