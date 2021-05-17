import App from './App'
import Index from './pages/index'
import Babel from './pages/babel'

const routeConfig = [
    {
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: Index
            },
            {
                path: '/babel',
                exact: true,
                component: Babel
            }
        ]
    }
]

export default routeConfig