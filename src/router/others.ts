import Root from '@/components/root'
import NotFound from '@/pages/others/notFound'
import Packing from '@/pages/others/packing'

const othersPagesConfig = [
    {
        path: '/others',
        name: '其他',
        component: Root,
        routes: [
            {
              path: "/others/packings",
              name: '打包对比',
              component: Packing
            }
        ]
    },
    {
        path: '*',
        name: '其他',
        hidden: true,
        component: NotFound
    }
]

export default othersPagesConfig