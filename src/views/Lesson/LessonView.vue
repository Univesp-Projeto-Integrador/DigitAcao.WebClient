<template>
    <Template>

        <Lesson
            :content="lesson.lessonContent"
        />

    </Template>
</template>

<script>

import Template from '@/templates/DefaultTemplate'
import Lesson from '@/components/Lesson/Lesson'

export default {

    name: 'LessonView',

    components: {
        Template,
        Lesson
    },

    data: () => ({
    
        lesson: {
            lessonContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis condimentum dapibus. Aenean placerat porta libero ut vulputate. Quisque pretium justo eget enim facilisis, vitae ultricies odio hendrerit. Praesent fringilla ex id turpis pellentesque, eu facilisis mi consequat. Vestibulum nec urna a dolor commodo tempor.'
        }
    
    })

}

</script>


<style lang="scss" scoped>



</style>