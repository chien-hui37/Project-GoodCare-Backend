var express = require('express')
var mysql = require('mysql')
var longcarelocation = express.Router()

var conn = mysql.createConnection({
    host:'goodcare.cp8ms84moy7l.ap-northeast-1.rds.amazonaws.com',
    user:'admin',
    password:'iii23265860',
    database:'Goodcare'

})

longcarelocation.get('/',function(req,res){
    let url = 'select * from longcarelocation'
    
    if(req.params.city=== 'all') {
        conn.query('select * from longcarelocation',[],function(err,result){
            
            console.log(err)
            res.send(result)
            
        })
        
    } else {
        conn.query('select * from longcarelocation where city=? and section=?',[city,section],function(err,result){
            
            console.log(err)
            res.send(result)
            
        })

    }
})

module.exports = longcarelocation;
