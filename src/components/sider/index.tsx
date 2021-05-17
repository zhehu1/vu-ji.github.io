import { FC } from 'react'
import { useHistory } from "react-router-dom";
import { Layout, Menu } from 'antd';

// const { SubMenu } = Menu;

const { Sider } = Layout;

const ComSider: FC = (props) => {
    let history = useHistory();

    const handleClick = (e: any) => {
        history.push(e.key)
    };
    return <Sider className="site-layout-background">
        <Menu
            onClick={handleClick}
            defaultSelectedKeys={['/']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <Menu.ItemGroup key="g1">
                <Menu.Item key="/">首页</Menu.Item>
                <Menu.Item key="/babel">babel</Menu.Item>
            </Menu.ItemGroup>
        </Menu>
    </Sider>
};


export default ComSider