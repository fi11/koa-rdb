Rethinkdb driver for [Koa](https://github.com/koajs/koa)

## Installation

```
$ npm install koa-rdb
```

## Example

```js
var rdb = require('koa-rdb');
var r = require('rethinkdb');
var koa = require('koa');
var app = koa();

app.use(rdb({ db: 'somedb'}, { max: 50 }));
app.use(function *() {
    var query = r.db('somedb').tableList();
    var res = yield this.rdbRun(query);

    this.body = res;
});
app.listen(8000);
```

## Running tests

```
$ make test
```

## Authors

  - [Pavel Silin](https://github.com/fi11)

# License

  MIT
