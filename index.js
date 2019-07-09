const express = require('express')
const convert = require('color-convert')
const app = express();
const port = 3000;

// app.get('/', (req, res) => res.send('hey there, ' + Col7b))
app.get('/convert/rgbtohsl/', (req, res) => {
  const { color } = req.query;
  console.log(color);
  const converter = convert.rgb.hex(color);
  res.send('hey there, converted to ' + converter + ", you were sent by " + req.route.path)
})

// app.get('/convert/rgbtohsl/', function (req, res, next) {
//   // req.send(167, 255, 4);
//   console.log(req);
//   console.log(`the response to your ${req.route.path} will be sent (by the next function) ...`)
//   next()
// }, function (req, res) {
//   res.send('Hello from B!')
// })

// app.get('/ex*', function (req, res, next) {
//   console.log(req);
//   console.log(`the response to your ${req.route.path} will be sent (by the next function) ...`)
//   next()
// }, function (req, res) {
//   res.send('Hello from B!')
// })


app.listen(port, () => console.log(`Example app listening on port ${port}`));