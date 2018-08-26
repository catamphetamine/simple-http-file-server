#!/usr/bin/env node

var path = require('path')
var createServer = require('../server')

createServer
({
  root: path.resolve(process.cwd(), process.argv[2] || '.'),
  options: process.argv[4] && JSON.parse(process.argv[4])
})
.listen(parseInt(process.argv[3] || '8888'), () => console.log('Static file server listening at http://localhost:' + (process.argv[3] || '8888')))
