var express = require('express')
    , cors = require('cors')
    , app = express()
    , bodyParser = require('body-parser')
    , http = require('http')
    , multer = require('multer')
    , logger = require('./app/helper/logger')
    , port = process.env.PORT || 3000
    , db = require('./app/model/db');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));
app.use(require('./app/controllers'));

db.connect(function () {
    http.createServer(app).listen(port);
});
db.get().connection.on('connected', function () {
    logger.info('Mongoose connected' + app.port);
});

