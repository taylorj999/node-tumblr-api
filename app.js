var config = require('./config/config');
var express = require('express');
var app = express();
var routes = require('./includes/routes');
var path = require('path');

app.use(express.static(path.join(__dirname, "public")));

//set the view engine to ejs
app.set('view engine', 'ejs');

//app.use(express.bodyParser());

routes(app);

app.set('port', process.env.PORT || config.system.serverPort);

app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});


