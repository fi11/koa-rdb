var rdb = require('co-rdb');

module.exports = function(connOptions, poolOptions) {
    return function *(next) {
        if (!this.app.rethinkdb) {
            this.app.rethinkdb = rdb.createPool(connOptions, poolOptions);
        }

        this.rdbRun = rdb.run.bind(this.app.rethinkdb);
        yield next;
    }
};
