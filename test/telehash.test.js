var expect = require('chai').expect;
var telehash = require('../telehash.js');

describe('telehash', function(){

  it('should export an object', function(){
    expect(telehash).to.be.a('object');
  });

});