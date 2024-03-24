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
    const { applyname, email, phone, relationship, name, gender, birthday, height, weight, servicelocation, situation, 
            medicalhistory} = req.body;
            console.log(name)

    
    const sql = 'INSERT INTO reserve (applyname, email, phone, relationship, name, gender, birthday, height, weight, servicelocation, situation, medicalhistory) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    conn.query(sql, [applyname, email, phone, relationship, name, gender, birthday, height, weight, servicelocation, situation, medicalhistory ], function(err, result) {
        if (err) {
            console.error(err);
            res.send('Error inserting data into database');
            return;
        }
        res.send('ok')
    });
})

module.exports = reserve;