
this.jsdom = require("jsdom-global")();
global.$ = global.jQuery = require("jquery");


var localStorage = require('mock-local-storage');
global.localStorage = localStorage;


const chai = require("chai");
const expect = chai.expect;
const sinon = require('sinon');

const main = require("../main");
const common = require("../common.js");

describe('Main Test', () => {

    before(function () {
        // 在所有測試開始前會執行的程式碼區塊
    });

    after(function () {
        // 在所有測試結束後會執行的程式碼區塊
    });

    beforeEach(function () {
        // 在每個 Test Case 開始前執行的程式碼區塊
    });

    afterEach(function () {
        // 在每個 Test Case 結束後執行的程式碼區塊
    });

    it('Input 123:456 Correct Score Output should 123456', () => {
        console.log(main);
        var result = main.FormatOddsType("123:456", "Correct Score");
        console.log(result);
        expect(result).to.be.equal('123456');
    });

    //it('Test mock localStorage', () => {
    //    localStorage["PreviousStakes"] = 300;
    //    //console.log(localStorage["test"]);

    //    expect(main.GetStake('s')).to.be.equal('100');
    //});

    it('Test stub function', () => {
        formatNumber = sinon.stub(common, "formatNumber");
        formatNumber.withArgs("").returns("300");
        formatNumber.withArgs("100").returns("1");

        localStorage["PreviousStakes"] = "100";

        expect(main.GetStake('s')).to.be.equal('100');

        stubFormatNumber.restore();
    });
})