import { FC, useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import { Layout, Menu } from 'antd';
import routeConfig from '@/router'

const { SubMenu } = Menu;

const { Sider } = Layout;

const getMenuItem = (route: any) => {
    return <Menu.Item key={route.path}>{route.name}</Menu.Item>
}

const getSubMenu= (route: any) => {
    return <SubMenu key={route.path} title={route.name}>
        {
            route.routes.map((item: any) => {
                return getMenuItem(item)
            })
        }
    </SubMenu>
}

const ComSider: FC = () => {
    const history = useHistory();
    const location = useLocation();
    let [ selectKeys, setSelectKeys ] = useState(['/'])
    const { routes } = routeConfig[0]

    const handleClick = (e: any) => {
        history.push(e.key)
    };

    useEffect(() => {
        setSelectKeys([location.pathname])
    }, [location]);

    return <Sider className="site-layout-background">
        <Menu
            onClick={handleClick}
            selectedKeys={selectKeys}
            mode="inline"
        >
            {
                routes.map((item: any) => {
                    if (item.routes) {
                        return getSubMenu(item)
                    } else {
                        return getMenuItem(item)
                    }
                })
            }
        </Menu>
    </Sider>
};


export default ComSider