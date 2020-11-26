
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
app.use('/static', express.static(path.join(__dirname, '..')))



app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})
app.listen(port, () => console.log(`app is running now on port ${port}!!`));