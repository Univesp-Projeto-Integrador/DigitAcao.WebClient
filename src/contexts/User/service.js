import store from '@/store'
import router from '@/router'
import { Response } from '@/model'
import { UserApi } from '@/api'

// Valida se é uma página segura
function validateIsLogged() {

    if (store.state.user.logged)
        router.push('/dashboard')

}

// Valida se é uma senha válida
function validatePassword(password) {

    return password.length < 8 || !((/[a-zA-Z]+/gm.test(password)) && /[0-9]+/gm.test(password))

}

// Faz o login
async function login(user) {

    const response = new Response()
    
    user = await UserApi.login(user)

    if (user == null)
        response.state = 'error'

    else if (user.data == null)
        response.state = 'notFound'

    else {

        response.state = 'success'
        store.dispatch('user/login', user.data)
        router.push({ name: 'Dashboard' })

    }

    return response

}

// Faz o registro de um novo usuário
async function signUp(user) {

    const response = new Response()
    
    // Registra o novo usuário
    user = await UserApi.signUp(user)

    if (user == null)
        response.state = 'error'

    else if (user.erros.length > 0)
        response.state = 'alreadyRegistered'

    else if (user.data.userId > 0)
        response.state = 'success'

    return response

}

// Config
export {
    validateIsLogged,
    validatePassword,
    login,
    signUp
}