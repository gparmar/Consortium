# Consortium
This is a small Smart Contract project created to demonstrate the utility of Smart Contracts in the BFSI industry. In this industry there is a risk of lendees, fraudulently, syndicating the same asset with multiple institutions. Therefore, it becomes imperative for the members of the industry to get together and form a consortium and share data between themselves to avoid sticky situations.

## What this project demonstrates
- A member of the Consortium creates this Smart Contract. That member is the OWNER of this consortium.
- The OWNER can add other members of the consortium to the smart contract.
- Any member who is a member of the consortium can add a collateral (the asset syndicated by a lendee).
- If the collateral is already syndicated then the transaction reverts and an appropriate error is thrown.
- A collateral can be removed by the member who added it. Otherwise, an appropriate error is thrown.
- After a collateral is removed any member can add it back. Meaning that the lendee has again syndicated the asset.
