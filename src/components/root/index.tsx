import { FC } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'

const Root: FC<RouteConfig> = ({route}) => renderRoutes(route.routes)

export default Root