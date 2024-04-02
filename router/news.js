var express = require('express')
var mysql = require('mysql')
var news = express.Router()

var conn = mysql.createConnection({
    host:'goodcare.cp8ms84moy7l.ap-northeast-1.rds.amazonaws.com',
    user:'admin',
    password:'iii23265860',
    database:'Goodcare'

})

news.get('/',function(req,res){
    // var {keyword} = req.query;
    // if (keyword){
        //     sql += ' where title like ? or content like ? order by update desc';
        //     keyword = `%${keyword}%`;
        // }
        // conn.query(sql,[keyword,keyword],function(err,result){
            //     res.send(result)
            // })
    let sql = 'select * from news order by date desc';
    conn.query(sql,function(err,result){
        res.send(result)
    })
})


module.exports = news;
