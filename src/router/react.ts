import Root from '@/components/root'
import AsyncComponent from '@/components/asyncComponent'

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
                component: AsyncComponent(() => import('@/pages/react/react-redux'))
            },
            {
                path: '/react/router',
                name: 'Router',
                exact: true,
                component: AsyncComponent(() => import('@/pages/react/react-router'))
            }
        ]
    }
]

export default reactPagesConfig