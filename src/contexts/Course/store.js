import { CourseApi } from '@/api'

// Initial state
const state = {

    loading: true,
    courses: [],
    lessons: []

}

// Getters
const getters = {
    getLoading: (state) => state.loading,
    getCourses: (state) => state.courses,
    getLessons: (state) => state.lessons
}

// Setters
const mutations = {
    setLoading: (state, loading) => state.loading = loading,
    addCourse: (state, course) => state.courses.push(course),
    addLesson: (state, lesson) => state.lessons.push(lesson)
}

// Methods
const actions = {

    loadCourses: async ({ commit }) => {

        commit('setLoading', true)

        let courses = await CourseApi.getCourses()

        for (const course of courses.data) {
            course.progress = course.progress == 0 ? null : course.progress
            commit('addCourse', course)
        }

        commit('setLoading', false)

    },

    loadLessons: async ({ commit }, courseId) => {

        commit('setLoading', true)

        let lesson = await CourseApi.getLessons(courseId)

        console.log(lesson);

        for (const Lesson of lesson.data)
            commit('addLesson', Lesson)

        commit('setLoading', false)

    }

}

// Config
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}