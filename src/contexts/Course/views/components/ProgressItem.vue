<template>
    <div class="progress-item">

        <router-link class="progress-link" :to="to">
            <Icon class="progress-link__icon" symbol="chevron-right" />
            {{ label }}
            <em class="progress-link__cta">{{ cta }}</em>
        </router-link>

        <ul class="stats">
            <li class="stats__item">
                <Icon class="stats__icon" :symbol="statusIcon" />
                {{ status }}
            </li>
            <li v-if="progress > 0" class="stats__item">
                <Icon class="stats__icon" symbol="list-check" />
                Progresso: {{ progress }}%
            </li>
        </ul>

        <p v-if="description" class="description">{{ description }}</p>

    </div>
</template>

<script setup>

import { defineProps, computed } from 'vue'

const props = defineProps({

    to: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    progress: Number,
    description: String

})

const cta = computed(() =>
    props.progress == null
        ? 'iniciar'
        : props.progress >= 100
            ? 'refazer'
            : 'continuar'
)
const status = computed(() =>
    props.progress == null
        ? 'Não iniciado'
        : props.progress >= 100
            ? 'Concluido'
            : 'Em andamento'
)
const statusIcon = computed(() =>
    props.progress == null
        ? 'clock'
        : props.progress >= 100
            ? 'check-circle'
            : 'arrow-right-circle'
)

</script>

<style lang="scss" scoped>

.progress-item {

    list-style: none;
    margin-bottom: 2rem;

}

.progress-link {

    background-color: #f5f5f5;
    border-left: 0 solid var(--theme-color-2);
    border-radius: 5px;
    display: block;
    list-style: none;
    margin-bottom: .8rem;
    padding: 1rem 1.5rem;
    text-decoration: none;

    &:hover { border-left-width: 5px }

    &__icon {

        fill: var(--theme-color-2);
        margin-right: .2rem;

    }

    &__cta {

        font-size: .9rem;
        line-height: 1.15rem;
        float: right;

    }

}

.stats {

    column-gap: 2rem;
    display: flex;
    margin: 0;
    padding: 0 1rem;

    &__item { list-style: none }
    &__icon { margin-right: .2rem }

}

.description {

    padding: 1.5rem 1rem 0 1rem;

}

</style>