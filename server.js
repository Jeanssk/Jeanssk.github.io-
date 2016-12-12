console.log("Jean's CV")

const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('./'));

app.listen(3000, function() {
  console.log('listening on 3000')
})


