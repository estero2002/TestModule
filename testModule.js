var uuid = require('uuid/v1');

function TestModule (options) {
	console.log('Test Module');
}

TestModule.prototype.stop = function () {
  uuid();
};

module.exports = TestModule;
