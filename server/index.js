const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uploadRoute = require('./routes/upload');
app.use('/upload', uploadRoute);

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
