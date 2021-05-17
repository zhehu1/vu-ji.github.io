import { FC } from 'react'
import './App.less';
import { renderRoutes, RouteConfig } from 'react-router-config'
import MyLayout from './components/layout'

const App: FC<RouteConfig> = ({ route }) => {
  return <MyLayout>
    {renderRoutes(route.routes)}
  </MyLayout>
}

export default App;