import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../views/OnePage'),
        meta: {
            title: 'OnePageTitle'
        }
    },
    {
        path: '/TwoPagePath',
        component: () => import('../views/TwoPage'),
        meta: {
            title: 'TwoPageTitle'
        },
        children: [
            {
                path: 'TwoOnePagePath',
                component: () => import('../components/twos/TwoOnePage'),
                meta: {
                    title: 'TwoOnePageTitle'
                }
            },
            {
                path: 'TwoTwoPagePath',
                component: () => import('../components/twos/TwoTwoPage'),
                meta: {
                    title: 'TwoTwoPageTitle'
                }
            },
            {
                path: 'TwoThreePagePath',
                component: () => import('../components/twos/TwoThreePage'),
                meta: {
                    title: 'TwoThreePageTitle'
                }
            }
        ]
    },
    {
        path: '/ThreePagePath',
        component: () => import('../views/ThreePage'),
        meta: {
            title: 'ThreePageTitle'
        },
        children: [
            {
                path: 'ThreeOnePagePath',
                component: () => import('../components/threes/ThreeOnePage'),
                meta: {
                    title: 'ThreeOnePageTitle'
                }
            },
            {
                path: 'ThreeTwoPagePath',
                component: () => import('../components/threes/ThreeTwoPage'),
                meta: {
                    title: 'ThreeTwoPageTitle'
                }
            },
            {
                path: 'ThreeThreePagePath',
                component: () => import('../components/threes/ThreeThreePage'),
                meta: {
                    title: 'ThreeThreePageTitle'
                }
            }
        ]
    },
]

const router = new VueRouter({
    routes
})

export { router, routes }