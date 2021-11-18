<template>
    <div class="lesson-content">

        <span class="lesson-content__done">{{ contentDone }}</span>
        <span class="lesson-content__current">{{ contentCurrent }}</span>
        <span class="lesson-content__pending">{{ contentPending }}</span>

        <p><input type="number" v-model="current"></p>

        {{ contentCurrent }}

    </div>
</template>

<script>

export default {

    name: 'LessonContent',

    data() {
        return {

            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis condimentum dapibus. Aenean placerat porta libero ut vulputate. Quisque pretium justo eget enim facilisis, vitae ultricies odio hendrerit. Praesent fringilla ex id turpis pellentesque, eu facilisis mi consequat. Vestibulum nec urna a dolor commodo tempor.',
            current: 20,
            user: '',
            inputs: []

        }
    },

    computed: {

        contentDone() {

            let contentDone = this.content;

            contentDone = contentDone.substring(0, this.current);

            return contentDone;

        },

        contentCurrent() {

            let contentCurrent = this.content;

            contentCurrent = contentCurrent[this.current];

            return contentCurrent;

        },

        contentPending() {

            let contentPending = this.content;

            contentPending = contentPending.slice(-(this.content.length - this.current - 1));

            return contentPending;

        }

    }

}

</script>

<style lang="scss" scoped>

.lesson-content {

    background-color: #fff;
    border-radius: 5px;
    font-family: 'Courier Prime', monospace;
    font-size: 1.4rem;
    font-weight: 400;
    padding: 2rem;

    &__done {

        

    }

    &__current {

        background-color: var(--theme-color-1);
        border-radius: 3px;
        color: #fff;

    }

    &__pending {

        opacity: .6;

    }

}

</style>