import { FC } from 'react'
import { Layout, Typography } from 'antd';
import ComSider from '../sider'
import './index.less'

const { Title } = Typography;

const { Header, Content } = Layout;

const ComLayout: FC = (props) => {
    return <Layout className="site-layout">
        <Header className="site-layout_header site-layout-background">
            <Title level={3}>vu-ji</Title>
        </Header>
        <Layout>
            <ComSider />
            <Content className="site-layout_content">{props.children}</Content>
        </Layout>
    </Layout>
};


export default ComLayout