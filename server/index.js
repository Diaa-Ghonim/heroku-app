
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_URI || 'mongodb://localhost:27017/test',
  {
    useNewUrlParser: true, useUnifiedTopology: true
  }
);
const Cat = mongoose.model('Cat', { name: String });
const kitty = new Cat({ name: 'kitty' });
kitty.save().then(() => console.log('meow'));
app.get('/kitty', (req, res) => {
  console.log('reuest to get kitty')
  Cat.find({}).then(kitty => {
    res.json(kitty);
  })
})
const port = process.env.PORT || 8080;
app.use('/static', express.static(path.join(__dirname, '..')))



app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})
app.listen(port, () => console.log(`app is running now on port ${port}!!`));