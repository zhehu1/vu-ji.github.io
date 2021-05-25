import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
    return <div>
        页面找不到啦。<Link to="/">返回首页</Link>
    </div>
}

export default NotFound