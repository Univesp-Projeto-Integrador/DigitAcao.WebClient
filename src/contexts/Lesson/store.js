import { LessonApi } from '@/api'
import { UserLesson, UserLessonInput } from '@/model'
import { useRoute } from 'vue-router'

// Initial state
const state = {
    
    // View control
    content: 'Carregando...',
    currentCharPosition: 0,
    status: 'loading',
    typedKey: null,
    nextLessonId: null,
    
    // Model control
    typedContent: '',
    totalKeys: 0,
    errorsKeys: 0,
    accuracy: 0,
    totalWords: 0,
    wpm: 0, // Words per minute
    kpm: 0, // Keys per minute
    score: null,
    startedIn: null,
    finishedIn: null,
    time: '00:00',
    userInputs: []

}

const statusDescriptions = {
    'loading': 'Carregando...',
    'not-started': 'Não iniciado',
    'ok': 'Digitando...',
    'wrong-key': 'Tecla errada',
    'finished': 'Finalizado'
}

// Getters
const getters = {

    getContent: (store) => store.content,
    getStatus: (store) => store.status,
    getAccuracy: (store) => store.accuracy,
    getWpm: (store) => store.wpm,
    getKpm: (store) => store.kpm,
    getTypedKey: (store) => store.typedKey,
    getTime: (store) => store.time,
    getScore: (store) => store.score,
    getNextLessonId: (store) => store.nextLessonId,
    
    getCurrentTime: (store) => store.startedIn ? (store.finishedIn || new Date()) - store.startedIn : 0,
    currentChar: (store) => store.content[store.currentCharPosition],
    lastChar: (store) => store.content[store.currentCharPosition - 1],
    lessonComplete: (store) => store.currentCharPosition >= store.content.length,
    finished: (store) => store.finishedIn != null,
    started: (store) => store.startedIn != null,
    getStatusDescription: (store) => (statusDescriptions[store.status]),
    scoreLetter: (store) => {
        if(store.score == null)
            return null
        else if (store.score >= 1)
            return 'A'
        else if (store.score >= 0.8)
            return 'B'
        else if (store.score >= 0.6)
            return 'C'
        else if (store.score >= 0.4)
            return 'D'
        else if (store.score >= 0.2)
            return 'E'
        else
            return 'F'
    },
    ready: (store) => store.status != 'loading'
    
}

// Setters
const mutations = {

    reset: (state) => {

        // View control
        state.content = 'Carregando...'
        state.currentCharPosition = 0
        state.status = 'loading'
        state.typedKey = null
        
        // Model control
        state.typedContent = ''
        state.totalKeys = 0
        state.errorsKeys = 0
        state.accuracy = 0
        state.totalWords = 0
        state.wpm = 0,
        state.kpm = 0,
        state.score = null
        state.startedIn = null
        state.finishedIn = null
        state.time = '00:00'
        state.userInputs = []

    },
    setContent: (state, content) => state.content = content,
    setNextLessonId: (state, nextLessonId) => state.nextLessonId = nextLessonId,
    setTypedKey: (state, key) => {
        state.typedKey = key
        state.typedContent += key
        state.totalKeys++
    },
    pushUserInput: (sate, userLessonInput) => state.userInputs.push(userLessonInput),
    setStatusNotStarted: (state) => state.status = 'not-started',
    setStatusOk: (state) => state.status = 'ok',
    setStatusWrongKey: (state) => {
        state.status = 'wrong-key'
        state.errorsKeys++
    },
    setStatusFinished: (state) => state.status = 'finished',
    updateAccuracy: (state) => state.accuracy = (state.totalKeys - state.errorsKeys) / state.totalKeys,
    nextChar: (state) => state.currentCharPosition++,
    incrementTotalWords: (state) => state.totalWords++,
    updateWpm: (state) => {
        
        let now = new Date();
        let seconds = (now - state.startedIn) / 1000
        let wordsPerSecond = state.totalWords / seconds

        state.wpm = wordsPerSecond * 60

    },
    updateScore: (state) => {

        if(!state.startedIn) {
            state.score = null
            return
        }

        let idealWpm = 65;
        let scoreWpm = state.wpm == 0 || state.wpm >= idealWpm ? 1 : state.wpm / idealWpm
        
        state.score = (state.accuracy * 0.3) + (scoreWpm * 0.7)

    },
    updateKpm: (state) => {
        
        let now = new Date();
        let seconds = (now - state.startedIn) / 1000
        let keysPerSecond = state.totalKeys / seconds

        state.kpm = keysPerSecond * 60

    },
    start: (state) => state.startedIn = new Date(),
    finish: (state) => state.finishedIn = new Date(),
    updateTime: (state, time) => state.time = time

}

// Methods
const actions = {

    load: async ({ commit, dispatch }, lessonId) => {
        
        dispatch('setTitle', 'Carregando...', { root: true })

        commit('reset')
        
        let lesson = await LessonApi.getLesson(lessonId)

        commit('setContent', lesson.data.lessonContent)
        commit('setNextLessonId', lesson.data.nextLessonId)
        commit('setStatusNotStarted')

        dispatch('setTitle', `Lição: ${lesson.data.order}`, { root: true })

    },
    
    typeKey: ({ commit, getters, dispatch }, key) => {

        if (key.length != 1 || getters.finished)
            return

        if (!getters.started)
            dispatch('start')
        
        commit('setTypedKey', key)
        commit('updateKpm')
        
        if (key != getters.currentChar)
            commit('setStatusWrongKey')
        
        else {
        
            commit('setStatusOk')
            commit('nextChar')
            
            if (key == ' ')
                dispatch('incrementTotalWords')
            
            if (getters.lessonComplete)
                dispatch('finish')
            
        }
        
        dispatch('updateAccuracy')
        dispatch('setUserInput')

    },

    setUserInput: ({ commit, getters }) => {

        const userLessonInput = new UserLessonInput()

        userLessonInput.key = getters.getTypedKey
        userLessonInput.isTheCorrectKey = getters.getStatus == 'ok'
        userLessonInput.keyDownIn = new Date()

        commit('pushUserInput', userLessonInput)

    },

    start: ({ commit }) => {

        commit('start')

    },

    finish: ({ commit, dispatch }) => {

        dispatch('incrementTotalWords')
        commit('updateKpm')
        commit('setStatusFinished')
        commit('finish')
        dispatch('updateTime')
        
    },

    updateTime: ({ commit, getters }) => {

        let seconds = Math.round(getters.getCurrentTime / 1000)
        let minutes = Math.floor(seconds / 60)

        let displaySeconds = seconds % 60
        let displayMinutes = minutes

        if (displaySeconds <= 9)
            displaySeconds = `0${displaySeconds}`
        
        if (displayMinutes <= 9)
            displayMinutes = `0${displayMinutes}`

        commit('updateTime', `${displayMinutes}:${displaySeconds}`)

    },
    
    updateAccuracy: ({ commit }) => {

        commit('updateAccuracy')
        commit('updateScore')

    },
    
    incrementTotalWords: ({ commit, dispatch }) => {
        
        commit('incrementTotalWords')
        dispatch('updateWpm')
        
    },
    
    updateWpm: ({ commit }) => {
        
        commit('updateWpm')
        commit('updateScore')

    },
    
    updateKpm: ({ commit }) => commit('updateKpm')

}

// Config
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}