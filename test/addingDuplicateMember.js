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
  it("Owner adds a duplicate member to the consortium\n\n",
    async () => {
      try {
        let instance = await Consortium.deployed();
        let msg = await instance.addMember(account2,"HDFC",{from:owner_account});
        msg = await instance.addMember(account2,"HDFC",{from:owner_account});
      } catch(e){
        assert.equal(e,"Error: VM Exception while processing transaction: revert The member is already added");
      }
    });
  });
