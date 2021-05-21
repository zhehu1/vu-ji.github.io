import Root from '@/components/root'
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
    }
]

export default othersPagesConfig