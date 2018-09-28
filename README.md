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
8. Open the test/consortium.js file in your favorite editor and replace the account ids of four accounts defined at the top: owner_account, account2, account3 and account4 from the first four account ids that you see in the ganache window.
9. Now, run the test command to execute the tests:
> truffle test
10. From the output of the test you should see an output like this:
```
Compiling ./contracts/Consortium.sol...
Compiling ./contracts/Migrations.sol...


  Contract: Consortium
    ✓ Owner adds 3 members to the consortium

 (107ms)
error:Error: VM Exception while processing transaction: revert Only the creator of the consortium can add a member
    at Object.InvalidResponse (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/errors.js:38:1)
    at /usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/requestmanager.js:86:1
    at /usr/local/lib/node_modules/truffle/build/webpack:/packages/truffle-provider/wrapper.js:134:1
    at XMLHttpRequest.request.onreadystatechange (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/httpprovider.js:128:1)
    at XMLHttpRequestEventTarget.dispatchEvent (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:64:1)
    at XMLHttpRequest._setReadyState (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:354:1)
    at XMLHttpRequest._onHttpResponseEnd (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:509:1)
    at IncomingMessage.<anonymous> (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:469:1)
    at emitNone (events.js:111:20)
    at IncomingMessage.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)
    at process._tickCallback (internal/process/next_tick.js:180:9)
    ✓ Non-Owner adds a member to the consortium. It should error out


    ✓ Member 1 adds a collateral 1

 (43ms)
    ✓ Member 2 adds a collateral 2

 (107ms)
error:Error: VM Exception while processing transaction: revert You are not a member of this consortium
    at Object.InvalidResponse (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/errors.js:38:1)
    at /usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/requestmanager.js:86:1
    at /usr/local/lib/node_modules/truffle/build/webpack:/packages/truffle-provider/wrapper.js:134:1
    at XMLHttpRequest.request.onreadystatechange (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/httpprovider.js:128:1)
    at XMLHttpRequestEventTarget.dispatchEvent (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:64:1)
    at XMLHttpRequest._setReadyState (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:354:1)
    at XMLHttpRequest._onHttpResponseEnd (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:509:1)
    at IncomingMessage.<anonymous> (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:469:1)
    at emitNone (events.js:111:20)
    at IncomingMessage.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)
    at process._tickCallback (internal/process/next_tick.js:180:9)
    ✓ Member 4 who is not a member of the consortium adds a collateral 3. It should error out.


error:Error: VM Exception while processing transaction: revert This collateral is already syndicated.
    at Object.InvalidResponse (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/errors.js:38:1)
    at /usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/requestmanager.js:86:1
    at /usr/local/lib/node_modules/truffle/build/webpack:/packages/truffle-provider/wrapper.js:134:1
    at XMLHttpRequest.request.onreadystatechange (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/httpprovider.js:128:1)
    at XMLHttpRequestEventTarget.dispatchEvent (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:64:1)
    at XMLHttpRequest._setReadyState (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:354:1)
    at XMLHttpRequest._onHttpResponseEnd (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:509:1)
    at IncomingMessage.<anonymous> (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:469:1)
    at emitNone (events.js:111:20)
    at IncomingMessage.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)
    at process._tickCallback (internal/process/next_tick.js:180:9)
    ✓ Member 3 adds a collateral 1. It should error since collateral 1 is already syndicated


error:Error: VM Exception while processing transaction: revert This collateral does not belong to you
    at Object.InvalidResponse (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/errors.js:38:1)
    at /usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/requestmanager.js:86:1
    at /usr/local/lib/node_modules/truffle/build/webpack:/packages/truffle-provider/wrapper.js:134:1
    at XMLHttpRequest.request.onreadystatechange (/usr/local/lib/node_modules/truffle/build/webpack:/~/web3/lib/web3/httpprovider.js:128:1)
    at XMLHttpRequestEventTarget.dispatchEvent (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:64:1)
    at XMLHttpRequest._setReadyState (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:354:1)
    at XMLHttpRequest._onHttpResponseEnd (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:509:1)
    at IncomingMessage.<anonymous> (/usr/local/lib/node_modules/truffle/build/webpack:/~/xhr2/lib/xhr2.js:469:1)
    at emitNone (events.js:111:20)
    at IncomingMessage.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)
    at process._tickCallback (internal/process/next_tick.js:180:9)
    ✓ Collateral 2 is tried to be freed from syndication by another member. It should error out.
    ✓ Collateral 1 is freed from syndication by its owner
    ✓ Member 3 adds a collateral 1. This time it should pass. (46ms)


  9 passing (490ms)
```
