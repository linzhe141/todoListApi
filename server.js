var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var bodyParser = require('body-parser')
const JwtUtil = require('./jwt')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

var routes = require('./app/routes/routes')

app.use(function(req, res, next) {
    console.log(req.url)
    console.log(req.url != '/login' && req.url != '/register')
    if (req.url != '/login' && req.url != '/register') {
        let token = req.headers.token;
        let jwt = new JwtUtil(token);
        let result = jwt.verifyToken();
        //console.log(token)
        // 如果考验通过就next，否则就返回登陆信息不正确
        if (result == 'err') {
            console.log(result);
            res.send({status: 403, msg: '登录已过期,请重新登录'});
        } else {
            next();
        }
    } else {
        next();
    }

});
routes(app)
app.use(function(req, res){
    res.status(404).send({url: req.originalUrl + ' not found'})
})
app.listen(port)

console.log('BS list RESTful API server started on: '+ port)