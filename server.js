const express = require('express');
const path = require('path');
const next = require('next');
const pathMatch = require('path-match');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
const route = pathMatch();

server.use('/_next', express.static(path.join(__dirname, '.next')));
server.use('/static', express.static(path.join(__dirname, 'static')));

server.get('/', (req, res) => app.render(req, res, '/'));
server.get('/cats', (req, res) => app.render(req, res, '/cats'));
server.get('/cats/:breed', (req, res) =>
{
  const params = route('/cats/:breed')(parse(req.url).pathname);
  return app.render(req, res, '/cats/_breed', params);
});

server.get('*', (req, res) => handle(req, res));

module.exports = server;