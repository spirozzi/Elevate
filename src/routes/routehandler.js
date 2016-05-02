/*
routehandler.js exports an instance of Express's 'Router', which handles 
HTTP requests. It renders and responds with the correct EJS template based 
on the HTTP request received.
*/

// Imports

var express = require('express');
/*
Create the Router object that handles routing clients' HTTP requests. This 
router will be exported/used by the main Express app to route all HTTP reqs
*/
var router = express.Router();
// require main Express server app
var mainapp = require('../index');

// Route handlers for 'router' object

router.get('/', function(req, res) {
	res.redirect('/index');
});

router.get('/index', function(req, res) {
	res.render('index');
});

// Route handlers for non-existent routes

// catch 404s and forward to error handler
router.use(function(req, res, next) {
	var err = new Error('404 Not Found');
	err.status = 404;
	next(err);
});

// production- and development-specific error handlers
if (mainapp.DEBUG_LEVEL === 'development') {
	// error handler for development; renders error.ejs page with stack trace
	router.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
} else if (mainapp.DEBUG_LEVEL === 'production') {
	// error handler for production; no stack trace rendered to error.ejs page
	router.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: {}
		});
	});
}

// Export the router object used to route HTTP requests by the main app
module.exports = router;
