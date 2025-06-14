import App from '../shared/App'
import { renderToString } from 'react-dom/server';
//重要是要用到StaticRouter
import { StaticRouter } from 'react-router-dom'; 
import React from 'react'
// import createStore from '../shared/store';

export const render = (req: any, store: any) => {
  // const store = createStore();
  //构建服务端的路由
  const content = renderToString(
    <StaticRouter location={req.path} >
      <App store={store} />
    </StaticRouter>
  );

  const preloadedState = store.getState();
   return `
      <html>
        <head>
          <title>ssr</title>
        </head>
        <body>
          <div id="root">${content}</div>
          // <script>
          //   window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState)}
          // </script>
          <script src="/bundle.js"></script>
        </body>
      </html>
    `

  // const matchedRoutes = matchRoutes(routes, req.path)
  // //promise对象数组
  // const promises: any[] = [];
  // matchedRoutes.forEach((item) => {
  //   //如果这个路由对应的组件有loadData方法
  //   if (item.route.loadData) {
  //     //那么就执行一次,并将store传进去
  //     //注意loadData函数调用后需要返回Promise对象
  //     promises.push(item.route.loadData(store))
  //   }
  // })
  // Promise.all(promises).then(() => {
  //    return `
  //     <html>
  //       <head>
  //         <title>ssr</title>
  //       </head>
  //       <body>
  //         <div id="root">${content}</div>
  //         <script src="/bundle.js"></script>
  //       </body>
  //     </html>
  //   `
  // })

  // const preloadedState = store.getState();
}