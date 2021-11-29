<template>
    <div>

        <!-- <p>Nenhuma estatísticas localizada</p> -->

        <h2 class="title">Geral</h2>
        <ul class="stats">
            <li class="stats__item">
                <Icon class="stats__icon" symbol="arrow-right" />
                Precisão: 100%
            </li>
            <li class="stats__item">
                <Icon class="stats__icon" symbol="list-check" />
                Velocidade: 55 ppm
            </li>
        </ul>

        <h2 class="title">Últimas lições</h2>

        <h3 class="sub-title">Digitação Básica / Lição 1:</h3>
        <ul class="stats">
            <li class="stats__item">
                <Icon class="stats__icon" symbol="arrow-right" />
                Precisão: 100%
            </li>
            <li class="stats__item">
                <Icon class="stats__icon" symbol="list-check" />
                Velocidade: 55 ppm
            </li>
        </ul>

        <h3 class="sub-title">Digitação Básica / Lição 2:</h3>
        <ul class="stats">
            <li class="stats__item">
                <Icon class="stats__icon" symbol="arrow-right" />
                Precisão: 100%
            </li>
            <li class="stats__item">
                <Icon class="stats__icon" symbol="list-check" />
                Velocidade: 55 ppm
            </li>
        </ul>

        <h3 class="sub-title">Digitação Básica / Lição 3:</h3>
        <ul class="stats">
            <li class="stats__item">
                <Icon class="stats__icon" symbol="arrow-right" />
                Precisão: 100%
            </li>
            <li class="stats__item">
                <Icon class="stats__icon" symbol="list-check" />
                Velocidade: 55 ppm
            </li>
        </ul>

    </div>
</template>

<script setup>



</script>

<style lang="scss" scoped>

.title {

    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 1.5rem 0;
    padding-top: 1rem;
    text-transform: uppercase;

}

.sub-title {

    font-size: 1rem;
    font-weight: 400;
    margin: 0 0 .5rem 0;

}

.stats {

    column-gap: 2rem;
    display: flex;
    margin: 0 0 1.5rem 0;
    padding: 0 1rem;

    &__item { list-style: none }
    &__icon { margin-right: .2rem }

}

</style>