import Root from '@/components/root'
import ReactRedux from '@/pages/react/react-redux'
import ReactRouter from '@/pages/react/react-router'


const reactPagesConfig = [
    {
        path: '/react',
        name: 'React',
        component: Root,
        routes: [
            {
                path: '/react/redux',
                exact: true,
                name: 'Redux',
                component: ReactRedux
            },
            {
                path: '/react/router',
                name: 'Router',
                exact: true,
                component: ReactRouter
            }
        ]
    }
]

export default reactPagesConfig