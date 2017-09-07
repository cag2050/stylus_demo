import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Iterator1 from '@/components/Iterator1'
import Iterator2 from '@/components/Iterator2'
import Iterator3 from '@/components/Iterator3'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Iterator1',
            component: Iterator1
        },
        {
            path: '/iterator2',
            name: 'Iterator2',
            component: Iterator2
        },
        {
            path: '/iterator3',
            name: 'Iterator3',
            component: Iterator3
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        }
    ]
})
