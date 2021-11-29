import http from '@/api/http'

async function login(user) {

    try {

        const response = await http.post(`user/login`, user)

        if (response.status != 200)
            return null

        return response.data

    } catch(e) {

        console.log(e);
        return null

    }

}

async function signUp(user) {

    try {

        const response = await http.post('user', user)

        if (response.status != 200 && response.status != 201)
            return null

        return response.data

    } catch (e) {

        console.log(e);
        return null

    }

}

// Config
export {
    login,
    signUp
}