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
  it("A Non-Member adds a collateral to the consortium\n\n",
    async () => {
        let instance = await Consortium.deployed();
        let msg = await instance.addMember(owner_account,"HDFC",{from:owner_account});
        assert.equal(msg.logs[0].args.memberAddress,owner_account,  "Member add failed");
        msg = await instance.addMember(account2,"Kotak",{from:owner_account});
        assert.equal(msg.logs[0].args.memberAddress,account2,  "Member add failed");
        msg = await instance.addMember(account3,"ICICI",{from:owner_account});
        assert.equal(msg.logs[0].args.memberAddress,account3,  "Member add failed");
        try {
          msg = await instance.addCollateral(collateral1,{from:account4});
        } catch(e){
          assert.equal(e,
            "Error: VM Exception while processing transaction: revert You are not a member of this consortium",
            "Error not in accordance with expectation");
        }
    });
  });
