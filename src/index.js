/*
index.js is the entry point to the Elevate web app server, which uses the 
Express web server framework.
*/

// Imports

var express = require('express');
var path = require('path'); // join file path strings
var morgan = require('morgan'); // HTTP request logger
var bodyparser = require('body-parser'); // parses/stores req elems in req.body
var socketio = require('socket.io'); // WebSocket support

// Express app/middleware init/config

var app = express();

// the launch script will set NODE_ENV; set Express's 'env' var appropriately
if (process.env.NODE_ENV === 'production') {
    app.set('env', 'production');
    morgan = undefined; // morgan: disables HTTP req logging
} else if (process.env.NODE_ENV === 'development') {
    app.set('env', 'development');
    app.use(morgan('combined')); // morgan: enables HTTP req logging
}

// store the newly-set 'env' variable: 'production' or 'development'
const DEBUG_LEVEL = app.get('env');

// ejs: set up the view-rendering engine (renders/serves HTML to browsers)
app.set('views', path.join(__dirname, 'public/templates'));
app.set('view engine', 'ejs');

// set up static file serving (images, etc.) from src/public directory
app.use(express.static('public'));

// set up the HTTP request body parser
// accept JSON and URL encoded data in HTTP request body
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended: true
}));

// Express server initialization

var server = app.listen(3000, function() {
		console.log('----------------------------------------------');
    console.log('Elevate server started, listening on port 3000');
    console.log('----------------------------------------------');
});
// socket.io: init to allow Express server to accept WebSocket connections
var websocket = socketio(server);

// Define the module's exports

module.exports = {
	expressapp: app,
	express_server: server,
	sockio: websocket,
	DEBUG_LEVEL: DEBUG_LEVEL
};
 
// Post-export initialization

// set up route handling
var routehandler = require('./routes/routehandler');
app.use('/', routehandler); // server can now handle routes

// set up socket.io connection-specific event listening/handlers
var sockethandler = require('./sockets/sockethandler');
// server can now handle WebSocket connections/data transfers
