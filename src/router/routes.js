import { routes as pages } from '@/contexts/Pages'
import { routes as user } from '@/contexts/User'
import { routes as course } from '@/contexts/Course'
import { routes as lesson } from '@/contexts/Lesson'

export default [
    ...pages,
    ...user,
    ...course,
    ...lesson
]