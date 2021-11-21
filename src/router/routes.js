import { routes as home } from '@/views/Home'
import { routes as about } from '@/views/About'
import { routes as user } from '@/views/User'
import { routes as lesson } from '@/views/Lesson'

export default [
    ...home,
    ...user,
    ...about,
    ...lesson
]