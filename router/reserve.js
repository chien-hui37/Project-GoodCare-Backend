var express = require('express')
var mysql = require('mysql')
var reserve = express.Router()




var conn = mysql.createConnection({
    host:'goodcare.cp8ms84moy7l.ap-northeast-1.rds.amazonaws.com',
    user:'admin',
    password:'iii23265860',
    database:'Goodcare'

})

reserve.post('/',function(req,res){
    const { name, gender, idcard, birthday, height, weight, relationship, situation, 
            medicalhistory, servicelocation  } = req.body;
            console.log(name)
    const sql = 'INSERT INTO reserve (name, gender, idcard, birthday, height, weight, relationship, situation, medicalhistory, servicelocation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    conn.query(sql, [name, gender, idcard, birthday, height, weight, relationship, situation, medicalhistory, servicelocation], function(err, result) {
        if (err) {
            console.error(err);
            res.send('Error inserting data into database');
            return;
        }
        // res.send('表單已送出');
    });
})

module.exports = reserve;
