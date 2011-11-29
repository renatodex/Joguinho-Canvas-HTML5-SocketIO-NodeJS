// --------------------
// Starting the server
// -------------------
var express = require('express');
var app = require('express').createServer();

// Bootstraping the server

app.configure(function(){
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
});

app.configure('development', function(){
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  var oneYear = 31557600000;
  app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
  app.use(express.errorHandler());
});

// Configuring the server
var io = require('socket.io').listen(app);

app.set("view options", { layout: false });
app.set("views", __dirname + '/views'); 

app.register('.html', {
  compile: function(str, options){
    return function(locals){
      return str;
    };
  }
});

// Route Configuration
// Aqui vamos ter apenas um index com o carregamento direto do game
app.get('/', function startGame(req,res) {
	res.render('index.html');
});

app.get('/tests', function(req, res) {
  res.render('tests.html');
});

// Dispatch
app.listen(3000);
console.log('Joguinho started at 127.0.0.1:3000!');