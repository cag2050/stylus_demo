import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Stylus from '@/components/Stylus'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Stylus',
            component: Stylus
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        }
    ]
})
