/**
 * Created by zhangji on 2017/4/27.
 */

var should = require("should");
var assert = require("assert");

describe("Test Framework", function () {
    it("Test 1", function () {
        assert.equal(true, true);
    });
    it("Test 2", function () {
        true.should.eql(true);
    });
});