var express = require('express')
var mysql = require('mysql')
var ordercontact = express.Router()

var conn = mysql.createConnection({
    host:'goodcare.cp8ms84moy7l.ap-northeast-1.rds.amazonaws.com',
    user:'admin',
    password:'iii23265860',
    database:'Goodcare'

})

ordercontact.get('/',function(req,res){
    conn.query('select * from ordercontact',[],function(err,result){
        res.send(result)
        
    })
})

module.exports = ordercontact;
