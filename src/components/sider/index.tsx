import React, { FC, useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import { Layout, Menu } from 'antd';
import routeConfig from '@/router'

const { SubMenu } = Menu;

const { Sider } = Layout;

const getMenuItem = (route: any) => {
    if (route.hidden) {
        return null
    }
    return <Menu.Item key={route.path}>{route.name}</Menu.Item>
}

const getSubMenu = (route: any) => {
    if (route.hidden) {
        return null
    }
    return <SubMenu key={route.path} title={route.name}>
        {
            route.routes.map((item: any) => {
                return getMenuItem(item)
            })
        }
    </SubMenu>
}

const getSubMenuOpenKeys = (routes: any = [], key: string) : Array<string> => {
    let result: Array<string> = []
    for (let o in routes) {
        const curr = routes[o]
        if (key.startsWith(curr.path) && curr.routes) {
            result.push(curr.path)
            result.concat(getSubMenuOpenKeys(curr.routes, key))
            break
        }
    }
    return result
}

const ComSider: FC = () => {
    const history = useHistory();
    const location = useLocation();
    const [ selectKeys, setSelectKeys ] = useState(['/'])
    const [ openkeys, setOpenKeys ] = useState<Array<string>>([''])
    const { routes } = routeConfig[0]

    const handleClick = (e: any) => {
        history.push(e.key)
    };

    const handleOpenKeys = (keys: Array<React.Key>) => {
        setOpenKeys([keys.pop()] as Array<string>)
    }

    useEffect(() => {
        setSelectKeys([location.pathname])
        setOpenKeys(getSubMenuOpenKeys(routes, location.pathname))
    }, [location, routes]);

    return <Sider className="site-layout-background">
        <Menu
            onClick={handleClick}
            onOpenChange={handleOpenKeys}
            openKeys={openkeys}
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