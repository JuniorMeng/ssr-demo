import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';

import Home from '../components/Home';

const app = express();

app.get('/', (_: unknown, res: express.Response) => {
    res.send(
        ` <div id="root">${renderToString(<Home />)}</div>
          <script src="/bundle.js"></script>
        `
    );
});

app.use(express.static('static'));

app.listen(4002, () => {
    console.log('Listening on port 4002');
});
