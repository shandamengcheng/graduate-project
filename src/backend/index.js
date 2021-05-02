var mysql = require("mysql");
var cors = require("cors");
var bodyParser = require("body-parser");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  port: "3306",
  database: "class_system",
});
connection.connect();

var express = require("express");
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login", function(req, res) {
  let body = req.body;
  connection.query(
    "SELECT * from teacher_info where Login_name = ? and Login_password = ?",
    [body.username, body.password],
    function(error, result) {
      if (result.length == 0) {
        res.send({ result: "用户不存在", teacher_info: {} });
      } else {
        res.send({ result: "验证成功！", teacher_info: result[0] });
      }
    }
  );
});

// 开课单位
app.post("/search/unit", function(req, res) {
  let body = req.body;
  console.log(body);
  connection.query(
    "SELECT * from class_info where Class_starting_unit = ?",
    body.keyWord,
    function(error, result) {
      console.log(result);
      res.send(result);
    }
  );
});
// 教师
app.post("/search/teacher", function(req, res) {
  let body = req.body;
  console.log(body);
  connection.query(
    "SELECT * from class_info where Class_teacher = ?",
    body.keyWord,
    function(error, result) {
      res.send(result);
    }
  );
});
// 教室
app.post("/search/room", function(req, res) {
  let body = req.body;
  console.log(body);
  connection.query(
    "SELECT * from class_info where Class_room = ?",
    body.keyWord,
    function(error, result) {
      res.send(result);
    }
  );
});
// 课程名
app.post("/search/name", function(req, res) {
  let body = req.body;
  console.log(body);
  connection.query(
    "SELECT * from class_info where Class_name = ?",
    body.keyWord,
    function(error, result) {
      res.send(result);
    }
  );
});

app.post("/plan", function(req, res) {
  let body = req.body;
  connection.query(
    "SELECT * from plan_info where Class_id = ?",
    body.Class_id,
    function(error, result) {
      console.log({ result });
      if (result.length > 0) {
        res.send("当前计划已存在！");
      } else {
        connection.query(
          "INSERT INTO plan_info (Teacher_id, Class_id, Class_name, Class_teacher, Class_room, Class_time, Class_starting_unit, Class_type, Academic_year) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            body.Teacher_ID,
            body.Class_id,
            body.Class_name,
            body.Class_teacher,
            body.Class_room,
            body.Class_time,
            body.Class_starting_unit,
            body.Class_type,
            body.Academic_year,
          ],
          function(error, result) {
            console.log({ result1: result });
            res.send("添加计划成功！");
          }
        );
      }
    }
  );
});

var server = app.listen(8000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
