import Vue from 'vue'
import Router from 'vue-router'

import index from '~/pages/index.vue'
import RegisterPage from '~/pages/RegisterPage.vue'
import LoginPage from '~/pages/LoginPage.vue'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: index,
            },
            {
                path: '/register',
                component: RegisterPage,
            },
            {
                path: '/login',
                component: LoginPage,
            },
        ]
    })
}