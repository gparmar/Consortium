pragma solidity ^0.4.22;

/*
 * Consortium is a Smart Contract which is created by one of the members of a
 * consortium of BFS instituions which come together to share data on the loans
 * they are giving. This smart contract is created to display the utility of
 * Ethereum Smart Contracts in a situation like this. Of course, it can be
 * extended to have more rich features.
 */
contract Consortium {
  // The basic structure of a collateral
  struct Collateral {
    string collateralId;
    bool syndicated;
    address syndicatedTo;
  }

  //The basic structure of a Consortium Member
  struct ConsortiumMember {
    address member;
    string name;
  }

  //A map to hold the mapping of collateral id to the Consortium member
  //holding it.
  mapping(string => ConsortiumMember) collateralsMap;

  //This is the map of all collaterals that has entered this system.
  //Some of these might not be syndicated at the current time.
  mapping(string => Collateral) collaterals;

  mapping(address => ConsortiumMember) public members;

  //The creator of the Consortium
  address public creator;

  //The name of the Consortium
  string public name;

  // Create a new ballot to choose one of `proposalNames`.
  constructor(string cname) public {
    creator = msg.sender;
    name = cname;
  }

  //The event which is raised when a member is added successfully
  event addedMember(address memberAddress, string name);

  //Adds a new member to the Consortium of Banks
  //It throws an error and reverts the transaction if the member is already
  //added or if a member other than the creator of the group adds a member.
  function addMember(address memberAddress, string memberName) public {
    //Firstly require that only the creator of the consortium can add a members
    require(msg.sender == creator, "Only the creator of the consortium can add a member");

    require (members[memberAddress].member != memberAddress, "The member is already added");
    members[memberAddress] = ConsortiumMember({member: memberAddress,
        name: memberName
    });
    emit addedMember(memberAddress, memberName);
  }

  //Adds a collateral to this Consortium
  function addCollateral(string collateralId) public
    returns (bool) {
    //First, check if this caller member is a member of this consortium
    require(members[msg.sender].member == msg.sender, "You are not a member of this consortium");
    //Second, check if there is a collateral in the system with the same collateral id
    Collateral storage existingCollateral = collaterals[collateralId];
    if (keccak256(abi.encodePacked(existingCollateral.collateralId)) == keccak256(abi.encodePacked(collateralId))) {
      //If a collateral exists and is syndicated then raise an error
      require(!existingCollateral.syndicated, "This collateral is already syndicated.");
    }
    //Add the collateral
    collateralsMap[collateralId] = members[msg.sender];
    collaterals[collateralId].collateralId = collateralId;
    collaterals[collateralId].syndicated = true;
    collaterals[collateralId].syndicatedTo = msg.sender;

    return true;
  }

  //A member removes syndication on a collateral
  function removeCollateral(string collateralId) public
    returns (bool) {
    //First, check if this caller member is a member of this consortium
    require(members[msg.sender].member == msg.sender, "You are not a member of this consortium");
    //Second, check if this collateral is with this member
    require(collateralsMap[collateralId].member == msg.sender, "This collateral does not belong to you");
    if (collateralsMap[collateralId].member != 0) {
      collateralsMap[collateralId].member = 0;
      collaterals[collateralId].syndicated = false;
      collaterals[collateralId].syndicatedTo = 0;
    }
    return true;
  }


}
