Simple HTTP server

## Use

```sh
$ npm install simple-http-file-server --save
```

```sh
$ file-server <root-directory> <port>
```

Will serve files from current directory on port `8080`:

```sh
$ file-server . 8080
```

Will serve files from current directory on port `8080`, and if the requested file is not found then it will serve `./index.html` from the root directory with HTTP Status `200`:

```sh
$ file-server . 8080 "{\"default\": \"./index.html\"}"
```

Will serve files from current directory on port `8080`, and if the requested file is not found then it will serve `./404.html` from the root directory with HTTP Status `404`:

```sh
$ file-server . 8080 "{\"404\": \"./404.html\"}"
```

## API

```js
import createServer from 'simple-http-file-server'

createServer({
  root: '/path/to/directory',
  options: {
    ...
  }
}).listen('8888', () => console.log('Static file server listening at http://localhost:8888'))
```