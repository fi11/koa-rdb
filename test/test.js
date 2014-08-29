var request = require('supertest');
var expect = require('chai').expect;
var koa = require('koa');
var rdb = require('../index');

describe('Setup tests', function() {
    it('Should have pool', function(done) {
        var app = koa();

        app.use(rdb());
        app.use(function *() {
            expect(this.app.rethinkdb.acquire).to.exist;
            this.body = 'ok';
        });

        request(app.listen())
            .get('/')
            .expect(200)
            .end(done);
    });

    it('Should have rdbRun method', function(done) {
        var app = koa();

        app.use(rdb());
        app.use(function *() {
            expect(this.rdbRun).to.exist;
            this.body = 'ok';
        });

        request(app.listen())
            .get('/')
            .expect(200)
            .end(done);
    });
});
