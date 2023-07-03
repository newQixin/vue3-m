import { createRouter, createWebHistory, RouteRecordRaw, RouterOptions, Router } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: '',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index.vue'),
        children: [
            {
                path: '',
                name: 'IndexPage',
                meta: {
                    index: 1
                },
                component: () => import('@/views/HomePage/index.vue')
            },
            {
                path: 'article',
                name: 'article',
                meta: {
                    index: 2
                },
                component: () => import('@/views/Article/index.vue')
            }
        ]
    }
]

const options: RouterOptions = {
    history: createWebHistory(),
    routes: routes
}

const router: Router = createRouter(options)
export default router
