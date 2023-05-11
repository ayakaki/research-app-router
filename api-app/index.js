const express = require('express');
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: 'computer science' },
  { id: 2, name: 'information technology' },
  { id: 3, name: 'business intelligence' },
];

app.get('/', (req, res) => {
  res.send(courses);
});

const port = process.env.PORT || 3010;
app.listen(port, () => console.log(`Listening on port ${port}...`));
