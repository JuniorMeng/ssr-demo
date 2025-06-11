import express from 'express';
import {render} from './utils';

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
app.get('*', function (req, res) {
   res.send(render(req));
});
 
app.listen(4004, () => {
  console.log('listen:4004')
});