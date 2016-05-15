var express=require('express')
    ,app=express()
    ,bodyParser=require('body-parser')
    ,http=require('http')
    , logger = require('./app/helper/logger')
    , port=process.env.PORT||4000
    ,db=require('./app/model/db');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./app/controllers/register.js'));
app.use(require('./app/controllers/business.js'));
db.connect(function(){
    http.createServer(app).listen(port);
});
db.get().connection.on('connected', function () {
    logger.info('Mongoose connected' + app.port);
});

