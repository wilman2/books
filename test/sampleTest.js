var assert = require('assert');
var request = require('supertest');

var app = require('../index.js');

// var sum = require('./sum');

// describe('Math in JS', function() {
//    it('should support addition', function(done) {
//        setTimeout(function() {
//            assert.equal(sum(1,1), 2);
//            done();
//        }, 100);
//
//    })
// });

// describe('POST /stock', function() {
//     it('Stock should return received data in json', function(done) {
//         request(app)
//             .post('/stock')
//             .send({
//                 isbn: '111',
//                 count: 10
//             })
//             .expect(200, {
//                 isbn: '111',
//                 count: 10
//             }, done);
//     });
// });