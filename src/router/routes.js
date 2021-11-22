import { routes as pages } from '@/contexts/Pages'
import { routes as user } from '@/contexts/User'
import { routes as lesson } from '@/contexts/Lesson'

export default [
    ...pages,
    ...user,
    ...lesson
]