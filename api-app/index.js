const express = require('express');
const cors = require('cors');
const app = express();

// CORSミドルウェアを使って全てのCORSを許可
app.use(cors());

app.use(express.json());

const typeA = { id: 1, type: 'api-type-A' };
const typeB = { id: 2, type: 'api-type-B' };

app.get('/type-a', (req, res) => {
  setTimeout(() => {
    res.send(typeA);
  }, 3000);
});

app.get('/type-b', (req, res) => {
  setTimeout(() => {
    res.send(typeB);
  }, 3000);
});

const port = process.env.PORT || 3010;
app.listen(port, () => console.log(`Listening on port ${port}...`));
