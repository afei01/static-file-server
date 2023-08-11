//1.导入模块
const express = require("express");

//2.创建服务器
const app = express();
const port = process.env.PORT || 3000;

// 3、处理静态文件的中间件
// 从files目录中伺服静态文件
app.use(express.static("files"));

//4.开启服务器
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});

// 5.使用模板生成html响应
app.set("view engine", "pug");
app.get("/template", (req, res) => {
  res.render("template");
});
