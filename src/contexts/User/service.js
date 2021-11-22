import store from '@/store'
import router from '@/router'
import { Response } from '@/model'
import { UserApi } from '@/api'

// Valida se é uma página segura
function validateIsLogged() {

    if (store.state.user.logged)
        router.push('/lesson')

}

// Valida se é uma senha válida
function validatePassword(password) {

    return password.length < 8 || !((/[a-zA-Z]+/gm.test(password)) && /[0-9]+/gm.test(password))

}

// Faz o login
async function login(user) {

    const response = new Response()
    const users = await UserApi.getUserByEmailPassword(user.email, user.password)

    if (users == null)
        response.state = 'error'

    else if (users.length == 0)
        response.state = 'notFound'

    else if (users.length > 0) {

        response.state = 'success'
        store.dispatch('user/login', user)
        router.push({ name: 'Dashboard' })

    }

    return response

}

// Faz o registro de um novo usuário
async function signUp(user) {

    const response = new Response()
    
    // Verifica se o usuário já está registrado
    const users = await UserApi.getUserByEmail(user.email)

    if (users == null)
        response.state = 'error'

    else if (users.length > 0)
        response.state = 'alreadyRegistered'

    if (response.state != null)
        return response

    // Registra o novo usuário
    user = await UserApi.registerNewUser(user)

    if (user == null)
        response.state = 'error'

    else if (user.id > 0)
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