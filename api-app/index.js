const express = require('express');
const cors = require('cors');
const app = express();

// CORSミドルウェアを使って全てのCORSを許可
app.use(cors());

app.use(express.json());

app.get('/type-a', (req, res) => {
  const resData = { id: 1, type: 'api-type-A', now: new Date() };
  setTimeout(() => {
    res.send(resData);
  }, 3000);
});

app.get('/type-b', (req, res) => {
  const resData = { id: 2, type: 'api-type-B', now: new Date() };
  setTimeout(() => {
    res.send(resData);
  }, 3000);
});

const port = process.env.PORT || 3010;
app.listen(port, () => console.log(`Listening on port ${port}...`));
