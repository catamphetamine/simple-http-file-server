#!/usr/bin/env node

import createServer from '../server'

createServer
({
  root : path.resolve(__dirname, process.argv[2] || '.'),
  port : ,
  options :
  {
    index : 'index.html',
    ...JSON.parse(process.argv[4] || '{}')
  }
})
.listen(parseInt(process.argv[3] || '8888'), () => console.log('Static file server listening at http://localhost:' + (process.argv[3] || '8888')))
