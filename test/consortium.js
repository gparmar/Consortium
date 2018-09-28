var Consortium = artifacts.require("./Consortium.sol");
const util = require("util");
var owner_account = "0xdc4ff10e4b969e9171c880b598720d22b6fdeebd";
var account2 = "0x5f752b0139046a57dade7b4099d369ee03bb00ab";
var account3 = "0xdd0a0c8fb5faa0f5cd22e3849fd2f27650ae4f99";
var account4 = "0x760ff916dc6be5d84dd0771de46a32358559af17";

var collateral1 = "123abc";
var collateral2 = "321cba";

var meta;

contract('Consortium', function(accounts) {
  it("Add 3 members to the consortium",
    function() {
      return Consortium.deployed().then(function(instance){
        meta = instance;
        return meta.addMember(owner_account,"HDFC",{from:owner_account});
      })
      .then(function(result){
        //console.log("result:"+util.inspect(result, {showHidden: false, depth: 3}));
      })
      .catch(function(e) {
        console.log("error:"+util.inspect(e, {showHidden: false, depth: null}));
      })
      .then(function(instance){
        return meta.addMember(account2,"Kotak",{from:owner_account});
      })
      .then(function(result){
        //console.log("result:"+util.inspect(result, {showHidden: false, depth: 2}));
      })
      .catch(function(e) {
        console.log("error:"+util.inspect(e, {showHidden: false, depth: 2}));
      })
      .then(function(instance){
        return meta.addMember(account3,"ICICI",{from:owner_account});
      })
      .then(function(result){
        //console.log("result:"+util.inspect(result, {showHidden: false, depth: 2}));
      })
      .catch(function(e) {
        console.log("error:"+util.inspect(e, {showHidden: false, depth: 2}));
      })
    }
  );
  it("Member 1 adds a collateral 1", function() {
    return Consortium.deployed().then(function(instance) {
      meta = instance;
      return meta.addCollateral(collateral1, {from: owner_account});
    })
    .then(function(result){
      //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
    })
    .catch(function(e) {
      console.log("error:"+util.inspect(e, {showHidden: false, depth: null}));
    });
  });
  it("Member 2 adds a collateral 2", function() {
    return Consortium.deployed().then(function(instance) {
      meta = instance;
      return meta.addCollateral(collateral2, {from: account2});
    })
    .then(function(result){
      //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
    })
    .catch(function(e) {
      console.log("error:"+util.inspect(e, {showHidden: false, depth: null}));
    });
  });
  it("Member 3 adds a collateral 1. It should error since collateral 1 is already syndicated", function() {
    return Consortium.deployed().then(function(instance) {
      meta = instance;
      return meta.addCollateral(collateral1, {from: account3});
    })
    .then(function(result){
      //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
    })
    .catch(function(e) {
      console.log("error:"+util.inspect(e, {showHidden: false, depth: null}));
    });
  });
  it("Collateral 1 is freed from syndication", function() {
    return Consortium.deployed().then(function(instance) {
      meta = instance;
      return meta.removeCollateral(collateral1, {from: owner_account});
    })
    .then(function(result){
      //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
    })
    .catch(function(e) {
      console.log("error:"+util.inspect(e, {showHidden: false, depth: null}));
    });
  });
  it("Member 3 adds a collateral 1. This time it should pass.", function() {
    return Consortium.deployed().then(function(instance) {
      meta = instance;
      return meta.addCollateral(collateral1, {from: account3});
    })
    .then(function(result){
      //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
    })
    .catch(function(e) {
      console.log("error:"+util.inspect(e, {showHidden: false, depth: null}));
    });
  });
});
