var express = require('express')
var mysql = require('mysql')
var member = express.Router()

var conn = mysql.createConnection({
    host:'goodcare.cp8ms84moy7l.ap-northeast-1.rds.amazonaws.com',
    user:'admin',
    password:'iii23265860',
    database:'Goodcare'

})

member.get('/',function(req,res){
    conn.query('select * from member',[],function(err,result){
        res.send(result)
        
    })
})

member.post('/',function(req,res){
    const { name , birthday, gender, email, address, tel, account , pwd} = req.body
    console.log(req.body)
    const sql = 'insert into member (name , birthday, gender, email, address, tel, account , pwd) values (?,?,?,?,?,?,?,?)';
    conn.query(sql,[name , birthday, gender, email, address, tel, account , pwd],function(err,result){
        if (err) {
            console.error(err);
            res.send('Error inserting data into database');
            return;
        }
    })
    res.send('ok')
})

module.exports = member;
