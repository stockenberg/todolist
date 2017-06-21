import Vue from 'vue'
import Router from 'vue-router'
import PageTodo from '@/components/todo/PageTodo'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Todo',
            component: PageTodo
        },
        {
            path: '/test',

        }
    ]
})
