import app from './server';

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Hello I am first server', port));
