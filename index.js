const express = require("express");
const pageRouter = require("./src/routes/services-router");
const blogRouter = require("./src/routes/blog-router");
const appLoger = require("./src/utils/app-logger");
const app = express();
const env = require("./env");
const path = require('path')
app.use(pageRouter);
app.use(blogRouter);
// require("./src/db/mongoose");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname , 'public'))
app.use(express.static(path.join(__dirname, 'public')))
port = process.env.PORT || 80
app.listen(port, () => {
  appLoger.debug(
    "server is up on port " + env.SERVER_PORT,
    "debug",
    "server is up on http://localhost:" + env.SERVER_PORT
  );
});
