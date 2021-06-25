import App from '../App'
import reactPagesConfig from './react'
import othersPagesConfig from './others'
import Index from '@/pages/index'
// import Babel from '@/pages/babel'
// import NotFound from '@/pages/others/notFound'

const routeConfig = [
    {
        component: App,
        routes: [
            {
                path: '/',
                name: '首页',
                exact: true,
                component: Index
            },
            // {
            //     name: 'Babel',
            //     path: '/babel',
            //     exact: true,
            //     component: Babel
            // },
            ...reactPagesConfig,
            ...othersPagesConfig
        ]
    }
]

export default routeConfig