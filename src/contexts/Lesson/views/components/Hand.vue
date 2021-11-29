<template>
    <svg :class="['hand', { 'hand--right': side == 'right' }]" width="204.3" height="223.32" version="1.1" viewBox="0 0 204.3 223.32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
        <path class="hand" d="m12.003 49.327c8.108-1.647 16.039 3.58 17.697 11.697l9.2324 41.949c0.269 1.317 1.518 2.195 2.848 2.004 1.33-0.192 2.28-1.387 2.166-2.726l-7.5114-70.648c-0.772-9.072 5.957-17.054 15.029-17.826 9.066-0.773 17.054 5.957 17.826 15.029l4.616 61.897c0.121 1.421 1.341 2.494 2.765 2.434 1.425-0.061 2.549-1.233 2.549-2.66v-73.99c1e-3 -9.105 7.383-16.487 16.489-16.487 9.106 0 16.659 7.3836 16.487 16.487l-1.4782 78.214c-0.0221 1.1678 0.91 2.133 2.076 2.201 1.166 0.069 2.183-0.784 2.319-1.943l7.7232-65.931c1.065-9.042 9.261-15.513 18.304-14.444 9.043 1.065 15.51 9.261 14.444 18.304l-12.874 109.25c-0.166 1.408 0.586 2.764 1.867 3.37s2.807 0.327 3.79-0.695l27.565-28.631c6.314-6.559 16.751-6.758 23.312-0.442 6.56 6.315 6.758 16.752 0.442 23.312l-65.413 67.943c-7.546 9.91-19.462 16.323-32.851 16.323h-39.536c-24.077 0-43.666-19.588-43.666-43.665 0-16.546-1.668-33.05-4.977-49.262l-12.937-63.369c-1.656-8.116 3.58-16.04 11.697-17.697z"/>
        <path v-if="finger == 'thumb'" class="finger finger--thumb" d="m148.37 144.82 27.565-28.631c6.314-6.559 16.751-6.758 23.312-0.442 6.56 6.315 6.758 16.752 0.442 23.312l-38.22 39.699c-10.344 7.2569-21.713-25.403-13.099-33.938z" fill="#f0f"/>
        <path v-if="finger == 'index'" class="finger finger--index" d="m115.11 94.959 7.7232-65.931c1.065-9.042 9.261-15.513 18.304-14.444 9.043 1.065 15.51 9.261 14.444 18.304l-8.0359 68.195c-8.3402 9.7375-34.037 4.7616-32.435-6.124z" fill="#008080"/>
        <path v-if="finger == 'middle'" class="finger finger--middle" d="m79.22 90.477v-73.99c1e-3 -9.105 7.383-16.487 16.489-16.487 9.106 0 16.659 7.3836 16.487 16.487l-1.4782 78.214c-0.68345 5.8606-31.112 3.8119-31.498-4.2239z" fill="#008000"/>
        <path v-if="finger == 'ring'" class="finger finger--ring" d="m43.946 102.25-7.5114-70.648c-0.772-9.072 5.957-17.054 15.029-17.826 9.066-0.773 17.054 5.957 17.826 15.029l4.616 61.897c0.65507 7.3195-27.403 20.042-29.96 11.548z" fill="#f00"/>
        <path v-if="finger == 'little'" class="finger finger--little" d="m12.003 49.327c8.108-1.647 16.039 3.58 17.697 11.697l9.2324 41.949c1.3682 11.394-22.683 39.578-25.689 27.42l-12.937-63.369c-1.656-8.116 3.58-16.04 11.697-17.697z" fill="#ff0"/>
    </svg>
</template>

<script setup>

import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps({

    side: {
        type: String,
        required: true
    }

})

const letter = computed(() => {

    if (!store.getters['lesson/getStatus'] == 'loading' || store.getters['lesson/finished'])
        return null
    
    else
        return store.getters['lesson/currentChar'].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    
})

const finger = computed(() => {

    if (!store.getters['lesson/getStatus'] == 'loading' || store.getters['lesson/finished'])
        return null

    const charsHand = {
        'left': ' 12345qwertyasdfghzxcvb',
        'right': ' 67890yuiophjklçnm,.'
    }

    const charsFingers = {
        'thumb': ' ',
        'index': '45rtfgvb67yuhjnm',
        'middle': '3edc8ik,',
        'ring': '2wsx9ol.',
        'little': '1qaz0pç;'
    }

    let regex = new RegExp(`^[${charsHand[props.side]}]$`, 'g')

    if (regex.test(letter.value))
        for (const finger in charsFingers) {
            
            regex = new RegExp(`^[${charsFingers[finger]}]$`, 'g')

            if (regex.test(letter.value))
                return finger

        }

    return null

})

</script>

<style lang="scss" scoped>

$thumb-color: #0198E9;
$index-color: #FDCD00;
$middle-color: #7EB301;
$ring-color: #BB47F5;
$little-color: #E40001;

.hand {

    display: block;
    fill: #555;
    height: 150px;
    width: 150px;

    &--right { transform: scale(-1, 1) }

}

.finger {

    &--thumb { fill: $thumb-color }
    &--index { fill: $index-color }
    &--middle { fill: $middle-color }
    &--ring { fill: $ring-color }
    &--little { fill: $little-color }

}

</style>