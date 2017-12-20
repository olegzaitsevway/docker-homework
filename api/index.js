import app from './server';

const port = process.env.PORT || 3005;

app.listen(port, () => console.log('Hello, I am api server', port));
