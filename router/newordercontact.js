var express = require("express");
var mysql = require("mysql");
var newordercontact = express.Router();

var conn = mysql.createConnection({
  host: "goodcare.cp8ms84moy7l.ap-northeast-1.rds.amazonaws.com",
  user: "admin",
  password: "iii23265860",
  database: "Goodcare",
});

newordercontact.post("/", function (req, res) {
  const {
    orderid,
    memberid,
    ordertime,
    ordermoney,
    orderman,
    ordertel,
    orderemail,
    ordermanaddress,
    orderpay,
    getman,
    gettel,
    getaddress,
    status,
    orderremark,
    discount,
  } = req.body;
  const sql =
    "INSERT INTO ordercontact (orderid, memberid, ordertime, ordermoney, discount, orderman, ordertel, orderemail, ordermanaddress, orderpay, getman, gettel,getaddress,status,orderremark) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  conn.query(
    sql,
    [
      orderid,
      memberid,
      ordertime,
      ordermoney,
      discount,
      orderman,
      ordertel,
      orderemail,
      ordermanaddress,
      orderpay,
      getman,
      gettel,
      getaddress,
      status,
      orderremark,
    ],
    function (err, result) {
      if (err) {
        console.error(err);
        res.send("Error inserting data into database");
        return;
      }
      res.send("訂單資料已送出");
    }
  );
});

module.exports = newordercontact;
