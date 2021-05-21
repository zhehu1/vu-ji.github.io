import React, { FC } from 'react'
import AntdMarkdown from '@/components/antdMarkdown'
import mdDoc from './index.md'

const Packing: FC = () => {
    return <AntdMarkdown>{mdDoc}</AntdMarkdown>
}

export default Packing