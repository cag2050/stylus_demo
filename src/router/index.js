import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Iterator from '@/components/Iterator'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Iterator',
            component: Iterator
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        }
    ]
})
