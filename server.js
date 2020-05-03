var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var bodyParser = require('body-parser')
const JwtUtil = require('./jwt')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('./app/stufile/upload', express.static('public'));

var routes = require('./app/routes/routes')

app.use(function(req, res, next) {
    if (req.url != '/login' && req.url != '/register' && !req.url.includes('/public/images/')) {
        let token = req.headers.token;
        let jwt = new JwtUtil(token);
        let result = jwt.verifyToken();
        //console.log(token)
        // 如果考验通过就next，否则就返回登陆信息不正确
        if (result == 'err') {
            res.send({status: 403, msg: '登录已过期,请重新登录'});
        } else {
            next();
        }
    } else {
        next();
    }

});
app.get('/public/images/:name',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
    res.header('Access-Control-Max-Age',1728000);//预请求缓存20天
    res.sendFile(__dirname +'/app/stufile/upload/'+req.params.name)
})
app.get('/public/images/teacher/:name',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
    res.header('Access-Control-Max-Age',1728000);//预请求缓存20天
    res.sendFile(__dirname +'/app/teacherfile/upload/'+req.params.name)
})
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
    res.header('Access-Control-Max-Age',1728000);//预请求缓存20天
    next();  
});
routes(app)

app.use(function(req, res){
    res.status(404).send({url: req.originalUrl + ' not found'})
})
app.listen(port)

console.log('BS list RESTful API server started on: '+ port)