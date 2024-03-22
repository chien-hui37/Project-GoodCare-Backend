var express = require('express')
var app = express()
var bp = require('body-parser');
var cors = require('cors')

require('dotenv').config()

app.use(bp.urlencoded({extended:true}));
app.use(express.json())
app.use(express.static('public'))
app.use(cors({
    origin: 'http://localhost:3000', // 允許來自這個源的請求
    credentials: true // 允許包含認證的請求
  }))
// {origin: 'http://localhost:3000',credentials: true}
app.listen(8000,()=>{
    console.log('Server is running 8000')
})

var news = require('./router/news')
var product = require('./router/product')
var member = require('./router/member')
var editmember = require('./router/editmember')
var ordercontact = require('./router/ordercontact')
var orderproduct = require('./router/orderproduct')
var newordercontact = require('./router/newordercontact')
var neworderproduct = require('./router/neworderproduct')
var longcarelocation = require('./router/longcarelocation')
var clinic = require('./router/clinic')
// var order = require('./router/ordercontact')
// var orderproduct = require('./router/orderproduct')


//GET method
app.use('/news',news)
// app.use('/news/:offset') //limit 10 offset 10
// app.use('/policy',policy)
// app.use('/longcarelocation',longcarelocation)//
app.use('/product',product)
app.use('/member',member)
app.use('/longcarelocation',longcarelocation)
app.use('/clinic',clinic)

// order info
app.use('/newordercontact',newordercontact)
app.use('/neworderproduct',neworderproduct)
app.use('/ordercontact',ordercontact)
app.use('/orderproduct',orderproduct)



// app.use('/editmember',editmember)
