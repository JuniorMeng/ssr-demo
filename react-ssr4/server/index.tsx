import express from 'express';
import {render} from './utils';

const app = express();
app.use(express.static('static'));
//注意这里要换成*来匹配
app.get('*', function (req, res) {
   res.send(render(req));
});
 
app.listen(4004, () => {
  console.log('listen:4004')
});