import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../views/Home'),
        meta: {
            title: '八大菜系介绍'
        }
    },
    {
        path: '/luCai',
        component: () => import('../views/luCai'),
        meta: {
            title: '鲁菜'
        },
        children: [
            {
                path: 'history',
                component: () => import('../views/luCai/history/index'),
                meta: {
                    title: '发展历史'
                },
                children: [
                    {
                        path: 'qinAndHan',
                        component: () => import('../views/luCai/history/qinAndHanDynasties'),
                        meta: {
                            title: '秦汉时期'
                        }
                    },
                    {
                        path: 'northernWei',
                        component: () => import('../views/luCai/history/northernWeiDynasty'),
                        meta: {
                            title: '北魏时期'
                        }
                    }
                ]
            },
            {
                path: 'features',
                component: () => import('../views/luCai/features'),
                meta: {
                    title: '风味特色'
                }
            }
        ]
    },
    {
        path: '/chuanCai',
        component: () => import('../views/chuanCai'),
        meta: {
            title: '川菜'
        },
        children: [
            {
                path: 'introduction',
                component: () => import('../views/chuanCai/introduction'),
                meta: {
                    title: '川菜概论'
                }
            },
            {
                path: 'history',
                component: () => import('../views/chuanCai/history'),
                meta: {
                    title: '发展历史'
                }
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export { router, routes }
