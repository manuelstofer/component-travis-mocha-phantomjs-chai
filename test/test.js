var  myModule = require('component-travis-mocha-phantomjs-chai');

describe('test setup', function () {
    it('should work', function () {
        true.should.not.equal(false);
    });
});

describe('my module', function () {
    it('should return true', function () {
        myModule().should.equal(true);
    });
});

