var express = require('express')
var app = express()
var bp = require('body-parser');
var cors = require('cors')

require('dotenv').config()

app.use(bp.urlencoded({extended:true}));
app.use(express.json())
app.use(express.static('public'))
app.use(cors())
// {origin: 'http://localhost:3000',credentials: true}
app.listen(8000)

var news = require('./router/news')
var product = require('./router/product')
var member = require('./router/member')
var editmember = require('./router/editmember')
var newordercontact = require('./router/newordercontact')
var neworderproduct = require('./router/neworderproduct')

//GET method
app.use('/news',news)
// app.use('/news/:offset') //limit 10 offset 10
// app.use('/policy',policy)
// app.use('/longcarelocation',longcarelocation)//
app.use('/product',product)
app.use('/member',member)


// app.use('/editmember',editmember)
// app.use('/newordercontact',newordercontact)
// app.use('/neworderproduct',neworderproduct)
