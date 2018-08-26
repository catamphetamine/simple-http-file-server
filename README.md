Simple HTTP server

## Use

```sh
$ npm install simple-http-file-server --save
```

Running is easier via `npx`.

```
$ npm install npx --save
```

`npx` [doesn't currently work on Windows](https://github.com/zkat/npx/issues/144) so on Windows `npx file-server` can be substituted with `node node_modules/simple-http-file-server/bin/file-server`.

Running:

```sh
$ npx file-server <root-directory> <port>
```

Will serve files from current directory on port `8080`:

```sh
$ npx file-server . 8080
```

Will serve files from current directory on port `8080`, and if the requested file is not found then it will serve `./index.html` from the root directory with HTTP Status `200`:

```sh
$ npx file-server . 8080 "{\"default\": \"./index.html\"}"
```

Will serve files from current directory on port `8080`, and if the requested file is not found then it will serve `./404.html` from the root directory with HTTP Status `404`:

```sh
$ npx file-server . 8080 "{\"404\": \"./404.html\"}"
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