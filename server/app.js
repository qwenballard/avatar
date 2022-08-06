const path = require('path');
const express = require('express');

const app = express();
const PORT = 3001;
const mode = process.env.NODE_ENV;
const cors = require('cors');

app.use(cors({ credentials: true, origin: 'http://localhost:8080' }));

if (mode === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
