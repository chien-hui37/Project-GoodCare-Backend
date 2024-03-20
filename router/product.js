var express = require('express')
var mysql = require('mysql')
var productRouter = express.Router()

var conn = mysql.createConnection({
    host:'goodcare.cp8ms84moy7l.ap-northeast-1.rds.amazonaws.com',
    user:'admin',
    password:'iii23265860',
    database:'Goodcare'

})

// All product
productRouter.get('/',function(req,res){
    conn.query('select * from product ',
    [],
    function(err,row){
        res.send(row)
    })    
})

//Single product for id
productRouter.get('/single/:id',function(req,res){
    conn.query('select * from product where id = ? ',[req.params.id],function(err,row){
        console.log(err)
        res.send(row)
    })
})

//Product for category
productRouter.get('/category/:category',function(req,res){
    conn.query('select * from product where productCategories = ? ',[req.params.category],function(err,row){
        console.log(err)
        res.send(row)
    })
})

productRouter.get('/searchproduct',function(req,res){
    const search = req.query.search
    conn.query('select * from product where productName like ? ',[`%${search}%`],function(err,row){
        console.log(err)
        res.send(row)
    })
})







// Search product
productRouter.get('/productCategories',function(req,res){
    const search = req.query.search
    conn.query('select * from product where productName like ?',
    [`%${search}%`],
    function(err,row){
        console.log(err)
        res.send(row)
    })    
})

module.exports = productRouter
