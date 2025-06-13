import express from 'express'
const app = express();

app.get('/', function(req, res) {
    res.send(`
        <html>
            <head>
                <title>SSR</title>
            </head>
            <body>
                <p>hello world</p>
            </body>
        </html>
    `);
});

app.set('view engine', 'ejs');

// 路由
app.get('/ejs', (req, res) => {
  const data = {
    title: 'EJS Demo',
    message: 'Hello from EJS!',
    items: ['Apple', 'Banana', 'Cherry'],
    user: {
      name: 'John Doe',
      age: 30
    }
  };
  res.render('index', data);
});

app.listen(4001, function() {
    console.log('listen:4001');
});