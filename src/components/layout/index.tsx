import { Layout } from 'antd';
import "./index.less"

const { Header, Sider, Content } = Layout;

const ComLayout = () => {
    return <Layout className="site-layout">
                <Header className="site-layout-background"/>
                <Layout>
                    <Sider className="site-layout-background">Sider</Sider>
                    <Content>Content</Content>
                </Layout>
            </Layout>
};
  

export default ComLayout