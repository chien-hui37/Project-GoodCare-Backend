var express = require("express");
var mysql = require("mysql");
var neworderproduct = express.Router();

var conn = mysql.createConnection({
  host: "goodcare.cp8ms84moy7l.ap-northeast-1.rds.amazonaws.com",
  user: "admin",
  password: "iii23265860",
  database: "Goodcare",
});

neworderproduct.post("/", function (req, res) {
  const { orderid, ordertime, id, price, productName, style, quantity } =
    req.body;
  const sql =
    "insert into orderproduct (orderid , ordertime, productid, money, name, style, amount) values (?,?,?,?,?,?,?)";
  conn.query(
    sql,
    [ orderid, ordertime, id, price, productName, style, quantity ],
    function (err, result) {
      if (err) {
        console.error(err);
        res.send("Error inserting data into database");
        return;
      }
    }
  );
  res.send("ok");
});

module.exports = neworderproduct;
