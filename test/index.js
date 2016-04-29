/*eslint-env node, mocha */

var expect = require("chai").expect;
var stylelint = require("stylelint");

var options = {
    configFile: "./index.js",
    syntax: "scss"
};

describe("pass.scss", function() {
    var results, errors;
    
    before(function(done) {
        stylelint.lint(Object.assign({}, options, { files: "./test/fixtures/pass.scss" }))
            .then(function(resultObject) { 
                results = JSON.parse(resultObject.output)[0];
                done();
            })
            .catch(function(err) {
                errors = err;
                done();
            });
    });

    it("should not have any errors", function() {
        expect(errors).to.not.be.ok;
    });
    
    it("should not find any linting problems with the file", function() {
        if(results.warnings.length > 0) {
            console.log(results.warnings);
        }
        
        expect(results.warnings).to.have.lengthOf(0);        
        expect(results.errored).to.not.be.ok;
    });
});

describe("fail.scss", function() {
    var results, errors;
    
    before(function(done) {
        stylelint.lint(Object.assign({}, options, { files: "./test/fixtures/fail.scss" }))
            .then(function(resultObject) { 
                results = JSON.parse(resultObject.output)[0];
                done();
            })
            .catch(function(err) {
                errors = err;
                done();
            });
    });

    it("should not have any errors", function() {
        expect(errors).to.not.be.ok;
    });
    
    it("should find linting problems with the file", function() {
        expect(results.warnings).to.have.length.above(0);        
        expect(results.errored).to.be.true;
    });
});