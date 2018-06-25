Simple HTTP server
==================

```sh
$ node server.js <root-directory> <port>
```

Will serve files from current directory on port `8080`:

```sh
$ node server.js . 8080
```

Will serve files from current directory on port `8080`, and if the requested file is not found then it will serve `./index.html` from the root directory with HTTP Status `200`:

```sh
$ node server.js . 8080 "{\"default\": \"./index.html\"}"
```

Will serve files from current directory on port `8080`, and if the requested file is not found then it will serve `./404.html` from the root directory with HTTP Status `404`:

```sh
$ node server.js . 8080 "{\"404\": \"./404.html\"}"
```