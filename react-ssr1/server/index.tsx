import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Home from '../components/Home';

const app = express();

app.get('/', (_: unknown, res: express.Response) => {
    res.send(
        ` <div id="root">${renderToString(<Home />)}</div>
        `
    );
});

app.listen(4001, () => {
    console.log('Listening on port 4001');
});
