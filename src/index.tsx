import React from 'react';
import ReactDOM from 'react-dom'
import './index.less';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { renderRoutes } from 'react-router-config'
import configureStore, { history } from './redux/configureStore'
import reportWebVitals from './reportWebVitals';
import routeConfig from './router'

const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  // <HashRouter>
  //   {renderRoutes(routeConfig)}
  // </HashRouter>,
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      {renderRoutes(routeConfig)}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
// ReactDOM.render(<Router routes={routeConfig} />, document.body)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
