require('dotenv').config()

const express = require('express');
const { setup } = require('radiks-server');

const app = express();
const port = process.env.PORT || 4000

app.get('/', () => {
  setup({
    mongoDBUrl: process.env.MONGODB_URI,
  }).then(RadiksController => {
    app.use('/radiks', RadiksController);
  }).catch((err) => console.log(err));
})

app.listen(port, () => {
  console.log(`server is running at port ${port}`)
});
