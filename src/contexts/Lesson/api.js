import http from '@/api/http'

async function getLesson(lessonId) {

    try {

        const response = await http.get(`lesson/${lessonId}`)

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
    getLesson
}