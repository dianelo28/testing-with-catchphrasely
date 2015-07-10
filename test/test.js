var request = require('request')
  , expect = require('chai').expect

// DESCRIBE WHAT WE ARE TESTING
  // SAY WHAT BEHAVIOR 'IT' AUGHT TO HAVE
    // SEND THE REQUEST
      // USE CHAI-EXPECT TO EXPECT THE STATUS RESULT
      // CHECK FALSE VALUE TO SEE IF WE CAN MAKE TEST FAIL
      // CALL DONE();


//get passes 
describe('localhost:3000/phrases', function() {
  it('should allow put request', function(done) {
    request.get('http://localhost:3000/phrases', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      console.log(err, res, body)
      done();
    })
  })
});

//should and does pass
describe('localhost:3000/phrases', function() {
  it('should say "Hello"', function(done) {
    request.post('http://localhost:3000/phrases', function(err, res, body) {
      expect({form:{phrasetemplate:'Hello'}})
      // expect(res.statusCode).to.equal(300)
      console.log(err, res, body)
      done();
    })
  })
});

//shouldn't pass, but did pass...
describe('localhost:3000/phrases', function() {
  it('should say "Hello"', function(done) {
    request.post('http://localhost:3000/phrases', function(err, res, body) {
      expect({form:{phrasetemplate:'Goodbye'}})
      // expect(res.statusCode).to.equal(300)
      console.log(err, res, body)
      done();
    })
  })
});

//doesn't pass
describe('localhost:3000/phrases', function() {
  it('should allow put request', function(done) {
    request.put('http://localhost:3000/phrases/10', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      console.log(err, res, body)
      done();
    })
  })
});

//doesn't pass, comes back with expeced status code 500
describe('localhost:3000/phrases', function() {
  it('should allow put request', function(done) {
    request.put('http://localhost:3000/phrases/1', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      console.log(err, res, body)
      done();
    })
  })
});

//passes, finds ID 2
describe('localhost:3000/phrases', function() {
  it('should allow put request 2', function(done) {
    request.put('http://localhost:3000/phrases/2', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      console.log(err, res, body)
      done();
    })
  })
});

//passes...but should it?
describe('localhost:3000/phrases', function() {
  it('should allow delete request', function(done) {
    request.del('http://localhost:3000/phrases/15', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      console.log(err, res, body)
      done();
    })
  })
});

var request = require('request')
  , expect = require('chai').expect
  , cheerio = require('cheerio')

var baseUrl = 'http://localhost:3000';

describe('Google.com', function() {
  it('should have a title of "Google"', function(done) {
    request('https://google.com/', function(err, res, body) {
      var $ = cheerio.load(body);
      var title = $('title').text();
      expect(title).to.equal('Google');
      // expect(title).to.equal('Moogle');
      done();
    })
  })
});