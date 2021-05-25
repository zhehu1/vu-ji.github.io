## React Route 

### 主要三类组建
- Routers(路由)， \<BrowserRouter\> 和 \<HashRouter\>
- Matchers(路由匹配器)，\<Route\> 和 \<Switch\>
- Navigation(导航)，\<Link\>、 \<NavLink\> 和 \<Redirect\>

#### Routers
> 每种路由的核心都是一个路由组件。在web项目中`react-router-dom`提供了\<BrowserRouter\>和\<HashRouter\>两种路由方式，主要不同在于URL以及与服务器的交互方式。  
> 同时，使用路由时，要确保他们处于所呈现元素的根。

##### BrowserRouter  
使用常规的URL，但需要进行服务器配置。需要对用户的访问返回同一个页面，具体的path交由`BrowserRouter`去处理具体展现

##### HashRouter
页面的路由信息存储在hash部分，不需要对服务器做特殊配置即可使用

#### Matchers
- Switch 包裹的 route 匹配到第一个后立即停止匹配。如果没有 route，什么都不渲染
- Route path 与 URL 的开头匹配而不是全匹配，exact 属性可以实现全匹配

#### Navigation
- Link 会在 DOM 中渲染一个 \<a\>
- NavLink 当匹配时，会将自己设置为 active
- Redirect 重定向，当前path不会写入history

### 服务端渲染
详细见<Link to="/react/ssr">SSR</Link>

### 动态加载（代码分割）
babel 配置  
```
{
  "presets": ["@babel/preset-react"],
  "plugins": ["@babel/plugin-syntax-dynamic-import"]
}
```

路由配置  
```
const LoadableComponent = loadable(() => import("./Dashboard.js"), {
  fallback: <Loading />
});
```

### 结语



### [\<Route\>](https://reactrouter.com/web/api/Route)
> component/render/children 渲染方式对比说明



