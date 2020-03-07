const express = require("express");
const app = express();
const port = 3000;
// 模版引擎
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
// 静态文件
app.use(express.static("public"));
// 子路由
var homeRouter = require("./routes/home");
app.use("/", homeRouter);

var userRouter = require("./routes/users");
app.use("/user", userRouter);
// 端口监听
app.listen(port, () => console.log(`App listening to port ${port}`));
