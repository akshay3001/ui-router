express = require( 'express' );
var mongoose = require( 'mongoose' );
var bodyParser = require( 'body-parser' );
var path = require('path');
var config = require('./config');

var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var db;


if ( process.env.ENV === 'Test' ) {
   mongoose.Promise = global.Promise;
  var db = mongoose.connect( config.database );
} else {
  var db = mongoose.connect( config.database );
}

var User = require( './models/userModels' );
app  = express();

app.use(bodyParser.json());
server = require('http').createServer(app)
io = require('socket.io').listen(server)

app.use(express.static('public'))
var port = config.PORT;

app.use( bodyParser.urlencoded({ extended : true }));
app.use( bodyParser.json());


authenticatRouter = require( './routes/authentication' )( User )
userRouter = require( './routes/userRoutes' )( User );

app.use( '/api/authenticat', authenticatRouter);
app.use( '/api/user', userRouter);

app.use(express.static('public'));


server.listen(port, function() {
    console.log("App is running on port " + port);
});

module.exports = app;



