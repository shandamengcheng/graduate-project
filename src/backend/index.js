var mysql = require("mysql");
// var express = require("express");
var cors = require("cors");
// var app = express();
var bodyParser = require("body-parser");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  port: "3306",
  database: "class_system",
});
connection.connect();

// app.post("/", (req, res, next) => {
//   // connection.query("SELECT * from class_info", function(error, result) {
//   //   console.log("The solution is: ", result);
//   // });
//   res.send("数据返回");
// });

// app.listen(8080, function() {
//   console.log("CORS-enabled web server listening on port 8000");
// });

var express = require("express");
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  主页输出 "Hello World"
// app.get("/", function(req, res) {
//   console.log("主页 GET 请求");
//   // connection.query("SELECT * from class_info", function(error, result) {
//   //   console.log("The solution is: ", result);
//   // });
//   res.send("Hello GET");
// });

//  POST 请求
// app.post("/", function(req, res) {
//   console.log("主页 POST 请求");
//   res.send("Hello POST");
// });

app.post("/login", function(req, res) {
  connection.query("SELECT * from teacher_info", function(error, result) {
    let admin = false;
    let body = req.body;
    admin = result.some((val, index, result) => {
      return val.user_name == body.Login_name && val.user_pwd == body.Login_password;
    });
    res.send(admin);
  });
});

//  /del_user 页面响应
app.get("/del_user", function(req, res) {
  console.log("/del_user 响应 DELETE 请求");
  res.send("删除页面");
});

//  /list_user 页面 GET 请求
app.get("/list_user", function(req, res) {
  console.log("/list_user GET 请求");
  res.send("用户列表页面");
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get("/ab*cd", function(req, res) {
  console.log("/ab*cd GET 请求");
  res.send("正则匹配");
});

var server = app.listen(8000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
