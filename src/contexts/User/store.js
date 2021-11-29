// Initial state
const state = {
    logged: false,
    email: null
}

// Getters
const getters = {}

// Setters
const mutations = {

    setEmail(state, email) {
        
        state.email = email
        state.logged = typeof email === 'string' && email.length > 0

        if(state.logged)
            localStorage.setItem('email', email)
        else
            localStorage.removeItem('email', email)

    }

}

// Methods
const actions = {

    initialiseStore({ commit }) {

        if (localStorage.getItem('email'))
            commit('setEmail', localStorage.getItem('email'))

    },

    login({ commit }, user) {

        console.log(user);

        commit('setEmail', user.email)

    },

    logout({ commit }) {

        commit('setEmail', null)

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