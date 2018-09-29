var Consortium = artifacts.require("./Consortium.sol");
const util = require("util");
var common = require("./common");
var meta;
var owner_account = common.owner_account;
var account2 = common.account2;
var account3 = common.account3;
var account4 = common.account4;
var collateral1 = common.collateral1;
var collateral2 = common.collateral2;
var collateral3 = common.collateral3;

contract('Consortium', async (accounts) => {
  it("Owner adds 3 members to the consortium\n\n",
    async () => {
        let instance = await Consortium.deployed();
        let msg = await instance.addMember(owner_account,"HDFC",{from:owner_account});
        assert.equal(msg.logs[0].args.memberAddress,owner_account,  "Member add failed");
        msg = await instance.addMember(account2,"Kotak",{from:owner_account});
        assert.equal(msg.logs[0].args.memberAddress,account2,  "Member add failed");
        msg = await instance.addMember(account3,"ICICI",{from:owner_account});
        assert.equal(msg.logs[0].args.memberAddress,account3,  "Member add failed");
        // msg = await instance.addCollateral(collateral1,{from:owner_account});
        // assert.equal(msg.receipt.status, 0x1, "Collateral was not added successfully");
    });
  });
  // it("Non-Owner adds a member to the consortium. It should error out\n\n",
  //   async() => {
  //     try {
  //       let instance = await Consortium.deployed();
  //       let msg = await instance.addMember(account4,"HDFC",{from:account2});
  //     } catch(error) {
  //       assert.equal(error,"Error: VM Exception while processing transaction: revert Only the creator of the consortium can add a member","Expected error did not match");
  //     }
  // });
  // it("Member 1 adds a collateral 1\n\n", async() => {
  //   let instance = await Consortium.deployed();
  //   // let msg = await instance.addMember(owner_account,"HDFC",{from:owner_account});
  //   // assert.equal(msg.logs[0].args.memberAddress,owner_account,  "Member add failed");
  //   // msg = await instance.addMember(account2,"Kotak",{from:owner_account});
  //   // assert.equal(msg.logs[0].args.memberAddress,account2,  "Member add failed");
  //   // msg = await instance.addMember(account3,"ICICI",{from:owner_account});
  //   // assert.equal(msg.logs[0].args.memberAddress,account3,  "Member add failed");
  //   let msg =
  //   //await instance.addMember(owner_account,"HDFC",{from:owner_account});
  //   await instance.members(account2);
  //   console.log("result:"+util.inspect(msg, {showHidden: false, depth: null}));
  //   //await instance.addCollateral(collateral1,{from:owner_account});
  //   assert.equal(msg.valueOf(), true, "Collateral was not added successfully");
  //   // return Consortium.deployed().then(function(instance) {
  //   //   meta = instance;
  //   //   return meta.addCollateral(collateral1, {from: owner_account});
  //   // })
  //   // .then(function(result){
  //   //   console.log("result:"+util.inspect(result, {showHidden: false, depth: 2}));
  //   //   assert.equal(result.valueOf(), true, "Collateral was not added successfully");
  //   // })
  //   // .catch(function(e) {
  //   //   console.log(""+e);
  //   // });
  // });
  // it("Member 2 adds a collateral 2\n\n", function() {
  //   return Consortium.deployed().then(function(instance) {
  //     meta = instance;
  //     return meta.addCollateral(collateral2, {from: account2});
  //   })
  //   .then(function(result){
  //     //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
  //   })
  //   .catch(function(e) {
  //     console.log(""+e);
  //   });
  // });
  // it("Member 4 who is not a member of the consortium adds a collateral 3. It should error out.\n\n", function() {
  //   return Consortium.deployed().then(function(instance) {
  //     meta = instance;
  //     return meta.addCollateral(collateral3, {from: account4});
  //   })
  //   .then(function(result){
  //     //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
  //   })
  //   .catch(function(e) {
  //     console.log(""+e);
  //   });
  // });
  // it("Member 3 adds a collateral 1. It should error since collateral 1 is already syndicated\n\n", function() {
  //   return Consortium.deployed().then(function(instance) {
  //     meta = instance;
  //     return meta.addCollateral(collateral1, {from: account3});
  //   })
  //   .then(function(result){
  //     //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
  //   })
  //   .catch(function(e) {
  //     console.log(""+e);
  //   });
  // });
  // it("Collateral 2 is tried to be freed from syndication by another member. It should error out.\n\n", function() {
  //   return Consortium.deployed().then(function(instance) {
  //     meta = instance;
  //     return meta.removeCollateral(collateral2, {from: owner_account});
  //   })
  //   .then(function(result){
  //     //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
  //   })
  //   .catch(function(e) {
  //     console.log(""+e);
  //   });
  // });
  // it("Collateral 1 is freed from syndication by its owner\n\n", function() {
  //   return Consortium.deployed().then(function(instance) {
  //     meta = instance;
  //     return meta.removeCollateral(collateral1, {from: owner_account});
  //   })
  //   .then(function(result){
  //     //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
  //   })
  //   .catch(function(e) {
  //     console.log(""+e);
  //   });
  // });
  // it("Member 3 adds a collateral 1. This time it should pass.\n\n", function() {
  //   return Consortium.deployed().then(function(instance) {
  //     meta = instance;
  //     return meta.addCollateral(collateral1, {from: account3});
  //   })
  //   .then(function(result){
  //     //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
  //   })
  //   .catch(function(e) {
  //     console.log(""+e);
  //   });
  // });
//});
