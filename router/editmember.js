var express = require('express')
var mysql = require('mysql')
var editmember = express.Router()

var conn = mysql.createConnection({
    host:'goodcare.cp8ms84moy7l.ap-northeast-1.rds.amazonaws.com',
    user:'admin',
    password:'iii23265860',
    database:'Goodcare'

})

editmember.post('/',function(req,res){
    const {  email, address, tel,account,password } = req.body;
    const sql = 'UPDATE member SET email=?, address=?, tel=?,account=?,password=?';
    conn.query(sql, [ email, address, tel,account,password], function(err, result) {
        if (err) {
            console.error(err);
            res.send('Error updating data in the database');
            return;
        }
        res.send('表單已送出');
    });
})

module.exports = editmember;
