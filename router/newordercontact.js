var express = require('express')
var mysql = require('mysql')
var newordercontact = express.Router()

var conn = mysql.createConnection({
    host:'goodcare.cp8ms84moy7l.ap-northeast-1.rds.amazonaws.com',
    user:'admin',
    password:'iii23265860',
    database:'Goodcare'

})

newordercontact.post('/',function(req,res){
    const { memberid, orderid, ordertime, ordermoney, orderman, ordertel, orderemail, ordermanaddress, 
            orderpay, getman, gettel,getaddress,status,orderremark } = req.body;
    const sql = 'INSERT INTO ordercontact (memberid, orderid, ordertime, ordermoney, orderman, ordertel, orderemail, ordermanaddress, orderpay, getman, gettel,getaddress,status,orderremark) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    conn.query(sql, [memberid, orderid, ordertime, ordermoney, orderman, ordertel, orderemail, ordermanaddress, orderpay, getman, gettel,getaddress,status,orderremark],
    function(err, result) {
    if (err) {
        console.error(err);
        res.send('Error inserting data into database');
        return;
    }
    res.send('訂單已送出');
});
})

module.exports = newordercontact;
