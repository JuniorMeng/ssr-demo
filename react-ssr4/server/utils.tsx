import App from '../shared/App'
import { renderToString } from 'react-dom/server';
//重要是要用到StaticRouter
import { StaticRouter } from 'react-router-dom'; 
import React from 'react'
import createStore from '../client/store';

export const render = (req: any) => {
  const store = createStore();
  //构建服务端的路由
  const content = renderToString(
    <StaticRouter location={req.path} >
      <App store={store} />
    </StaticRouter>
  );
  return `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
}