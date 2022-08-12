const path = require('path');
const express = require('express');

const app = express();
const PORT = 3001 || process.env.NODE_ENV;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('root route');
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
