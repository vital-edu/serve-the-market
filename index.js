require('dotenv').config()

const express = require('express');
const { setup } = require('radiks-server');

const app = express();

app.get('/', () => {
  setup({
    mongoDBUrl: process.env.MONGODB_URI,
  }).then(RadiksController => {
    app.use('/radiks', RadiksController);
  }).catch((err) => console.log(err));
})

app.listen(4000, () => {
  console.log('server is running at port 4000')
});
