const express = require("express");
const app = express();
const port = 3000;
//Loads the handlebars module
const handlebars = require("express-handlebars");
//instead of app.set('view engine', 'handlebars');
app.set("view engine", "hbs");
//instead of app.engine('handlebars', handlebars({
app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    //new configuration parameter
    extname: "hbs"
  })
);

app.use(express.static("public"));
app.get("/", (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render("main", { layout: "index" });
});

app.listen(port, () => console.log(`App listening to port ${port}`));