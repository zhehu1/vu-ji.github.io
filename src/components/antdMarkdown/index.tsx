import React, { FC } from 'react'
import Markdown from 'markdown-to-jsx';
import { Typography, Collapse } from 'antd';
import { Link } from 'react-router-dom'
import "./index.less"

const { Panel } = Collapse;
const { Title, Paragraph, Text } = Typography;

interface IOverridesItem {
    [key: string]: any
}

const TitleLevel = [1, 2, 3, 4, 5, 6]

const TextTypes = ['disabled', 'mark', 'code', 'keyboard', 'underline', 'delete', 'strong']

const defaultProps = {
    options: {
        overrides: {
            Collapse,
            Panel,
            Link,
            ...TitleLevel.reduce((pre, curr) => {
                pre[`h${curr}`] = {
                    component: Title,
                    props: {
                        level: curr
                    },
                }
                return pre
            }, {} as IOverridesItem),
            ...TextTypes.reduce((pre, curr) => {
                pre[curr] = {
                    component: Text,
                    props: {
                        [curr]: true
                    }
                }
                return pre
            }, {} as IOverridesItem),
            p: Paragraph,
            span: Text,
            a: Typography.Link
        }
    },
    children: ''
}

const MyMarkdown: FC = (props) => {
    const renderProps = Object.assign({}, defaultProps, props)
    return <div className="my-markdown-container">
        <Markdown options={renderProps.options}>{renderProps.children}</Markdown>
    </div>
}

export default MyMarkdown