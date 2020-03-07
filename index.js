const express = require("express");
const app = express();
const port = 3000;
//Loads the handlebars module
const handlebars = require("express-handlebars");
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    defaultLayout: "default"
  })
);

app.use(express.static("public"));

var homeRouter = require("./routes/home");
app.use("/", homeRouter);

var userRouter = require("./routes/users");
app.use("/user", userRouter);

app.listen(port, () => console.log(`App listening to port ${port}`));
