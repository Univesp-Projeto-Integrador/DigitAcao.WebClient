import http from './http'

const userSignUp = async (user) => {

    const response = {
        state: null,
        content: null
    }

    await http
        .get(`user?email=${user.email}`)
        .then(res => {

            if(res.data.length == 0)
                return

            response.state = 'alreadyRegistered'

        })
        .catch(error => {
            
            response.state = 'error'
            response.content = error

        })

    if(response.state != null)
        return response
    
    await http
        .post('user', user)
        .then(res => {

            response.state = 'success'
            response.content = res.data

        })
        .catch(error => {
            
            response.state = 'error'
            response.content = error

        })

    return response;

}

const userLogin = () => {

    console.log('userLogin')

}

export {
    userSignUp,
    userLogin
}