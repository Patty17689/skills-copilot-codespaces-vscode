// Create web server
// Run `node comment.js` and visit `http://localhost:3000` in your browser
// Ctrl+C to stop the web server

var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var comments = [];

function serveForm(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<!doctype html>');
  res.write('<html>');
  res.write('<head><title>Comment</title></head>');
  res.write('<body>');
  res.write('<form method="POST">');
  res.write('<textarea name="comment"></textarea>');
  res.write('<br>');
  res.write('<input type="submit" value="Submit">');
  res.
