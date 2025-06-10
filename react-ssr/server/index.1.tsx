import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../client/App';

const app = express();

app.get('/', (_: unknown, res: express.Response) => {
    const userName = ['张三', '李四', '王五', '赵六'][(Math.random() * 4) | 0];
    res.send(renderToString(<App userName={userName} />));
});

app.listen(4000, () => {
    console.log('Listening on port 4000');
});
