/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable prefer-arrow-callback */
var supertest = require('supertest');

describe('HeroesController.create', function() {
    it('Deve criar um herói', function (done) {
      supertest(sails.hooks.http.app)
      .post('/heroes')
      .send({ name: 'test', power: 'test', age: 18, secretIdentity: "test" })
      .expect(200, done)
    });
    it('Deve listar de todos os registros', function (done) {
        supertest(sails.hooks.http.app)
        .get('/heroes')
        .expect(200, done)
    });
    it('Deve listar de todos os registros', function (done) {
        supertest(sails.hooks.http.app)
        .get('/heroesandguns')
        .expect(200, done)
    });
});