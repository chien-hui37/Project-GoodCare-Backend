var express = require('express')
var mysql = require('mysql')
var longcarelocation = express.Router()

var conn = mysql.createConnection({
    host: 'goodcare.cp8ms84moy7l.ap-northeast-1.rds.amazonaws.com',
    user: 'admin',
    password: 'iii23265860',
    database: 'Goodcare',
    multipleStatements: true
})

longcarelocation.get('/', function (req, res) {
    conn.query('select * from longcarelocation', [], function (err, row) {
        res.send(row)
    })
})

longcarelocation.get('/searchlongcare', function (req, res) {
    const city = req.query.city;
    const area = req.query.area;
    const keyword = req.query.keyword;

    conn.query
    // 'select * from clinic where name like ? ', [`%${keyword}%`]
    ('SELECT * FROM longcarelocation WHERE city LIKE ? AND section LIKE ? AND name LIKE ?', [`%${city}%`, `%${area}%`, `%${keyword}%`]
    ,
     function (err, row) {
        console.log(err)
        res.send(row)
    });
})
module.exports = longcarelocation;
