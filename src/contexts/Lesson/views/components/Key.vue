<template>
    <div class="keys">
        
        <div v-if="combinedKey" class="key">
            <div class="key__label">
                {{ combinedKey }}
            </div>
        </div>
        <div v-if="combinedKey" class="plus">+</div>
        
        <div v-if="shiftKey" class="key">
            <div class="key__label key__label--big">
                Shift
            </div>
        </div>
        <div v-if="shiftKey" class="plus">+</div>

        <div class="key">
            <div :class="['key__label', { 'key__label--big': bigKey }]">
                {{ currentChar }}
            </div>
        </div>

    </div>
</template>

<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const currentChar = computed(() => {

    if (!store.getters['lesson/getStatus'] == 'loading' || store.getters['lesson/finished'])
        return null
    
    if (store.getters['lesson/currentChar'] == ' ')
        return '_'
        
    else
        return store.getters['lesson/currentChar'].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    
})

const bigKey = computed(() => store.getters['lesson/currentChar'] == ' ')

const shiftKey = computed(() => {
    
    if (!store.getters['lesson/getStatus'] == 'loading' || store.getters['lesson/finished'] || store.getters['lesson/currentChar'] == ' ')
        return false

    let letter = store.getters['lesson/currentChar'].toLowerCase()

    if (/^[a-z]$/g.test(letter) && store.getters['lesson/currentChar'] == store.getters['lesson/currentChar'].toUpperCase())
        return true

    if ((new RegExp(`^[\"\!\@\#\$\%\¨\&\*\(\)\_\+\`\{\}\^\?\:\>\<\|]$`, 'g')).test(letter))
        return true

    return false

})

const combinedKey = computed(() => {

    if (!store.getters['lesson/getStatus'] == 'loading' || store.getters['lesson/finished'])
        return null
    
    let letter = store.getters['lesson/currentChar'].toLowerCase()

    const accentKeys = {
        '´': 'áéíóú',
        '`': 'àèìòù',
        '~': 'ãõñ',
        '^': 'âêîôû',
        '¨': 'äëïöü',
    }

    for (const accent in accentKeys)
        if ((new RegExp(`^[${accentKeys[accent]}]$`, 'g')).test(letter))
            return accent
        
    return null

})

</script>

<style lang="scss" scoped>

$size: 70px;
$color: #555;
$color-light: lighten($color, 30);

.keys {

    align-items: center;
    display: flex;
    gap: 10px;
    padding: 0 2rem;

}

.key {

    background-color: $color;
    background-image: linear-gradient(135deg, $color, $color-light);
    border-width: 10px;
    border-style: solid;
    border-color: $color-light $color $color $color-light;
    border-radius: 15px;
    display: block;

    &__label {
        
        border: 2px solid rgba(255, 255, 255, .5);
        border-radius: 5px;
        color: #fff;
        font-family: 'Courier New', Courier, monospace;
        font-size: 30px;
        font-weight: 700;
        height: $size;
        line-height: $size;
        text-align: center;
        width: $size;

        &--big {

            width: $size * 2;

        }

    }

}

.plus {

    font-size: 30px;
    font-weight: 700;

}

</style>