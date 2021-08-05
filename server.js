const express = require('express');
const path    = require('path');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
// const config = require('./webpack.config.js');
// const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );

app.use(express.static(path.join(__dirname, './public')));

// Serve the files on port 3000.
// app.listen(process.env.PORT);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!\n');
// });