import http from '@/api/http'

async function getUserByEmail(email) {
    
    try {
        
        const response = await http.get(`user?email=${email}`)

        if(response.status != 200)
            return null
            
        return response.data

    } catch (e) {

        console.log(e);
        return null

    }

}

async function getUserByEmailPassword(email, password) {

    try {
    
        const response = await http.get(`user?email=${email}&password1=${password}`)

        if (response.status != 200)
            return null

        return response.data

    } catch(e) {

        console.log(e);
        return null

    }

}

async function registerNewUser(user) {

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
    getUserByEmail,
    getUserByEmailPassword,
    registerNewUser
}