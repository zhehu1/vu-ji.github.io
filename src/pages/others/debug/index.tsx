import React, { FC } from 'react'
import AntdMarkdown from '@/components/antdMarkdown'
import mdDoc from './index.md'

const Debug: FC = () => {
    return <AntdMarkdown>{mdDoc}</AntdMarkdown>
}

export default Debug