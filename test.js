router.post('/', function(req, res) {
    // console.log(res);
    // res.send(req.body);
    var form = new formidable.IncomingForm();
    form.uploadDir = "./public/upload/temp/"; //改变临时目录
    form.parse(req, function(error, fields, files) {
        for (var key in files) {
            var file = files[key];
            var fName = (new Date()).getTime();
            switch (file.type) {
                case "image/jpeg":
                    fName = fName + ".jpg";
                    break;
                case "image/png":
                    fName = fName + ".png";
                    break;
                default:
                    fName = fName + ".png";
                    break;
            }
            console.log(file, file.size);
            var uploadDir = "./public/upload/" + fName;
            fs.rename(file.path, uploadDir, function(err) {
                if (err) {
                    res.write(err + "\n");
                    res.end();
                }
                var connection = mysql.createConnection({
                    host: '127.0.0.1',
                    user: 'root',
                    password: '111',
                    port: '3306',
                    database: 'nodesample',
                });

                connection.connect();

                var userAddSql = 'INSERT INTO userinfo(Id,UserName,UserPass) VALUES(0,?,?)';
                var userAddSql_Params = ['path', "/upload/" + fName];
                //增
                connection.query(userAddSql, userAddSql_Params, function(err, result) {
                    if (err) {
                        console.log('[INSERT ERROR] - ', err.message);
                        return;
                    }

                    console.log('--------------------------INSERT----------------------------');
                    //console.log('INSERT ID:',result.insertId);        
                    console.log('INSERT ID:', result);
                    console.log('-----------------------------------------------------------------\n\n');
                });

                connection.end();
                res.write("<img src='/upload/" + fName + "' />");
                res.end();


            })

        }
    });
});