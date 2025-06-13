import express from 'express';
import {render} from './utils';
import routes from '../shared/routes'
import { matchRoutes } from 'react-router-dom';
import createStore from '../shared/store';
const store = createStore();
const app = express();
app.use(express.static('static'));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

app.get('/api/getUserInfo', function (req, res) {
   setTimeout(() => {
    res.json({
      name: 'zhangsan',
      age: 18,
      sex: 'man'
    });
   }, 1000);
});

//注意这里要换成*来匹配
app.get('*', async(req, res) => {
  const matchedRoutes = matchRoutes(routes, req.path)
  //promise对象数组
  const promises: any[] = [];
  matchedRoutes?.forEach((item) => {
    //如果这个路由对应的组件有loadData方法
    if (item && item.route && item.route.loadData) {
      // console.log(item.route.loadData)
      // item?.route?.loadData(store)
      promises.push(item.route.loadData(store))
    }
  })
  await Promise.all(promises)
  res.send(render(req, store));
});
 
app.listen(4006, () => {
  console.log('listen:4006')
});