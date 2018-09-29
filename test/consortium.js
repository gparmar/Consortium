// var Consortium = artifacts.require("./Consortium.sol");
// const util = require("util");
// var owner_account = "0xdc4ff10e4b969e9171c880b598720d22b6fdeebd";
// var account2 = "0x5f752b0139046a57dade7b4099d369ee03bb00ab";
// var account3 = "0xdd0a0c8fb5faa0f5cd22e3849fd2f27650ae4f99";
// var account4 = "0x760ff916dc6be5d84dd0771de46a32358559af17";
//
// var collateral1 = "123abc";
// var collateral2 = "321cba";
// var collateral3 = "231bca";
//
// var meta;
//
// contract('Consortium', function(accounts) {
//   it("Owner adds 3 members to the consortium\n\n",
//     function() {
//       return Consortium.deployed().then(function(instance){
//         meta = instance;
//         return meta.addMember(owner_account,"HDFC",{from:owner_account});
//       })
//       .then(function(result){
//         assert.equal(result.logs[0].args.memberAddress, owner_account, "Not added member");
//       })
//       .catch(function(e) {
//         console.log("error:"+util.inspect(e, {showHidden: false, depth: null}));
//       })
//       .then(function(instance){
//         return meta.addMember(account2,"Kotak",{from:owner_account});
//       })
//       .then(function(result){
//         assert.equal(result.logs[0].args.memberAddress, account2, "Not added member");
//       })
//       .catch(function(e) {
//         console.log("error:"+util.inspect(e, {showHidden: false, depth: 2}));
//       })
//       .then(function(instance){
//         return meta.addMember(account3,"ICICI",{from:owner_account});
//       })
//       .then(function(result){
//         assert.equal(result.logs[0].args.memberAddress, account3, "Not added member");
//       })
//       .catch(function(e) {
//         console.log("error:"+util.inspect(e, {showHidden: false, depth: 2}));
//       })
//     }
//   );
//   it("Non-Owner adds a member to the consortium. It should error out\n\n",
//     function() {
//       return Consortium.deployed().then(function(instance){
//         meta = instance;
//         return meta.addMember(account4,"HDFC",{from:account2});
//       })
//       .catch(function(e) {
//         console.log(""+e);
//         assert(e, ""+util.inspect(e, {showHidden: false, depth: null}));
//       })
//     }
//   );
//   it("Member 1 adds a collateral 1\n\n", function() {
//     return Consortium.deployed().then(function(instance) {
//       meta = instance;
//       return meta.addCollateral(collateral1, {from: owner_account});
//     })
//     .then(function(result){
//       assert.equal(result.valueOf(), true, "Collateral was not added successfully");
//     })
//     .catch(function(e) {
//       console.log(""+e);
//     });
//   });
//   it("Member 2 adds a collateral 2\n\n", function() {
//     return Consortium.deployed().then(function(instance) {
//       meta = instance;
//       return meta.addCollateral(collateral2, {from: account2});
//     })
//     .then(function(result){
//       //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
//     })
//     .catch(function(e) {
//       console.log(""+e);
//     });
//   });
//   it("Member 4 who is not a member of the consortium adds a collateral 3. It should error out.\n\n", function() {
//     return Consortium.deployed().then(function(instance) {
//       meta = instance;
//       return meta.addCollateral(collateral3, {from: account4});
//     })
//     .then(function(result){
//       //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
//     })
//     .catch(function(e) {
//       console.log(""+e);
//     });
//   });
//   it("Member 3 adds a collateral 1. It should error since collateral 1 is already syndicated\n\n", function() {
//     return Consortium.deployed().then(function(instance) {
//       meta = instance;
//       return meta.addCollateral(collateral1, {from: account3});
//     })
//     .then(function(result){
//       //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
//     })
//     .catch(function(e) {
//       console.log(""+e);
//     });
//   });
//   it("Collateral 2 is tried to be freed from syndication by another member. It should error out.\n\n", function() {
//     return Consortium.deployed().then(function(instance) {
//       meta = instance;
//       return meta.removeCollateral(collateral2, {from: owner_account});
//     })
//     .then(function(result){
//       //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
//     })
//     .catch(function(e) {
//       console.log(""+e);
//     });
//   });
//   it("Collateral 1 is freed from syndication by its owner\n\n", function() {
//     return Consortium.deployed().then(function(instance) {
//       meta = instance;
//       return meta.removeCollateral(collateral1, {from: owner_account});
//     })
//     .then(function(result){
//       //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
//     })
//     .catch(function(e) {
//       console.log(""+e);
//     });
//   });
//   it("Member 3 adds a collateral 1. This time it should pass.\n\n", function() {
//     return Consortium.deployed().then(function(instance) {
//       meta = instance;
//       return meta.addCollateral(collateral1, {from: account3});
//     })
//     .then(function(result){
//       //console.log("result:"+util.inspect(result, {showHidden: false, depth: null}));
//     })
//     .catch(function(e) {
//       console.log(""+e);
//     });
//   });
// });
