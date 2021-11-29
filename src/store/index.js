import { createStore } from 'vuex'
import modules from './modules'

// Initial state
const state = {
    title: 'DigitAção'
}

// Getters
const getters = {
    getTitle: (state) => state.title
}

// Setters
const mutations = {
    setTitle: (state, title) => state.title = title
}

// Methods
const actions = {
    setTitle: ({ commit }, title) => commit('setTitle', title)
}

// Config
export default createStore({
    state,
    mutations,
    actions,
    getters,
    modules: modules
})