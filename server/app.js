const path = require('path');
const express = require('express');

const app = express();
const PORT = 3001 || process.env.NODE_ENV;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* TODO:FETCH */
app.get('/test', (req, res) => {
  res.json('test route');
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
