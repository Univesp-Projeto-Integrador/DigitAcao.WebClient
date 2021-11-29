import http from '@/api/http'

async function getCourses() {

    try {

        const response = await http.get(`course/`)

        if (response.status != 200)
            return null

        return response.data

    } catch (e) {

        console.log(e);
        return null

    }

}

async function getLessons(courseId) {

    try {

        const response = await http.get(`lesson/?courseId=${courseId}`)

        if (response.status != 200)
            return null

        return response.data

    } catch (e) {

        console.log(e);
        return null

    }

}

// Config
export {
    getCourses,
    getLessons
}