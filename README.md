# Consortium
This is a small Smart Contract project created to demonstrate the utility of Smart Contracts in the BFSI industry. In this industry there is a risk of lendees, fraudulently, syndicating the same asset with multiple institutions. Therefore, it becomes imperative for the members of the industry to get together and form a consortium and share data between themselves to avoid sticky situations.

## What this project demonstrates
- A member of the Consortium creates this Smart Contract. That member is the OWNER of this consortium.
- The OWNER can add other members of the consortium to the smart contract.
- Any member who is a member of the consortium can add a collateral (the asset syndicated by a lendee).
- If the collateral is already syndicated then the transaction reverts and an appropriate error is thrown.
- A collateral can be removed by the member who added it. Otherwise, an appropriate error is thrown.
- After a collateral is removed any member can add it back. Meaning that the lendee has again syndicated the asset.

## How to run the demo
1. If you don't already have truffle install it using this command:
> npm i -g truffle
2. If you don't already have ganache-cli install it using this command:
> npm i -g ganache-cli
3. Open a new terminal window start ganache-cli with the command:
> ganache-cli
4. Open another terminal window and clone this repository in a fresh directory.
5. Change into the Consortium directory.
6. Compile the Consortium Smart Contract with the following command:
> truffle compile
7. Deploy the Consortium Smart Contract with the following command:
> truffle migrate
8. Open the test/common.js file in your favorite editor and replace the account ids of four accounts defined at the top: owner_account, account2, account3 and account4 from the first four account ids that you see in the ganache window.
9. Now, run the test command to execute the tests:
> truffle test
10. From the output of the test you should see an output like this:
```
Using network 'development'.



  Contract: Consortium
    ✓ Member adds a collateral to the consortium

 (223ms)

  Contract: Consortium
    ✓ Owner adds a duplicate member to the consortium

 (73ms)

  Contract: Consortium
    ✓ Owner adds 3 members to the consortium

 (214ms)

  Contract: Consortium
    ✓ Member adds a collateral which was removed from the consortium

 (264ms)

  Contract: Consortium
    ✓ Member adds a collateral to the consortium which is already syndicated

 (207ms)

  Contract: Consortium
    ✓ Member tries to remove a wrong collateral from the consortium

 (207ms)

  Contract: Consortium
    ✓ A Non-Member adds a collateral to the consortium

 (233ms)

  Contract: Consortium
    ✓ Non-Owner adds a member to the consortium




  8 passing (2s)
```
