const express = require("express");
const pageRouter = require("./src/routes/services-router");
const blogRouter = require("./src/routes/blog-router");
const localiztionRout = require("./src/routes/localization.router")
const path = require('path')
const ejs = require('ejs')
// const adminRouter = require("./src/routes/admin-router");
// const appLoger = require("./src/utils/app-logger");
const app = express();
// const env = require("./env");
app.use(pageRouter);
app.use(blogRouter);
app.use('/arabic',localiztionRout);
// app.use(adminRouter);
// require("./src/db/mongoose");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
// set the view path
app.set("views", path.join(__dirname, "public/views"));
// set where to find static files like css imgs etc
app.use(express.static(path.join(__dirname, "public/assets")));
app.get("/", (req, res) => {
    res.render("home.ejs");
  });
  app.get("/arabic", (req, res) => {
    res.render("home.ar.ejs");
  });
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// app.set('views', path.join(__dirname , 'public'))
// app.use(express.static(path.join(__dirname, 'public')))
// PORT = process.env.PORT || 5000
// app.listen(PORT, () => {
//   appLoger.debug(
//     "server is up on port " + env.SERVER_PORT,
//     "debug",
//     "server is up on http://localhost:" + env.SERVER_PORT
//   );
// });
const PORT = process.env.PORT || 4000;



app.listen(PORT,()=>{
    console.log("url http://localhost:4000");
})